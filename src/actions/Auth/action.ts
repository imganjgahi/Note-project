import { AppAction } from "../../store/state";
import { AuthActionTypes } from "./actionType";
import { ActionModel, LoginType } from "./model";
import { AuthApi } from "./api";
import axios from '../../AxiosConfig';

export const AuthActions = {

    toggleLoginModal: (open: boolean): AppAction<ActionModel> => (dispatch, getState) => {
        dispatch({ type: AuthActionTypes.LoginModal, open  });
    },

    loginRequest: (data: LoginType): AppAction<ActionModel> => async (dispatch, getState) => {
        dispatch({type: AuthActionTypes.Login})
        try {
            const res = await AuthApi.login(data)
            if(res.data){
                dispatch({type: AuthActionTypes.LoginSuccess})
                window.localStorage.setItem("note-project", res.data.token);
                axios.defaults.headers.common['Authorization'] = `jwt ${res.data.token}` 
            }
        } catch (error) {
            dispatch({type: AuthActionTypes.LoginFail})
            console.log(error.message)
        }
        
    },
    logOutRequest: (): AppAction<ActionModel> => (dispatch, getState) => {
        dispatch({type: AuthActionTypes.LogOut});
        axios.defaults.headers.common['Authorization'] = "" 
        window.localStorage.removeItem("note-project");
    }
};

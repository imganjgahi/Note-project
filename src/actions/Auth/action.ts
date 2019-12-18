import { AppAction } from "../../store/state";
import { AuthActionTypes } from "./actionType";
import { ActionModel, LoginType } from "./model";
import { AuthApi } from "./api";
import axios from '../../AxiosConfig';

export const AuthActions = {

    //open or close login modal 
    toggleLoginModal: (open: boolean): AppAction<ActionModel> => (dispatch, getState) => {
        dispatch({ type: AuthActionTypes.LoginModal, open  });
    },

    //send request to server
    loginRequest: (data: LoginType): AppAction<ActionModel> => async (dispatch, getState) => {
        dispatch({type: AuthActionTypes.Login})
        try {
            const res = await AuthApi.login(data)
            if(res.data){
                //login was succeed
                //save token on loacalStorage
                window.localStorage.setItem("note-project", res.data.token);
                axios.defaults.headers.common['Authorization'] = `jwt ${res.data.token}` 
                dispatch({type: AuthActionTypes.LoginSuccess})
            }
        } catch (error) {
            //loagin perosses faild
            dispatch({type: AuthActionTypes.LoginFail})
            alert(error.message)
        }
        
    },


    logOutRequest: (): AppAction<ActionModel> => (dispatch, getState) => {
        //remove token from storage and axios header
        axios.defaults.headers.common['Authorization'] = "" 
        window.localStorage.removeItem("note-project");
        dispatch({type: AuthActionTypes.LogOut});
    }
};

import { AppAction } from "../../store/state";
import { AuthActionTypes } from "./actionType";
import { ActionModel, LoginType } from "./model";
import { AuthApi } from "./api";
import axios from 'axios'
import { urlGeneral, urlVersion } from "../../Utils/General/GConst";

export const AuthActions = {

    toggleLoginModal: (open: boolean): AppAction<ActionModel> => (dispatch, getState) => {
        dispatch({ type: AuthActionTypes.LoginModal, open  });
    },

    loginRequest: (data: LoginType): AppAction<ActionModel> => async (dispatch, getState) => {
        dispatch({type: AuthActionTypes.Login})
        try {
            const res = await AuthApi.login(data)
            if(res.data){
                console.log("token: ", res.data.token , " = ", res.data)
                axios.defaults.headers.common['Authorization'] = `jwt ${res.data.token}` 
            }
        } catch (error) {
            console.log(error.message)
        }
        
    },
    testAuth: (): AppAction<ActionModel> => async (dispatch, getState) => {
        const res = await axios.get(urlGeneral + urlVersion + "/notes")
    }
};

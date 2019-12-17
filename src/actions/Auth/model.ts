import { Action } from "redux";
import {AuthActionTypes} from './actionType'

export interface IAuthState {
    login: {
        loading: boolean;
        open: boolean;
        data: any;
    }
}

interface ILoginModal extends Action<string> {
    type: AuthActionTypes.LoginModal;
    open: boolean;
}
interface ILogin extends Action<string> {
    type: AuthActionTypes.Login;
}
interface ILoginSuccess extends Action<string> {
    type: AuthActionTypes.LoginSuccess;
}
interface ILoginFail extends Action<string> {
    type: AuthActionTypes.LoginFail;
}

export type ActionModel = ILoginModal
    | ILogin
    | ILoginSuccess
    | ILoginFail
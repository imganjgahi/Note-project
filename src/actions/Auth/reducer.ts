import { Reducer } from "redux";
import { AuthActionTypes } from "./actionType";
import { IAuthState, ActionModel } from "./model";

const unloadedState: IAuthState = {
    login: {
        open: false,
        loading: false,
        data: null
    }
};

export const AuthReducer: Reducer<IAuthState> = (
    state: IAuthState = unloadedState,
    action: ActionModel,
) => {
    switch (action.type) {
        case AuthActionTypes.LoginModal: {
            return {
                ...state,
                login: {
                    ...state.login,
                    open: action.open
                },
            } as IAuthState;
        }
    }
    return state;
};

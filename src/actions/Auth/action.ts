import { AppAction } from "../../store/state";
import { AuthActionTypes } from "./actionType";
import { ActionModel } from "./model";

export const AuthActions = {

    toggleLoginModal: (open: boolean): AppAction<ActionModel> => async (dispatch, getState) => {
        dispatch({ type: AuthActionTypes.LoginModal, open  });
    },
};

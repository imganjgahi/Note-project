

import { IAuthState } from '../actions/Auth/model';
import { INoteState } from '../actions/Note/model';
export interface IApplicationState {
    auth: IAuthState,
    note: INoteState
}

export type AppAction<TAction> = (dispatch: (action: TAction) => void, getState: () => IApplicationState) => void;

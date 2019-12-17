
import { AuthReducer } from "../actions/Auth/reducer";
import { NoteReducer } from "../actions/Note/reducer";

export const reducers = {
    auth: AuthReducer,
    note: NoteReducer
}
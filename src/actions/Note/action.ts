import { AppAction } from "../../store/state";
import { NoteActionTypes } from "./actionType";
import { ActionModel, CreateNoteType } from "./model";
import { NoteApi } from "./api";

export const NoteActions = {

    //fetch note list actions
    fetchNoteList: (): AppAction<ActionModel> => async (dispatch, getState) => {
        dispatch({ type: NoteActionTypes.FetchNotes });
        try {
            const res = await NoteApi.GetNotes();
            if (res.data) {
                console.log(res.data)
                dispatch({ type: NoteActionTypes.FetchNotesSuccess, data: res.data });
            }
        } catch (error) {
            dispatch({ type: NoteActionTypes.FetchNotesFail })
        }
    },

    //create note actions
    toggleCreateNoteModal: (open: boolean): AppAction<ActionModel> => (dispatch, getState) => {
        dispatch({ type: NoteActionTypes.CreateNoteModal, open });
    },

    createNoteRequest: (data: CreateNoteType): AppAction<ActionModel> => async (dispatch, getState) => {
        dispatch({ type: NoteActionTypes.CreateNote })
        try {
            const res = await NoteApi.CreateNote(data)
            if (res.data) {
                dispatch({ type: NoteActionTypes.CreateNoteSuccess })
            }
        } catch (error) {
            dispatch({ type: NoteActionTypes.CreateNoteFail })
            console.log(error.message)
        }

    }
};

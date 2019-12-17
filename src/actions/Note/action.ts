import { AppAction } from "../../store/state";
import { NoteActionTypes } from "./actionType";
import { ActionModel, CreateNoteType } from "./model";
import { NoteApi } from "./api";

export const NoteActions = {

    toggleCreateNoteModal: (open: boolean): AppAction<ActionModel> => (dispatch, getState) => {
        dispatch({ type: NoteActionTypes.CreateNoteModal, open  });
    },

    createNoteRequest: (data: CreateNoteType): AppAction<ActionModel> => async (dispatch, getState) => {
        dispatch({type: NoteActionTypes.CreateNote})
        try {
            const res = await NoteApi.CreateNote(data)
            if(res.data){
                dispatch({type: NoteActionTypes.CreateNoteSuccess})
            }
        } catch (error) {
            dispatch({type: NoteActionTypes.CreateNoteFail})
            console.log(error.message)
        }
        
    }
};

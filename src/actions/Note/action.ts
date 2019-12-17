import { AppAction } from "../../store/state";
import { NoteActionTypes } from "./actionType";
import { ActionModel, CreateNoteModel } from "./model";
import { NoteApi } from "./api";
import axios from '../../AxiosConfig'
import { urlGeneral, urlVersion } from "../../Utils/General/GConst";

export const NoteActions = {

    toggleCreateNoteModal: (open: boolean): AppAction<ActionModel> => (dispatch, getState) => {
        dispatch({ type: NoteActionTypes.CreateNoteModal, open  });
    },

    CreateNoteRequest: (data: CreateNoteModel): AppAction<ActionModel> => async (dispatch, getState) => {
        dispatch({type: NoteActionTypes.CreateNote})
        try {
            const res = await NoteApi.CreateNote(data)
            if(res.data){
                console.log(res.data)
            }
        } catch (error) {
            dispatch({type: NoteActionTypes.CreateNoteFail})
            console.log(error.message)
        }
        
    }
};

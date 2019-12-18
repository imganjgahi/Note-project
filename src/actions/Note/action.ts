import { AppAction } from "../../store/state";
import { NoteActionTypes } from "./actionType";
import { ActionModel, CreateNoteType } from "./model";
import { NoteApi } from "./api";

export const NoteActions = {
    setListPaginate: (page:number, total:number): AppAction<ActionModel> => (dispatch, getState) => {
        console.log("setListPaginate")
        dispatch({ type: NoteActionTypes.PaginateNote, page, total });

    },

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
                dispatch({ type: NoteActionTypes.CreateNoteSuccess, newNote: res.data });
                const {page, total} = getState().note.notesPaginated;
                NoteActions.setListPaginate(page, total)(dispatch, getState);
            }
        } catch (error) {
            dispatch({ type: NoteActionTypes.CreateNoteFail })
            console.log(error.message)
        }

    },

    //delete a note
    deleteNoteRequest: (noteId: string): AppAction<ActionModel> => async (dispatch, getState) => {
        dispatch({ type: NoteActionTypes.DeleteNote })
        try {
            const res = await NoteApi.DeleteNote(noteId)
            if (res.data) {
                dispatch({ type: NoteActionTypes.DeleteNoteSuccess, noteId });
                const {page, total} = getState().note.notesPaginated;
                NoteActions.setListPaginate(page, total)(dispatch, getState);
                console.log(res.data)
            }
        } catch (error) {
            dispatch({ type: NoteActionTypes.DeleteNoteFail })
            console.log(error.message)
        }

    }
};

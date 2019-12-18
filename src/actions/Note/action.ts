import { AppAction } from "../../store/state";
import { NoteActionTypes } from "./actionType";
import { ActionModel, CreateNoteType } from "./model";
import { NoteApi } from "./api";

export const NoteActions = {
    //manage notes pagination
    // it's set on total 2 notes in every page right now
    setListPaginate: (page: number, total: number): AppAction<ActionModel> => (dispatch, getState) => {
        dispatch({ type: NoteActionTypes.PaginateNote, page, total });

    },

    //fetch note list actions
    fetchNoteList: (): AppAction<ActionModel> => async (dispatch, getState) => {
        dispatch({ type: NoteActionTypes.FetchNotes });
        try {
            const res = await NoteApi.GetNotes();
            if (res.data) {
                dispatch({ type: NoteActionTypes.FetchNotesSuccess, data: res.data });
            }
        } catch (error) {
            dispatch({ type: NoteActionTypes.FetchNotesFail })
            console.log(error.message)
        }
    },

    //create note actions
    toggleCreateNoteModal: (open: boolean): AppAction<ActionModel> => (dispatch, getState) => {
        dispatch({ type: NoteActionTypes.CreateNoteModal, open });
    },

    //send reques to server
    createNoteRequest: (data: CreateNoteType): AppAction<ActionModel> => async (dispatch, getState) => {
        dispatch({ type: NoteActionTypes.CreateNote })
        try {
            const res = await NoteApi.CreateNote(data)
            if (res.data) {
                dispatch({ type: NoteActionTypes.CreateNoteSuccess, newNote: res.data });

                //manage notes pagination
                const { page, total } = getState().note.notesPaginated;
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

                //manage notes pagination
                const { page, total } = getState().note.notesPaginated;
                NoteActions.setListPaginate(page, total)(dispatch, getState);
            }
        } catch (error) {
            dispatch({ type: NoteActionTypes.DeleteNoteFail })
            console.log(error.message)
        }

    }
};

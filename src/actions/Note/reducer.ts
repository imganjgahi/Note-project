import { Reducer } from "redux";
import { NoteActionTypes } from "./actionType";
import { INoteState, ActionModel } from "./model";

const unloadedState: INoteState = {
    

    notesPaginated: {
        page: 0,
        total: 2,
        list: []
    },
    //fetch
    notesList: {
        loading: false,
        data: []
    },

    //create
    createNote: {
        open: false,
        loading: false
    },
    
    //delete
    deleteNote: {
        loading: false
    }
};

export const NoteReducer: Reducer<INoteState> = (
    state: INoteState = unloadedState,
    action: ActionModel,
) => {
    switch (action.type) {

        //PaginateNote cases
        case NoteActionTypes.PaginateNote: {
            let {page, total} = action
            //back to previos page if notes length was less than total request
            if((page * total) >= state.notesList.data.length){
                if(page > 0)
                {
                    page--
                }
            }
            const updatedList = [...state.notesList.data].splice((page * total), total)
            return {
                ...state,
                notesPaginated: {
                    ...state.notesPaginated,
                    page: page,
                    total: action.total,
                    list: updatedList
                },
            } as INoteState;
        }


        //fetch cases
        case NoteActionTypes.FetchNotes: {
            return {
                ...state,
                notesList: {
                    ...state.notesList,
                    loading: true
                },
            } as INoteState;
        }

        case NoteActionTypes.FetchNotesSuccess: {
            const {page, total} = state.notesPaginated
            const updatedList = action.data.slice((page * total), total)
            return {
                ...state,
                notesList: {
                    ...state.notesList,
                    loading: false,
                    data: action.data
                },
                notesPaginated: {
                    ...state.notesPaginated,
                    list: updatedList
                },
            } as INoteState;
        }
        case NoteActionTypes.FetchNotesFail: {
            return {
                ...state,
                notesList: {
                    ...state.notesList,
                    loading: false,
                },
            } as INoteState;
        }

        //create cases
        case NoteActionTypes.CreateNoteModal: {
            return {
                ...state,
                createNote: {
                    ...state.createNote,
                    open: action.open
                },
            } as INoteState;
        }
        case NoteActionTypes.CreateNote: {
            return {
                ...state,
                createNote: {
                    ...state.createNote,
                    loading: true,
                },
            } as INoteState;
        }
        case NoteActionTypes.CreateNoteSuccess: {
            const newNotesList = [...state.notesList.data]
            newNotesList.push(action.newNote)
            return {
                ...state,
                notesList: {
                    ...state.notesList,
                    data: newNotesList
                },
                isAuth: true,
                createNote: {
                    ...state.createNote,
                    loading: false,
                    open: false
                },
            } as INoteState;
        }
        case NoteActionTypes.CreateNoteFail: {
            return {
                ...state,
                createNote: {
                    ...state.createNote,
                    loading: false,
                },
            } as INoteState;
        }

        //delete notes
        case NoteActionTypes.DeleteNote: {
            return {
                ...state,
                deleteNote: {
                    ...state.deleteNote,
                    loading: true,
                },
            } as INoteState;
        }
        case NoteActionTypes.DeleteNoteSuccess: {
            const newNotesList = state.notesList.data.filter(note => note._id !== action.noteId)
            return {
                ...state,
                notesList: {
                    ...state.notesList,
                    data: newNotesList
                },
                deleteNote: {
                    ...state.deleteNote,
                    loading: false,
                },
            } as INoteState;
        }
        case NoteActionTypes.DeleteNoteFail: {
            return {
                ...state,
                deleteNote: {
                    ...state.deleteNote,
                    loading: false,
                },
            } as INoteState;
        }
    }
    return state;
};

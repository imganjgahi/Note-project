import { Reducer } from "redux";
import { NoteActionTypes } from "./actionType";
import { INoteState, ActionModel } from "./model";

const unloadedState: INoteState = {
    
    //fetch
    notesList: {
        loading: false,
        data: [
            {_id: "1", title: "note 1", content: "Content"},
            {_id: "2", title: "note 2", content: "Content"},
            {_id: "3", title: "note 3", content: "Content"},
            {_id: "4", title: "note 4", content: "Content"},
            {_id: "5", title: "note 5", content: "Content"},
            {_id: "6", title: "note 6", content: "Content"},
        ]
    },

    //create
    createNote: {
        open: false,
        loading: false
    }
};

export const NoteReducer: Reducer<INoteState> = (
    state: INoteState = unloadedState,
    action: ActionModel,
) => {
    switch (action.type) {

        //fetch case
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
            return {
                ...state,
                notesList: {
                    ...state.notesList,
                    loading: false,
                    data: action.data
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

        //create case
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
            return {
                ...state,
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
    }
    return state;
};

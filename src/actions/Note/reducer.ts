import { Reducer } from "redux";
import { NoteActionTypes } from "./actionType";
import { INoteState, ActionModel } from "./model";

const unloadedState: INoteState = {
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

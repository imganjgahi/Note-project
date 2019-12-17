import { Action } from "redux";
import {NoteActionTypes} from './actionType'


export type CreateNoteModel = {
    email: string;
    password: string;
}

export interface INoteState {
    createNote: {
        loading: boolean;
        open: boolean;
    }
}

interface ICreateNoteModal extends Action<string> {
    type: NoteActionTypes.CreateNoteModal;
    open: boolean;
}
interface ICreateNote extends Action<string> {
    type: NoteActionTypes.CreateNote;
}
interface ICreateNoteSuccess extends Action<string> {
    type: NoteActionTypes.CreateNoteSuccess;
}
interface ICreateNoteFail extends Action<string> {
    type: NoteActionTypes.CreateNoteFail;
}


export type ActionModel = ICreateNoteModal
    | ICreateNote
    | ICreateNoteSuccess
    | ICreateNoteFail
    
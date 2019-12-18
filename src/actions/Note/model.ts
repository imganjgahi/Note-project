import { Action } from "redux";
import {NoteActionTypes} from './actionType'


export type CreateNoteType = {
    title: string;
    content: string;
}
export type NotesType = {
    _id: string;
    title: string;
    content: string;
}
export interface INoteState {

    notesPaginated: {
        page: number,
        total: number;
        list: NotesType[]
    }
    notesList : {
        loading: boolean;
        data: NotesType[]
    }
    createNote: {
        loading: boolean;
        open: boolean;
    }
    deleteNote: {
        loading: boolean;
    }
}
//fetch
interface IPaginateNote extends Action<string> {
    type: NoteActionTypes.PaginateNote;
    page: number,
    total: number
}
//fetch
interface IFetchNotes extends Action<string> {
    type: NoteActionTypes.FetchNotes;
}
interface IFetchNotesSuccess extends Action<string> {
    type: NoteActionTypes.FetchNotesSuccess;
    data: NotesType[]
}
interface IFetchNotesFail extends Action<string> {
    type: NoteActionTypes.FetchNotesFail;
}

//create
interface ICreateNoteModal extends Action<string> {
    type: NoteActionTypes.CreateNoteModal;
    open: boolean;
}
interface ICreateNote extends Action<string> {
    type: NoteActionTypes.CreateNote;
}
interface ICreateNoteSuccess extends Action<string> {
    type: NoteActionTypes.CreateNoteSuccess;
    newNote: NotesType;
}
interface ICreateNoteFail extends Action<string> {
    type: NoteActionTypes.CreateNoteFail;
}

//Delete note

interface IDeleteNote extends Action<string> {
    type: NoteActionTypes.DeleteNote;
}
interface IDeleteNoteSuccess extends Action<string> {
    type: NoteActionTypes.DeleteNoteSuccess;
    noteId: string;
}
interface IDeleteNoteFail extends Action<string> {
    type: NoteActionTypes.DeleteNoteFail;
}


export type ActionModel = ICreateNoteModal
    | IPaginateNote
    | IFetchNotes
    | IFetchNotesSuccess
    | IFetchNotesFail
    | ICreateNote
    | ICreateNoteSuccess
    | ICreateNoteFail
    | IDeleteNote
    | IDeleteNoteSuccess
    | IDeleteNoteFail
    
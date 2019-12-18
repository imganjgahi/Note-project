export enum NoteActionTypes {
    PaginateNote = "Note/PaginateNote",

    //Fetch Note
    FetchNotes = "Note/FetchNotes",
    FetchNotesSuccess = "Note/FetchNotesSuccess",
    FetchNotesFail = "Note/FetchNotesFail",

    //Create note
    CreateNoteModal = "Note/CreateNoteModal",
    CreateNote = "Note/CreateNote",
    CreateNoteSuccess = "Note/CreateNoteSuccess",
    CreateNoteFail = "Note/CreateNoteFail",
    
    //Delete note
    DeleteNote = "Note/DeleteNote",
    DeleteNoteSuccess = "Note/DeleteNoteSuccess",
    DeleteNoteFail = "Note/DeleteNoteFail",
}
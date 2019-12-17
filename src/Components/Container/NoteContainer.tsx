import * as React from "react";
import { connect } from "react-redux";
import { IApplicationState } from "../../store/state";
import { INoteState, NotesType } from "../../actions/Note/model";
import { NoteActions } from "../../actions/Note/action";

type IProps =  INoteState  &  typeof NoteActions;
const NoteContainer = (props: IProps) => {

    return (
        <div className="noteList">
            {props.notesList.data.map( (note: NotesType) => {
                return(
                    <div key={note._id}>
                        <p> {note.title} </p>
                        <p> {note.content} </p>
                    </div>
                )
            })}
        </div>
    )
}

export default connect(
    (state: IApplicationState) =>  state.note,
    NoteActions,
)(NoteContainer);
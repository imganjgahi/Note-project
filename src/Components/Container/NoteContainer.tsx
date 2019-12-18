import * as React from "react";
import { connect } from "react-redux";
import { IApplicationState } from "../../store/state";
import { INoteState, NotesType } from "../../actions/Note/model";
import { NoteActions } from "../../actions/Note/action";
import NoteCard from "../NoteCard/NoteCard";
import { LinearProgress } from "@material-ui/core";

type IProps =  INoteState  &  typeof NoteActions;
const NoteContainer = (props: IProps) => {

    React.useEffect(() => {
        props.setListPaginate(0, 2)
    },[])
    console.log(props.notesPaginated)
    return (
        <div className="noteList">
            
        {props.notesList.loading && <LinearProgress variant="query" />}
            {props.notesPaginated.list.map( (note: NotesType) => {
                return(
                    <NoteCard {...props} key={note._id} note={note} />
                )
            })}
        </div>
    )
}

export default connect(
    (state: IApplicationState) =>  state.note,
    NoteActions,
)(NoteContainer);
import * as React from "react";
import { Fab } from "@material-ui/core";
import EditIcon from '@material-ui/icons/Edit';
import CreateNote from "../NoteForm/CreateNote";
import { connect } from "react-redux";
import { IApplicationState } from "../../store/state";
import { IAuthState } from "../../actions/Auth/model";
import { INoteState } from "../../actions/Note/model";
import { NoteActions } from "../../actions/Note/action";

type IProps = {
    auth: IAuthState,
    note: INoteState
} &  typeof NoteActions;

export const NoteContainer = (props: IProps) => {

    if(!props.auth.isAuth){
        return null
    }
    return (
        <React.Fragment>
            <CreateNote isActive={props.note.createNote.open} />
            <div className="addNote">
                <Fab 
                color="secondary" 
                aria-label="edit"
                onClick={() => props.toggleCreateNoteModal(true)}
                >
                <EditIcon />
                </Fab>
            </div>
        </React.Fragment>
    )
};

export default connect(
    (state: IApplicationState) => {
        return {
            auth: state.auth,
            note: state.note
        }
    },
    NoteActions,
)(NoteContainer);
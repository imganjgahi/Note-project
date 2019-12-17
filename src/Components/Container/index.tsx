import * as React from "react";
import { Fab } from "@material-ui/core";
import EditIcon from '@material-ui/icons/Edit';
import CreateNote from "../NoteForm/CreateNote";
import { connect } from "react-redux";
import { IApplicationState } from "../../store/state";
import { AuthActions } from "../../actions/Auth/action";
import { IAuthState } from "../../actions/Auth/model";

type IProps = IAuthState & typeof AuthActions;

export const NoteContainer = (props: IProps) => {

    if(!props.isAuth){
        return null
    }
    return (
        <React.Fragment>
            <CreateNote />
            <div className="addNote">
                <Fab color="secondary" aria-label="edit">
                    <EditIcon />
                </Fab>
            </div>
        </React.Fragment>
    )
};

export default connect(
    (state: IApplicationState) => state.auth,
    AuthActions,
)(NoteContainer);
import * as React from "react";
import { connect } from "react-redux";
import { IApplicationState } from "../../store/state";
import { INoteState, NotesType } from "../../actions/Note/model";
import { NoteActions } from "../../actions/Note/action";
import { IconButton, Popper, Fade, Paper, Button } from "@material-ui/core";
import {MoreVert ,  Delete} from '@material-ui/icons';

type IProps = { key: string, note: NotesType } & INoteState & typeof NoteActions;
const NoteCard = ({ note, ...props }: IProps) => {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(anchorEl ? null : event.currentTarget);
    };
    const open = Boolean(anchorEl);
    const id = open ? 'transitions-popper' : undefined;
    return (
        <div className="noteCard" key={note._id}>
            <p className="noteTile"> {note.title} </p>
            <p className="noteContent"> {note.content} </p>
            <div className="noteFooter">
                <IconButton aria-describedby={id} onClick={handleClick}>
                    <MoreVert />
                </IconButton>
                <Popper id={id} open={open} anchorEl={anchorEl} placement={'bottom-end'} transition>
                    {({ TransitionProps }) => (
                        <Fade {...TransitionProps} timeout={350}>
                            <div className="noteDelete">
                                <Button color="secondary" fullWidth startIcon={<Delete />}>
                                    Delete
                                </Button>
                            </div>
                        </Fade>
                    )}
                </Popper>
            </div>
        </div>
    )
}

export default connect(
    (state: IApplicationState) => state.note,
    NoteActions,
)(NoteCard);
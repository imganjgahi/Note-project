import * as React from "react";
import { connect } from "react-redux";
import { IApplicationState } from "../../store/state";
import { INoteState, NotesType } from "../../actions/Note/model";
import { NoteActions } from "../../actions/Note/action";
import { IconButton, Popper, Fade, Button, Snackbar, makeStyles, Theme, createStyles } from "@material-ui/core";
import {MoreVert ,  Delete, Close} from '@material-ui/icons';



const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    close: {
      padding: theme.spacing(0.5),
    },
  }),
);
type IProps = { key: string, note: NotesType } & INoteState & typeof NoteActions;
const NoteCard = ({ note, ...props }: IProps) => {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const [openSnackbar, setSnackbarOpen] = React.useState(false);

    const classes = useStyles({});
    
    const open = Boolean(anchorEl);
    const id = open ? 'transitions-popper' : undefined;


    const showMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(anchorEl ? null : event.currentTarget);
    };



    const handleDeleteClick = () => {
      setSnackbarOpen(true);
    };
  
    const handleSnackbarClose = (event: React.SyntheticEvent | React.MouseEvent, reason?: string) => {
      if (reason === 'clickaway') {
        return;
      }
  
      setSnackbarOpen(false);
    };

    const confrimDelete = (noteId: string) => {
        props.deleteNoteRequest(noteId)
        setSnackbarOpen(false);
    }

    const renderSnack = () => {
        return (
            <Snackbar
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'left',
            }}
            open={openSnackbar}
            autoHideDuration={3000}
            onClose={handleSnackbarClose}
            ContentProps={{
              'aria-describedby': 'message-id',
            }}
            message={<span id="message-id">Are You Shure?</span>}
            action={[
              <Button key="undo" color="secondary" size="small" onClick={() => confrimDelete(note._id)}>
                Confirm
              </Button>,
              <IconButton
                key="close"
                aria-label="close"
                color="inherit"
                className={classes.close}
                onClick={handleSnackbarClose}
              >
                <Close />
              </IconButton>,
            ]}
          />
        )
    } 


    
    return (
        <div className="noteCard" key={note._id}>
            <p className="noteTile"> {note.title} </p>
            <p className="noteContent"> {note.content} </p>
            <div className="noteFooter">
                <IconButton aria-describedby={id} onClick={showMenu}>
                    <MoreVert />
                </IconButton>
                <Popper id={id} open={open} anchorEl={anchorEl} placement={'bottom'} transition>
                    {({ TransitionProps }) => (
                        <Fade {...TransitionProps} timeout={350}>
                            <div className="noteDelete">
                                <Button color="secondary" 
                                fullWidth 
                                startIcon={<Delete />}
                                onClick={handleDeleteClick}
                                >
                                    Delete
                                </Button>
                            </div>
                        </Fade>
                    )}
                </Popper>
            </div>
            {renderSnack()}
        </div>
    )



    
}

 
export default connect(
    (state: IApplicationState) => state.note,
    NoteActions,
)(NoteCard);
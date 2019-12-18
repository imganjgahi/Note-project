import * as React from "react";
import { connect } from "react-redux";
import { IApplicationState } from "../../store/state";
import { INoteState, NotesType } from "../../actions/Note/model";
import { NoteActions } from "../../actions/Note/action";
import { IconButton, Button, LinearProgress } from "@material-ui/core";
import { MoreVert, Delete } from '@material-ui/icons';
import ConfirmMessage from "../../Utils/ConfrimMessege/ConfirmMessage";

type IProps = { key: string, note: NotesType } & INoteState & typeof NoteActions;
const NoteCard = ({ note, ...props }: IProps) => {
  const [toggleMore, setToggle] = React.useState<boolean>(false);
  const [confirmBox, setconfirmBox] = React.useState(false);


  const showMore = () => {
    setToggle(!toggleMore);
  };

  const handleDeleteClick = () => {
    setToggle(!toggleMore);
    setconfirmBox(true);
  };

  const confirmBoxCloseHandler = () => {
    setconfirmBox(false);
  };

  const confrimDelete = (noteId: string) => {
    props.deleteNoteRequest(noteId)
    setconfirmBox(false);
  }
  
  return (
    <div className="noteCard" key={note._id}>
      <p className="noteTile"> {note.title} </p>
      <p className="noteContent"> {note.content} </p>
      <div className="noteFooter">
        <IconButton onClick={showMore}>
          <MoreVert />
        </IconButton>
        {toggleMore && <div className="noteDelete">
          <Button color="secondary"
            fullWidth
            startIcon={<Delete />}
            onClick={handleDeleteClick}
          >
            Delete
        </Button>
        </div>}
        
        {props.deleteNote.loading && <LinearProgress variant="query" color="secondary" />}
      </div>
      <ConfirmMessage
        open={confirmBox}
        onClose={confirmBoxCloseHandler}
        onOk={() => confrimDelete(note._id)}
      />
    </div>
  )




}


export default connect(
  (state: IApplicationState) => state.note,
  NoteActions,
)(NoteCard);
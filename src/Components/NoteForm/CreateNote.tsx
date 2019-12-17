import * as React from 'react';
import { Paper, makeStyles, TextField, Button } from '@material-ui/core';
import { FormCreator, IFormProps } from '../../Utils/FormCreator';
import { connect } from "react-redux";
import { IApplicationState } from "../../store/state";
import { NoteActions } from "../../actions/Note/action";
import { INoteState } from '../../actions/Note/model';


const useStyles = makeStyles(theme => ({
    root: {
        padding: theme.spacing(3, 2),
    },
}));


type IProps = INoteState  &  typeof NoteActions & IFormProps & {
    isActive: boolean
}


const CreateNote = (props: IProps) => {


    const [showBox, setShowBox] = React.useState(false)

    React.useEffect(() => {
        if(props.isActive){
            setShowBox(true)
        } else {
            setTimeout(() => {
                setShowBox(false)
            }, 250);
        }
    },[props.isActive])


    console.log(props.isActive)
    const classes = useStyles({});
    let boxClassName = "createNoteBox"
    if (props.isActive) {
        boxClassName = "createNoteBox active";
    }
    const { getFormItem } = props
    const submitHandler = (e: any) => {
        e.preventDefault();
      const values =  props.onFormSubmit()
      console.log("values: ", values)
    }
    if(!showBox){
        return null
    }
    return (
        <div className={boxClassName}>
            <Paper className={classes.root}>
                <form className="createNoteForm" onSubmit={submitHandler}>
                    <h3>Add a new note</h3>
                    {getFormItem({
                        name: "title",
                        label: "Note Title"
                    },
                        <TextField
                            autoFocus
                            margin="dense"
                            type="text"
                            fullWidth />
                    )}
                    {getFormItem({
                        name: "content",
                        label: "Content"
                    },
                        <TextField
                            autoFocus
                            margin="dense"
                            type="text"
                            fullWidth />
                    )}
                <div className="createNoteFooter">
                    <Button color="secondary"
                        onClick={() => props.toggleCreateNoteModal(false)}
                    >Discard</Button>
                    <Button type="submit" variant="contained" color="primary">Confrim</Button>
                </div>
                </form>

            </Paper>
        </div>
    )
}


export default connect(
    (state: IApplicationState) => state.note,
    NoteActions,
)(FormCreator(CreateNote));
import * as React from 'react';
import { Paper, makeStyles, TextField, Button } from '@material-ui/core';
import { FormCreator, IFormProps } from '../../Utils/FormCreator';
import { connect } from "react-redux";
import { IApplicationState } from "../../store/state";
import { NoteActions } from "../../actions/Note/action";
import { INoteState, CreateNoteType } from '../../actions/Note/model';


const useStyles = makeStyles(theme => ({
    root: {
        padding: theme.spacing(3, 2),
    },
}));


type IProps = INoteState & typeof NoteActions & IFormProps & {
    isActive: boolean
}


const CreateNote = (props: IProps) => {


    const classes = useStyles({});
    let boxClassName = "createNoteBox"
    if (props.isActive) {
        boxClassName = "createNoteBox active";
    }

    const { getFormItem } = props;

    const submitHandler = (e: any) => {
        e.preventDefault();
        const values = props.onFormSubmit()
        if (!values.err) {
            const data: CreateNoteType = {
                title: values.data.title,
                content: values.data.content
            }
            props.createNoteRequest({ ...data });
            props.resetForm();
        }
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
                            onClick={() => {
                                props.resetForm();
                                props.toggleCreateNoteModal(false)
                            }}
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
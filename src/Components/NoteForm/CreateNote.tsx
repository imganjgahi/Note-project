import * as React from 'react';
import { Paper, makeStyles, TextField, Button, LinearProgress } from '@material-ui/core';
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
        //onFormSubmit => it is a function that return inputs value and validation error if has one 
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
            {props.createNote.loading && <LinearProgress variant="query" />}
                <form className="createNoteForm" onSubmit={submitHandler}>
                    <h3 className="noteFormTitle">Add a new note</h3>
                    {getFormItem({
                        name: "title",
                        label: "Note Title",
                        rules: [
                            {
                                required: true,
                                msg: "title filed is required"
                            }
                        ]
                    },
                        <TextField
                            autoFocus
                            margin="dense"
                            type="text"
                            fullWidth />
                    )}
                    {getFormItem({
                        name: "content",
                        label: "Content",
                        rules: [
                            {
                                required: true,
                                msg: "content filed is required"
                            }
                        ]
                    },
                        <TextField
                            autoFocus
                            margin="dense"
                            type="text"
                            fullWidth />
                    )}

                    <div className="createNoteFooter">
                        <Button color="secondary"
                        disabled={props.createNote.loading}
                            onClick={() => {
                                props.resetForm();
                                props.toggleCreateNoteModal(false)
                            }}
                        >Discard</Button>
                        <Button 
                        disabled={props.createNote.loading}
                        type="submit" 
                        variant="contained" 
                        color="primary">Confrim</Button>
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
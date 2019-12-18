import * as React from "react";
import { Fab, ButtonGroup, Button } from "@material-ui/core";
import EditIcon from '@material-ui/icons/Edit';
import CreateNote from "../NoteForm/CreateNote";
import { connect } from "react-redux";
import { IApplicationState } from "../../store/state";
import { IAuthState } from "../../actions/Auth/model";
import { INoteState } from "../../actions/Note/model";
import { NoteActions } from "../../actions/Note/action";
import NoteContainer from "./NoteContainer";

type IProps = {
    auth: IAuthState,
    note: INoteState
} & typeof NoteActions;

export const MainContainer = (props: IProps) => {
    const [listPage, setListPageNumber] = React.useState<number>(0)
    if (!props.auth.isAuth) {
        return null
    }
    React.useEffect(() => {
        if (props.auth.isAuth) {
            props.fetchNoteList();
        }
    }, [])
    let page:number = 0;
    const paginateBtn = () => props.note.notesList.data.map((_, i) => {
        if(i % props.note.notesPaginated.total === 0) {
            const pageNumber = page++
            return <Button variant={pageNumber === listPage ? "contained" : "outlined"} key={i} onClick={() => {
                setListPageNumber(pageNumber)
                props.setListPaginate(pageNumber, 2)
                console.log(pageNumber)
            }}> {pageNumber} </Button>
        }
        return null 
    })
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
            <div className="notesContainer">
                <h3 className="listHeader">Your Notes</h3>
                <NoteContainer {...props} />
            </div>
            <div className="paginate">
                <ButtonGroup color="primary" aria-label="outlined primary button group">
                    {paginateBtn()}
                    {/* {props.note.notesList.data.map((_, i) => {
                        if(i > 0 && i % props.note.notesPaginated.total === 0) {
                            const pageNumber = page++
                            return <Button onClick={() => {
                                console.log(Math.floor(i / props.note.notesPaginated.total))
                                props.setListPaginate(pageNumber, 2)
                            }}> {page} </Button>
                        }
                        return null 
                    })} */}
                </ButtonGroup>
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
)(MainContainer);
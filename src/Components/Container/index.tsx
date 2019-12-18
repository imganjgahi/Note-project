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
import GuestView from "../GuestView/GuestView";

type IProps = {
    auth: IAuthState,
    note: INoteState
} & typeof NoteActions;

export const MainContainer = (props: IProps) => {
    if (!props.auth.isAuth) {
        return <GuestView />
    }
    React.useEffect(() => {
        if (props.auth.isAuth) {
            props.fetchNoteList();
        }
    }, [])
    let page:number = 0;

    const renderPaginateBtn = () => {
        // notesList.data => the list we fetch from server
        //notesPaginated.list => the list we show it in the page
        if(props.note.notesList.data.length > props.note.notesPaginated.total){
            return props.note.notesList.data.map((_, i) => {
                if(i % props.note.notesPaginated.total === 0) {
                    const pageNumber = page++
                    return <Button 
                    variant={pageNumber === props.note.notesPaginated.page ? "contained" : "outlined"} 
                    key={i} 
                    onClick={() => {
                        props.setListPaginate(pageNumber, 2)
                    }}> {pageNumber} </Button>
                }
                return null 
            })
        }
        return null
    }

    return (
        <React.Fragment>
            <CreateNote isActive={props.note.createNote.open} />
            {!props.note.createNote.open && <div className="addNote">
                <Fab
                    color="secondary"
                    aria-label="edit"
                    onClick={() => props.toggleCreateNoteModal(true)} >
                    <EditIcon />
                </Fab>
            </div>}

            <div className="notesContainer">
                <NoteContainer {...props} />
            </div>
            <div className="paginate">
                <ButtonGroup color="primary" aria-label="outlined primary button group">
                    {renderPaginateBtn()}
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
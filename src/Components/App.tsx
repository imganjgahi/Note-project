import * as React from "react";
import Login from "./Auth/Login";
import Navbar from "./Navbar/Navbar";
import { Fab } from "@material-ui/core";
import EditIcon from '@material-ui/icons/Edit';
import  NoteContainer  from "./Container";
export const App = () => {

    return (
        <React.Fragment>

            <Navbar />
            <Login />
            
            <NoteContainer />
        </React.Fragment>
    )
};
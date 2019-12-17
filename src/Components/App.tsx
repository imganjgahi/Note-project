import * as React from "react";
import Login from "./Auth/Login";
import Navbar from "./Navbar/Navbar";
import { Fab } from "@material-ui/core";
import EditIcon from '@material-ui/icons/Edit';
export const App = () => {

    return (
        <React.Fragment>

            <Navbar />
            <Login />
            <div className="addNote">
                <Fab color="secondary" aria-label="edit">
                    <EditIcon />
                </Fab>
            </div>
        </React.Fragment>
    )
};
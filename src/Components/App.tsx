import * as React from "react";
import Login from "./Auth/Login";
import Navbar from "./Navbar/Navbar";
import { Fab } from "@material-ui/core";
import EditIcon from '@material-ui/icons/Edit';
import  MainContainer  from "./Container";
export const App = () => {

    return (
        <React.Fragment>

            <Navbar />
            <Login />
            
            <MainContainer />
        </React.Fragment>
    )
};
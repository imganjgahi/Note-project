import * as React from "react";
import Login from "./Auth/Login";
import Navbar from "./Navbar/Navbar";
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
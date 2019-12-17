import * as React from "react";
import Login from "./Auth/Login";
import  Navbar  from "./Navbar/Navbar";


export const App = () => {

    return (
        <React.Fragment>
            
            <Navbar />
            <Login />

        </React.Fragment>
    )
};
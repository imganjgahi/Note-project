import * as React from "react";
import Login from "./Auth/Login";
import { Navbar } from "./Navbar/Navbar";


export const App = () => {
    const [currentLayout, setCurrentLayout] = React.useState("")

    return (
        <React.Fragment>
            
            <Navbar />
            <p>App works</p>

        </React.Fragment>
    )
};
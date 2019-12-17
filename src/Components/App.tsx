import * as React from "react";
import Login from "./Auth/Login";


export const App = () => {
    const [currentLayout, setCurrentLayout] = React.useState("")

    return (
        <React.Fragment>
            <Login />
            <p>App works</p>

        </React.Fragment>
    )
};
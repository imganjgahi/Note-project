import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from "react-redux";
import axios from 'axios';
import configureStore from "./store/configStore";

import { App } from "./Components/App";
import "./Styles/index.scss";

const initialState = {}
const store = configureStore(initialState);
const isAuth = () => {
    const token = window.localStorage.getItem("note-project");
    if(token){
        store.getState().auth.isAuth = true
        axios.defaults.headers.common['Authorization'] = `jwt ${token}` 
    }
}

export const logOut = () => {
    window.localStorage.removeItem("note-project");
    store.getState().auth.isAuth = false;
    axios.defaults.headers.common['Authorization'] = `jwt` 
}
isAuth();
ReactDOM.render(
    <Provider store={store}> 
        <App />
    </Provider>,
    document.getElementById("app_root")
);
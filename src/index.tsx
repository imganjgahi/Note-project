import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from "react-redux";
import configureStore from "./store/configStore";

import { App } from "./Components/App";
import "./Styles/index.scss";

const initialState = {}
const store = configureStore(initialState);

ReactDOM.render(
    <Provider store={store}> 
        <App />
    </Provider>,
    document.getElementById("app_root")
);
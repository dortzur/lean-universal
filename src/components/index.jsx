import React from "react";
import {render} from "react-dom";
import configureStore from "../state/configure-store";
import AppRouter from "./app-router";

const store = configureStore();
const root = document.createElement('div');
document.body.appendChild(root);

render(
    <AppRouter store={store} history={store.history}/>
    , root);

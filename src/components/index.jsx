import React from "react";
import {render} from "react-dom";
import configureStore from "../state/configure-store";
import AppRouter from "./app-router";
const root = document.querySelector('#app');
const initialState = window.__INITIAL_STATE__;
const store = configureStore(initialState);
render(
    <AppRouter store={store} history={store.history}/>
    , root);

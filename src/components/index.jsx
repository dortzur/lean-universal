import React from "react";
import {render} from "react-dom";
import AppRouter from "./app-router";

const root = document.createElement('div');
document.body.appendChild(root);

render(
    <AppRouter/>
    , root);

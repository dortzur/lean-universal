import fs from 'fs';
import path from "path";
import React from 'react';
import {renderToString} from "react-dom/server";
import AppRouter from '../components/app-router';
import configureStore from "../state/configure-store";
const file = fs.readFileSync("./build/template.html", "utf8");

function handleRender(req, res, next) {
    const store = configureStore();
    const html = renderToString(AppRouter, {store, history: store.history});
    const document = file.replace(/<div id="app"><\/div>/, `<div id="app">${html}</div>`);
    const output = document.replace("</body>", `<script>window.baba=${store.getState()}</script>`);
    res.send(output);

}

export default handleRender;
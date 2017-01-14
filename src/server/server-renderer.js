import fs from 'fs';
import path from "path";
import React from 'react';
import {renderToString} from "react-dom/server";
import {routes} from '../components/app-router';
import configureStore from "../state/configure-store";
const file = fs.readFileSync("./build/template.html", "utf8");
import {match, RouterContext} from 'react-router'
import serialize from "serialize-javascript";

function handleRender(req, res, next) {
    match({routes, location: req.url}, (error, redirectLocation, renderProps) => {
        const store = configureStore();
        const initialState = serialize(store.getState(), {json: true});
        const html = renderToString(<RouterContext {...renderProps} store={store}/>);
        const document = file.replace(/<div id="app"><\/div>/, `<div id="app">${html}</div>`);

        const output = document.replace("</body>", `<script>window.baba=${initialState}</script>`);
        res.send(output);

    });
}

export default handleRender;
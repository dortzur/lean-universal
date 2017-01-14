import fs from 'fs';
import path from "path";
import React from 'react';
import {renderToString} from "react-dom/server";
import {routes} from '../src/components/app-router';
import configureStore from "../src/state/configure-store";
const file = fs.readFileSync("./build/template.html", "utf8");
import {match, RouterContext} from 'react-router'
import serialize from "serialize-javascript";
import {Provider} from "react-redux";
function handleRender(req, res, next) {
    match({routes, location: req.url}, (error, redirectLocation, renderProps) => {
        const store = configureStore({app: {initialized: true}});
        const initialState = serialize(store.getState(), {json: true});
        const html = renderToString(
            <Provider store={store}>
                <RouterContext {...renderProps}/>
            </Provider>
        );
        const document = file.replace(/<div id="app"><\/div>/, `<div id="app">${html}</div>`);

        const output = document.replace("<body>", `<body><script>window.__INITIAL_STATE__=${initialState}</script>`);
        res.send(output);

    });
}

export default handleRender;
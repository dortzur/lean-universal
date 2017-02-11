import fs from 'fs';
import path from "path";
import React from 'react';
import {renderToString} from "react-dom/server";
import {routes} from '../src/components/app-router';
import configureStore from "../src/state/configure-store";
const file = fs.readFileSync("./build/template.html", "utf8");
import {match} from 'react-router'
import serialize from "serialize-javascript";
import {Provider} from "react-redux";
import AsyncProps, {loadPropsOnServer} from 'async-props-promise';
function handleRender(req, res, next) {
    match({routes, location: req.url}, (error, redirectLocation, renderProps) => {
        if (error) {
            res.status(500).send(error.message)
        } else if (redirectLocation) {
            res.redirect(302, redirectLocation.pathname + redirectLocation.search)
        } else if (renderProps) {
            loadPropsOnServer(renderProps, (err, asyncProps, scriptTag) => {
                const store = configureStore({app: {initialized: true}});
                const initialState = serialize(store.getState(), {json: true});
                const html = renderToString(
                    <Provider store={store}>
                        <AsyncProps {...renderProps}{...asyncProps}/>
                    </Provider>
                );
                const document = file.replace(/<div id="app"><\/div>/, `<div id="app">${html}</div>`);

                const output = document.replace("<body>",
                    `<body><script>window.__INITIAL_STATE__=${initialState}</script>${scriptTag}`);
                res.status(200).send(output);
            });
        } else {
            res.status(404).send('Not found')
        }

    });
}

export default handleRender;
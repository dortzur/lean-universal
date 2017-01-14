import fs from 'fs';
import React from 'react';
import Transmit from 'react-transmit';
import AppRouter from '../src/components/app-router';
import configureStore from "../src/state/configure-store";

function handleRender(req, res) {
    const store = configureStore();
    return Transmit.renderToString(AppRouter, {store, history: store.history})
        .then(({reactString, reactData}) => {
            fs.readFile('./index.html', 'utf8', function (err, file) {
                if (err) {
                    return console.log(err);
                }
                const document = file.replace(/<div id="app"><\/div>/, `<div id="app">${reactString}</div>`);
                const output = Transmit.injectIntoMarkup(document, reactData, ['/build/client.js']);
                res.send(output);
            });

        })
        .catch(e => console.log(e));
}

export default handleRender;
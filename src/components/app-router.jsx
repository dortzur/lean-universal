import React from "react";

import App from "./app";

import {syncHistoryWithStore} from 'react-router-redux'
import configureStore from "../state/configure-store";
import {Router, Route, browserHistory} from 'react-router'
import {Provider} from 'react-redux'


const store = configureStore();

const history = syncHistoryWithStore(browserHistory, store);

const AppRouter = () => {
    return (
        <Provider store={store}>
            <Router history={history}>
                <Route path="/" component={App}>
                </Route>
            </Router>
        </Provider>

    );
};
export default AppRouter;
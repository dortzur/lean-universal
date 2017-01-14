import React from "react";

import App from "./app";
import Page from "./page";
import Home from "./home";
import {syncHistoryWithStore} from 'react-router-redux'
import configureStore from "../state/configure-store";
import {Router, Route, browserHistory, IndexRoute} from 'react-router'
import {Provider} from 'react-redux'


const store = configureStore();

const history = syncHistoryWithStore(browserHistory, store);

const AppRouter = () => {
    return (
        <Provider store={store}>
            <Router history={history}>
                <Route path="/" component={App}>
                    <IndexRoute component={Home}/>
                    <Route path="/page/:id" component={Page}/>
                </Route>
            </Router>
        </Provider>

    );
};
export default AppRouter;
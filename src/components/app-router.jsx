import React from "react";

import App from "./app";
import Page from "./page";
import Home from "./home";

import {Router, Route, IndexRoute} from 'react-router'
import {Provider} from 'react-redux'

const AppRouter = ({store, history}) => {
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
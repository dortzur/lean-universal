import React, {PropTypes, Component} from "react";

import App from "./app";
import Page from "./page";
import Home from "./home";

import {Router, Route, IndexRoute} from 'react-router'
import {Provider} from 'react-redux'
import {syncHistoryWithStore} from 'react-router-redux'
import {browserHistory} from "react-router";
//

class AppRouter extends React.Component {
    static propTypes = {
        store:PropTypes.object.isRequired
    };
    constructor(props) {
        super(props);
        this.history = syncHistoryWithStore(browserHistory, props.store);
    }

    render() {
        const {store}=this.props;
        return (
            <Provider store={store}>
                <Router history={this.history}>
                    <Route path="/" component={App}>
                        <IndexRoute component={Home}/>
                        <Route path="/page/:id" component={Page}/>
                    </Route>
                </Router>
            </Provider>
        );

    }

}
;
export default AppRouter;
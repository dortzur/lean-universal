import React, {PropTypes, Component} from "react";

import App from "./app";
import Page from "./page";
import Home from "./home";

import {Router, Route, IndexRoute} from 'react-router'
import {Provider} from 'react-redux'
import {syncHistoryWithStore} from 'react-router-redux'
import {browserHistory} from "react-router";
import {ReduxAsyncConnect} from 'redux-connect';
import {initialize} from '../state/modules/app-module';
import {connect} from 'react-redux';


export const routes = (<Route path="/" component={App}>
    <IndexRoute component={Home}/>
    <Route path="/page/:id" component={Page}/>
</Route>);

@connect(() => ({}), (dispatch) => ({
        init:()=> dispatch(initialize())
    })
)
class AppRouter extends React.Component {
    static propTypes = {
        store: PropTypes.object.isRequired
    };

    constructor(props) {
        super(props);
        this.history = syncHistoryWithStore(browserHistory, props.store);
    }

    componentDidMount() {
        this.props.init();
    }

    render() {
        const {store}=this.props;
        return (
            <Provider store={store}>
                <Router history={this.history} routes={routes} render={(props) => <ReduxAsyncConnect {...props}/>}/>
            </Provider>
        );

    }

}
export default AppRouter;
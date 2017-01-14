import rootReducer from "./root-reducer";

import {createStore, applyMiddleware, compose} from "redux";

import reduxThunk from "redux-thunk";
import reduxLogger from "redux-logger";
import {syncHistoryWithStore} from 'react-router-redux'
import {browserHistory} from "react-router";
import {routerMiddleware} from 'react-router-redux'

const enhancer = compose(applyMiddleware(reduxThunk, routerMiddleware(browserHistory)),
// window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
export default function configureStore(initialState) {
    const store = createStore(rootReducer, initialState, enhancer);
    store.history = syncHistoryWithStore(browserHistory, store);
    return store;
};




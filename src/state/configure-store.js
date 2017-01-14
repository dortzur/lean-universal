import rootReducer from "./root-reducer";

import {createStore, applyMiddleware, compose} from "redux";

import reduxThunk from "redux-thunk";
import reduxLogger from "redux-logger";

import {routerMiddleware} from 'react-router-redux'
import {browserHistory} from "react-router";

const enhancer = compose(applyMiddleware(reduxThunk, routerMiddleware(browserHistory)),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
export default function configureStore(initialState) {
    return createStore(rootReducer, initialState, enhancer);
};
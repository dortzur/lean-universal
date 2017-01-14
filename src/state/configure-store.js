import rootReducer from "./root-reducer";

import {createStore, applyMiddleware, compose} from "redux";

import reduxThunk from "redux-thunk";
import reduxLogger from "redux-logger";
import {browserHistory} from "react-router";
import {routerMiddleware} from 'react-router-redux'

const enhancer = compose(applyMiddleware(reduxThunk, routerMiddleware(browserHistory)));

export default function configureStore(initialState) {
    return createStore(rootReducer, initialState, enhancer);
};




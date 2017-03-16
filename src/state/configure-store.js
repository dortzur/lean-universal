import rootReducer from "./root-reducer";

import {createStore, applyMiddleware, compose} from "redux";
import reduxThunk from "redux-thunk";
// import reduxLogger from "redux-logger";
import {browserHistory} from "react-router";
import {routerMiddleware} from 'react-router-redux'


let composeEnhancers = compose;
if( global.window && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__){
    composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
}
const enhancer = composeEnhancers(applyMiddleware(reduxThunk, routerMiddleware(browserHistory)));

export default function configureStore(initialState) {
    return createStore(rootReducer, initialState, enhancer);
};




import app from "./modules/app-module";

import {combineReducers} from "redux";
import {routerReducer} from 'react-router-redux'


const rootReducer = combineReducers({
    app,
    routing: routerReducer
});
export default rootReducer;


import {applyMiddleware, combineReducers, legacy_createStore} from "redux";
import orderReducer from "./orders-reducer";
import thunkMiddleware from "redux-thunk";


let reducers = combineReducers({
    orderContent: orderReducer
});

let store = legacy_createStore(reducers, applyMiddleware(thunkMiddleware))

export default store;
import {combineReducers, legacy_createStore} from "redux";
import orderReducer from "./orders-reducer";

let reducers = combineReducers({
    orderReducer: orderReducer
});

let store = legacy_createStore(reducers)

export default store;
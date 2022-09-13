import {applyMiddleware, combineReducers, legacy_createStore} from "redux";
import orderReducer from "./orders-reducer";
import thunkMiddleware from "redux-thunk";

const reducers = combineReducers({
  orderContent: orderReducer
});

const store = legacy_createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;

export default store;
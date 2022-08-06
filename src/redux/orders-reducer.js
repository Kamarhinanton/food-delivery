import {ordersAPI} from "../api/api";

const SET_ORDERS = 'SET_ORDERS';
const SET_OFFSET = 'SET_OFFSET';

let initialState = {
    orders: [],
    offset: 0,
}

const orderReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_ORDERS :
            let newOrders = {orders: action.orders};
            let stateCopy = {...state};
            stateCopy.orders = [...state.orders];
            newOrders.orders.map(order => stateCopy.orders.push(order))
            return stateCopy;
        case SET_OFFSET:
            return {...state, offset: action.offset}
        default:
            return state;
    }
}

export default orderReducer;

export const setOrders = (orders) => ({type: SET_ORDERS, orders})
export const setOffset = (offset) => ({type: SET_OFFSET, offset})

export const getOrders= (offset) => {
    return (dispatch) => {
        ordersAPI.getOrdersAPI(offset).then(data => {
            dispatch(setOrders(data))
        })
    }
}

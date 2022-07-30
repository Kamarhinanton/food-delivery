import {ordersAPI} from "../api/api";

const SET_ORDERS = 'SET_ORDERS';

let initialState = {
    orderId: [],
}

const orderReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_ORDERS :
            return {...state, orderId: action.orderId}
        default:
            return state;
    }
}

export default orderReducer;

export const setOrderId = (orderId) => ({type: SET_ORDERS, orderId})

export const getOrders = () => (dispatch) =>{
    ordersAPI.getOrders().then(response => {
        dispatch(setOrderId(response.data));
    })
}

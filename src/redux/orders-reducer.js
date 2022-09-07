import {ordersAPI} from "../api/api";

const SET_ORDERS = "SET_ORDERS";
const SET_OFFSET = "SET_OFFSET";
const SET_TOTAL = "SET_TOTAL";

let initialState = {
  orders: [],
  offset: 0,
  limit: 2,
  total: 0,
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
    case SET_TOTAL:
      return {...state, total: action.total}
    default:
      return state;
  }
}

export default orderReducer;

export const setOrders = (orders) => ({type: SET_ORDERS, orders})
export const setOffset = (offset) => ({type: SET_OFFSET, offset})
export const setTotal = (total) => ({type: SET_TOTAL, total})

export const getOrders = (offset, limit) => {
  return (dispatch) => {
    ordersAPI.getOrdersAPI(offset, limit).then(data => {
      dispatch(setTotal(Object.keys(data)[0]))
      dispatch(setOrders(Object.values(data)[0]))
    })
  }
}

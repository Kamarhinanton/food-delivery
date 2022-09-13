import {ordersAPI} from "../api/api";

const SET_ORDERS = "SET_ORDERS";
const SET_OFFSET = "SET_OFFSET";
const SET_TOTAL = "SET_TOTAL";

const initialState = {
  orders: [],
  offset: 0,
  limit: 3,
  total: 0,
}

const orderReducer = (state = initialState, action) => {
  const {type, payload} = action
  switch (type) {
    case SET_ORDERS :
      return {
        ...state,
        orders: state.orders.concat(payload)
      }
    case SET_OFFSET:
      return {
        ...state,
        offset: payload
      }
    case SET_TOTAL:
      return {
        ...state,
        total: payload
      }
    default:
      return state;
  }
}

export default orderReducer;

export const setOrders = (orders) => ({type: SET_ORDERS, payload: orders});
export const setOffset = (offset) => ({type: SET_OFFSET, payload: offset});
export const setTotal = (total) => ({type: SET_TOTAL, payload: total});

export const getOrders = (offset, limit) => {
  return (dispatch) => {
    ordersAPI.getOrdersAPI(offset, limit).then(data => {
      dispatch(setTotal(Number(Object.keys(data)[0])));
      dispatch(setOrders(Object.values(data)[0]));
    });
  }
}

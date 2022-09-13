import {ordersAPI} from "../api/api";
import {setOrders, setTotal} from "./orders-reducer";


export const getOrders = (offset, limit) => {
  return (dispatch) => {
    ordersAPI.getOrdersAPI(offset, limit).then(data => {
      dispatch(setTotal(Number(Object.keys(data)[0])));
      dispatch(setOrders(Object.values(data)[0]));
    })
  }
}
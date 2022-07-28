import React from 'react';
import './Orders.scss'
import HeadOrder from "./HeadOrder/HeadOrder";
import Order from "./Order/Order";

const Orders = ()=> {
    return (
      <div className='orders-container'>
            <HeadOrder/>
            <Order/>
      </div>
    )
}

export default Orders;
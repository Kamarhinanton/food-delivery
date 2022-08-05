import React, {useState} from 'react';
import './Orders.scss'
import HeadOrder from "./HeadOrder/HeadOrder";
import Order from "./Order/Order";
import {useEffect} from "react";

const Orders = (props)=> {
    let addNewOrders = () => {
        let offSet = 0;
        props.getOrders(props.order.limitOrders, props.order.offset)
        props.setOffset(offSet + 5)
    }

    let orderLinks = props.order.orders.map(item => <Order
        key={item.orderId}
        orderId={item.orderId}
        // orderName={item.establishmentName}
        // orderLocation = {item.establishmentLocation}
        // orderData = {item.createDate}
        // orderCost = {item.deliveryCost}

    />)
    return (
      <div className='orders-container'>
            <HeadOrder/>
          {orderLinks}
          <div>
              <button onClick={addNewOrders}>Load more</button>
          </div>
      </div>
    )
}

export default Orders;
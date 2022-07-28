import React from 'react';
import './Orders.scss'
import HeadOrder from "./HeadOrder/HeadOrder";
import Order from "./Order/Order";

const Orders = (props)=> {
    let orderLinks = props.order.orderId.map(item => <Order
        key={item.establishmentId}
        orderId={item.establishmentId}
        orderName={item.establishmentName}
        orderLocation = {item.establishmentLocation}
        orderData = {item.createDate}
        orderCost = {item.deliveryCost}
    />)
    return (
      <div className='orders-container'>
            <HeadOrder/>
          {orderLinks}
      </div>
    )
}

export default Orders;
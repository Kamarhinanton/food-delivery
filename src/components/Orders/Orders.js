import './Orders.scss';
import HeadOrder from "./HeadOrder/HeadOrder";
import Order from "./Order/Order";
import {useEffect, useRef} from "react";

const Orders = (props)=> {
    const effectRan = useRef(false);

    useEffect(() => {
        if(effectRan.current===false){
            getMoreOrders()
            return ()=> effectRan.current = true;
        }
    });

    const getMoreOrders = () => {
        props.setOffset(props.order.offset + 5)
        props.getOrders(props.order.offset)
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
              {props.order.orders.length%5===0?<button onClick={getMoreOrders}>Load more</button>:<button disabled>Load more</button>}
          </div>
      </div>
    )
}

export default Orders;
import './Orders.scss';
import HeadOrder from "./HeadOrder/HeadOrder";
import Order from "./Order/Order";
import {useEffect, useRef, useState} from "react";

const Orders = (props)=> {
    const [offSet, setOffSet] = useState(0);
    const effectRan = useRef(false);

    useEffect(() => {
        if(effectRan.current===false){
            props.getOrders(offSet)
            setOffSet(offSet + 5)
            return ()=> effectRan.current = true;
        }
    }, [offSet]);

    const getMoreOrders = () => {
        props.getOrders(offSet)
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
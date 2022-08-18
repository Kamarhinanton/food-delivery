import './Orders.scss';
import HeadOrder from "./HeadOrder/HeadOrder";
import Order from "./Order/Order";
import {useEffect, useRef} from "react";

const Orders = (props)=> {
    // const effectRan = useRef(false);

    useEffect(() => {
            getMoreOrders()
        // if(effectRan.current===false){
        //     return ()=> effectRan.current = true;
        // }
    }, []);

    const getMoreOrders = () => {
        props.getOrders(props.order.offset, props.order.limit)
        props.setOffset(props.order.offset + props.order.limit)
    }

    const setDisabled = () => {
       return props.order.orders.length%props.order.limit===0
    }

    let orderLinks = props.order.orders.map((item, id) => <Order
        key={id}
        orderId={item.orderId}
        orderName={item.establishment.establishmentName}
        orderLocation = {item.establishment.establishmentLocation}
        orderImage = {item.establishment.imageLink}
        orderStatus = {item.orderStatus}

    />)
    return (
      <div className='orders-container'>
            <HeadOrder/>
            {orderLinks}
          <div>
              {setDisabled()?<button onClick={getMoreOrders}>Load more</button>:<button disabled>Load more</button>}
          </div>
      </div>
    )
}

export default Orders;
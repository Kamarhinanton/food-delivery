import "./Orders.scss";
import HeadOrder from "./HeadOrder/HeadOrder";
import Order from "./Order/Order";
import {useEffect} from "react";

const Orders = (props) => {
  useEffect(() => {
    getMoreOrders()
  }, []);

  const getMoreOrders = () => {
    props.getOrders(props.order.offset, props.order.limit)
    props.setOffset(props.order.offset + props.order.limit)
  }

  const setDisabled = () => {
    return props.order.orders.length == props.order.total
  }

  let orderLinks = props.order.orders.map((item, id) => <Order
    key={id}
    orderId={item.orderId}
    orderName={item.establishment.establishmentName}
    orderLocation={item.establishment.establishmentLocation}
    orderImage={item.establishment.imageLink}
    orderStatus={item.orderStatus}

  />)
  return (
    <div className="orders-container">
      <HeadOrder/>
      {orderLinks}
      <div>
        {setDisabled() ? <button disabled>Load more</button> : <button onClick={getMoreOrders}>Load more</button>}
      </div>
    </div>
  )
}

export default Orders;
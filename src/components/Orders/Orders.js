import HeadOrder from "./HeadOrder/HeadOrder";
import Order from "./Order/Order";
import {useEffect} from "react";

const Orders =
  ({
     orders,
     offset,
     limit,
     total,
     getOrders,
     setOffset
   }) => {
    useEffect(() => {
      getMoreOrders()
    }, []);

    const getMoreOrders = () => {
      getOrders(offset, limit);
      setOffset(offset + limit);
    }

    const setDisabled = () => {
      return orders.length === total;
    }

    const orderLinks = orders.map((item, id) =>
      <Order
        key={id}
        orderId={item.orderId}
        orderName={item.establishment.establishmentName}
        orderLocation={item.establishment.establishmentLocation}
        orderImage={item.establishment.imageLink}
        orderStatus={item.orderStatus}
      />);

    return (
      <>
        <HeadOrder/>
        {orderLinks}
        <div>
          {
            setDisabled() ? (
              <button disabled>
                Load more
              </button>
            ) : (
              <button onClick={getMoreOrders}>
                Load more
              </button>
            )
          }
        </div>
      </>
    );
  }

export default Orders;
import {connect} from "react-redux";
import Orders from "./Orders";
import {setOffset} from "../../redux/orders-reducer";
import {getOrders} from "../../redux/middlewares";

const OrdersContainer =
  ({
     order,
     getOrders,
     setOffset
   }) => {
    return (
      <Orders
        orders={order.orders}
        offset={order.offset}
        limit={order.limit}
        total={order.total}
        getOrders={getOrders}
        setOffset={setOffset}/>
    );
  }

const mapStateToProps = (state) => {
  return {
    order: state.orderContent,
  }
}

export default connect(mapStateToProps,
  {getOrders, setOffset})(OrdersContainer);


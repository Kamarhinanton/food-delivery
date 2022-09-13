import {connect} from "react-redux";
import Orders from "./Orders";
import {getOrders, setOffset} from "../../redux/orders-reducer";

const OrdersContainer = ({
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


import {connect} from "react-redux";
import Orders from "./Orders";
import {getOrders, setOffset} from "../../redux/orders-reducer";

const OrdersContainer = (props) => {
  return (
    <Orders order={props.order} getOrders={props.getOrders} setOffset={props.setOffset}/>
  );
}

let mapStateToProps = (state) => {
  return {
    order: state.orderContent,
  }
}

export default connect(mapStateToProps, {getOrders, setOffset})(OrdersContainer);


import {connect} from "react-redux";
import Orders from "./Orders";
import {setOrderId} from "../../redux/orders-reducer";

const OrdersContainer = (props) => {
    return (
        <Orders order = {props.order}/>
    )
}

let mapStateToProps = (state) => {
    return {
        order: state.orderContent,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        setOrderId: () => {dispatch(setOrderId())},
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(OrdersContainer);


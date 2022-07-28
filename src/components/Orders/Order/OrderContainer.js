import {connect} from "react-redux";
import Order from "./Order";

let mapStateToProps = (state) => {
    return {
        orderId: state.orderContent.orderId,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        addPost: () => {dispatch(AddPost())},
        updateNewPostText: (text) => {
            let action = updateNewPostText(text)
            dispatch(action)
        }
    }
}
//connect має свій subscribe, тому не потрібно перемальовувати(subscribe) дерево при зміні state
const OrderContainer = connect(mapStateToProps, mapDispatchToProps)(Order);


export default OrderContainer;
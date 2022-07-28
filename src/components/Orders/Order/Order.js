import '../HeadOrder/HeadOrder.scss'

const Order = (props) => {
    return(
        <div className='head-order'>
            <ul className='head-order__content light'>
                <li>{props.orderId}</li>
                <li>{props.orderName}</li>
                <li>{props.orderLocation}</li>
                <li>{props.orderCost}</li>
                <li>{props.orderData}</li>
            </ul>
        </div>
    )
}

export default Order;
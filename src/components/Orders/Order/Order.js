import '../HeadOrder/HeadOrder.scss'

const Order = (props) => {
    return(
        <div className='head-order'>
            <ul className='head-order__content light'>
                <li><span><img src={props.orderImage} alt="logo"/></span></li>
                <li>{props.orderId}</li>
                <li>{props.orderName}</li>
                <li>{props.orderLocation}</li>
                <li>{props.orderStatus}</li>
            </ul>
        </div>
    )
}

export default Order;
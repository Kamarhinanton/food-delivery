import '../HeadOrder/HeadOrder.scss'

const Order = () => {
    return(
        <div className='head-order'>
            <ul className='head-order__content light'>
                <li>Order ID</li>
                <li>Order Name</li>
                <li>User Email</li>
                <li>Order Sum</li>
                <li>Create Date</li>
            </ul>
        </div>
    )
}

export default Order;
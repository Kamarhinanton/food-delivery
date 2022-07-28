import './HeadOrder.scss';

const HeadOrder = () => {
    return(
        <div className='head-order'>
            <ul className='head-order__content'>
                <li>Order ID</li>
                <li>Order Name</li>
                <li>User Location</li>
                <li>Order Sum</li>
                <li>Create Date</li>
            </ul>
        </div>
    )
}

export default HeadOrder;
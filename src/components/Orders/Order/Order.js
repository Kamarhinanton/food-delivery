import '../HeadOrder/HeadOrder.scss'

const Order = ({
                 orderId,
                 orderName,
                 orderLocation,
                 orderStatus,
                 orderImage
               }) => {
  return (
    <div className='head-order'>
      <ul className='head-order__content light'>
        <li>
          <span>
            <img src={orderImage} alt="logo"/>
          </span>
        </li>
        <li>{orderId}</li>
        <li>{orderName}</li>
        <li>{orderLocation}</li>
        <li>{orderStatus}</li>
      </ul>
    </div>
  )
}

export default Order;
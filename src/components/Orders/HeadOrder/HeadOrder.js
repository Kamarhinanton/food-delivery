import "./HeadOrder.scss";

const HeadOrder = () => {
  return (
    <div className="head-order">
      <ul className="head-order__content">
        <li>Order Logo</li>
        <li>Order ID</li>
        <li>Order Name</li>
        <li>User Location</li>
        <li>Create Status</li>
      </ul>
    </div>
  );
}

export default HeadOrder;
import "../Orders.scss";

const HeadOrder = () => {
  return (
    <div className="order-component">
      <ul className="order-component__content">
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
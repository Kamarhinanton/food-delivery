import React from 'react';
import axios from 'axios';
import './Orders.css'

export default class Orders extends React.Component {
  state = {
    orderList: []
  }
  limit = 5;
  offset = 0;
  componentDidMount() {
    axios.get("http://localhost:8080/orders?limit=" + this.limit + "&offset=" + this.offset)
      .then(res => {
        const orderList = res.data;
        this.setState({ orderList });
      })
  }

  
  scrollHandler = (event) => {
    console.log('scroll')
  }

  componentDidUpdate() {
    // document.addEventListener('scroll', )
  }


  render() {
    return (
      <div className='orderPanel'>
        <div className='orderPanelHeader'>
            <div>Order ID</div>
            <div>Order Name</div>
            <div>User Email</div>
            <div>Order Sum</div>
            <div>Create Date</div>
        </div>
        <div className='orderPanelBody'>
          <div>
            {
            this.state.orderList
              .map(function(order, index){
                  return (
                  <p key={index} border="1">Order Id: {order.orderId}</p>
                  )}
              )
          }
          </div>
          <div>
              {
                this.state.orderList
                  .map(function(order, index){
                      return (<p key={index}>{order.orderName}</p>)}
                  )
              }
          </div>
          <div>  
          {
            this.state.orderList
              .map(function(order, index){
                  return (<p key={index}  >{order.userEmail}</p>)}
              )
          }
          </div>
          <div>
          {
            this.state.orderList
              .map(function(order, index){
                  return (<p key={index}>{order.orderSum}</p>)}
              )
          }
          </div>
          <div>
          {
            this.state.orderList
              .map(function(order, index){
                  return (
                  <p key={index}>{order.createDate}</p>
                  )}
              )
          }
          </div>
        </div>
      </div>
    )
  }
}
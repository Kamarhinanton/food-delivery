import axios from "axios";
import React, {useEffect, useState} from "react";

function Pagination(){
    const [orders, setOrders] = useState([]);
    
    const limit = 5;
    const offset = 0;

    useEffect(() =>{
        axios.get('https://jsonplaceholder.typicode.com/todos/')
        .then(response => setOrders(response.data))
    }, [])

    useEffect(() => {
        document.addEventListener('scroll', scrollHandler)
        return function () {
            document.removeEventListener('scroll', scrollHandler)
        };
    }, [])

    const scrollHandler = (scrollEvent) => {
        console.log('scroll')
    }

    return (
      <div className='orderPanel'>
        <div className='orderPanelHeader'>
            <div>Order ID</div>
            <div>Order Name</div>
            <div>User Email</div>
            <div>Order Sum</div>
            <div>Create Date</div>
        </div>
        {/* <div className='orderPanelBody'>
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
        </div> */}
      </div>
    );
}

export default Pagination;
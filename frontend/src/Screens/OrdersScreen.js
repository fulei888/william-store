import React, { useEffect, useState, Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import {signin} from '../actions/userActions';
import { saveOrder, listOrders, deleteOrder } from '../actions/orderActions';
import { productDetailsReducer } from '../reducers/productReducers';
const OrdersScreen =(props) => {

    const orderList = useSelector(state => state.orderList );
    console.log('orderlist show', orderList);
    const { loading, orders, error} = orderList;
    console.log('orderlist orders', orders);
    const orderDelete = useSelector(state => state.orderDelete);
    const {loading: loadingDelete, success: successDelete, error: errorDelete} = orderDelete;
    const dispatch = useDispatch();
    useEffect(
       ()=>{
           dispatch(listOrders());  
       }
    , [orderDelete]);
    
    const deleteHandler = (order) => {
        dispatch(deleteOrder(order._id));
    } 
    
    return (<Fragment>
       { loading? <div>Loading</div>:(
     <div className="content content-margined">       
        <div className ="order-list">
            <table className="table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>DATE</th>
                        <th>TOTAL</th>
                        <th>USER</th>
                        <th>PAID</th>
                        <th>PAID AT</th>
                        <th>DELIVERED</th>
                        <th>DELIVERED AT</th>
                        <th>ACTIONS</th>
                    </tr>
                </thead>
                <tbody>
                    
                {orders.map(order => (<tr key={order._id}>
              <td>{order._id}</td>
              <td>{order.createdAt}</td>
              <td>{order.totalPrice}</td>
              <td>{order.user.name}</td>
              <td>{order.isPaid.toString()}</td>
              <td>{order.paidAt}</td>
              <td>{order.isDelivered.toString()}</td>
              <td>{order.deliveredAt}</td>
              <td>
                <Link to={"/order/" + order._id} className="button secondary" >Details</Link>
                {' '}
                <button type="button" onClick={() => deleteHandler(order)} className="button secondary">Delete</button>
              </td>
            </tr>))}

                        
                </tbody>
            </table>
        </div>
    </div>)}
    </Fragment>
        
    )

}

export default OrdersScreen;
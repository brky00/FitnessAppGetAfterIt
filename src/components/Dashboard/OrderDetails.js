import './OrderDetails.css'

import { db } from "../firebase-config";
import { useEffect, useState } from 'react';
import { collection, getDocs, Timestamp,  doc } from "firebase/firestore";
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';


const OrderDetails = () => {
    const location = useLocation();
    const { order } = location.state || {}; // If state is undefinded we use empity object parantese
    console.log("order in orderDetails: ",order);
 
    const navigate = useNavigate();


  
    return (
      <>
      <header>
      <h1 className='mt-5'>Order Details</h1>
      </header>
        
        <div className="d-flex ms-5 align-items-center ">
        

          
            <div className=" orderBackButtonDiv">
              <button
                className="btn btn-danger orderBackButton"
                onClick={() => navigate("/dashOrder")}
              >
                Back to Order Managament
              </button>
            </div>

        </div>  
         
         

         


        <div className="table-responsive ms-4 me-4">
          <table className="table orderDetailsTable">
            <thead className='firstThead'>
              <tr>
                <th scope="col">Order ID</th>
                <th scope="col">Customer Name</th>
                <th scope="col">Telno</th>
                <th scope="col">Adress</th>
                <th scope="col">Order-Date</th>
                <th scope="col">Total Item Quantity</th>
                <th scope="col">Total Price</th>
                <th scope="col">status</th>


              </tr>
            </thead>
            <tbody>
       
                <tr key={order.id}>
                  <td>{order.id}</td>
                  <td>{order.name}</td>
                  <td>{order.telNo}</td>
                  <td>{order.address}</td>
                  <td>{order.date}</td>
                  <td>{order.totalItems}</td>
                  <td>{`NOK ${order.totalPrice}`}</td>
                  <td>{order.status}</td>
  
                </tr>
            
            </tbody>
            <thead className='secondThead'>
              <tr>
              <th scope="col">Product ID</th>
                <th scope="col">Product Name</th>
               
                <th scope="col">Selected Product Name</th>
               
                <th scope="col">Product Size</th>
                <th scope="col">Product Quantity</th>
                <th scope="col">Product Price</th>            
              </tr>
            </thead>
            <tbody>
            {order.cartItems.map((item, index) => (
                <tr key={index}>
                <td>{item.id}</td>
                <td>{item.productName}</td>
                  <td>{item.selectedImgName}</td>
                 
                  <td>{item.productSize}</td>
                  <td>{item.quantity}</td>
                  <td>{`NOK ${item.price}`}</td>
                </tr>
        ))}
    

   
   </tbody>
          </table>
        </div>
      </>
    );
  };
  
  export default OrderDetails;




 
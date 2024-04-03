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

  // const [orders, setOrders] = useState([]);
  // const [currentOrder, setCurrentOrder] = useState(null);








  // const fetchOrders = async () => {
  //   const querySnapshot = await getDocs(collection(db, "orders"));
  //   const orderList = querySnapshot.docs.map((doc) => ({
     
  //     id: doc.data().telNo,
  //     ...doc.data(),
  //     // Converting Timestamp to a readable date string.
  //     date: doc.data().date ? new Timestamp(doc.data().date.seconds, doc.data().date.nanoseconds).toDate().toLocaleString() : 'No date',
  //   }));
  //   setOrders(orderList);
  // };
  // // Using useEffect to call fetchOrders when the component mounts.
  // useEffect(() => {
  //   fetchOrders();
  // }, []);
  // console.log("orders from database: ", orders);

  
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
                  <td>{order.adress}</td>
                  <td>{order.date}</td>
                  <td>4</td>
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
       
       <tr key={order.id}>
       <td>AdB7JhdsksJSDKJa</td>
       <td>Caps</td>
         <td>caps-red-color.jpg</td>
        
         <td>L</td>
         <td>13</td>
         <td>{`NOK ${order.totalPrice}`}</td>
       </tr>
   
   </tbody>
          </table>
        </div>
      </>
    );
  };
  
  export default OrderDetails;




 
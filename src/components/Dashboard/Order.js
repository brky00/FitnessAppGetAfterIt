import './Order.css'
import { useNavigate } from 'react-router-dom';
import { db } from "../firebase-config";
import { collection, getDocs, Timestamp,  doc, updateDoc  } from "firebase/firestore";
import { useEffect, useState } from 'react';
import OrderDetails from './OrderDetails';

const Order = () => {
  const navigate = useNavigate();
  const [orders, setOrders] = useState([]);

  const [showStatusUpdate, setShowStatusUpdate] = useState(false);
  const [currentOrder, setCurrentOrder] = useState(null);



  const openStatusUpdate = (order) => {
    setCurrentOrder(order);
    setShowStatusUpdate(true);
  };

  const updateOrderStatus = async (newStatus) => {
    if (currentOrder) {
      const orderRef = doc(db, "orders", currentOrder.id);
      await updateDoc(orderRef, { status: newStatus });
      setShowStatusUpdate(false);
      fetchOrders(); // to update orders table call we the "fetchOrders" function again.
    }
  };

  const showOrderDetails = (order) => {
    navigate("/orderDetails", { state: { order: order } });
  };
  


  const fetchOrders = async () => {
    const querySnapshot = await getDocs(collection(db, "orders"));
    const orderList = querySnapshot.docs.map((doc) => ({
     
      id: doc.id,
      ...doc.data(),
      // Converting Timestamp to a readable date string.
      date: doc.data().date ? new Timestamp(doc.data().date.seconds, doc.data().date.nanoseconds).toDate().toLocaleString() : 'No date',
    }));
    setOrders(orderList);
  };
  // Using useEffect to call fetchOrders when the component mounts.
  useEffect(() => {
    fetchOrders();
  }, []);
  console.log("orders from database: ", orders);
  console.log("currentOrder:", currentOrder); // Bu, geçerli ve beklenen bir string olmalı.


  

  
    return (
      <>
      <header>
      <h1 className='mt-5'>Order Managament</h1>
      </header>
        
        <div className="d-flex ms-5 align-items-center ">
        

          
            <div className=" orderBackButtonDiv">
              <button
                className="btn btn-primary orderBackButton"
                onClick={() => navigate("/dashboard")}
              >
                Back to Dashboard
              </button>
            </div>

        </div>  
         
         

          {showStatusUpdate && currentOrder &&(
            <div>
              <div className="status-update-modal-div">
                <div className="status-update-modal">
                  <h5>Change order status</h5>
                  <div className="d-flex">
                    <h6 className="idOrderStatus">ID:</h6>

                    <h6>{currentOrder.id}</h6>
                  </div>

                  <div className="d-flex justify-content-between">
                    <select
                      value={currentOrder.status}
                      onChange={(e) => updateOrderStatus(e.target.value)}
                    >
                      <option value="pending">Pending</option>
                      <option value="shipped">Shipped</option>
                      <option value="completed">Completed</option>
                    </select>

                    <button
                      className="btn btn-primary"
                      onClick={() => setShowStatusUpdate(false)}
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

    

        <div className="table-responsive ms-4 me-4">
          <table className="table orderTable">
            <thead>
              <tr>
                <th scope="col">Order ID</th>
                <th scope="col">Customer Name</th>
                <th scope="col">Address</th>
                <th scope="col">Order Date</th>
                <th scope="col">Price</th>
                <th scope="col">Status</th>

                <th className="text-center" colSpan={2} scope="col">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
             
                <tr className={` ${order.status === "completed" ? "order-completed" : ""} `} key={order.id}>
                  <td>{order.id}</td>
                  <td>{order.name}</td>
                  <td>{order.address}</td>
                  <td>{order.date}</td>
                  <td>{`NOK ${order.totalPrice}`}</td>
                  <td>{order.status}</td>
                  <td>
                    <div style={{ display: "flex", justifyContent: "center" }}>
                      <i
                        className="fa-solid fa-gear orderEdit"
                        onClick={() => openStatusUpdate(order)}
                      ></i>
                    </div>
                  </td>
                  <td>
                    <div style={{ display: "flex", justifyContent: "center" }}>
                      <i
                        className="fa-solid fa-circle-info orderDetails"
                        alt="Order details"
                        onClick={() => showOrderDetails(order)}
                      ></i>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </>
    );
  };
  
  export default Order;




 
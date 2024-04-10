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
  const [filteredOrders, setFilteredOrders] = useState([]);
  const [showPendingOnly, setShowPendingOnly] = useState(false);
  const [searchTelNo, setSearchTelNo] = useState('');
  const [seacrhNumberExist, setseacrhNumberExist] = useState(false);

 






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
      // Doğrudan bir Date objesini string'e çeviriyoruz
      date: doc.data().date ? new Timestamp(doc.data().date.seconds, doc.data().date.nanoseconds).toDate().toLocaleString() : 'No Date',
    })).sort((a, b) => {
      // Sıralama mantığınız doğru görünüyor, burada bir değişiklik yapmaya gerek yok.
      if (a.status === 'completed' && b.status !== 'completed') return 1;
      if (b.status === 'completed' && a.status !== 'completed') return -1;
      // Tarih sıralamasını yaparken, zaten string tarihler üzerinde çalışıyoruz
      return b.date ? new Date(b.date).getTime() - (a.date ? new Date(a.date).getTime() : 0) : 0;
    });
    setOrders(orderList);
    setFilteredOrders(orderList);
  };
  

  useEffect(() => {
    fetchOrders();
  }, []);

  // Function to toggle the display of pending orders
  const togglePendingOrders = () => {
    setShowPendingOnly(!showPendingOnly);
    if (!showPendingOnly) {
      setFilteredOrders(orders.filter(order => order.status === 'pending'));
    } else {
      setFilteredOrders(orders);
    }
  };
  console.log("orders from database: ", orders);
  console.log("currentOrder:", currentOrder); 


  const handleSearchChange = (e) => {
    setseacrhNumberExist(false);
    setSearchTelNo(e.target.value);
   
  };

  const handleSearch = () => {
    // normalize the search term to ensure consistency
    const normalizedSearchTerm = searchTelNo.trim();
  
    // Log existing telNos for debug purposes
    console.log("Existing telNos in orders:", orders.map(order => order.telNo));
  
    if (normalizedSearchTerm) {
      // Filtreren basert på tel no
      const filtered = orders.filter(order => String(order.telNo).trim() === normalizedSearchTerm);
      console.log("Filtered results:", filtered);
      setFilteredOrders(filtered);
      setseacrhNumberExist(true);
    } else {
      // Hvis det er tomt i search hvis alle
      setFilteredOrders(orders);
      setseacrhNumberExist(false);
    }
  };
  

  console.log("telNo: ",filteredOrders);
  console.log("searchTelNo ", searchTelNo);


  

  
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
        <div className="d-flex ms-5 align-items-center">
        <button
          className="btn btn-info"
          onClick={togglePendingOrders}
        >
          {showPendingOnly ? 'Show All Orders' : 'Show Only New Orders'}
        </button>
      </div>
       {/* Arama çubuğu ve buton */}
       <div className="search-bar-order d-flex justify-content-end me-5">
        <input
          type="text"
          placeholder="Search by Tel no..."
          value={searchTelNo}
          onChange={handleSearchChange}
          className='me-1'
        />
        <button className="btn btn-danger" onClick={handleSearch}>
          Search
        </button>
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
          {seacrhNumberExist&&(
           <div className='d-flex justify-content-center'> <h3>{`Orders For Tel No  " ${searchTelNo} "`}</h3></div>
          )}

    

        <div className="table-responsive order-table-responsive ms-4 me-4">
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
              {filteredOrders.map((order) => (
             
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




 
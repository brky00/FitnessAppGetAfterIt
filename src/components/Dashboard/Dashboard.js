import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { db } from "../firebase-config";
import "./Dashboard.css";
import { collection, getDocs } from "firebase/firestore";

const Dashboard = () => {
  const [orders, setOrders] = useState(0);
  const [userContacts, setUserContacts] = useState(0);

  useEffect(() => {
    const fetchContactFormsCount = async () => {
      const contactCollectionRef = collection(db, "contacts");
      const snapshot = await getDocs(contactCollectionRef);
      setUserContacts(snapshot.docs.length);
    };
    fetchContactFormsCount();
  }, []);

  return (
    <>
      <div className="container-fluid dashBoardContainer">
        <div className="d-flex justify-content-end me-5"></div>
        <div className="row dashBoardRow">
          <div className="col-4 col-sm-4 col-md-4 col-lg-2 leftSideCol mt-3">
            <div className="row mt-5">
              <div className="col-12 dashBoardProductsCol mb-3">
                <Link className="dashBoardProducts" to="/dashTable">
                  <div className="d-flex justify-content-center align-items-center productLinkInnerDiv">
                    {" "}
                    <h2 className="me-3"> Products </h2>
                    <div>
                      <i class="fa-solid fa-bag-shopping"></i>
                    </div>
                  </div>
                </Link>
              </div>

              <div className="col-12 dashBoardProductsCol mb-3">
                <Link className="dashBoardOrder" to="/dashOrder">
                  <div className="d-flex justify-content-center align-items-center productLinkInnerDiv">
                    {" "}
                    <h2 className="me-3"> Order </h2>
                    <div>
                      <i class="fa-solid fa-truck-fast"></i>
                    </div>
                  </div>
                </Link>
              </div>

              <div className="col-12 ">
                <Link
                  className="Usercontact dashBoardUserContact"
                  to="/Usercontact"
                >
                  <div className="d-flex justify-content-center align-items-center productLinkInnerDiv">
                    <h2 className="me-3">Contact</h2>
                    <div>
                      <i className="fa-solid fa-address-book"></i>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-8 col-sm-8 col-md-8 col-lg-8">
            <h1 className="DashBoardTitle mt-3">Dashboard</h1>
            <div className="container text-center DashBoardBody">
              <div className="row align-items-start d-flex justify-content-center">
                <div className="col-8 col-sm-2 col-md-2 col-lg-2 dashBodyCols ms-5 me-5 mb-3 d-flex flex-column">
                  <span className="bodyColTitles mb-2">Users Visits</span>30 <span> </span>
                </div>
                <div class="col-8 col-sm-2 col-md-2 col-lg-2  dashBodyCols me-5 mb-3 d-flex flex-column">
                  {" "}
                  <span className="bodyColTitles mb-2">Total Orders</span>30 <span> </span>
                </div>
                <div class="col-8 col-sm-2 col-md-2 col-lg-2  dashBodyCols me-5 d-flex flex-column">
                  {" "}
                  <span className="bodyColTitles mb-2">Users contacted</span>30 <span> </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;

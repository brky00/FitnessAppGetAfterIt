import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Dashboard.css";
import { db, analytics } from "../firebase-config";
import Logout from "../Logout";

import "./Dashboard.css";

import { collection, query, where, getDocs } from "firebase/firestore";

const InfoBox = ({ title, value }) => (
  <div className="card text-center">
    <div className="card-body">
      <h5 className="card-title">{title}</h5>
      <p className="card-text">{value}</p>
    </div>
  </div>
);

const Dashboard = () => {
  const [userVisits, setUserVisits] = useState(0);
  const [userContacts, setUserContacts] = useState(0);
  const [orders, setOrders] = useState(0);

  return (
    <>
      <div className="container-fluid dashBoardContainer">
        <div className="d-flex justify-content-end me-5"></div>
        <div className="row dashBoardRow">
          <div className="col-4 col-sm-4 col-lg-2 leftSideCol mt-3">
            <div className="row">
              <div className="col-12 dashBoardProductsCol">
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

              <div className="col-12 dashBoardProductsCol">
                <Link className="dashBoardProducts" to="/dashOrder">
                  <div className="d-flex justify-content-center align-items-center productLinkInnerDiv">
                    {" "}
                    <h2 className="me-3"> Order </h2>
                    <div>
                      <i class="fa-solid fa-bag-shopping"></i>
                    </div>
                  </div>
                </Link>
              </div>

              <div className="col-12 mt-5">
                <Link className="Usercontact" to="/Usercontact">
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
        </div>
      </div>
    </>
  );
};

export default Dashboard;

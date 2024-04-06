import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Dashboard.css";

import "./Dashboard.css";

const Dashboard = () => {
  const [userContacts, setUserContacts] = useState(0);
  const [orders, setOrders] = useState(0);

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
            <div class="container text-center DashBoardBody">
              <div class="row align-items-start d-flex justify-content-center">
                <div class="col-8 col-sm-2 col-md-2 col-lg-2 dashBodyCols ms-5 me-5">Users visited</div>
                <div class="col-8 col-sm-2 col-md-2 col-lg-2  dashBodyCols me-5">Total orderes</div>
                <div class="col-8 col-sm-2 col-md-2 col-lg-2  dashBodyCols me-5">Users contacted</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;

import React from "react";
import "./Merch.css";

import MerchItem from "./MerchItem";

const Merch = ({ productItems }) => {
  return (
    <>
      <h1 className="merchTitle">Merch</h1>
      <div className="container merchContainer">
        <div className="row d-flex justify-content-center">
          <div className="col-sm-12 col-md-3 col-lg-3">
            <div className="search-bar">
              <input
                type="text"
                placeholder="Search"
                style={{ width: "100%" }}
              />
              <button type="submit">🔍</button>
            </div>
            <div className="stock-availability">
              <label className="stockLabel">
                <input type="checkbox" name="in-stock" id="in-stock" />
                IN STOCK
              </label>
            </div>
          </div>
          <div className="col-sm-12 col-md-9 col-lg-9 d-flex">
         <div className="row">
         
          {productItems.map((prdct) => (
             <div className="col-6 col-sm-6 col-md-4 col-lg-4 d-flex justify-content-center merchCol mb-4">
            <MerchItem product={prdct} key={prdct.id} />
            </div>
          ))}
         
         </div>
          </div>

         
          
        </div>
      </div>
    </>
  );
};

export default Merch;

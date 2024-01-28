import React from "react";
import "./Merch.css";
import hoodieImage from "./images/hoodie.png";
import shortsImage from "./images/shorts.png";
import jacketImage from "./images/jakke.png";
import MerchItem from "./MerchItem";

const Merch = ({ productItems }) => {
  return (
    <div>
      <h1>Merch</h1>
      <div className="container merch-container">
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
              <label>
                <input type="checkbox" name="in-stock" id="in-stock" />
                IN STOCK
              </label>
            </div>
          </div>

          {productItems.map((prdct) => (
            <MerchItem product={prdct} key={prdct.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Merch;

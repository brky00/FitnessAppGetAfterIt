import React, { useState } from "react";
import "./Merch.css";
import MerchItem from "./MerchItem";

const Merch = ({ dbProducts}) => {
  const [searchTerm, setSearchTerm] = useState('');
  

     // Based on selectionImages arrays length determine we column amount(col from bootstrap 5 grid system.)
     const getColumnClass = (filteredProductsCount) => {
      switch(filteredProductsCount) {
        case 1:
          return "col-12 col-sm-12 col-md-12 col-lg-12 d-flex justify-content-center";
        case 2:
          return "col-6 col-sm-6 col-md-6 col-lg-6 d-flex justify-content-center";
        default:
          return "col-6 col-sm-6 col-md-4 col-lg-4 d-flex justify-content-center";
      }
    };
  //searc function
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredProducts = dbProducts
  .filter(
    (product) => product.productName.toLowerCase().includes(searchTerm.toLowerCase().trim())
  )
   
  console.log("merch dbProducts",dbProducts);

   
    // dette bruker jeg for å sjekke og se filtrede prdukter i konsolen 
    console.log("filtrede produkter:",filteredProducts);

  return (
    <>
      <h1 className="merchTitle">Merch</h1>
      <div className="container merchContainer">
        <div className="row d-flex justify-content-center align-items-start">
          <div className="col-12 col-sm-12 col-md-4 col-lg-3 ">
            <div className="search-bar">
              <input
                type="text"
                placeholder="Search of merch items"
                style={{ width: "100%" }}
                value={searchTerm}
                onChange={handleSearchChange}
              />
              <div className="searchIcon"><i class="fa-solid fa-magnifying-glass"></i></div>
              
            </div>
            
          </div>
          <div className="col-12 col-sm-12 col-md-8 col-lg-9 d-flex">
            <div className="row gx-2 gy-0">
              {filteredProducts.map((prdct) => (
                <div className={getColumnClass(filteredProducts.length)}>
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
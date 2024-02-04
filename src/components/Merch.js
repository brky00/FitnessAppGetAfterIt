import React, { useState } from "react";
import "./Merch.css";
import MerchItem from "./MerchItem";

const Merch = ({ productItems }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [inStockOnly, setInStockOnly] = useState(false);

     // selectionImages array'inin uzunluğuna göre column class'ını belirle
     const getColumnClass = (filteredProductsCount) => {
      switch(filteredProductsCount) {
        case 1:
          return "col-12 col-sm-12 col-md-12 col-lg-12 d-flex justify-content-center";
        case 2:
          return "col-6 col-sm-6 col-md-6 col-lg-6 d-flex justify-content-center";
        default:
          return "col-4 col-sm-4 col-md-4 col-lg-4 d-flex justify-content-center";
      }
    };
  
  // Arama işlemi için olay işleyici
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  // Stok durumu için olay işleyici
  const handleStockChange = (event) => {
    setInStockOnly(event.target.checked);
  };

  // funskjoner for å filtrere produktene
  const filteredProducts = productItems
  .filter(
      (product) => product.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .filter(
      (product) => !inStockOnly || product.inStock
    );

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
                placeholder="Search"
                style={{ width: "100%" }}
                value={searchTerm}
                onChange={handleSearchChange}
              />
              <button type="submit">🔍</button>
            </div>
            <div className="stock-availability">
              <label>
                <input
                  type="checkbox"
                  name="in-stock"
                  id="in-stock"
                  checked={inStockOnly}
                  onChange={handleStockChange}
                />
              </label>
              <span className="stockLabel"> IN STOCK</span>
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

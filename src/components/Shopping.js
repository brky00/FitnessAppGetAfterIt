import React from "react";
import hoodie from "./images/hoodieGti.png";
import short from "./images/shortGti.png";
import ProductShoppingCard from "./elements/ProductShoppingCard";
import "./Shopping.css";
import Footer from "./Footer";

// Eksempel varer før vi har lagd json og merch siden for å ha systemet klar for
const products = [];
const newProduct = {
  productName: "Get After It Hoodie",
  imgSrc: hoodie,
  size: "L",
  quantity: 1,
  price: 150,
};
const newProductsArray = [...products, newProduct];
const newProduct2 = {
  productName: "Short",
  imgSrc: short,
  size: "M",
  quantity: 2,
  price: 300,
};
const newProductsArray2 = [...newProductsArray, newProduct];

const Shopping = () => {
  return (
    <div>
      <div className="container sCardContainer">
        <div className="row">
          <div className="col">
            <div className="onlyProducterContainer ">
              {/* Product */}
              <div className="row text-center mb-2 sCardTitler">
                <div className="col-md-3 col-lg-3">Product</div>
                <div className="col-md-3 col-lg-3">Size</div>
                <div className="col-md-3 col-lg-3">Quantity</div>
                <div className="col-md-3 col-lg-3">Price</div>
              </div>
              <ProductShoppingCard
                productName={newProduct.productName}
                image={newProduct.imgSrc}
                size={newProduct.size}
                quantity={newProduct.quantity}
                price={newProduct.price}
              />

              <ProductShoppingCard
                productName={newProduct2.productName}
                image={newProduct2.imgSrc}
                size={newProduct2.size}
                quantity={newProduct2.quantity}
                price={newProduct2.price}
              />
            </div>
          </div>
        </div>
        {/* Summary Row start*/}
        <div className="d-flex justify-content-center">
          <h1 className="summaryTitle">Summary</h1>
        </div>

        <div className="d-flex justify-content-center align-items-center flex-wrap summaryContainer">
          <div className="d-flex summaryDiv">
            <span className="summaryContent">Total products:</span>{" "}
            <span>2</span>
          </div>
          <div className="d-flex summaryDiv">
            <span className="summaryContent">Delivery:</span>{" "}
            <span>NOK 0.0</span>
          </div>
          <div className="d-flex summaryDiv">
            <span className="d-flex summaryContentSum align-items-center">
              Sum:
            </span>{" "}
            <span className="summaryNok">NOK 450.00</span>
          </div>
        </div>

        {/* Summary Row end*/}

        {/* Action Buttons */}
        <div className="row">
          <div className="col-md-12 col-lg-12 col-sm-12 button-container d-flex justify-content-center">
            <button className="contiuneButton">Continue Shopping</button>
            <button className="checkoutButton">Checkout</button>
          </div>
        </div>
        
      </div>
      <Footer/>
      
    </div>
    
  );
};

export default Shopping;

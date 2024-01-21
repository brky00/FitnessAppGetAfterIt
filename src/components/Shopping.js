import React from "react";
import hoodie from "./images/hoodieGti.png";
import short from "./images/shortGti.png";
import ProductShoppingCard from "./elements/ProductShoppingCard";
import "./Shopping.css";

// Eksempel varer før vi har lagd json og merch siden for å ha systemet klar for
const products = [];
const newProduct = {
  productName:"tshirt",
  imgSrc: hoodie,
  size: "L",
  quantity: 1,
  price: 150,
};
const newProductsArray = [...products, newProduct];
const newProduct2 = {
  productName:"short",
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
        <div className="row">
          <div className="col-md-4 offset-md-8 d-flex justify-content-between">
            <div>Total products:</div>
            <div>2</div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-4 offset-md-8 d-flex justify-content-between">
            <div>Delivery</div>
            <div>NOK 0.0</div>
          </div>
        </div>

        <div className="row mb-3">
          <div className="col-md-4 offset-md-8 d-flex justify-content-between">
            <div>Total</div>
            <div>NOK 440</div>
          </div>
        </div>
        {/* Summary Row end*/}

        {/* Action Buttons */}
        <div className="row">
          <div className="col-md-2 offset-md-8 mb-3">
            <button className="contiuneButton">Continue Shopping</button>
          </div>
          <div className="col-md-2">
            <button className="checkoutButton">Checkout</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shopping;

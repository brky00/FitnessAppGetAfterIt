import React from "react";
import "./Shopping.css";
import hoodie from "./images/hoodieGti.png";
import short from "./images/shortGti.png";
import ProductShoppingCard from "./elements/ProductShoppingCard";

// Örnek ürün verileri
const products = [];
const newProduct = {
  imgSrc: hoodie,
  size: "L",
  quantity: 1, 
  price: 150,
};
const newProductsArray = [...products, newProduct];
const newProduct2 = {
  imgSrc: short,
  size: "L",
  quantity: 1,
  price: 150,
};
const newProductsArray2 = [...newProductsArray, newProduct];

const Shopping = () => {
  return (
    
    
    <div className="container sCardContainer">
      <div>
        <div className="row text-center mb-2">
          <div className="col">Product</div>
          <div className="col">Size</div>
          <div className="col">Quantity</div>
          <div className="col">Price</div>
        </div>

        {/* Product */}

        <ProductShoppingCard
          imgSrc={newProduct.imgSrc}
          size={newProduct.size}
          quantity={newProduct.quantity}
          price={newProduct.price}
        />

        <ProductShoppingCard
          imgSrc={newProduct2.imgSrc}
          size={newProduct2.size}
          quantity={newProduct2.quantity}
          price={newProduct2.price}
        />

        {/* Summary Row */}
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

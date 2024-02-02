import React from "react";
import ProductShoppingCard from "./elements/ProductShoppingCard";
import "./Shopping.css";
import Footer from "./Footer";
import shoppingCardIsEmpity from "./images/shoppingCardEmpty.png";
//Neworginal origin Neworginalo+ nEWWWWWW New
//Hello

const Shopping = ({
  cartItems,
  handleAddProduct,
  handleRemoveQuantity,
  handleAddQuantity,
  handleRemoveAllProducts,
}) => {
  const totalItems = cartItems.reduce((total, item) => total + (item.quantity || 1), 0);
  const totalPrice = cartItems.reduce((price, item) => price + item.quantity * item.price,0);
  

  return (
    <div>
      {cartItems.length === 0 && (
        <div className="container sCardContainerEmpty">
          <div className="row ">
            <div className="col-12 emptyCardText d-flex justify-content-center ">
              <h2 className="d-flex justify-content sCradEmpityText">
                No items are added in the shopping card.
              </h2>
            </div>
            <div className="col-12 emptyCardImage d-flex justify-content-center mt-2 mb-2 ">
              <img className="img-fluid" src={shoppingCardIsEmpity} />
            </div>
          </div>
        </div>
      )}

      {cartItems.length > 0 && (
        <div className="container sCardContainer">
          <div>
            <h1>Shopping Card</h1>
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

                  <div>
                    {/*id,name, price,, image, description, sizes, selectionImages:*/}
                    {cartItems.map((item) => (
                      <ProductShoppingCard
                        item={item}
                        handleAddProduct={handleAddProduct}
                        handleRemoveQuantity={handleRemoveQuantity}
                        handleAddQuantity={handleAddQuantity}
                        key={item.id}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
            {/* Summary Row start*/}
            <div className="remove-all-div">
              {/* Sepetten tüm ürünleri kaldır butonu */}
              <button
                onClick={handleRemoveAllProducts}
                className="remove-all-btn"
              >
                Clear card <i class="fa-solid fa-trash"></i>
              </button>
            </div>
            <div className="d-flex justify-content-center">
              <h1 className="summaryTitle">Summary</h1>
            </div>

            <div className="d-flex justify-content-center align-items-center flex-wrap summaryContainer">
              <div className="d-flex summaryDiv">
                <span className="summaryContent">Total products:{" "}
                {totalItems}</span>
              </div>
              <div className="d-flex summaryDiv">
                {totalPrice>700
                  ? (<span className="summaryContent">Delivery:{" "}0</span>)
                  : (<span className="summaryContent">Delivery:{" "}NOK 70</span>)}
                
              
              </div>
              <div className="d-flex summaryDiv">
                <span className="d-flex summaryContentSum align-items-center">
                  Sum:{" "}{totalPrice}
                  </span>
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
        </div>
      )}

      <Footer />
    </div>
  );
};

export default Shopping;

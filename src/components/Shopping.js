import React from "react";
import ProductShoppingCard from "./elements/ProductShoppingCard";
import "./Shopping.css";
import Footer from "./Footer";
import shoppingCardIsEmpity from "./images/shoppingCardEmpty.png";

const Shopping = ({
  cartItems,
  handleAddProduct,
  handleRemoveQuantity,
  handleAddQuantity,
  handleRemoveAllProducts,
}) => {
  console.log("cartitems productSize", cartItems.productSize);
  console.log("cart items s card", cartItems);
  return (
    <div>
      {cartItems.length === 0 && (
        
        <div className="container cart-items-empty-container" >

            <div className="row">
              {/* <div className="">  */}
              <div className="col-12  cart-items-empty">No items are added. </div>
          {/* <div className="col-12 mt-5 mb-5"> <img className="image-fluid" src={shoppingCardIsEmpity}/>
            </div> */}
              {/* </div> */}
 
           
         
          </div>
        </div>
      )}
      {cartItems.length > 0 && (
        <div className="container sCardContainer">
          <h1 cla>Shopping Card</h1>

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
          <div className="d-flex justify-content-center">
            <h1 className="summaryTitle">Summary</h1>
          </div>
          <div className="remove-all-div">
            {/* Sepetten tüm ürünleri kaldır butonu */}
            <button
              onClick={handleRemoveAllProducts}
              className="remove-all-btn"
            >
              Clear card <i class="fa-solid fa-cart-shopping shopping"></i>
            </button>
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
      )}

      <Footer />
    </div>
  );
};

export default Shopping;

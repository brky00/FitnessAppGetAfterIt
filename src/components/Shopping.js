import React from "react";
import ProductShoppingCard from "./elements/ProductShoppingCard";
import "./Shopping.css";
import Footer from "./Footer";



const Shopping = ({cartItems, handleAddProduct}) => {
  console.log(cartItems);
  return (
    <div>
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
              {cartItems.length === 0 &&(
                <div className="cart-items-empty">No items are added. </div>
              )}
              <div>
                {/*id,name, price,, image, description, sizes, selectionImages:*/}
                {cartItems.map((item)=>(
                  <ProductShoppingCard
                  item={item}
                handleAddProduct={handleAddProduct}
                 key={item.id} 
                //   name={item.name}
                // image={item.image}
                // description={item.description}
                // sizes={item.sizes}
                // quantity={"1"}
                // price={item.price}
                  />
                ))}
              </div>

              {/* <ProductShoppingCard
                productName={newProduct2.productName}
                image={newProduct2.imgSrc}
                size={newProduct2.size}
                quantity={newProduct2.quantity}
                price={newProduct2.price}
              /> */}
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

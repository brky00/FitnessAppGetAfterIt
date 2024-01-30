import React from "react";
import "./ProductShoppingCard.css";

const ProductShoppingCard = ({ item,handleAddProduct}) => {
  // const {image, price,name,description ,handleAddProduct}=item;
  //
  return (
    <div className="productCardContainer">
      <div className="product">
        <div className="row mb-3 mt-3 mb-3 productRow ">
          
          <div className="d-flex col-md-3 col-sm-12 productImgCol justify-content-center ">
           <div className="row d-flex d-flex justify ">
            <div className="col-sm-12 d-flex justify-content-center mb-1">
            <span className="productTittel">{item.name}</span>
            </div>
          <div className="col-sm-12 d-flex justify-content-center productImgDiv">
          <img
              src={item.image}
              alt="product"
              className="img-thumbnail productImg mb-2"
            />
          </div>
           </div>
          </div>
          <div className="col-md-3 col-sm-6 d-flex align-items-center justify-content-center mb-1">

           <div className="d-flex align-items-center"> 
           <span className="me-2 responsiveSizeTittel">Size</span>
           <span className="size-box">{"L"}</span>
           </div>
          </div>
          <div className="col-md-3 col-sm-6 d-flex align-items-center justify-content-center mt-1 mb-2">
            <div className="quantity-container">
              <button onClick={() => handleAddProduct(item)} className="btn d-flex align-items-center justify-content-center quantity-btn-plus">
                <span className="plus">+</span>
              </button>

              <input
                type="text"
                className="form-control text-center quantity-input"
                value={item.quantity}
              />

              <button className="btn d-flex align-items-center justify-content-center quantity-btn-minus">
                <span className="minus">-</span>
              </button>
            </div>
          </div>

          <div className="col-md-3 col-sm-12 d-flex align-items-center justify-content-center">
            <span className="productPrice d-flex align-items-center justify-content-center">
              {`NOK ${item.price}`}
            </span>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default ProductShoppingCard;

import React from "react";
import "./ProductShoppingCard.css";

const ProductShoppingCard = ({
  item,
  handleRemoveQuantity,
  handleAddQuantity,
}) => {
  console.log("item scard¤", item);
  // const {image, price,name,description ,handleAddProduct}=item;
  //
  return (
    <div className="container">
      <div className="row mb-1 d-flex justify-content-center sCardProductRow">
        <div className="col-4 col-md-4 col-lg-4 d-flex justify-content-center ">
          {/* İçerik */}
          <img
            src={item.selectedImage}
            alt="product"
            className="img-thumbnail productImg mb-2 img-fluid sCardProductImg me-2"
          />
          <div>
          <div>{item.productName}</div>
          <div>
            <span>Size:</span>
            <span>{item.productSize}</span>
          </div>

          </div>
   
        </div>
        <div className="col-4 col-md-4 col-lg-4 d-flex align-items-center justify-content-center mt-1 mb-2">
          {/* İçerik */}
          <div className="quantity-container">
            <button
              onClick={() => handleAddQuantity(item)}
              className=" d-flex align-items-center justify-content-center quantity-btn-plus"
            >
              <span className="plus">+</span>
            </button>

            <div className=" quantity-div">{item.quantity}</div>

            <button
              onClick={() => handleRemoveQuantity(item)}
              className="d-flex align-items-center justify-content-center quantity-btn-minus"
            >
              <span className="minus">-</span>
            </button>
          </div>
        </div>
        <div className="col-4 col-md-4 col-lg-4 d-flex align-items-center justify-content-center">
          {/* İçerik */}
          <div className="col-4 col-md-4 col-lg-4 d-flex align-items-center justify-content-center">
            <span className="productPrice d-flex align-items-center justify-content-center">
              {`NOK ${item.price * item.quantity}`}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductShoppingCard;

import React from "react";
import "./ProductShoppingCard.css";

const ProductShoppingCard = ({ imgSrc, size, quantity, price }) => {
  return (
    <div className="sCardContainer2">
      <div className="non-responsive-product">
        <div className="row mb-3 productRow mt-3 mb-3">
          <div className="d-flex col-md-3 col-sm-12 productImgCol ">
            <img
              src={imgSrc}
              alt="product"
              className="img-thumbnail productImg mb-3"
            />
          </div>
          <div className="col d-flex align-items-center justify-content-center">
            <span className="size-box">{size}</span>
          </div>
          <div className="col d-flex align-items-center justify-content-center">
            <div className="quantity-container">
              <button className="btn d-flex align-items-center justify-content-center quantity-btn-plus">
                <span className="plus">+</span>
              </button>

              <input
                type="text"
                className="form-control text-center quantity-input"
                value={quantity}
              />

              <button className="btn d-flex align-items-center justify-content-center quantity-btn-minus">
                <span className="minus">-</span>
              </button>
            </div>
          </div>

          <div className="col d-flex align-items-center justify-content-center">
            <span className="productPrice d-flex align-items-center justify-content-center">
              {`NOK ${price}`}
            </span>
          </div>
        </div>
      </div>
      {/* responsive container system start */}
      <div className="responsive-product">
        <div className="row">
          <div className="col-sm-6 ">
            <img
              src={imgSrc}
              alt="product"
              className="img-thumbnail productImg "
            />
          </div>
        </div>
      </div>

      {/* Responsive container system end */}
    </div>
  );
};

export default ProductShoppingCard;

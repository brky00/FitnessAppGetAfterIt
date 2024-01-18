import React from 'react';

const ProductShoppingCard = ({ imgSrc, size, quantity, price }) => {
  return (
    <div className="row mb-3">
      <div className="col">
        <img src={imgSrc} alt="product" className="img-thumbnail" />
      </div>
      <div className="col d-flex align-items-center justify-content-center">
        <span className="size-box">{size}</span>
      </div>
      <div className="col d-flex align-items-center justify-content-center">
        <div className="quantity-container">
          <button className="btn bg-primary d-flex align-items-center quantity-btn">
            <span className="minus">-</span>
          </button>
          <input
            type="text"
            className=" text-center quantity-input"
            value={quantity} 
          />
          <button className="btn bg-primary d-flex align-items-center quantity-btn">
            <span className="plus">+</span>
          </button>
        </div>
      </div>
      <div className="col d-flex align-items-center justify-content-center">
        {`NOK ${price}`}
      </div>
    </div>
  );
};

export default ProductShoppingCard;

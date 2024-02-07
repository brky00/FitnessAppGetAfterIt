import React, { useState } from 'react';
import './Merchinfo.css'; // Importing the CSS styles
import { useNavigate, useParams } from 'react-router-dom';



const MerchInfo = ({ productItems, handleAddProduct,selectedSize,setSelectedSize,cartItems }) => {
  const navigate = useNavigate();
  const [showNotification, setShowNotification] = useState(false);
  const { id } = useParams()
  const totalPrice = cartItems.reduce(
    (price, item) => price + item.quantity * item.price,0
  );
  const handleButtonClick = () => {
    if (!selectedSize) {
      // alert if size not selected yet
      alert("Please select a size before adding to bag.");
    } else {
      // If size is choosed so add to card
      handleAddProduct({ product, selectedSize });
      setShowNotification(true); {/*it shows the box*/ }
      setTimeout(() => setShowNotification(false), 4000); {/* 4 seconds*/ }
    }
  };

  

  let product = productItems.find((prdct) => parseInt(prdct.id) === parseInt(id)); 
  
  const { name, price, image,description,sizes,selectionImages } = product;



 
  const productDetails = {
    
    sizes: ["S", "M", "L", "XL"]
  };

  return (
    <>
      {showNotification && (
        <div class="container">
          <div class="row">
            <div class="col-md-2 offset-md-8 col-lg-2 offset-lg-8">
              <div className="nBoxDiv">
                <div
                  className={`notification-box p-3 ${
                    showNotification ? "showIt" : ""
                  }`}
                >
                  <div className="align-items-center">
                    <p className="feedbackP">{`Product "${name}" is added to cart`}</p>
                    {totalPrice > 750 && (
                      <div className="bg-light d-flex justify-content-center">
                        You have achieved free shipping by using 700 NOK
                      </div>
                    )}

                    <div className="mt-3 d-flex justify-content-center align-items-center">
                      <button type="button" class="btn btn-secondary" onClick={() => navigate('/shopping')}>
                        Shopping card
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <div class="container mt-5 d-flex justify-content-center">
        <div class="row  ">
          <div class="col-12 col-sm-12 col-md-12 col-lg-12 "> {/*col for alt */}
            <div class="row d-flex justify-content-center"> {/* row for begge colonene img og prudct details */}
              <div class="col-12 col-sm-12 col-md-6 col-lg-5"> {/* col for stort img*/}
                <div className="merch-images">
                  <img
                    src={image}
                    alt="Hoodie"
                    className="img-fluid product-image-merchDetails"
                  />
                </div>
              </div>
              <div class= "col-12 col-sm-12 col-md-6 col-lg-7" >{/* col for  product details */}
                <div className="merch-details ">
                  <h1>{name}</h1>
                  <div className="col d-flex flex-wrap extra-product-image-container">
                    {selectionImages.map((selectImg) => (
                      <div >
                        <img
                          src={selectImg}
                          className="extra-product-image-merchDetails img-fluid"
                        />
                      </div>
                    ))}
                  </div>

                  {/*  */}
                  <p className="merch-price">{price}</p>
                  <p className="merch-description">{name}</p>
                  <div className="size-selector">
                    {sizes.map((size) => (
                      <button
                        onClick={() => setSelectedSize(size)}
                        key={size}
                        className={`size-button ${
                          selectedSize === size ? "size-button-selected" : ""
                        }`}
                      >
                        {size}
                      </button>
                    ))}
                  </div>

                  <button
                    className="add-to-bag-btn"
                    onClick={handleButtonClick}
                  >
                    ADD TO BAG
                  </button>

                  <p className="return-policy">
                    {"Free 30-Day Return Policy!"}
                  </p>
                  <p className="delivery-info">
                    {"Free Standard Delivery over 700 NOK"}
                  </p>

                  <div>
                    <p>{description}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MerchInfo;
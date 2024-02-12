import React, { useState } from 'react';
import './Merchinfo.css';
import { useNavigate, useParams } from 'react-router-dom';

const MerchInfo = ({ dbProducts, handleAddProduct, selectedSize, setSelectedSize, cartItems }) => {
  const navigate = useNavigate();
  const [showNotification, setShowNotification] = useState(false);
  const { id } = useParams();

  const totalPrice = cartItems.reduce((price, item) => price + item.quantity * item.price, 0);

  // try to find product
  let product = dbProducts.find((product) => product.id === id);

  // feed back product doesnt exist
  if (!product) {
    return <div>Product not found</div>;
  }

  // if exists destructuring 
  const { productName, price, images, description, sizes } = product;

  const handleButtonClick = () => {
    if (!selectedSize) {
      alert("Please select a size before adding to bag.");
    } else {
      handleAddProduct({ product, selectedSize });
      setShowNotification(true);
      setTimeout(() => setShowNotification(false), 4000);
    }
  };

  const handleSizeClick = (size) => {
    if (selectedSize === size) {
      setSelectedSize(null);
    } else {
      setSelectedSize(size);
    }
  };

  


  
  
  console.log("product her i merchinfo !!!!!#",product);


 
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
                    <p className="feedbackP">{`Product "${productName}" is added to cart`}</p>
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
                    src={images[0]}
                    alt="Hoodie"
                    className="img-fluid product-image-merchDetails"
                  />
                </div>
              </div>
              <div class= "col-12 col-sm-12 col-md-6 col-lg-7" >{/* col for  product details */}
                <div className="merch-details ">
                  <h1>{productName}</h1>
                  <div className="col d-flex flex-wrap extra-product-image-container">
                    {/* {selectionImages.map((selectImg) => (
                      <div >
                        <img
                          src={selectImg}
                          className="extra-product-image-merchDetails img-fluid"
                        />
                      </div>
                    ))} */}
                    {images?.slice(1).map((image, imgIndex) => (
                    <img
                    className='extra-product-image-merchDetails img-fluid'
                      key={imgIndex}
                      src={image}
                      alt={`Selection ${imgIndex}`}
                      style={{
                        width: "30px",
                        height: "30px",
                        marginRight: "5px",
                      }}
                    />
                  ))}
                  </div>

                  {/*  */}
                  <p className="merch-price">{price}</p>
                  <p className="merch-description">{productName}</p>
                  <div className="size-selector">
                    {sizes.map((size) => (
                      <button
                      onClick={() => handleSizeClick(size)}
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
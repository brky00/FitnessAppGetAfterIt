import React, { useEffect, useState } from 'react';
import './Merchinfo.css';
import { useNavigate, useParams } from 'react-router-dom';


const MerchInfo = ({ dbProducts, handleAddProduct, selectedSize, setSelectedSize, cartItems, mainImage, setMainImage }) => {
  const navigate = useNavigate();

  const [showNotification, setShowNotification] = useState(false);
 
  const { id } = useParams();
  //Her oppretter jeg en state for å oppdatere mainImage etterhvert

  const [product,setProduct] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [availableSizes, setAvailableSizes] = useState({});
  const [selectedImages, setSelectedImages] = useState([]);
  const [uniqueArray, setUniqueArray] = useState([]);


  useEffect(()=>{

    let productFound = dbProducts.find((prdtc) => prdtc.id === id);
    console.log("product found:",productFound);
    setProduct(productFound);
    if (productFound) {
      setMainImage(productFound.imageMain);
    }
    else {
      // Hvis product ikke finnes markerer koden mainImage som null...
      setMainImage(null);
    }
    

  }, [dbProducts, id])


  useEffect(() => {
    if (product) {
      // Tüm boyutlardan resimleri bir araya getir
      const allImages = Object.values(product.sizeDetails).flatMap(detail => detail.images);
      // Yeni bir Set oluşturarak benzersiz resimleri al
      const uniqueSet = new Set(allImages);
      console.log("uniqueSet::; ",uniqueSet);
      // 'selectedImages' ve 'uniqueArray' state'lerini güncelle
      setSelectedImages(allImages);
      setUniqueArray(Array.from(uniqueSet));
    }
  }, [product]);
  
  
  const renderImages = () => {
    // selectedImages state'ini kullanarak benzersiz resimleri render et
    return selectedImages.map((image, index) => (
      <img
        className={`extra-product-image-merchDetails img-fluid ${
          mainImage === image ? "productImage-selected" : ""
        }`}
        key={index}
        src={image}
        alt={`Product ${index}`}
        onClick={() => selectImage(image)}
      />
    ));
  };
  

  const updateAvailableSizes = (selectedImg) => {
    const sizes = {};
    Object.entries(product.sizeDetails).forEach(([sizeKey, sizeDetail]) => {
      if (sizeDetail.images.includes(selectedImg)) {
        sizes[sizeKey] = sizeDetail.quantity > 0;
      }
    });
    setAvailableSizes(sizes);
  };


  if (!mainImage) {
    return <div className='d-flex justify-content-center mt-5' style={{fontSize:"50px"}}>Loading...</div>; // Loading før bildet kommer(Når image/bilde ikke er null)
  }


  

  

  const totalPrice = cartItems.reduce((price, item) => price + item.quantity * item.price, 0);

  // try to find product
 

  // feed back product doesnt exist
  if (!product) {
    return <div>Product not found</div>;
  }

  // if exists destructuring 
  const { productName, price, imageMain, description, sizeDetails } = product;
  console.log("product inni merchInfo",product);

  console.log("product in else:",product);

  const handleSizeClick = (size) => {
    if (selectedSize === size) {
      setSelectedSize(null);
    } else {
      setSelectedSize(size);
    }
  };

  const selectImage = (imgSrc) => {
    setMainImage(imgSrc); 
    setSelectedImage(imgSrc); 
    updateAvailableSizes(imgSrc);
  };
  
  const handleButtonClick = () => {
    if (!selectedSize || !selectedImage) { // Hem boyut hem de resim seçilmiş mi kontrol et
      alert("Please select a size and an image before adding to bag.");
    } else {
      handleAddProduct({ product, selectedSize, selectedImage }); // selectedImage olarak güncellenmiş
      setShowNotification(true);
      setTimeout(() => setShowNotification(false), 4000);
    }
  };
  console.log("selectedImage2:", selectedImage);
  console.log("AVAIBLE SIZES:",availableSizes);
  const renderSizeButtons = () => {
    return product.sizes.map((size) => (
      <button
        onClick={() => handleSizeClick(size)}
        key={size}
        disabled={!availableSizes[size]} // Eğer boyut mevcut değilse butonu pasifleştir
        className={`size-button ${
          selectedSize === size ? "size-button-selected" : ""
        } ${
          !availableSizes[size] ? "size-button-out-of-stock" : ""
        }`}
      >
        {size}
      </button>
    ));
  };
  

  console.log("MAIN image; ",mainImage);
   
   
  ;

  


  
  
  console.log("product her i merchinfo !!!!!#",product);



  //new test selected images array
  {Object.entries(product.sizeDetails).map(
    ([sizeKey, sizeDetail]) =>
      sizeDetail.images?.map((image, imgIndex) => (
        <img
          className={`extra-product-image-merchDetails img-fluid ${
            mainImage === image
              ? "productImage-selected"
              : ""
          }`}
          key={imgIndex}
          src={image}
          alt={`Selection ${imgIndex}`}
          onClick={() => selectImage(image)}
        />
      ))
  )}


  


  //new test selected images array
console.log("selectedImages are here: ",selectedImages);
console.log("unique array: ",uniqueArray);

 

  return (
    <>
      <div className="container">
        {showNotification && (
          <div class="row">
            <div class=" col-md-2 offset-md-8 col-lg-2 offset-lg-8">
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
                      <button
                        type="button"
                        class="btn btn-secondary"
                        onClick={() => navigate("/shopping")}
                      >
                        Shopping card
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        <div class="mt-5 d-flex justify-content-center merchinfoContainer">
          <div class="row merchInfoRow">
            <div class="col-12 col-sm-12 col-md-12 col-lg-12 ">
              {" "}
              {/*col for alt */}
              <div class="row d-flex justify-content-center">
                {" "}
                {/* row for begge colonene img og prudct details */}
                <div class="col-12 col-sm-12 col-md-6 col-lg-5">
                  {" "}
                  {/* col for stort img*/}
                  <div className="main-image">
                    <img
                      src={mainImage}
                      alt="Hoodie"
                      className="img-fluid product-image-merchDetails"
                    />
                  </div>
                </div>
                <div class="col-12 col-sm-12 col-md-6 col-lg-7">
                  {/* col for  product details */}
                  <div className="row merch-details ">
                    <h1>{productName}</h1>
                    <div className="col-12 d-flex justify-content-center mb-2 flex-wrap extra-product-image-container">

                      {renderImages()}
                    </div>
                    <div className="col d-flex justify-content-center">
                      <div>
                        {/* <p className="merch-description mb-2">{productName}</p> */}

                        <p className="merch-price d-flex justify-content-center">{`NOK ${price}`}</p>
                      </div>
                    </div>

                    {/*orginal test  */}

                    <div className="col-12 size-selectorCol">
                      <div className="d-flex justify-content-center flex-wrap size-selector">

                      <div className="size-selector">
    {renderSizeButtons()}
  </div>
                      </div>
                    </div>

                    <div className="d-flex justify-content-center">
                      <button
                        className="add-to-bag-btn"
                        onClick={handleButtonClick}
                      >
                        ADD TO BAG
                      </button>
                    </div>

                    <div className="product-description">
                      <div className="d-flex justify-content-center">
                        <p>Free 30-Day Return Policy!</p>
                      </div>

                      <div className="d-flex justify-content-center">
                        <p>Free Standard Delivery over 700 NOK</p>
                      </div>
                    </div>

                    <div className="d-flex justify-content-center">
                      <p>{description}</p>
                    </div>
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
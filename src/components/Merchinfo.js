import React, { useEffect, useState } from 'react';
import './Merchinfo.css';
import { useNavigate, useParams } from 'react-router-dom';


const MerchInfo = ({ dbProducts, handleAddProduct, selectedSize, setSelectedSize, cartItems, mainImage, setMainImage }) => {
  const navigate = useNavigate();

  const [showNotification, setShowNotification] = useState(false);
 
  const { id } = useParams();
  //Her oppretter jeg en state for å oppdatere mainImage etterhvert

  const [product,setProduct] = useState(null);
  const [selectedImageName, setSelectedImageName] = useState(null);
  const [availableSizes, setAvailableSizes] = useState({});
  // const [selectedImageUrl, setSelectedImageUrl] = useState(null);


//org org
  // İlk yükleme ve ürün bulma işlemleri
  console.log("dbproducts:",dbProducts);
  useEffect(() => {
    let productFound = dbProducts.find((product) => product.id === id);
    console.log("productfound:",productFound);
    setProduct(productFound);
    
  }, [dbProducts, id]);

  // new useffect test

  //org
  useEffect(() => {
    if (product) {
      // Varsayılan ana resmi ve adını ayarla
      let mainImageUrl, mainImageName;
      for (const sizes of Object.values(product.sizeDetails)) {
        for (const size of sizes) {
          if (size.fileName === product.productMainName) {
            mainImageUrl = size.url;
            mainImageName = size.fileName;
            break;
          }
        }
        if (mainImageUrl) break;
      }
  
      if (mainImageUrl) {
        setMainImage(mainImageUrl);
        setSelectedImageName(mainImageName);
        updateAvailableSizes(mainImageName); // Ana resme ait boyutları güncelle
        // setSelectedImageUrl(mainImageUrl)
      }
    }
  }, [product]);

  console.log("product exist:",product);
  

  

  if (!product) {
    return <div className='d-flex justify-content-center mt-5' style={{fontSize:"50px"}}>Loading...</div>;
  }
  const { productName, price, imageMain, description, sizeDetails } = product;


  // Unique image fileNames'i almak için fonksiyon
  const getUniqueFileNames = (sizeDetails) => {
    const fileNames = new Set();
    Object.values(sizeDetails).forEach(sizes =>
      sizes.forEach(size =>
        fileNames.add(size.fileName)
      )
    );
    return Array.from(fileNames);
  };

  
 
  

  // Seçili image'e göre availableSizes güncelleyen fonksiyon
  const updateAvailableSizes = (imageFileName) => {
    const sizes = {};
    Object.entries(product.sizeDetails).forEach(([sizeKey, sizeArray]) => {
      // Eğer bu boyuttaki bir veya daha fazla ürün imageFileName ile eşleşiyorsa ve stokta varsa
      if (sizeArray.some(sizeDetail => sizeDetail.fileName === imageFileName && sizeDetail.quantity > 0)) {
        sizes[sizeKey] = true;
      }
    });
    setAvailableSizes(sizes);
  };



console.log("mainimage exist",mainImage);

  if (!product.imageMain) {
    return <div className='d-flex justify-content-center mt-5' style={{fontSize:"50px"}}>Loading...</div>; // Loading før bildet kommer(Når image/bilde ikke er null)
  }
  const fileNames = getUniqueFileNames(product.sizeDetails);
  console.log("fileNames before",fileNames);
    // Görüntülerin render edildiği fonksiyon
    const renderImages = () => {
      if (!product || !product.sizeDetails) return;
    
      const fileNames = getUniqueFileNames(product.sizeDetails);
     
      fileNames.sort((a, b) => {
       
        if (a === product.productMainName) return -1;
        if (b === product.productMainName) return 1;
      
        // sorted alfebatic and main image allways first.
        return a.localeCompare(b);
      });


  
      
     
      console.log("product", product);
      console.log("fileNames after", fileNames);
      return fileNames.map((fileName, index) => {
       
      
        // Tüm boyutlardaki eşleşen fileName'leri filtrele ve bunların URL'lerini al.
        const imageUrls = Object.values(product.sizeDetails).flatMap(sizes =>
          sizes.filter(size => size.fileName === fileName).map(size => size.url)
        );
        console.log("imageUrls",imageUrls);
    
        // İlk geçerli URL'yi seç veya hiçbiri yoksa undefined döndür.
        const imageUrl = imageUrls.find(url => url != null);
      
      
    
    
        if (!imageUrl) {
          console.error(`No URL found for fileName: ${fileName}`);
          return null; // Eğer URL bulunamazsa, bu dosya adı için hiçbir şey render etme.
        }
        if (imageUrl) {
          console.log(` URL found for fileName: ${fileName}`,imageUrl);
          
        }
        else{
        

        }
    
        // imageUrl found.
        return (
          <img
            className={`extra-product-image-merchDetails img-fluid ${
              (mainImage === imageUrl || (mainImage && imageUrl ===mainImage)) ? "productImage-selected" : ""
            }`}
            key={index}
            src={imageUrl}
            alt={`Product ${index}`}
            onClick={() => selectImage(imageUrl, fileName) }
          />
        );
      });
    };
    console.log("product: ",product,"selectedImage Name: ",selectedImageName,"product.sizeDetails",product.sizeDetails);
    
    

      // Boyut butonlarının render edildiği fonksiyon
  const renderSizeButtons = () => {
    if (!mainImage || !product || !product.sizeDetails) return null;

    // const sizesWithSelectedImage = Object.keys(availableSizes);
    return product.allSizes.map(size => (
      <button
        onClick={() => handleSizeClick(size)}
        key={size}
        disabled={!availableSizes[size]}
        className={`size-button ${selectedSize === size ? "size-button-selected" : ""} ${
          !availableSizes[size] ? "size-button-out-of-stock" : ""
        }`}
      >
        {size}
      </button>
    ));
  };


  

  

  const totalPrice = cartItems.reduce((price, item) => price + item.quantity * item.price, 0);


 


  console.log("product inni merchInfo",product);
  console.log("product.imageMain::::",product.imageMain);


  

  console.log("product in else:",product);
  
  console.log("Avaible sizes:",availableSizes);

    // Görüntü seçimi yapıldığında çalışacak fonksiyon
    const selectImage = (imageUrl, imageFileName) => {
      setMainImage(imageUrl);
      // setSelectedImage(imageFileName);
      updateAvailableSizes(imageFileName);
      setSelectedImageName(imageFileName)
      // setSelectedImageUrl(imageUrl);
    };
  

  // Size butonu tıklama olayını işleyen fonksiyon
  const handleSizeClick = (size) => {
    setSelectedSize(size);
  };


  
  const handleButtonClick = () => {
    if (!product || !selectedSize|| !mainImage) { // Hem boyut hem de resim seçilmiş mi kontrol et
      alert("Please select a size and an image before adding to bag.");
    } else {
      handleAddProduct({ product, selectedSize,mainImage,selectedImageName , quantity: 1 }); // selectedImage olarak güncellenmiş
      setShowNotification(true);
      setTimeout(() => setShowNotification(false), 4000);
    }
  };

  // MerchInfo.js içinde handleButtonClick fonksiyonu



    // feed back product doesnt exist
    if (!product) {
      return <div>Product not found</div>;
    }
    // if exists destructuring 



    console.log("++++++selected size ",selectedSize)
    console.log("main image last",mainImage);
    console.log("selectedImage",selectedImageName);
    console.log("avaible sizes",availableSizes);
    
 
 
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
                  <div className="main-image d-flex justify-content-center">
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
                         <i className="fa-solid fa-bag-shopping me-1"></i> <span>ADD TO BAG</span>
                      </button>
                    </div>

                    <div className="product-description">
                      <div className="d-flex justify-content-center">
                        <p> <span style={{ marginRight: '10px' }}>&#11148;</span>Free 30-Day Return Policy!</p>
                      </div>

                      <div className="d-flex justify-content-center">
                        <p> <span style={{ marginRight: '10px' }}><i className="fas fa-box"></i></span>Free Standard Delivery over 700 NOK</p>
                      </div>
                    </div>

                    <div className="d-flex justify-content-center" >
                      <p style={{fontFamily:"raleway"}}>{description}</p>
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
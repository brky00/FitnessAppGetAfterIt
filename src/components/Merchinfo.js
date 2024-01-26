import React from 'react';
import './Merchinfo.css'; // Importing the CSS styles
import purplehoodie from './images/purple-hoodie.png';
import orangehoodie from './images/orange-hoodie.png';
import bluehoodie from './images/blue-hoodie.png';
import greenhoodie from './images/green-hoodie.png';
{/*}
<img src={purplehoodie} alt="Hoodie" className="product-image" />
<img src={greenhoodie} alt="Hoodie" className="product-image" />
<img src={orangehoodie} alt="Hoodie" className="product-image" />
<img src={bluehoodie} alt="Hoodie" className="product-image" />
*/}

const MerchInfo = () => {
  // Replace with actual data fetching or props
  const productDetails = {
    name: "GAI GOODIE",
    price: "NOK 220",
    description: "Premium Cotton Training Hoodie",
    returnPolicy: "Free 30-Day Return Policy!",
    delivery: "Free Standard Delivery over 700 NOK",
    sizes: ["S", "M", "L", "XL"]
  };

  return (
    <div className="merch-container">
        
      <div className="merch-images">
      <img src={purplehoodie} alt="Hoodie" className="product-image" />
      </div>
      <div className="merch-details">
        <h1>{productDetails.name}</h1>
        <img src={purplehoodie} alt="Hoodie" className="product-image" />
        <img src={greenhoodie} alt="Hoodie" className="product-image" />
        <img src={orangehoodie} alt="Hoodie" className="product-image" />
        <img src={bluehoodie} alt="Hoodie" className="product-image" />
        <p className="merch-price">{productDetails.price}</p>
        <p className="merch-description">{productDetails.description}</p>
        <div className="size-selector">
          {productDetails.sizes.map(size => (
            <button key={size} className="size-button">{size}</button>
          ))}
        </div>
        <button className="add-to-bag-btn">ADD TO BAG</button>
        <p className="return-policy">{productDetails.returnPolicy}</p>
        <p className="delivery-info">{productDetails.delivery}</p>
      </div>
    </div>
  );
};

export default MerchInfo;

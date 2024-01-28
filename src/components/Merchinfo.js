import React from 'react';
import './Merchinfo.css'; // Importing the CSS styles
import { useParams } from 'react-router-dom';



const MerchInfo = ({ productItems, handleAddProduct }) => {
  console.log("p.Items: ",productItems);
  const { id } = useParams()

  let currentProduct = productItems.find((prdct) => parseInt(prdct.id) === parseInt(id)); 
  
  const { name, price, image,description,sizes,selectionImages } = currentProduct;
 
  const productDetails = {
    
    sizes: ["S", "M", "L", "XL"]
  };

  return (
    <div className="merch-container">
        
      <div className="merch-images">
      <img src={image} alt="Hoodie" className="product-image" />
      </div>
      <div className="merch-details">
        <h1>{name}</h1>
    
        {selectionImages.map(selectImg => (
            <img src={selectImg} className="product-image"/>
          ))}
        <p className="merch-price">{price}</p>
        <p className="merch-description">{name}</p>
        <div className="size-selector">
          {sizes.map(size => (
            <button key={size} className="size-button">{size}</button>
          ))}
        </div>
       
          <button className="add-to-bag-btn" onClick={() => handleAddProduct(currentProduct)}>ADD TO BAG</button>
       
        
        <p className="return-policy">{"Free 30-Day Return Policy!"}</p>
        <p className="delivery-info">{"Free Standard Delivery over 700 NOK"}</p>
      </div>
    </div>
  );
};

export default MerchInfo;

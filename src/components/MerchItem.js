import { Link } from "react-router-dom";
import "./MerchItem.css";
//This file will be called from parent file which is Merch. On this way call we all of the database products just in one frontend code. So parent file(Merch.js) will update each products from database only with his file dynamically.
//And after click on a product will the user navigate to right products product info page with using product Id  and Link from React Roter Dome.
const MerchItem = ({ product }) => {
  // total stock quantity
  const getTotalStock = (sizeDetails) => {
    return Object.values(sizeDetails).reduce((total, size) => {
      return total + size.reduce((sizeTotal, item) => sizeTotal + item.quantity, 0);
    }, 0);
  };

  //If there are no items in stock, soldOut will be true
  const soldOut = getTotalStock(product.sizeDetails) === 0;
 
  const productLink = soldOut ? (
    <div className="merchItemLink soldOut">
      {product.imageMain ? (
        <img className="merchItemImg img-fluid" src={product.imageMain} alt={product.productName || "Product Image"} />
      ) : (
        <span>No image available</span>
      )}
      <p className="d-flex justify-content-center mt-2 merchItemName">{product.productName}</p>
      <p className="d-flex justify-content-center merchPrice">{`NOK ${product.price}`}</p>
    </div>
  ) : (
    
    <Link className="merchItemLink" to={`/merchinfo/${product.id}` }>
      {product.imageMain ? (
      <div className="d-flex justify-content-center">  <img className="merchItemImg img-fluid" src={product.imageMain} alt={product.productName || "Product Image"} /></div>
      ) : (
        <span>No image available</span>
      )}
      <p className="d-flex justify-content-center mt-2 merchItemName">{product.productName}</p>
      <p className="d-flex justify-content-center merchPrice">{`NOK ${product.price}`}</p>
    </Link>
  );

  return (
    <div className={`merchItemDiv ${soldOut ? "soldOut" : ""}`}>
      {productLink}
    </div>
  );
};

export default MerchItem;

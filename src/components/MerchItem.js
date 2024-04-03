import { Link } from "react-router-dom";
import "./MerchItem.css";

const MerchItem = ({ product }) => {
  // const { id, name, price, image } = product;
  // console.log("product in merchitem! ",product);
  console.log("merchItem product:", product);
  console.log("product.imageMain:",product.imageMain);
  return (
    <div className="merchItemDiv">
       <Link className="merchItemLink" to={`/merchinfo/${product.id}` }>
        {/* <img className="img-fluid merchItemImg " src={image} alt="item image" /> */}
        {product.imageMain ? ( <img className="merchItemImg img-fluid" src={product.imageMain} alt={product.productName || "Product Image"} /> ) : ( <span>No image available</span> )}
        <p className="d-flex justify-content-center mt-2 merchItemName">{product.productName}</p>
        <p className="d-flex justify-content-center merchPrice">{`NOK ${product.price}`}</p>
      </Link>
    </div>
  );
};

export default MerchItem;

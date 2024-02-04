import { Link } from "react-router-dom";
import "./MerchItem.css";

const MerchItem = ({ product }) => {
  const { id, name, price, image } = product;
  return (
    <div className="merchItemDiv">
       <Link className="merchItemLink" to={`/merchinfo/${id}` }>
        <img className="img-fluid merchItemImg " src={image} alt="item image" />
        <p className="d-flex justify-content-center mt-2 merchItemName">{name}</p>
        <p className="d-flex justify-content-center merchPrice">{`NOK ${price}`}</p>
      </Link>
    </div>
  );
};

export default MerchItem;

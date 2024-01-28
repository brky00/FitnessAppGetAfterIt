import { Link } from "react-router-dom";

const MerchItem = ({ product }) => {
  const { id, name, price, image } = product;
  return (
    <div className="col-3">
       <Link to={`/merchinfo/${id}`}>
        <img className="img-fluid " src={image} alt="item image" />
        <p>{name}</p>
        <p>{price}</p>
      </Link>
    </div>
  );
};

export default MerchItem;

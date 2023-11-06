/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import "./SingleProduct.css";

const SingleProduct = (props) => {
  const item = props.item;
  return (
    <div className="col-lg-3 col-sm-6">
      <div className="single-product">
        <div className="image-container">
          <Link to={"/product/" + item.id}>
            <img
              className="product-image"
              src={item.image}
              alt="Product Image"
            />
          </Link>
        </div>
        <div className="d-flex w-100 gap-lg-3 justify-content-between align-items-center flex-grow-0">
          <h5 className="product-name">{item.name}</h5>
          <span className="product-price">${item.price}</span>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;

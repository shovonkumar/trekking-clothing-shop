import { useParams, useNavigate } from "react-router-dom";
import ProductsData from "../products/productsData";
import { useCartContext } from "../context/CartContext";
import { ToastContainer, toast, Flip } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./ProductPreview.css";

const ProductPreview = () => {
  const navigate = useNavigate();

  // Select product to preview
  const { id } = useParams();
  const parsedId = parseInt(id, 10);
  const previewItem =
    ProductsData.men.find((item) => item.id === parsedId) ||
    ProductsData.women.find((item) => item.id === parsedId) ||
    ProductsData.children.find((item) => item.id === parsedId);

  // Add to Cart
  const { dispatch } = useCartContext();
  const addToCart = () => {
    dispatch({ type: "ADD_TO_CART", payload: previewItem });
    toast.success("Added to Cart", {
      autoClose: 100,
      pauseOnHover: false,
      transition: Flip,
      hideProgressBar: true,
      closeOnClick: true,
      theme: "colored",
    });
  };

  return (
    <section className="preview">
      <div className="container">
        <h3>Product Details</h3>
        <div className="row mt-4 gy-4 gx-5">
          <div className="col-md-6 col-lg-4 text-center">
            <div className="preview-image-container w-100">
              <img
                className="preview-image"
                src={previewItem.image}
                alt="Product Image"
              />
            </div>
          </div>
          <div className="col-md-6 col-lg-8">
            <div className="preview-details">
              <h4 className="preview-name mb-3">
                Name : <span>{previewItem.name}</span>
              </h4>
              <h5 className="preview-price">
                Price &nbsp;: <span>${previewItem.price.toFixed(2)}</span>
              </h5>
              <div className="preview-details d-flex gap-5 mt-4">
                <p>
                  Brand : &nbsp; <span>{previewItem.brand}</span>
                </p>
                <p>
                  Color : &nbsp; <span>{previewItem.color}</span>
                </p>
                <p>
                  Size : &nbsp; <span>{previewItem.size}</span>
                </p>
              </div>
              <div className="d-flex justify-content-center justify-content-md-start gap-2 gap-sm-5 mt-3 mt-md-5">
                <button className="button" onClick={() => navigate(-1)}>
                  Go Back
                </button>
                <button className="button" onClick={addToCart}>
                  Add to Cart
                </button>
                <ToastContainer />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductPreview;

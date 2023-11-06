import { Link, useLocation } from "react-router-dom";
import { useFilter } from "./FilterContext";
import "./ProductFilter.css";

const ProductFilter = () => {
  // for changing button innerText and path
  const location = useLocation();
  const getLinkData = () => {
    switch (location.pathname) {
      case "/":
        return { to: "/products", text: "See All Products" };
      case "/products":
        return { to: "/cart", text: "See Cart" };
      default:
        return { to: "/", text: "Back to Home" };
    }
  };
  const linkData = getLinkData();

  //filterContext data
  const {
    showMen,
    showWomen,
    toggleMenFilter,
    toggleWomenFilter,
    showChild,
    toggleChildFilter,
  } = useFilter();
  return (
    <section className="product-filter">
      <div className="container d-flex justify-content-center justify-content-sm-between align-items-center">
        <div className="letf-side d-flex gap-3 gap-sm-4">
          <label className="checkbox-container">
            <input
              type="checkbox"
              value="men"
              checked={showMen}
              onChange={toggleMenFilter}
            />
            <span className="checkmark"></span>
            Men
          </label>
          <label className="checkbox-container">
            <input
              type="checkbox"
              value="women"
              checked={showWomen}
              onChange={toggleWomenFilter}
            />
            <span className="checkmark"></span>
            Women
          </label>
          <label className="checkbox-container">
            <input
              type="checkbox"
              value="children"
              checked={showChild}
              onChange={toggleChildFilter}
            />
            <span className="checkmark"></span>
            Children
          </label>
        </div>
        <div className="right-side d-none d-sm-block">
          <Link className="button" to={linkData.to}>
            {linkData.text}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProductFilter;

import SingleProduct from "../singleProduct/SingleProduct";
import { ProductsData } from "./productsData";
import { useFilter } from "../productFilter/FilterContext";
import Title from "./Title";
import "./Products.css";

const Men = ProductsData.men;
const Women = ProductsData.women;
const Children = ProductsData.children;

const Products = () => {
  const { showMen, showWomen, showChild } = useFilter();

  return (
    <section className="products">
      <div className="container">
        {/* Men Products */}
        {showMen && (
          <div className="men">
            <Title title="men" />
            <div className="row mb-5 gx-5 gy-5">
              {Men.map((item) => {
                return <SingleProduct key={item.id} item={item} />;
              })}
            </div>
          </div>
        )}
        {/* Women Products */}
        {showWomen && (
          <div className="women">
            <Title title="women" />
            <div className="row mb-5 gx-5 gy-5">
              {Women.map((item) => {
                return <SingleProduct key={item.id} item={item} />;
              })}
            </div>
          </div>
        )}
        {/* Chieldren Products */}
        {showChild && (
          <div className="children">
            <Title title="children" />
            <div className="row gx-5 gy-5">
              {Children.map((item) => {
                return <SingleProduct key={item.id} item={item} />;
              })}
            </div>
          </div>
        )}
        {/* if no category selected */}
        {showMen == false && showWomen == false && showChild == false && (
          <div className="no-category text-center">
            <h2>No Categoty Selected!</h2>
            <span>Select a Category to View Products!</span>
          </div>
        )}
      </div>
    </section>
  );
};

export default Products;

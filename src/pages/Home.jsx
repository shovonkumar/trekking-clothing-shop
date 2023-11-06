import About from "../components/about/About";
import Banner from "../components/banner/Banner";
import Footer from "../components/footer/Footer";
import ProductFilter from "../components/productFilter/ProductFilter";
import Products from "../components/products/Products";

const Home = () => {
  return (
    <>
      <main>
        <Banner />
        <ProductFilter />
        <Products />
        <About />
      </main>
      <Footer />
    </>
  );
};

export default Home;

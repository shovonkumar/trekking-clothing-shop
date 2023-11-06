import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Preloader from "./components/preloader/Preloader";
import Cart from "./components/cart/Cart";
import Navbar from "./components/navbar/Navbar";
import ProductPreview from "./components/productPreview/ProductPreview";
import Home from "./pages/Home";
import ProductsPage from "./pages/ProductsPage";
import ScrollRestore from "./components/scrollRestore/ScrollRestore";

function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);
  return (
    <>
      {loading ? (
        <Preloader />
      ) : (
        <BrowserRouter>
          <ScrollRestore />
          <Navbar />
          <Routes>
            <Route path="/" element={<Home isloading={loading} />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/product/:id" element={<ProductPreview />} />
          </Routes>
        </BrowserRouter>
      )}
    </>
  );
}

export default App;

import { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [clicked, setClicked] = useState(false);
  const [navBg, setNavBg] = useState(false);

  // for changing nav style on different route
  const location = useLocation();
  const navStyle = {
    "/": "navbar-home",
  };
  const currentStyle = navStyle[location.pathname] || "navbar-default";

  //for add background to navbar on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (location.pathname === "/") {
        if (window.scrollY > 160) {
          setNavBg(true);
        } else {
          setNavBg(false);
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [location.pathname]);

  return (
    <header>
      <nav className={`navbar ${currentStyle} ${navBg && "nav-black"}`}>
        <div className="container position-relative text-white">
          <NavLink to="/" className="nav_logo">
            <h3 className={clicked ? "d-none" : "d-block"}>
              Trekking<span>.</span>
            </h3>
          </NavLink>
          <div className={clicked ? "nav_items nav_items_mobile" : "nav_items"}>
            <NavLink
              className="nav_link"
              to="/"
              onClick={() => setClicked(false)}
            >
              Home
            </NavLink>
            <NavLink
              className="nav_link"
              to="/products"
              onClick={() => setClicked(false)}
            >
              Products
            </NavLink>
            <NavLink
              className="nav_link nav_link_cart"
              to="/cart"
              onClick={() => setClicked(false)}
            >
              <i className="bx bxs-cart"></i>
            </NavLink>
          </div>
          <div
            className="mobile_nav_btn d-md-none"
            onClick={() => setClicked(!clicked)}
          >
            <i className={clicked ? "bx bx-x" : "bx bx-menu"}></i>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;

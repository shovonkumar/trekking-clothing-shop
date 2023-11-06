import { Link } from "react-router-dom";
import { useCartContext } from "../context/CartContext";
import { ToastContainer, toast, Flip } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Cart.css";

const Cart = () => {
  const { state, dispatch, uniqueItemIds } = useCartContext();
  const { cartItems } = state;

  const removeFromCart = (itemId) => {
    dispatch({ type: "REMOVE_FROM_CART", payload: itemId });
    toast.error("Product Removed", {
      autoClose: 100,
      pauseOnHover: false,
      transition: Flip,
      hideProgressBar: true,
      closeOnClick: true,
      theme: "colored",
    });
  };

  const totalPrice = cartItems.reduce((totalPrice, item) => {
    return totalPrice + item.price;
  }, 0);

  return (
    <section className="cart">
      <div className="container">
        {cartItems.length > 0 ? (
          <div className="d-flex flex-column flex-sm-row align-items-center justify-content-center mb-3 gap-1 gap-sm-5">
            <h2 className="cart-title mb-0">
              Cart Items: <span>{cartItems.length}</span>
            </h2>
            <p className="cart-title mb-0">
              Total Price: <span>${totalPrice.toFixed(2)}</span>
            </p>
          </div>
        ) : (
          <div className="text-center mt-4">
            <h2 className="cart-title mb-4" style={{ fontSize: "2rem" }}>
              Your Cart is Empty!
            </h2>
            <Link to="/products" className="button cart-btn">
              Shop a Product
            </Link>
          </div>
        )}

        <ul>
          {Array.from(uniqueItemIds).map((itemId) => {
            const item = cartItems.find((cartItem) => cartItem.id === itemId);
            const uniqueItemCount = cartItems.filter(
              (cartItem) => cartItem.id === itemId
            ).length;

            return (
              <div key={itemId} className="cart-item d-flex mb-3">
                <div className="cart-item-image text-center">
                  <img src={item.image} alt="Cart Item Image" />
                </div>
                <div className="cart-item-details d-flex flex-column justify-content-between h-100 w-100">
                  <h4 className="cart-item-name">
                    <Link to={"/product/" + item.id}>{item.name}</Link>
                  </h4>
                  <div className="d-flex flex-column flex-sm-row mt-sm-2 justify-content-sm-between">
                    <p>
                      Price: <span>${item.price.toFixed(2)}</span>
                    </p>
                    <p>
                      Quantity: <span>{uniqueItemCount}</span>
                    </p>
                    <p>
                      Subtotal:
                      <span> ${(item.price * uniqueItemCount).toFixed(2)}</span>
                    </p>
                  </div>
                  <div className="text-start text-sm-end">
                    <button
                      type="button"
                      className="button"
                      onClick={() => removeFromCart(item.id)}
                    >
                      Remove Item
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </ul>
        {cartItems.length > 0 && (
          <div className="text-center pt-3">
            <Link className="button cart-btn">Checkout</Link>
          </div>
        )}
        <ToastContainer />
      </div>
    </section>
  );
};

export default Cart;

/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext, useContext, useReducer } from "react";
import reducer from "./CartReducer";

const CartContext = createContext();

export const useCartContext = () => {
  return useContext(CartContext);
};

export const CartProvider = ({ children }) => {
  const initialState = {
    cartItems: JSON.parse(localStorage.getItem("cartItems")) || [],
  };

  const [state, dispatch] = useReducer(reducer, initialState);
  const uniqueItemIds = new Set(state.cartItems.map((item) => item.id));

  return (
    <CartContext.Provider value={{ state, dispatch, uniqueItemIds }}>
      {children}
    </CartContext.Provider>
  );
};

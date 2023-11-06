const CartReducer = (state, action) => {
  if (action.type === "ADD_TO_CART") {
    const updatedCartItems = [...state.cartItems, action.payload];
    localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
    return {
      ...state,
      cartItems: updatedCartItems,
    };
  }
  if (action.type === "REMOVE_FROM_CART") {
    const updatedItems = state.cartItems.filter(
      (item) => item.id !== action.payload
    );
    localStorage.setItem("cartItems", JSON.stringify(updatedItems));
    return {
      ...state,
      cartItems: updatedItems,
    };
  }
  return state;
};

export default CartReducer;

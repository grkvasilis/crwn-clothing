import { createSelector } from "reselect";
import { CartState } from "./cartReducer";

const selectReducer = (state): CartState => state.cart;

export const selectCartItems = createSelector(
  [selectReducer],
  (cart) => cart.cartItems
);

export const selectIsCartOpen = createSelector(
  [selectReducer],
  (cart) => cart.isCartOpen
);

export const selectCartCount = createSelector([selectCartItems], (cartItems) =>
  cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0)
);

export const selectCartTotal = createSelector([selectCartItems], (cartItems) =>
  cartItems.reduce(
    (total, cartItem) => total + cartItem.quantity * cartItem.price,
    0
  )
);
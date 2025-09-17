import { useSelector, useDispatch } from "react-redux";
import {
  selectCartCount,
  selectIsCartOpen,
} from "../../store/cart/cartSelector";
import { setIsCartOpen } from "../../store/cart/cartAction";

import { ShoppingIcon, CartIconContainer, ItemCount } from "./CartIcon.styles";

const CartIcon = () => {
  const dispatch = useDispatch();
  const isCartOpen = useSelector(selectIsCartOpen);
  const cartCount = useSelector(selectCartCount);

  const toggleIsCartOpen = () => dispatch(setIsCartOpen(!isCartOpen));

  return (
    <CartIconContainer onClick={toggleIsCartOpen}>
      <ShoppingIcon />
      <ItemCount>{cartCount}</ItemCount>
    </CartIconContainer>
  );
};

export default CartIcon;

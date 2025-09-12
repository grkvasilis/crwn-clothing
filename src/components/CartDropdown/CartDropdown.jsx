import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import { CartContext } from "../../contexts/CartContext";

import Button from "../Button/Button";
import CartItem from "../CartItem/CartItem";

import {CartDropdownContainer,EmptyMessage,CartItems} from "./CartDropdown.style"

const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);
  const navigate = useNavigate();

  const goToCheckoutHandler = () => {
    navigate("/checkout");
  };

  return (
    <CartDropdownContainer>
      <CartItems>
        {cartItems.length ? (
          cartItems.map((item) => <CartItem key={item.id} cartItem={item} />)
        ) : (
          <EmptyMessage>Your Cart is empty</EmptyMessage>
        )}
      </CartItems>
      <Button onClick={goToCheckoutHandler}>Go to Checkout</Button>
    </CartDropdownContainer>
  );
};

export default CartDropdown;

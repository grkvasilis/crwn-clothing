import { useContext } from "react";

import Button,{BUTTON_TYPE_CLASSES} from "../Button/Button";
import { CartContext } from "../../contexts/CartContext";

import {ProductCartContainer,Footer,Name,Price} from  "./ProductCard.styles.jsx";

const ProductCard = ({ product }) => {
  const { imageUrl, name, price } = product;
  const { addItemToCart } = useContext(CartContext);
  const addProductToCart = ()=>addItemToCart(product)
  return (
    <ProductCartContainer>
      <img src={imageUrl} alt={`${name}`} />
      <Footer>
        <Name>{name}</Name>
        <Price>{price}</Price>
      </Footer>
      <Button buttonType={BUTTON_TYPE_CLASSES.inverted} onClick={addProductToCart}>
        Add to Cart
      </Button>
    </ProductCartContainer>
  );
};

export default ProductCard;

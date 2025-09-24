import { useDispatch,useSelector } from "react-redux";
import { addItemToCart } from "../../store/cart/cartAction";
import { selectCartItems } from "../../store/cart/cartSelector";

import Button,{BUTTON_TYPE_CLASSES} from "../Button/Button";

import {ProductCartContainer,Footer,Name,Price} from  "./ProductCard.styles";
import { CategoryItem } from "../../store/categories/categoryTypes";
import { FC } from "react";

type ProductCardProps = {
  product:CategoryItem
}

const ProductCard:FC<ProductCardProps> = ({ product }) => {
  const dispatch = useDispatch()
  const cartItems = useSelector(selectCartItems)
  const { imageUrl, name, price } = product;
  
  const addProductToCart = ()=>dispatch(addItemToCart(cartItems,product))
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

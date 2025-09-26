import { FC,memo } from "react";
import {CartItem as TCartItem} from "../../store/cart/cartTypes"
import {CartItemContainer,ItemDetails} from "./CartItem.styles"

type CartItemProps = {
    cartItem:TCartItem;
}

const CartItem: FC<CartItemProps> = memo(({cartItem})=> {

    const {imageUrl,name,quantity,price} = cartItem; 

    return(
        <CartItemContainer>
            <img src={imageUrl} alt={`${name}`} />
            <ItemDetails>
            <span>{name}</span>
            <span>
                {quantity} x ${price}
            </span>
            </ItemDetails>
          
        </CartItemContainer>
    )
})

export default CartItem
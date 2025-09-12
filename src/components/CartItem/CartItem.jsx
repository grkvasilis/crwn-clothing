import {CartItemContainer,ItemDetails} from "./CartItem.styles.jsx"

const CartItem = ({cartItem})=> {

    const {imageUrl,name,quantity,price} = cartItem; 

    return(
        <CartItemContainer>
            <img src={imageUrl} alt={`${name}`} />
            <CartItemContainer>
            <span>{name}</span>
            <span>
                {quantity} x ${price}
                </span>
            </CartItemContainer>
          
        </CartItemContainer>
    )
}

export default CartItem
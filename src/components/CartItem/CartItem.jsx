import {CartItemContainer,ItemDetails} from "./CartItem.styles.jsx"

const CartItem = ({cartItem})=> {

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
}

export default CartItem
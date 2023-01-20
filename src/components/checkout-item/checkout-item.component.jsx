import { useContext } from 'react';
import { CartContext } from '../../context/cart.context';

import { CheckoutItemContainer,ImageContainer, Name, Quantity, Price, RemoveButton } from './checkout-item.styles';
const CheckoutItem = ({cartItem}) => {
    const {name, imageUrl, price, quantity} = cartItem;
    const {addItemToCart, removeItemFromCart, clearItemFromCart} = useContext(CartContext);

    const addToCartHandler = () => addItemToCart(cartItem);
    const removeFromCartHandler = () => removeItemFromCart(cartItem);
    const clearFromCartHandler = () => clearItemFromCart(cartItem);

    return (
        <CheckoutItemContainer >
            <ImageContainer >
                <img src={require('../../assets/img/'+imageUrl+'.jpg')} alt={`${name}`} />
            </ImageContainer>
            <Name >{name}</Name>
            <Quantity>
                <div className='arrow' onClick={removeFromCartHandler}>
                &#10094;
                </div>
                <span className='value' >{quantity}</span>
                <div className='arrow' onClick={addToCartHandler} >
                &#10095;
                </div>
            </Quantity>
            <Price>{price}</Price>
            <RemoveButton onClick={clearFromCartHandler} >&#10005;</RemoveButton>
        </CheckoutItemContainer>
    )
}

export default CheckoutItem;
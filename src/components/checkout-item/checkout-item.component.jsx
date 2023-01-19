import { useContext } from 'react';
import { CartContext } from '../../context/cart.context';

import './checkout-item.styles.scss';

const CheckoutItem = ({cartItem}) => {
    const {name, imageUrl, price, quantity} = cartItem;
    const {addItemToCart, removeItemFromCart, clearItemFromCart} = useContext(CartContext);

    const addToCartHandler = () => addItemToCart(cartItem);
    const removeFromCartHandler = () => removeItemFromCart(cartItem);
    const clearFromCartHandler = () => clearItemFromCart(cartItem);

    return (
        <div className='checkout-item-container' >
            <div className='image-container' >
                <img src={require('../../assets/img/'+imageUrl+'.jpg')} alt={`${name}`} />
            </div>
            <span className='name' >{name}</span>
            <span className='quantity'>
                <div className='arrow' onClick={removeFromCartHandler}>
                &#10094;
                </div>
                <span className='value' >{quantity}</span>
                <div className='arrow' onClick={addToCartHandler} >
                &#10095;
                </div>
            </span>
            <span className='price' >{price}</span>
            <div className='remove-button' onClick={clearFromCartHandler} >&#10005;</div>
        </div>
    )
}

export default CheckoutItem;
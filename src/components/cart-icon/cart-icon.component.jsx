import { useContext } from 'react';

import { CartContext } from '../../context/cart.context';

import { CartIconContainer, ShoppingIcon, ItemCount } from './cart-icon.styles';

const CartIcon = () => {
    const {cartOpen, setCartOpen, cartCount} = useContext(CartContext);

    const toggleCartOpen = () => setCartOpen(!cartOpen)

    return (
        <CartIconContainer onClick={toggleCartOpen} >
            <ShoppingIcon />
            <ItemCount >{cartCount}</ItemCount>
        </CartIconContainer>
    )
}

export default CartIcon;
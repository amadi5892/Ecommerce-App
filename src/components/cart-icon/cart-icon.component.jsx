import { useContext } from 'react';

import { CartContext } from '../../context/cart.context';

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';

import './cart-icon.styles.scss';

const CartIcon = () => {
    const {cartOpen, setCartOpen, cartCount} = useContext(CartContext);

    const toggleCartOpen = () => setCartOpen(!cartOpen)

    return (
        <div className='cart-icon-container' onClick={toggleCartOpen} >
            <ShoppingIcon className='shopping-icon' />
            <span className='item-count' >{cartCount}</span>
        </div>
    )
}

export default CartIcon;
import { Fragment, useContext } from "react";
import { Outlet, Link } from "react-router-dom";

import { ReactComponent as SharpLogo } from '../../assets/sharplogo.svg';

import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";

import { UserContext } from "../../context/user.context";
import { signOutUser } from "../../utils/firebase/firebase.utils";
import { CartContext } from "../../context/cart.context";

import {NavigationContainer, NavLinksContainer, NavLink, LogoContainer, Logo} from './navigation.styles.jsx';

const Navigation = () => {
    const { currentUser } = useContext(UserContext);

    const { cartOpen } = useContext(CartContext);


    return (
        <Fragment>
            <NavigationContainer >
                <LogoContainer to='/' >
                    <Logo />
                </LogoContainer>
                <NavLinksContainer >
                    <NavLink to='/shop/womens'>
                        Women's Perfume
                    </NavLink>
                    <NavLink to='/shop/mens'>
                        Men's Cologne
                    </NavLink>
                    <NavLink to='/shop/unisex'>
                        Unisex Fragrance
                    </NavLink>
                    <NavLink to='/shop'>
                        Shop
                    </NavLink>
                    {currentUser ? (
                        <NavLink as='span' onClick={signOutUser}>Sign Out</NavLink>
                    ) : (
                        <NavLink to='/auth'>
                        Sign In
                        </NavLink>
                    )}
                    <CartIcon />
                </NavLinksContainer>
                {cartOpen && <CartDropdown /> }
            </NavigationContainer>
            <Outlet />
        </Fragment>
    )
}

export default Navigation;
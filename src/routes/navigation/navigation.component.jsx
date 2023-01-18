import { Fragment, useContext } from "react";
import { Outlet, Link } from "react-router-dom";

import { ReactComponent as SharpLogo } from '../../assets/sharplogo.svg';

import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";

import { UserContext } from "../../context/user.context";
import { signOutUser } from "../../utils/firebase/firebase.utils";

import './navigation.styles.scss';

const Navigation = () => {
    const { currentUser } = useContext(UserContext);


    return (
        <Fragment>
            <div className='navigation' >
                <Link className='logo-container' to='/' >
                    <SharpLogo className='logo' />
                </Link>
                <div className='nav-links-container' >
                    <Link className='nav-link' to='/perfume'>
                        Women's Perfume
                    </Link>
                    <Link className='nav-link' to='/cologne'>
                        Men's Cologne
                    </Link>
                    <Link className='nav-link' to='/unisex'>
                        Unisex Fragrance
                    </Link>
                    <Link className='nav-link' to='/shop'>
                        Shop
                    </Link>
                    {currentUser ? (
                        <span className='nav-link' onClick={signOutUser}>Sign Out</span>
                    ) : (
                        <Link className='nav-link' to='/auth'>
                        Sign In
                        </Link>
                    )}
                    <CartIcon />
                </div>
                <CartDropdown />
            </div>
            <Outlet />
        </Fragment>
    )
}

export default Navigation;
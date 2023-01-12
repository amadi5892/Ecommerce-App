import { Fragment } from "react";
import { Outlet, Link } from "react-router-dom";

import './navigation.styles.css';

const Navigation = () => {
    return (
        <Fragment>
            <div className='navigation' >
                <Link className='logo-container' to='/' >
                    <span>Logo</span>
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
                    <Link className='nav-link' to='/auth'>
                        Sign In
                    </Link>

                </div>
            </div>
            <Outlet />
        </Fragment>
    )
}

export default Navigation;
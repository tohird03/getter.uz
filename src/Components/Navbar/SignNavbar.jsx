import React from 'react';
import { NavLink } from "react-router-dom"
const SignNavbar = () => {
    return (
        <nav className='sign-navbar'>
            <div className="container">
                <NavLink
                    to="/"
                    className='sign-navbar__logo'>
                        Getter
                </NavLink>
            </div>
        </nav>
    );
}

export default SignNavbar;

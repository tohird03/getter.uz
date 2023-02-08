import React from 'react';
import { NavLink } from "react-router-dom"
import "./Navbar.scss"
import menu from "../../Assets/Images/siteMenu.svg"
const Navbar = () => {
    return (
        <nav className='navbar'>
            <div className="container navbar__container">
                <div className='navbar__menu'>
                    <NavLink
                        to="/"
                        className='navbar__logo'>
                        Getter
                    </NavLink>
                    <ul className='navbar__list'>
                        <li className='navbar__item'>
                            <a className='navbar__link navbar__link-menu' href="#">
                                <svg width="8" height="9" viewBox="0 0 8 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="1" cy="1.5" r="1" fill="none" />
                                    <circle cx="4" cy="1.5" r="1" fill="none" />
                                    <circle cx="7" cy="1.5" r="1" fill="none" />
                                    <circle cx="1" cy="4.5" r="1" fill="none" />
                                    <circle cx="4" cy="4.5" r="1" fill="none" />
                                    <circle cx="7" cy="4.5" r="1" fill="none" />
                                    <circle cx="1" cy="7.5" r="1" fill="none" />
                                    <circle cx="4" cy="7.5" r="1" fill="none" />
                                    <circle cx="7" cy="7.5" r="1" fill="none" />
                                </svg>
                                <p>
                                    menu
                                </p>
                            </a>
                        </li>
                        <li className='navbar__item'>
                            <NavLink to="/about" className='navbar__link' href="#">
                                О нас
                            </NavLink>
                        </li>
                        <li className='navbar__item'>
                            <NavLink
                                to="/product" className='navbar__link' href="#">
                                Продукты
                            </NavLink>
                        </li>
                        <li className='navbar__item'>
                            <NavLink
                                to="/portfolio" className='navbar__link' href="#">
                                Портфолио
                            </NavLink>
                        </li>
                        <li className='navbar__item'>
                            <NavLink to="/article" className='navbar__link' href="#">
                                Статья
                            </NavLink>
                        </li>
                        <li className='navbar__item'>
                            <NavLink to="/contact" className='navbar__link'>
                                Контакты
                            </NavLink>
                        </li>
                    </ul>
                </div>

                <ul className='navbar__right-list'>
                    <li className='navbar__right-item'>
                        <a className='navbar__right-link' href="#">
                            Заказать проект
                        </a>
                    </li>
                    <li className='navbar__right-item'>
                        <NavLink to="/signin" className='navbar__right-link' href="#">
                            Профиль
                        </NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;

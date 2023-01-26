import React from 'react';
import { NavLink } from "react-router-dom"
import "./Navbar.scss"
const Navbar = () => {
    return (
        <nav className='navbar'>
            <div className="container navbar__container">
                <div className='navbar__menu'>
                    <h1 className='navbar__logo'>Getter</h1>
                    <ul className='navbar__list'>
                        <li className='navbar__item'>
                            <a className='navbar__link' href="#">
                                menu
                            </a>
                        </li>
                        <li className='navbar__item'>
                            <a className='navbar__link' href="#">
                                О нас
                            </a>
                        </li>
                        <li className='navbar__item'>
                            <a className='navbar__link' href="#">
                                Продукты
                            </a>
                        </li>
                        <li className='navbar__item'>
                            <NavLink
                                to="/portfolio" className='navbar__link' href="#">
                                Портфолио
                            </NavLink>
                        </li>
                        <li className='navbar__item'>
                            <a className='navbar__link' href="#">
                                Статья
                            </a>
                        </li>
                        <li className='navbar__item'>
                            <a className='navbar__link' href="#">
                                Контакты
                            </a>
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

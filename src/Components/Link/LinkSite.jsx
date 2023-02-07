import React from 'react';
import { NavLink } from 'react-router-dom';
import "./LinkSite.scss"
const LinkSite = () => {
    return (
        <div className='link'>
            <span className='link__hr'></span>
            <div className="container link__container">
                <div className='link__content'>
                    <NavLink to="/recomendation" className='link__add'>
                        <span className='link__add-span'>
                            +
                        </span>
                        <span className='link__add-desc'>
                        Реккомендовать сайт
                        </span>
                    </NavLink>

                    <div className='link__button-wrapper '>
                        <button className='link__active'>
                            Популярные сайты
                        </button>
                    </div>
                </div>
                <div className='link__content'>
                    <NavLink to="/order" className='link__add'>
                        <span className='link__add-span'>
                            +
                        </span>
                        <span className='link__add-desc'>
                            Заказать сайт
                        </span>
                    </NavLink>

                    <div className='link__button-wrapper active'>
                        <button>
                            Наше портфолио
                        </button>
                    </div>
                </div>
                <div className='link__content'>
                    <a className='link__add' href="#">
                        <span className='link__add-span'>
                            +
                        </span>
                        <span className='link__add-desc'>
                        Добавить статью
                        </span>
                    </a>

                    <div className='link__button-wrapper active' style={{ border: "none" }}>
                        <button>
                            Статьи
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LinkSite;

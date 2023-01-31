import React from 'react';
import "./LinkSite.scss"
const LinkSite = () => {
    return (
        <div className='link'>
            <span className='link__hr'></span>
            <div className="container link__container">
                <div className='link__content'>
                    <a className='link__add' href="#">
                        <span className='link__add-span'>+</span>
                        Реккомендовать сайт
                    </a>

                    <div className='link__button-wrapper '>
                        <button className='link__active'>
                            Популярные сайты
                        </button>
                    </div>
                </div>
                <div className='link__content'>
                    <a className='link__add' href="#">
                        <span className='link__add-span'>
                            +
                        </span>
                        Заказать сайт
                    </a>

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
                        Добавить статью
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

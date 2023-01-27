import React from 'react';
import ArticleCard from '../../Components/ArticleCard/ArticleCard';
import Navbar from '../../Components/Navbar/Navbar';
import "./Article.scss"
const Article = () => {
    return (
        <>
            <header className='light__header'>
                <Navbar />
            </header>
            <main>
                <section className='article'>
                    <div className="container article__container">
                        <div className='article-sidebar'>
                            <h3 className='article-sidebar__heading'>
                                Все статьи
                            </h3>
                            <ul className='article-sidebar__list'>
                                <li className='article-sidebar__item'>
                                    <button className='article-sidebar__button'>
                                        Интерфейсы
                                    </button>
                                </li>
                                <li className='article-sidebar__item'>
                                    <button className='article-sidebar__button'>
                                        Интерфейсы
                                    </button>
                                </li>
                                <li className='article-sidebar__item'>
                                    <button className='article-sidebar__button'>
                                        Интерфейсы
                                    </button>
                                </li>
                                <li className='article-sidebar__item'>
                                    <button className='article-sidebar__button'>
                                        Интерфейсы
                                    </button>
                                </li>
                                <li className='article-sidebar__item'>
                                    <button className='article-sidebar__button'>
                                        Интерфейсы
                                    </button>
                                </li>
                                <li className='article-sidebar__item'>
                                    <button className='article-sidebar__button'>
                                        Интерфейсы
                                    </button>
                                </li>
                                <li className='article-sidebar__item'>
                                    <button className='article-sidebar__button'>
                                        Интерфейсы
                                    </button>
                                </li>
                                <li className='article-sidebar__item'>
                                    <button className='article-sidebar__button'>
                                        Интерфейсы
                                    </button>
                                </li>
                            </ul>
                        </div>
                        <div className='article__cards'>
                            <ArticleCard />
                            <ArticleCard />
                            <ArticleCard />
                            <ArticleCard />
                            <ArticleCard />
                            <ArticleCard />
                            <ArticleCard />
                            <ArticleCard />
                            <ArticleCard />
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}

export default Article;

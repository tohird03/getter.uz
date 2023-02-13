import React, { useContext } from 'react';
import ArticleCard from '../../Components/ArticleCard/ArticleCard';
import Navbar from '../../Components/Navbar/Navbar';
import { Context } from '../../Context/ApiContext';
import "./Article.scss"
const Article = () => {
    const { article } = useContext(Context)

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
                            {
                                article && article?.map(item => {
                                    return <ArticleCard data={item}/>
                                })
                            }

                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}

export default Article;

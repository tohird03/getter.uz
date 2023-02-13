import React, { useContext } from 'react';
import ArticleCard from '../../Components/ArticleCard/ArticleCard';
import Navbar from '../../Components/Navbar/Navbar';
import { Context } from '../../Context/ApiContext';
import profilePhoto from "../../Assets/Images/articleOnce.png"
import { NavLink } from 'react-router-dom';

import "./ArticleAdd.scss"
const ArticleAdd = () => {
    const { article } = useContext(Context)

    return (
        <>
            <header className='light__header'>
                <Navbar />
            </header>
            <main className='profile-page__main'>
                <section className='profile-page'>
                    <div className="container article__container">
                        <div className='profile-page__sidebar'>
                            <p className='article-page__saved'>
                                Profile / saved / <span>edit</span>
                            </p>
                            <NavLink
                                to="/profile"
                                className='profile-page__link profile-page-top' >
                                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M13 3H16C16.2652 3 16.5196 3.10536 16.7071 3.29289C16.8946 3.48043 17 3.73478 17 4V15C17 15.5304 16.7893 16.0391 16.4142 16.4142C16.0391 16.7893 15.5304 17 15 17M15 17C14.4696 17 13.9609 16.7893 13.5858 16.4142C13.2107 16.0391 13 15.5304 13 15V2C13 1.73478 12.8946 1.48043 12.7071 1.29289C12.5196 1.10536 12.2652 1 12 1H2C1.73478 1 1.48043 1.10536 1.29289 1.29289C1.10536 1.48043 1 1.73478 1 2V14C1 14.7956 1.31607 15.5587 1.87868 16.1213C2.44129 16.6839 3.20435 17 4 17H15ZM5 5H9M5 9H9M5 13H9" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                                Мои статьи
                            </NavLink>
                            <NavLink to="/articleadd" className='profile-page__link add__statya'>
                                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M5.9987 1.3335V10.6668M1.33203 6.00016H10.6654" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                                Добавить статя
                            </NavLink>
                            <a className='profile-page__link ' href="#">
                                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M13 3H16C16.2652 3 16.5196 3.10536 16.7071 3.29289C16.8946 3.48043 17 3.73478 17 4V15C17 15.5304 16.7893 16.0391 16.4142 16.4142C16.0391 16.7893 15.5304 17 15 17M15 17C14.4696 17 13.9609 16.7893 13.5858 16.4142C13.2107 16.0391 13 15.5304 13 15V2C13 1.73478 12.8946 1.48043 12.7071 1.29289C12.5196 1.10536 12.2652 1 12 1H2C1.73478 1 1.48043 1.10536 1.29289 1.29289C1.10536 1.48043 1 1.73478 1 2V14C1 14.7956 1.31607 15.5587 1.87868 16.1213C2.44129 16.6839 3.20435 17 4 17H15ZM5 5H9M5 9H9M5 13H9" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                                Сoхраненые
                            </a>

                            <button>

                            </button>
                        </div>
                        <div style={{width: "150%"}} className='profile-page__cards'>

                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos quibusdam maiores at ea optio, eligendi soluta veniam cum laudantium et qui minus, natus provident! Ratione mollitia iure sunt porro impedit? Odit provident eligendi dignissimos vel minus saepe dolorum earum doloremque doloribus! Ullam ratione cumque doloribus voluptates, non quod illo praesentium quae quaerat omnis cum repellendus aliquam facere ab vero aspernatur officiis, doloremque nostrum quos ipsam debitis, natus saepe. Nulla repellendus debitis tempora, quasi cupiditate sapiente voluptatum facere maxime perferendis minima earum praesentium in illum deleniti cum soluta perspiciatis eligendi explicabo iste eaque, repudiandae, optio dolorum officiis. Alias, placeat odio aliquid nobis numquam possimus rerum at magni officia ad mollitia ex totam, dolores excepturi eligendi consectetur enim dolore consequatur facere rem ullam illo ducimus dicta vitae. Delectus ipsum ea a dignissimos illo dolores debitis cumque explicabo, assumenda voluptatem nesciunt voluptas dolorum? Exercitationem esse dignissimos reprehenderit quam aperiam odio sunt cupiditate! Assumenda, consectetur. Repudiandae harum nostrum nemo necessitatibus nesciunt totam doloribus fuga, veniam, corrupti consequuntur quisquam! Nobis libero et ex error commodi totam nulla, atque mollitia labore, harum vel tenetur molestias a sapiente officiis. Ad illo consequatur eos odit, doloribus quisquam tempore dolor saepe repellendus perferendis! Ullam facere veniam porro delectus laudantium?
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}

export default ArticleAdd;

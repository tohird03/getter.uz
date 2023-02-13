import React, { useContext } from 'react';
import ArticleCard from '../../Components/ArticleCard/ArticleCard';
import Navbar from '../../Components/Navbar/Navbar';
import { Context } from '../../Context/ApiContext';
import profilePhoto from "../../Assets/Images/articleOnce.png"

import "./Profile.scss"
import { NavLink } from 'react-router-dom';
const Profile = () => {
    const { article } = useContext(Context)

    return (
        <div>
            <>
                <header className='light__header'>
                    <Navbar />
                </header>
                <main className='profile-page__main'>
                    <section className='profile-page'>
                        <div className="container article__container">
                            <div className='profile-page__sidebar'>
                                <a className='profile-page__link active' href="#">
                                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M13 3H16C16.2652 3 16.5196 3.10536 16.7071 3.29289C16.8946 3.48043 17 3.73478 17 4V15C17 15.5304 16.7893 16.0391 16.4142 16.4142C16.0391 16.7893 15.5304 17 15 17M15 17C14.4696 17 13.9609 16.7893 13.5858 16.4142C13.2107 16.0391 13 15.5304 13 15V2C13 1.73478 12.8946 1.48043 12.7071 1.29289C12.5196 1.10536 12.2652 1 12 1H2C1.73478 1 1.48043 1.10536 1.29289 1.29289C1.10536 1.48043 1 1.73478 1 2V14C1 14.7956 1.31607 15.5587 1.87868 16.1213C2.44129 16.6839 3.20435 17 4 17H15ZM5 5H9M5 9H9M5 13H9" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                    Мои статьи
                                </a>
                                <NavLink to="/addarticle" className='profile-page__link add__statya'>
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

                            </div>
                            <div className='article__cards profile-page__cards'>
                                {
                                    article && article?.map(item => {
                                        return <ArticleCard data={item} />
                                    })
                                }

                            </div>
                            <div className='profile-page__avatar'>
                                <div className='articleOnce__person'>
                                    <div className='articleOnce__profile'>
                                        <img className='articleOnce__profile-img' src={profilePhoto} alt="article profile photo" width="80" height="80" />

                                        <div className='article__profile-about'>
                                            <h4 className='articleOnce__profile-name'>
                                                Anton Ptushkin
                                            </h4>
                                            <p className='articleOnce__profile-job'>
                                                Ux Ui designer
                                            </p>
                                        </div>
                                    </div>

                                    <p className='articleOnce__person-desc'>
                                        Anton Ptushkin Lead designer of Nope Studion in Ukraine
                                    </p>

                                </div>
                            </div>
                        </div>
                    </section>
                </main>
            </>
        </div>
    );
}

export default Profile;

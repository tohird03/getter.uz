import React from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import profilePhoto from "../../Assets/Images/articleOnce.png"
import articleImg from "../../Assets/Images/articleOnceImg.png"
const ArticleOnce = () => {
    return (<>
        <header className='light__header'>
            <Navbar />
        </header>
        <main>
            <section>
                <div className='articleOnce container'>
                    <div className='articleOnce__about'>
                        <div className='articleOnce__networks'>
                            <button className='articleOnce__btn'>
                                <svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M17.5013 9.57169L10.0013 16.9997L2.50128 9.57169C2.00658 9.0903 1.61692 8.5117 1.35683 7.87232C1.09673 7.23295 0.971839 6.54664 0.990015 5.85662C1.00819 5.1666 1.16904 4.48782 1.46244 3.86303C1.75583 3.23823 2.17541 2.68094 2.69476 2.22627C3.21411 1.77159 3.82198 1.42938 4.48009 1.22117C5.1382 1.01296 5.83228 0.943272 6.51865 1.01649C7.20501 1.08971 7.86878 1.30425 8.46815 1.64659C9.06753 1.98894 9.58953 2.45169 10.0013 3.00569C10.4148 2.45571 10.9374 1.99701 11.5364 1.65829C12.1353 1.31958 12.7978 1.10814 13.4822 1.03721C14.1666 0.966279 14.8584 1.03739 15.5141 1.24608C16.1697 1.45477 16.7753 1.79656 17.2928 2.25005C17.8104 2.70354 18.2287 3.25897 18.5217 3.88158C18.8147 4.50419 18.976 5.18057 18.9956 5.8684C19.0152 6.55622 18.8925 7.24068 18.6354 7.87894C18.3783 8.5172 17.9922 9.09551 17.5013 9.57769" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </button>
                            <button className='articleOnce__btn'>
                                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M5 5H13M5 9H11M1 17V4C1 3.20435 1.31607 2.44129 1.87868 1.87868C2.44129 1.31607 3.20435 1 4 1H14C14.7956 1 15.5587 1.31607 16.1213 1.87868C16.6839 2.44129 17 3.20435 17 4V10C17 10.7956 16.6839 11.5587 16.1213 12.1213C15.5587 12.6839 14.7956 13 14 13H5L1 17Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>

                            </button>
                            <button className='articleOnce__btn'>
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M6.70001 8.69999L13.3 5.29999M6.70001 11.3L13.3 14.7M7 10C7 11.6569 5.65685 13 4 13C2.34315 13 1 11.6569 1 10C1 8.34315 2.34315 7 4 7C5.65685 7 7 8.34315 7 10ZM19 4C19 5.65685 17.6569 7 16 7C14.3431 7 13 5.65685 13 4C13 2.34315 14.3431 1 16 1C17.6569 1 19 2.34315 19 4ZM19 16C19 17.6569 17.6569 19 16 19C14.3431 19 13 17.6569 13 16C13 14.3431 14.3431 13 16 13C17.6569 13 19 14.3431 19 16Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </button>
                        </div>

                        <div className='articleOnce__article'>
                            <h2 className='articleOnce__heading'>
                                UX/UI Design Trends That Will Dominate 2022
                            </h2>

                            <p className='articleOnce__upload-time'>
                                January 25, 2023
                                <span className='articleOnce__upload-ago'>
                                    6 minutes
                                </span>
                            </p>

                            <div className='articleOnce__profile'>
                                <img className='articleOnce__profile-img' src={profilePhoto} alt="article profile photo" width="60" height="60" />

                                <div className='article__profile-about'>
                                    <h4 className='articleOnce__profile-name'>
                                        Anton Ptushkin
                                    </h4>
                                    <p className='articleOnce__profile-job'>
                                        Ux Ui designer
                                    </p>
                                </div>
                            </div>

                            <img className='articleOnce__article-img' src={articleImg} alt="article img" width="690" height="380" />

                            <h4 className='articleOnce__article-heading'>
                                Креативные решения
                            </h4>

                            <p className='articleOnce__article-desc'>
                                Таким образом, вместо работы с разнообразием предложений, которое часто определяет дизайнерские решения в электронной коммерции, на этот раз команде предстояло решить интересную задачу — эмоционально, убедительно и всесторонне презентовать довольно инновационный и узкоспециализированный продукт. Необходимо было создать дизайн, который выделит бренд из толпы на чрезвычайно конкурентном рынке продуктов питания.
                            </p>
                        </div>
                    </div>
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

                        <button className='articleOnce__btn'>
                            <svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M19 3C19 1.89543 18.1046 1 17 1H3C1.89543 1 1 1.89543 1 3M19 3V13C19 14.1046 18.1046 15 17 15H3C1.89543 15 1 14.1046 1 13V3M19 3L10 9L1 3" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </button>

                        <p className='articleOnce__more-desc'>
                            More From Anton
                        </p>

                        <dir>
                            <div>
                                <div className='article-card__heshtag'>
                                    <p className='article-card__heshtag-type'>
                                        #Ux
                                    </p>
                                    <p className='article-card__heshtag-type'>
                                        #Ui
                                    </p>
                                    <p className='article-card__heshtag-type'>
                                        #Uxlaw
                                    </p>
                                    <p className='article-card__heshtag-type'>
                                        #Tutorial
                                    </p>
                                </div>

                                <p className='articleOnce__heshtag-desc'>
                                    России на автодоме и говорит про цифровой дизайн Нескінчен..
                                </p>
                            </div>
                            <img src="" alt="" />
                        </dir>
                    </div>
                </div>
            </section>
        </main>
    </>);
}

export default ArticleOnce;

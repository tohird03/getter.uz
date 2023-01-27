import React from 'react';
import "./ArticleCard.scss"

import profile from "../../Assets/Images/articleProfile.svg"
import like from "../../Assets/Images/like.svg"
import msg from "../../Assets/Images/msg.svg"
import date from "../../Assets/Images/date.svg"
import cardImg from "../../Assets/Images/articleCardImg.png"
const ArticleCard = () => {
    return (
        <div className='article-card'>
            <div className='article-card__text'>
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
                <h2 className='article-card__title'>
                    России на автодоме и говорит про цифровой дизайн Нескінченна прокрутка: Коли...
                </h2>
                <div className='article-card__footer'>
                    <div className='article-card__author'>
                        <img className='article-card__author-img' src={profile} alt="" />
                        <div>
                            <h3 className='article-card__author-name'>
                                Bekzod Eshmatov
                            </h3>
                            <p className='article-card__author-skill'>
                                WebDesigner
                            </p>
                        </div>
                    </div>

                    <div className='article-card__notification'>
                        <p className='article-card__notification-desc'>
                            <img
                                className='article-card__notification-icon'
                                src={like}
                                alt="Like img svg" />
                            <span>
                                325
                            </span>
                        </p>
                        <p className='article-card__notification-desc'>
                            <img
                                className='article-card__notification-icon'
                                src={msg}
                                alt="Message img svg" />
                            <span>
                                325
                            </span>
                        </p>
                        <p className='article-card__notification-desc'>
                            <img
                                className='article-card__notification-icon'
                                src={date}
                                alt="Like img svg" />
                            <span>
                                6.01.2023
                            </span>
                        </p>
                    </div>
                </div>
            </div>
            <img src={cardImg} alt="" />
        </div>
    );
}

export default ArticleCard;

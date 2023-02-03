import React from 'react';
import "./Card.scss"
import CardImg from "../../Assets/Images/CardImg.png"
import like from "../../Assets/Images/like.svg"
import before from "../../Assets/Images/hover_link.svg"
const Card = () => {
    return (
        <div className='card'>
            <div className='card__header'>
                <img className='card__img' src={CardImg} alt="Card img" />
                <div className='card__hover'>
                    <h3>
                        www.agrobank.uz
                    </h3>
                    <div>
                        <p>
                            125
                        </p>
                        <button className='card__like-btn'>
                            <svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7.24909 12.6528L7.24837 12.6521C5.30729 10.8919 3.7364 9.46452 2.64494 8.12919C1.55898 6.80059 1 5.62437 1 4.375C1 2.33424 2.59055 0.75 4.625 0.75C5.77885 0.75 6.89456 1.28973 7.62058 2.13564L8 2.57771L8.37942 2.13564C9.10544 1.28973 10.2212 0.75 11.375 0.75C13.4095 0.75 15 2.33424 15 4.375C15 5.62437 14.441 6.80059 13.3551 8.12919C12.2636 9.46452 10.6927 10.8919 8.75163 12.6521L8.75091 12.6528L8 13.3363L7.24909 12.6528Z" stroke="white" />
                            </svg>

                        </button>
                        <a href="#">
                            <img src={before} alt="Before page" />
                        </a>
                    </div>
                </div>
            </div>
            <h3 className='card__title'>
                Agro bank
            </h3>
            <p className='card__desc'>
                Lls oks
            </p>
        </div>
    );
}

export default Card;

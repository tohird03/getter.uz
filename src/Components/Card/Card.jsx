import React from 'react';
import "./Card.scss"
import CardImg from "../../Assets/Images/CardImg.png"
const Card = () => {
    return (
        <div className='card'>
            <img className='card__img' src={CardImg} alt="Card img" />
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

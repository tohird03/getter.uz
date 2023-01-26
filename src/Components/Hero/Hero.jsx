import React from 'react';
import "./Hero.scss"

import heroLinkImg from "../../Assets/Images/hero-link.svg"
import heroVector from "../../Assets/Images/Vector.png"

const Hero = () => {
    return (
        <div className="hero">
            <div className="container">
                <h2 className='hero__heading'>
                    Создаем сайты и айдентику от всей души
                </h2>

                <a className='hero__link' href="#">
                    <p className='hero__link-desc'>
                        Давайте обсудим и ваш проект
                    </p>

                    <img className='hero__link-img' src={heroLinkImg} alt="Hero link img" width="608" height="68"/>

                    <img src={heroVector} alt="Hero vector" width="59" height="45"/>
                </a>
            </div>
        </div>
    );
}

export default Hero;

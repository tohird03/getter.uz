import React from 'react';
import "./Hero.scss"

import heroVector from "../../Assets/Images/Vector.png"
import HeroTooltip from './HeroTooltip';

const Hero = () => {
    let arr = [1, 2, 3, 4, 1, 2, 3, 4, 1, 2, 3,]
    return (
        <div className="hero">
            <div className="container">
                <h2 className='hero__heading'>
                    Создаем сайты и айдентику от всей души
                </h2>

                <a className='hero__link' href="#">
                    <div className="container hero__link-container">
                        <p className='hero__link-desc'>
                            Давайте обсудим и ваш проект
                        </p>

                        <div className='hero__profile'>
                            {
                                arr.map((e, i) => {
                                    return <HeroTooltip key={i} style={i} />
                                })
                            }
                        </div>

                        <img
                            className='hero__link-vector'
                            style={{ marginLeft: `-${(arr.length - 1) * 16}px` }}
                            src={heroVector} alt="Hero vector" width="59" height="45" />
                    </div>
                </a>
            </div>
        </div>
    );
}

export default Hero;

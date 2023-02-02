import React from 'react';
import "./Hero.scss"
import heroLinkImg from "../../Assets/Images/hero.png"
const HeroTooltip = (props) => {
    return (
        <div
            className='profile'
            style={{ left: -`${props.style * 15}` }}>
            <img
                className=''
                src={heroLinkImg}
                alt="Hero link img"
                width="68"
                height="68" />
            <div className='profile__about'>
                <div className='tooltip'>
                    <h3>
                        Abdulla Xolmurotov
                    </h3>
                    <p>
                        Designer
                    </p>
                </div>
            </div>
        </div>
    );
}

export default HeroTooltip;

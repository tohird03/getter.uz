import React from 'react';
import "./Hero.scss"
import heroLinkImg from "../../Assets/Images/hero.png"
const HeroTooltip = (props) => {
    let users = props.users
    console.log(users);
    return (
        <div
            className='profile'
            style={{ left: -`${props.style * 15}` }}>
            <img
                className=''
                src={users.img}
                alt="Hero link img"
                width="68"
                height="68" />
            <div className='profile__about'>
                <div className='tooltip'>
                    <h3>
                        {users.name}
                    </h3>
                    <p>
                        {users.job}
                    </p>
                </div>
            </div>
        </div>
    );
}

export default HeroTooltip;

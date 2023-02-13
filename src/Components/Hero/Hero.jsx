import React from 'react';
import { Link, NavLink } from "react-router-dom"
import "./Hero.scss"

import heroVector from "../../Assets/Images/Vector.png"
import HeroTooltip from './HeroTooltip';
import LinkSite from '../Link/LinkSite';

import img from "../../Assets/Images/IMAGE.png"
import img1 from "../../Assets/Images/IMAGE (1).png"
import img2 from "../../Assets/Images/IMAGE (2).png"
import img3 from "../../Assets/Images/IMAGE (3).png"
import img4 from "../../Assets/Images/IMAGE (4).png"
import img5 from "../../Assets/Images/IMAGE (5).png"
import img6 from "../../Assets/Images/IMAGE (6).png"
import img7 from "../../Assets/Images/IMAGE (7).png"
import img8 from "../../Assets/Images/IMAGE (8).png"
import img9 from "../../Assets/Images/IMAGE (9).png"
import img10 from "../../Assets/Images/IMAGE (10).png"
const Hero = () => {
    let users = [
        {
            name: "Abdulloh",
            img: img,
            job: "Designer"
        },
        {
            name: "Ikromov Davron",
            img: img1,
            job: "Designer"
        },
        {
            name: "Jalolov Abubakir",
            img: img2,
            job: "Backend developer"
        },
        {
            name: "Nasrullayev Jaloliddin",
            img: img3,
            job: "Backend developer"
        },
        {
            name: "Ibrohimov Shahzod",
            img: img4,
            job: "Backend developer"
        },
        {
            name: "Samadov Shaxboz",
            img: img5,
            job: "Designer, PM"
        },
        {
            name: "Abbos Janizakov",
            img: img6,
            job: "Designer, CEO"
        },
        {
            name: "Boltaev Mirsaid",
            img: img7,
            job: "Designer"
        },
        {
            name: "Ibroximov Abdullajon",
            img: img8,
            job: "Frontend developer"
        },
        {
            name: "Oripov Shaxriyor",
            img: img9,
            job: "Designer"
        },
        {
            name: "Abduqaxxorov Abdug'ani",
            img: img10,
            job: "Full Stack developer"
        },
    ]
    return (
        <div className="hero">
            <div className="container">
                <h2 className='hero__heading'>
                    Создаем сайты и айдентику от всей <span className='hero__heading-span'>души</span>
                </h2>

                <div className='hero__about-link'>
                    <NavLink
                        to="/about"
                        className='hero__link'>

                        <span class="top"></span>
                        <span class="right"></span>
                        <span class="bottom"></span>
                        <span class="left"></span>

                        <div className="container hero__link-container">
                            <p className='hero__link-desc'>
                                Давайте обсудим и ваш проект
                            </p>

                            <img
                                className='hero__link-vector'
                                style={{ marginLeft: `${170 + ((users.length - 1) * 50)}px` }}
                                src={heroVector} alt="Hero vector" width="59" height="45" />
                        </div>
                    </NavLink>
                    <div className='hero__profile'>
                        {
                            users && users.map((e, i) => {
                                return <HeroTooltip users={e} key={i} style={i} />
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Hero;

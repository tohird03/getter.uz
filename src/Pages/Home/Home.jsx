import React, { useState, useEffect } from 'react';
import "./Home.scss"
import Navbar from '../../Components/Navbar/Navbar';

import Hero from '../../Components/Hero/Hero';
import Card from '../../Components/Card/Card';
import LinkSite from '../../Components/Link/LinkSite';


const Home = () => {

    // HERO BG ANIMATION
    const [pageY, setPageY] = useState(0)
    const [pageX, setPageX] = useState(0)
    const [navColor, setnavColor] = useState("");

    const handMouse = (e) => {
        setTimeout(() => {
            setPageY(e.pageY)
            setPageX(e.pageX)
        }, 300);
    }

    window.onscroll = (e) => {
        if (document.documentElement.scrollTop > -1) {
            setnavColor("d-none")
        }
    }

    const listenScrollEvent = (e) => {
        let sticky = document.querySelector('.sticky__link')
        let rect = sticky.getBoundingClientRect();
        if (rect.y < 96 && rect.y > 0) {
            sticky.classList.remove("scroll__top")
            sticky.classList.remove("sticky__link-bg")

        } else if (rect.y == 0) {
            sticky.classList.add("scroll__top")
            sticky.classList.add("sticky__link-bg")
        } else {
            sticky.classList.remove("scroll__top")
            sticky.classList.remove("sticky__link-bg")
        }

    };
    useEffect(() => {
        window.addEventListener("scroll", listenScrollEvent);
        return () => {
            window.removeEventListener("scroll", listenScrollEvent);
        };
    }, []);

    let prevScrollPos = window.pageYOffset

    window.onscroll = () => {
        let currentScrollPos = window.pageYOffset
        if (prevScrollPos > currentScrollPos) {
            document.querySelector(".sticky__link").classList.add("scroll__top")
        } else {
            document.querySelector(".sticky__link").classList.add("scroll__top")

            document.querySelector(".sticky__link").style.top = "0"

        }
        prevScrollPos = currentScrollPos
    }

    return (<>
        <header onMouseMove={e => handMouse(e)} className='hero__header'>
            <div style={
                {
                    top: `${pageY}px`,
                    left: `${pageX}px`
                }
            }
                className='hero__header-bg'>
                <div className='hero__anim'>
                    <div className='hero__header-bgTop'>

                    </div>
                    <div
                        onMouseMove={e => handMouse(e)}
                        className='hero__header-bgCenter'
                        style={{transform: "translate(-700px, -700px)"}}>

                    </div>
                    <div className='hero__header-bgBottom'
                    style={{transform: "translate(-375px, -375px)"}}>

                    </div>
                </div>
            </div>
            <div className='nav__sticky'>
                <Navbar />
            </div>
            <Hero />
        </header>
        <div className={`sticky__link ${navColor}`}>
            <LinkSite />
        </div>
        <main>
            <div className="section home__card">
                <div className="container home__card-container">
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </div>
            </div>
        </main>
    </>
    );
}

export default Home;

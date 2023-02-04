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
    const [navScrollY, setNavScrollY] = useState();

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
        let nav = document.querySelector(".nav__sticky")
        let rect = sticky.getBoundingClientRect();
        let navRect = nav.getBoundingClientRect();

        console.log(rect.y);

        // if(rect.y > 95) {
        //     console.log(true);
        //     // nav.style.top = "-96px"
        //     // nav.classList.remove("nav__fixed")
        // }

        // if(rect.y > 750) {
        //     // nav.classList.remove("nav__fixed")
        //     // nav.classList.remove("bg__fix")
        //     nav.style.top = "0"
        // }
        console.log(rect.y);
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
            // document.querySelector(".nav__sticky").classList.add("nav__fixed")
            // document.querySelector(".nav__sticky").classList.add("bg__fix")
            document.querySelector(".sticky__link").classList.add("scroll__top")
            // document.querySelector(".sticky__link").style.top = "95px"
            // document.querySelector(".nav__sticky").classList.remove("nav__topDic")
            // document.querySelector(".nav__sticky").style.top = "0"
        } else {
            // document.querySelector(".nav__sticky").classList.remove("nav__fixed")
            // document.querySelector(".nav__sticky").style.top = "-96px"

            document.querySelector(".sticky__link").classList.add("scroll__top")

            document.querySelector(".sticky__link").style.top = "0"
            // document.querySelector(".nav__sticky").classList.add("nav__topDic")

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
                        className='hero__header-bgCenter'
                        style={{transform: "translate(-700px, -700px)"}}>

                    </div>
                    <div className='hero__header-bgBottom'
                    style={{transform: "translate(-315px, -315px)"}}>

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

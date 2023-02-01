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
        let rect = sticky.getBoundingClientRect();

        if (rect.y == -100 || rect.y == 0 || (rect.y < 0 && rect.y > -100))  {
            setnavColor("sticky__link-bg")
        }else {
            setnavColor("")
            document.querySelector(".sticky__link").classList.remove("scroll__top")
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
        if(prevScrollPos > currentScrollPos) {
            setnavColor("sticky__link-bg")
            document.querySelector(".sticky__link").style.top = "0"
            document.querySelector(".sticky__link").classList.add("scroll__top")
        }else {
            setnavColor("sticky__link")
            document.querySelector(".sticky__link").classList.remove("scroll__top")
            document.querySelector(".sticky__link").style.top = "-105px"
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
                className='hero__header-bgTop'>
                <div className='hero__header-bgCenter'>
                    <div className='hero__header-bgBottom'>

                    </div>
                </div>
            </div>
            <Navbar />
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

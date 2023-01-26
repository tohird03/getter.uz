import React, { useState } from 'react';
import "./Home.scss"
import Navbar from '../../Components/Navbar/Navbar';

import Hero from '../../Components/Hero/Hero';
import Card from '../../Components/Card/Card';
const Home = () => {

    // HERO BG ANIMATION
    const [pageY, setPageY] = useState(0)
    const [pageX, setPageX] = useState(0)
    const handMouse = (e) => {
        setPageY(e.pageY)
        setPageX(e.pageX)
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

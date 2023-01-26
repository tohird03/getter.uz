import React from 'react';

import "./Portfolio.scss"
import Card from '../../Components/Card/Card';
import Navbar from '../../Components/Navbar/Navbar';

const Portfolio = () => {
    return (
        <>
            <header className='light__header'>
                <Navbar />
            </header>
            <main>
                <section className='portfolio'>
                    <div className="container portfolio__container">
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
                </section>
            </main>
        </>
    );
}

export default Portfolio;

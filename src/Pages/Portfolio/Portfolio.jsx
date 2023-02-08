import React, { useContext, useEffect, useState } from 'react';

import "./Portfolio.scss"
import Card from '../../Components/Card/Card';
import Navbar from '../../Components/Navbar/Navbar';
import { Context } from '../../Context/ApiContext';

const Portfolio = () => {
    const { portfolio, setPortfolio } = useContext(Context)
    console.log(portfolio);
    return (
        <>
            <header className='light__header'>
                <Navbar />
            </header>
            <main>
                <section className='portfolio'>
                    <div className="container portfolio__container">
                        {
                            portfolio?.data?.map((item, index) => {
                                return <Card data={item}/>
                            })
                        }
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

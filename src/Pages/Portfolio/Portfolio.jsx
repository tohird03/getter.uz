import React, { useContext, useEffect, useState } from 'react';

import "./Portfolio.scss"
import Card from '../../Components/Card/Card';
import Navbar from '../../Components/Navbar/Navbar';
import { Context } from '../../Context/ApiContext';

const Portfolio = () => {
    const { portfolioSite } = useContext(Context)
    return (
        <>
            <header className='light__header'>
                <Navbar />
            </header>
            <main>
                <section className='portfolio'>
                    <div className="container portfolio__container">
                        {

                            portfolioSite && portfolioSite?.map((item, index) => {
                                return <Card
                                name={item?.name}
                                img={item?.image}
                                link={item?.link}
                                author={item?.author}/>
                            })
                        }
                        {/* <Card />
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
                        <Card /> */}
                    </div>
                </section>
            </main>
        </>
    );
}

export default Portfolio;

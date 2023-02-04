import React from 'react';
import "./About.scss"
import Navbar from '../../Components/Navbar/Navbar';

import heroImg from "../../Assets/Images/aboutHero.png"
import descImg from "../../Assets/Images/aboutImg2x.png"
import anim1 from "../../Assets/Images/aboutAnim1.jpg"
import anim2 from "../../Assets/Images/aboutAnim2.svg"
import callProfile from "../../Assets/Images/about-call.png"
import phone from "../../Assets/Images/phone.svg"
import mail from "../../Assets/Images/mail.svg"
import location from "../../Assets/Images/location.svg"
import facebook from "../../Assets/Images/aboutfacebook.svg"
import instagram from "../../Assets/Images/aboutinstagram.svg"
import youtube from "../../Assets/Images/youtube.svg"
import telegram from "../../Assets/Images/abouttelegram.svg"
const About = () => {
    return (
        <>
            <header className='light__header'>
                <Navbar />
            </header>
            <main className='about'>
                <section className='about-hero'>
                    <div className="container about-hero__container">
                        <h2 className='about-hero__heading'>
                            Создаем сайты и айдентику от всей

                            <span className='about-it__heading-span'>
                                души
                            </span>
                        </h2>
                        <img src={heroImg} alt="" />

                        {/* <div className='about-hero__anim'>
                            <div className="background">
                                <span>
                                    <img src={anim1} alt="" />
                                </span>
                                <span>
                                    <img src={anim1} alt="" />
                                </span>
                                <span>
                                    <img src={anim1} alt="" />
                                </span>
                                <span>
                                    <img src={anim1} alt="" />
                                </span>
                                <span>
                                    <img src={anim1} alt="" />
                                </span>
                                <span>
                                    <img src={anim1} alt="" />
                                </span>
                                <span>
                                    <img src={anim1} alt="" />
                                </span>
                                <span>
                                    <img src={anim1} alt="" />
                                </span>
                                <span>
                                    <img src={anim1} alt="" />
                                </span>
                            </div>
                        </div> */}
                    </div>
                </section>

                <section className='about-desc'>
                    <div className='container'>
                        <div className='about-desc__wrapper'>
                            <h3 className='about-desc__heading'>
                                Главный Фокус компании это  разработка уникальных ИТ продуктов
                            </h3>
                            <p className='about-desc__text'>
                                Артисты стараются нащупать связь между поколениями. Спектакль рассчитан на широкую аудиторию и будет интересен зрителям всех возрастов, поскольку он такой же разнообразный, как и детский опыт каждого человека.
                            </p>
                        </div>

                        <img className='about-desc__img' src={descImg} alt="" />
                    </div>
                </section>

                <section className='about-it'>
                    <div className="container">
                        <h3 className='about-it__heading'>
                            Разработка
                            <br />
                            современных ИТ
                            <span className='about-it__heading-span'>
                                продуктов
                            </span>
                        </h3>
                        <ul className='about-it__list'>
                            <li className='about-it__item'>
                                <h4 className='about-it__list-heading'>
                                    Разработка ИТ продуктов
                                </h4>
                                <p className='about-it__list-desc'>
                                    Web sites, mobila apps, CRM HRM ERP systems: ... Ux design, Ui design, WEb design, App design
                                </p>
                            </li>
                            <li className='about-it__item'>
                                <h4 className='about-it__list-heading'>
                                    Категории веб сайтов
                                </h4>
                                <p className='about-it__list-desc'>
                                    Интернет магазин, корпоротивные сайты, Каталог сайты, Портфолио
                                </p>
                            </li>
                            <li className='about-it__item'>
                                <h4 className='about-it__list-heading'>
                                    Разработка Frontend
                                </h4>
                                <p className='about-it__list-desc'>
                                    Js, Vue JS, React Js
                                </p>
                            </li>
                            <li className='about-it__item'>
                                <h4 className='about-it__list-heading'>
                                    Разработка Backend
                                </h4>
                                <p className='about-it__list-desc'>
                                    Java Cotlin, Phyton, Node.js
                                </p>
                            </li>
                        </ul>
                    </div>
                </section>

                <section className='about-call'>
                    <div className="container">
                        <h3 className='about-call__heading'>
                            <span className='about-call__note'>
                                Позвони
                                <span className='about-call__send'>
                                    <span className='about-call__profile-wrapper'>
                                        <span className='about-call__profile'>
                                            <img src={callProfile} alt="" />
                                        </span>
                                        <span className='about-call__hover-profile'>
                                            <div className='about-call__hover-display'>
                                                <h3 className='about-call__hover-heading'>
                                                    Sh
                                                </h3>
                                                <div className='about-call__hover-about'>
                                                    <div className='about-call__hover-name'>
                                                        <h4>
                                                            Shaxriyor Oripov
                                                        </h4>
                                                        <p>
                                                            5min
                                                        </p>
                                                    </div>
                                                    <p>
                                                        Че там с проектом? lorem20
                                                        Че там с проектом? lorem20
                                                    </p>
                                                </div>
                                            </div>
                                        </span>
                                    </span>
                                    <span className='about-call__profile-wrapper'>
                                        <span className='about-call__profile'>
                                            <img src={callProfile} alt="" />
                                        </span>
                                        <span className='about-call__hover-profile'>
                                            <div className='about-call__hover-display'>
                                                <h3 className='about-call__hover-heading'>
                                                    Sh
                                                </h3>
                                                <div className='about-call__hover-about'>
                                                    <div className='about-call__hover-name'>
                                                        <h4>
                                                            Shaxriyor Oripov
                                                        </h4>
                                                        <p>
                                                            5min
                                                        </p>
                                                    </div>
                                                    <p>
                                                        Че там с проектом? lorem20
                                                        Че там с проектом? lorem20
                                                    </p>
                                                </div>
                                            </div>
                                        </span>
                                    </span>
                                    <span className='about-call__profile-wrapper'>
                                        <span className='about-call__profile'>
                                            <img src={callProfile} alt="" />
                                        </span>
                                        <span className='about-call__hover-profile'>
                                            <div className='about-call__hover-display'>
                                                <h3 className='about-call__hover-heading'>
                                                    Sh
                                                </h3>
                                                <div className='about-call__hover-about'>
                                                    <div className='about-call__hover-name'>
                                                        <h4>
                                                            Shaxriyor Oripov
                                                        </h4>
                                                        <p>
                                                            5min
                                                        </p>
                                                    </div>
                                                    <p>
                                                        Че там с проектом? lorem20
                                                        Че там с проектом? lorem20
                                                    </p>
                                                </div>
                                            </div>
                                        </span>
                                    </span>
                                    <span className='about-call__profile-wrapper'>
                                        <span className='about-call__profile'>
                                            <img src={callProfile} alt="" />
                                        </span>
                                        <span className='about-call__hover-profile'>
                                            <div className='about-call__hover-display'>
                                                <h3 className='about-call__hover-heading'>
                                                    Sh
                                                </h3>
                                                <div className='about-call__hover-about'>
                                                    <div className='about-call__hover-name'>
                                                        <h4>
                                                            Shaxriyor Oripov
                                                        </h4>
                                                        <p>
                                                            5min
                                                        </p>
                                                    </div>
                                                    <p>
                                                        Че там с проектом? lorem20
                                                        Че там с проектом? lorem20
                                                    </p>
                                                </div>
                                            </div>
                                        </span>
                                    </span>
                                    <span className='about-call__profile-wrapper'>
                                        <span className='about-call__profile'>
                                            <img src={callProfile} alt="" />
                                        </span>
                                        <span className='about-call__hover-profile'>
                                            <div className='about-call__hover-display'>
                                                <h3 className='about-call__hover-heading'>
                                                    Sh
                                                </h3>
                                                <div className='about-call__hover-about'>
                                                    <div className='about-call__hover-name'>
                                                        <h4>
                                                            Shaxriyor Oripov
                                                        </h4>
                                                        <p>
                                                            5min
                                                        </p>
                                                    </div>
                                                    <p>
                                                        Че там с проектом? lorem20
                                                        Че там с проектом? lorem20
                                                    </p>
                                                </div>
                                            </div>
                                        </span>
                                    </span>

                                </span>
                            </span>
                            обсудим и твой проект
                        </h3>

                        <div className='about-call__links'>
                            <div className='about-call__link-wrap'>
                                <a
                                    className='about-call__link'
                                    href="tel:+998951224472">
                                    <img src={phone} alt="" />
                                    +998 95 122 44 72
                                </a>
                                <a className='about-call__link' href="mail:hello@getter.com">
                                    <img src={mail} alt="" />
                                    hello@getter.com
                                </a>
                            </div>
                            <a className='about-call__link' href="https://goo.gl/maps/RKNFZ4hK2pBC5jWx6">
                                <img src={location} alt="" />
                                Buyuk Ipakyoli, orientir-Parkentskiy evos
                            </a>
                        </div>

                        <div>
                            <div className='about-call__cards'>
                                <div className="about-call__card">
                                    <h4>
                                        Будьте в курсе наших последних новостей и акций
                                    </h4>

                                    <div>
                                        <a
                                            className='about-call__network'
                                            href="https://facebook.com" target="_blank">
                                            <img src={facebook} alt="" />
                                        </a>
                                        <a
                                            className='about-call__network'
                                            href="https://instagram.com" target="_blank">
                                            <img src={instagram} alt="" />
                                        </a>
                                        <a
                                            className='about-call__network'
                                            href="https://youtube.com" target="_blank">
                                            <img src={youtube} alt="" />
                                        </a>
                                        <a
                                            className='about-call__network'
                                            href="https://facebook.com" target="_blank">
                                            <img src={telegram} alt="" />
                                        </a>
                                    </div>
                                </div>
                                <div className="about-call__card">
                                    <h4>
                                        Бесплатный онлайн тест  для подготовки к президентским школам
                                    </h4>
                                </div>
                            </div>
                            <div className="about-call__set">
                                <h4>
                                    Бесплатный онлайн тест  для подготовки к президентским школам
                                </h4>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}

export default About;

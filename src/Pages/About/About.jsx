import React from 'react';
import "./About.scss"
import Navbar from '../../Components/Navbar/Navbar';

import heroImg from "../../Assets/Images/About__hero.svg"
import descImg from "../../Assets/Images/aboutImg2x.png"
import anim1 from "../../Assets/Images/aboutAnim1.jpg"
import anim2 from "../../Assets/Images/aboutAnim2.svg"
import callProfile from "../../Assets/Images/about-call.png"
import phone from "../../Assets/Images/phone.svg"
import mail from "../../Assets/Images/mail.svg"
import location from "../../Assets/Images/location.svg"
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
                                    <span
                                        className='about-call__profile-wrapper'>
                                        <span className='about-call__profile'>
                                            <img src={callProfile} alt="" />
                                            <span className='about-call__hover-profile '>
                                                <div className='about-call__hover-display'>
                                                    <div className='about-call__hover-about'>
                                                        <div className='about-call__hover-name'>
                                                            <h4>
                                                                Shaxriyor Oripov
                                                            </h4>
                                                            <p>
                                                                5min
                                                            </p>
                                                        </div>
                                                        <p className='about-call__hover-desc'>
                                                            Че там с проектом? lorem20
                                                            Че там с проектом? lorem20
                                                        </p>
                                                    </div>
                                                </div>
                                            </span>
                                        </span>

                                    </span>
                                    <span
                                        className='about-call__profile-wrapper'>
                                        <span className='about-call__profile'>
                                            <img src={callProfile} alt="" />
                                            <span className='about-call__hover-profile '>
                                                <div className='about-call__hover-display'>
                                                    <div className='about-call__hover-about'>
                                                        <div className='about-call__hover-name'>
                                                            <h4>
                                                                Shaxriyor Oripov
                                                            </h4>
                                                            <p>
                                                                5min
                                                            </p>
                                                        </div>
                                                        <p className='about-call__hover-desc'>
                                                            Че там с проектом? lorem20
                                                            Че там с проектом? lorem20
                                                        </p>
                                                    </div>
                                                </div>
                                            </span>
                                        </span>

                                    </span>
                                    <span
                                        className='about-call__profile-wrapper'>
                                        <span className='about-call__profile'>
                                            <img src={callProfile} alt="" />
                                            <span className='about-call__hover-profile '>
                                                <div className='about-call__hover-display'>
                                                    <div className='about-call__hover-about'>
                                                        <div className='about-call__hover-name'>
                                                            <h4>
                                                                Shaxriyor Oripov
                                                            </h4>
                                                            <p>
                                                                5min
                                                            </p>
                                                        </div>
                                                        <p className='about-call__hover-desc'>
                                                            Че там с проектом? lorem20
                                                            Че там с проектом? lorem20
                                                        </p>
                                                    </div>
                                                </div>
                                            </span>
                                        </span>

                                    </span>
                                    <span
                                        className='about-call__profile-wrapper'>
                                        <span className='about-call__profile'>
                                            <img src={callProfile} alt="" />
                                            <span className='about-call__hover-profile '>
                                                <div className='about-call__hover-display'>
                                                    <div className='about-call__hover-about'>
                                                        <div className='about-call__hover-name'>
                                                            <h4>
                                                                Shaxriyor Oripov
                                                            </h4>
                                                            <p>
                                                                5min
                                                            </p>
                                                        </div>
                                                        <p className='about-call__hover-desc'>
                                                            Че там с проектом? lorem20
                                                            Че там с проектом? lorem20
                                                            Че там с проектом? lorem20
                                                            Че там с проектом? lorem20
                                                        </p>
                                                    </div>
                                                </div>
                                            </span>
                                        </span>

                                    </span>
                                    <span
                                        className='about-call__profile-wrapper'>
                                        <span className='about-call__profile'>
                                            <img src={callProfile} alt="" />
                                            <span className='about-call__hover-profile '>
                                                <div className='about-call__hover-display'>
                                                    <div className='about-call__hover-about'>
                                                        <div className='about-call__hover-name'>
                                                            <h4>
                                                                Shaxriyor Oripov
                                                            </h4>
                                                            <p>
                                                                5min
                                                            </p>
                                                        </div>
                                                        <p className='about-call__hover-desc'>
                                                            Че там с проектом? lorem20
                                                            Че там с проектом? lorem20
                                                        </p>
                                                    </div>
                                                </div>
                                            </span>
                                        </span>

                                    </span>

                                </span>
                            </span>
                            обсудим и твой
                            <span className='about-it__heading-span'>
                                проект
                            </span>
                        </h3>

                        <div className='about-call__links'>
                            <div className='about-call__link-wrap'>
                                <a
                                    className='about-call__link'
                                    href="tel:+998951224472">
                                    <img src={phone} alt="" />
                                    +998 95 122 44 72
                                </a>
                                <a className='about-call__link' href="mailto:hello@getter.com">
                                    <img src={mail} alt="" />
                                    hello@getter.com
                                </a>
                                <a className='about-call__link' href="https://goo.gl/maps/RKNFZ4hK2pBC5jWx6">
                                    <img src={location} alt="" />
                                    Buyuk Ipakyoli, orientir-Parkentskiy evos
                                </a>

                                <a href='#' className='about-call__button-one'>
                                    Хочу заказать
                                </a>
                                <a href='#' className='about-call__button-two'>
                                    проект
                                </a>
                                <a href='#' className='about-call__button-three'>
                                    отправить
                                </a>
                            </div>
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

                                            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <rect width="18" height="18" fill="none" />
                                                <path d="M12.75 2.62553C12.75 2.52607 12.7105 2.43069 12.6402 2.36036C12.5698 2.29004 12.4745 2.25053 12.375 2.25053H10.5C9.55584 2.2035 8.63145 2.53207 7.92879 3.16446C7.22613 3.79685 6.80234 4.68165 6.75 5.62553V7.65053H4.875C4.77554 7.65053 4.68016 7.69004 4.60984 7.76036C4.53951 7.83069 4.5 7.92607 4.5 8.02553V9.97553C4.5 10.075 4.53951 10.1704 4.60984 10.2407C4.68016 10.311 4.77554 10.3505 4.875 10.3505H6.75V15.3755C6.75 15.475 6.78951 15.5704 6.85983 15.6407C6.93016 15.711 7.02554 15.7505 7.125 15.7505H9.375C9.47446 15.7505 9.56984 15.711 9.64017 15.6407C9.71049 15.5704 9.75 15.475 9.75 15.3755V10.3505H11.715C11.7984 10.3517 11.8798 10.3251 11.9464 10.2748C12.0129 10.2246 12.0608 10.1536 12.0825 10.073L12.6225 8.12303C12.6374 8.06762 12.6394 8.00953 12.6284 7.95322C12.6173 7.89692 12.5935 7.8439 12.5587 7.79826C12.5239 7.75261 12.4791 7.71556 12.4278 7.68995C12.3764 7.66434 12.3199 7.65085 12.2625 7.65053H9.75V5.62553C9.76866 5.43989 9.85584 5.26786 9.99452 5.14305C10.1332 5.01823 10.3134 4.94959 10.5 4.95053H12.375C12.4745 4.95053 12.5698 4.91102 12.6402 4.84069C12.7105 4.77037 12.75 4.67498 12.75 4.57553V2.62553Z" />
                                            </svg>

                                        </a>
                                        <a
                                            className='about-call__network'
                                            href="https://instagram.com" target="_blank">
                                            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M11.25 9C11.25 9.44501 11.118 9.88002 10.8708 10.25C10.6236 10.62 10.2722 10.9084 9.86104 11.0787C9.4499 11.249 8.9975 11.2936 8.56105 11.2068C8.12459 11.12 7.72368 10.9057 7.40901 10.591C7.09434 10.2763 6.88005 9.87541 6.79323 9.43895C6.70642 9.0025 6.75097 8.5501 6.92127 8.13896C7.09157 7.72783 7.37996 7.37643 7.74997 7.12919C8.11998 6.88196 8.55499 6.75 9 6.75C9.59617 6.75185 10.1674 6.9895 10.5889 7.41106C11.0105 7.83261 11.2481 8.40383 11.25 9ZM16.0312 5.90625V12.0938C16.0312 13.138 15.6164 14.1396 14.878 14.878C14.1396 15.6164 13.138 16.0312 12.0938 16.0312H5.90625C4.86196 16.0312 3.86044 15.6164 3.12202 14.878C2.38359 14.1396 1.96875 13.138 1.96875 12.0938V5.90625C1.96875 4.86196 2.38359 3.86044 3.12202 3.12202C3.86044 2.38359 4.86196 1.96875 5.90625 1.96875H12.0938C13.138 1.96875 14.1396 2.38359 14.878 3.12202C15.6164 3.86044 16.0312 4.86196 16.0312 5.90625ZM12.375 9C12.375 8.33249 12.1771 7.67997 11.8062 7.12495C11.4354 6.56993 10.9083 6.13735 10.2916 5.88191C9.67486 5.62646 8.99626 5.55962 8.34157 5.68985C7.68688 5.82008 7.08552 6.14151 6.61351 6.61351C6.14151 7.08552 5.82008 7.68688 5.68985 8.34157C5.55962 8.99626 5.62646 9.67486 5.88191 10.2916C6.13735 10.9083 6.56993 11.4354 7.12495 11.8062C7.67997 12.1771 8.33249 12.375 9 12.375C9.89511 12.375 10.7536 12.0194 11.3865 11.3865C12.0194 10.7536 12.375 9.89511 12.375 9ZM13.5 5.34375C13.5 5.17687 13.4505 5.01374 13.3578 4.87499C13.2651 4.73623 13.1333 4.62809 12.9791 4.56423C12.825 4.50037 12.6553 4.48366 12.4916 4.51621C12.328 4.54877 12.1776 4.62913 12.0596 4.74713C11.9416 4.86513 11.8613 5.01547 11.8287 5.17914C11.7962 5.34281 11.8129 5.51246 11.8767 5.66664C11.9406 5.82081 12.0487 5.95259 12.1875 6.0453C12.3262 6.13802 12.4894 6.1875 12.6562 6.1875C12.88 6.1875 13.0946 6.09861 13.2529 5.94037C13.4111 5.78214 13.5 5.56753 13.5 5.34375Z" />
                                            </svg>

                                        </a>
                                        <a
                                            className='about-call__network'
                                            href="https://youtube.com" target="_blank">
                                            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M12.75 3H5.25C3 3 1.5 4.5 1.5 6.75V11.25C1.5 13.5 3 15 5.25 15H12.75C15 15 16.5 13.5 16.5 11.25V6.75C16.5 4.5 15 3 12.75 3ZM10.4175 9.7725L8.56499 10.8825C7.81499 11.3325 7.19998 10.9875 7.19998 10.11V7.88251C7.19998 7.00501 7.81499 6.66001 8.56499 7.11001L10.4175 8.21999C11.13 8.65499 11.13 9.345 10.4175 9.7725Z" />
                                            </svg>

                                        </a>
                                        <a
                                            className='about-call__network'
                                            href="https://facebook.com" target="_blank">
                                            <svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M14.4985 0.787859L1.20095 5.91561C0.293455 6.28011 0.298705 6.78636 1.03445 7.01211L4.44845 8.07711L12.3475 3.09336C12.721 2.86611 13.0622 2.98836 12.7817 3.23736L6.38196 9.01311H6.38045L6.38196 9.01386L6.14646 12.5329C6.49146 12.5329 6.6437 12.3746 6.8372 12.1879L8.49545 10.5754L11.9447 13.1231C12.5807 13.4734 13.0375 13.2934 13.1957 12.5344L15.46 1.86336C15.6917 0.934109 15.1052 0.513359 14.4985 0.787859Z" />
                                            </svg>

                                        </a>
                                    </div>
                                </div>
                                <div className="about-call__card">
                                    <h4>
                                        Бесплатный онлайн тест  для подготовки к президентским школам
                                    </h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}

export default About;

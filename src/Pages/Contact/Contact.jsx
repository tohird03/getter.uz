import React from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import "./Contact.scss"
const Contact = () => {
    return (
        <>
            <header className='light__header'>
                <Navbar />
            </header>
            <main>
                <section className='contact'>
                    <div className="container contact__container">
                        <h2 className='contact__heading'>
                            <span className='contact__heading-span'>
                                Контакты
                            </span>
                            Если у вас
                            <br />
                            возникли вопросы
                            <span className='contact__heading-italic about-it__heading-span'>
                                дайте знать
                            </span>
                        </h2>

                        <ul className='contact__list'>
                            <li>
                                <p className='contact__address'>
                                    <span className='contact__address-span'>
                                        Адрес:
                                    </span> Buyuk Ipakyoli, ул Лутфи, 1-b дом, 49 кв
                                </p>
                            </li>
                            <li>
                                <p className='contact__address'>
                                    <span className='contact__address-span'>
                                        Номер:
                                    </span> +998 95 122-44-72
                                </p>
                            </li>
                            <li>
                                <p className='contact__address'>
                                    <span className='contact__address-span'>
                                        E-mail:
                                    </span> hello@getter.uz
                                </p>
                            </li>
                        </ul>

                        <div className='contact__network'>
                            <p className='contact__network-desc'>
                                Социальные сети:
                            </p>

                            <div className='contact__network-link'>
                                <a target="_blank" href="https://instagram.com">
                                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M13 1H5C2.79086 1 1 2.79086 1 5V13C1 15.2091 2.79086 17 5 17H13C15.2091 17 17 15.2091 17 13V5C17 2.79086 15.2091 1 13 1Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M9 12C10.6569 12 12 10.6569 12 9C12 7.34315 10.6569 6 9 6C7.34315 6 6 7.34315 6 9C6 10.6569 7.34315 12 9 12Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                </a>

                                <a target="_blank" href="https://facebook.com">
                                    <svg width="13" height="20" viewBox="0 0 13 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1 8V12H4V19H8V12H11L12 8H8V6C8 5.73478 8.10536 5.48043 8.29289 5.29289C8.48043 5.10536 8.73478 5 9 5H12V1H9C7.67392 1 6.40215 1.52678 5.46447 2.46447C4.52678 3.40215 4 4.67392 4 6V8H1Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>

                                </a>

                                <a target="_blank" href="https://t.me">
                                    <svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M13 7L9 11L15 17L19 1L1 8L5 10L7 16L10 12" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>

                                </a>

                                <a target="_blank" href="https://twitter.com">
                                    <svg width="22" height="19" viewBox="0 0 22 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M21 2.01001C20 2.50001 19.02 2.69901 18 3.00001C16.879 1.73501 15.217 1.66501 13.62 2.26301C12.023 2.86101 10.977 4.32301 11 6.00001V7.00001C7.755 7.08301 4.865 5.60501 3 3.00001C3 3.00001 -1.182 10.433 7 14C5.128 15.247 3.261 16.088 1 16C4.308 17.803 7.913 18.423 11.034 17.517C14.614 16.477 17.556 13.794 18.685 9.77501C19.0218 8.55268 19.189 7.28987 19.182 6.02201C19.18 5.77301 20.692 3.25001 21 2.00901V2.01001Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}

export default Contact;

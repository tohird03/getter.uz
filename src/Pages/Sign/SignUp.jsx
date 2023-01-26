import React, { useState, Component  } from 'react';
import { NavLink } from 'react-router-dom';
import PhoneInput from 'react-phone-input-2'
import OtpInput from 'react18-input-otp';
import 'react-phone-input-2/lib/style.css'

import SignNavbar from '../../Components/Navbar/SignNavbar';
import "../Home/Home.scss"
import "./Sign.scss"
import heroVector from "../../Assets/Images/Vector.png"

const SignUp = () => {
    const state = { otp: '' };

    const handleChange = (otp) => {
        setPasswordValue(otp)
    };
    // HERO BG ANIMATION
    const [pageY, setPageY] = useState(0)
    const [pageX, setPageX] = useState(0)
    const [value, setValue] = useState()
    const [passwordValue, setPasswordValue] = useState()
    const handMouse = (e) => {
        console.log(e);
        setPageY(e.pageY)
        setPageX(e.pageX)
    }
    return (
        <div onMouseMove={e => handMouse(e)} className='hero__header sign-header'>
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

            <SignNavbar />

            <div className='sign'>
                <div className="container sign__container">
                    <h2 className='sign__heading'>
                        Зарегистрироваться
                    </h2>

                    <div className='sign__findAcc'>
                        <p className='sign__acc'>
                            Have an accaunt?
                        </p>
                        <NavLink to="/signin" className='sign__link' href="#">
                            Войти
                        </NavLink>
                    </div>

                    <form className='sign__form'>
                        <input
                            className='sign__input'
                            type="text"
                            placeholder='Username'
                            required />

                        <div className='sign__phone'>
                            <PhoneInput
                                className='sign__input sign__input-phone'
                                placeholder="Enter phone number"
                                value={value}
                                country={'uz'}
                                onChange={setValue} />
                            <OtpInput
                                className='sign__otp-input'
                                value={passwordValue} onChange={handleChange} numInputs={4}
                                placeholder={"****"}
                                separator={<span className='sign__otp-among'></span>} />
                        </div>

                        <input
                            className='sign__input'
                            type="email"
                            placeholder='example@gmailcom'
                            required />
                        <input
                            className='sign__input'
                            type="password"
                            placeholder='enter your password'
                            required />
                    </form>
                </div>
                <div className='sign__button-wrapper'>
                    <div className="container sign__container">
                        <button className='sign__button'>
                            <span>Войти</span>
                            <img src={heroVector} alt="Login vector" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SignUp;

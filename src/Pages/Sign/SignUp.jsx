import React, { useState, Component } from 'react';
import { NavLink } from 'react-router-dom';
import PhoneInput from 'react-phone-input-2'
import OtpInput from 'react18-input-otp';
import 'react-phone-input-2/lib/style.css'

import SignNavbar from '../../Components/Navbar/SignNavbar';
import "../Home/Home.scss"
import "./Sign.scss"
import heroVector from "../../Assets/Images/Vector.png"
import avatar from "../../Assets/Images/avatar.svg"

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
                className='hero__header-bg'>
                <div className='hero__anim'>
                    <div className='hero__header-bgTop'>

                    </div>
                    <div
                        onMouseMove={e => handMouse(e)}
                        className='hero__header-bgCenter'
                        style={{ transform: "translate(-700px, -700px)" }}>

                    </div>
                    <div className='hero__header-bgBottom'
                        style={{ transform: "translate(-375px, -375px)" }}>

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
                        <div className='sign__form-wrapper'>
                            <div>
                                <input
                                    className='sign__input'
                                    type="text"
                                    placeholder='Full name'
                                    required />
                                <input
                                    className='sign__input'
                                    type="text"
                                    placeholder='Occupation'
                                    required />

                                <div className='sign__phone'>
                                    <PhoneInput
                                        className='sign__input sign__input-phone'
                                        placeholder="Enter phone number"
                                        value={value}
                                        country={'uz'}
                                        onChange={setValue} />
                                </div>
                            </div>

                            <label className='sign-up__avatar' for="avatar">
                                Upload your Avatar
                                <img src={avatar} alt="Img avatar icon" />
                                <input type="file" name="avatar" id="avatar" />
                            </label>
                        </div>

                        <div className='sign__up-password'>
                            <input
                                className='sign__input'
                                type="email"
                                placeholder='example@gmailcom'
                                required />
                            <input
                                className='sign__input'
                                type="password"
                                placeholder='Password'
                                required />
                        </div>
                    </form>
                </div>
                <div className='sign__button-wrapper'>
                    <div className="container sign__container">
                        <button className='sign__button'>
                            <span>зарегистрироваться</span>
                            <img src={heroVector} alt="Login vector" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SignUp;

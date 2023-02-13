import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import PhoneInput from 'react-phone-input-2'
import OtpInput from 'react18-input-otp';
import 'react-phone-input-2/lib/style.css'

import SignNavbar from '../../Components/Navbar/SignNavbar';
import "../Home/Home.scss"
import "./Sign.scss"
import heroVector from "../../Assets/Images/Vector.png"

const SignIn = () => {
    // HERO BG ANIMATION
    const [pageY, setPageY] = useState(0)
    const [pageX, setPageX] = useState(0)
    const [value, setValue] = useState()

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
                    <h2 className='sign__heading'>Войти</h2>

                    <div className='sign__findAcc'>
                        <p className='sign__acc'>
                            Don't have an accaunt?
                        </p>
                        <NavLink to="/signup" className='sign__link'>
                            зарегистрироваться
                        </NavLink>
                    </div>

                    <form className='sign__form sign-in__form' >
                        <PhoneInput
                            className='sign__input sign__input-phone'
                            placeholder="Enter phone number"
                            value={value}
                            country={'uz'}
                            onChange={setValue} />
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

export default SignIn;

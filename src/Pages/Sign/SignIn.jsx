import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import SignNavbar from '../../Components/Navbar/SignNavbar';
import "../Home/Home.scss"
import "./Sign.scss"
import heroVector from "../../Assets/Images/Vector.png"

const SignIn = () => {
    // HERO BG ANIMATION
    const [pageY, setPageY] = useState(0)
    const [pageX, setPageX] = useState(0)
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
                    <h2 className='sign__heading'>Войти</h2>

                    <div className='sign__findAcc'>
                        <p className='sign__acc'>
                            Don't have an accaunt?
                        </p>
                        <NavLink to="/signup" className='sign__link'>
                            зарегистрироваться
                        </NavLink>
                    </div>

                    <form className='sign__form'>
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

export default SignIn;

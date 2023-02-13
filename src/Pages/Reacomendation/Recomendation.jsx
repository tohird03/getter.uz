import React, { useState } from 'react';
import "./Recomendation.scss"
import Navbar from '../../Components/Navbar/Navbar';
import linkIcon from "../../Assets/Images/link.svg"
import people from "../../Assets/Images/recoIcon.svg"
import phone from "../../Assets/Images/recoPhone.svg"
import recoDiv from "../../Assets/Images/reco.png"
const Recomendation = () => {
    let [data, setData] = useState({
        company: "",
        name: "",
        bref: "",
        phoneNum: ""
    })
    let [statusBref, setStatusBref] = useState({
        unfocus: false,
        change: false,
        default: true
    })
    let [statusName, setStatusName] = useState({
        unfocus: false,
        change: false,
        default: true
    })
    let [statusPhone, setStatusPhone] = useState({
        unfocus: false,
        change: false,
        default: true
    })

    const handleBref = (e) => {
        if (data.bref !== "") {
            setStatusBref({ ...statusBref, unfocus: true, default: false })
        } else {
            setStatusBref({ ...statusBref, unfocus: false, default: true })
        }
    }
    const handleName = (e) => {
        if (data.name !== "") {
            setStatusName({ ...statusName, unfocus: true, default: false })
        } else {
            setStatusName({ ...statusName, unfocus: false, default: true })
        }
    }
    const handlePhone = (e) => {
        if (data.phone !== "") {
            setStatusPhone({ ...statusPhone, unfocus: true, default: false })
        } else {
            setStatusPhone({ ...statusPhone, unfocus: false, default: true })
        }
    }
    return (<>
        <header className='light__header'>
            <Navbar />
        </header>
        <main>
            <section className='reco'>
                <div className="container">
                    <h2 className='reco__heading'>
                        Вы можете связаться с нами в любое время через
                    </h2>

                    <form className='reco__form'>
                        <div className='reco__labels'>
                            <label className='reco__label reco__label-first'>
                                <span className='reco__input-icon'>
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M8.00037 12.0004C8.32624 12.333 8.71521 12.5972 9.14449 12.7776C9.57377 12.958 10.0347 13.0509 10.5004 13.0509C10.966 13.0509 11.427 12.958 11.8562 12.7776C12.2855 12.5972 12.6745 12.333 13.0004 12.0004L17.0004 8.00038C17.6634 7.33734 18.0359 6.43806 18.0359 5.50038C18.0359 4.5627 17.6634 3.66342 17.0004 3.00038C16.3373 2.33734 15.438 1.96484 14.5004 1.96484C13.5627 1.96484 12.6634 2.33734 12.0004 3.00038L11.5004 3.50038M12.0004 8.00046C11.6745 7.66786 11.2855 7.40363 10.8563 7.22325C10.427 7.04286 9.96602 6.94995 9.50038 6.94995C9.03474 6.94995 8.57378 7.04286 8.1445 7.22325C7.71523 7.40363 7.32626 7.66786 7.00038 8.00046L3.00038 12.0005C2.33734 12.6635 1.96484 13.5628 1.96484 14.5005C1.96484 15.4381 2.33734 16.3374 3.00038 17.0005C3.66342 17.6635 4.5627 18.036 5.50038 18.036C6.43806 18.036 7.33734 17.6635 8.00038 17.0005L8.50038 16.5005" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                </span>
                                <input
                                    className={`reco__input reco__input-border
                                    ${statusBref.default ? "reco__input-default" :
                                            statusBref.unfocus ?
                                                "reco__input-unfocus" : ""
                                        }`}
                                    onBlur={handleBref}
                                    onChange={e => {
                                        setData({ ...data, bref: e.target.value })
                                    }}
                                    type="url"
                                    pattern="https://.*" required
                                    placeholder='Type website link here' />
                            </label>

                            <img className="reco__div" src={recoDiv} alt="" />
                        </div>
                        <div className='reco__labels'>
                            <label className='reco__label'>
                                <span className='reco__input-icon'>
                                    <img src={people} alt="Link icon" />
                                </span>
                                <input
                                    className={`reco__input reco__input-border
                                    ${statusName.default ? "reco__input-default" :
                                            statusName.unfocus ?
                                                "reco__input-unfocus" : ""
                                        }`}
                                    onBlur={handleName}
                                    onChange={e => {
                                        setData({ ...data, name: e.target.value })
                                    }}
                                    type="text"
                                    required
                                    placeholder='Write your name' />
                            </label>
                            <label className='reco__label'>
                                <span className='reco__input-icon'>
                                    <img src={phone} alt="Link icon" />
                                </span>
                                <input
                                    className={`reco__input reco__input-border
                                    ${statusPhone.default ? "reco__input-default" :
                                            statusPhone.unfocus ?
                                                "reco__input-unfocus" : ""
                                        }`}
                                    onBlur={handlePhone}
                                    onChange={e => {
                                        setData({ ...data, phone: e.target.value })
                                    }}
                                    type="number"
                                    minLength="9"
                                    maxLength="9"
                                    placeholder='Your phone number'
                                    required/>
                            </label>
                        </div>
                        <button className='reco__order-send'>
                            Send request now
                        </button>
                    </form>
                </div>
            </section>
        </main>
    </>);
}

export default Recomendation;

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
                            <label className='reco__label'>
                                <span className='reco__input-icon'>
                                    <img src={linkIcon} alt="Link icon" />
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
                                    type="tel"
                                    placeholder='Your phone number' />
                            </label>
                        </div>
                    </form>
                </div>
            </section>
        </main>
    </>);
}

export default Recomendation;

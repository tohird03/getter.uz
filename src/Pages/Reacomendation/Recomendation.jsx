import React from 'react';
import "./Recomendation.scss"
import Navbar from '../../Components/Navbar/Navbar';
import linkIcon from "../../Assets/Images/link.svg"
import people from "../../Assets/Images/recoIcon.svg"
import phone from "../../Assets/Images/recoPhone.svg"
import recoDiv from "../../Assets/Images/reco.png"
const Recomendation = () => {
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
                                    className='reco__input'
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
                                    className='reco__input'
                                    type="text"
                                    required
                                    placeholder='Write your name' />
                            </label>
                            <label className='reco__label'>
                                <span className='reco__input-icon'>
                                    <img src={phone} alt="Link icon" />
                                </span>
                                <input
                                    className='reco__input'
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

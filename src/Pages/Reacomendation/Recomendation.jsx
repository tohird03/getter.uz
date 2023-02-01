import React from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import linkIcon from "../../Assets/Images/link.svg"
const Recomendation = () => {
    return (<>
        <header className='light__header'>
            <Navbar />
        </header>
        <main>
            <section>
                <div className="container">
                    <h2>
                        Вы можете связаться с нами в любое время через
                    </h2>

                    <form>
                        <label>
                            <span>
                                <img src={linkIcon} alt="Link icon" />
                            </span>
                            <input
                                type="url"
                                pattern="https://.*" required />
                        </label>
                    </form>
                </div>
            </section>
        </main>
    </>);
}

export default Recomendation;

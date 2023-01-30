import React from 'react';
import "./Link.scss"
const Link = () => {
    return (
        <div className='link'>
            <div className="container link__container">
                <div className='link__content'>
                    <a href="#">
                        <span>+</span>
                        Реккомендовать сайт
                    </a>

                    
                </div>
            </div>
        </div>
    );
}

export default Link;

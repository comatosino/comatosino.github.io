import React, { useState } from 'react';
import './Nav.css';

export default function Nav() {
    const [menuActive, setMenuActive] = useState(false);

    const toggleActive = () => {
        setMenuActive(!menuActive);
    }

    return (
        <nav className='black my-nav'>
            <div className='container my-nav-container'>

                {/* hamburger menu */}
                <div className={menuActive ? 'hamburger-menu menu-active' : 'hamburger-menu'} onClick={toggleActive}>
                    <div className="bar1"></div>
                    <div className="bar2"></div>
                    <div className="bar3"></div>
                </div>
            </div>

            {/* menu overlay */}
            <div className={menuActive ? 'overlay overlay-active' : 'overlay'}>

                {/* TODO: add another function to onClick event that cycles page to corresponding page */}
                {/* to call 2 functions, simply wrap both in another function call */}
                <button id='projects-btn' className='btn-flat my-nav-btn' onClick={toggleActive}>Projects</button>
                <button id='about-btn' className='btn-flat my-nav-btn' onClick={toggleActive}>About</button>
                <button id='contact-btn' className='btn-flat my-nav-btn' onClick={toggleActive}>Contact</button>
            </div>

        </nav>
    );
}

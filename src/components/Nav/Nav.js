import React, { useState, useEffect } from 'react';

import HamburgerMenu from '../HamburgerMenu/HamburgerMenu';
import OverlayMenu from '../OverlayMenu/OverlayMenu';

import './Nav.css';

export default function Nav() {
    const [menuActive, setMenuActive] = useState(false);

    useEffect(() => {
        const introPage = document.getElementById('intro');
        const portfolio = document.getElementById('portfolio');
        const overlay = document.getElementById('overlay-menu');
        const initialsBtn = document.getElementById('show-intro');

        const handleClick = () => {
            introPage.classList.remove('hide-intro');
            portfolio.classList.remove('show-carousel');
            overlay.classList.remove('overlay-active');
        }

        initialsBtn.addEventListener('click', handleClick);

        return () => {
            initialsBtn.removeEventListener('click', handleClick);
        }
    }, [])

    const toggleActive = () => {
        setMenuActive(!menuActive);
    }

    const menuCheck = () => {
        if (menuActive) {
            setMenuActive(!menuActive);
        }
    }

    return (
        <nav className='black my-nav z-depth-5'>
            <div className='container my-nav-container'>
                <div id='show-intro' className='initials-box' onClick={menuCheck}>
                    <div className='my-initials'>
                        RA
                    </div>
                </div>
                <HamburgerMenu menuActive={menuActive}
                               toggleActive={toggleActive}/>
            </div>
            {/* menu overlay */}
            <OverlayMenu menuActive={menuActive}
                         toggleActive={toggleActive}/>
        </nav>
    );
}

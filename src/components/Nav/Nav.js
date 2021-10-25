import React, { useState } from 'react';

import HamburgerMenu from '../HamburgerMenu/HamburgerMenu';
import OverlayMenu from '../OverlayMenu/OverlayMenu';

import './Nav.css';

export default function Nav() {
    const [menuActive, setMenuActive] = useState(false);

    const toggleActive = () => {
        setMenuActive(!menuActive);
    }

    return (
        <nav className='black my-nav'>
            <div className='container my-nav-container'>
                <div className='initials-box'>
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

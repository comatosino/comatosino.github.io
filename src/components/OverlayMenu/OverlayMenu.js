import React, {useEffect} from 'react';

import M from 'materialize-css'

export default function OverlayMenu({ menuActive, toggleActive }) {
    useEffect(() => {
        const introPage = document.getElementById('intro');
        const portfolio = document.getElementById('portfolio');

        const pages = M.Carousel.init(portfolio, {
          fullWidth: true,
        });

        const navBtns = document.querySelectorAll('.my-nav-btn');
        navBtns.forEach((btn, idx) => {
            btn.addEventListener('click', function() {
                introPage.classList.add('hide-intro');
                portfolio.classList.add('show-carousel');
                pages.set(idx);
            });
        });
        return () => {
            pages.destroy();
        }
    }, []);

    return (
        <div className={menuActive ? 'overlay overlay-active' : 'overlay'}>
            <button id='projects-btn' className='btn-flat my-nav-btn' onClick={toggleActive}>Projects</button>
            <button id='about-btn' className='btn-flat my-nav-btn' onClick={toggleActive}>About</button>
            <button id='contact-btn' className='btn-flat my-nav-btn' onClick={toggleActive}>Contact</button>
        </div>
    )
}

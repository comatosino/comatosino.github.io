import React, {useEffect} from 'react';

import M from 'materialize-css';

import './OverlayMenu.css';

export default function OverlayMenu({ menuActive, toggleActive }) {
    useEffect(() => {
        const introPage = document.getElementById('intro');
        const portfolio = document.getElementById('portfolio');

        const pages = M.Carousel.init(portfolio, {
          fullWidth: true,
        });

        // use curried function so btn idx can be used to set carousel page in callback
        const handleClick = (idx) => {
            const curriedHandleClick = ({ target: {dataset} }) => {
                const targetPage = document.getElementById(dataset.page);
                targetPage.scrollTo({top:0, behavior:'smooth'});

                introPage.classList.add('hide-intro');
                portfolio.classList.add('show-carousel');

                pages.set(idx);
            }
            return curriedHandleClick;
        }

        const handleMainClick = () => {
            introPage.classList.add('hide-intro');
            portfolio.classList.add('show-carousel');
            pages.set(0);
        }

        const mainBtn = document.getElementById('portfolio-btn');
        mainBtn.addEventListener('click', handleMainClick);

        const navBtns = document.querySelectorAll('.my-nav-btn');
        navBtns.forEach((btn, idx) => btn.addEventListener('click', handleClick(idx)));

        return () => {
            pages.destroy();
            navBtns.forEach((btn, idx) => btn.removeEventListener('click', handleClick(idx)));
            mainBtn.removeEventListener('click', handleMainClick);
        }
    }, []);

    return (
        <div id='overlay-menu' className={menuActive ? 'overlay overlay-active' : 'overlay'}>
            <button data-page="projects" className='btn-flat my-nav-btn' onClick={toggleActive}>Projects</button>
            <button data-page="about" className='btn-flat my-nav-btn' onClick={toggleActive}>About</button>
            <button data-page="contact" className='btn-flat my-nav-btn' onClick={toggleActive}>Contact</button>
        </div>
    );
}

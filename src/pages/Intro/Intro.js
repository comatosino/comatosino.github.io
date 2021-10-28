import React, { useEffect } from 'react';

import './Intro.css'

export default function Intro() {
    useEffect(() => {
        const introPage = document.getElementById('intro');
        const portfolio = document.getElementById('portfolio');
        const mainBtn = document.getElementById('portfolio-btn');

        const handleClick = () => {
            introPage.classList.add('hide-intro');
            portfolio.classList.add('show-carousel');
        }
        mainBtn.addEventListener('click', handleClick);

        return () => {
            mainBtn.removeEventListener('click', handleClick);
        }
    }, []);

    return (
        <section id='intro'>
            <div className='container'>
                <h1 className='page-header light'>Hi, I'm Robert!</h1>
                <div className='divider z-depth-1'></div>
                <p className='flow-text'>
                    I'm a web developer based in Seattle.
                </p>
                <p className='flow-text'>
                    Welcome to my portfolio!
                </p>
                <button id='portfolio-btn' className='btn black z-depth-1'>
                    View Portfolio
                </button>
            </div>
        </section>
    );
}

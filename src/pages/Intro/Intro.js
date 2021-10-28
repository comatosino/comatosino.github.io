import React from 'react';

import './Intro.css'

export default function Intro() {
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

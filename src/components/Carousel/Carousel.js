import React from 'react';

import './Carousel.css';

import Projects from '../../pages/Projects/Projects';
import About from '../../pages/About/About';
import Contact from '../../pages/Contact/Contact';

export default function Carousel() {
    return (
        <section id='portfolio' className="carousel carousel-slider center">
            <div className="carousel-item" href="#one!">
                <Projects />
            </div>
            <div className="carousel-item" href="#two!">
                <About />
            </div>
            <div className="carousel-item" href="#three!">
                <Contact />
            </div>
        </section>
    )
}

import React from 'react';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Carousel from './components/Carousel/Carousel';
import Intro from './pages/Intro/Intro';

export default function App() {
    document.addEventListener('DOMContentLoaded', function() {
        const carousels = document.querySelectorAll('.carousel');
        const [pages] = M.Carousel.init(carousels, {
          fullWidth: true,
        });

        const introPage = document.getElementById('intro');

        const projectsBtn = document.getElementById('projects-btn');
        projectsBtn.addEventListener('click', function() {
            pages.set(0);
        });

        const aboutBtn = document.getElementById('about-btn');
        aboutBtn.addEventListener('click', function() {
            pages.set(1);
        });

        const contactBtn = document.getElementById('contact-btn');
        contactBtn.addEventListener('click', function() {
            pages.set(2);
        });
    });

    return (
        <>
            <Header />
            <main>
                <Intro />
                <Carousel />
            </main>
            <Footer />
        </>
  );
}
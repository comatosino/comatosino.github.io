import React from 'react';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Carousel from './components/Carousel/Carousel';
import Intro from './pages/Intro/Intro';

import M from 'materialize-css';

export default function App() {
    document.addEventListener('DOMContentLoaded', function() {
        const carousels = document.querySelectorAll('.carousel');
        const [pages] = M.Carousel.init(carousels, {
          fullWidth: true,
        });

        const introPage = document.getElementById('intro');
        const portfolio = document.getElementById('portfolio');

        const navBtns = document.querySelectorAll('.my-nav-btn');
        navBtns.forEach(btn => {
            btn.addEventListener('click', function() {
                introPage.classList.add('hide-intro');
                portfolio.classList.add('show-carousel');
            });
        });

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
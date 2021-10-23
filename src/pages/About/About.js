import React from 'react';

import Avatar from './images/avatar.jpg';

export default function About() {
    return (
        <section className='container'>
            <h5>About</h5>
            <div className='divider'></div>
            <div className='section'>
                <img src={Avatar} alt='avatar' className='circle' width='200px'/>
                <p className="light left-align">
                    Hello, I'm Robert!
                </p>
                <p className="light left-align">
                    I'm a full-stack web developer who utilizes my applied physics and avionics background to implement agile solutions to complex problems.
                </p>
                <p className="light left-align">
                    I'm an adaptive and communicative team member that emphasizes efficient and readable code. I’m eager to contribute my skills to a collaborative environment where I can further develop acquired skills as well as learn new ones!
                </p>
            </div>
        </section>
    );
}

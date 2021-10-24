import React, { useEffect } from 'react'
import ReactDOM from 'react-dom';

import M from 'materialize-css';

import './ProjectModal.css'

// tech images
import html from './tech-icons/html.png';
import css from'./tech-icons/css.png';
import js from './tech-icons/javascript.png';
import materialize from './tech-icons/materialize.png';
import bootstrap from './tech-icons/bootstrap.png';
import express from './tech-icons/express.png';
import jquery from './tech-icons/jquery.png';
import handlebars from './tech-icons/handlebars.png';
import mysql from './tech-icons/mysql.png';
import mongodb from './tech-icons/mongodb.png';
import node from './tech-icons/node.png';
import reacticon from './tech-icons/react1.png';
import tailwind from './tech-icons/tailwindcss.png';

const iconMap = {
    html: html,
    css: css,
    js: js,
    materialize: materialize,
    bootstrap: bootstrap,
    express: express,
    jquery: jquery,
    handlebars: handlebars,
    mysql: mysql,
    mongodb: mongodb,
    node: node,
    react: reacticon,
    tailwind: tailwind,
}

export default function ProjectModal(props) {
    useEffect(() => {
        const modals = document.querySelectorAll('.modal');
        M.Modal.init(modals, {});
    }, []);

   // render using createPortal so modals are appended to document body
    // this centers them on document body instead of parent element
    return ReactDOM.createPortal(
        <div id={props.id} class="modal modal-close">
            <div>
                <img className='responsive-img' src={props.imgsrc} alt=''/>

                <h4>{props.name}</h4>
                <p>{props.desc}</p>

                <h6>Role</h6>
                <p>{props.role}</p>

                <h6>Technology</h6>
                <div>
                    {props.tech.map(icon => <img key={iconMap[icon]} src={iconMap[icon]} width='50px'/>)}
                </div>
            </div>
        </div>
        , document.getElementById('modals')
    );
}

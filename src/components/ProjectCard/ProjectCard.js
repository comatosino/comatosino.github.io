import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

import './ProjectCard.css';

import test from '../../pages/Projects/webapp-screenshots/consolelog.png';

export default function ProjectCard() {
    return (
        <div className="card my-card">
            <div className="card-image hoverable">
                <img src={test} alt='test'/>
            </div>

            <div className='card-stuff'>
                <span className='card-title'>Card Title</span>
                <div className='card-icons card-title'>
                    <a href='!#' target='_blank' rel="noreferrer"><FontAwesomeIcon icon={faGithub} /></a>
                    <a href='!#' target='_blank' rel="noreferrer"><FontAwesomeIcon icon={faExternalLinkAlt} /></a>
                </div>
            </div>
        </div>
    )
}

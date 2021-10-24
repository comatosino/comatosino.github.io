import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

import './ProjectCard.css';
import ProjectModal from '../ProjectModal/ProjectModal';

export default function ProjectCard(props) {
    return (
        <>
            <div className="card my-card">
                <div className="card-image hoverable">
                    <img className='modal-trigger' data-target={props.id} src={props.imgsrc} alt='test'/>
                </div>

                <div className='card-stuff'>
                    <span className='card-title'>{props.name}</span>
                    <div className='card-icons card-title'>
                        <a href={props.repoUrl} target='_blank' rel="noreferrer"><FontAwesomeIcon icon={faGithub} /></a>
                        <a href={props.appUrl} target='_blank' rel="noreferrer"><FontAwesomeIcon icon={faExternalLinkAlt} /></a>
                    </div>
                </div>
            </div>

            <ProjectModal id={props.id}
                          name={props.name}
                          desc={props.desc}
                          role={props.role}
                          tech={props.tech}
                          appUrl={props.appUrl}
                          repoUrl={props.repoUrl}
                          imgsrc={props.imgsrc}
            />
        </>
    )
}

import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithubSquare } from '@fortawesome/free-brands-svg-icons';
import { faFilePdf, faEnvelope, faClipboard } from '@fortawesome/free-regular-svg-icons';
import { faFileDownload } from '@fortawesome/free-solid-svg-icons';

import Resume from './files/robert_adams_resume.pdf';

import './Contact.css';


export default function Contact() {
    return (
        <section className='container'>
            <h5>Contact</h5>
            <div className='divider'></div>
            <table>
                    <tbody>
                        <tr>
                            <td><a href='mailto:adamsiii.robert@gmail.com'><FontAwesomeIcon icon={faEnvelope} /></a></td>
                            <td><a href='mailto:adamsiii.robert@gmail.com'>adamsiii.robert@gmail.com</a></td>
                            <td><FontAwesomeIcon icon={faClipboard} /></td>
                        </tr>
                        <tr>
                            <td><a href={Resume} target='_blank' rel='noreferrer'><FontAwesomeIcon icon={faFilePdf} /></a></td>
                            <td><a href={Resume} target='_blank' rel='noreferrer'>Resume</a></td>
                            <td><FontAwesomeIcon icon={faFileDownload} /></td>
                        </tr>
                        <tr>
                            <td><a href='https://www.linkedin.com/in/robert-adams-comatosino/' target='_blank' rel='noreferrer'><FontAwesomeIcon icon={faLinkedin} /></a></td>
                            <td><a href='https://www.linkedin.com/in/robert-adams-comatosino/' target='_blank' rel='noreferrer'>LinkedIn</a></td>
                        </tr>
                        <tr>
                            <td><a href='https://github.com/comatosino' target='_blank' rel='noreferrer'><FontAwesomeIcon icon={faGithubSquare} /></a></td>
                            <td><a href='https://github.com/comatosino' target='_blank' rel='noreferrer'>GitHub</a></td>
                        </tr>
                    </tbody>
                </table>
        </section>
    )
}

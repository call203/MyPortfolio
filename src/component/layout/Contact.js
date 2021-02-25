import React from 'react';
import './Contact.css';
import { faBlog, faEnvelope, faPhone  } from "@fortawesome/free-solid-svg-icons"
import { faInstagram } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const Footer = () =>{
    return(
        <footer id="Contact">
            <div className="social">
                <ul className="social-links">
                    <li>
                        <a href='https://elastic-gates-7b6fb8.netlify.app/'><FontAwesomeIcon icon={faBlog} /></a>
                    </li>
                    <li>
                        <a href="mailto:freeyeon96@gmail.com"><FontAwesomeIcon icon={faEnvelope} /></a>
                    </li>
                    <li>
                        <a href='https://www.rocketpunch.com/@freeyeon96'><FontAwesomeIcon icon={faPhone}  /></a>
                    </li>
                    <li>
                        <a href='https://www.instagram.com/freeyeon2/'><FontAwesomeIcon icon={faInstagram}  /></a>
                    </li>
                </ul>
                <ul className="copyright" >
                    <li>©Copyright2021 Soyeon Lee</li>
                </ul>
            </div>
        </footer>
    )
}

export default Footer;
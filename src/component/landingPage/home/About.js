import React from 'react';
import Me from '../../../assets/me.JPG'
import './About.css';
import { Container,Row,Col } from 'react-bootstrap';

const About = () =>{
    return(
        <section id="About">
            <Container>
            <Row>
                <Col sm={7} className='mr-3'>
                <div >
                    <span className="about-me">About Me</span><br/>
                    <span className="about-detail">
                        It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </span>
                </div>
            </Col>
                <Col sm={3}>
                    <div >
                        <img src={Me} className="about-myImg"></img>
                    </div>
                </Col>
            </Row>
            </Container>
        </section>
    )
}

export default About;
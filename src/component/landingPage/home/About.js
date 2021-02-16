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
                        Hello! My name is Soyeon Lee, and I'm a web developer.
                        I have a back-end developer and also habe a possion for the front-end.
                        In the end, My goal is to become a full stack developer.
                        I care deeply about building interfaces of people possible. because I think cooperation 
                        is the most important thing when building services.
                        I'm always challenging. It is fun to learn while experiencing.
                        so, I will always challenge and develop constantly.
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
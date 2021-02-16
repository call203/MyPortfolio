import React from 'react';
import './Projects.css';
import './Projects.scss';
import { Col,Row } from 'react-bootstrap';
import { faAngleRight  } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import { Route, Link } from 'react-router-dom';
import WalkingResearch from '../../project/WalkingResearch';

const Projects = () =>{
    return(
        <section id="Projects">
            {/*Title*/}
          <div className="projects-title">Projects</div>
          {/*Projects*/}
          <Row className="project-row">
                <Col xs={12} md={4}>
                <Link to="/project/walking-research">
                        
                        <div  className="project-item img1">
                            <div class="text">Mobile App For Study of gait abnormalities
                            <br/><br/><br/>
                            <div className="view-more">
                                <div>Android & Firebase</div>
                                View more <FontAwesomeIcon icon={faAngleRight } />
                            </div>
                            </div>
                        </div>
                    </Link>
                </Col>
                <Col xs={12} md={4}>
                    <Link to="/project/visualize-data">
                        <div className="project-item img2">
                        <div class="text">Web Site For Study of Visualize Quality Data
                            <br/><br/><br/>
                            <div className="view-more">
                                <div>Spring & MariaDB & Tomcat</div>
                                View more <FontAwesomeIcon icon={faAngleRight } />
                            </div>
                            </div>
                        </div>
                    </Link>
                </Col>
                <Col xs={12} md={4}>
                <Link to="/project/my-portfolio">
                        <div className="project-item img3">
                        <div class="text">Web Site For My Portfolio
                            <br/><br/><br/>
                            <div className="view-more">
                                <div>React & HTML & CSS</div>
                                View more <FontAwesomeIcon icon={faAngleRight } />
                            </div>
                            </div>
                        </div>
                    </Link>
                </Col>
            </Row>
            <div>
            </div>
        </section>
        
    )
}

export default Projects;
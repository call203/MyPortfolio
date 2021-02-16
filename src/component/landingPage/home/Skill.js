import React from 'react';
import './Skill.css';
import  skillProgress from '../../../assets/skill_progress.JPG';
import { faCaretRight} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faNode,faReact, faAngular,faCss3,faHtml5,faJava  } from '@fortawesome/free-brands-svg-icons';
import { Col,Row } from 'react-bootstrap';
import Spiring from '../../../assets/spring_icon.png';
import Tomcat from '../../../assets/tomcat.png';
import Mysql from '../../../assets/mysql.png';
import mySkill from '../../../assets/skill.png';
import Study from '../../../assets/study.png';
import Typescript from '../../../assets/typescript.png';
import Aws from '../../../assets/aws.png';
import Flask from '../../../assets/flask.png';
import Linux from '../../../assets/linux.png';
import Mongodb from '../../../assets/mongodb.png';

const Skill = () =>{
    return(
        <section id="Skill">
         {/*Title*/}
          <div className="skills-title">Skills</div>
          {/*Progress Bar*/}
          {/* <div>
                <img src={skillProgress} width='1200' height='300'></img>
          </div> */}
          {/*Skills*/}
          <div>
            {/*보유기술*/}
            <Row>
                <Col xs={12} md={12}>
                    <div className="skills-subtitle">
                        <img src={mySkill} width='38' height='38'></img><span >&nbsp; Familiar Skills</span><br/>
                    </div>
                </Col>
            </Row>
            <Row className="skills-row">
                <Col xs={6} md={3}>
                        <FontAwesomeIcon icon={faNode} className="fa-6x"/><br/>
                            <span className="skill-name">NodeJs</span>
                </Col>
                <Col xs={6} md={3}>
                <FontAwesomeIcon icon={faAngular} className="fa-6x"/><br/>
                            <span className="skill-name">Angular</span>
                </Col>
                <Col xs={6} md={3}>
                <FontAwesomeIcon icon={faCss3} className="fa-6x"/><br/>
                            <span className="skill-name">CSS</span>
                </Col>
                <Col xs={6} md={3}>
                <FontAwesomeIcon icon={faHtml5} className="fa-6x" /><br/>
                            <span className="skill-name">HTML</span>
                </Col>
                
            </Row>
            <Row className="skills-row">
                <Col xs={6} md={3}>
                <img src={Spiring} width='105' height='84'></img><br/>
                             <span className="skill-name">Spring</span>
                </Col>
                
                <Col xs={6} md={3}>
                <img src={Mysql} width='105' height='84'></img><br/>
                             <span className="skill-name">Mysql</span>
                </Col>
                <Col xs={6} md={3}>
                <FontAwesomeIcon icon={faJava } className="fa-6x" /><br/>
                            <span className="skill-name">Java</span>
                </Col>
                <Col xs={6} md={3}>
                <img src={Typescript} width='105' height='84'></img><br/>
                            <span className="skill-name">Typescript</span>
                </Col>
            </Row> 


            {/*관심분야*/}
             <Row>
                <Col xs={12} md={12}>
                    <div className="skills-subtitle">
                        <img src={Study} width='38' height='38'></img><span >&nbsp; Tried Skills</span><br/>
                    </div>
                </Col>
            </Row>
            <Row className="skills-row">
                <Col xs={6} md={3}>
                        <FontAwesomeIcon icon={faReact} className="fa-6x"/><br/>
                            <span className="skill-name">React</span>
                </Col>
                <Col xs={6} md={3}>
                <img src={Tomcat} width='105' height='84'></img><br/>
                             <span className="skill-name">Tomcat</span>
                </Col>
                <Col xs={6} md={3}>
                <img src={Aws} width='105' height='84'></img><br/>
                            <span className="skill-name">AWS</span>
                </Col>
                <Col xs={6} md={3}>
                <img src={Flask} width='105' height='84'></img><br/>
                            <span className="skill-name">Flask</span>
                </Col>
            </Row>
            <Row className="skills-row">
                <Col xs={6} md={3}>
                <img src={Linux} width='105' height='84'></img><br/>
                             <span className="skill-name">Linux</span>
                </Col>
                <Col xs={6} md={3}>
                <img src={Mongodb} width='105' height='84'></img><br/>
                             <span className="skill-name">Mongodb</span>
                </Col>
            </Row>     
                
          </div>
        </section>
    )
}

export default Skill;
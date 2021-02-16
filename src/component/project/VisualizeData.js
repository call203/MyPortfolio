
import React from 'react';
import './VisualizeData.css';
import Calendar from '../../assets/calendar.png';
import Visualize1 from '../../assets/dataVisualize1.png';
import Visualize2 from '../../assets/dataVisualize2.png';
import Share from '../../assets/share.png';
import { faHandPointLeft } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Route, Link } from 'react-router-dom';
import Main from '../landingPage/home/Main';
import { useHistory } from 'react-router-dom';



const VisualizeData = () =>{
    
    const history = useHistory();
    /*프로젝트로 돌아가기 클릭시*/
    const handleClick= ()=> {
        history.push({
            pathname: '/',
            state: { page: "project" },
          });
    }
    
    
    return(
        <section id="VisualizeData">
            {/* 프로젝트로 돌아가기*/}
            <div id="fixedbtn" onClick={handleClick}>
                <FontAwesomeIcon icon={faHandPointLeft} />
                <span>&nbsp;프로젝트로 돌아가기</span>
            </div>

            {/** title */}
            <h3 className="title">Visualize Quality Data  |  Spring를 이용한 품질 데이터 시각화 프로젝트</h3>
            <br/>

            {/** date */}
            <img src={Calendar} width='30' height='30'/><span> &nbsp; 2020.04~2020.05</span>
            <br/>
            <br/>
            <br/>

            {/** projectTarget */}
            <h4>프로젝트 목표</h4>
            <div className="description-margin">. 현재 많은 기업에서 사용하고 있는 프레임 워크인
            Spring과 Tomcat을 이용해서 서버를 구축하고 인터넷에서 구할 수 있는
            유명한 데이터를 얻어 SpringMVC로 서버를 구축하고 HTML과 CSS로
            프론트엔드를 만들어 웹페이지에 시각화해보는 연습을 함.
            </div>
            <br/>
            <br/>
            <br/>

            {/** title */}
            <h4>개발스택</h4>
            <ul className="description-margin">
                <li>Spring MVC</li>
                <li>JDK 1.8</li>
                <li>Tomcat</li>
                <li>mariaDB</li>
                <li>Python</li>
            </ul>
            <br/>
            <br/>
            <br/>

            {/** title */}
            <h4>역할</h4>
            <ul className="description-margin">
                <li>Eclipse을 이용한 개발환경셋팅</li>
                <li>d3를 이용한 차트 선택</li>
                <li>Firebase Realtime Database를 이용한 sensor data store</li>
                <li>RestController로 DataBinding </li>
                <li>HightChart</li>
            </ul>
            <br/>
            <br/>
            <br/>

            {/** title */}
            <h4>프로젝트 설명</h4>
            <ul className="description-margin">
                {/** 로그인 화면  */}
                <li>
                    시각화 페이지 구축<br/>
                    <div className="project-img">
                        <img src={Visualize1}/>
                    </div>
                    <br/>
                    <div>
                        - settingweb1 - RestController로 DataBinding Ajax + javascript를 이용해서데이터 호출
                            JSON으로 리턴 <br/>(Jackson libary 필요함)

                    </div>
                </li>
                <br/>
                <br/>
                <br/>

                {/** 프로필 화면  */}
                <li>
                    차트 페이지 <br/>
                    <div className="project-img">
                        <img src={Visualize2}/>
                    </div>
                    <br/>
                    <div>
                        - winequality-red.cvs 이용<br/>
                        -HigthChart home1.js - 클릭 리스너에 의해서 호출[chart()]되는 함수넣음. chart() - HighChart 생성<br/>

                    </div>
                </li>
                <br/>
                <br/>
                <br/>

            </ul>

            {/** 참고자료*/}
            <h4>참고자료</h4>
            <img src={Share} width='30' height='30'/>
            <a href='https://github.com/call203/SpringProject'>&nbsp;&nbsp;https://github.com/call203/SpringProject</a>
            <br/>
            <br/>
            <br/>


        </section>
        
    )
    
    
}
export default VisualizeData;
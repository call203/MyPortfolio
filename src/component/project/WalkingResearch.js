
import React from 'react';
import './WalkingResearch.css';
import Calendar from '../../assets/calendar.png';
import LoginPage from '../../assets/walking_research2.jpg';
import SensorPage from '../../assets/walking_research1.jpg';
import Profile from '../../assets/walking_research3.jpg';
import Share from '../../assets/share.png';
import { faHandPointLeft } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Route, Link } from 'react-router-dom';
import Main from '../landingPage/home/Main';
import { useHistory } from 'react-router-dom';



const WalkingResearch = () =>{
    
    const history = useHistory();
    /*프로젝트로 돌아가기 클릭시*/
    const handleClick= ()=> {
        console.log("dkljsf");
        history.push({
            pathname: '/',
            state: { page: "project" },
          });
    }
    
    
    return(
        <section id="WalkingResearch">
            {/* 프로젝트로 돌아가기*/}
            <div id="fixedbtn" onClick={handleClick}>
                <FontAwesomeIcon icon={faHandPointLeft} />
                <span>&nbsp;프로젝트로 돌아가기</span>
            </div>

            {/** title */}
            <h3 className="title">Walking Research  |  보행이상 판단 알고리즘 연구 & 앱 개발</h3>
            <br/>

            {/** date */}
            <img src={Calendar} width='30' height='30'/><span> &nbsp; 2020.01~2020.06</span>
            <br/>
            <br/>
            <br/>

            {/** projectTarget */}
            <h4>프로젝트 목표</h4>
            <div className="description-margin">고령화 사회에서 노인의 비정상 보행을 판단하여 미리 질병을 파악하고
                그 원인에 따른 약물적 또는 중재적 치료를 하기위한 연구는 중요하게
                생각되고 있다. 본 프로젝트는 가장 기초가 되는 정상과 비정상보행의 기준을
                명확하게 판단하기위해 뜻이 맞는 동료들과 가속도 수집 앱을 만들고
                알고리즘 연구를 진행하였다.
            </div>
            <br/>
            <br/>
            <br/>

            {/** title */}
            <h4>개발스택</h4>
            <ul className="description-margin">
                <li>Android</li>
                <li>Firebase Realtime Database</li>
                <li>Firebase Auth</li>
                <li>Java</li>
                <li>Python</li>
                <li>Supervised Learning Algorithm</li>
                <li>UnSupervised Learning Algorithm</li>
            </ul>
            <br/>
            <br/>
            <br/>

            {/** title */}
            <h4>역할</h4>
            <ul className="description-margin">
                <li>Android Frontend 개발 담당</li>
                <li>Firebase Auth를 통한 가입과 로그인 구현</li>
                <li>Firebase Realtime Database를 이용한 sensor data store</li>
                <li>스마트폰 내장된 가속도 센서 control</li>
                <li>보행 시험을 위한 ui & 서비스 구현</li>
            </ul>
            <br/>
            <br/>
            <br/>

            {/** title */}
            <h4>프로젝트 설명</h4>
            <ul className="description-margin">
                {/** 로그인 화면  */}
                <li>
                    로그인 화면<br/>
                    <div className="project-img">
                        <img src={LoginPage}/>
                    </div>
                    <br/>
                    <div>
                        - 회원가입 상세 내역을 사용자에게 받은 후 firebase auth에 저장<br/>
                        - google로 회원가입과 로그인을 할 수도 있음.<br/>
                        - 로그인을 하면 firebase auth에 사용자 명단을 확인하고 메인 페이지로 이동<br/>
                    </div>
                </li>
                <br/>
                <br/>
                <br/>

                {/** 프로필 화면  */}
                <li>
                    프로필 화면<br/>
                    <div className="project-img">
                        <img src={Profile}/>
                    </div>
                    <br/>
                    <div>
                        - firebase auth에 저장되어있는 사용자의 내용을 불러옴<br/>
                    </div>
                </li>
                <br/>
                <br/>
                <br/>

                {/** 실험 화면  */}
                <li>
                    실험 화면 with 3축 가속도 센서<br/>
                    <div className="project-img">
                        <img src={SensorPage}/>
                    </div>
                    <br/>
                    <div>
                        - 보행이상연구를 위한 보행 데이터를 위해 스마트폰 가속도 센서를 사용<br/>
                        - 사용자가 확인할 수 있는 Line Graph & x,y,z value 구성<br/>
                        - 한 휴대폰에서 여러 사람이 사용할 경우를 대비, 닉네임 input 구성<br/>
                        - 실험에서 사용자의 편의을 위해 3초 뒤에 가속도 센서 시작<br/>
                        - 실험을 위해 start, stop, reset버튼 구현 및 가속도 센서 제어<br/>
                    </div>
                </li>
            </ul>
            <br/>
            <br/>
            <br/>

            {/** 참고자료*/}
            <h4>참고자료</h4>
            <img src={Share} width='30' height='30'/>
            <a href='https://github.com/call203/walkingResearch2'>&nbsp;&nbsp;https://github.com/call203/walkingResearch2</a>
            <br/>
            <br/>
            <br/>


        </section>
        
    )
    
    
}
export default WalkingResearch;
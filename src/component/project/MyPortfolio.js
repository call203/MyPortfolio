
import React from 'react';
import './MyPortfolio.css';
import Calendar from '../../assets/calendar.png';
import myPortfolio1 from '../../assets/myPortfolio1.JPG';
import myPortfolio2 from '../../assets/myPortfolio2.JPG';
import myPortfolio3 from '../../assets/myPortfolio3.JPG';
import myPortfolio4 from '../../assets/myPortfolio4.JPG';
import myPortfolio5 from '../../assets/myPortfolio5.JPG';
import Share from '../../assets/share.png';
import { faHandPointLeft } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Route, Link } from 'react-router-dom';
import Main from '../landingPage/home/Main';
import { useHistory } from 'react-router-dom';
import  styled from 'styled-components';


/* 뒤로 돌아가기 버튼 css + 반응형 */
const Fixedbtn = styled.div`
        position: fixed;
        right: 5%;
        bottom: 3%;
        z-index: 1000;
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
        padding: 0.6rem;
        border-radius: 20px 20px 20px 20px;

        @media ${(props) => props.theme.mobile}{
            right:10%;
        }
        `;
/* 뒤로 돌아가기 버튼 css + 반응형 */


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
        <section id="MyPortfolio">
            {/* 프로젝트로 돌아가기*/}
            <Fixedbtn  onClick={handleClick}>
                <FontAwesomeIcon icon={faHandPointLeft} />
                <span>&nbsp;프로젝트로 돌아가기</span>
            </Fixedbtn>

            {/** title */}
            <h3 className="title">My Portfolio  |  나의 포트폴리오 만들기 </h3>
            <br/>

            {/** date */}
            <img src={Calendar} width='30' height='30'/><span> &nbsp; 2021.02~</span>
            <br/>
            <br/>
            <br/>

            {/** projectTarget */}
            <h4>프로젝트 목표</h4>
            <div className="description-margin">
                React를 학습하고 개발한 포트폴리오 웹사이트.
                개발자 '이소연'를 소개하기 위해 개발함. <br/>
                ※ 추후에 블로그 기능까지 구현할 예정
            </div>
            <br/>
            <br/>
            <br/>

            {/** title */}
            <h4>개발스택</h4>
            <ul className="description-margin">
                <li>React</li>
                <li>Bootstrap</li>
                <li>HTML</li>
                <li>CSS / SCSS</li>
                <li>Node js - 사용예정</li>
                <li>MongoDB - 사용예정</li>
            </ul>
            <br/>
            <br/>
            <br/>

            {/** title */}
            <h4>역할</h4>
            <ul className="description-margin">
                <li>React  개발환경 셋팅</li>
                <li>나를 소개하기 위한 포트폴리오 UI 구성</li>
                <li>페이지 반응형 적용</li>
            </ul>
            <br/>
            <br/>
            <br/>

            {/** title */}
            <h4>프로젝트 설명</h4>
            <ul className="description-margin">
                {/** Main 페이지  */}
                <li>
                    Main 페이지<br/>
                    <div className="project-img">
                        <img src={myPortfolio1}/>
                    </div>
                    <div className="project-img">
                        <img src={myPortfolio2}/>
                    </div>
                    <div className="project-img">
                        <img src={myPortfolio3}/>
                    </div>
                    <div className="project-img">
                        <img src={myPortfolio4}/>
                    </div>
                    <br/>
                </li>
                <br/>
                <br/>
                <br/>

                {/** 프로젝트 페이지  */}
                <li>
                    프로젝트 페이지<br/>
                    <div className="project-img">
                        <img src={myPortfolio5}/>
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
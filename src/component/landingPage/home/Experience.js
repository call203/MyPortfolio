import React from 'react';
import './Experience.css'
import School from '../../../assets/school.png';
import Award from '../../../assets/award.png';
import License from '../../../assets/license.png';
import Career from '../../../assets/career.png';

const Experience = () =>{
    return(
        <section id="Experience">

            {/**Career */}
            <div >
                <div className="experience_title">
                    <img src={Career} width='38' height='38'></img> &nbsp; <span>Career</span><br/>
                </div>
                 
                 <ul className="experience_list">
                     <li><span className="company_name">RoomFriends 룸프렌즈 | Intern</span><br/>
                        &nbsp;- Backend maintenance<br/>
                        &nbsp; &nbsp; Framework :Spring MVC <br/><br/>
                        &nbsp;- Mysql Database Maintenance <br/><br/>
                        &nbsp;- User recommend algorithm<br/>
                        &nbsp; &nbsp; Framework : Flask
                     </li>
                     <br/>
                     <li><span className="company_name">HashShare 해시쉐어 | Intern</span><br/>
                        &nbsp;- Frontend Engineer<br/>
                        &nbsp;&nbsp; Framework :Angular <br/><br/>
                        &nbsp; - Typescript <br/><br/>
                        &nbsp; - HTML, CSS<br/>
                     </li>
                 </ul>
            </div>
            
            {/**Education */}
            <div >
                <div className="experience_title">
                    <img src={School} width='38' height='38'></img> &nbsp; <span>Education</span><br/>
                </div>
                 
                 <ul className="experience_list">
                     <li>자운고등학교, 서울특별시 도봉구 2012.03 - 2015.02(졸업)</li>
                    <li> 강릉원주대학교 컴퓨터공학과, 강원도 원주 2017.03-2021.02(졸업)</li>
                 </ul>
            </div>

            {/**수상내역*/}
            <div >
                <div className="experience_title">
                    <img src={Award} width='38' height='38'></img> &nbsp; <span>Awards</span><br/>
                </div>
                 
                 <ul className="experience_list">
                     <li>영남대 심화창의 융합양성 캠프 | 해커톤 동상 2018.09</li>
                    <li> 교내코딩대회 장려상 2019.12</li>
                 </ul>
            </div>

            {/**자격증*/}
            <div >
                <div className="experience_title">
                    <img src={License} width='38' height='38'></img> &nbsp; <span>License</span><br/>
                </div>
                 
                 <ul className="experience_list">
                     <li>정보처리기사 한국산업인력공단 2020.11</li>
                 </ul>
            </div>
        </section>
    )
}

export default Experience;
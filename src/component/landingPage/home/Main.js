import React from 'react';
import Home from './Home.js';
import Projects from './Projects';
import About from './About';
import Skill from './Skill';
import Experience from './Experience';
import Header from '../../layout/Header';
import Contact from '../../layout/Contact';
import { useHistory, useLocation } from 'react-router-dom';
import { scroller } from 'react-scroll';

import { useEffect } from 'react';

const Main = ()=>{
    const location = useLocation();
    /*프로젝트페이지에서 넘어올때*/
    const handleClick= ()=> {
        scroller.scrollTo('Projects');
    }
    
    useEffect(() => {
        if(location.state != undefined){
            if(location.state.page =="project"){
                    handleClick();
            }
        }
       
    });
    
  return(
    <div>
        <Header/>
        <Home/>
        <hr className="line"/>
        <About/>
        <hr className="line"/>
        <Skill/>
        <hr className="line"/>
        <Experience/>
        <hr className="line"/>
        <Projects/>
        <Contact/>
    </div>
  )
}

export default Main;
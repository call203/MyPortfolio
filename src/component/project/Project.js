import React from 'react';
import WalkingResearch from './WalkingResearch';
import VisualizeData from './VisualizeData';
import MyPortfolio from './MyPortfolio';
import NavHeader from '../layout/navHeader';
import Contact from '../layout/Contact';
import { Route } from 'react-router-dom';
import Main from '../landingPage/home/Main';
const Project = ()=>{
  return(
    <div>
        <NavHeader/>
        <div>
            {/* <Route path="/projec" component={Main} exact={true} /> */}
            <Route path="/project/walking-research" component={WalkingResearch} />
            <Route path="/project/visualize-data" component={VisualizeData} />
            <Route path="/project/my-portfolio" component={MyPortfolio} />
        </div>
        <Contact/>
    </div>
  )
}

export default Project;
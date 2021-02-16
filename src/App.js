import React from 'react';
import Header from './component/layout/Header';
import Contact from './component/layout/Contact';
import WalkingResearch from './component/project/WalkingResearch';
import { Route } from 'react-router-dom';
import Main from './component/landingPage/home/Main';
import Project from './component/project/Project';


const App = ()=>{
  return(
    <div>
      <Route path="/" component={Main} exact={true} />
      <Route path="/project" component={Project}/>
    </div>
  )
}

export default App;
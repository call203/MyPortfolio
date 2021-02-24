import React from 'react';
import Header from './component/layout/Header';
import Contact from './component/layout/Contact';
import WalkingResearch from './component/project/WalkingResearch';
import { Route } from 'react-router-dom';
import Main from './component/landingPage/home/Main';
import Project from './component/project/Project';
import { ThemeProvider } from 'styled-components';
import theme from "./style/theme";

const App = ()=>{
  return(
    <ThemeProvider theme={theme}>
      <Route path="/" component={Main} exact={true} />
      <Route path="/project" component={Project}/>
    </ThemeProvider>
  )
}

export default App;
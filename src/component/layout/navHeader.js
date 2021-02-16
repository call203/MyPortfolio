
import React from 'react';
import { Route, Link } from 'react-router-dom';
// import WalkingResearch from '../../project/WalkingResearch';
import Main from '../landingPage/home/Main';
import Contact from '../layout/Contact';
    
const navHeader = () =>{

    return(
        <header id="Header">
            <div className="header-inner logo nav-link" >
                <Link to="/" style={{ textDecoration: 'none' }}>
                    Soyeon Lee
                </Link>
            </div>
            
            <div>
            <Route path="/" component={Main} exact={true}/>     
            </div>
        </header>
        
    )
}

export default navHeader;
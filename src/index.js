import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';
import ScrollToTop from './ScrollToTop';

// ReactDOM.render(<App/> , 
//                 document.getElementById('root'));
// * App 을 BrowserRouter 로 감싸기
ReactDOM.render(
    
    <BrowserRouter basename="/MyPortfolio">
    <ScrollToTop />
            <App />
    </BrowserRouter>,
    document.getElementById('root')
  );



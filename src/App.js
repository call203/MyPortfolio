import React from 'react';
import Header from './Header';
import Home from './Home';
import Projects from './Projects';
import About from './About';
import Contact from './Contact';
import Footer from './Footer';

const App = ()=>{
  return(
    <div>
        <Header/>
        <Home/>
        <Projects/>
        <About/>
        <Contact/>
        <Footer/>
    </div>
  )
}

export default App;
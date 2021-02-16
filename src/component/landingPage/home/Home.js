import React from 'react';
import './Home.css';
import hello from '../../../assets/hello.png';


const Home = () =>{
    return(
        <section id="Home">
            {/** hello */}
           <div className="home-name">Hi, I'm Soyeon Lee <img src={hello} width='25' height='25'></img></div>
           <br/>

           {/** introduction */}
           <div className="home-detail">
               I am a web developer. I have serious passion for Front-End and Back-End.
               I really like challenges. so don't hesitate to get in touch with me.
               <br/>
               <br/>

                {/** introduction - email contact */}
                <div className="home-email">you can reach out via email- <a  href='mailto:freeyeon96@gmail.com' >freeyeon96@gamil.com</a></div>
           </div>
        </section>
    )
}

export default Home;
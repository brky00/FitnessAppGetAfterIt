import React from 'react';
import About from './About';
import Instagram from './Instagram';
import Contact from './Contact';
import Packages from './Packages';
import getAfterItAnimation from './videos/getafter_it_animation.mp4';
import './Home.css';

// importerte componenter er ovenfor...

const Home = () => {
  return (
    <>
      {/* Home delen */}
      <section id="home">
      <div className="background-video">
         <video autoPlay loop muted>
           <source src={getAfterItAnimation} type="video/mp4" />
         </video>
         <div className="buttons-container">
            <button className="btn">Merch</button>
            <button className="btn">Packages</button>
          </div>
       </div>
      </section>

      {/* About section delen */}
      <section id="about">
     
        <About />
        
      </section>

      
     

      {/* Instagram */}
      <section id="instagram">
        <Instagram />
      </section>

      {/* Packages  */}
      <section id="packages">
        <Packages />
      </section>

     
    </>
  );
};

export default Home;


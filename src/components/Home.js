import React from "react";
import About from "./About";
import Instagram from "./Instagram";
import Packages from "./Packages";
import { Link } from "react-router-dom";
import getAfterItAnimation from "./videos/getafter_it_animation.mp4";
import "./Home.css";
import Footer from "./Footer";


const Home = () => {
  return (
    <>
      {/* Home delen */}
      <section id="home">
        <div className="background-video">
          <video autoPlay loop muted playsinline>
            <source src={getAfterItAnimation} type="video/mp4" />
          </video>
          <div className="buttons-container">
            <button className="btn-home">
              <Link className="nav-link" to="/merch">
                Merch
              </Link>
            </button>
            <button className="btn-home">
              {" "}
              <a className="nav-link" href="/#packages">
                Packages
              </a>
            </button>
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

      {/*Footer */}
      <Footer />
    </>
  );
};

export default Home;

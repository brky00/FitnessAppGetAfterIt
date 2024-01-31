import React from 'react'
import './About.css'
import logoImage from "./images/lionGetAfterIt.png";
import aboutBackExercise from "./images/TestBilde-Arm.jpg";

import deadliftImage from "./images/deadlift.jpg";

const About = () => {
  return (
    <div className='container'>
      <div className='d-flex justify-content-center mt-3'>
      <h1 className='AboutUsH1'>About us</h1>
      </div>
      

      <div className='row rad1 mb-4'>
        <div className='col-sm-12 col-md-4 col-lg-4 d-flex justify-content-center'>
          <img src={logoImage} alt="Logo" className="img-fluid navbar-logo-about" />
        </div>
        <div className='col-sm-12 col-md-8 col-lg-8'>
          <div className='row'>
            <div className='col'>
            <p>
            In a world where health is wealth and every 'like', 'share', and 'follow' matters, we believe in the power of transformation, not just in our bodies but in our mindset. 
            "Get After It" isn't just our name; it's our motto, our call to action, our promise to you. We are Jamal and Sander, the dynamic duo behind "Get After It". 
            With years of combined experience, relentless passion, and an unyielding commitment to our craft, 
            we've honed our expertise as personal trainers to bring you fitness solutions that truly make a difference. 

            </p>
          </div>
          </div>

          <div className='row rad2'>
            <div className='col'>
            <p>We're not just here to sell; we're here to inspire, to motivate, and to guide. 
            By merging our expertise with the accessibility of social media, we're revolutionizing how online training is perceived and executed.
            So, whether you're a fitness enthusiast, someone just starting out, or anywhere in between, 
            remember - every journey begins with a single step. Let us be your guides. Are you ready to Get After It? </p>
            </div>
          </div>
          {/*
          
          </p> */}
        </div>
      </div>

      <div className='row '>
        <div className='col-6 '>
          <img src={aboutBackExercise} alt='backExercise' className='img-fluid backExercise-image aboutClientImg'/>
        </div>
      
        <div className='col-6'>
          <img src={deadliftImage} alt='deadLiftImage' className='img-fluid Dlift aboutClientImg'/>
        </div>
      </div>

    </div>
  )
}

export default About

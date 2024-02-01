import React from "react";
import "./Packages.css";
import PackagesElement from "./elements/PackagesElement";
import image1 from "./images/image1gti.png"
import image2 from "./images/image2gti.png"
import image3 from "./images/image3gti.png"
import image3backup from "./images/image3backup.png"
const Packages = () => {
  return (
    <>
      <div className="container mt-5">
        <div className="d-flex justify-content-center mb-4">
          {" "}
          <h1 className="PackagesTitle">Packages</h1>
        </div>
        <div className="row">
          <div className="col-md-4 col-lg-4 col-sm-12 d-flex justify-content-center">
            <h1 className="cardTitle-no-responsive">Meal plan</h1>
          </div>
          <div className="col-md-4 col-lg-4 col-sm-12">
          <h1 className="cardTitle-no-responsive">Bulking plan</h1>
          </div>
          <div className="col-md-4 col-lg-4 col-sm-12 d-flex justify-content-center">
          <h1 className="cardTitle-no-responsive">Ultimate plan</h1>
          </div>
        </div>

        <div className="row">
        <h2 className="cardTitle-responsive">Meal</h2>
          <div className="col-md-4 col-lg-4 col-sm-12 d-flex justify-content-center mb-5">
         
            <div class="card" style={{width: '18rem'}}>
              <img src={image1} class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title d-flex justify-content-center">Card title</h5>
              <ul class="card-text">
                <li> Weekly meal schedules (breakfast, lunch, dinner, snacks)</li>

                <li>Options for dietary preferences (e.g., vegan, gluten-free).</li>

                <li>Calorie and nutrition tracking tools.</li>
              </ul>
                
              </div>
            </div>
          </div>
          <h1 className="cardTitle-responsive">Bulking plan</h1>
          <div className="col-md-4 col-lg-4 col-sm-12 d-flex justify-content-center mb-5">
          
            <div class="card"  style={{width: '18rem'}}>
              <img src={image2} class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title d-flex justify-content-center">Card title</h5>
              <ul class="card-text">
                <li> High-calorie meal plans for muscle growth.</li>

                <li>Tools for progress (muscle and weight gain) tracking.</li>

                <li>Guidance on bulking cycles.</li>

                <li>Recovery tips and supplement guidance.</li>
              </ul>
                
              </div>
            </div>
          </div>
          <h1 className="cardTitle-responsive">Ultimate plan</h1>
          <div className="col-md-4 col-lg-4 col-sm-12 d-flex justify-content-center mb-5">
            <div class="card"  style={{width: '18rem'}}>
              <img src={image3backup}class="card-img-top" alt="..." />
              <div class="card-body ">
                <h5 class="card-title d-flex justify-content-center">Card title</h5>
                <div class="card-text">
                  <ul>
                    <li> Comprehensive workout routines (strength, cardio, HIIT).</li>

                    <li>Combined Meal & Bulking Plans based on goals.</li>

                    <li>24/7 support & access to fitness coaches.</li>

                    <li>Mindfulness techniques (meditation, yoga).</li>
                  </ul>
                </div>
                
              </div>
            </div>
          </div>



          

        </div>
      </div>
    </>
  );
};

export default Packages;

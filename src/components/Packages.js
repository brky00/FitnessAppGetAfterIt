import React from "react";
import "./Packages.css";

const Packages = () => {
  return (
    <>
      <div className="container bg-primary">
        <div className="d-flex justify-content-center">
          {" "}
          <h1>Packages</h1>
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
        <h1 className="cardTitle-responsive">Meal</h1>
          <div className="col-md-4 col-lg-4 col-sm-12 d-flex justify-content-center mb-5">
         
            <div class="card" style={{width: '18rem'}}>
              <img src="..." class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title d-flex justify-content-center">Card title</h5>
                <p class="card-text">
                Weekly meal schedules (breakfast, lunch, dinner, snacks)
                <br/>
                <br/>      
                Options for dietary preferences (e.g., vegan, gluten-free)
                </p>
                
              </div>
            </div>
          </div>
          <h1 className="cardTitle-responsive">Bulking plan</h1>
          <div className="col-md-4 col-lg-4 col-sm-12 d-flex justify-content-center mb-5">
          
            <div class="card"  style={{width: '18rem'}}>
              <img src="..." class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title d-flex justify-content-center">Card title</h5>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                
              </div>
            </div>
          </div>
          <h1 className="cardTitle-responsive">Ultimate plan</h1>
          <div className="col-md-4 col-lg-4 col-sm-12 d-flex justify-content-center mb-5">
            <div class="card"  style={{width: '18rem'}}>
              <img src="..." class="card-img-top" alt="..." />
              <div class="card-body ">
                <h5 class="card-title d-flex justify-content-center">Card title</h5>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Packages;

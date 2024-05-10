import React from "react";
import "./Packages.css";
import image1 from "./images/image1gti.png"
import image2 from "./images/image2gti.png"
import image3backup from "./images/image3bulking.png"


//Packges section(on home page) code
const Packages = () => {
  return (
    <>
      <div className="container packagesContainer">
        <div className="d-flex justify-content-center mb-4">
          {" "}
          <h1 className="PackagesTitle">Packages</h1>
        </div>
        <div className="row">
          <div className="col-md-4 col-lg-4 col-sm-12 d-flex justify-content-center">
            <h1 className="cardTitle-no-responsive">Meal program</h1>
          </div>
          <div className="col-md-4 col-lg-4 col-sm-12">
            <h1 className="cardTitle-no-responsive">Workout program</h1>
          </div>
          <div className="col-md-4 col-lg-4 col-sm-12 d-flex justify-content-center">
            <h1 className="cardTitle-no-responsive">Ultimate program</h1>
          </div>
        </div>

        <div className="row packagesRow">
          <h2 className="cardTitle-responsive">Meal</h2>
          <div className="col-md-4 col-lg-4 col-sm-12 d-flex justify-content-center mb-5 pCard">
            <div class="card" style={{ width: "18rem" }}>
              <div className="packageimgDiv">
                <img src={image1} className="card-img-top img-fluid" alt="..." />
              </div>
              <div class="card-body">
                <h5 class="card-title d-flex justify-content-center">
                  {/* Card title */}
                </h5>
                <ul class="card-text">
                  <li>
                    {" "}
                    Weekly meal schedules (breakfast, lunch, dinner, snacks)
                  </li>

                  <li>
                    Options for dietary preferences (e.g., vegan, gluten-free).
                  </li>

                  <li>Calorie and nutrition tracking tools.</li>
                </ul>
              </div>
            </div>
          </div>
          <h1 className="cardTitle-responsive">Bulking plan</h1>
          <div className="col-md-4 col-lg-4 col-sm-12 d-flex justify-content-center mb-5 pCard">
            <div class="card" style={{ width: "18rem" }}>
              <div className="packageimgDiv">
                <img src={image2} className="card-img-top" alt="..." />
              </div>
              <div class="card-body">
                <h5 class="card-title d-flex justify-content-center">
                  {/* Card title */}
                </h5>
                <ul class="card-text">
                  <li>Tailored fitness routines for your personal goals, level.</li>

                  <li>Tools for progress (muscle and weight gain) tracking.</li>

                  <li>Strength, endurance, and flexibility training for balance.</li>

                  <li>Recovery tips and supplement guidance.</li>
                </ul>
              </div>
            </div>
          </div>
          <h1 className="cardTitle-responsive">Ultimate plan</h1>
          <div className="col-md-4 col-lg-4 col-sm-12 d-flex justify-content-center mb-5 pCard">
            <div class="card" style={{ width: "18rem" }}>
              <div className="packageimgDiv">
                <img src={image3backup} class="card-img-top" alt="..." />
              </div>

              <div class="card-body ">
                <h5 class="card-title d-flex justify-content-center">
                  {/* Card title */}
                </h5>
                <div class="card-text">
                  <ul>
                    <li>
                      {" "}
                      Comprehensive workout routines (strength, cardio, HIIT).
                    </li>

                    <li>Combined Meal & Bulking Plans based on goals.</li>

                    <li>24/7 support & access to fitness coaches.</li>

                    <li>Mindfulness techniques (meditation, yoga).</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <h1>Take <a href="/contact">contact</a> for further continuation of your package choice, we will directly take contact with you after you have submitted a form</h1>

        <div className="d-flex justify-content-center mb-3"><h1 className="descriptionTitle"><strong>PACKAGE DESCRIPTION</strong></h1></div>
        <div className="row">
          <div className="col-md-12 col-lg-12 packageDescription ">
          <div className="p-3">
          <h3 style={{ color: '#C8B479' }}>Meal Program</h3>
          <p className="meal-plan-description">Our Meal Plan is meticulously designed to fuel your fitness journey with nutritionally balanced, delicious meals tailored to your dietary preferences and goals. Whether you aim to lose weight, gain muscle, or simply maintain a healthy lifestyle, our dietitians craft each meal to ensure you receive the optimal balance of macros and micronutrients. Enjoy a variety of recipes that are as satisfying as they are beneficial to your health.</p>
          
          <h3 style={{ color: '#C8B479' }}>Workout Program</h3>
          <p className="workout-plan-description">The Workout Plan provides a personalized fitness regimen based on your goals, fitness level, and preferences. From dynamic strength training and endurance building to flexibility exercises and recovery practices, our certified trainers ensure your routine is varied, engaging, and effective. Get ready to challenge yourself and achieve noticeable results with workouts designed just for you.</p>
          
          <h3 style={{ color: '#C8B479' }}>Ultimate Program</h3>
          <p className="ultimate-plan-description">The Ultimate Plan combines the best of both worlds: comprehensive nutritional guidance and a bespoke fitness regimen, enriched with mental wellness support. This all-encompassing package includes personalized meal and workout plans, one-on-one sessions with our fitness coaches and nutritionists, and exclusive access to wellness workshops focusing on meditation and mindfulness. Embrace a holistic approach to health and well-being, crafted to transform you from the inside out.</p>
          
          <p>With the Ultimate Plan, you're not just signing up for a program; you're committing to a lifestyle change. Gain access to our supportive community and digital tools for tracking progress, ensuring every aspect of your journey is aligned with your ultimate health and wellness goals.</p>
        </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Packages;

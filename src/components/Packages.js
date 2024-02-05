import React from "react";
import "./Packages.css";
import image1 from "./images/image1gti.png"
import image2 from "./images/image2gti.png"
import image3backup from "./images/image3bulking.png"


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
            <h1 className="cardTitle-no-responsive">Meal plan</h1>
          </div>
          <div className="col-md-4 col-lg-4 col-sm-12">
            <h1 className="cardTitle-no-responsive">Bulking plan</h1>
          </div>
          <div className="col-md-4 col-lg-4 col-sm-12 d-flex justify-content-center">
            <h1 className="cardTitle-no-responsive">Ultimate plan</h1>
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
                  <li> High-calorie meal plans for muscle growth.</li>

                  <li>Tools for progress (muscle and weight gain) tracking.</li>

                  <li>Guidance on bulking cycles.</li>

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

        {/*Description start*/}
        <h1 className="descriptionTitle">Description about the packs</h1>
        <div className="row">
          <div className="col-md-12 col-lg-12 packageDescription ">
            <p className="p-3">
              Dive into our most comprehensive offering designed for those who
              accept no compromises. The Ultimate Plan merges the worlds of
              advanced physical exercise, precise nutrition, and holistic mental
              wellness. You'll receive personalized workout routines that span
              strength training, cardio, flexibility exercises, and high-octane
              HIIT sessions. Nutritionally, we'll guide you with custom meal
              plans that cater to a variety of dietary needs, ensuring every
              bite aligns with your fitness ambitions. We've also woven in the
              essence of mental well-being, offering meditation and yoga
              sessions to balance your journey. And because we understand the
              value of continuous support, this plan grants you exclusive access
              to our certified fitness coaches and nutritionists. Track your
              transformative journey with our integrated digital tools and
              partake in monthly check-ins to refine your path. Plus, become
              part of our exclusive community, where like-minded individuals
              share, inspire, and grow together. Welcome to the Ultimate Plan,
              where every facet of your fitness and well-being is our priority.
              Embark on this elite journey and immerse yourself in a regime that
              not only reshapes your body but also renews your mind and spirit.
              With the Ultimate Plan, you gain access to the latest in fitness
              technology, including state-of-the-art wearable devices that
              monitor every aspect of your physical activity, sleep patterns,
              and even your nutritional intake. Our team of experts analyzes
              this data to continuously fine-tune your personalized regimen,
              ensuring that every workout, every meal, and every mindful
              practice is optimized for your unique needs.
            </p>
          </div>
        </div>
        {/*Description end*/}
      </div>
    </>
  );
};

export default Packages;

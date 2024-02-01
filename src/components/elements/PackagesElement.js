import "./PackagesElement.css";

const PackagesElement = () => {
  return (
    <>
      <h2 className="cardTitle-responsive">Meal</h2>
      <div className="col-md-4 col-lg-4 col-sm-12 d-flex justify-content-center mb-5">
        <div class="card" style={{ width: "18rem" }}>
          <img src="..." class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title d-flex justify-content-center">Card title</h5>
            <ul class="card-text">
              {/* <li> Weekly meal schedules (breakfast, lunch, dinner, snacks)</li> */}
 
             
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default PackagesElement;

import React from "react";

const Add = () => {
  return (
    <>
       <div className="container">
      <h2>ADD PRODUCTS</h2>
      <hr />
      <form>
        <div className="mb-3">
          <label htmlFor="product-name" className="form-label">Product Name</label>
          <input type="text" className="form-control" id="product-name" required />
        </div>
        <div className="mb-3">
          <label htmlFor="product-name" className="form-label">Product Description</label>
          <input type="text" className="form-control" id="product-name" required />
        </div>

        <div className="mb-3">
          <label htmlFor="product-price" className="form-label">Product Price</label>
          <input type="number" className="form-control" id="product-price"  min="0" required />
        </div>

        <div className="mb-3">
          <label htmlFor="product-img" className="form-label">Product Image</label>
          <input type="file" className="form-control" id="product-img" required/>
        </div>

        <button type="submit" className="btn btn-success btn-md mybtn">ADD</button>
      </form>
    </div>
    </>
  );
};

export default Add;

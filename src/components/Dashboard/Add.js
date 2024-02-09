import React, { useState } from "react";

const Add = () => {
  const [dbSizes, setDbSizes] = useState(['S', 'M', 'L', 'XL', 'XXL']);
  const dbsizesLength = dbSizes.length;
  const [addNewSize, setAddNewSize] = useState(false);
  const [error, setError] = useState('');
  const [productPrice, setProductPrice] = useState(0);
  const [sizes, setSizes] = useState([]);
  const [newSize, setNewSize] = useState("");
  const [productSelectionImgs, setProductSelectionImgs] = useState([]);

  const handleSizeChange = (e) => {
    const value = e.target.value;
    setSizes(sizes.includes(value) ? sizes.filter(size => size !== value) : [...sizes, value]);
  };

  const handleSelectAllSizes = () => {
    if (sizes.length === dbsizesLength) {
      setSizes([]);
    } else {
      setSizes(dbSizes);
    }
  };

  const addNewSizeHandle = () => {
    setAddNewSize(!addNewSize);
  };

  const saveSizeInSizes = () => {
    if (newSize && !dbSizes.includes(newSize)) {
      setDbSizes(prevSizes => [...prevSizes, newSize]);
      setNewSize("");
      setAddNewSize(false);
    }
  };

  const handlePriceChange = (e) => {
    const value = e.target.value;
    if (!value || value.match(/^\d*\.?\d*$/)) {
      setProductPrice(value);
      setError('');
    } else {
      setError('Please enter a valid number for the price');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (error) {
      alert("Please fix the errors before submitting.");
      return;
    }
    console.log("Submitted price:", productPrice);
  };

  const handleImageChange = (e) => {
    // FileList'i bir diziye dönüştür ve state'i güncelle
    setProductSelectionImgs([...e.target.files]);
  };

  // Form verileriyle ilgili işlemler...
  console.log("Submitted price:", productPrice);
  // Seçilen resimleri göstermek için console'a log yapalım
  productSelectionImgs.forEach((img, index) => {
    console.log(`Image ${index + 1}:`, img.name);
  });
  console.log("new size burada:",newSize);
  console.log("db sizes array burada:",dbSizes);
  console.log("sizes array burada:",sizes);

  return (
    <>
      <h2 className="d-flex justify-content-center mt-4">ADD PRODUCTS</h2>
      <hr className="v-50" />
      <div className="container d-flex justify-content-center">
        <form onSubmit={handleSubmit}>
          {/* Form içerikleri */}
          <div className="mb-3">
            <label htmlFor="product-name" className="form-label">Product Name</label>
            <input type="text" className="form-control" id="product-name" required />
          </div>
          <div className="mb-3">
            <label htmlFor="product-description" className="form-label">Product Description</label>
            <input type="text" className="form-control" id="product-description" required />
          </div>
          <div className="mb-3">
            <label htmlFor="product-price" className="form-label">Product Price</label>
            <input
              type="text"
              className="form-control"
              id="product-price"
              value={productPrice}
              onChange={handlePriceChange}
              required
            />
            {error && <div className="text-danger">{error}</div>}
          </div>
          <div className="mb-3">
            <label htmlFor="product-sizes" className="form-label">Sizes</label>
            <div id="product-sizes">
              {dbSizes.map((size) => (
                <div key={size}>
                  <input
                    type="checkbox"
                    id={`size-${size}`}
                    value={size}
                    checked={sizes.includes(size)}
                    onChange={handleSizeChange}
                  />
                  <label htmlFor={`size-${size}`}>{size}</label>
                </div>
              ))}
              <button type="button" onClick={handleSelectAllSizes}>
                {sizes.length === dbsizesLength ? 'Unselect All Sizes' : 'Select All Sizes'}
              </button>
            </div>
           

          </div>

          <div className="mb-3">
            <label htmlFor="product-img" className="form-label">Product Image</label>
            <input type="file" className="form-control" id="product-img" required />
          </div>

          <div className="mb-3">
        <label htmlFor="product-imgs" className="form-label">Selection Images</label>
        <input
          type="file"
          className="form-control"
          id="product-imgs"
          onChange={handleImageChange}
          multiple
          required
        />
      </div>
      <button type="submit" className="btn btn-success btn-md mybtn">ADD</button>

       
        </form>

        <div className="d-flex"><h4 className="me-2">Add a new size</h4><button onClick={addNewSizeHandle}>ADD a new size</button></div>
        {addNewSize &&        
        <div className="ms-5">
          <div className="d-flex bg-primary">
            <input
              onChange={(e) => setNewSize(e.target.value)}
              value={newSize}
              type="text"
              className="form-control"
              id="newSizes"
              required
            /> 
            <button className="btn btn-primary mt-2 ms-2" onClick={saveSizeInSizes}>Save the size</button>
          </div>
        </div>}
      </div>
    </>
  );
};

export default Add;

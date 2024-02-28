import React, { useState } from "react";
import {db,storage} from "../firebase-config"
import { collection, addDoc } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import Swal from 'sweetalert2';

const Add = () => {
  const [dbSizes, setDbSizes] = useState(['XXS','XS','S', 'M', 'L', 'XL', 'XXL']);
  const dbsizesLength = dbSizes.length;
  // const [addNewSize, setAddNewSize] = useState(false);
  const [error, setError] = useState('');
  const [productPrice, setProductPrice] = useState(0);
  const [productQuantity, setProductQuantity] = useState(0);
  const [sizes, setSizes] = useState([]);
  // const [newSize, setNewSize] = useState("");
  const [productSelectionImgs, setProductSelectionImgs] = useState([]);
  const [isInStock, setIsInStock] = useState(true); 
  const [productMainImage, setProductMainImage] = useState(null); 
  const [productName, setProductName] = useState(""); 
  const [productDescription, setProductDescription] = useState(""); 

  const types = ['image/png', 'image/jpeg']

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



  const handlePriceChange = (e) => {
    const value = e.target.value;
    if (!value || value.match(/^\d*\.?\d*$/)) {
      setProductPrice(value);
      setError('');
    } else {
      setError('Please enter a valid number for the price');
    }
  };

  const handleQuantity = (e) => {
    const value = e.target.value;
    if (!value || value.match(/^\d*\.?\d*$/)) {
      setProductQuantity(value);
      setError('');
    } else {
      setError('Please enter a valid number for the quantity');
    }
  };

{/*Handle submit and firebase */}
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (error) {
      alert("Please fix the errors before submitting.");
      return;
    }

    Swal.fire({
      title: 'Uploading...',
      text: 'Please wait while the product is being added.',
      allowOutsideClick: false,
      showConfirmButton: false,
      willOpen: () => {
        Swal.showLoading();
      },
    });


 // load images
 let imageUrls = [];
 if (productMainImage) {
   try {
     const mainImageUrl = await uploadImage(productMainImage);
     imageUrls.push(mainImageUrl);
   } catch (error) {
     setError(error.message);
     return;
   }
 }

 // it adds all of the images whic is selected by the user
 for (let i = 0; i < productSelectionImgs.length; i++) {
   try {
     const url = await uploadImage(productSelectionImgs[i]);
     imageUrls.push(url);
   } catch (error) {
     setError(error.message);
     return;
   }
 }

 // here the code add documents(product) in firestore
 try {
    const docRef = await addDoc(collection(db, "products"), {
     productName: productName,
     description: productDescription,
     price: Number(productPrice), // converting string to integer
     quantity:Number(productQuantity),
     sizes: sizes,
     inStock: isInStock,
     images: imageUrls // urls of images which is loaded
   });

   Swal.fire({
    icon: 'success',
    title: 'Added!',
    text: `Product with product id "${docRef.id}" has been added.`,
    showConfirmButton: false,
    timer: 2500,
  });

   console.log("Document written with ID: ", docRef.id);
   // succes and we clean and give  response
 } catch (error) {
   console.error("Error adding document: ", error);
   // response
   alert("Error adding document: " + error.message);
 }
    console.log("Submitted price:", productPrice);
  };

  
const uploadImage = async (imageFile) => {
  if (!imageFile) {
    throw new Error('image file not found!');
  }
  const storageRef = ref(storage, `images/${imageFile.name}`);
  await uploadBytes(storageRef, imageFile);
  return getDownloadURL(storageRef);
};

  const handleMainImageChange = (e) => {
    let selectedFile = e.target.files[0];
    if(selectedFile && types.includes(selectedFile.type)){
      setProductMainImage(selectedFile);
      setError("");
    }
    else{
      setProductMainImage(null);
      setError('please select a valid image type png or jpeg')
    }
  };

  const handleImageChange = (e) => {
    // FileList is civerted to a array and the state updated
    setProductSelectionImgs([...e.target.files]);
  };

  const handleInStockChange = (e) => {
    setIsInStock(e.target.value === 'true');
  };


  // Add Form data code to print out in the console to see and check the data as test...
  console.log("Submitted price:", productPrice);
  // here we see the images in console
  productSelectionImgs.forEach((img, index) => {
    console.log(`Image ${index + 1}:`, img.name);
  });
  // console.log("new size hre:",newSize);
  console.log("db sizes here:",dbSizes);
  console.log("sizes array here:",sizes);
  console.log("isInstock: ",isInStock);
  console.log("productMainImage;",productMainImage);
  console.log("productDescription add: ",productDescription);
  console.log("productName add: ",productName);

  return (
    <>
      <h2 className="d-flex justify-content-center mt-4">ADD PRODUCTS</h2>
      <hr className="v-50" />
      <div className="container d-flex justify-content-center">
        <form onSubmit={handleSubmit}>
          {/* Form data*/}
          <div className="mb-3">
            <label htmlFor="product-name" className="form-label">
              Product Name
            </label>
            <input
              type="text"
              value={productName}
              onChange={(e) => setProductName(e.target.value)}
              className="form-control"
              id="product-name"
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="product-description" className="form-label">
              Product Description
            </label>
            <input
              type="text"
              onChange={(e) => setProductDescription(e.target.value)}
              className="form-control"
              id="product-description"
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="product-price" className="form-label">
              Product Price
            </label>
            <input
              type="text"
              className="form-control"
              id="product-price"
              value={productPrice}
              onChange={handlePriceChange}
              required
            />
           
          </div>
          <div className="mb-3">
            <label htmlFor="product-quantity" className="form-label">
              Product Quantity
            </label>
            <input
              type="number"
              className="form-control"
              id="product-quantity"
              value={productQuantity}
              onChange={handleQuantity}
              required
            
            />
           
          </div>
          <div className="mb-3">
            <label htmlFor="product-sizes" className="form-label">
              Sizes
            </label>
            <div id="product-sizes" className="d-flex justify-content-center">
              {dbSizes.map((size) => (
                <div key={size}>
                  <input
                    className="ms-3"
                    type="checkbox"
                    id={`size-${size}`}
                    value={size}
                    checked={sizes.includes(size)}
                    onChange={handleSizeChange}
                  />
                  <label className="ms-3" htmlFor={`size-${size}`}>
                    {size}
                  </label>
                </div>
              ))}
            </div>
            <button type="button" onClick={handleSelectAllSizes}>
              {sizes.length === dbsizesLength
                ? "Unselect All Sizes"
                : "Select All Sizes"}
            </button>
          </div>

          <div className="mb-3">
            <label htmlFor="product-img" className="form-label">
              Product Image
            </label>
            <input
              type="file"
              className="form-control"
              id="product-img"
              onChange={handleMainImageChange}
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="product-imgs" className="form-label">
              Selection Images
            </label>
            <input
              type="file"
              className="form-control"
              id="product-imgs"
              onChange={handleImageChange}
              multiple
              required
            />
          </div>
          {/*In stock check true/false choose here*/}
          <div className="mb-3">
            <label className="form-label">Stock Status</label>
            <div>
              <input
                type="radio"
                value="true"
                name="stockStatus"
                checked={isInStock === true}
                onChange={handleInStockChange}
              />{" "}
              In Stock
              <input
                type="radio"
                value="false"
                name="stockStatus"
                checked={isInStock === false}
                onChange={handleInStockChange}
                className="ms-2"
              />{" "}
              Out of Stock
            </div>
          </div>
          <button type="submit" className="btn btn-success btn-md mybtn">
            ADD
          </button>
          {error && <div className="text-danger">{error}</div>}
        </form>

      </div>
    </>
  );
};

export default Add;

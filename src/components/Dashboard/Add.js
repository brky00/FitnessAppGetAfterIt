import React, { useState } from "react";
import { db, storage } from "../firebase-config";
import { collection, addDoc } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import Swal from "sweetalert2";
import "./Add.css";

const Add = () => {
  const [dbSizes, setDbSizes] = useState([
    "XXS",
    "XS",
    "S",
    "M",
    "L",
    "XL",
    "XXL",
  ]);
  const dbsizesLength = dbSizes.length;
  // const [addNewSize, setAddNewSize] = useState(false);
  const [error, setError] = useState("");
  const [productPrice, setProductPrice] = useState(0);
  const [productQuantity, setProductQuantity] = useState(0);
  const [sizes, setSizes] = useState([]);
  // const [newSize, setNewSize] = useState("");
  const [productSelectionImgs, setProductSelectionImgs] = useState({});
  const [isInStock, setIsInStock] = useState(true);
  const [productMainImage, setProductMainImage] = useState(null);
  const [productName, setProductName] = useState("");
  const [productColor, setProductColor] = useState("");
  const [productDescription, setProductDescription] = useState("");
  const [sizeQuantities, setSizeQuantities] = useState({});
  const [imagesName, setImagesName] = useState(null);

  //new
  const [fileQuantities, setFileQuantities] = useState({});
  const [fileNames, setFileNames] = useState([]);
  const [uploadedFilesInfo, setUploadedFilesInfo] = useState({}); // Yüklenen dosyaların bilgilerini tutacak state

  const [selectedFiles, setSelectedFiles] = useState(null);
  const [mainFileName, setMainFileName] = useState(null);

  const types = ["image/png", "image/jpeg"];

  const handleImageChangeForSize = async (size, files) => {
    const uploads = Array.from(files).map(async (file) => {
      const storageRef = ref(storage, `images/${size}/${file.name}`);
      await uploadBytes(storageRef, file);
      const url = await getDownloadURL(storageRef);
      return { fileName: file.name, url, quantity: 0 }; // quanty 0 in start
    });

    const uploadedFiles = await Promise.all(uploads);

    // `sizeQuantities` state update here
    setSizeQuantities((prev) => ({
      ...prev,
      [size]: [...(prev[size] || []), ...uploadedFiles],
    }));
  };

  const updateQuantityForFile = (size, fileName, quantity) => {
    setSizeQuantities((prev) => ({
      ...prev,
      [size]: prev[size].map((file) =>
        file.fileName === fileName
          ? { ...file, quantity: parseInt(quantity, 10) }
          : file
      ),
    }));
  };

  const renderQuantityInputsForSize = (size) =>
    sizeQuantities[size]?.map((file) => (
      <div key={file.fileName}>
        <label>{file.fileName} quantity:</label>
        <input
          type="number"
          value={file.quantity}
          onChange={(e) =>
            updateQuantityForFile(size, file.fileName, e.target.value)
          }
          required
        />
      </div>
    ));

  const handleMainImageChange = async (e) => {
    const file = e.target.files[0];
    const mainName = file.name;
    setMainFileName(mainName);
    if (file && types.includes(file.type)) {
      setError(""); // clear error
      try {
        const uploadedImageUrl = await uploadImage(file); 
        setProductMainImage(uploadedImageUrl); // URL'yi state'e kaydedin
      } catch (error) {
        console.error("Error uploading main image: ", error);
        setError("Error uploading main image: " + error.message);
      }
    } else {
      setProductMainImage(null);
      setError("Please select a valid image type (png or jpeg)");
    }
  };
  console.log("MainFileName:", mainFileName);

  const uploadImage = async (imageFile) => {
    if (!imageFile) {
      throw new Error("Image file not found!");
    }
    const storageRef = ref(storage, `images/${imageFile.name}`);
    const uploadTask = await uploadBytes(storageRef, imageFile);
    const imageUrl = await getDownloadURL(uploadTask.ref); // Ref alındıktan sonra URL alınır
    return imageUrl;
  };

  const handleSizeChange = (e) => {
    const value = e.target.value;
    setSizes(
      sizes.includes(value)
        ? sizes.filter((size) => size !== value)
        : [...sizes, value]
    );
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

      setError("");
    } else {
      setError("Please enter a valid number for the price");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (error) {
      alert("Please fix the errors before submitting.");
      return;
    }

    // check imageMain.
    if (!productMainImage || typeof productMainImage !== "string") {
      console.error(
        "Main image is not uploaded properly or URL is missing:",
        productMainImage
      );
      setError("Main image is not uploaded properly or URL is missing.");
      return;
    }

    try {
      // Firestore saving
      const docRef = await addDoc(collection(db, "products"), {
        productName: productName,
        description: productDescription,
        price: Number(productPrice),
        sizeDetails: sizeQuantities,
        imageMain: productMainImage,
        productMainName: mainFileName,
        allSizes: dbSizes,
      });

      Swal.fire("Sucsess!", "The new product is added.", "success");
      
    } catch (error) {
      console.error("error when you try to add: ", error);
      Swal.fire(
        "Error!",
        "Error occurs when you try to add a product.",
        "error"
      );
    }
  };

  // const handleInStockChange = (e) => {
  //   setIsInStock(e.target.value === "true");
  // };

  // Add Form data code to print out in the console to see and check the data as test...
  console.log("Submitted price:", productPrice);
  // here we see the images in console

  // console.log("new size hre:",newSize);
  console.log("db sizes here:", dbSizes);
  console.log("sizes array here:", sizes);
  console.log("isInstock: ", isInStock);
  console.log("productMainImage;", productMainImage);
  console.log("productDescription add: ", productDescription);
  console.log("productName add: ", productName);
  console.log("productcolor: ", productColor);
  console.log("imagesName: ", imagesName);
  console.log("fileNames: ", fileNames);
  console.log("selectedFiles: ", selectedFiles);
  console.log("uploadedFilesInfo", uploadedFilesInfo);
  console.log("fileQuantities", fileQuantities);
  console.log("sizeQuantities herr:", sizeQuantities);
  console.log("mainName:::", mainFileName);

  return (
    <div className="container-fluid add-container">
      <h2 className="d-flex justify-content-center mt-4">ADD PRODUCTS</h2>
      <hr className="v-50" />
      <form className="addForm mb-3" onSubmit={handleSubmit}>

      <div className="row">
      <div class="col-1"></div>
       
          <div className="col-12 col-sm-12 col-md-5 col-lg-5">
            {" "}
            {/* venstre col*/}
            {/* Form data*/}
          
              <div className="mb-3">
                <label htmlFor="product-name" className="form-label">
                  Product Name
                </label>
                <input
                  type="text"
                  value={productName}
                  onChange={(e) => setProductName(e.target.value)}
                  id="product-name"
                  required
                  className=""
                />
              </div>
              <div className="mb-3">
                <label htmlFor="product-description" className="form-label">
                  Product Description
                </label>
                <input
                  type="text"
                  onChange={(e) => setProductDescription(e.target.value)}
                  id="product-description"
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="product-price" className="form-label">
                  Product Price
                </label>
                <input
                  type="number"
                  id="product-price"
                  value={productPrice}
                  onChange={handlePriceChange}
                  required
                />
              </div>
           
          </div>

          <div className="col-12 col-sm-12 col-md-5 col-lg-5">
            <div className="mb-3">
              <label htmlFor="product-sizes" className="form-label sizesLabel">
                Sizes and quantity(Select size to add quantity)
              </label>
              <div
                id="product-sizes"
                className="d-flex flex-column justify-content-center"
              >
                {dbSizes.map((size) => (
                  <div key={size} className="size-section ">
                    <input
                      type="checkbox"
                      id={`size-${size}`}
                      value={size}
                      checked={sizes.includes(size)}
                      onChange={handleSizeChange}
                    />
                    <label htmlFor={`size-${size}`}>{size}</label>

                    {/* rednder quantity for this files */}
                    {sizes.includes(size) && (
                      <>
                        <div className="file-upload-container">
                          <label
                            htmlFor={`file-upload-${size}`}
                            className="file-upload-label"
                          >
                            {`Choose files for product images (${size}):`}
                          </label>
                          <input
                            type="file"
                            id={`file-upload-${size}`}
                            multiple
                            onChange={(e) =>
                              handleImageChangeForSize(size, e.target.files)
                            }
                          />
                        </div>

                        {/* quantity */}
                        <div className="quantity-inputs-container">
                          {renderQuantityInputsForSize(size)}
                        </div>
                      </>
                    )}
                  </div>
                ))}
              </div>
              <div className="d-flex justify-content-center">
                <button
                  className="mt-3"
                  type="button"
                  onClick={handleSelectAllSizes}
                >
                  {sizes.length === dbsizesLength
                    ? "Unselect All Sizes"
                    : "Select All Sizes"}
                </button>
              </div>
            </div>

            <div className="mb-3">
              <label htmlFor="product-img" className="form-label">
                Product Main Image
              </label>
              <input
                type="file"
                id="product-img"
                onChange={handleMainImageChange}
                required
              />
            </div>

            {/*In stock check true/false choose here*/}
            <div className="mb-3">
              {/* <label className="form-label">Stock Status</label>
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
              </div> */}
            </div>
            <button type="submit" className="btn btn-success btn-md mybtn">
              ADD
            </button>
          </div>

          {error && <div className="text-danger">{error}</div>}
          <div class="col-1"></div>
          </div>
        </form>
     
    </div>
  );
};

export default Add;
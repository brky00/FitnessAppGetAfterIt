import React, { useState } from "react";
import {db,storage} from "../firebase-config"
import { collection, addDoc } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import Swal from 'sweetalert2';
import './Add.css'

const Add = () => {
  const [dbSizes, setDbSizes] = useState(['XXS','XS','S', 'M', 'L', 'XL', 'XXL']);
  const dbsizesLength = dbSizes.length;
  // const [addNewSize, setAddNewSize] = useState(false);
  const [error, setError] = useState('');
  const [productPrice, setProductPrice] = useState(0);
  const [productQuantity, setProductQuantity] = useState(0);
  const [sizes, setSizes] = useState([]);
  // const [newSize, setNewSize] = useState("");
  const [productSelectionImgs, setProductSelectionImgs] = useState({});
  const [isInStock, setIsInStock] = useState(true); 
  const [productMainImage, setProductMainImage] = useState(null); 
  const [productName, setProductName] = useState(""); 
  const [productDescription, setProductDescription] = useState(""); 
  const [sizeQuantities, setSizeQuantities] = useState({});
  


  const types = ['image/png', 'image/jpeg']

  const handleQuantityChange = (size, quantity) => {
    setSizeQuantities(prevQuantities => ({
      ...prevQuantities,
      [size]: {
        ...prevQuantities[size],
        quantity: Number(quantity)
      }
    }));
  };
  
  const handleImageChangeForSize = async (size, files) => {
    const uploadedImageUrls = await Promise.all(
      Array.from(files).map(async (file) => {
        const storageRef = ref(storage, `images/${file.name}`);
        await uploadBytes(storageRef, file);
        return await getDownloadURL(storageRef);
      })
    );
  
    setSizeQuantities(prevQuantities => ({
      ...prevQuantities,
      [size]: {
        ...prevQuantities[size],
        images: [...(prevQuantities[size]?.images || []), ...uploadedImageUrls]
      }
    }));
  };
  
  
  
  console.log("sizeQuantities::: ",sizeQuantities);
  

  const handleMainImageChange = async (e) => {
    const file = e.target.files[0];
    if (file && types.includes(file.type)) {
      setError(""); // Hata durumunu temizle
      try {
        const uploadedImageUrl = await uploadImage(file); // Dosyayı yükleyin ve URL'yi alın
        setProductMainImage(uploadedImageUrl); // URL'yi state'e kaydedin
      } catch (error) {
        console.error("Error uploading main image: ", error);
        setError("Error uploading main image: " + error.message);
      }
    } else {
      setProductMainImage(null);
      setError('Please select a valid image type (png or jpeg)');
    }
  };
  
  const uploadImage = async (imageFile) => {
    if (!imageFile) {
      throw new Error('Image file not found!');
    }
    const storageRef = ref(storage, `images/${imageFile.name}`);
    const uploadTask = await uploadBytes(storageRef, imageFile);
    const imageUrl = await getDownloadURL(uploadTask.ref); // Ref alındıktan sonra URL alınır
    return imageUrl;
  };


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
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (error) {
      alert("Please fix the errors before submitting.");
      return;
    }
  
    // imageMain alanının bir URL string olup olmadığını kontrol edin.
    if (!productMainImage || typeof productMainImage !== 'string') {
      console.error('Main image is not uploaded properly or URL is missing:', productMainImage);
      setError('Main image is not uploaded properly or URL is missing.');
      return;
    }
  
    try {
      // Firestore'a veri ekleyin.
      const docRef = await addDoc(collection(db, "products"), {
        productName,
        description: productDescription,
        price: Number(productPrice),
        sizeDetails: sizeQuantities,
        imageMain: productMainImage // URL burada Firestore'a kaydedilir.
      });
      
      Swal.fire({
        icon: 'success',
        title: 'Added!',
        text: `Product with ID "${docRef.id}" has been added.`,
        showConfirmButton: false,
        timer: 2500
      });
      // Başarıyla eklendikten sonra formu temizleyin veya state'i sıfırlayın.
      // ...
    } catch (error) {
      console.error("Error adding document: ", error);
      setError(error.message);
      Swal.fire({
        icon: 'error',
        title: 'Error!',
        text: 'There was an error adding the product.',
        showConfirmButton: true
      });
    }
  };
  






  // const handleImageChange = (e) => {
  //   setProductSelectionImgs([...e.target.files]);
  // };

  const handleInStockChange = (e) => {
    setIsInStock(e.target.value === 'true');
  };


  // Add Form data code to print out in the console to see and check the data as test...
  console.log("Submitted price:", productPrice);
  // here we see the images in console

  // console.log("new size hre:",newSize);
  console.log("db sizes here:",dbSizes);
  console.log("sizes array here:",sizes);
  console.log("isInstock: ",isInStock);
  console.log("productMainImage;",productMainImage);
  console.log("productDescription add: ",productDescription);
  console.log("productName add: ",productName);

  return (
    <div className="add-container">
      <div>
        <h2 className="d-flex justify-content-center mt-4">ADD PRODUCTS</h2>
        <hr className="v-50" />

        <form className="addForm mb-3" onSubmit={handleSubmit}>
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
              type="number"
              className="form-control"
              id="product-price"
              value={productPrice}
              onChange={handlePriceChange}
              required
            />
          </div>
          <div className="mb-3"></div>
          <div className="mb-3">
            <label htmlFor="product-sizes" className="form-label sizesLabel">
              Sizes and quantity(Select size to add quantity)
            </label>
            <div
              id="product-sizes"
              className="d-flex flex-column justify-content-center"
            >
              {dbSizes.map((size) => (
                <div className="productAddSizeDiv" key={size}>
                  <input
                    type="checkbox"
                    id={`size-${size}`}
                    value={size}
                    checked={sizes.includes(size)}
                    onChange={handleSizeChange}
                  />
                  <label className="mt-3" htmlFor={`size-${size}`}>
                    {size}
                  </label>
                  {sizes.includes(size) && (
                    <>
                      <input
                        type="number"
                        placeholder="Quantity"
                        value={sizeQuantities[size]?.quantity || ""}
                        onChange={(e) =>
                          handleQuantityChange(size, e.target.value)
                        }
                      />
                      <label
                        htmlFor="product-imgs"
                        className="form-label d-flex justify-content-start mt-2 mb-0"
                      >
                        Choose selection images for size "{size}"
                      </label>
                      
        {/*Product images  */}
                      <input
                        type="file"
                        className="form-control mb-3"
                        id="product-imgs"
                        multiple
                        required
                        onChange={(e) =>
                          handleImageChangeForSize(size, e.target.files)
                        }
                      />
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
              className="form-control"
              id="product-img"
              onChange={handleMainImageChange}
              required
            />
          </div>

          <div className="mb-3">
            {/* <label htmlFor="product-imgs" className="form-label">
           Selection Images
         </label> */}
            {/* <input
           type="file"
           className="form-control"
           id="product-imgs"
           onChange={handleImageChange}
           multiple
           required
         /> */}
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
    </div>
  );
};

export default Add;

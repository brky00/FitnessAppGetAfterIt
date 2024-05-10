import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Merch from "./components/Merch";
import Home from "./components/Home";
import Login from "./components/LoginAdmin";
import Contact from "./components/Contact";
import Shopping from "./components/Shopping";
import MerchInfo from "./components/Merchinfo";
import Table from"./components/Dashboard/Table"

import Add from "./components/Dashboard/Add"
import Dashboard from "./components/Dashboard/Dashboard"
import { useEffect, useState } from "react";
import { collection, getDocs, doc, deleteDoc,setDoc } from "firebase/firestore";
import { db } from "./components/firebase-config";
import Swal from 'sweetalert2';
import AuthChecker from "./components/AuthChecker"
import CheckoutForm from "./components/Checkout";
import Edit from "./components/Dashboard/Edit";
import Order from "./components/Dashboard/Order";
import OrderDetails from "./components/Dashboard/OrderDetails";

import Usercontact from "./components/Dashboard/Usercontact";

// Privacy Policy
import Privacypolicy from "./components/Privacypolicy"; 




function App() {
      const[dbProducts, setDbProducts] =useState([]);
      const[totalQuantity, setTotalQuantity] =useState(null);
      const[totalPrice, setTotalPrice] =useState(null);
      const [cartItems, setCartItems] = useState(() => {
        // Get cart items from local storage if available
        const savedCartItems = localStorage.getItem('cartItems');
        return savedCartItems ? JSON.parse(savedCartItems) : [];
      });
      
      const [selectedSize, setSelectedSize]=useState("");
      const [mainImage, setMainImage] = useState(null);
      const[selectedProduct, setSelectedProduct] =useState(null);

      const getProducts = async () => {
        const querySnapshot = await getDocs(collection(db, "products"));
        const products = querySnapshot.docs.map(doc => ({id: doc.id, ...doc.data()})
        );
        setDbProducts(products);
        console.log("products from firebase firestore inn App.js",products);
   
    
      }

    
      console.log("dbProducts app.js",dbProducts);
      useEffect(() => {
        getProducts(); 
      }, []); 
      useEffect(() => {
        // Save cart items to local storage
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
      }, [cartItems]);
      
  

  //orginal 17.04.2024
  console.log("APP.JS CARTITEMS ",cartItems);

  const handleAddProduct = ({ product, selectedSize, mainImage, selectedImageName, quantity }) => {
    const productExist = cartItems.find((item) => item.id === product.id && item.productSize === selectedSize && item.selectedImgName === selectedImageName);
  
    // finding the stock quantity for avaible stock state.
    const sizeDetail = product.sizeDetails[selectedSize].find(
      detail => detail.fileName === selectedImageName
    );
    const availableStock = sizeDetail ? sizeDetail.quantity : 0;
  
    if (productExist) {
      // If products is allready added in the s card and quantity is not over the stock updating the quantity here.
      if (productExist.quantity + quantity <= availableStock) {
        setCartItems(
          cartItems.map((item) => item.id === product.id && item.productSize === selectedSize && item.selectedImgName === selectedImageName
            ? { ...productExist, quantity: productExist.quantity + quantity }
            : item
          )
        );
      } else {
        // if stock is not enought.
        alert("Not enough stock available");
      }
    } else {
      // If the product has not been added to the cart before and is in stock, it adds the new product.
      if (quantity <= availableStock) {
        setCartItems([...cartItems, { ...product, quantity, productSize: selectedSize, selectedImgName: selectedImageName, selectedImage: mainImage }]);
      } else {
        // allert of stock
        alert("Not enough stock available");
      }
    }
  };
  


  console.log("nye cart items",cartItems);
  

  const handleRemoveQuantity = (product) => {
    const productExist = cartItems.find((item) => (item.id === product.id) && (item.productSize === product.productSize) &&(item.selectedImage===product.selectedImage));
    if (productExist && productExist.quantity === 1) {
      setCartItems(cartItems.filter((item) => (item.id !== product.id) || (item.productSize !== product.productSize) || (item.selectedImage !== product.selectedImage) ));
    } else if (productExist) {
      setCartItems(
        cartItems.map((item) =>
        (item.id === product.id) && (item.productSize === product.productSize)&&(item.selectedImage === product.selectedImage)
            ? { ...productExist, quantity: productExist.quantity - 1 }
            : item
        )
      );
    }
  };
  

  const handleAddQuantity = (product) => {
    //We finding products stock quantity here
    const productInDb = dbProducts.find(p => p.id === product.id);
    const sizeDetail = productInDb.sizeDetails[product.productSize].find(
      detail => detail.fileName === product.selectedImgName
    );
    const availableStock = sizeDetail ? sizeDetail.quantity : 0;
  
    // s card quantity finding
    const productExist = cartItems.find((item) => item.id === product.id && item.productSize === product.productSize && item.selectedImgName === product.selectedImgName);
  
    if (productExist) {
      // if its in stok 
      if (productExist.quantity < availableStock) {
        setCartItems(
          cartItems.map((item) => item.id === product.id && item.productSize === product.productSize && item.selectedImgName === product.selectedImgName
            ? { ...productExist, quantity: productExist.quantity + 1 }
            : item
          )
        );
      } else {
        // if not
        alert("Cannot add more than the available stock.");
      }
    }
  };
  //other handle functions
  const handleRemoveAllProducts = () => {
    setCartItems([]);
    localStorage.removeItem('cartItems'); // Clear the cart in local storage too.
  };

  const handleTotalQuantityOfProduct = ({totalItems}) => {
    if (totalItems){
      setTotalQuantity(totalItems);

    }
  }

  const handleTotalPrice = ({totalPrice}) => {
    if (totalPrice){
      setTotalPrice(totalPrice);

    }
  }

  const handleEditProduct = editId => {
    const [editProduct] = dbProducts.filter(employee => employee.id === editId);
    setSelectedProduct(editProduct);
 
  };
  
  
  const handleDeleteProduct = (deleteId) => {
    console.log("deleteId: ",deleteId)


    Swal.fire({
      icon: 'warning',
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, cancel!',
    }).then(result => {
      if (result.value) {
        const [deletedProduct] = dbProducts.filter(prdct =>prdct.id === deleteId);
        deleteDoc(doc(db, "products", deleteId));

        Swal.fire({
          icon: 'success',
          title: 'Deleted!',
          text: `Product "${deletedProduct.productName}" with id " ${deletedProduct.id}"  has been deleted.`,
          showConfirmButton: false,
          timer: 1500,
        });

        const productsCopy = dbProducts.filter(prdct => prdct.id !== deleteId);
        
        setDbProducts(productsCopy);
      }
    });

  };
  
  console.log("selectedSize",selectedSize);
  console.log("Appjs Cart items:",cartItems);

  console.log("totalQuantity APP.JS: ",totalQuantity);
  console.log("totalPrice APP.JS: ",totalPrice);
  


  //React Router codes for render and navigate.
  return (
    <Router>
      <Navbar handleTotalQuantityOfProduct={handleTotalQuantityOfProduct} cartItems={cartItems}/>
      
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/merch" element={<Merch productItems={productItems}/>} /> */}
        <Route path="/merch" element={<Merch dbProducts={dbProducts}/>} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/shopping" element={<Shopping handleTotalPrice={handleTotalPrice} cartItems={cartItems} handleAddProduct={handleAddProduct} handleRemoveQuantity={handleRemoveQuantity} handleAddQuantity={handleAddQuantity} handleRemoveAllProducts={handleRemoveAllProducts}/>} /> 
        <Route path="/LoginAdmin" element={<Login />} />
        <Route path="/merchinfo/:id" element={<MerchInfo dbProducts={dbProducts} handleAddProduct={handleAddProduct} selectedSize={selectedSize} setSelectedSize={setSelectedSize} mainImage={mainImage} setMainImage={setMainImage} cartItems={cartItems}/>} />
        <Route path="/dashTable" element={<Table dbProducts={dbProducts} handleDeleteProduct={handleDeleteProduct} handleEditProduct={handleEditProduct}/>}/>
        <Route path="/addProduct" element={<Add/>}/>
        <Route path="/dashOrder" element={<Order/>}/>
        <Route path="/editProduct" element={<Edit selectedProduct={selectedProduct} />}/>
       
        <Route path="/dashboard" element={ <AuthChecker> <Dashboard /> </AuthChecker>}/>
        <Route path="/checkout" element={<CheckoutForm totalPrice={totalPrice} totalQuantity={totalQuantity} cartItems={cartItems} handleRemoveAllProducts={handleRemoveAllProducts} />}/>  
        <Route path="/orderDetails" element={<OrderDetails/>}/>
     
        <Route path="/Usercontact" element={<Usercontact/>}/>
        
        <Route path="/privacypolicy" element={<Privacypolicy/>}/>
        

      </Routes>
    </Router>
  );
 
}

export default App;

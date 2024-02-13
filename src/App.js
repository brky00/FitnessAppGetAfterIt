import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Merch from "./components/Merch";
import Home from "./components/Home";
import Login from "./components/LoginAdmin";
import Contact from "./components/Contact";
import Shopping from "./components/Shopping";
import MerchInfo from "./components/Merchinfo";
import Table from"./components/Dashboard/Table"
import DashIndex from"./components/Dashboard/DashIndex"
import Add from "./components/Dashboard/Add"
import Dashboard from "./components/Dashboard/Dashboard"
import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "./components/firebase-config";
// import data from "./components/back/Data/Data"; //THIS CODE WAS USED WITH DATA.JS TEST DATA. WE JUST SHOW HERE IN COMMENT WHAT WI DID BEFORE THE DATABASE


function App() {
      /*Database transactions start*/
      const[dbProducts, setDbProducts] =useState([]);
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
  
  
    
      /*Database transactions end*/


  
  // const { productItems } = data; //THIS CODE WAS USED WITH DATA.JS TEST DATA. WE JUST SHOW HERE IN COMMENT WHAT WI DID BEFORE THE DATABASE

  const [cartItems, setCartItems]=useState([]);
  const [selectedSize, setSelectedSize]=useState("");
  console.log("APP.JS CARTITEMS ",cartItems);

  const handleAddProduct = ({product, selectedSize}) => {
    const productExist = cartItems.find((item) => item.id === product.id && item.productSize === selectedSize);
    if (productExist) {
      // hvis produk finnes allerede(med samme size) quantity økes.
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id && item.productSize === selectedSize
            ? { ...productExist, quantity: productExist.quantity + 1 }
            : item
        )
      );
    } else {
      // Det blir added som en ny produkt hvis det ikke finnes fra før
      setCartItems([...cartItems, { ...product, quantity: 1, productSize: selectedSize }]);
    }
  };
  

  const handleRemoveQuantity = (product) => {
    const productExist = cartItems.find((item) => item.id === product.id && item.productSize === product.productSize);
    if (productExist && productExist.quantity === 1) {
      setCartItems(cartItems.filter((item) => item.id !== product.id || item.productSize !== product.productSize));
    } else if (productExist) {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id && item.productSize === product.productSize
            ? { ...productExist, quantity: productExist.quantity - 1 }
            : item
        )
      );
    }
  };
  

  const handleAddQuantity = (product) => {
    const productExist = cartItems.find((item) => item.id === product.id && item.productSize === product.productSize);
    if (productExist) {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id && item.productSize === product.productSize
            ? { ...productExist, quantity: productExist.quantity + 1 }
            : item
        )
      );
    }
  };

  const handleRemoveAllProducts = () => {
    setCartItems([]);
  };
  
  const handleDeleteProduct = (deleteId) => {
    console.log("deleteId: ",deleteId)

  };
  
  console.log("selectedSize",selectedSize);
  console.log("Appjs Cart items:",cartItems);

  
  return (
    <Router>
      <Navbar cartItems={cartItems}/>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/merch" element={<Merch productItems={productItems}/>} /> */}
        <Route path="/merch" element={<Merch dbProducts={dbProducts}/>} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/shopping" element={<Shopping cartItems={cartItems} handleAddProduct={handleAddProduct} handleRemoveQuantity={handleRemoveQuantity} handleAddQuantity={handleAddQuantity} handleRemoveAllProducts={handleRemoveAllProducts}/>} /> 
        <Route path="/LoginAdmin" element={<Login />} />
        <Route path="/merchinfo/:id" element={<MerchInfo dbProducts={dbProducts} handleAddProduct={handleAddProduct} selectedSize={selectedSize} setSelectedSize={setSelectedSize} cartItems={cartItems}/>} />
        <Route path="/dashTable" element={<Table dbProducts={dbProducts} handleDeleteProduct={handleDeleteProduct}/>}/>
        <Route path="/addProduct" element={<Add/>}/>
        <Route path="/dashIndex" element={<DashIndex/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
      </Routes>
    </Router>
  );
 
}

export default App;

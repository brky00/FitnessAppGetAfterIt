import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Merch from "./components/Merch";
import Home from "./components/Home";
import Login from "./components/LoginAdmin";
import Contact from "./components/Contact";
import Shopping from "./components/Shopping";
import MerchInfo from "./components/Merchinfo";
import data from "./components/back/Data/Data";
import Table from"./components/Dashboard/Table"
import DashIndex from"./components/Dashboard/DashIndex"
import Add from "./components/Dashboard/Add"
import Dashboard from "./components/Dashboard/Dashboard"
import { useState } from "react";
import CheckoutForm from "./components/Checkout";




function App() {
  
  const { productItems } = data;
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
  
  
  console.log("selectedSize",selectedSize);
  console.log("Appjs Cart items:",cartItems);
  
  return (
    <Router>
      <Navbar cartItems={cartItems}/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/merch" element={<Merch productItems={productItems}/>} />
        <Route path="/contact" element={<Contact />} />

        <Route path="/shopping" element={<Shopping cartItems={cartItems} handleAddProduct={handleAddProduct} handleRemoveQuantity={handleRemoveQuantity} handleAddQuantity={handleAddQuantity} handleRemoveAllProducts={handleRemoveAllProducts}/>} /> 
        <Route path="/LoginAdmin" element={<Login />} />
        <Route path="/merchinfo/:id" element={<MerchInfo productItems={productItems} handleAddProduct={handleAddProduct} selectedSize={selectedSize} setSelectedSize={setSelectedSize} cartItems={cartItems}/>} />
        <Route path="/dashTable" element={<Table productItems={productItems}/>}/>
        <Route path="/addProduct" element={<Add/>}/>
        <Route path="/dashIndex" element={<DashIndex/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
        <Route path="/checkout" element={<CheckoutForm/>}/>
        
        

      </Routes>
    </Router>
  );
 
}

export default App;

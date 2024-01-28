import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Merch from "./components/Merch";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Shopping from "./components/Shopping";
import MerchInfo from "./components/Merchinfo";
import data from "./components/back/Data/Data";
import { useState } from "react";



function App() {
  const { productItems } = data;
  const [cartItems, setCartItems]=useState([])

  const handleAddProduct = (product)=>{
    const productExist = cartItems.find((item) => item.id === product.id);
   if(productExist){
    setCartItems(cartItems.map((item) => item.id === product.id ? 
    {...productExist, quantity: productExist.quantity+1} :item )
    );
   }
   else{
    setCartItems([...cartItems, {...product, quantity: 1}])
   }
  }
  
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/merch" element={<Merch productItems={productItems}/>} />
        <Route path="/contact" element={<Contact />} />

        <Route path="/shopping" element={<Shopping cartItems={cartItems} handleAddProduct={handleAddProduct}/>} />

        <Route path="/merchinfo/:id" element={<MerchInfo productItems={productItems} handleAddProduct={handleAddProduct}/>} />

        

      </Routes>
    </Router>
  );
 
}

export default App;

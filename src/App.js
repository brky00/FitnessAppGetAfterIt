import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Merch from "./components/Merch";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Shopping from "./components/Shopping";
import MerchInfo from "./components/Merchinfo";
import data from "./components/back/Data/Data";



function App() {
  const { productItems } = data;
  
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/merch" element={<Merch productItems={productItems}/>} />
        <Route path="/contact" element={<Contact />} />

        <Route path="/shopping" element={<Shopping />} />

        <Route path="/merchinfo/:id" element={<MerchInfo productItems={productItems}/>} />

        

      </Routes>
    </Router>
  );
 
}

export default App;

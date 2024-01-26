import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Merch from "./components/Merch";
import Home from "./components/Home";
import Contact from "./components/Contact";
import MerchInfo from "./components/Merchinfo";



function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/merch" element={<Merch />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/merchinfo" element={<MerchInfo />} />

        
      </Routes>
    </Router>
  );
}

export default App;

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Merch from "./components/Merch";
import Home from "./components/Home";
import Login from "./components/LoginAdmin";


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/merch" element={<Merch />} />
        <Route path="/loginAdmin" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;

import logo from '../images/logos/logo.svg';
import Header from './Header';
import Footer from './Footer';
import LoginLayout from "./Login";
import Home from "./Home";
import Contact from "./Contact";
import About from "./About";
import Register from './Register';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "../css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<LoginLayout />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

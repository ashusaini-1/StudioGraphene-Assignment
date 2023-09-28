import "./App.css";
import Products from "./components/product/Products";
import Navbar from "./components/header/Navbar";
import Home from "./components/home/Home";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import Topnav from "./components/header/Topnav";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <Topnav />
      <Navbar />
      <Home />
      <Products />
      <Contact />
      <Footer />
    </Router>
  );
}

export default App;

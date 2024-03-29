import './Styles/App.css';
import Navbar from "./components/Navbar";
import Footer from './components/footer';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Products from "./pages/Products";
import Services from "./pages/Services";
import ProdutsDetails from "./pages/ProdutsDetails";
import Cart from "./pages/cart";
import Setting from "./pages/SettingUser";

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/setting" element={<Setting />} />
        <Route path="/products" element={<Products />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/product/:id" element={<ProdutsDetails />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      <Footer />
    </Router>
  );
}
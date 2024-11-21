import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import { Items } from './Data';
import ClothingCategory from './components/ClothingCategory';
import ProductDetail from './components/ProductDetail';
import Cart from "./components/Cart";
import Banner from "./components/Banner";
import ScrollToTop from './components/ScrollToTop';
import Footer from "./components/Footer";
import { CartProvider } from './context/CartContext';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <CartProvider>
      <Router>
        <ScrollToTop />
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/mens" element={<ClothingCategory items={Items} category="men" />} />
          <Route path="/womens" element={<ClothingCategory items={Items} category="women" />} />
          <Route path="/shoes" element={<ClothingCategory items={Items} category="shoes" />} />
          <Route path="/trending" element={<ClothingCategory items={Items} category="trending" />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
        <ToastContainer position="top-right" autoClose={1500} hideProgressBar />
        <Banner />
        <Footer />
      </Router>
    </CartProvider>
  );
}

export default App;

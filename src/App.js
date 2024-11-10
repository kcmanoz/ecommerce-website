import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import { Items } from './components/Data';
import TrendingSlider from './components/TrendingSlider';
import ClothingCategory from './components/ClothingCategory';
import ProductDetail from './components/ProductDetail';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mens" element={<ClothingCategory items={Items} category="men" />} />
        <Route path="/womens" element={<ClothingCategory items={Items} category="women" />} />
        <Route path="/shoes" element={<ClothingCategory items={Items} category="shoes" />} />
        <Route path="/trending" element={<ClothingCategory items={Items} category="trending" />} />
        <Route path="/product/:id" element={<ProductDetail />} />
      </Routes>
      <TrendingSlider />
    </Router>
  );
}

export default App;

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import MenClothing from './components/MenClothing';
import WomenClothing from './components/WomenClothing';
import { Items } from './components/Data';
import TrendingSlider from './components/TrendingSlider';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mens" element={<MenClothing items={Items} />} />
        <Route path="/womens" element={<WomenClothing items={Items} />} />
      </Routes>
      <TrendingSlider />
    </Router>
  );
}

export default App;

import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar';
import Header from './components/Home';
import ClothingCarousel from './components/ClothingCarousel';

function App() {
  return (
    <Router>
      <Navbar />
      <Header />
      <ClothingCarousel />
    </Router>
  );
}

export default App;

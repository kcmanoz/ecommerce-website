import React from 'react';
import Navbar from './components/Navbar';
import Header from './components/Header';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Navbar />
      <Header />

    </Router>
  );
}

export default App;

// src/App.jsx
import React, { useState } from 'react'; // Import React and useState hook from React
//import './App.css'; // Import custom styles from App.css
import Navbar from './Components/Navbar'; // Import Navbar component
import OpenImg from './Components/OpenImg'; // Import OpenImg component
import ProductCard from './Components/ProductCard'; // Import ProductCard component
import OffCanvasCart from './Components/OffCanvasCart'; // Import OffCanvasCart component
import { productInf } from './productInf'; // Import product data
import {BrowserRouter, Routes, Route} from 'react-router-dom'; // Import BrowserRouter and Routes from react-router-dom
import PaymentPage from './Components/PaymentPage'; // Import PaymentPage component
import Home from './Home';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/payment" element={<PaymentPage />} />
        </Routes>
      </BrowserRouter>
    </div>

  );
}

export default App; // Export the App component for use in other parts of the application

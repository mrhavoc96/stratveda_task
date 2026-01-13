import React from 'react'
import { Routes, Route } from "react-router-dom"; 
import Home from "./pages/Home";
import Product from "./pages/Product";
import Navbar from "./components/Navbar";
import Section1 from "./components/Section1"
import Products from './components/sections/Products';

const App = () => {
  return (
    <div>
      <Navbar />
      {/* <Products/> */}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products/:slug" element={<Product />} />
      </Routes>
    </div>
  )
}

export default App
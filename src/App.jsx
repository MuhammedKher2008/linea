import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Home from "./components/HomePage";
import Service from "./components/HomePage copy";
import CartProvider from "./components/CartContext";
import Footer from "./components/footer";
function App() {
  return (
    <Router>
      <CartProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/service" element={<Service />} />
        </Routes>
        <Footer />
      </CartProvider>
    </Router>
  );
}

export default App;

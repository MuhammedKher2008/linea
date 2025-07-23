import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Home from "./components/HomePage";
import CartProvider from "./components/CartContext";
import Footer from "./components/footer";
import Dress from "./components/dress";
import Tops from "./components/tops";
import EthincWear from "./components/ethnicWear";
import PartyWear from "./components/partywear";
import BabyKids from "./components/baby&kids";
import GameSport from "./components/game&sport";
import Leftsidebar from "./components/blogleftsidebar";
import Rightsidebar from "./components/blogrightsidebar";
import Fullwidth from "./components/fullwidth";
import Magiksearch from "./components/MagikSearch";
import Aboutus from "./components/Aboutus"
import Typography from "./components/Typography";
import Blog from "./components/Blog";
import FullwidthPage from "./components/FullwidthPage";
import PageLeft from "./components/PageLeft";
import PageRight from "./components/PageRight"
import ThreeColumn from "./components/ThreeColumn";
import Pricing from "./components/Pricing";
import Contact from "./components/Contact";
import Faq from "./components/Faq";
import Cart from "./components/cart";

function App() {
  return (
    <Router>
      <CartProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dress" element={<Dress />} />
          <Route path="/Tops" element={<Tops />} />
          <Route path="/EthincWear" element={<EthincWear />} />
          <Route path="/PartyWear" element={<PartyWear />} />
          <Route path="/BabyKids" element={<BabyKids />} />
          <Route path="/GameSport" element={<GameSport />} />
          <Route path="/Leftsidebar" element={<Leftsidebar />} />
          <Route path="/Rightsidebar" element={<Rightsidebar />} />
          <Route path="/Fullwidth" element={<Fullwidth />} />
          <Route path="/Magiksearch" element={<Magiksearch/>} />
          <Route path="/Aboutus" element={<Aboutus/>}/>
          <Route path="/Typography" element={<Typography/>} />
          <Route path="/Blog" element={<Blog/>}/>
          <Route path="/FullwidthPage" element={<FullwidthPage/>} />
          <Route path="/PageLeft" element={<PageLeft/>} />
          <Route path="/PageRight" element={<PageRight/>} />
          <Route path="/ThreeColumn" element={<ThreeColumn/>}/>
          <Route path="/Pricing" element={<Pricing/>} />
          <Route path="/Contact" element={<Contact/>} />
          <Route path="/Faq" element={<Faq/>} />
          <Route path="/Cart" element={<Cart/>}/>
        </Routes>
        <Footer />
      </CartProvider>
    </Router>
  );
}

export default App;

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react'
import './App.css'
import Navbar from "./components/Navbar";
import Home from './Home';
import Footer from './components/Footer';
// Import other pages as needed
import About from './About.jsx';
import Blog from './Blog';
// import Categories from './Categories';
import ListProducts from './ListProducts';

function App() {
  return (
    <Router basename="/SaaSBay">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        {/* <Route path="/categories" element={<Categories />} /> */}
        <Route path="/list-your-products" element={<ListProducts />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

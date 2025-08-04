import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react'
import './App.css'
import Navbar from "./components/Navbar";
import Home from './Home';
import Footer from './components/Footer';
// Import other pages as needed
import About from './About.jsx';
import Blog from './Blog';
import BlogDetail from './BlogDetail';
import ListProducts from './ListProducts';
import Marketplace from './components/Marketplace.jsx';
import TermOfUse from './TermOfUse.jsx';
import PrivacyPolicy from './PrivacyPolicy.jsx';

function App() {
  return (
    <Router basename="/SaaSBay">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:title" element={<BlogDetail />} />
        <Route path="/list-your-products" element={<ListProducts />} />
        <Route path="/marketplace" element={<Marketplace />} />
        <Route path="/term-of-use" element={<TermOfUse />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

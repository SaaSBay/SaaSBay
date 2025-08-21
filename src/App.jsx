import { BrowserRouter as Router, Routes, Route, useParams } from 'react-router-dom';
import { useState  } from 'react'
import { vendors } from "./components/vendors";
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
import ProductPage from './components/ProductPage.jsx';
import ScrollToTop from './ScrollToTop.jsx';
import Accessibility from './components/Accessibility.jsx';
import ContactUs from './ContactUs.jsx';
import ChatBot from './ChatBot.jsx';

// Wrapper for product page
function ProductPageWrapper() {
  const { id } = useParams();
  const product = vendors.find((v) => v.id.toString() === id);

  if (!product) {
    return <div className="p-6 text-red-500">Product not found</div>;
  }

  return <ProductPage product={product} />;
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      {/* <ScrollToHash /> */}
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
         <Route path="/vendors/:id" element={<ProductPageWrapper />} />
        <Route path="/accessibility" element={<Accessibility />} />
        <Route path="/contact-us" element={<ContactUs />} />
      </Routes>
      <ChatBot />
      <Footer />
    </Router>
  );
}

export default App;




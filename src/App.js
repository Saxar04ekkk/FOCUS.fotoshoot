import React from 'react';
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import PhotoSession from './components/PhotoSession/PhotoSession';
import './Fonts.module.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AboutUs from './components/AboutUs/AboutUs';
import Services from './components/Services/Services';
import ContactForm from './components/ContactForm/ContactForm';
import Portfolio from './components/Portfolio/Portfolio';

const App = () => {
  return (
    <BrowserRouter>
      <div className='site-wrapper'>
        <Header />
        <div className='site-wrapper-content'>
          <Routes>
            <Route path="/" element={<ContactForm />} />
            <Route path="/photosession" element={<PhotoSession />} />
            <Route path="/aboutus" element={<AboutUs />} />
            <Route path="/services" element={<Services />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/contact" element={<ContactForm />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;

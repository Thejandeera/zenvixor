// App.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import NavBar from './Components/NavBar';
import Hero from './Pages/Hero';
import About from './Pages/About';
import Services from './Pages/Services';
import Portfolio from './Pages/Portfolio';
import MyMap from './Pages/MyMap';
import Experts from './Pages/Experts';
import Footer from './Components/Footer';
import WebsiteDevelopment from './Pages/WebsiteDevelopment';
import SocialMediaManagement from './Pages/SocialMediaManagement';
import CashCowVideoEditing from './Pages/CashCowVideoEditing';

const App = () => {
  return (
    <div className="relative">
      <NavBar />
      <Routes>
        <Route path="/" element={
          <>
            <div id="home" className="pt-16"><Hero /></div>
            <div id="about" className="pt-16"><About /></div>
            <div id="services" className="pt-16"><Services /></div>
            <div id="portfolio" className="pt-16"><Portfolio /></div>
            <div id="experts" className="pt-16"><Experts /></div>
            <div id="map" className="pt-16"><MyMap /></div>
          </>
        } />
        <Route path="/website-development" element={<WebsiteDevelopment />} />
        <Route path="/social-media-management" element={<SocialMediaManagement />} />
        <Route path="/cash-cow-video-editing" element={<CashCowVideoEditing />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;

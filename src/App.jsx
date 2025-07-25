import React from 'react';
import { Routes, Route } from 'react-router-dom';
import NavBar from './Components/NavBar';
import ScrollToTop from './Components/ScrollToTop'; 
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
import YouTubeManagement from './Pages/YouTubeManagement';
import PodcastEditing from './Pages/PodcastEditing';
import PromotionVideoEditing from './Pages/PromotionVideoEditing';



const App = () => {
  return (
    <div className="relative">
      <NavBar />
      <ScrollToTop /> 
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
        <Route path="/youtube-channel-management" element={<YouTubeManagement />} />
        <Route path="/podcast-editing" element={<PodcastEditing />} />
        <Route path="/promotion-video-editing" element={<PromotionVideoEditing />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;

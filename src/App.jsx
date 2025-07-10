import React from 'react'
import NavBar from './Components/NavBar'
import Hero from './Pages/Hero'
import About from './Pages/About'
import Services from './Pages/Services'
import Portfolio from './Pages/Portfolio'
import MyMap from './Pages/MyMap'
import Experts from './Pages/Experts'
import Footer from './Components/Footer'

const App = () => {
  return (
    <div className="relative">
      <NavBar/>
      <div id="home" className="pt-16"><Hero/></div>
      <div id="about" className="pt-16"><About/></div>
      <div id="services" className="pt-16"><Services/></div>
      <div id="portfolio" className="pt-16"><Portfolio/></div>
      <div id="experts" className="pt-16"><Experts/></div>
      <div id="map" className="pt-16"><MyMap/></div>
      <div><Footer/></div>
    </div>
  )
}

export default App
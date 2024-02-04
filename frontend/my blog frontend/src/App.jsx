import { useState } from 'react'
import './App.css'
import NavBar from './global-assets/nav-bar.jsx'
import Footer from './global-assets/footer.jsx'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/home.jsx'
import Contact from './pages/contact.jsx'
import Posts from './pages/posts.jsx'
import Projects from './pages/portfolio.jsx'
import Resume from './pages/resume.jsx'
import About from './pages/about.jsx'
import Portfolio from './pages/portfolio.jsx'
import Services from './pages/services.jsx'

function App() {

  let SplashOfColor = [
    {
      backgroundColor: '#00CC66',
      textColor: 'black'
    },
    {
      backgroundColor: '#623CEA',
      textColor: '#white'
    },
    {
      backgroundColor: '#DB2955',
      textColor: 'white'
    },
    {
      backgroundColor: '#F1DB4B',
      textColor: 'black'
    },
    {
      backgroundColor: '#DAC4F7',
      textColor: '#6E1DD7'
    },
  ]


  function getColorSwatch() {
    const randomPicker = Math.floor(Math.random() * SplashOfColor.length)
    return SplashOfColor[randomPicker]
  }


  return (
    <>
    <NavBar getColorSwatch={getColorSwatch} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/services" element={<Services />} />
      </Routes>
    <Footer />
    </>
  )
}

export default App

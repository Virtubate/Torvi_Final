import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Company from './pages/Company'
import TalkToUs from './pages/TalkToUs'
import './App.css'

function App() {
  return (
    <Router basename="/Torvi_Final">
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/company" element={<Company />} />
          <Route path="/talk-to-us" element={<TalkToUs />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App


import React, { useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom'
import ScrollToTop from './components/ScrollToTop'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Company from './pages/Company'
import TalkToUs from './pages/TalkToUs'
import PrivacyPolicy from './pages/PrivacyPolicy'
import TermsOfService from './pages/TermsOfService'
import Careers from './pages/Careers'
import Blog from './pages/Blog'
import BlogDetail from './pages/BlogDetail'
import './App.css'

// Redirect component for /features -> /#features
const FeaturesRedirect = () => {
  const navigate = useNavigate()

  useEffect(() => {
    navigate('/', { replace: true })
    setTimeout(() => {
      const element = document.getElementById('features')
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }, 100)
  }, [navigate])

  return <Home />
}

function App() {
  return (
    <Router basename="/">
      <ScrollToTop />
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/features" element={<FeaturesRedirect />} />
          <Route path="/company" element={<Company />} />
          <Route path="/talk-to-us" element={<TalkToUs />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogDetail />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App


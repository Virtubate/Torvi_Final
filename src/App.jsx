import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Stats from './components/Stats'
import FeaturesDashboard from './components/FeaturesDashboard'
import Comparison from './components/Comparison'
import CTA from './components/CTA'
import Footer from './components/Footer'
import './App.css'

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Stats />
      <FeaturesDashboard />
      <Comparison />
      <CTA />
      <Footer />
    </div>
  )
}

export default App


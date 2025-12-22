import React from 'react'
import { Link } from 'react-router-dom'
import './Hero.css'

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <div className="badge">
          <span className="badge-dot"></span>
          INTRODUCING TORVI
          <span className="badge-arrow">›</span>
        </div>
        <h1 className="hero-title">
          AI agents and Workflows that work for you
        </h1>
        <p className="hero-subtitle">Automate every and any operation effortlessly</p>
        <Link to="/talk-to-us" className="btn-hero">Book a demo</Link>
      </div>
    </section>
  )
}

export default Hero


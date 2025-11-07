import React from 'react'
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
          AI agents that work for you.<br/>
          Automate every and any operation.
        </h1>
        <p className="hero-subtitle">Connect your tools, train your models, and let your agents handle the rest.</p>
        <a href="#" className="btn-hero">Talk to us</a>
      </div>
    </section>
  )
}

export default Hero


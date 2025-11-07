import React from 'react'
import './CTA.css'

const CTA = () => {
  return (
    <section className="cta-section">
      <div className="animated-wave"></div>
      <div className="cta-watermark">torvi</div>
      <div className="cta-container">
        <div className="cta-left">
          <div className="cta-label">
            <span className="cta-dot"></span>
            GET A PERSONALIZED DEMO
          </div>
          <h2 className="cta-title">
            Ready to see Torvi<br/>
            in action?
          </h2>
        </div>

        <div className="cta-right">
          <p className="cta-description">
            Torvi's AI agents handle complex workflows at scale, from live delivery issues to compliance decisions, while maintaining over utmost operational accuracy.
          </p>
          <button className="cta-button">Talk to us</button>
        </div>
      </div>
    </section>
  )
}

export default CTA


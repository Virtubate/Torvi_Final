import React from 'react'
import './CTA.css'

const CTA = ({
  label = "GET A PERSONALIZED DEMO",
  title = "Ready to see Torvi<br/>in action?",
  description = "Torvi's AI agents handle complex workflows at scale, from live delivery issues to compliance decisions, while maintaining over utmost operational accuracy.",
  buttonText = "Talk to us"
}) => {
  return (
    <section className="cta-section">
      <div className="animated-wave"></div>
      <div className="cta-watermark">torvi</div>
      <div className="cta-container">
        <div className="cta-left">
          <div className="cta-label">
            <span className="cta-dot"></span>
            {label}
          </div>
          <h2 className="cta-title" dangerouslySetInnerHTML={{ __html: title }} />
        </div>

        <div className="cta-right">
          <p className="cta-description">
            {description}
          </p>
          <button className="cta-button">{buttonText}</button>
        </div>
      </div>
    </section>
  )
}

export default CTA


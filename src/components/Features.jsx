import React from 'react'
import './Features.css'

const Features = ({ 
  label = "CUSTOM AGENTS", 
  titleLine1 = "Built to handle", 
  titleLine2 = "complexity",
  features
}) => {
  const defaultFeatures = [
    {
      icon: (
        // Sliders/Settings icon - represents customization
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M4 21V14M4 10V3M12 21V12M12 8V3M20 21V16M20 12V3M1 14H7M9 8H15M17 16H23" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: 'Extremely customizable',
      description: 'Fine-tune agents for every nuance to match your business. They think, decide, and act on your behalf automatically.'
    },
    {
      icon: (
        // Database with shield/lock icon - represents data security
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <ellipse cx="12" cy="5" rx="9" ry="3" stroke="white" strokeWidth="2"/>
          <path d="M3 5V19C3 20.66 7.03 22 12 22C16.97 22 21 20.66 21 19V5" stroke="white" strokeWidth="2"/>
          <path d="M3 12C3 13.66 7.03 15 12 15C16.97 15 21 13.66 21 12" stroke="white" strokeWidth="2"/>
          <path d="M12 8V11M10 10H14" stroke="white" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      ),
      title: 'Your Data, Your Models',
      description: 'Train AI models with your own documents and data using built-in RAG. Keep everything private, secure, and under your complete control'
    },
    {
      icon: (
        // Message/Command icon - represents natural language
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M8 10H16M8 14H12" stroke="white" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      ),
      title: 'Build with Natural Language',
      description: 'Describe what you want in plain English. Torvi\'s AI assistant builds the workflow for you, zero coding required'
    }
  ]
  
  const featuresList = features || defaultFeatures

  return (
    <section className="features-section">
      <div className="features-container">
        <div className="features-content">
          <div className="features-header">
            <div className="features-label">
              <span className="label-dot"></span>
              {label}
            </div>
            <h2 className="features-title">
              {titleLine1}<br/>
              {titleLine2}
            </h2>
          </div>

          <div className="features-grid">
            {featuresList.map((feature, index) => (
              <React.Fragment key={index}>
                <div className="feature-divider"></div>
                <div className="feature-card">
                  <div className="feature-icon">{feature.icon}</div>
                  <h3 className="feature-title">{feature.title}</h3>
                  <p className="feature-description">{feature.description}</p>
                </div>
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Features


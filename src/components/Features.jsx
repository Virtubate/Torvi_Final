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
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2L2 7L12 12L22 7L12 2Z" fill="white"/>
          <path d="M2 17L12 22L22 17M2 12L12 17L22 12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: 'Extremely customizable',
      description: 'Fine-tune agents for every nuance to match your business. They think, decide, and act on your behalf automatically.'
    },
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 20h9M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: 'Your Data, Your Models',
      description: 'Train AI models with your own documents and data using built-in RAG. Keep everything private, secure, and under your complete control'
    },
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
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


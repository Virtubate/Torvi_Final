import React from 'react'
import Features from './Features'
import Dashboard from './Dashboard'
import './FeaturesDashboard.css'

const FeaturesDashboard = () => {
  const customFeatures = [
    {
      icon: (
        // Network/Brain nodes icon - represents complexity
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="12" cy="12" r="3" stroke="white" strokeWidth="2"/>
          <circle cx="4" cy="6" r="2" stroke="white" strokeWidth="2"/>
          <circle cx="20" cy="6" r="2" stroke="white" strokeWidth="2"/>
          <circle cx="4" cy="18" r="2" stroke="white" strokeWidth="2"/>
          <circle cx="20" cy="18" r="2" stroke="white" strokeWidth="2"/>
          <path d="M9.5 10.5L6 8M14.5 10.5L18 8M9.5 13.5L6 16M14.5 13.5L18 16" stroke="white" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      ),
      title: 'Built for complexity',
      description: 'Designed to handle your biggest operational problems'
    },
    {
      icon: (
        // Lightning bolt icon - represents speed
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
        </svg>
      ),
      title: 'Built for speed',
      description: 'Implement complex changes instantly'
    },
    {
      icon: (
        // Trending up/scale icon - represents growth and scale
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M23 6L13.5 15.5L8.5 10.5L1 18" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M17 6H23V12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: 'Built for scale',
      description: 'Navigate millions of business scenarios with high precision'
    }
  ]
  
  return (
    <section id="features" className="features-dashboard-section">
      {/* First Instance */}
      <Features />
      <Dashboard />
      
      {/* Second Instance - Duplicate */}
      <Features 
        label="OPTIMIZE GROWTH"
        titleLine1="Add Agentic Intelligence"
        titleLine2="on the go"
        features={customFeatures}
      />
      <Dashboard variant="insights" />
    </section>
  )
}

export default FeaturesDashboard


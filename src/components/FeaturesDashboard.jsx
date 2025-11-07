import React from 'react'
import Features from './Features'
import Dashboard from './Dashboard'
import './FeaturesDashboard.css'

const FeaturesDashboard = () => {
  const customFeatures = [
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2L2 7L12 12L22 7L12 2Z" fill="white"/>
          <path d="M2 17L12 22L22 17M2 12L12 17L22 12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: 'Performance Driven',
      description: 'Designed to help you hit KPIs'
    },
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 20h9M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: 'Context-Aware',
      description: 'Models with unmatched context window with data-backed approach for smarter decisions'
    },
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: 'Auto improve',
      description: 'Self-learning model for reliabile operations'
    }
  ]
  
  return (
    <section className="features-dashboard-section">
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


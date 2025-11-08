import React from 'react'
import CompanyStats from '../components/CompanyStats'
import CompanyFeaturesDashboard from '../components/CompanyFeaturesDashboard'
import './Company.css'

const Company = () => {
  return (
    <div className="company-page">
      {/* Hero Section with Desert Image */}
      <section className="company-hero">
        <div className="company-hero-overlay"></div>
        <div className="company-hero-content">
          <div className="company-badge">
            <span className="company-badge-dot"></span>
            OUR GAME
            <span className="company-badge-arrow">›</span>
          </div>
          <h1 className="company-hero-title">
            Bringing AI power to solve your biggest functional problems
          </h1>
      </div>
      </section>

      {/* Company Stats Section */}
      <CompanyStats />

      {/* Company Features Dashboard Section */}
      <CompanyFeaturesDashboard />
    </div>
  )
}

export default Company


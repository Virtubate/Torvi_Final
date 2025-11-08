import React from 'react'
import './CompanyFeaturesDashboard.css'

const CompanyFeaturesDashboard = () => {
  return (
    <section id="company-features-dashboard" className="company-features-dashboard-section">
      <div className="company-features-content-wrapper">
        <div className="company-features-header">
          <div className="company-features-label">
            <span className="company-label-dot"></span>
            CORE PROBLEM
          </div>
          <h2 className="company-features-heading">
            Disconnected tools. Fragmented data. Manual connections.
          </h2>
        </div>
        <div className="company-features-text-content">
          <p>
            It's a platform where your tools communicate, your data stays private, and your ideas come to life faster than ever. From content creators and developers to business teams and executives, Torvi is built to give everyone access to the future of intelligent automation a world where your agents do the busy work, and you focus on what truly matters.
          </p>
        </div>
      </div>
    </section>
  )
}

export default CompanyFeaturesDashboard


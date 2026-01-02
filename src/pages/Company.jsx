import React from 'react'
import { Helmet } from 'react-helmet-async'
import CompanyStats from '../components/CompanyStats'
import CompanyFeaturesDashboard from '../components/CompanyFeaturesDashboard'
import CompanyCTA from '../components/CompanyCTA'
import './Company.css'

const Company = () => {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "name": "Company",
    "description": "Bringing AI power to solve your biggest functional problems. Bring your own GPT models or build custom ones with us to transform enterprise automation.",
    "url": "https://torvi.ai/company"
  }

  return (
    <div className="company-page">
      <Helmet>
        <title>Company | Torvi AI</title>
        <meta name="description" content="Bringing AI power to solve your biggest functional problems. Bring your own GPT models or build custom ones with us to transform enterprise automation." />
        <link rel="canonical" href="https://torvi.ai/company" />
        <script type="application/ld+json">
          {JSON.stringify(schemaData)}
        </script>
      </Helmet>
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

      {/* Company CTA Section */}
      <CompanyCTA />
    </div>
  )
}

export default Company


import React from 'react'
import { Helmet } from 'react-helmet-async'
import TermsOfServiceContent from '../components/TermsOfServiceContent'
import './TermsOfService.css'

const TermsOfService = () => {
  return (
    <div className="terms-of-service-page">
      <Helmet>
        <title>Terms of Service | Torvi AI</title>
        <meta name="description" content="Torvi AI Terms of Service - Terms and conditions for using our AI automation platform." />
        <link rel="canonical" href="https://torvi.ai/terms-of-service" />
      </Helmet>
      <TermsOfServiceContent />
    </div>
  )
}

export default TermsOfService

import React from 'react'
import { Helmet } from 'react-helmet-async'
import PrivacyPolicyContent from '../components/PrivacyPolicyContent'
import './PrivacyPolicy.css'

const PrivacyPolicy = () => {
  return (
    <div className="privacy-policy-page">
      <Helmet>
        <title>Privacy Policy | Torvi AI</title>
        <meta name="description" content="Torvi AI Privacy Policy - Learn how we collect, use, and protect your personal information." />
        <link rel="canonical" href="https://torvi.ai/privacy-policy" />
      </Helmet>
      <PrivacyPolicyContent />
    </div>
  )
}

export default PrivacyPolicy

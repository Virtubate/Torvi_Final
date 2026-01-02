import React from 'react'
import { Helmet } from 'react-helmet-async'
import Hero from '../components/Hero'
import Stats from '../components/Stats'
import FeaturesDashboard from '../components/FeaturesDashboard'
import Comparison from '../components/Comparison'
import CTA from '../components/CTA'

const Home = () => {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Torvi AI",
    "url": "https://torvi.ai",
    "logo": "https://torvi.ai/torvi-glyph.svg",
    "description": "Build enterprise AI agents and workflows without code. Bring your own GPTs or build custom models. Connect 275+ applications seamlessly.",
    "sameAs": [
      "https://www.linkedin.com/company/torvi-ai/",
      "https://x.com/TorviAi75410"
    ]
  }

  return (
    <>
      <Helmet>
        <title>Torvi AI: Build AI Agents & Workflows from Prompts</title>
        <meta name="description" content="Build enterprise AI agents and workflows without code. Bring your own GPTs or build custom models. Connect 275+ applications seamlessly." />
        <link rel="canonical" href="https://torvi.ai/" />
        <script type="application/ld+json">
          {JSON.stringify(schemaData)}
        </script>
      </Helmet>
      <Hero />
      <Stats />
      <FeaturesDashboard />
      <Comparison />
      <CTA />
    </>
  )
}

export default Home


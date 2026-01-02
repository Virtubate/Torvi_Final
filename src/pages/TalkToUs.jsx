import React from 'react'
import { Helmet } from 'react-helmet-async'
import ContactForm from '../components/ContactForm'
import './TalkToUs.css'

const TalkToUs = () => {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Talk to Us",
    "description": "Get in touch to solve complex problems and scale your operations. Bring your own GPTs or build custom models with us.",
    "url": "https://torvi.ai/talk-to-us"
  }

  return (
    <div className="talk-to-us-page">
      <Helmet>
        <title>Talk to Us | Torvi AI</title>
        <meta name="description" content="Get in touch to solve complex problems and scale your operations. Bring your own GPTs or build custom models with us." />
        <link rel="canonical" href="https://torvi.ai/talk-to-us" />
        <script type="application/ld+json">
          {JSON.stringify(schemaData)}
        </script>
      </Helmet>
      <ContactForm />
    </div>
  )
}

export default TalkToUs


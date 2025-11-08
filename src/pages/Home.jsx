import React from 'react'
import Hero from '../components/Hero'
import Stats from '../components/Stats'
import FeaturesDashboard from '../components/FeaturesDashboard'
import Comparison from '../components/Comparison'
import CTA from '../components/CTA'

const Home = () => {
  return (
    <>
      <Hero />
      <Stats />
      <FeaturesDashboard />
      <Comparison />
      <CTA />
    </>
  )
}

export default Home


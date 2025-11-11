import React, { useState, useEffect, useRef } from 'react'
import './Stats.css'

const Stats = () => {
  const [count, setCount] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [isVisible])

  useEffect(() => {
    if (isVisible && count < 279) {
      const duration = 4000 // 4 seconds - much slower
      const steps = 80
      const increment = 279 / steps
      const stepDuration = duration / steps

      const timer = setTimeout(() => {
        setCount(prevCount => {
          const nextCount = prevCount + increment
          return nextCount >= 279 ? 279 : Math.floor(nextCount)
        })
      }, stepDuration)

      return () => clearTimeout(timer)
    }
  }, [count, isVisible])

  return (
    <section className="stats-section" ref={sectionRef}>
      {/* Main Content */}
      <div className="stats-content">
        <div className="stats-left">
          <p className="stats-description">
            Solve your most complex operational issues<br/>
            with AI, up and running in two weeks.
          </p>
        </div>

        <div className="stats-right">
          <div className="stat-item">
            <div className="stat-label">PLAYABLE INTEGRATIONS</div>
            <div className="stat-value">{count}+</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Stats


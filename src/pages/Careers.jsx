import React from 'react'
import CTA from '../components/CTA'
import './Careers.css'

const Careers = () => {
  // Job listings data - add new roles here
  const jobListings = [
    {
      title: 'Software Engineer',
      location: 'Remote',
      type: 'Internship',
    },
    {
      title: 'Agent Engineer',
      location: 'Remote',
      type: 'Internship',
    },
    {
      title: 'Workflow Programmer',
      location: 'Remote',
      type: 'Internship',
    },
    {
      title: 'AI/ML Engineer',
      location: 'Remote',
      type: 'Internship',
    },
    {
      title: 'Product Designer',
      location: 'Remote',
      type: 'Internship',
    },
  ]

  return (
    <div className="careers-page">
      {/* Hero Section */}
      <section className="careers-hero">
        <span className="careers-label">CAREERS</span>
        <h1 className="careers-title">
          Let's make enterprise AI<br />practical together
        </h1>
        <p className="careers-tagline">
          Our mission is simply to give every company the power to automate anything, across any application, with just a prompt.
        </p>
        <button className="careers-btn">See open roles</button>
      </section>

      {/* Content Section */}
      <section className="careers-section">
        <div className="careers-values-container">
          <h2 className="careers-values-title">
            What we value<br />and how we act
          </h2>

          <div className="careers-values-grid">
            <div className="careers-value-item">
              <span className="careers-value-number">01</span>
              <h3 className="careers-value-heading">Care deeply about your work</h3>
              <p className="careers-value-description">
                Good products come from careful attention to detail. Whatever your role, set high standards and do work you're proud of. When you care about what you build, it shows.
              </p>
            </div>

            <div className="careers-value-item">
              <span className="careers-value-number">02</span>
              <h3 className="careers-value-heading">Take initiative</h3>
              <p className="careers-value-description">
                If you see something that needs doing, do it. Research, ask questions, figure it out. Everyone here has the ability to make things better and the responsibility to follow through.
              </p>
            </div>

            <div className="careers-value-item">
              <span className="careers-value-number">03</span>
              <h3 className="careers-value-heading">Move thoughtfully, but move</h3>
              <p className="careers-value-description">
                We work quickly because our customers need solutions now. But speed means nothing without trust. We ship fast while building something reliable enough for enterprises to depend on.
              </p>
            </div>

            <div className="careers-value-item">
              <span className="careers-value-number">04</span>
              <h3 className="careers-value-heading">Start with the customer</h3>
              <p className="careers-value-description">
                We're here to give people time back. Listen carefully, respond honestly, and build things that genuinely help. Our success is measured by theirs.
              </p>
            </div>

            <div className="careers-value-item">
              <span className="careers-value-number">05</span>
              <h3 className="careers-value-heading">Build with patience and conviction</h3>
              <p className="careers-value-description">
                AI-powered workflows are new territory. Enterprises are cautious, and understandably so. We're earning trust by being transparent about what works, learning from what doesn't, and proving there's a better way forward.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Join Our Team Section */}
      <section className="careers-jobs-section">
        <h2 className="careers-jobs-title">Join the team</h2>
        <div className="careers-jobs-list">
          {jobListings.map((job, index) => (
            <div className="careers-job-row" key={index}>
              <span className="careers-job-title">{job.title}</span>
              <span className="careers-job-location">{job.location}</span>
              <span className="careers-job-type">{job.type}</span>
              <button className="careers-job-apply">Apply</button>
            </div>
          ))}
        </div>
      </section>

      <CTA
        label="JOIN OUR TEAM"
        title="Ready to build the next-gen<br/>enterprise AI?"
        description="Join the team shaping how enterprises around the world optimize their tool utility effectively and solve complexities with agentic intelligence."
        buttonText="See open roles"
      />
    </div>
  )
}

export default Careers

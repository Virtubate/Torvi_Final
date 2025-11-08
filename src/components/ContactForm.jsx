import React, { useState } from 'react'
import './ContactForm.css'

const ContactForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    role: '',
    businessDescription: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    // Handle form submission here
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <section className="contact-form-section">
      {/* Animated Wave Background */}
      <div className="animated-wave"></div>
      
      {/* Watermark */}
      <div className="contact-watermark">torvi</div>

      <div className="contact-form-container">
        {/* Left Side - Content */}
        <div className="contact-left">
          <div>
            <h1 className="contact-title">
              AI agents for Enterprise<br/>
              Operational Growth
            </h1>
            <p className="contact-description">
              From hyper-growth startups to Fortune 500s, Torvi powers AI interactions at scale.
            </p>
          </div>
          <div className="quote-section">
            <div className="contact-label">
              <span className="contact-dot"></span>
              GET A PERSONALIZED DEMO
            </div>
            <p className="contact-quote">
              Torvi isn't just another automation tool. it's an ecosystem for creating self-operating digital agents that think, learn, and act on your behalf.
            </p>
          </div>
        </div>

        {/* Right Side - Form */}
        <div className="contact-right">
          <form className="contact-form" onSubmit={handleSubmit}>
            {/* Full Name */}
            <div className="form-group">
              <label htmlFor="fullName">Full Name</label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="John Doe"
                required
              />
            </div>

            {/* Email */}
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <div className="input-helper">Work email</div>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="john@gigaml.com"
                required
              />
            </div>

            {/* Phone Number */}
            <div className="form-group">
              <label htmlFor="phone">Phone Number</label>
              <div className="phone-input">
                <select className="country-code">
                  <option value="+1">🇺🇸 +1</option>
                  <option value="+44">🇬🇧 +44</option>
                  <option value="+91">🇮🇳 +91</option>
                </select>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Enter phone number"
                />
              </div>
            </div>

            {/* Role */}
            <div className="form-group">
              <label htmlFor="role">Role</label>
              <input
                type="text"
                id="role"
                name="role"
                value={formData.role}
                onChange={handleChange}
                placeholder="e.g. Chief Technology Officer"
                required
              />
            </div>

            {/* Business Description */}
            <div className="form-group">
              <label htmlFor="businessDescription">
                Briefly tell us about your business and together we will win the market
              </label>
              <textarea
                id="businessDescription"
                name="businessDescription"
                value={formData.businessDescription}
                onChange={handleChange}
                placeholder="Maximum 250 words"
                rows="6"
                maxLength="1500"
                required
              />
            </div>

            {/* Submit Button */}
            <button type="submit" className="submit-btn">
              Submit →
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default ContactForm


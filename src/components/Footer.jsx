import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="footer-container">
        {/* Top Section */}
        <div className="footer-top">
          {/* Logo */}
          <div className="footer-brand">
            <div className="footer-logo">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="10" fill="currentColor"/>
                <path d="M8 12 L12 8 L16 12 L12 16 Z" fill="white"/>
              </svg>
              <span>torvi</span>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="footer-links">
            <div className="footer-column">
              <h4>Product</h4>
              <ul>
                <li><a href="#agent-canvas">Agent Canvas</a></li>
                <li><a href="#workflow-builder">Workflow Builder</a></li>
                <li><a href="#rpa-modeller">RPA Modeller</a></li>
              </ul>
            </div>

            <div className="footer-column">
              <h4>Company</h4>
              <ul>
                <li><a href="#careers">Careers</a></li>
                <li><a href="#contact">Contact</a></li>
                <li><a href="#trust">Trust Center</a></li>
              </ul>
            </div>

            <div className="footer-column">
              <h4>Resources</h4>
              <ul>
                <li><a href="#blog">Blog</a></li>
                <li><a href="#privacy">Privacy Policy</a></li>
                <li><a href="#terms">Terms Of Service</a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Compliance Badges */}
        <div className="footer-compliance">
          <div className="compliance-badge">In Progress</div>
          <div className="compliance-icons">
            <div className="cert-badge">
              <span className="cert-title">SOC2</span>
              <span className="cert-subtitle">TYPE II</span>
            </div>
            <div className="cert-badge">
              <span className="cert-title">ISO</span>
              <span className="cert-subtitle">42001</span>
            </div>
            <div className="cert-badge">
              <span className="cert-title">ISO</span>
              <span className="cert-subtitle">9001</span>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="footer-bottom">
          <div className="footer-copyright">
            © 2025 torvi AI, Inc.
          </div>
          <div className="footer-social">
            <a href="#twitter" aria-label="Twitter">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
            <a href="#linkedin" aria-label="LinkedIn">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer


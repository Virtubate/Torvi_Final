import React from 'react'
import './Header.css'

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <nav className="nav">
          <div className="nav-left">
            <a href="#" className="logo">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2L2 7L12 12L22 7L12 2Z" fill="white"/>
                <path d="M2 17L12 22L22 17" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M2 12L12 17L22 12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span>Torvi</span>
            </a>
            <div className="nav-links">
              <div className="dropdown">
                <button className="dropdown-btn">Product <span className="arrow">›</span></button>
              </div>
              <div className="dropdown">
                <button className="dropdown-btn">Company <span className="arrow">›</span></button>
              </div>
            </div>
          </div>
          <div className="nav-right">
            <a href="#" className="nav-link">Sign in</a>
            <a href="#" className="btn-primary">Talk to us</a>
          </div>
        </nav>
      </div>
    </header>
  )
}

export default Header


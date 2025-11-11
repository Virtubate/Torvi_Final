import React from 'react'
import './CompanyFeaturesDashboard.css'

const CompanyFeaturesDashboard = () => {
  return (
    <section id="company-features-dashboard" className="company-features-dashboard-section">
      <div className="company-features-content-wrapper">
        <div className="company-features-header">
          <div className="company-features-label">
            <span className="company-label-dot"></span>
            CORE PROBLEM
          </div>
          <h2 className="company-features-heading">
            Disconnected tools. Fragmented data. Manual connections.
          </h2>
        </div>
        <div className="company-features-text-content">
          <p>
            It's a platform where your tools communicate, your data stays private, and your ideas come to life faster than ever. From content creators and developers to business teams and executives, Torvi is built to give everyone access to the future of intelligent automation a world where your agents do the busy work, and you focus on what truly matters.
          </p>
        </div>
      </div>

      {/* Founder Cards - Portrait Images */}
      <div className="company-founder-cards-grid">
        <div className="company-founder-card">
          <img 
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=1000&fit=crop" 
            alt="Krishna, The Builder" 
            className="company-founder-image"
          />
          <div className="company-founder-overlay">
            <div className="company-founder-info">
              <h3 className="company-founder-name">Krishna</h3>
              <p className="company-founder-role">The Builder</p>
              <p className="company-founder-description">
                Codes it, ships it, secures it. Krishna owns the entire stack. From the first line of code to production deploy to fortress-level security. If it powers the product, it goes through him.
              </p>
            </div>
          </div>
        </div>

        <div className="company-founder-card">
          <img 
            src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=800&h=1000&fit=crop" 
            alt="Rahul, The Navigator" 
            className="company-founder-image"
          />
          <div className="company-founder-overlay">
            <div className="company-founder-info">
              <h3 className="company-founder-name">Rahul</h3>
              <p className="company-founder-role">The Navigator</p>
              <p className="company-founder-description">
                Charts the course and rallies the crew. Rahul positions the product where it needs to make waves, finds the people who need to hear it, and steers every conversation toward victory. He doesn't just show the way- he gets everyone on board.
              </p>
            </div>
          </div>
        </div>

        <div className="company-founder-card">
          <img 
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=800&h=1000&fit=crop" 
            alt="Ram, The Anchor" 
            className="company-founder-image"
          />
          <div className="company-founder-overlay">
            <div className="company-founder-info">
              <h3 className="company-founder-name">Ram</h3>
              <p className="company-founder-role">The Anchor</p>
              <p className="company-founder-description">
                Keeps the ship steady while everyone else moves fast. Ram handles legal, compliance, and operations-watching the numbers, dotting the i's, and making sure we don't sink while scaling.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* How It Works - Scrolling Cards */}
      <div className="company-how-it-works">
        <div className="company-how-it-works-header">
          <div className="company-how-it-works-label">
            <span className="company-how-label-dot"></span>
            HOW IT WORKS
          </div>
          <h2 className="company-how-it-works-title">
            Continuous feedback,<br/>
            constant improvement
          </h2>
          <p className="company-how-it-works-subtitle">
            Turn every flag into an opportunity to refine your agent.
          </p>
        </div>

        <div className="company-scroll-cards-wrapper">
          <div className="company-scroll-cards">
            <div className="company-scroll-card">
              <h4 className="company-card-title">Go live</h4>
              <p className="company-card-description">Activate your policy with AI-reviewed logic</p>
            </div>

            <div className="company-scroll-card">
              <h4 className="company-card-title">Monitor KPIs</h4>
              <p className="company-card-description">Track performance metrics in real-time</p>
            </div>

            <div className="company-scroll-card">
              <h4 className="company-card-title">Get smart suggestions</h4>
              <p className="company-card-description">Torvi analyzes data and offers improvement areas</p>
            </div>

            <div className="company-scroll-card">
              <h4 className="company-card-title">Human review</h4>
              <p className="company-card-description">Manually QA and approve Copilot suggestions</p>
            </div>

            <div className="company-scroll-card">
              <h4 className="company-card-title">Deploy updates</h4>
              <p className="company-card-description">Launch policy changes to controlled slices</p>
            </div>

            {/* Duplicate cards for seamless loop */}
            <div className="company-scroll-card">
              <h4 className="company-card-title">Go live</h4>
              <p className="company-card-description">Activate your policy with AI-reviewed logic</p>
            </div>

            <div className="company-scroll-card">
              <h4 className="company-card-title">Monitor KPIs</h4>
              <p className="company-card-description">Track performance metrics in real-time</p>
            </div>

            <div className="company-scroll-card">
              <h4 className="company-card-title">Get smart suggestions</h4>
              <p className="company-card-description">Torvi analyzes data and offers improvement areas</p>
            </div>

            <div className="company-scroll-card">
              <h4 className="company-card-title">Human review</h4>
              <p className="company-card-description">Manually QA and approve Copilot suggestions</p>
            </div>

            <div className="company-scroll-card">
              <h4 className="company-card-title">Deploy updates</h4>
              <p className="company-card-description">Launch policy changes to controlled slices</p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Card */}
      <div className="company-features-cta-card">
        <div className="company-features-cta-label">
          <span className="company-features-cta-dot"></span>
          GET A PERSONALIZED DEMO
        </div>
        <h3 className="company-features-cta-title">
          Ready to see Torvi<br/>
          in action?
        </h3>
        <p className="company-features-cta-description">
          Optimize your operation with powerful AI.
        </p>
        <button className="company-features-cta-button">Talk to us</button>
      </div>
    </section>
  )
}

export default CompanyFeaturesDashboard


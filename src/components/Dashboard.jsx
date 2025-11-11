import React, { useState } from 'react'
import './Dashboard.css'

const Dashboard = ({ variant = 'default' }) => {
  const [activeSection, setActiveSection] = useState(variant === 'insights' ? 'create-agent' : 'agent-canvas')
  const [animatingDivider, setAnimatingDivider] = useState(null)

  const handleSectionClick = (section) => {
    setActiveSection(section)
    setAnimatingDivider(section)
    setTimeout(() => setAnimatingDivider(null), 2000)
  }

  const defaultSections = {
    'agent-canvas': {
      title: 'Agent Canvas',
      subtitle: 'The fastest way to build, govern, and scale enterprise AI agents.',
      buttonText: 'Explore Agent Canvas',
      icon: (
        <svg className="grid-icon" width="24" height="24" viewBox="0 0 24 24" fill="none">
          <rect x="3" y="3" width="7" height="7" fill="white"/>
          <rect x="14" y="3" width="7" height="7" fill="white"/>
          <rect x="3" y="14" width="7" height="7" fill="white"/>
          <rect x="14" y="14" width="7" height="7" fill="white"/>
        </svg>
      ),
      bgImage: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=2070&auto=format&fit=crop'
    },
    'workflow-builder': {
      title: 'Workflow Builder',
      subtitle: 'Build powerful automations with drag-and-drop logic. Connect AI agents, tools, and APIs to handle complex tasks end-to-end.',
      buttonText: 'Explore Builder',
      icon: (
        <svg className="grid-icon" width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M12 2L2 7L12 12L22 7L12 2Z" fill="white"/>
          <path d="M2 17L12 22L22 17M2 12L12 17L22 12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      bgImage: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=2070&auto=format&fit=crop'
    },
    'rpa-modeller': {
      title: 'RPA Modeller',
      subtitle: 'Automate repetitive processes without coding. Bridge legacy systems and modern AI with visual process mapping.',
      buttonText: 'Explore Modeller',
      icon: (
        <svg className="grid-icon" width="24" height="24" viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="3" fill="white"/>
          <circle cx="6" cy="6" r="2" fill="white"/>
          <circle cx="18" cy="6" r="2" fill="white"/>
          <circle cx="6" cy="18" r="2" fill="white"/>
          <circle cx="18" cy="18" r="2" fill="white"/>
          <line x1="8" y1="7" x2="10" y2="10" stroke="white" strokeWidth="1.5"/>
          <line x1="16" y1="7" x2="14" y2="10" stroke="white" strokeWidth="1.5"/>
          <line x1="8" y1="17" x2="10" y2="14" stroke="white" strokeWidth="1.5"/>
          <line x1="16" y1="17" x2="14" y2="14" stroke="white" strokeWidth="1.5"/>
        </svg>
      ),
      bgImage: 'https://images.unsplash.com/photo-1454496522488-7a8e488e8606?q=80&w=2076&auto=format&fit=crop'
    }
  }

  const insightsSections = {
    'create-agent': {
      title: 'Create Agent/ Workflow/ RPA Flow',
      subtitle: 'Ground agents in your brand standards, compliance rules, and workflows so every interaction is consistent and on-policy.',
      bgImage: 'https://images.unsplash.com/photo-1454496522488-7a8e488e8606?q=80&w=2076&auto=format&fit=crop'
    },
    'define-policies': {
      title: 'Define Expectations & Policies',
      subtitle: 'Set clear guardrails in plain language. Decide what should be automated, when to escalate, and how to manage sensitive cases.',
      bgImage: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=2070&auto=format&fit=crop'
    },
    'design-logic': {
      title: 'Design the logic',
      subtitle: 'Map conversation flows and escalation paths. Extend capabilities through APIs and custom code to connect seamlessly with your systems.',
      bgImage: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=2070&auto=format&fit=crop'
    },
    'test-launch': {
      title: 'Test and Launch',
      subtitle: 'Validate performance, run regression tests, A/B experiments, and deploy safely with instant rollback.',
      bgImage: 'https://images.unsplash.com/photo-1454496522488-7a8e488e8606?q=80&w=2076&auto=format&fit=crop'
    },
    'monitor-improve': {
      title: 'Monitor and Improve',
      subtitle: 'Review outputs, operations and confirm improvements before release.',
      bgImage: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=2070&auto=format&fit=crop'
    }
  }

  const sections = variant === 'insights' ? insightsSections : defaultSections

  // Render insights variant (swapped layout)
  if (variant === 'insights') {
    return (
      <section className="dashboard-section">
        <div className="dashboard-container">
          {/* Left Main Area (70%) - Create Insight Modal */}
          <div className="dashboard-main dashboard-main-left">
            <div 
              className="dashboard-background"
              style={{ backgroundImage: `url('${sections[activeSection].bgImage}')` }}
            >
              {/* Overlay removed - background image only */}
            </div>
          </div>

          {/* Right Sidebar (30%) - Accordion Options */}
          <div className="dashboard-sidebar dashboard-sidebar-right">
            {activeSection === 'create-agent' ? (
              <>
                {/* Active: Create Agent at top */}
                <div className="sidebar-section-simple active" onClick={() => handleSectionClick('create-agent')}>
                  <h3 className="option-title-simple">{sections['create-agent'].title}</h3>
                  <div className="section-content-simple">
                    <p className="option-subtitle-simple">{sections['create-agent'].subtitle}</p>
                  </div>
                </div>
                
                {/* Collapsed sections at bottom */}
                <div className="collapsed-group-simple">
                  <div className="sidebar-divider-static"></div>
                  <div className="sidebar-section-simple collapsed" onClick={() => handleSectionClick('define-policies')}>
                    <h3 className="option-title-simple">{sections['define-policies'].title}</h3>
                  </div>
                  
                  <div className="sidebar-divider-static"></div>
                  <div className="sidebar-section-simple collapsed" onClick={() => handleSectionClick('design-logic')}>
                    <h3 className="option-title-simple">{sections['design-logic'].title}</h3>
                  </div>
                  
                  <div className="sidebar-divider-static"></div>
                  <div className="sidebar-section-simple collapsed" onClick={() => handleSectionClick('test-launch')}>
                    <h3 className="option-title-simple">{sections['test-launch'].title}</h3>
                  </div>
                  
                  <div className="sidebar-divider-static"></div>
                  <div className="sidebar-section-simple collapsed" onClick={() => handleSectionClick('monitor-improve')}>
                    <h3 className="option-title-simple">{sections['monitor-improve'].title}</h3>
                  </div>
                </div>
              </>
            ) : activeSection === 'define-policies' ? (
              <>
                {/* Collapsed at top */}
                <div className="sidebar-section-simple collapsed" onClick={() => handleSectionClick('create-agent')}>
                  <h3 className="option-title-simple">{sections['create-agent'].title}</h3>
                </div>
                
                <div className="sidebar-divider-static"></div>
                
                {/* Active: Define Policies */}
                <div className="sidebar-section-simple active" onClick={() => handleSectionClick('define-policies')}>
                  <h3 className="option-title-simple">{sections['define-policies'].title}</h3>
                  <div className="section-content-simple">
                    <p className="option-subtitle-simple">{sections['define-policies'].subtitle}</p>
                  </div>
                </div>
                
                {/* Collapsed at bottom */}
                <div className="collapsed-group-simple">
                  <div className="sidebar-divider-static"></div>
                  <div className="sidebar-section-simple collapsed" onClick={() => handleSectionClick('design-logic')}>
                    <h3 className="option-title-simple">{sections['design-logic'].title}</h3>
                  </div>
                  
                  <div className="sidebar-divider-static"></div>
                  <div className="sidebar-section-simple collapsed" onClick={() => handleSectionClick('test-launch')}>
                    <h3 className="option-title-simple">{sections['test-launch'].title}</h3>
                  </div>
                  
                  <div className="sidebar-divider-static"></div>
                  <div className="sidebar-section-simple collapsed" onClick={() => handleSectionClick('monitor-improve')}>
                    <h3 className="option-title-simple">{sections['monitor-improve'].title}</h3>
                  </div>
                </div>
              </>
            ) : activeSection === 'design-logic' ? (
              <>
                {/* Collapsed at top */}
                <div className="collapsed-group-simple">
                  <div className="sidebar-section-simple collapsed" onClick={() => handleSectionClick('create-agent')}>
                    <h3 className="option-title-simple">{sections['create-agent'].title}</h3>
                  </div>
                  
                  <div className="sidebar-divider-static"></div>
                  <div className="sidebar-section-simple collapsed" onClick={() => handleSectionClick('define-policies')}>
                    <h3 className="option-title-simple">{sections['define-policies'].title}</h3>
                  </div>
                </div>
                
                <div className="sidebar-divider-static"></div>
                
                {/* Active: Design Logic */}
                <div className="sidebar-section-simple active" onClick={() => handleSectionClick('design-logic')}>
                  <h3 className="option-title-simple">{sections['design-logic'].title}</h3>
                  <div className="section-content-simple">
                    <p className="option-subtitle-simple">{sections['design-logic'].subtitle}</p>
                  </div>
                </div>
                
                {/* Collapsed at bottom */}
                <div className="collapsed-group-simple">
                  <div className="sidebar-divider-static"></div>
                  <div className="sidebar-section-simple collapsed" onClick={() => handleSectionClick('test-launch')}>
                    <h3 className="option-title-simple">{sections['test-launch'].title}</h3>
                  </div>
                  
                  <div className="sidebar-divider-static"></div>
                  <div className="sidebar-section-simple collapsed" onClick={() => handleSectionClick('monitor-improve')}>
                    <h3 className="option-title-simple">{sections['monitor-improve'].title}</h3>
                  </div>
                </div>
              </>
            ) : activeSection === 'test-launch' ? (
              <>
                {/* Collapsed at top */}
                <div className="collapsed-group-simple">
                  <div className="sidebar-section-simple collapsed" onClick={() => handleSectionClick('create-agent')}>
                    <h3 className="option-title-simple">{sections['create-agent'].title}</h3>
                  </div>
                  
                  <div className="sidebar-divider-static"></div>
                  <div className="sidebar-section-simple collapsed" onClick={() => handleSectionClick('define-policies')}>
                    <h3 className="option-title-simple">{sections['define-policies'].title}</h3>
                  </div>
                  
                  <div className="sidebar-divider-static"></div>
                  <div className="sidebar-section-simple collapsed" onClick={() => handleSectionClick('design-logic')}>
                    <h3 className="option-title-simple">{sections['design-logic'].title}</h3>
                  </div>
                </div>
                
                <div className="sidebar-divider-static"></div>
                
                {/* Active: Test and Launch */}
                <div className="sidebar-section-simple active" onClick={() => handleSectionClick('test-launch')}>
                  <h3 className="option-title-simple">{sections['test-launch'].title}</h3>
                  <div className="section-content-simple">
                    <p className="option-subtitle-simple">{sections['test-launch'].subtitle}</p>
                  </div>
                </div>
                
                {/* Collapsed at bottom */}
                <div className="collapsed-group-simple">
                  <div className="sidebar-divider-static"></div>
                  <div className="sidebar-section-simple collapsed" onClick={() => handleSectionClick('monitor-improve')}>
                    <h3 className="option-title-simple">{sections['monitor-improve'].title}</h3>
                  </div>
                </div>
              </>
            ) : (
              <>
                {/* Collapsed at top */}
                <div className="collapsed-group-simple">
                  <div className="sidebar-section-simple collapsed" onClick={() => handleSectionClick('create-agent')}>
                    <h3 className="option-title-simple">{sections['create-agent'].title}</h3>
                  </div>
                  
                  <div className="sidebar-divider-static"></div>
                  <div className="sidebar-section-simple collapsed" onClick={() => handleSectionClick('define-policies')}>
                    <h3 className="option-title-simple">{sections['define-policies'].title}</h3>
                  </div>
                  
                  <div className="sidebar-divider-static"></div>
                  <div className="sidebar-section-simple collapsed" onClick={() => handleSectionClick('design-logic')}>
                    <h3 className="option-title-simple">{sections['design-logic'].title}</h3>
                  </div>
                  
                  <div className="sidebar-divider-static"></div>
                  <div className="sidebar-section-simple collapsed" onClick={() => handleSectionClick('test-launch')}>
                    <h3 className="option-title-simple">{sections['test-launch'].title}</h3>
                  </div>
                </div>
                
                <div className="sidebar-divider-static"></div>
                
                {/* Active: Monitor and Improve at bottom */}
                <div className="sidebar-section-simple active" onClick={() => handleSectionClick('monitor-improve')}>
                  <h3 className="option-title-simple">{sections['monitor-improve'].title}</h3>
                  <div className="section-content-simple">
                    <p className="option-subtitle-simple">{sections['monitor-improve'].subtitle}</p>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </section>
    )
  }

  // Default variant (sidebar left, main content right)
  return (
    <section className="dashboard-section">
      <div className="dashboard-container">
        {/* Left Sidebar */}
        <div className="dashboard-sidebar">
          {/* Top Section(s) - Active or closed sections that should be at top */}
          {activeSection === 'agent-canvas' ? (
            <>
              {/* Agent Canvas - Active at top */}
              <div className="sidebar-section active" onClick={() => handleSectionClick('agent-canvas')}>
                <div className="canvas-title">
                  {sections['agent-canvas'].icon}
                  <h2 className="gradient-agent">{sections['agent-canvas'].title}</h2>
                </div>
                <div className="section-content">
                  <p className="canvas-subtitle">{sections['agent-canvas'].subtitle}</p>
                  <button className="explore-btn">{sections['agent-canvas'].buttonText}</button>
                </div>
              </div>
              
              {/* Collapsed sections at bottom */}
              <div className="collapsed-group">
                <div className={`sidebar-divider ${animatingDivider === 'workflow-builder' ? 'active' : ''}`}></div>
                <div className="sidebar-section collapsed" onClick={() => handleSectionClick('workflow-builder')}>
                  <div className="canvas-title">
                    {sections['workflow-builder'].icon}
                    <h2>{sections['workflow-builder'].title}</h2>
                  </div>
                </div>
                
                <div className={`sidebar-divider ${animatingDivider === 'rpa-modeller' ? 'active' : ''}`}></div>
                <div className="sidebar-section collapsed" onClick={() => handleSectionClick('rpa-modeller')}>
                  <div className="canvas-title">
                    {sections['rpa-modeller'].icon}
                    <h2>{sections['rpa-modeller'].title}</h2>
                  </div>
                </div>
              </div>
            </>
          ) : activeSection === 'workflow-builder' ? (
            <>
              {/* Agent Canvas collapsed at top */}
              <div className="sidebar-section collapsed" onClick={() => handleSectionClick('agent-canvas')}>
                <div className="canvas-title">
                  {sections['agent-canvas'].icon}
                  <h2>{sections['agent-canvas'].title}</h2>
                </div>
              </div>
              
              {/* Divider between Agent Canvas and Workflow Builder */}
              <div className={`sidebar-divider ${animatingDivider === 'workflow-builder' ? 'active' : ''}`}></div>
              
              {/* Workflow Builder - Active in middle */}
              <div className="sidebar-section active" onClick={() => handleSectionClick('workflow-builder')}>
                <div className="canvas-title">
                  {sections['workflow-builder'].icon}
                  <h2 className="gradient-workflow">{sections['workflow-builder'].title}</h2>
                </div>
                <div className="section-content">
                  <p className="canvas-subtitle">{sections['workflow-builder'].subtitle}</p>
                  <button className="explore-btn">{sections['workflow-builder'].buttonText}</button>
                </div>
              </div>
              
              {/* Bottom group with divider before RPA Modeller */}
              <div className="collapsed-group">
                {/* Divider right above RPA Modeller */}
                <div className={`sidebar-divider ${animatingDivider === 'rpa-modeller' ? 'active' : ''}`}></div>
                
                {/* RPA Modeller collapsed at bottom */}
                <div className="sidebar-section collapsed" onClick={() => handleSectionClick('rpa-modeller')}>
                  <div className="canvas-title">
                    {sections['rpa-modeller'].icon}
                    <h2>{sections['rpa-modeller'].title}</h2>
                  </div>
                </div>
              </div>
            </>
          ) : (
            <>
              {/* Collapsed sections at top */}
              <div className="collapsed-group">
                <div className="sidebar-section collapsed" onClick={() => handleSectionClick('agent-canvas')}>
                  <div className="canvas-title">
                    {sections['agent-canvas'].icon}
                    <h2>{sections['agent-canvas'].title}</h2>
                  </div>
                </div>
                
                {/* Divider between Agent Canvas and Workflow Builder */}
                <div className={`sidebar-divider ${animatingDivider === 'workflow-builder' ? 'active' : ''}`}></div>
                
                <div className="sidebar-section collapsed" onClick={() => handleSectionClick('workflow-builder')}>
                  <div className="canvas-title">
                    {sections['workflow-builder'].icon}
                    <h2>{sections['workflow-builder'].title}</h2>
                  </div>
                </div>
              </div>
              
              {/* Divider between Workflow Builder and RPA Modeller */}
              <div className={`sidebar-divider ${animatingDivider === 'rpa-modeller' ? 'active' : ''}`}></div>
              
              {/* RPA Modeller - Active at bottom */}
              <div className="sidebar-section active" onClick={() => handleSectionClick('rpa-modeller')}>
                <div className="canvas-title">
                  {sections['rpa-modeller'].icon}
                  <h2 className="gradient-rpa">{sections['rpa-modeller'].title}</h2>
                </div>
                <div className="section-content">
                  <p className="canvas-subtitle">{sections['rpa-modeller'].subtitle}</p>
                  <button className="explore-btn">{sections['rpa-modeller'].buttonText}</button>
                </div>
              </div>
            </>
          )}
        </div>

        {/* Right Main Area */}
        <div className="dashboard-main">
          <div 
            className="dashboard-background"
            style={{ backgroundImage: `url('${sections[activeSection].bgImage}')` }}
          >
            {/* Overlay removed - background image only */}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Dashboard


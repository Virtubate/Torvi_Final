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
      bgImage: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=2070&auto=format&fit=crop',
      showOverlay: true
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
      bgImage: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=2070&auto=format&fit=crop',
      showWorkflowOverlay: true
    },
    'rpa-modeller': {
      title: 'Orbix SuperChat',
      subtitle: 'A single chat that connects to all your applications. Just describe what you want done, and Superchat orchestrates it across every tool — no building required.',
      buttonText: 'Explore SuperChat',
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
      bgImage: 'https://images.unsplash.com/photo-1454496522488-7a8e488e8606?q=80&w=2076&auto=format&fit=crop',
      showSuperChatOverlay: true
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
            {/* Agent Canvas UI Overlay */}
            {sections[activeSection].showOverlay && (
              <div className="agent-canvas-overlay">
                <div className="agent-config-panel">
                  {/* Top Navigation */}
                  <div className="config-topbar">
                    <div className="config-tabs">
                      <button className="config-tab active">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                          <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2"/>
                          <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" stroke="currentColor" strokeWidth="2"/>
                        </svg>
                        Configure
                      </button>
                      <button className="config-tab">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                          <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        Activity
                      </button>
                    </div>
                    <div className="config-actions">
                      <div className="toggle-switch active"></div>
                      <button className="btn-share">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                          <circle cx="18" cy="5" r="3" stroke="currentColor" strokeWidth="2"/>
                          <circle cx="6" cy="12" r="3" stroke="currentColor" strokeWidth="2"/>
                          <circle cx="18" cy="19" r="3" stroke="currentColor" strokeWidth="2"/>
                          <path d="M8.59 13.51l6.83 3.98M15.41 6.51l-6.82 3.98" stroke="currentColor" strokeWidth="2"/>
                        </svg>
                        Share
                      </button>
                    </div>
                  </div>

                  {/* Glassmorphism Content Wrapper */}
                  <div className="config-sections-wrapper">
                    {/* Triggers Section */}
                    <div className="config-section">
                      <div className="section-header">
                        <span className="section-title">Triggers:</span>
                        <button className="btn-add">+ Add Triggers</button>
                      </div>
                      <div className="config-chips">
                        <span className="config-chip">
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                            <path d="M5 3l14 9-14 9V3z" fill="currentColor"/>
                          </svg>
                          On demand
                        </span>
                        <span className="config-chip">
                          <img src="https://cdn.worldvectorlogo.com/logos/slack-new-logo.svg" alt="Slack" className="chip-logo" />
                          Slack
                          <span className="chip-close">×</span>
                        </span>
                        <span className="config-chip">
                          <img src="https://www.gstatic.com/images/branding/product/1x/sheets_2020q4_32dp.png" alt="Google Sheets" className="chip-logo" />
                          Google Sheets
                          <span className="chip-close">×</span>
                        </span>
                      </div>
                    </div>

                    {/* Model Section */}
                    <div className="config-section">
                      <div className="section-header">
                        <span className="section-title">Model:</span>
                      </div>
                      <div className="model-grid">
                        <div className="model-field">
                          <label>LLM</label>
                          <div className="select-field">
                            <img src="https://www.gstatic.com/lamda/images/gemini_sparkle_v002_d4735304ff6292a690345.svg" alt="Gemini" className="select-logo" />
                            Google Gemini
                            <span className="select-arrow">▾</span>
                          </div>
                        </div>
                        <div className="model-field">
                          <label>CREDENTIALS</label>
                          <div className="select-field">
                            Google Gemini Account 1
                            <span className="select-arrow">▾</span>
                          </div>
                        </div>
                        <div className="model-field">
                          <label>MODEL</label>
                          <div className="select-field">
                            Gemini 2.5 Flash
                            <span className="select-arrow">▾</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Instructions Section */}
                    <div className="config-section">
                      <div className="section-header">
                        <span className="section-title">Instructions to follow:</span>
                        <button className="btn-expand">
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                            <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                          Expand
                        </button>
                      </div>
                      <div className="instructions-box">
                        <p>When a message related to a customer is asked on the slack channel or when a new customer is added to the Google Sheets, pull relevant information from the tools given below do the needful tasks...</p>
                      </div>
                      <span className="instructions-hint">Use <kbd>/</kbd> to add tools & knowledge sources</span>
                    </div>

                    {/* Tools Section */}
                    <div className="config-section">
                      <div className="section-header">
                        <span className="section-title">Tools this agent can use:</span>
                        <button className="btn-add">+ Add Tools</button>
                      </div>
                      <div className="config-chips">
                        <span className="config-chip">
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                            <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" stroke="currentColor" strokeWidth="2"/>
                          </svg>
                          Default Tools: Visit Site & Web Search
                        </span>
                        <span className="config-chip chip-salesforce">
                          <img src="https://upload.wikimedia.org/wikipedia/commons/f/f9/Salesforce.com_logo.svg" alt="Salesforce" className="chip-logo" />
                          Salesforce
                          <span className="chip-close">×</span>
                        </span>
                        <span className="config-chip chip-hubspot">
                          <img src="https://www.hubspot.com/hubfs/HubSpot_Logos/HubSpot-Inversed-Favicon.png" alt="HubSpot" className="chip-logo" />
                          HubSpot
                          <span className="chip-close">×</span>
                        </span>
                      </div>
                    </div>

                    {/* Knowledge Sources Section */}
                    <div className="config-section">
                      <div className="section-header">
                        <span className="section-title">Knowledge sources:</span>
                        <button className="btn-add">+ Add Knowledge Sources</button>
                      </div>
                    </div>
                  </div>

                  {/* Bottom Actions */}
                  <div className="config-bottom">
                    <button className="btn-copilot">
                      <span className="copilot-icon">✦</span>
                      Copilot
                    </button>
                    <button className="btn-preview">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                        <path d="M5 3l14 9-14 9V3z" fill="currentColor"/>
                      </svg>
                      Preview
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* Workflow Builder UI Overlay */}
            {sections[activeSection].showWorkflowOverlay && (
              <div className="agent-canvas-overlay">
                <div className="workflow-builder-panel">
                  {/* Top Navigation */}
                  <div className="workflow-topbar">
                    <div className="workflow-title">
                      <button className="btn-back">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                          <path d="M19 12H5M12 19l-7-7 7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </button>
                      <span>Invoice & Opportunity Management</span>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                        <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <div className="workflow-actions">
                      <div className="toggle-switch active"></div>
                      <button className="btn-clear">Clear</button>
                      <button className="btn-save">Save</button>
                    </div>
                  </div>

                  {/* Main Content Area */}
                  <div className="workflow-content">
                    {/* Left Sidebar - Add Node */}
                    <div className="workflow-sidebar">
                      <h3>Add Node</h3>
                      <input type="text" placeholder="Search Modules..." className="workflow-search" />

                      {/* Triggers Section */}
                      <div className="node-category">
                        <div className="category-header">
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                            <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                          <span>Triggers</span>
                        </div>
                        <div className="category-items">
                          <div className="node-item">
                            <span className="node-icon schedule">
                              <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                                <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                                <path d="M12 6v6l4 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                              </svg>
                            </span>
                            <div className="node-info">
                              <span className="node-name">Schedule Trigger</span>
                              <span className="node-desc">Triggers at scheduled times</span>
                            </div>
                          </div>
                          <div className="node-item">
                            <span className="node-icon chat">
                              <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" stroke="currentColor" strokeWidth="2"/>
                              </svg>
                            </span>
                            <div className="node-info">
                              <span className="node-name">Text Chat Trigger</span>
                              <span className="node-desc">Trigger from any chat</span>
                            </div>
                          </div>
                          <div className="node-item">
                            <span className="node-icon manual">
                              <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                                <path d="M5 3l14 9-14 9V3z" fill="currentColor"/>
                              </svg>
                            </span>
                            <div className="node-info">
                              <span className="node-name">Manual Trigger</span>
                              <span className="node-desc">Trigger manually</span>
                            </div>
                          </div>
                          <div className="node-item">
                            <span className="node-icon slack">
                              <img src="https://cdn.worldvectorlogo.com/logos/slack-new-logo.svg" alt="Slack" className="node-logo" />
                            </span>
                            <div className="node-info">
                              <span className="node-name">Slack Trigger</span>
                              <span className="node-desc">Trigger from Slack events</span>
                            </div>
                          </div>
                          <div className="node-item">
                            <span className="node-icon sheets">
                              <img src="https://www.gstatic.com/images/branding/product/1x/sheets_2020q4_32dp.png" alt="Google Sheets" className="node-logo" />
                            </span>
                            <div className="node-info">
                              <span className="node-name">Google Sheets Trigger</span>
                              <span className="node-desc">Trigger on sheet changes</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Actions Section */}
                      <div className="node-category">
                        <div className="category-header">
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                            <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                          <span>Actions</span>
                        </div>
                      </div>

                      {/* Assistants Section */}
                      <div className="node-category">
                        <div className="category-header">
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                            <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                          <span>Assistants</span>
                        </div>
                      </div>
                    </div>

                    {/* Canvas Area */}
                    <div className="workflow-canvas">
                      <div className="wf-canvas-inner">
                        {/* Connection Lines SVG */}
                        <svg className="wf-lines-svg" width="100%" height="100%">
                          <defs>
                            <linearGradient id="flowGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                              <stop offset="0%" stopColor="#38bdf8" stopOpacity="1"/>
                              <stop offset="100%" stopColor="#a78bfa" stopOpacity="1"/>
                            </linearGradient>
                          </defs>

                          {/* Webhook → HTTP Request */}
                          <path d="M 102 138 C 140 138, 140 118, 178 118" className="wf-line"/>

                          {/* HTTP Request → Condition */}
                          <path d="M 296 118 C 340 118, 340 138, 384 138" className="wf-line"/>

                          {/* Condition → Salesforce */}
                          <path d="M 482 138 C 520 138, 520 118, 558 118" className="wf-line"/>

                          {/* Condition → Google Sheets (branch down-left) */}
                          <path d="M 433 161 C 433 195, 200 195, 200 230" className="wf-line"/>

                          {/* Condition → HubSpot (branch down-right) */}
                          <path d="M 433 161 C 433 195, 480 195, 480 230" className="wf-line"/>
                        </svg>

                        {/* Workflow Nodes */}
                        <div className="wf-node" style={{left: '20px', top: '115px'}}>
                          <div className="wf-node-content">
                            <span className="wf-icon-wrapper wf-webhook">
                              <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                                <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                                <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" stroke="currentColor" strokeWidth="2"/>
                              </svg>
                            </span>
                            <span className="wf-label">Webhook</span>
                            <span className="wf-connector-dot right"></span>
                          </div>
                        </div>

                        <div className="wf-node" style={{left: '178px', top: '95px'}}>
                          <div className="wf-node-content">
                            <span className="wf-connector-dot left"></span>
                            <span className="wf-icon-wrapper wf-http">
                              <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                                <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" fill="currentColor"/>
                              </svg>
                            </span>
                            <span className="wf-label">HTTP Request</span>
                            <span className="wf-connector-dot right"></span>
                          </div>
                        </div>

                        <div className="wf-node" style={{left: '384px', top: '115px'}}>
                          <div className="wf-node-content">
                            <span className="wf-connector-dot left"></span>
                            <span className="wf-icon-wrapper wf-condition">
                              <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                                <path d="M12 2L2 12l10 10 10-10L12 2z" stroke="currentColor" strokeWidth="2"/>
                              </svg>
                            </span>
                            <span className="wf-label">Condition</span>
                            <span className="wf-connector-dot right"></span>
                            <span className="wf-connector-dot bottom"></span>
                          </div>
                        </div>

                        <div className="wf-node" style={{left: '558px', top: '95px'}}>
                          <div className="wf-node-content">
                            <span className="wf-connector-dot left"></span>
                            <span className="wf-icon-wrapper wf-salesforce">
                              <img src="https://upload.wikimedia.org/wikipedia/commons/f/f9/Salesforce.com_logo.svg" alt="Salesforce" className="wf-logo" />
                            </span>
                            <span className="wf-label">Salesforce</span>
                          </div>
                        </div>

                        <div className="wf-node" style={{left: '120px', top: '230px'}}>
                          <div className="wf-node-content">
                            <span className="wf-connector-dot top"></span>
                            <span className="wf-icon-wrapper wf-sheets">
                              <img src="https://www.gstatic.com/images/branding/product/1x/sheets_2020q4_32dp.png" alt="Google Sheets" className="wf-logo" />
                            </span>
                            <span className="wf-label">Google Sheets</span>
                          </div>
                        </div>

                        <div className="wf-node" style={{left: '400px', top: '230px'}}>
                          <div className="wf-node-content">
                            <span className="wf-connector-dot top"></span>
                            <span className="wf-icon-wrapper wf-hubspot">
                              <img src="https://www.hubspot.com/hubfs/HubSpot_Logos/HubSpot-Inversed-Favicon.png" alt="HubSpot" className="wf-logo" />
                            </span>
                            <span className="wf-label">HubSpot</span>
                          </div>
                        </div>
                      </div>

                      {/* Zoom Controls */}
                      <div className="canvas-zoom">
                        <button className="zoom-btn">−</button>
                        <span>100%</span>
                        <button className="zoom-btn">+</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* SuperChat UI Overlay */}
            {sections[activeSection].showSuperChatOverlay && (
              <div className="agent-canvas-overlay">
                <div className="superchat-panel">
                  {/* Left Sidebar Navigation */}
                  <div className="superchat-sidebar">
                    <div className="sidebar-top">
                      <div className="superchat-logo">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                          <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" fill="white"/>
                        </svg>
                        <span className="logo-text">torvi</span>
                      </div>
                    </div>

                    <nav className="superchat-nav">
                      <a href="#" className="nav-link new-chat">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                          <path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                        </svg>
                        New Chat
                      </a>
                      <a href="#" className="nav-link">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                          <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                        </svg>
                        Chats
                      </a>
                      <a href="#" className="nav-link">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                          <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" stroke="currentColor" strokeWidth="2"/>
                        </svg>
                        Projects
                      </a>
                      <a href="#" className="nav-link">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                          <circle cx="6" cy="6" r="2" stroke="currentColor" strokeWidth="2"/>
                          <circle cx="18" cy="18" r="2" stroke="currentColor" strokeWidth="2"/>
                          <path d="M6 8v8c0 2 2 4 4 4h4" stroke="currentColor" strokeWidth="2"/>
                        </svg>
                        Workflow Builder
                      </a>
                      <a href="#" className="nav-link">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                          <rect x="3" y="3" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="2"/>
                          <rect x="14" y="3" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="2"/>
                          <rect x="3" y="14" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="2"/>
                          <rect x="14" y="14" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="2"/>
                        </svg>
                        Agent Canvas
                      </a>
                      <a href="#" className="nav-link">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                          <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2"/>
                          <path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                        </svg>
                        Connectors
                      </a>
                      <a href="#" className="nav-link">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                          <rect x="2" y="3" width="20" height="14" rx="2" stroke="currentColor" strokeWidth="2"/>
                          <path d="M8 21h8M12 17v4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                        </svg>
                        Marketplace
                      </a>
                      <a href="#" className="nav-link">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" stroke="currentColor" strokeWidth="2"/>
                          <path d="M14 2v6h6M16 13H8M16 17H8" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                        </svg>
                        Audits
                      </a>
                    </nav>

                    <div className="superchat-user">
                      <div className="user-avatar">TA</div>
                      <span className="user-name">Test Account</span>
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                        <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                      </svg>
                    </div>
                  </div>

                  {/* Main Chat Area */}
                  <div className="superchat-main">
                    <div className="chat-header">
                      <h3>Scheduling a Roadmap Follow-up Meeting</h3>
                    </div>

                    <div className="chat-messages">
                      <div className="chat-message assistant">
                        <p>I will proceed with scheduling a meeting for next Friday at 7 PM titled "Discussion on Roadmap and Files" and invite the team. The tasks have been completed successfully:</p>
                        <ul>
                          <li><strong>Email:</strong> The list of files from your Google Drive has been sent to the team along with details about the meeting.</li>
                          <li><strong>Meeting:</strong> A meeting titled "Discussion on Roadmap and Files" is scheduled for next Friday at 7 PM.</li>
                          <li><strong>Google Meet Link:</strong> <a href="#">https://meet.google.com/yps-aije-ofe</a></li>
                        </ul>
                        <p className="chat-followup">If you need anything else, just let me know!</p>
                      </div>

                      <div className="chat-message user">
                        <p>delete all my events in my calendar for next 3 days</p>
                      </div>

                      <div className="chat-message assistant">
                        <p>All events in your calendar for the next three days have been successfully deleted. If there's anything else you need, just let me know!</p>
                      </div>
                    </div>

                    <div className="chat-input-area">
                      <div className="connected-apps">
                        <div className="app-logo-circle">
                          <img src="https://www.gstatic.com/images/branding/product/1x/gmail_2020q4_32dp.png" alt="Gmail" className="app-logo-img" />
                        </div>
                        <div className="app-logo-circle">
                          <img src="https://www.gstatic.com/images/branding/product/1x/drive_2020q4_32dp.png" alt="Drive" className="app-logo-img" />
                        </div>
                        <div className="app-logo-circle">
                          <img src="https://www.gstatic.com/images/branding/product/1x/calendar_2020q4_32dp.png" alt="Calendar" className="app-logo-img" />
                        </div>
                        <button className="apps-btn">Apps</button>
                      </div>
                      <div className="chat-input-wrapper">
                        <input type="text" placeholder="Message..." className="chat-input" />
                        <button className="send-btn">
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                            <path d="M12 19V5M5 12l7-7 7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Execution Visualizer Panel */}
                  <div className="flow-visualizer">
                    <div className="visualizer-header">
                      <span className="visualizer-title-text">Execution Visualizer</span>
                      <span className="step-count">4 / 4</span>
                    </div>

                    <div className="flow-steps">
                      <div className="flow-step">
                        <div className="step-icon-wrapper">
                          <img src="https://www.gstatic.com/images/branding/product/1x/drive_2020q4_32dp.png" alt="Drive" className="step-logo" />
                        </div>
                        <div className="step-card">
                          <span className="step-dot"></span>
                          <span className="step-num">#1</span>
                          <span className="step-action">List</span>
                          <svg className="step-arrow" width="10" height="10" viewBox="0 0 24 24" fill="none">
                            <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                          </svg>
                        </div>
                      </div>

                      <div className="flow-step">
                        <div className="step-icon-wrapper">
                          <img src="https://www.gstatic.com/images/branding/product/1x/gmail_2020q4_32dp.png" alt="Gmail" className="step-logo" />
                        </div>
                        <div className="step-card">
                          <span className="step-dot"></span>
                          <span className="step-num">#2</span>
                          <span className="step-action">Search</span>
                          <svg className="step-arrow" width="10" height="10" viewBox="0 0 24 24" fill="none">
                            <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                          </svg>
                        </div>
                      </div>

                      <div className="flow-step">
                        <div className="step-icon-wrapper">
                          <img src="https://www.gstatic.com/images/branding/product/1x/calendar_2020q4_32dp.png" alt="Calendar" className="step-logo" />
                        </div>
                        <div className="step-card">
                          <span className="step-dot"></span>
                          <span className="step-num">#3</span>
                          <span className="step-action">Create Event</span>
                          <svg className="step-arrow" width="10" height="10" viewBox="0 0 24 24" fill="none">
                            <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                          </svg>
                        </div>
                      </div>

                      <div className="flow-step">
                        <div className="step-icon-wrapper">
                          <img src="https://www.gstatic.com/images/branding/product/1x/gmail_2020q4_32dp.png" alt="Gmail" className="step-logo" />
                        </div>
                        <div className="step-card">
                          <span className="step-dot"></span>
                          <span className="step-num">#4</span>
                          <span className="step-action">Send Email</span>
                          <svg className="step-arrow" width="10" height="10" viewBox="0 0 24 24" fill="none">
                            <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Dashboard


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
        // Robot/AI Agent icon - represents AI agents
        <svg className="grid-icon" width="32" height="32" viewBox="0 0 24 24" fill="none">
          <rect x="4" y="8" width="16" height="12" rx="2" stroke="white" strokeWidth="2"/>
          <circle cx="9" cy="14" r="2" fill="white"/>
          <circle cx="15" cy="14" r="2" fill="white"/>
          <path d="M12 2v4M8 5h8" stroke="white" strokeWidth="2" strokeLinecap="round"/>
          <path d="M2 13h2M20 13h2" stroke="white" strokeWidth="2" strokeLinecap="round"/>
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
        // Split flow icon - one path splitting into two
        <svg className="grid-icon" width="32" height="32" viewBox="0 0 24 24" fill="none">
          <circle cx="4" cy="12" r="2.5" fill="white"/>
          <circle cx="20" cy="6" r="2.5" fill="white"/>
          <circle cx="20" cy="18" r="2.5" fill="white"/>
          <path d="M6.5 12h4c2 0 3.5-1 5-3.5M10.5 12c1.5 2.5 3 3.5 5 3.5h2" stroke="white" strokeWidth="2" strokeLinecap="round"/>
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
        // Magic chat bubble with sparkles
        <svg className="grid-icon" width="32" height="32" viewBox="0 0 24 24" fill="none">
          <path d="M21 12a8.5 8.5 0 0 1-8.5 8.5 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7A8.5 8.5 0 1 1 21 12z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M12 8l.8 2.2L15 11l-2.2.8L12 14l-.8-2.2L9 11l2.2-.8L12 8z" fill="white"/>
          <circle cx="8" cy="9" r="1" fill="white"/>
          <circle cx="16" cy="13" r="1" fill="white"/>
        </svg>
      ),
      bgImage: 'https://images.unsplash.com/photo-1454496522488-7a8e488e8606?q=80&w=2076&auto=format&fit=crop',
      showSuperChatOverlay: true
    }
  }

  const insightsSections = {
    'create-agent': {
      title: 'Set Your Triggers',
      subtitle: 'Define what kicks off your automation. Choose from a variety of triggers like incoming messages, scheduled events, form submissions, or custom webhooks, and set the rules for when and how they activate. Or invoke it on-demand from your preferred platform whenever you need.',
      bgImage: 'https://images.unsplash.com/photo-1454496522488-7a8e488e8606?q=80&w=2076&auto=format&fit=crop'
    },
    'define-policies': {
      title: 'Connect Your Tools & Knowledge',
      subtitle: 'Select the applications, databases, and knowledge bases your agent needs access to. Integrate with your existing stack so your agent can retrieve context, take actions, and work with real data.',
      bgImage: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=2070&auto=format&fit=crop'
    },
    'design-logic': {
      title: 'Configure Your Prompt & Model',
      subtitle: 'Write your instructions in plain language. Tell the agent what to do, how to respond, and when to use its connected tools. Choose the AI model that best fits your use case—whether you need speed, accuracy, or advanced reasoning.',
      bgImage: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=2070&auto=format&fit=crop'
    },
    'test-launch': {
      title: 'Test & Deploy',
      subtitle: 'Validate responses, simulate real scenarios, and fine-tune until it works exactly as expected. When ready, deploy it.',
      bgImage: 'https://images.unsplash.com/photo-1454496522488-7a8e488e8606?q=80&w=2076&auto=format&fit=crop'
    },
    'monitor-improve': {
      title: 'Monitor & Iterate',
      subtitle: 'Track every interaction in your activity log. Spot errors, review edge cases, and make adjustments on the fly—no redeployment needed.',
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
              {/* Monitor & Iterate Overlay */}
              {activeSection === 'monitor-improve' && (
                <div className="monitor-overlay">
                  <div className="monitor-panel">
                    {/* Header */}
                    <div className="monitor-header">
                      <div className="monitor-title-row">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="monitor-robot-icon">
                          <rect x="3" y="8" width="18" height="12" rx="2" stroke="currentColor" strokeWidth="2"/>
                          <circle cx="9" cy="14" r="2" fill="currentColor"/>
                          <circle cx="15" cy="14" r="2" fill="currentColor"/>
                          <path d="M12 2v4M8 6h8" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                        </svg>
                        <span>Sales Pipeline Agent</span>
                      </div>
                      <div className="monitor-tabs">
                        <button className="monitor-tab">Configure</button>
                        <button className="monitor-tab active">Activity</button>
                      </div>
                    </div>

                    {/* Filters Row */}
                    <div className="monitor-filters">
                      <div className="monitor-search">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                          <circle cx="11" cy="11" r="8" stroke="currentColor" strokeWidth="2"/>
                          <path d="M21 21l-4.35-4.35" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                        </svg>
                        <input type="text" placeholder="Search executions..." />
                      </div>
                      <div className="monitor-filter-btn">
                        <span>Any status</span>
                        <svg width="10" height="10" viewBox="0 0 24 24" fill="none">
                          <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                        </svg>
                      </div>
                      <button className="monitor-refresh-btn">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                          <path d="M1 4v6h6M23 20v-6h-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          <path d="M20.49 9A9 9 0 0 0 5.64 5.64L1 10m22 4l-4.64 4.36A9 9 0 0 1 3.51 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </button>
                    </div>

                    {/* Activity Tabs */}
                    <div className="monitor-activity-tabs">
                      <button className="activity-tab active">All executions</button>
                      <button className="activity-tab">Errors only</button>
                      <button className="activity-tab">Needs action</button>
                    </div>

                    {/* Table */}
                    <div className="monitor-table">
                      <div className="monitor-table-header">
                        <div className="col-exec">EXECUTION</div>
                        <div className="col-date">DATE</div>
                        <div className="col-duration">DURATION</div>
                        <div className="col-status">STATUS</div>
                      </div>
                      <div className="monitor-table-body">
                        {/* Row 1 - In Progress */}
                        <div className="monitor-row">
                          <div className="col-exec">
                            <span className="exec-id">#4521</span>
                            <span className="exec-name">Daily lead sync workflow</span>
                          </div>
                          <div className="col-date">Today, 2:15am</div>
                          <div className="col-duration">Running...</div>
                          <div className="col-status"><span className="status-progress">In progress</span></div>
                        </div>
                        {/* Row 2 - Complete */}
                        <div className="monitor-row">
                          <div className="col-exec">
                            <span className="exec-id">#4520</span>
                            <span className="exec-name">Customer onboarding flow</span>
                          </div>
                          <div className="col-date">Today, 1:42am</div>
                          <div className="col-duration">2.3s</div>
                          <div className="col-status"><span className="status-complete">Complete</span></div>
                        </div>
                        {/* Row 3 - Error with multi-tool debug */}
                        <div className="monitor-row error-row expanded">
                          <div className="col-exec">
                            <span className="exec-id">#4519</span>
                            <span className="exec-name">Weekly report generation</span>
                          </div>
                          <div className="col-date">Yesterday, 11:30pm</div>
                          <div className="col-duration">4.1s</div>
                          <div className="col-status"><span className="status-error">2 Errors</span></div>
                        </div>
                        {/* Error Debug Dropdown */}
                        <div className="error-dropdown-row">
                          <div className="error-debug-panel">
                            <div className="debug-header">
                              <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                              </svg>
                              <span>Execution Debug Log</span>
                              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" className="debug-arrow">
                                <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                              </svg>
                            </div>
                            <div className="debug-tools-list">
                              <div className="debug-tool-item error">
                                <div className="debug-tool-content">
                                  <div className="tool-icon-wrap">
                                    <img src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Slack_icon_2019.svg" alt="Slack" />
                                  </div>
                                  <span className="tool-name">Slack - Send Message</span>
                                  <span className="tool-separator">|</span>
                                  <span className="tool-error-msg">OAuth token expired at step 3</span>
                                </div>
                                <span className="tool-status-badge error">Failed</span>
                              </div>
                              <div className="debug-tool-item error">
                                <div className="debug-tool-content">
                                  <div className="tool-icon-wrap">
                                    <img src="https://www.gstatic.com/images/branding/product/1x/sheets_2020q4_32dp.png" alt="Sheets" />
                                  </div>
                                  <span className="tool-name">Google Sheets - Write Row</span>
                                  <span className="tool-separator">|</span>
                                  <span className="tool-error-msg">API quota reached at step 5</span>
                                </div>
                                <span className="tool-status-badge error">Failed</span>
                              </div>
                              <div className="debug-tool-item success">
                                <div className="debug-tool-content">
                                  <div className="tool-icon-wrap">
                                    <img src="https://upload.wikimedia.org/wikipedia/commons/f/f9/Salesforce.com_logo.svg" alt="Salesforce" />
                                  </div>
                                  <span className="tool-name">Salesforce - Query Records</span>
                                </div>
                                <span className="tool-status-badge success">Passed</span>
                              </div>
                            </div>
                            <div className="debug-actions">
                              <button className="debug-retry-btn">Retry Execution</button>
                              <button className="debug-logs-btn">View Full Logs</button>
                            </div>
                          </div>
                        </div>
                        {/* Row 4 - Complete */}
                        <div className="monitor-row">
                          <div className="col-exec">
                            <span className="exec-id">#4518</span>
                            <span className="exec-name">Email follow-up sequence</span>
                          </div>
                          <div className="col-date">Yesterday, 9:15pm</div>
                          <div className="col-duration">1.8s</div>
                          <div className="col-status"><span className="status-complete">Complete</span></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Test & Deploy Overlay */}
              {activeSection === 'test-launch' && (
                <div className="test-deploy-overlay">
                  <div className="td-panel">
                    {/* Left Section - Output */}
                    <div className="td-output-section">
                      <div className="td-output-header">
                        <div className="td-tabs-left">
                          <button className="td-tab">Input</button>
                          <button className="td-tab active">Output</button>
                        </div>
                        <div className="td-tabs-right">
                          <button className="td-tab">Data</button>
                          <button className="td-tab active">Activity</button>
                          <button className="td-tab">JSON</button>
                        </div>
                      </div>
                      <div className="td-output-meta">
                        <span className="td-nodes">0 connected nodes</span>
                        <div className="td-success">
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                            <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                            <path d="M8 12l3 3 5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                          <span>Success</span>
                          <span className="td-time">· 5899ms</span>
                        </div>
                      </div>
                      <div className="td-response-box">
                        <div className="td-response-label">AI RESPONSE</div>
                        <div className="td-response-content">
                          <p>Here are the top 3 files in your drive:</p>
                          <ol>
                            <li><a href="#">Sentiment Analysis</a></li>
                            <li><a href="#">Untitled spreadsheet</a></li>
                            <li><a href="#">Credentials</a></li>
                          </ol>
                        </div>
                      </div>
                    </div>

                    {/* Right Section - Config */}
                    <div className="td-config-section">
                      <div className="td-config-header">
                        <div className="td-app-info">
                          <img src="https://upload.wikimedia.org/wikipedia/commons/1/12/Google_Drive_icon_%282020%29.svg" alt="Google Drive" className="td-app-icon" />
                          <div className="td-app-text">
                            <span className="td-app-name">Google Drive</span>
                            <span className="td-app-desc">File storage operations</span>
                          </div>
                        </div>
                        <button className="td-test-btn">
                          <svg width="10" height="10" viewBox="0 0 24 24" fill="none">
                            <path d="M5 3l14 9-14 9V3z" fill="currentColor"/>
                          </svg>
                          Test step
                        </button>
                      </div>
                      <div className="td-config-body">
                        <div className="td-field">
                          <label>Credential to connect with <span className="required">*</span></label>
                          <div className="td-select">
                            <span>Google Drive-1</span>
                            <svg width="10" height="10" viewBox="0 0 24 24" fill="none">
                              <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                            </svg>
                          </div>
                        </div>
                        <div className="td-field">
                          <label>Describe what you want this node to do</label>
                          <div className="td-textarea">
                            <span>Fetch the top 3 files in my drive</span>
                          </div>
                        </div>
                      </div>
                      <div className="td-config-footer">
                        <span className="td-shortcut">Press <kbd>Cmd</kbd> + <kbd>Enter</kbd> to test</span>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="td-settings-icon">
                          <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2"/>
                          <path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Prompt & Model Overlay */}
              {activeSection === 'design-logic' && (
                <div className="prompt-model-overlay">
                  <div className="pm-panel">
                    {/* Model Section */}
                    <div className="pm-section">
                      <div className="pm-section-header">
                        <div className="pm-section-title">
                          <span>Model:</span>
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                            <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                            <path d="M12 16v-4M12 8h.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                          </svg>
                        </div>
                      </div>
                      <div className="pm-model-grid">
                        <div className="pm-model-field">
                          <label>LLM</label>
                          <div className="pm-select">
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="pm-gemini-icon">
                              <path d="M12 2L9 9l-7 3 7 3 3 7 3-7 7-3-7-3-3-7z" fill="currentColor"/>
                            </svg>
                            <span>Google Gemini</span>
                            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" className="pm-select-arrow">
                              <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                            </svg>
                          </div>
                        </div>
                        <div className="pm-model-field">
                          <label>CREDENTIALS</label>
                          <div className="pm-select">
                            <span>Google Gemini Account 1</span>
                            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" className="pm-select-arrow">
                              <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                            </svg>
                          </div>
                        </div>
                        <div className="pm-model-field">
                          <label>MODEL</label>
                          <div className="pm-select">
                            <span>Gemini 2.5 Flash</span>
                            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" className="pm-select-arrow">
                              <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Instructions Section */}
                    <div className="pm-section">
                      <div className="pm-section-header">
                        <div className="pm-section-title">
                          <span>Instructions to follow:</span>
                        </div>
                        <button className="pm-expand-btn">
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                            <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                          Expand
                        </button>
                      </div>
                      <div className="pm-instructions-box">
                        <p>Example: Take a look at Product Management, find all overdue tasks that have dependencies, and Send Channel Message to the product team with a list of the overdue tasks, who they're assigned to, and the dependencies. Include a link to the tasks in the message.</p>
                      </div>
                      <div className="pm-hint">
                        Use <kbd>/</kbd> to add tools & knowledge sources
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Tools & Knowledge Overlay */}
              {activeSection === 'define-policies' && (
                <div className="tools-knowledge-overlay">
                  <div className="tk-panel">
                    {/* Tools Section */}
                    <div className="tk-section">
                      <div className="tk-section-header">
                        <div className="tk-section-title">
                          <span>Tools this agent can use:</span>
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                            <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                            <path d="M12 16v-4M12 8h.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                          </svg>
                        </div>
                        <button className="tk-add-btn">
                          <span>+</span> Add Tools
                        </button>
                      </div>
                      <div className="tk-chips-container">
                        <div className="tk-chip tk-chip-default">
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                            <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                            <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                          </svg>
                          <span>Default Tools: Visit Site & Web Search</span>
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" className="tk-info-icon">
                            <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                            <path d="M12 16v-4M12 8h.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                          </svg>
                        </div>
                        <div className="tk-chip">
                          <img src="https://upload.wikimedia.org/wikipedia/commons/f/f9/Salesforce.com_logo.svg" alt="Salesforce" className="tk-chip-logo" />
                          <span>Salesforce</span>
                          <button className="tk-chip-remove">×</button>
                        </div>
                        <div className="tk-chip">
                          <img src="https://www.gstatic.com/images/branding/product/1x/gmail_2020q4_32dp.png" alt="Gmail" className="tk-chip-logo" />
                          <span>Gmail</span>
                          <button className="tk-chip-remove">×</button>
                        </div>
                        <div className="tk-chip">
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="tk-zendesk-icon">
                            <path d="M12 2L2 12h10V2zM12 22l10-10H12v10z" fill="currentColor"/>
                          </svg>
                          <span>Zendesk</span>
                          <button className="tk-chip-remove">×</button>
                        </div>
                      </div>
                    </div>

                    {/* Knowledge Sources Section */}
                    <div className="tk-section">
                      <div className="tk-section-header">
                        <div className="tk-section-title">
                          <span>Knowledge sources:</span>
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                            <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                            <path d="M12 16v-4M12 8h.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                          </svg>
                        </div>
                        <button className="tk-add-btn">
                          <span>+</span> Add Knowledge Sources
                        </button>
                      </div>
                      <div className="tk-chips-container">
                        <div className="tk-chip">
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="tk-confluence-icon">
                            <path d="M4.5 6.5L12 2l7.5 4.5v11L12 22l-7.5-4.5v-11z" stroke="currentColor" strokeWidth="2"/>
                            <path d="M12 8v8M8 12h8" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                          </svg>
                          <span>Confluence Cloud</span>
                          <button className="tk-chip-remove">×</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Trigger Configuration Overlay */}
              {activeSection === 'create-agent' && (
                <div className="triggers-overlay">
                  {/* Schedule Trigger Panel */}
                  <div className="trigger-panel">
                    <div className="trigger-header">
                      <div className="trigger-title-row">
                        <div className="trigger-icon schedule-icon">
                          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                            <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                            <path d="M12 6v6l4 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                          </svg>
                        </div>
                        <div className="trigger-title-info">
                          <h4>Schedule Trigger</h4>
                          <span>Trigger on a schedule</span>
                        </div>
                      </div>
                      <div className="trigger-header-actions">
                        <button className="btn-activate">
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                            <path d="M5 3l14 9-14 9V3z" fill="currentColor"/>
                          </svg>
                          Activate
                        </button>
                        <button className="btn-close-trigger">×</button>
                      </div>
                    </div>

                    <div className="trigger-content">
                      <div className="trigger-field">
                        <label>Trigger Rules</label>
                        <div className="trigger-select">
                          <span>Daily</span>
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                            <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                          </svg>
                        </div>
                      </div>

                      <div className="trigger-field">
                        <label>Timezone</label>
                        <div className="trigger-select">
                          <span>PST (Pacific Standard Time)</span>
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                            <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                          </svg>
                        </div>
                      </div>

                      <div className="trigger-section-label">DAILY SETTINGS</div>

                      <div className="trigger-field">
                        <label>Times of the Day</label>
                        <div className="trigger-select">
                          <span>1 time selected</span>
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                            <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                          </svg>
                        </div>
                      </div>

                      <div className="time-chip">
                        9:00 AM
                        <span className="chip-remove">×</span>
                      </div>

                      <div className="trigger-field">
                        <label>Days of the Week</label>
                        <div className="days-row">
                          <button className="day-btn active">Mon</button>
                          <button className="day-btn active">Tue</button>
                          <button className="day-btn active">Wed</button>
                          <button className="day-btn active">Thu</button>
                          <button className="day-btn active">Fri</button>
                          <button className="day-btn active">Sat</button>
                          <button className="day-btn active">Sun</button>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Gmail Trigger Panel */}
                  <div className="trigger-panel">
                    <div className="trigger-header">
                      <div className="trigger-title-row">
                        <div className="trigger-icon gmail-icon">
                          <img src="https://www.gstatic.com/images/branding/product/1x/gmail_2020q4_32dp.png" alt="Gmail" />
                        </div>
                        <div className="trigger-title-info">
                          <h4>Gmail Trigger</h4>
                          <span>Trigger on new emails</span>
                        </div>
                      </div>
                      <div className="trigger-header-actions">
                        <button className="btn-activate">
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                            <path d="M5 3l14 9-14 9V3z" fill="currentColor"/>
                          </svg>
                          Activate
                        </button>
                        <button className="btn-close-trigger">×</button>
                      </div>
                    </div>

                    <div className="trigger-content">
                      <div className="trigger-field">
                        <label>Credential to connect with <span className="required">*</span></label>
                        <div className="trigger-select">
                          <span>Gmail-1</span>
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                            <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                          </svg>
                        </div>
                      </div>

                      <div className="trigger-section-label">POLL SCHEDULE</div>

                      <div className="trigger-fields-row">
                        <div className="trigger-field half">
                          <label>Trigger Rules</label>
                          <div className="trigger-select">
                            <span>Daily</span>
                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                              <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                            </svg>
                          </div>
                        </div>
                        <div className="trigger-field half">
                          <label>Timezone</label>
                          <div className="trigger-select">
                            <span>PST</span>
                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                              <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                            </svg>
                          </div>
                        </div>
                      </div>

                      <div className="trigger-fields-row">
                        <div className="trigger-field half">
                          <label>Times of the Day</label>
                          <div className="trigger-select">
                            <span>1 time selected</span>
                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                              <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                            </svg>
                          </div>
                        </div>
                        <div className="trigger-field half">
                          <label>Days of the Week</label>
                          <div className="trigger-select">
                            <span>Every day</span>
                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                              <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                            </svg>
                          </div>
                        </div>
                      </div>

                      <div className="trigger-section-label">FILTERS (OPTIONAL)</div>

                      <div className="trigger-fields-row">
                        <div className="trigger-field half">
                          <label>Label</label>
                          <div className="trigger-select">
                            <span>Inbox</span>
                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                              <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                            </svg>
                          </div>
                        </div>
                        <div className="trigger-field half">
                          <label>From (sender)</label>
                          <input type="text" placeholder="john@example.com" className="trigger-input" />
                        </div>
                      </div>

                      <div className="trigger-field">
                        <label>Subject contains</label>
                        <input type="text" placeholder="e.g. Invoice" className="trigger-input" />
                      </div>

                      <div className="trigger-checkbox">
                        <input type="checkbox" id="unread-only" />
                        <label htmlFor="unread-only">Only unread emails</label>
                      </div>
                    </div>
                  </div>
                </div>
              )}
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
                            {/* Small arrow marker */}
                            <marker id="arrow" markerWidth="4" markerHeight="4" refX="3" refY="2" orient="auto">
                              <path d="M 0 0 L 4 2 L 0 4 Z" fill="#a78bfa" />
                            </marker>
                          </defs>

                          {/* Webhook → HTTP Request */}
                          <path d="M 110 138 C 144 138, 144 118, 178 118" className="wf-line" markerEnd="url(#arrow)" />

                          {/* HTTP Request → Condition */}
                          <path d="M 303 118 C 344 118, 344 138, 384 138" className="wf-line" markerEnd="url(#arrow)" />

                          {/* Condition → Salesforce */}
                          <path d="M 489 138 C 524 138, 524 118, 558 118" className="wf-line" markerEnd="url(#arrow)" />

                          {/* Condition → Google Sheets */}
                          <path d="M 437 161 L 437 190 Q 437 200, 313 200 Q 190 200, 190 215 L 190 230" className="wf-line" markerEnd="url(#arrow)" />

                          {/* Condition → HubSpot */}
                          <path d="M 437 161 L 437 190 Q 437 200, 448 200 Q 448 200, 448 215 L 448 230" className="wf-line" markerEnd="url(#arrow)" />
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
                          </div>
                        </div>

                        <div className="wf-node" style={{left: '178px', top: '95px'}}>
                          <div className="wf-node-content">
                            <span className="wf-icon-wrapper wf-http">
                              <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                                <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" fill="currentColor"/>
                              </svg>
                            </span>
                            <span className="wf-label">HTTP Request</span>
                          </div>
                        </div>

                        <div className="wf-node" style={{left: '384px', top: '115px'}}>
                          <div className="wf-node-content">
                            <span className="wf-icon-wrapper wf-condition">
                              <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                                <path d="M12 2L2 12l10 10 10-10L12 2z" stroke="currentColor" strokeWidth="2"/>
                              </svg>
                            </span>
                            <span className="wf-label">Condition</span>
                          </div>
                        </div>

                        <div className="wf-node" style={{left: '558px', top: '95px'}}>
                          <div className="wf-node-content">
                            <span className="wf-icon-wrapper wf-salesforce">
                              <img src="https://upload.wikimedia.org/wikipedia/commons/f/f9/Salesforce.com_logo.svg" alt="Salesforce" className="wf-logo" />
                            </span>
                            <span className="wf-label">Salesforce</span>
                          </div>
                        </div>

                        <div className="wf-node" style={{left: '120px', top: '230px'}}>
                          <div className="wf-node-content">
                            <span className="wf-icon-wrapper wf-sheets">
                              <img src="https://www.gstatic.com/images/branding/product/1x/sheets_2020q4_32dp.png" alt="Google Sheets" className="wf-logo" />
                            </span>
                            <span className="wf-label">Google Sheets</span>
                          </div>
                        </div>

                        <div className="wf-node" style={{left: '400px', top: '230px'}}>
                          <div className="wf-node-content">
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


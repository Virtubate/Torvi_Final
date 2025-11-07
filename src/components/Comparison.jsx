import React from 'react'
import './Comparison.css'

const Comparison = () => {
  return (
    <section className="comparison-section">
      <div className="comparison-container">
        {/* Header */}
        <div className="comparison-header">
          <h2 className="comparison-title">
            Why leaders choose Torvi<br/>
            over other solutions
          </h2>
          <button className="comparison-cta">REQUEST A DEMO</button>
        </div>

        {/* Comparison Grid */}
        <div className="comparison-grid">
          
          {/* Labels Column (Left Side) */}
          <div className="labels-column">
            <div className="label-spacer"></div>
            <div className="row-label">FLEXIBILITY</div>
            <div className="row-label">CONTROL</div>
            <div className="row-label">SPEED</div>
            <div className="row-label">COST</div>
          </div>

          {/* Column 1: Off-the-shelf AI tool */}
          <div className="comparison-column">
            <div className="column-header">
              <h3 className="column-title">Off-the-shelf AI tool</h3>
            </div>
            
            <div className="column-item">
              <div className="item-content">
                <span className="icon-negative">✕</span>
                <p>Locked into vendor's ecosystem</p>
              </div>
            </div>
            
            <div className="column-item">
              <div className="item-content">
                <span className="icon-negative">✕</span>
                <p>Vendor gatekeeps every modification</p>
              </div>
            </div>
            
            <div className="column-item">
              <div className="item-content">
                <span className="icon-negative">✕</span>
                <p>Depends on vendor's roadmap</p>
              </div>
            </div>
            
            <div className="column-item">
              <div className="item-content">
                <span className="icon-negative">✕</span>
                <p>Per-user pricing explodes at scale</p>
              </div>
            </div>
          </div>

          {/* Column 2: RPA solution */}
          <div className="comparison-column">
            <div className="column-header">
              <h3 className="column-title">RPA solution</h3>
            </div>
            
            <div className="column-item">
              <div className="item-content">
                <span className="icon-negative">✕</span>
                <p>Breaks when processes change</p>
              </div>
            </div>
            
            <div className="column-item">
              <div className="item-content">
                <span className="icon-negative">✕</span>
                <p>Technical team bottlenecked for progress</p>
              </div>
            </div>
            
            <div className="column-item">
              <div className="item-content">
                <span className="icon-negative">✕</span>
                <p>Months to reach production</p>
              </div>
            </div>
            
            <div className="column-item">
              <div className="item-content">
                <span className="icon-negative">✕</span>
                <p>Specialist fees for customization</p>
              </div>
            </div>
          </div>

          {/* Column 3: Custom development */}
          <div className="comparison-column">
            <div className="column-header">
              <h3 className="column-title">Custom development</h3>
            </div>
            
            <div className="column-item">
              <div className="item-content">
                <span className="icon-negative">✕</span>
                <p>Requires development for every change</p>
              </div>
            </div>
            
            <div className="column-item">
              <div className="item-content">
                <span className="icon-negative">✕</span>
                <p>Developer team holds all keys</p>
              </div>
            </div>
            
            <div className="column-item">
              <div className="item-content">
                <span className="icon-negative">✕</span>
                <p>Minimum 6 to 12 month project</p>
              </div>
            </div>
            
            <div className="column-item">
              <div className="item-content">
                <span className="icon-negative">✕</span>
                <p>Agents adapt, scripts break</p>
              </div>
            </div>
          </div>

          {/* Column 4: Torvi AI Agents (Highlighted) */}
          <div className="comparison-column highlighted-column">
            <div className="column-header">
              <h3 className="column-title">Torvi AI Agents</h3>
            </div>
            
            <div className="column-item">
              <div className="item-content">
                <span className="icon-positive">✓</span>
                <p>Ecosystem agnostic and adaptable</p>
              </div>
            </div>
            
            <div className="column-item">
              <div className="item-content">
                <span className="icon-positive">✓</span>
                <p>Business teams own deployment</p>
              </div>
            </div>
            
            <div className="column-item">
              <div className="item-content">
                <span className="icon-positive">✓</span>
                <p>Agents live in days to weeks</p>
              </div>
            </div>
            
            <div className="column-item">
              <div className="item-content">
                <span className="icon-positive">✓</span>
                <p>Full team plus infrastructure costs</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Comparison


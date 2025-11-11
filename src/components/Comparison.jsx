import React, { useState } from 'react'
import './Comparison.css'

const Comparison = () => {
  const [cardOrder, setCardOrder] = useState([3, 0, 1, 2])
  const [swipeDirection, setSwipeDirection] = useState(null)
  const [touchStart, setTouchStart] = useState(null)
  const [touchEnd, setTouchEnd] = useState(null)

  const minSwipeDistance = 50

  const cards = [
    {
      title: 'Off-the-shelf AI tool',
      items: [
        { icon: '✕', text: "Locked into vendor's ecosystem", positive: false },
        { icon: '✕', text: 'Vendor gatekeeps every modification', positive: false },
        { icon: '✕', text: "Depends on vendor's roadmap", positive: false },
        { icon: '✕', text: 'Per-user pricing explodes at scale', positive: false }
      ]
    },
    {
      title: 'RPA solution',
      items: [
        { icon: '✕', text: 'Breaks when processes change', positive: false },
        { icon: '✕', text: 'Technical team bottlenecked for progress', positive: false },
        { icon: '✕', text: 'Months to reach production', positive: false },
        { icon: '✕', text: 'Specialist fees for customization', positive: false }
      ]
    },
    {
      title: 'Custom development',
      items: [
        { icon: '✕', text: 'Requires development for every change', positive: false },
        { icon: '✕', text: 'Developer team holds all keys', positive: false },
        { icon: '✕', text: 'Minimum 6 to 12 month project', positive: false },
        { icon: '✕', text: 'Agents adapt, scripts break', positive: false }
      ]
    },
    {
      title: 'Torvi AI Agents',
      highlighted: true,
      items: [
        { icon: '✓', text: 'Ecosystem agnostic and adaptable', positive: true },
        { icon: '✓', text: 'Business teams own deployment', positive: true },
        { icon: '✓', text: 'Agents live in days to weeks', positive: true },
        { icon: '✓', text: 'Full team plus infrastructure costs', positive: true }
      ]
    }
  ]

  const handleSwipe = (direction) => {
    setSwipeDirection(direction)
    setTimeout(() => {
      // Move the first card to the end
      setCardOrder(prev => [...prev.slice(1), prev[0]])
      setSwipeDirection(null)
    }, 300)
  }

  const onTouchStart = (e) => {
    setTouchEnd(null)
    setTouchStart(e.targetTouches[0].clientX)
  }

  const onTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return
    
    const distance = touchStart - touchEnd
    const isLeftSwipe = distance > minSwipeDistance
    const isRightSwipe = distance < -minSwipeDistance
    
    if (isLeftSwipe || isRightSwipe) {
      handleSwipe(isLeftSwipe ? 'left' : 'right')
    }
  }

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

        {/* Desktop Grid */}
        <div className="comparison-grid comparison-grid-desktop">
          
          {/* Labels Column (Left Side) */}
          <div className="labels-column">
            <div className="label-spacer"></div>
            <div className="row-label">FLEXIBILITY</div>
            <div className="row-label">CONTROL</div>
            <div className="row-label">SPEED</div>
            <div className="row-label">COST</div>
          </div>

          {/* Desktop Cards */}
          <div className="comparison-cards-wrapper">
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
          {/* End Desktop Cards */}
          </div>
        </div>

        {/* Mobile Tinder-Style Card Stack */}
        <div className="comparison-mobile">
          {/* Labels Column (Left Side) */}
          <div className="labels-column-mobile">
            <div className="row-label-mobile">FLEXIBILITY</div>
            <div className="row-label-mobile">CONTROL</div>
            <div className="row-label-mobile">SPEED</div>
            <div className="row-label-mobile">COST</div>
          </div>

          {/* Card Stack */}
          <div className="card-stack-container">
            <div 
              className="card-stack"
              onTouchStart={onTouchStart}
              onTouchMove={onTouchMove}
              onTouchEnd={onTouchEnd}
            >
              {cardOrder.map((cardIndex, stackPosition) => {
                const card = cards[cardIndex]
                return (
                  <div
                    key={cardIndex}
                    className={`swipe-card ${
                      stackPosition === 0 ? 'active' : 'stack'
                    } ${card.highlighted ? 'highlighted' : ''} ${
                      swipeDirection && stackPosition === 0 ? `swipe-${swipeDirection}` : ''
                    }`}
                    style={{ 
                      zIndex: cardOrder.length - stackPosition,
                      transform: stackPosition > 0 
                        ? `translateX(${stackPosition * 8}px) translateY(${stackPosition * 12}px) scale(${1 - stackPosition * 0.04})` 
                        : 'none'
                    }}
                  >
                    <div className="swipe-card-header">
                      <h3>{card.title}</h3>
                    </div>
                    
                    <div className="swipe-card-content">
                      {card.items.map((item, itemIndex) => (
                        <div key={itemIndex} className="swipe-card-item">
                          <span className={item.positive ? 'icon-positive' : 'icon-negative'}>
                            {item.icon}
                          </span>
                          <p>{item.text}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Comparison


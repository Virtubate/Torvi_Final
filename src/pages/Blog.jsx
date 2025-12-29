import React from 'react'
import { Link } from 'react-router-dom'
import './Blog.css'

// Tag icons
const InsightsIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 18h6"/>
    <path d="M10 22h4"/>
    <path d="M12 2a7 7 0 0 0-4 12.7V17a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-2.3A7 7 0 0 0 12 2z"/>
  </svg>
)

const ProductIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"/>
    <path d="m3.3 7 8.7 5 8.7-5"/>
    <path d="M12 22V12"/>
  </svg>
)

const UpdatesIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/>
    <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"/>
  </svg>
)

const AnnouncementIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="m3 11 18-5v12L3 14v-3z"/>
    <path d="M11.6 16.8a3 3 0 1 1-5.8-1.6"/>
  </svg>
)

const SolutionsIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2v4"/>
    <path d="m6.8 15-3.5 2"/>
    <path d="m20.7 17-3.5-2"/>
    <path d="M6.8 9 3.3 7"/>
    <path d="m20.7 7-3.5 2"/>
    <circle cx="12" cy="12" r="4"/>
  </svg>
)

const getTagIcon = (tag) => {
  switch (tag.toLowerCase()) {
    case 'insights':
      return <InsightsIcon />
    case 'product':
      return <ProductIcon />
    case 'updates':
      return <UpdatesIcon />
    case 'announcement':
      return <AnnouncementIcon />
    case 'solutions':
      return <SolutionsIcon />
    default:
      return null
  }
}

const Blog = () => {
  const featuredArticle = {
    image: '/bb1.jpg',
    tag: 'ANNOUNCEMENT',
    date: 'DEC 15, 2025',
    title: 'Your AI Agents. Your Data. Your Control.',
    description: 'Most AI platforms ask you to compromise. Torvi refuses these compromises. We built an AI agent platform where you don\'t choose between power and privacy, capability and ease of use, or flexibility and simplicity...',
    link: '/blog/why-torvi'
  }

  const updates = [
    {
      image: '/bb2.jpg',
      tag: 'Solutions',
      title: 'IT Support Automation by AI',
      date: 'DEC 5, 2025',
      link: '/solutions/it-ticket-automation',
      imageStyle: 'normal'
    },
    {
      image: '/bb1.jpg',
      tag: 'Product',
      title: 'Fluent by design',
      date: 'NOV 18, 2025',
      link: '/blog/fluent-by-design',
      imageStyle: 'normal'
    },
    {
      image: '/bb2.jpg',
      tag: 'Updates',
      title: 'Introducing Intents & Tags',
      date: 'OCT 22, 2025',
      link: '/blog/introducing-intents-tags',
      imageStyle: 'mirror'
    },
    {
      image: '/bb1.jpg',
      tag: 'Insights',
      title: 'AI-Powered Analytics',
      date: 'OCT 10, 2025',
      link: '/blog/ai-powered-analytics',
      imageStyle: 'mirror'
    },
    {
      image: '/bb2.jpg',
      tag: 'Product',
      title: 'Workflow Automation',
      date: 'SEP 28, 2025',
      link: '/blog/workflow-automation',
      imageStyle: 'zoom'
    }
  ]

  return (
    <div className="blog-page">
      {/* Hero Section */}
      <section className="blog-hero">
        <div className="blog-hero-container">
          <div className="blog-badge">
            <span className="blog-badge-dot"></span>
            PUBLICATIONS
            <span className="blog-badge-arrow">›</span>
          </div>
          <h1 className="blog-title">Blogs</h1>
        </div>
      </section>

      {/* Featured Article Section */}
      <section className="blog-featured">
        <div className="blog-featured-container">
          <div className="featured-image-wrapper">
            <img src={featuredArticle.image} alt={featuredArticle.title} className="featured-image" />
            <div className="featured-watermark">
              <span className="watermark-believe">believe</span>
              <span className="watermark-torvi">torvi</span>
            </div>
          </div>
          <div className="featured-content">
            <div className="featured-meta">
              <span className="featured-tag">
                {getTagIcon(featuredArticle.tag)}
                {featuredArticle.tag}
              </span>
              <span className="featured-date">{featuredArticle.date}</span>
            </div>
            <h2 className="featured-title">{featuredArticle.title}</h2>
            <p className="featured-description">{featuredArticle.description}</p>
            <Link to={featuredArticle.link} className="featured-link">Read more</Link>
          </div>
        </div>
      </section>

      {/* Updates Section */}
      <section className="blog-updates">
        <div className="blog-updates-container">
          <h2 className="updates-title">Use Cases</h2>
          <div className="updates-grid">
            {updates.map((post, index) => (
              <Link to={post.link} key={index} className="update-card">
                <div className="update-image-wrapper">
                  <img src={post.image} alt={post.title} className={`update-image ${post.imageStyle}`} />
                  <span className="update-hover-text">Learn more</span>
                </div>
                <div className="update-content">
                  <span className="update-tag">
                    {getTagIcon(post.tag)}
                    {post.tag}
                  </span>
                  <h3 className="update-title">{post.title}</h3>
                  <span className="update-date">{post.date}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Watermark Only */}
      <section className="blog-cta-section">
        <div className="blog-animated-wave"></div>
        <div className="blog-cta-watermark">torvi</div>
      </section>
    </div>
  )
}

export default Blog

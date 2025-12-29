import React from 'react'
import { useParams, Link } from 'react-router-dom'
import CTA from '../components/CTA'
import './BlogDetail.css'

// Blog content data
const blogData = {
  'it-ticket-automation': {
    id: 'it-ticket-automation',
    image: '/bb2.jpg',
    imageStyle: 'normal',
    tag: 'Solutions',
    title: 'IT Support Automation by AI',
    subtitle: 'Intelligent IT Support That Actually Understands Code',
    date: 'DEC 5, 2025',
    metaTitle: 'AI IT Support Automation | Resolve Incidents 60% Faster | Torvi',
    metaDescription: 'Intelligent IT support automation that reads your code, identifies root causes, and assigns tickets based on engineer capacity. Give your team 40% more time to build.',
    keywords: {
      primary: 'AI IT support automation'
    },
    content: [
      {
        type: 'paragraph',
        text: 'Resolve IT incidents 60% faster with intelligent automation that reads your code, identifies root causes, and assigns to the right engineer based on capacity.'
      },
      {
        type: 'heading',
        text: 'Your Engineers Are Drowning in Tickets'
      },
      {
        type: 'paragraph',
        text: 'Every support ticket is an interruption. Every misrouted issue is wasted time. Every vague bug report is an hour of detective work your engineers don\'t have.'
      },
      {
        type: 'paragraph',
        text: 'Support tickets interrupt focused development work constantly. Your best engineers spend mornings triaging issues instead of building features.'
      },
      {
        type: 'paragraph',
        text: 'Engineers waste hours reproducing issues and searching code for causes. A ticket says the API is slow, but which endpoint? Which service? Which recent change broke it?'
      },
      {
        type: 'paragraph',
        text: 'Bug tracking across Zendesk, GitHub, and Jira creates data silos. Tickets live in one system, code context in another, sprint planning in a third. Nobody has the full picture.'
      },
      {
        type: 'paragraph',
        text: 'Context-switching between tickets reduces engineering productivity by 40%. Every interruption costs 23 minutes of focus time. With a dozen tickets a day, your team loses entire afternoons to task switching.'
      },
      {
        type: 'heading',
        text: 'End-to-End Orchestration That Understands Your Stack'
      },
      {
        type: 'paragraph',
        text: 'Torvi doesn\'t just route tickets. It reads your code, understands your architecture, and orchestrates your entire incident workflow from first report to resolution.'
      },
      {
        type: 'heading',
        text: 'Intelligent Ticket Classification'
      },
      {
        type: 'paragraph',
        text: 'Every ticket logged in Zendesk is instantly analyzed and categorized by severity, component, and likely root cause. No more generic priority levels or guesswork. Torvi understands the difference between a database timeout and a front-end rendering bug.'
      },
      {
        type: 'heading',
        text: 'Code-Aware Root Cause Analysis'
      },
      {
        type: 'paragraph',
        text: 'Torvi reads your GitHub repositories to identify what actually caused the issue. Recent commits that touched the affected code. Known issues in related components. Dependency changes that might be responsible. Your engineers get tickets with context, not mysteries.'
      },
      {
        type: 'heading',
        text: 'Capacity-Based Smart Assignment'
      },
      {
        type: 'paragraph',
        text: 'Tickets route to engineers based on three factors: expertise with the affected codebase, current workload and capacity, and availability. No more random distribution. No more overwhelming your senior engineers while juniors sit idle. No more assigning backend issues to front-end specialists.'
      },
      {
        type: 'heading',
        text: 'Automated DevOps Integration'
      },
      {
        type: 'paragraph',
        text: 'Critical bugs are automatically logged in Azure DevOps or Jira with complete context. Code references pointing to likely problem areas. Stack traces and error logs attached. Suggested priority based on impact analysis. Your sprint planning has the information it needs without manual data entry.'
      },
      {
        type: 'heading',
        text: 'Proactive Stakeholder Communication'
      },
      {
        type: 'paragraph',
        text: 'Product leads receive automatic notifications when their microservices experience issues. They get impact assessment, affected users, and current status without having to ask. Everyone stays informed without meetings or status update requests.'
      },
      {
        type: 'heading',
        text: 'Why Torvi Works When Other Solutions Don\'t'
      },
      {
        type: 'paragraph',
        text: 'Traditional ticketing systems are just databases. Zendesk and ServiceNow track tickets. Torvi actually understands your code and makes intelligent routing decisions based on what\'s broken and who can fix it fastest.'
      },
      {
        type: 'paragraph',
        text: 'Basic automation tools route on keywords. Zapier can send tickets to different queues based on subject lines. Torvi analyzes your actual codebase to identify root causes and assigns based on engineer capacity, not arbitrary rules.'
      },
      {
        type: 'paragraph',
        text: 'AI chatbots answer user questions. Chatbots help end users find answers. Torvi automates the entire incident resolution workflow for your engineering team, from ticket intake through code analysis to assignment and stakeholder communication.'
      },
      {
        type: 'heading',
        text: 'The Business Impact'
      },
      {
        type: 'paragraph',
        text: 'Your engineering team is expensive. Every hour spent on support tickets instead of building product is revenue you\'re not capturing.'
      },
      {
        type: 'paragraph',
        text: '40% more engineering time for feature development. When triage and routing happen automatically, your engineers focus on what you hired them for. A team of 20 engineers gains 8 full-time equivalents of capacity.'
      },
      {
        type: 'paragraph',
        text: '70% reduction in mis-assigned tickets. Intelligent routing based on code ownership and current capacity means tickets reach the right engineer the first time. No more bouncing between teams. No more wasted hours from engineers who lack context.'
      },
      {
        type: 'paragraph',
        text: '3x faster incident triage. What used to take 2 hours of investigation now takes 20 minutes. Torvi provides root cause analysis, relevant code context, and assignment recommendation before your engineer even opens the ticket.'
      },
      {
        type: 'heading',
        text: 'How Torvi Orchestrates Your IT Support'
      },
      {
        type: 'paragraph',
        text: 'Torvi connects the systems you already use. No rip-and-replace. No forcing your team to change tools.'
      },
      {
        type: 'paragraph',
        text: 'Zendesk ingestion. Monitors your support queue in real-time, analyzing every new ticket as it arrives.'
      },
      {
        type: 'paragraph',
        text: 'GitHub analysis. Reads your repositories to understand code structure, recent changes, and likely problem areas. Your code stays in GitHub. Torvi just reads it to provide context.'
      },
      {
        type: 'paragraph',
        text: 'Azure DevOps or Jira integration. Automatically creates bugs with complete context, assigns to appropriate sprint, and updates status as resolution progresses.'
      },
      {
        type: 'paragraph',
        text: 'Slack notifications. Keeps engineers and stakeholders informed without email overload. Critical issues trigger immediate alerts. Routine updates happen in designated channels.'
      },
      {
        type: 'heading',
        text: 'Your Code Stays Private'
      },
      {
        type: 'paragraph',
        text: 'Torvi uses RAG technology to analyze your repositories without sending your code to external AI providers. Your intellectual property stays in your infrastructure. The AI learns your codebase patterns without your code ever leaving your environment.'
      },
      {
        type: 'paragraph',
        text: 'This isn\'t just about security. It\'s about compliance, competitive advantage, and control. Your code is your business. It should never be training data for someone else\'s AI.'
      },
      {
        type: 'heading',
        text: 'Built for Engineering Teams That Ship'
      },
      {
        type: 'paragraph',
        text: 'Torvi works for any engineering organization tired of support tickets consuming development time.'
      },
      {
        type: 'paragraph',
        text: 'Product companies with 10 to 500 engineers where support interruptions kill velocity. Your roadmap is ambitious. Your team is talented. Support tickets shouldn\'t be the bottleneck.'
      },
      {
        type: 'paragraph',
        text: 'DevOps teams managing complex microservices architectures where incidents require deep code knowledge to resolve. When something breaks at 2 AM, you need the right engineer paged immediately, not after three handoffs.'
      },
      {
        type: 'paragraph',
        text: 'Platform teams supporting internal engineering organizations where ticket volume scales with company growth. As you add teams, support load multiplies. Torvi scales your support capacity without scaling headcount.'
      },
      {
        type: 'heading',
        text: 'Start Giving Your Engineers Their Time Back'
      },
      {
        type: 'paragraph',
        text: 'Every day you wait, your engineers spend another afternoon triaging tickets instead of building product. Every misrouted issue costs another hour of wasted effort.'
      },
      {
        type: 'paragraph',
        text: 'Torvi integrates with your existing tools. Your team keeps using Zendesk, GitHub, and Jira. They just stop wasting time on manual triage, code archaeology, and ticket routing.'
      },
      {
        type: 'paragraph',
        text: 'Implementation takes days, not months. Results show up immediately. Your first properly routed ticket with complete code context will make the value obvious.'
      }
    ]
  },
  'fluent-by-design': {
    id: 'fluent-by-design',
    image: '/bb1.jpg',
    imageStyle: 'normal',
    tag: 'Product',
    title: 'Fluent by design',
    subtitle: 'Building interfaces that feel natural',
    date: 'NOV 18, 2025',
    content: [
      {
        type: 'paragraph',
        text: 'Great software should feel invisible. It should anticipate your needs, adapt to your workflow, and get out of your way. This philosophy drives everything we build at Torvi—creating experiences that are fluent by design.'
      },
      {
        type: 'heading',
        text: 'Design Philosophy'
      },
      {
        type: 'paragraph',
        text: 'We believe that the best interfaces are the ones you do not notice. They guide you naturally through complex tasks, provide feedback exactly when needed, and eliminate friction at every step. Our design team obsesses over every interaction, every animation, and every pixel.'
      },
      {
        type: 'heading',
        text: 'The Details Matter'
      },
      {
        type: 'paragraph',
        text: 'From the subtle hover states to the smooth transitions between views, every element of Torvi has been crafted with intention. We study how people work, identify points of friction, and design solutions that feel like second nature.'
      },
      {
        type: 'paragraph',
        text: 'The result is software that adapts to you—not the other way around. Whether you are a power user or just getting started, Torvi meets you where you are and helps you accomplish more with less effort.'
      }
    ]
  },
  'introducing-intents-tags': {
    id: 'introducing-intents-tags',
    image: '/bb2.jpg',
    imageStyle: 'mirror',
    tag: 'Updates',
    title: 'Introducing Intents & Tags',
    subtitle: 'Organize and automate with intelligence',
    date: 'OCT 22, 2025',
    content: [
      {
        type: 'paragraph',
        text: 'Managing complex workflows requires powerful organization tools. Today, we are introducing Intents & Tags—a new way to categorize, prioritize, and automate your work with unprecedented flexibility and intelligence.'
      },
      {
        type: 'heading',
        text: 'What are Intents?'
      },
      {
        type: 'paragraph',
        text: 'Intents capture the purpose behind every action. Rather than simply tracking what happened, Intents help your AI agents understand why something matters and what should happen next. This contextual awareness enables smarter automation and more relevant recommendations.'
      },
      {
        type: 'heading',
        text: 'The Power of Tags'
      },
      {
        type: 'paragraph',
        text: 'Tags provide flexible categorization that adapts to your needs. Create custom taxonomies, apply multiple tags to any item, and build dynamic views that surface exactly what you need. Combined with Intents, Tags become the foundation for sophisticated automation rules.'
      },
      {
        type: 'paragraph',
        text: 'Together, Intents & Tags give you the building blocks to create workflows that truly understand your business logic and execute with precision.'
      }
    ]
  },
  'ai-powered-analytics': {
    id: 'ai-powered-analytics',
    image: '/bb1.jpg',
    imageStyle: 'mirror',
    tag: 'Insights',
    title: 'AI-Powered Analytics',
    subtitle: 'Transform data into decisions',
    date: 'OCT 10, 2025',
    content: [
      {
        type: 'paragraph',
        text: 'The future of analytics is not about more dashboards or bigger data warehouses. It is about intelligence that works for you—surfacing insights automatically, predicting trends before they happen, and recommending actions that drive results.'
      },
      {
        type: 'heading',
        text: 'Beyond Traditional BI'
      },
      {
        type: 'paragraph',
        text: 'Traditional business intelligence tools require you to know what questions to ask. Our AI-powered analytics flips this paradigm—continuously analyzing your data to discover insights you did not know existed. No queries required, no technical expertise needed.'
      },
      {
        type: 'heading',
        text: 'Predictive Intelligence'
      },
      {
        type: 'paragraph',
        text: 'Historical data tells you what happened. Predictive analytics tells you what will happen. Torvi combines both, giving you a complete picture of your business—past, present, and future. Make decisions with confidence, backed by AI that learns and improves over time.'
      },
      {
        type: 'paragraph',
        text: 'From demand forecasting to churn prediction, our models adapt to your specific business context and deliver actionable predictions you can trust.'
      }
    ]
  },
  'workflow-automation': {
    id: 'workflow-automation',
    image: '/bb2.jpg',
    imageStyle: 'zoom',
    tag: 'Product',
    title: 'Workflow Automation',
    subtitle: 'Let AI handle the repetitive work',
    date: 'SEP 28, 2025',
    content: [
      {
        type: 'paragraph',
        text: 'Every organization has processes that consume valuable time and energy. Manual data entry, routine approvals, repetitive communications—these tasks add up to hours of lost productivity every week. Workflow Automation changes everything.'
      },
      {
        type: 'heading',
        text: 'Intelligent Automation'
      },
      {
        type: 'paragraph',
        text: 'Unlike simple rule-based automation, Torvi workflows understand context. Our AI agents can handle exceptions, make judgment calls, and escalate appropriately—just like a skilled team member would. Set up once, and let the system handle the rest.'
      },
      {
        type: 'heading',
        text: 'Connect Everything'
      },
      {
        type: 'paragraph',
        text: 'Your tools should work together seamlessly. Torvi integrates with hundreds of applications, enabling workflows that span your entire tech stack. Trigger actions in one system based on events in another, all orchestrated by intelligent agents that never sleep.'
      },
      {
        type: 'paragraph',
        text: 'From simple task automation to complex multi-step processes, Workflow Automation gives you the power to reclaim your time and focus on what truly matters.'
      }
    ]
  },
  'why-torvi': {
    id: 'why-torvi',
    image: '/bb1.jpg',
    imageStyle: 'normal',
    tag: 'Announcement',
    title: 'Your AI Agents. Your Data. Your Control.',
    subtitle: 'Why Torvi is the AI Agent Platform Built for Privacy, Power, and Results',
    date: 'DEC 15, 2025',
    metaTitle: 'Your AI Agents. Your Data. Your Control. | Why Choose Torvi',
    metaDescription: 'Discover why teams choose Torvi to build intelligent AI agents. No coding required, complete data privacy with RAG, and enterprise automation that actually works.',
    keywords: {
      primary: 'AI agent platform',
      secondary: ['no-code AI agents', 'private AI training', 'RAG technology']
    },
    content: [
      {
        type: 'paragraph',
        text: 'Most AI platforms ask you to compromise. You can have powerful AI agents, but only if you send your data to third parties. You can automate workflows, but only if you learn to code. You can use pre-built solutions, but only if they happen to fit your exact needs.'
      },
      {
        type: 'paragraph',
        text: 'Torvi refuses these compromises. We built an AI agent platform where you don\'t choose between power and privacy, capability and ease of use, or flexibility and simplicity. Here\'s why thousands of teams are choosing Torvi to build their AI-powered future.'
      },
      {
        type: 'heading',
        text: 'Build AI Agents Without Writing Code'
      },
      {
        type: 'paragraph',
        text: 'You shouldn\'t need a computer science degree to leverage AI. Torvi\'s natural language interface lets you describe what you want to automate in plain English, and the platform builds it for you.'
      },
      {
        type: 'paragraph',
        text: 'Want an agent that monitors customer emails and routes urgent issues to the right team member? Just tell Torvi what you need. Want to automate weekly reporting by pulling data from multiple sources? Describe the report, and Torvi creates the workflow.'
      },
      {
        type: 'paragraph',
        text: 'This isn\'t simplified automation with limited capabilities. It\'s full-powered AI agent creation made accessible to everyone. Whether you\'re a marketer, operations manager, or executive, you can build sophisticated agents without writing a single line of code.'
      },
      {
        type: 'heading',
        text: 'Your Data Stays Private with RAG Technology'
      },
      {
        type: 'paragraph',
        text: 'Data privacy isn\'t optional. It\'s fundamental to how Torvi works.'
      },
      {
        type: 'paragraph',
        text: 'Most AI platforms require uploading your data to their servers for training. Your proprietary business knowledge, customer information, and confidential documents leave your control. Torvi uses RAG technology that changes this equation entirely.'
      },
      {
        type: 'paragraph',
        text: 'RAG, or Retrieval-Augmented Generation, lets you train AI agents on your documents and data while keeping everything within your environment. The AI learns from your information without that information ever leaving your infrastructure. You get agents that understand your business context without compromising data security or violating compliance requirements.'
      },
      {
        type: 'paragraph',
        text: 'This matters for regulated industries navigating HIPAA, GDPR, or SOC 2 requirements. It matters for businesses with trade secrets and competitive advantages. Your data is your business. It should never become training data for someone else\'s AI.'
      },
      {
        type: 'heading',
        text: 'Connect Everything Your Team Already Uses'
      },
      {
        type: 'paragraph',
        text: 'Your business runs on dozens of tools. Email, calendars, CRM systems, project management software, cloud storage, databases, communication platforms. Torvi connects them all.'
      },
      {
        type: 'paragraph',
        text: 'Our extensive connector library integrates with the platforms you already use, from Gmail and Slack to Salesforce and Google Drive. Your agents can read data from one system, make intelligent decisions, and take actions across multiple platforms seamlessly.'
      },
      {
        type: 'paragraph',
        text: 'This breaks down silos between your tools. Information flows automatically where it needs to go. Your agents become the connective tissue that makes your entire tech stack work together intelligently.'
      },
      {
        type: 'heading',
        text: 'Intelligent Agents, Not Simple Scripts'
      },
      {
        type: 'paragraph',
        text: 'Traditional automation follows rigid rules. When conditions don\'t match predetermined logic, it breaks or requires constant human intervention.'
      },
      {
        type: 'paragraph',
        text: 'Torvi\'s AI agents are fundamentally different. They understand context, make decisions based on meaning rather than keywords, adapt to new situations, and handle unexpected scenarios gracefully. When a customer email doesn\'t fit a template response, your agent understands the question and crafts an appropriate answer. When data patterns shift, your analytics agent recognizes the change and alerts you to what matters.'
      },
      {
        type: 'paragraph',
        text: 'This is automation that thinks, not just executes. It\'s the difference between a rigid checklist and an intelligent assistant.'
      },
      {
        type: 'heading',
        text: 'Multi-Agent Teams That Work Together'
      },
      {
        type: 'paragraph',
        text: 'Complex business processes require multiple specialized capabilities. Torvi lets you create teams of agents that collaborate to accomplish sophisticated tasks.'
      },
      {
        type: 'paragraph',
        text: 'One agent might monitor incoming data, another analyzes patterns and generates insights, a third takes actions based on those insights, and a fourth communicates results to stakeholders. Each agent specializes in what it does best, coordinating seamlessly to handle workflows that single tools cannot manage.'
      },
      {
        type: 'paragraph',
        text: 'This modular approach makes automation maintainable and flexible. When business needs change, you modify or replace individual agents rather than rebuilding entire systems.'
      },
      {
        type: 'heading',
        text: 'Real Results That Matter'
      },
      {
        type: 'paragraph',
        text: 'Torvi delivers measurable impact across industries and use cases.'
      },
      {
        type: 'paragraph',
        text: 'Customer service teams reduce response times from hours to minutes while handling three times normal volume without additional headcount. Sales organizations increase pipeline by 30 percent when AI agents qualify leads instantly and ensure no opportunity falls through cracks. Content creators publish daily instead of twice weekly using agents that draft content requiring only editing before publication. Operations teams eliminate manual data entry entirely, reclaiming dozens of hours weekly for strategic initiatives.'
      },
      {
        type: 'paragraph',
        text: 'These aren\'t incremental improvements. They\'re transformative changes in how work gets done, enabled by AI agents that are accessible, powerful, and private.'
      },
      {
        type: 'heading',
        text: 'Built for Teams of Every Size'
      },
      {
        type: 'paragraph',
        text: 'Whether you\'re a solo entrepreneur, startup team, growing business, or enterprise organization, Torvi meets you where you are.'
      },
      {
        type: 'paragraph',
        text: 'Small teams need solutions that work immediately without extensive setup. Torvi\'s natural language interface and pre-built connectors mean you deploy your first agent in minutes. Pricing scales with usage, so you\'re not paying for enterprise features you don\'t need.'
      },
      {
        type: 'paragraph',
        text: 'Growing businesses need automation that scales with them. As you add team members, they create their own agents for specific needs. As processes formalize, you build more robust workflows. The platform adapts to your growth trajectory.'
      },
      {
        type: 'paragraph',
        text: 'Enterprises need security, compliance, scalability, and deployment across departments and geographies. Torvi delivers all of this while maintaining simplicity that makes AI accessible to business users, not just technical teams. IT maintains governance while departments solve their own automation challenges.'
      },
      {
        type: 'heading',
        text: 'Why This Matters Now'
      },
      {
        type: 'paragraph',
        text: 'AI isn\'t the future anymore. It\'s the present. Organizations leveraging AI effectively are pulling ahead of those that don\'t, and the gap grows wider every day.'
      },
      {
        type: 'paragraph',
        text: 'Most businesses face a dilemma. They recognize AI\'s importance but lack resources, expertise, or budget to implement it effectively. Hiring AI specialists is expensive. Building custom solutions takes months or years. Using consumer AI tools means compromising on privacy and security.'
      },
      {
        type: 'paragraph',
        text: 'Torvi solves this dilemma. You get enterprise-grade AI capabilities without enterprise complexity or cost. You maintain data privacy without sacrificing functionality. You empower your team to build solutions without becoming programmers.'
      },
      {
        type: 'heading',
        text: 'Your Competitive Advantage Starts Here'
      },
      {
        type: 'paragraph',
        text: 'The organizations thriving with AI aren\'t necessarily the biggest or best-funded. They\'re the ones that found ways to make AI accessible across their teams, iterate quickly, and solve real problems rather than chase technology for its own sake.'
      },
      {
        type: 'paragraph',
        text: 'That\'s what Torvi enables. Practical AI that delivers real value, accessible to everyone who needs it, private and secure by design.'
      },
      {
        type: 'paragraph',
        text: 'Your AI agents. Your data. Your control. Your competitive advantage.'
      }
    ]
  }
}

// Ordered list of blog slugs for navigation
const blogOrder = [
  'why-torvi',
  'it-ticket-automation',
  'fluent-by-design',
  'introducing-intents-tags',
  'ai-powered-analytics',
  'workflow-automation'
]

const BlogDetail = () => {
  const { slug } = useParams()
  const blog = blogData[slug]

  // Get previous and next blogs
  const currentIndex = blogOrder.indexOf(slug)
  const prevSlug = currentIndex > 0 ? blogOrder[currentIndex - 1] : blogOrder[blogOrder.length - 1]
  const nextSlug = currentIndex < blogOrder.length - 1 ? blogOrder[currentIndex + 1] : blogOrder[0]
  const prevBlog = blogData[prevSlug]
  const nextBlog = blogData[nextSlug]

  // Extract headings for table of contents
  const tableOfContents = blog ? blog.content
    .filter(block => block.type === 'heading')
    .map((block, index) => ({
      id: `heading-${index}`,
      text: block.text
    })) : []

  const scrollToHeading = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  if (!blog) {
    return (
      <div className="blog-detail-page">
        <div className="blog-detail-not-found">
          <h1>Blog not found</h1>
          <Link to="/blog">Back to Blogs</Link>
        </div>
      </div>
    )
  }

  // Track heading index for IDs
  let headingIndex = 0

  return (
    <div className="blog-detail-page">
      {/* Hero Section */}
      <section className="blog-detail-hero">
        <div className="blog-detail-hero-container">
          <span className="blog-detail-tag">{blog.tag}</span>
          <h1 className="blog-detail-title">{blog.title}</h1>
          <span className="blog-detail-date">{blog.date}</span>
        </div>
      </section>

      {/* Featured Image */}
      <section className="blog-detail-image-section">
        <div className="blog-detail-image-container">
          <div className="blog-detail-image-wrapper">
            <img
              src={blog.image}
              alt={blog.title}
              className={`blog-detail-image ${blog.imageStyle}`}
            />
            <div className="blog-detail-watermark">
              <span className="watermark-believe">believe</span>
              <span className="watermark-torvi">torvi</span>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="blog-detail-content">
        <div className="blog-detail-content-container">
          <div className="blog-detail-sidebar">
            <h2 className="blog-detail-sidebar-title">Contents</h2>
            <ul className="blog-detail-toc">
              {tableOfContents.map((item, index) => (
                <li key={index} className="blog-detail-toc-item">
                  <button onClick={() => scrollToHeading(item.id)}>
                    {item.text}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div className="blog-detail-body">
            {blog.content.map((block, index) => {
              if (block.type === 'heading') {
                const currentHeadingIndex = headingIndex
                headingIndex++
                return (
                  <h3
                    key={index}
                    id={`heading-${currentHeadingIndex}`}
                    className="blog-detail-heading"
                  >
                    {block.text}
                  </h3>
                )
              }
              return <p key={index} className="blog-detail-paragraph">{block.text}</p>
            })}
          </div>
        </div>
      </section>

      {/* Blog Navigation */}
      <section className="blog-detail-navigation">
        <div className="blog-detail-navigation-line"></div>
        <div className="blog-detail-navigation-container">
          <Link to={`/blog/${prevSlug}`} className="blog-nav-card blog-nav-prev">
            <div className="blog-nav-image-wrapper">
              <img
                src={prevBlog.image}
                alt={prevBlog.title}
                className={`blog-nav-image ${prevBlog.imageStyle}`}
              />
              <span className="blog-nav-hover-text">Learn more</span>
            </div>
            <div className="blog-nav-content">
              <span className="blog-nav-label">Previous</span>
              <h4 className="blog-nav-title">{prevBlog.title}</h4>
            </div>
          </Link>

          <Link to={`/blog/${nextSlug}`} className="blog-nav-card blog-nav-next">
            <div className="blog-nav-content">
              <span className="blog-nav-label">Next</span>
              <h4 className="blog-nav-title">{nextBlog.title}</h4>
            </div>
            <div className="blog-nav-image-wrapper">
              <img
                src={nextBlog.image}
                alt={nextBlog.title}
                className={`blog-nav-image ${nextBlog.imageStyle}`}
              />
              <span className="blog-nav-hover-text">Learn more</span>
            </div>
          </Link>
        </div>
      </section>

      {/* CTA Section */}
      <CTA />
    </div>
  )
}

export default BlogDetail

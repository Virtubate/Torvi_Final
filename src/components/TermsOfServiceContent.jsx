import React, { useState, useEffect } from 'react'
import './TermsOfServiceContent.css'

const TermsOfServiceContent = () => {
  const [activeSection, setActiveSection] = useState('interpretation')

  const sections = [
    { id: 'interpretation', title: 'Interpretation and Definitions' },
    { id: 'acknowledgment', title: 'Acknowledgment' },
    { id: 'intellectual-property', title: 'Intellectual Property' },
    { id: 'links', title: 'Links to Other Websites' },
    { id: 'termination', title: 'Termination' },
    { id: 'limitation', title: 'Limitation of Liability' },
    { id: 'disclaimer', title: '"AS IS" and "AS AVAILABLE" Disclaimer' },
    { id: 'governing-law', title: 'Governing Law' },
    { id: 'disputes', title: 'Disputes Resolution' },
    { id: 'eu-users', title: 'For European Union (EU) Users' },
    { id: 'us-compliance', title: 'United States Legal Compliance' },
    { id: 'severability', title: 'Severability and Waiver' },
    { id: 'translation', title: 'Translation Interpretation' },
    { id: 'changes', title: 'Changes to These Terms and Conditions' },
    { id: 'contact', title: 'Contact Us' }
  ]

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const headerOffset = 120
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
  }

  useEffect(() => {
    const handleScroll = () => {
      const sectionElements = sections.map(s => ({
        id: s.id,
        element: document.getElementById(s.id)
      })).filter(s => s.element)

      const scrollPosition = window.scrollY + 150

      for (let i = sectionElements.length - 1; i >= 0; i--) {
        const { id, element } = sectionElements[i]
        if (element.offsetTop <= scrollPosition) {
          setActiveSection(id)
          break
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <section className="tos-section">
        <div className="tos-container">
          {/* Left Side - Scrollable Content */}
          <div className="tos-content-left">
            <h1 className="tos-main-title">Terms and Conditions</h1>
            <p className="tos-company-info">Torvi AI Inc.<br/>Last Updated: December 2024</p>

            {/* Interpretation and Definitions */}
            <div id="interpretation" className="tos-content-section">
              <h2>Interpretation and Definitions</h2>

              <h3>Interpretation</h3>
              <p>
                The words of which the initial letter is capitalized have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.
              </p>

              <h3>Definitions</h3>
              <p>For the purposes of these Terms and Conditions:</p>
              <ul>
                <li><strong>Affiliate</strong> means an entity that controls, is controlled by, or is under common control with a party, where "control" means ownership of 50% or more of the shares, equity interest, or other securities entitled to vote for election of directors or other managing authority.</li>
                <li><strong>Account</strong> means a unique account created for You to access our Service or parts of our Service.</li>
                <li><strong>AI Agent</strong> means any artificial intelligence agent, automation, or workflow created through the Platform using natural language prompts or other means.</li>
                <li><strong>Company</strong> (referred to as either "the Company", "We", "Us" or "Our" in this Agreement) refers to Torvi AI Inc., 7830 Stalmer St, San Diego, CA 92111.</li>
                <li><strong>Country</strong> refers to California, United States.</li>
                <li><strong>Device</strong> means any device that can access the Service such as a computer, a cellphone, or a digital tablet.</li>
                <li><strong>Feedback</strong> means any suggestions, comments, ideas, improvements, or other feedback You provide regarding the Service.</li>
                <li><strong>Platform</strong> refers to the Torvi AI automation orchestration platform that allows users to connect applications, create workflows, and build AI agents through natural language prompts.</li>
                <li><strong>Service</strong> refers to the Platform and Website.</li>
                <li><strong>Subscription</strong> means the paid subscription plan that provides access to the Service's features and capabilities.</li>
                <li><strong>Terms and Conditions</strong> (also referred to as "Terms") mean these Terms and Conditions that form the entire agreement between You and the Company regarding the use of the Service.</li>
                <li><strong>Third-Party Services</strong> means any applications, platforms, or services that You connect to through our Platform as part of Your workflows and automations.</li>
                <li><strong>User Content</strong> means any data, information, workflows, prompts, configurations, or other content that You input, upload, or create through the Service.</li>
                <li><strong>Website</strong> refers to Torvi AI, accessible from https://torvi.ai.</li>
                <li><strong>You</strong> means the individual accessing or using the Service, or the company, or other legal entity on behalf of which such individual is accessing or using the Service, as applicable.</li>
              </ul>
            </div>

            {/* Acknowledgment */}
            <div id="acknowledgment" className="tos-content-section">
              <h2>Acknowledgment</h2>
              <p>
                These are the Terms and Conditions governing the use of this Service and the agreement that operates between You and the Company. These Terms and Conditions set out the rights and obligations of all users regarding the use of the Service.
              </p>
              <p>
                Your access to and use of the Service is conditioned on Your acceptance of and compliance with these Terms and Conditions. These Terms and Conditions apply to all visitors, users, and others who access or use the Service.
              </p>
              <p>
                By accessing or using the Service You agree to be bound by these Terms and Conditions. If You disagree with any part of these Terms and Conditions, then You may not access the Service.
              </p>
              <p>
                You represent that you are over the age of 18. The Company does not permit those under 18 to use the Service.
              </p>
              <p>
                Your access to and use of the Service is also conditioned on Your acceptance of and compliance with the Privacy Policy of the Company. Our Privacy Policy describes Our policies and procedures on the collection, use, and disclosure of Your personal information when You use the Application or the Website and tells You about Your privacy rights and how the law protects You. Please read Our Privacy Policy carefully before using Our Service.
              </p>
            </div>

            {/* User Accounts */}
            <div className="tos-content-section">
              <h2>User Accounts</h2>
              <p>
                When You create an account with Us, You must provide Us information that is accurate, complete, and current at all times. Failure to do so constitutes a breach of the Terms, which may result in immediate termination of Your account on Our Service.
              </p>
              <p>
                You are responsible for safeguarding the password that You use to access the Service and for any activities or actions under Your password, whether Your password is with Our Service or a Third-Party Social Media Service.
              </p>
              <p>
                You agree not to disclose Your password to any third party. You must notify Us immediately upon becoming aware of any breach of security or unauthorized use of Your account.
              </p>
              <p>
                You may not use as a username the name of another person or entity or that is not lawfully available for use, a name or trademark that is subject to any rights of another person or entity other than You without appropriate authorization, or a name that is otherwise offensive, vulgar, or obscene.
              </p>
            </div>

            {/* Subscriptions and Payments */}
            <div className="tos-content-section">
              <h2>Subscriptions and Payments</h2>

              <h3>Subscription Terms</h3>
              <p>
                Some parts of the Service are available only with a paid Subscription. You will be billed in advance on a recurring and periodic basis (such as monthly or annually), depending on the type of Subscription plan You select.
              </p>
              <p>
                At the end of each period, Your Subscription will automatically renew under the same conditions unless You cancel it or the Company cancels it.
              </p>

              <h3>Billing</h3>
              <p>
                You shall provide the Company with accurate and complete billing information including full name, address, state, zip code, telephone number, and valid payment method information.
              </p>
              <p>
                Should automatic billing fail to occur for any reason, the Company will issue an electronic invoice indicating that You must proceed manually, within a certain deadline date, with the full payment corresponding to the billing period as indicated on the invoice.
              </p>

              <h3>Subscription Cancellation</h3>
              <p>
                You may cancel Your Subscription renewal either through Your account settings page or by contacting the Company. You will not receive a refund for the fees You already paid for Your current Subscription period and You will be able to access the Service until the end of Your current Subscription period.
              </p>

              <h3>Fee Changes</h3>
              <p>
                The Company, in its sole discretion and at any time, may modify the Subscription fees. Any Subscription fee change will become effective at the end of the then-current Subscription period.
              </p>
              <p>
                The Company will provide You with reasonable prior notice of any change in Subscription fees to give You an opportunity to terminate Your Subscription before such change becomes effective.
              </p>

              <h3>Refunds</h3>
              <p>
                Except when required by law, paid Subscription fees are non-refundable. Certain refund requests for Subscriptions may be considered by the Company on a case-by-case basis and granted at the sole discretion of the Company.
              </p>
            </div>

            {/* User Content and Conduct */}
            <div className="tos-content-section">
              <h2>User Content and Conduct</h2>

              <h3>Your User Content</h3>
              <p>
                Our Service allows You to create workflows, AI agents, and automations. You are responsible for the User Content that You create, upload, or process through the Service, including its legality, reliability, and appropriateness.
              </p>
              <p>
                By creating User Content on the Service, You grant Us the right and license to use, modify, perform, display, reproduce, and distribute such User Content on and through the Service solely for the purpose of providing and improving the Service.
              </p>

              <h3>Content Restrictions</h3>
              <p>You agree not to use the Service to:</p>
              <ul>
                <li>Create workflows or AI agents that violate any applicable law or regulation</li>
                <li>Process personal data without proper consent or legal basis</li>
                <li>Engage in fraudulent, deceptive, or harmful activities</li>
                <li>Harass, abuse, or harm another person or entity</li>
                <li>Impersonate any person or entity, or falsely state or otherwise misrepresent Your affiliation</li>
                <li>Interfere with or disrupt the Service or servers or networks connected to the Service</li>
                <li>Attempt to gain unauthorized access to any portion of the Service or any other systems or networks</li>
                <li>Use the Service for any purpose that is illegal or prohibited by these Terms</li>
                <li>Create AI agents that generate spam, phishing content, or malicious communications</li>
                <li>Violate the terms of service of any Third-Party Services connected to the Platform</li>
              </ul>

              <h3>Third-Party Service Connections</h3>
              <p>
                When You connect Third-Party Services to our Platform, You are solely responsible for ensuring You have proper authorization and that Your use complies with those services' terms of service. The Company is not responsible for any issues arising from Your use of Third-Party Services through our Platform.
              </p>
            </div>

            {/* Intellectual Property */}
            <div id="intellectual-property" className="tos-content-section">
              <h2>Intellectual Property</h2>
              <p>
                The Service and its original content (excluding User Content provided by You or other users), features, and functionality are and will remain the exclusive property of the Company and its licensors.
              </p>
              <p>
                The Service is protected by copyright, trademark, and other laws of both the Country and foreign countries.
              </p>
              <p>
                Our trademarks and trade dress may not be used in connection with any product or service without the prior written consent of the Company.
              </p>

              <h3>Your User Content</h3>
              <p>
                You retain all rights to Your User Content. By using the Service, You grant the Company a non-exclusive, worldwide, royalty-free license to use, reproduce, modify, and display Your User Content solely for the purpose of providing and improving the Service.
              </p>

              <h3>AI-Generated Content</h3>
              <p>
                Content generated by AI agents or workflows You create through the Service may be subject to additional intellectual property considerations. You are responsible for ensuring that any AI-generated content does not infringe on third-party intellectual property rights.
              </p>
            </div>

            {/* Feedback */}
            <div className="tos-content-section">
              <h2>Feedback</h2>
              <p>
                If You provide the Company with any Feedback, You hereby assign to the Company all rights in such Feedback and agree that the Company shall have the right to use and fully exploit such Feedback and related information in any manner it deems appropriate.
              </p>
              <p>
                The Company will treat any Feedback You provide as non-confidential and non-proprietary. You agree that You will not submit to the Company any information or ideas that You consider to be confidential or proprietary.
              </p>
            </div>

            {/* Links to Other Websites */}
            <div id="links" className="tos-content-section">
              <h2>Links to Other Websites</h2>
              <p>
                Our Service may contain links to third-party web sites or services that are not owned or controlled by the Company.
              </p>
              <p>
                The Company has no control over, and assumes no responsibility for, the content, privacy policies, or practices of any third party web sites or services. You further acknowledge and agree that the Company shall not be responsible or liable, directly or indirectly, for any damage or loss caused or alleged to be caused by or in connection with the use of or reliance on any such content, goods, or services available on or through any such web sites or services.
              </p>
              <p>
                We strongly advise You to read the terms and conditions and privacy policies of any third-party web sites or services that You visit.
              </p>
            </div>

            {/* Third-Party Services and Integrations */}
            <div className="tos-content-section">
              <h2>Third-Party Services and Integrations</h2>
              <p>
                The Platform allows You to connect and integrate with Third-Party Services. Your use of Third-Party Services is subject to the terms and conditions and privacy policies of those services.
              </p>
              <p>
                The Company does not endorse, warrant, or guarantee the functionality, reliability, or security of any Third-Party Services. We are not responsible for any data loss, security breaches, or other issues arising from Your use of Third-Party Services.
              </p>
              <p>
                You are solely responsible for maintaining proper authentication credentials and permissions for any Third-Party Services You connect to the Platform.
              </p>
            </div>

            {/* Termination */}
            <div id="termination" className="tos-content-section">
              <h2>Termination</h2>
              <p>
                We may terminate or suspend Your Account immediately, without prior notice or liability, for any reason whatsoever, including without limitation if You breach these Terms and Conditions.
              </p>
              <p>
                Upon termination, Your right to use the Service will cease immediately. If You wish to terminate Your Account, You may simply discontinue using the Service or contact Us to request account deletion.
              </p>
              <p>
                All provisions of the Terms which by their nature should survive termination shall survive termination, including, without limitation, ownership provisions, warranty disclaimers, indemnity, and limitations of liability.
              </p>
            </div>

            {/* Limitation of Liability */}
            <div id="limitation" className="tos-content-section">
              <h2>Limitation of Liability</h2>
              <p>
                Notwithstanding any damages that You might incur, the entire liability of the Company and any of its suppliers under any provision of this Terms and Your exclusive remedy for all of the foregoing shall be limited to the amount actually paid by You through the Service during the twelve (12) months preceding the claim or 100 USD if You haven't purchased anything through the Service.
              </p>
              <p>
                To the maximum extent permitted by applicable law, in no event shall the Company or its suppliers be liable for any special, incidental, indirect, or consequential damages whatsoever (including, but not limited to, damages for loss of profits, loss of data or other information, for business interruption, for personal injury, loss of privacy arising out of or in any way related to the use of or inability to use the Service, third-party software and/or third-party hardware used with the Service, or otherwise in connection with any provision of this Terms), even if the Company or any supplier has been advised of the possibility of such damages and even if the remedy fails of its essential purpose.
              </p>
              <p>
                The Company is not liable for any damages, losses, or liabilities arising from:
              </p>
              <ul>
                <li>AI agents or workflows You create that produce errors, inaccuracies, or unintended results</li>
                <li>Actions taken by AI agents You create through the Platform</li>
                <li>Data loss or corruption resulting from Third-Party Service integrations</li>
                <li>Unauthorized access to Your account due to Your failure to maintain security</li>
                <li>Violations of Third-Party Service terms caused by Your workflows or AI agents</li>
              </ul>
              <p>
                Some states do not allow the exclusion of implied warranties or limitation of liability for incidental or consequential damages, which means that some of the above limitations may not apply. In these states, each party's liability will be limited to the greatest extent permitted by law.
              </p>
            </div>

            {/* "AS IS" and "AS AVAILABLE" Disclaimer */}
            <div id="disclaimer" className="tos-content-section">
              <h2>"AS IS" and "AS AVAILABLE" Disclaimer</h2>
              <p>
                The Service is provided to You "AS IS" and "AS AVAILABLE" and with all faults and defects without warranty of any kind. To the maximum extent permitted under applicable law, the Company, on its own behalf and on behalf of its Affiliates and its and their respective licensors and service providers, expressly disclaims all warranties, whether express, implied, statutory, or otherwise, with respect to the Service, including all implied warranties of merchantability, fitness for a particular purpose, title, and non-infringement, and warranties that may arise out of course of dealing, course of performance, usage, or trade practice.
              </p>
              <p>
                Without limitation to the foregoing, the Company provides no warranty or undertaking, and makes no representation of any kind that the Service will meet Your requirements, achieve any intended results, be compatible or work with any other software, applications, systems, or services, operate without interruption, meet any performance or reliability standards, or be error-free, or that any errors or defects can or will be corrected.
              </p>
              <p>
                Without limiting the foregoing, neither the Company nor any of the company's provider makes any representation or warranty of any kind, express or implied:
              </p>
              <ul>
                <li>As to the operation or availability of the Service, or the information, content, and materials or products included thereon</li>
                <li>That the Service will be uninterrupted or error-free</li>
                <li>As to the accuracy, reliability, or currency of any information or content provided through the Service</li>
                <li>That the Service, its servers, the content, or e-mails sent from or on behalf of the Company are free of viruses, scripts, trojan horses, worms, malware, timebombs, or other harmful components</li>
                <li>That AI agents or workflows created through the Platform will perform as expected or produce accurate results</li>
              </ul>
              <p>
                Some jurisdictions do not allow the exclusion of certain types of warranties or limitations on applicable statutory rights of a consumer, so some or all of the above exclusions and limitations may not apply to You. But in such a case, the exclusions and limitations set forth in this section shall be applied to the greatest extent enforceable under applicable law.
              </p>
            </div>

            {/* Indemnification */}
            <div className="tos-content-section">
              <h2>Indemnification</h2>
              <p>
                You agree to defend, indemnify, and hold harmless the Company and its licensees, licensors, employees, contractors, agents, officers, and directors from and against any and all claims, damages, obligations, losses, liabilities, costs or debt, and expenses (including but not limited to attorney's fees) arising from:
              </p>
              <ul>
                <li>Your use of and access to the Service</li>
                <li>Your violation of any term of these Terms</li>
                <li>Your violation of any third-party right, including without limitation any copyright, property, or privacy right</li>
                <li>Any claim that Your User Content caused damage to a third party</li>
                <li>AI agents or workflows You create that violate any laws or third-party rights</li>
                <li>Your misuse of Third-Party Services connected through the Platform</li>
              </ul>
              <p>
                This defense and indemnification obligation will survive these Terms and Your use of the Service.
              </p>
            </div>

            {/* AI-Generated Content Disclaimer */}
            <div className="tos-content-section">
              <h2>AI-Generated Content Disclaimer</h2>
              <p>
                The Platform uses artificial intelligence to help You create workflows, AI agents, and automations. You acknowledge and agree that:
              </p>
              <ul>
                <li>AI-generated content may contain errors, inaccuracies, or biases</li>
                <li>You are solely responsible for reviewing and verifying any AI-generated content before use</li>
                <li>The Company does not guarantee the accuracy, completeness, or suitability of AI-generated content</li>
                <li>AI agents You create may produce unexpected or unintended results</li>
                <li>You are responsible for monitoring and supervising AI agents You deploy</li>
                <li>Communications generated by AI agents (calls, messages, emails) may not be perfect and should be reviewed</li>
              </ul>
              <p>
                The Company is not responsible for any decisions or actions You take based on AI-generated content or the actions of AI agents You create through the Platform.
              </p>
            </div>

            {/* Governing Law */}
            <div id="governing-law" className="tos-content-section">
              <h2>Governing Law</h2>
              <p>
                The laws of the Country, excluding its conflicts of law rules, shall govern this Terms and Your use of the Service. Your use of the Application may also be subject to other local, state, national, or international laws.
              </p>
            </div>

            {/* Disputes Resolution */}
            <div id="disputes" className="tos-content-section">
              <h2>Disputes Resolution</h2>
              <p>
                If You have any concern or dispute about the Service, You agree to first try to resolve the dispute informally by contacting the Company.
              </p>
              <p>
                Any disputes arising out of or relating to these Terms or the Service shall be resolved through binding arbitration in accordance with the rules of the American Arbitration Association. The arbitration shall take place in San Diego County, California.
              </p>
            </div>

            {/* For European Union (EU) Users */}
            <div id="eu-users" className="tos-content-section">
              <h2>For European Union (EU) Users</h2>
              <p>
                If You are a European Union consumer, you will benefit from any mandatory provisions of the law of the country in which You are resident.
              </p>
            </div>

            {/* United States Legal Compliance */}
            <div id="us-compliance" className="tos-content-section">
              <h2>United States Legal Compliance</h2>
              <p>
                You represent and warrant that (i) You are not located in a country that is subject to the United States government embargo, or that has been designated by the United States government as a "terrorist supporting" country, and (ii) You are not listed on any United States government list of prohibited or restricted parties.
              </p>
            </div>

            {/* Severability and Waiver */}
            <div id="severability" className="tos-content-section">
              <h2>Severability and Waiver</h2>

              <h3>Severability</h3>
              <p>
                If any provision of these Terms is held to be unenforceable or invalid, such provision will be changed and interpreted to accomplish the objectives of such provision to the greatest extent possible under applicable law and the remaining provisions will continue in full force and effect.
              </p>

              <h3>Waiver</h3>
              <p>
                Except as provided herein, the failure to exercise a right or to require performance of an obligation under these Terms shall not affect a party's ability to exercise such right or require such performance at any time thereafter nor shall the waiver of a breach constitute a waiver of any subsequent breach.
              </p>
            </div>

            {/* Translation Interpretation */}
            <div id="translation" className="tos-content-section">
              <h2>Translation Interpretation</h2>
              <p>
                These Terms and Conditions may have been translated if We have made them available to You on our Service. You agree that the original English text shall prevail in the case of a dispute.
              </p>
            </div>

            {/* Changes to These Terms and Conditions */}
            <div id="changes" className="tos-content-section">
              <h2>Changes to These Terms and Conditions</h2>
              <p>
                We reserve the right, at Our sole discretion, to modify or replace these Terms at any time. If a revision is material, We will make reasonable efforts to provide at least 30 days' notice prior to any new terms taking effect. What constitutes a material change will be determined at Our sole discretion.
              </p>
              <p>
                By continuing to access or use Our Service after those revisions become effective, You agree to be bound by the revised terms. If You do not agree to the new terms, in whole or in part, please stop using the website and the Service.
              </p>
            </div>

            {/* Contact Us */}
            <div id="contact" className="tos-content-section">
              <h2>Contact Us</h2>
              <p>If you have any questions about these Terms and Conditions, You can contact us:</p>
              <ul>
                <li>By email: <a href="mailto:support@torvi.ai">support@torvi.ai</a></li>
                <li>By mail: Torvi AI Inc., 7830 Stalmer St, San Diego, CA 92111</li>
              </ul>
            </div>
          </div>

          {/* Right Side - Sticky Contents Navigation */}
          <div className="tos-nav-right">
            <div className="tos-nav-sticky">
              <h3 className="tos-nav-title">Contents</h3>
              <nav className="tos-nav-links">
                {sections.map((section) => (
                  <button
                    key={section.id}
                    className={`tos-nav-link ${activeSection === section.id ? 'active' : ''}`}
                    onClick={() => scrollToSection(section.id)}
                  >
                    {section.title}
                  </button>
                ))}
              </nav>
            </div>
          </div>
        </div>
      </section>

      {/* Watermark Section */}
      <section className="tos-watermark-section">
        <div className="tos-watermark">torvi</div>
      </section>
    </>
  )
}

export default TermsOfServiceContent

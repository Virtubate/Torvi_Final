import React, { useState, useEffect } from 'react'
import './PrivacyPolicyContent.css'

const PrivacyPolicyContent = () => {
  const [activeSection, setActiveSection] = useState('introduction')

  const sections = [
    { id: 'introduction', title: 'Introduction' },
    { id: 'interpretation', title: 'Interpretation and Definitions' },
    { id: 'collecting-data', title: 'Collecting and Using Your Personal Data' },
    { id: 'gdpr', title: 'GDPR Privacy' },
    { id: 'ccpa', title: 'CCPA/CPRA Privacy Notice (California...)' },
    { id: 'children', title: "Children's Privacy" },
    { id: 'links', title: 'Links to Other Websites' },
    { id: 'changes', title: 'Changes to this Privacy Policy' },
    { id: 'ai-disclaimer', title: 'AI-Generated Communications...' },
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
      <section className="privacy-policy-section">
        <div className="privacy-policy-container">
          {/* Left Side - Scrollable Content */}
          <div className="privacy-content-left">
            <h1 className="privacy-main-title">Privacy Policy</h1>
            <p className="privacy-company-info">Torvi AI Inc.<br/>Last Updated: December 2024</p>

            {/* Introduction */}
            <div id="introduction" className="privacy-content-section">
              <h2>Introduction</h2>
              <p>
                This Privacy Policy describes our policies and procedures on the collection, use, and disclosure of your information when you use the Torvi AI platform (the "Service"). It also explains your privacy rights and how the law protects you.
              </p>
              <p>
                We use your Personal Data to provide and improve the Service. By using the Service, you agree to the collection and use of information in accordance with this Privacy Policy.
              </p>
              <p>
                By accessing or using the Service, you acknowledge that you have read, understood, and agree to be bound by this Privacy Policy. If you do not agree with this Privacy Policy, please do not use the Service.
              </p>
              <p>
                <strong>Eligibility:</strong> The Service is intended for users who are at least 18 years of age. By using the Service, You represent and warrant that You are at least 18 years old.
              </p>
            </div>

            {/* Interpretation and Definitions */}
            <div id="interpretation" className="privacy-content-section">
              <h2>Interpretation and Definitions</h2>

              <h3>Interpretation</h3>
              <p>
                The words of which the initial letter is capitalized have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.
              </p>

              <h3>Definitions</h3>
              <p>For the purposes of this Privacy Policy:</p>
              <ul>
                <li><strong>Account</strong> means a unique account created for You to access our Service or parts of our Service.</li>
                <li><strong>Affiliate</strong> means an entity that controls, is controlled by, or is under common control with a party, where "control" means ownership of 50% or more of the shares, equity interest, or other securities entitled to vote for election of directors or other managing authority.</li>
                <li><strong>Business</strong> (for CCPA/CPRA purposes) refers to the Company as the legal entity that collects Consumers' personal information and determines the purposes and means of the processing.</li>
                <li><strong>CCPA/CPRA</strong> refers to the California Consumer Privacy Act as amended by the California Privacy Rights Act of 2020.</li>
                <li><strong>Company</strong> ("the Company", "We", "Us" or "Our") refers to Torvi AI Inc., 7830 Stalmer St, San Diego, CA 92111. For GDPR purposes, the Company is the Data Controller.</li>
                <li><strong>Consumer</strong> (for CCPA/CPRA purposes) means a natural person who is a California resident.</li>
                <li><strong>Cookies</strong> are small files placed on Your device by a website, containing details of Your browsing history among other uses.</li>
                <li><strong>Country</strong> refers to California, United States.</li>
                <li><strong>Data Controller</strong> (for GDPR purposes) refers to the Company as the legal person which determines the purposes and means of processing Personal Data.</li>
                <li><strong>Device</strong> means any device that can access the Service such as a computer, cellphone, or digital tablet.</li>
                <li><strong>Do Not Track (DNT)</strong> is a concept promoted by US regulatory authorities for allowing internet users to control tracking of their online activities.</li>
                <li><strong>GDPR</strong> refers to EU General Data Protection Regulation.</li>
                <li><strong>Personal Data</strong> is any information that relates to an identified or identifiable individual, including name, identification number, location data, online identifier, or factors specific to physical, physiological, genetic, mental, economic, cultural, or social identity.</li>
                <li><strong>Platform</strong> refers to the Torvi AI automation orchestration platform that allows users to connect applications, create workflows, and build AI agents through natural language prompts.</li>
                <li><strong>Service</strong> refers to the Platform and Website.</li>
                <li><strong>Service Provider</strong> means any natural or legal person who processes data on behalf of the Company to facilitate or provide the Service. For GDPR purposes, Service Providers are considered Data Processors.</li>
                <li><strong>Third-Party Services</strong> means any applications, platforms, or services that You connect to through our Platform as part of Your workflows and automations.</li>
                <li><strong>Usage Data</strong> refers to data collected automatically, either generated by the use of the Service or from the Service infrastructure itself.</li>
                <li><strong>User Content</strong> means any data, information, workflows, prompts, configurations, or other content that You input, upload, or create through the Service.</li>
                <li><strong>Website</strong> refers to Torvi AI, accessible from https://torvi.ai.</li>
                <li><strong>You</strong> means the individual accessing or using the Service, or the company or legal entity on behalf of which such individual is accessing the Service. Under GDPR, You may be referred to as the Data Subject or User.</li>
              </ul>
            </div>

            {/* Collecting and Using Your Personal Data */}
            <div id="collecting-data" className="privacy-content-section">
              <h2>Collecting and Using Your Personal Data</h2>

              <h3>Types of Data Collected</h3>

              <h4>Personal Data</h4>
              <p>
                While using Our Service, We may ask You to provide Us with certain personally identifiable information, including but not limited to:
              </p>
              <ul>
                <li>Email address</li>
                <li>First name and last name</li>
                <li>Phone number</li>
                <li>Address, State, Province, ZIP/Postal code, City</li>
                <li>Payment information (credit card details, billing address)</li>
                <li>Any other information deemed necessary for Your operations across our Platform</li>
              </ul>

              <h4>Usage Data</h4>
              <p>Usage Data is collected automatically when using the Service and may include:</p>
              <ul>
                <li>Device's Internet Protocol address (IP address)</li>
                <li>Browser type and version</li>
                <li>Pages visited, time and date of visit, time spent on pages</li>
                <li>Unique device identifiers and diagnostic data</li>
                <li>Workflow execution logs and API call records</li>
                <li>Mobile device information (type, unique ID, IP address, operating system, browser)</li>
              </ul>

              <h4>User Content and Workflow Data</h4>
              <p>
                When You use our Platform to create workflows, connect applications, and build AI agents, We collect and process the prompts, configurations, and data that flow through Your automations. This may include data from Third-Party Services that You connect to the Platform.
              </p>

              <h4>Third-Party Service Data</h4>
              <p>
                When You connect Third-Party Services to our Platform, We may receive and process data from those services as necessary to execute Your workflows. The type and extent of this data depends on the services You connect and the permissions You grant.
              </p>

              <h4>Tracking Technologies and Cookies</h4>
              <p>
                We use Cookies and similar tracking technologies to track activity on Our Service and store certain information. Technologies used include beacons, tags, and scripts.
              </p>
              <ul>
                <li><strong>Necessary/Essential Cookies:</strong> Session Cookies essential to provide services and authenticate users.</li>
                <li><strong>Cookies Policy/Notice Acceptance Cookies:</strong> Persistent Cookies to identify if users have accepted cookies.</li>
                <li><strong>Functionality Cookies:</strong> Persistent Cookies to remember Your choices and preferences.</li>
                <li><strong>Tracking and Performance Cookies:</strong> Persistent Cookies administered by Third-Parties to track website traffic and usage.</li>
              </ul>

              <h3>Use of Your Personal Data</h3>
              <p>The Company may use Personal Data for the following purposes:</p>
              <ul>
                <li>To provide and maintain our Service, including monitoring usage and executing workflows</li>
                <li>To manage Your Account and registration</li>
                <li>For the performance of a contract for products, items, or services purchased</li>
                <li>To contact You regarding updates, security notices, and informative communications</li>
                <li>To provide news, special offers, and information about similar goods and services</li>
                <li>To manage Your requests</li>
                <li>For business transfers (mergers, acquisitions, restructuring)</li>
                <li>For advertising and marketing purposes</li>
                <li>For data analysis, identifying trends, and improving our Service</li>
              </ul>

              <h3>Sharing Your Personal Information</h3>
              <p>We may share Your personal information in the following situations:</p>
              <ul>
                <li><strong>With Service Providers:</strong> To monitor and analyze use of our Service, process payments, and contact You.</li>
                <li><strong>For business transfers:</strong> In connection with mergers, sales, financing, or acquisitions.</li>
                <li><strong>With Affiliates:</strong> Who will be required to honor this Privacy Policy.</li>
                <li><strong>With business partners:</strong> To offer certain products, services, or promotions.</li>
                <li><strong>With third parties for advertising/marketing:</strong> We may sell or share Your personal information with third parties.</li>
                <li><strong>With Third-Party Services:</strong> As necessary to execute Your workflows.</li>
                <li><strong>With Your consent:</strong> For any other purpose with Your consent.</li>
              </ul>

              <h3>Retention of Your Personal Data</h3>
              <p>
                The Company will retain Your Personal Data only for as long as necessary for the purposes set out in this Privacy Policy, to comply with legal obligations, resolve disputes, and enforce agreements. Usage Data is generally retained for shorter periods unless used for security, functionality improvement, or legal obligations.
              </p>

              <h3>Transfer of Your Personal Data</h3>
              <p>
                Your information, including Personal Data, is processed at the Company's operating offices and other locations where processing parties are located. This may involve transfer to computers outside Your jurisdiction where data protection laws may differ. Your consent to this Privacy Policy followed by submission of information represents agreement to that transfer. The Company will take all reasonably necessary steps to ensure data is treated securely.
              </p>

              <h3>Delete Your Personal Data</h3>
              <p>
                You have the right to delete or request deletion of Personal Data We have collected. You may update, amend, or delete Your information through Your Account settings or by contacting Us. We may need to retain certain information when we have a legal obligation or lawful basis to do so.
              </p>

              <h3>Disclosure of Your Personal Data</h3>
              <p>
                <strong>Business Transactions:</strong> If the Company is involved in a merger, acquisition, or asset sale, Your Personal Data may be transferred. We will provide notice before transfer.
              </p>
              <p>
                <strong>Law Enforcement:</strong> The Company may disclose Your Personal Data if required by law or in response to valid requests by public authorities.
              </p>
              <p>
                <strong>Other Legal Requirements:</strong> The Company may disclose Your Personal Data in good faith belief that such action is necessary to:
              </p>
              <ul>
                <li>Comply with a legal obligation</li>
                <li>Protect and defend the rights or property of the Company</li>
                <li>Prevent or investigate possible wrongdoing in connection with the Service</li>
                <li>Protect the personal safety of Users or the public</li>
                <li>Protect against legal liability</li>
              </ul>

              <h3>Security of Your Personal Data</h3>
              <p>
                The security of Your Personal Data is important to Us. While We strive to use commercially acceptable means to protect Your Personal Data, no method of transmission over the Internet or electronic storage is 100% secure. We implement appropriate technical and organizational measures but cannot guarantee absolute security.
              </p>

              <h3>Analytics</h3>
              <p>We use third-party Service providers to monitor and analyze the use of our Service:</p>
              <ul>
                <li><strong>Google Analytics:</strong> Tracks and reports website traffic. You can opt-out by installing the Google Analytics opt-out browser add-on. More info: https://policies.google.com/privacy</li>
                <li><strong>Mixpanel:</strong> Opt-out at https://mixpanel.com/optout/. More info: https://mixpanel.com/legal/terms-of-use</li>
                <li><strong>Amplitude:</strong> More info: https://amplitude.com/privacy</li>
              </ul>

              <h3>User Content and Third-Party Services</h3>
              <p>
                <strong>Your Responsibility:</strong> You are solely responsible for any data You input, upload, or process through the Service. You represent that You have all necessary rights and permissions.
              </p>
              <p>
                <strong>Third-Party Connections:</strong> When connecting Third-Party Services, You acknowledge that data shared is subject to their privacy policies. We are not responsible for their privacy practices.
              </p>
              <p>
                <strong>Sensitive Data:</strong> Our Platform may process sensitive data depending on connected services. You are responsible for ensuring compliance with applicable laws regarding sensitive data processing.
              </p>
            </div>

            {/* GDPR Privacy */}
            <div id="gdpr" className="privacy-content-section">
              <h2>GDPR Privacy</h2>
              <p>This section applies to users within the European Union.</p>

              <h3>Legal Basis for Processing Personal Data</h3>
              <p>We may process Personal Data under the following conditions:</p>
              <ul>
                <li><strong>Consent:</strong> You have given consent for processing for one or more specific purposes.</li>
                <li><strong>Performance of a contract:</strong> Processing is necessary for performance of an agreement with You.</li>
                <li><strong>Legal obligations:</strong> Processing is necessary for compliance with legal obligations.</li>
                <li><strong>Vital interests:</strong> Processing is necessary to protect Your vital interests or another person's.</li>
                <li><strong>Public interests:</strong> Processing is related to a task carried out in the public interest.</li>
                <li><strong>Legitimate interests:</strong> Processing is necessary for legitimate interests pursued by the Company.</li>
              </ul>

              <h3>Your Rights under the GDPR</h3>
              <p>If You are within the EU, You have the right to:</p>
              <ul>
                <li>Request access to Your Personal Data</li>
                <li>Request correction of incomplete or inaccurate information</li>
                <li>Object to processing of Your Personal Data</li>
                <li>Request erasure of Your Personal Data</li>
                <li>Request transfer of Your Personal Data in a structured, machine-readable format</li>
                <li>Withdraw consent at any time</li>
              </ul>

              <h3>Exercising Your GDPR Rights</h3>
              <p>
                You may exercise Your rights by contacting Us at support@torvi.ai. We may ask You to verify Your identity before responding. You have the right to complain to a Data Protection Authority in the EEA.
              </p>
            </div>

            {/* CCPA/CPRA Privacy Notice */}
            <div id="ccpa" className="privacy-content-section">
              <h2>CCPA/CPRA Privacy Notice (California Privacy Rights)</h2>
              <p>This section applies solely to visitors, users, and others who reside in the State of California.</p>

              <h3>Categories of Personal Information Collected</h3>
              <p>Categories collected in the last 12 months:</p>
              <ul>
                <li><strong>Category A - Identifiers:</strong> Real name, alias, postal address, unique personal identifier, online identifier, IP address, email address, account name. <em>Collected: Yes</em></li>
                <li><strong>Category B - California Customer Records:</strong> Name, address, telephone number, credit/debit card number. <em>Collected: Yes</em></li>
                <li><strong>Category F - Internet/Network Activity:</strong> Interaction with our Service or advertisement. <em>Collected: Yes</em></li>
                <li><strong>Category L - Sensitive Personal Information:</strong> Account login and password information. <em>Collected: Yes</em></li>
              </ul>

              <h3>Sale of Personal Information</h3>
              <p>
                We may sell, and may have sold in the last 12 months, the following categories: Category A (Identifiers), Category B (California Customer Records), and Category F (Internet/Network Activity). We do not sell or share mobile information (phone numbers or mobile device data) with third parties for advertising, marketing, or promotional purposes.
              </p>

              <h3>Your Rights under CCPA/CPRA</h3>
              <p>California residents have the following rights:</p>
              <ul>
                <li><strong>Right to notice</strong> (categories and purposes of data collection)</li>
                <li><strong>Right to know/access</strong> (information about collection, use, sale, disclosure, sharing)</li>
                <li><strong>Right to opt-out</strong> (say no to sale or sharing)</li>
                <li><strong>Right to correct</strong> (rectify inaccurate personal information)</li>
                <li><strong>Right to limit</strong> (limit use/disclosure of sensitive personal information)</li>
                <li><strong>Right to delete</strong> (request deletion, subject to exceptions)</li>
                <li><strong>Right not to be discriminated against</strong> (for exercising privacy rights)</li>
              </ul>

              <h3>Exercising Your CCPA/CPRA Rights</h3>
              <p>
                Contact us at support@torvi.ai. Requests must include enough detail to verify identity. We will respond within 45 days, with a possible 45-day extension when reasonably necessary.
              </p>

              <h3>Do Not Sell My Personal Information</h3>
              <p>
                You have the right to opt-out of the sale of Your personal information. Contact us at support@torvi.ai or use "Do Not Sell My Personal Information" options on our Website.
              </p>

              <h3>"Do Not Track" Policy</h3>
              <p>
                Our Service does not respond to Do Not Track signals. You can enable or disable DNT in your browser settings.
              </p>

              <h3>California Shine the Light Law</h3>
              <p>
                Under California Civil Code Section 1798, California residents with an established business relationship can request information once a year about sharing Personal Data with third parties for their direct marketing purposes. Contact Us at support@torvi.ai.
              </p>
            </div>

            {/* Children's Privacy */}
            <div id="children" className="privacy-content-section">
              <h2>Children's Privacy</h2>
              <p>
                Our Service does not address anyone under the age of 18. We do not knowingly collect personally identifiable information from anyone under 18. If You are a parent or guardian and aware that Your child has provided Us with Personal Data, please contact Us. If We become aware that We have collected Personal Data from anyone under 18 without verification of parental consent, We take steps to remove that information from Our servers.
              </p>
            </div>

            {/* Links to Other Websites */}
            <div id="links" className="privacy-content-section">
              <h2>Links to Other Websites</h2>
              <p>
                Our Service may contain links to other websites not operated by Us. If You click on a third-party link, You will be directed to that third party's site. We strongly advise You to review the Privacy Policy of every site You visit. We have no control over and assume no responsibility for the content, privacy policies, or practices of any third-party sites or services.
              </p>
            </div>

            {/* Changes to this Privacy Policy */}
            <div id="changes" className="privacy-content-section">
              <h2>Changes to this Privacy Policy</h2>
              <p>
                We may update Our Privacy Policy from time to time. We will notify You of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date. We will let You know via email and/or a prominent notice on Our Service prior to the change becoming effective. You are advised to review this Privacy Policy periodically. Your continued use of the Service after any changes constitutes acceptance of such changes.
              </p>
            </div>

            {/* AI-Generated Communications Disclaimer */}
            <div id="ai-disclaimer" className="privacy-content-section">
              <h2>AI-Generated Communications Disclaimer</h2>
              <p>
                Our Platform uses artificial intelligence to facilitate communications, generate responses, and assist with workflow creation and execution. Calls, chat messages, and other communications may be generated by AI. While we strive for accuracy, AI-generated content may contain errors or omissions. Users should verify the information before relying on it. The Company is not responsible for any decisions made based on AI-generated content.
              </p>
            </div>

            {/* Contact Us */}
            <div id="contact" className="privacy-content-section">
              <h2>Contact Us</h2>
              <p>If you have any questions about this Privacy Policy, You can contact us:</p>
              <ul>
                <li>By email: <a href="mailto:support@torvi.ai">support@torvi.ai</a></li>
                <li>By mail: Torvi AI Inc., 7830 Stalmer St, San Diego, CA 92111</li>
              </ul>

              <h3>Additional Legal Provisions</h3>
              <p>
                <strong>Limitation of Liability:</strong> TO THE MAXIMUM EXTENT PERMITTED BY LAW, THE COMPANY SHALL NOT BE LIABLE FOR ANY INDIRECT, PUNITIVE, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR EXEMPLARY DAMAGES ARISING FROM USE OF THE SERVICE. THE COMPANY'S TOTAL LIABILITY SHALL NOT EXCEED THE AMOUNT PAID BY YOU FOR ACCESSING THE SERVICE DURING THE TWELVE (12) MONTHS PRECEDING THE CLAIM.
              </p>
              <p>
                <strong>Indemnification:</strong> You agree to defend, indemnify, and hold harmless the Company from any claims, liabilities, damages, losses, costs, or fees arising from Your violation of this Privacy Policy or Your use of the Service.
              </p>
              <p>
                <strong>Governing Law:</strong> This Privacy Policy shall be governed by the laws of the State of California, United States. Any dispute shall be resolved in the state or federal courts located in San Diego County, California.
              </p>
              <p>
                <strong>Severability:</strong> If any provision is held unenforceable, it will be modified to accomplish its objectives to the greatest extent possible, and remaining provisions will continue in full force.
              </p>
              <p>
                <strong>Entire Agreement:</strong> This Privacy Policy, together with our Terms of Service, constitutes the entire agreement between You and the Company concerning the Service.
              </p>
            </div>
          </div>

          {/* Right Side - Sticky Contents Navigation */}
          <div className="privacy-nav-right">
            <div className="privacy-nav-sticky">
              <h3 className="privacy-nav-title">Contents</h3>
              <nav className="privacy-nav-links">
                {sections.map((section) => (
                  <button
                    key={section.id}
                    className={`privacy-nav-link ${activeSection === section.id ? 'active' : ''}`}
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
      <section className="privacy-watermark-section">
        <div className="privacy-watermark">torvi</div>
      </section>
    </>
  )
}

export default PrivacyPolicyContent

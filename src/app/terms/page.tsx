import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Terms & Conditions | VexioHQ',
  description: 'VexioHQ Terms & Conditions - Comprehensive terms of service, privacy policy, SMS/email communication terms, and acceptable use policy for our AI-powered business solutions.',
};

export default function TermsAndConditions() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Terms &amp; Conditions</h1>
        <p className="text-sm text-gray-600 mb-2">Last Updated: January 2, 2026</p>
        <p className="text-sm text-gray-600 mb-8">Version 1.1</p>

        {/* Table of Contents */}
        <nav className="bg-gray-50 p-6 rounded-lg mb-12">
          <h2 className="text-xl font-semibold mb-4">Table of Contents</h2>
          <ol className="list-decimal list-inside space-y-2 text-blue-600">
            <li><a href="#terms-of-service" className="hover:underline">Terms of Service</a></li>
            <li><a href="#privacy-policy" className="hover:underline">Privacy Policy</a></li>
            <li><a href="#sms-terms" className="hover:underline">SMS/Text Messaging Terms</a></li>
            <li><a href="#email-terms" className="hover:underline">Email Communication Terms</a></li>
            <li><a href="#voice-terms" className="hover:underline">Voice/Phone Communication Terms</a></li>
            <li><a href="#data-processing" className="hover:underline">Data Processing Agreement</a></li>
            <li><a href="#acceptable-use" className="hover:underline">Acceptable Use Policy</a></li>
            <li><a href="#product-terms" className="hover:underline">Product-Specific Terms</a></li>
            <li><a href="#billing" className="hover:underline">Billing &amp; Refunds</a></li>
            <li><a href="#contact" className="hover:underline">Contact Information</a></li>
          </ol>
        </nav>

        <div className="prose prose-lg max-w-none">
          {/* Section 1: Terms of Service */}
          <section id="terms-of-service" className="mb-12 scroll-mt-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-blue-600">
              1. Terms of Service
            </h2>

            <h3 className="text-xl font-semibold mb-3">1.1 Acceptance of Terms</h3>
            <p className="mb-4">
              Welcome to VexioHQ. These Terms &amp; Conditions (&quot;Terms&quot;) govern your access to and use of
              VexioHQ&apos;s website (vexiohq.com), products, and services, including VexioSales, VexioMarketing,
              VexioHRM, VexioExpense, and our AI consulting services (collectively, the &quot;Services&quot;). VexioHQ
              is a brand operated by Data Tranquil Inc., an S-Corporation (&quot;Company,&quot; &quot;we,&quot; &quot;our,&quot; or &quot;us&quot;).
            </p>
            <p className="mb-4">
              By accessing or using our Services, you agree to be bound by these Terms and our Privacy Policy.
              If you do not agree to these Terms, you may not access or use the Services.
            </p>

            {/* ISSUE-01: Tool-Only Platform Disclaimer */}
            <div className="bg-gray-50 border-l-4 border-gray-400 p-4 mb-4">
              <p className="font-semibold mb-2">Tool-Only Platform; No Employment or Agency Relationship</p>
              <p className="text-sm">
                VexioHQ provides software tools and technology services only. VexioHQ is not your employer,
                co-employer, joint employer, agent, or representative, nor do we act as an employer, co-employer,
                joint employer, agent, or representative of any third party on your behalf. Our Services,
                including any AI-powered features, HR tools, or operational support capabilities, are provided
                solely as tools for your independent use. You retain sole responsibility for all employment,
                hiring, termination, and operational decisions. No use of our Services creates an employment,
                agency, partnership, joint venture, or fiduciary relationship between VexioHQ and you, your
                employees, contractors, or any third party.
              </p>
            </div>

            <h3 className="text-xl font-semibold mb-3 mt-6">1.2 Eligibility</h3>
            <p className="mb-4">To use our Services, you must:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Be at least 18 years of age</li>
              <li>Have the legal authority to enter into this agreement</li>
              <li>If using on behalf of a business, have authorization to bind that entity to these Terms</li>
              <li>Not be prohibited from using the Services under applicable laws</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3 mt-6">1.3 Account Registration and Responsibilities</h3>
            <p className="mb-4">
              To access certain features of our Services, you may be required to create an account.
              You agree to:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Provide accurate, current, and complete registration information</li>
              <li>Maintain and promptly update your account information</li>
              <li>Maintain the security and confidentiality of your login credentials</li>
              <li>Accept responsibility for all activities under your account</li>
              <li>Notify us immediately of any unauthorized use or security breach</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3 mt-6">1.4 Permitted Use and Prohibited Activities</h3>
            <p className="mb-4">You may use the Services only for lawful purposes. You agree NOT to:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Violate any applicable law, regulation, or third-party rights</li>
              <li>Use the Services for any fraudulent or deceptive purpose</li>
              <li>Transmit viruses, malware, or other harmful code</li>
              <li>Attempt unauthorized access to our systems or networks</li>
              <li>Interfere with or disrupt the integrity of the Services</li>
              <li>Send unsolicited communications (spam) through our platform</li>
              <li>Use automated systems to extract data (scraping) without permission</li>
              <li>Reverse engineer, decompile, or disassemble the Services</li>
              <li>Use the Services to compete with VexioHQ or for benchmarking</li>
              <li>Resell or redistribute the Services without authorization</li>
            </ul>

            {/* ISSUE-02: Restructured IP Section */}
            <h3 className="text-xl font-semibold mb-3 mt-6">1.5 Intellectual Property Rights</h3>
            <p className="mb-2"><strong>Customer Inputs.</strong></p>
            <p className="mb-4">
              You retain all ownership rights in any data, content, or materials you provide to the Services
              (&quot;Customer Inputs&quot;). You grant VexioHQ a limited, non-exclusive license to use Customer Inputs
              solely to provide and maintain the Services for you.
            </p>
            <p className="mb-2"><strong>Customer Outputs.</strong></p>
            <p className="mb-4">
              Subject to your compliance with these Terms, you own outputs generated by the Services that are
              derived from your Customer Inputs (&quot;Customer Outputs&quot;). VexioHQ retains no ownership interest
              in Customer Outputs.
            </p>
            <p className="mb-2"><strong>Company Systems and Improvements.</strong></p>
            <p className="mb-4">
              VexioHQ and its licensors retain all ownership rights in the Services, including all software,
              algorithms, models, workflows, documentation, designs, logos, trademarks, and underlying technology
              (&quot;Company Systems&quot;). Any improvements, modifications, or derivative works to Company Systems,
              whether or not arising from your use of the Services, are and shall remain the sole property of VexioHQ.
            </p>
            <p className="mb-2"><strong>Feedback.</strong></p>
            <p className="mb-4">
              If you provide suggestions, ideas, or feedback regarding the Services (&quot;Feedback&quot;), you grant
              VexioHQ a perpetual, irrevocable, royalty-free, worldwide license to use such Feedback for any
              purpose. Feedback does not entitle you to any ownership interest in Company Systems or any compensation.
            </p>

            {/* ISSUE-07: Updated Termination Section */}
            <h3 className="text-xl font-semibold mb-3 mt-6">1.6 Service Modifications and Termination</h3>
            <p className="mb-4">
              We reserve the right to modify, suspend, or discontinue any part of the Services at any time.
              We will use commercially reasonable efforts to provide advance notice of material changes.
            </p>
            <p className="mb-4">
              We may suspend or terminate your account for violation of these Terms or if required by law.
              For termination for convenience, we will provide 30 days&apos; notice where practicable. Upon
              termination or cancellation, you may request export of your Customer Inputs and Customer Outputs
              for a period of 30 days. After such period, we may delete your data in accordance with our
              data retention policies.
            </p>

            {/* ISSUE-06: Updated Liability Section */}
            <h3 className="text-xl font-semibold mb-3 mt-6">1.7 Limitation of Liability</h3>
            <p className="mb-4 uppercase font-semibold text-sm">
              TO THE MAXIMUM EXTENT PERMITTED BY LAW, VEXIOHQ AND ITS AFFILIATES, OFFICERS, DIRECTORS,
              EMPLOYEES, AND AGENTS SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL,
              OR PUNITIVE DAMAGES, INCLUDING BUT NOT LIMITED TO LOSS OF PROFITS, DATA, OR BUSINESS OPPORTUNITIES,
              ARISING OUT OF OR RELATED TO YOUR USE OF THE SERVICES.
            </p>
            <p className="mb-4">
              Our total aggregate liability for any claims arising from these Terms or your use of the Services
              shall not exceed the total fees actually paid by you to VexioHQ during the twelve (12) months
              preceding the event giving rise to the claim.
            </p>
            <p className="mb-4">
              <strong>Exclusions.</strong> The limitations in this Section do not apply to (a) liability that
              cannot be limited or excluded under applicable law, (b) your breach of Section 1.4 (Prohibited
              Activities), (c) your indemnification obligations, or (d) either party&apos;s gross negligence or
              willful misconduct.
            </p>

            <h3 className="text-xl font-semibold mb-3 mt-6">1.8 Indemnification</h3>
            <p className="mb-4">
              You agree to indemnify, defend, and hold harmless VexioHQ and its affiliates from any claims,
              damages, losses, liabilities, and expenses (including reasonable attorneys&apos; fees) arising from:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Your use of the Services</li>
              <li>Your violation of these Terms</li>
              <li>Your violation of any third-party rights</li>
              <li>Your Customer Inputs or Customer Outputs</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3 mt-6">1.9 Governing Law</h3>
            <p className="mb-4">
              These Terms shall be governed by and construed in accordance with the laws of the State of
              California, United States, without regard to its conflict of law provisions.
            </p>

            {/* ISSUE-08: Enhanced Dispute Resolution */}
            <h3 className="text-xl font-semibold mb-3 mt-6">1.10 Dispute Resolution</h3>
            <p className="mb-2"><strong>Informal Resolution.</strong></p>
            <p className="mb-4">
              Before initiating any formal dispute resolution, you agree to contact us at legal@vexiohq.com
              and attempt to resolve any dispute informally for at least 60 days. Most disputes can be
              resolved without formal proceedings.
            </p>
            <p className="mb-2"><strong>Arbitration.</strong></p>
            <p className="mb-4">
              If informal resolution is unsuccessful, any dispute arising from these Terms or the Services
              shall be resolved by binding arbitration administered by JAMS in San Francisco, California,
              under its Comprehensive Arbitration Rules.
            </p>
            <p className="mb-2"><strong>Fees.</strong></p>
            <p className="mb-4">
              Each party shall pay its own attorneys&apos; fees and costs. If you demonstrate financial hardship,
              VexioHQ will consider in good faith any request to pay your share of arbitration administrative fees.
            </p>
            <p className="mb-2"><strong>Batch Arbitration.</strong></p>
            <p className="mb-4">
              If 25 or more similar claims are filed, JAMS shall group them into batches of no more than 25
              claims each. Each batch shall be resolved in a single arbitration proceeding. Batch selection
              shall be random, and resolution of earlier batches shall inform later batches.
            </p>
            <p className="mb-4 font-semibold">
              CLASS ACTION WAIVER: You agree that any dispute resolution proceedings will be conducted only
              on an individual basis and not in a class, consolidated, or representative action. If this
              waiver is found unenforceable, the parties agree to resolve the dispute in court rather than arbitration.
            </p>
            <p className="mb-4">
              <strong>Small Claims Exception.</strong> Either party may bring an individual action in small
              claims court if the claim qualifies.
            </p>
          </section>

          {/* Section 2: Privacy Policy */}
          <section id="privacy-policy" className="mb-12 scroll-mt-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-blue-600">
              2. Privacy Policy
            </h2>

            <h3 className="text-xl font-semibold mb-3">2.1 Information We Collect</h3>
            <p className="mb-2">We collect the following types of information:</p>
            <p className="mb-2"><strong>Personal Information:</strong></p>
            <ul className="list-disc pl-6 mb-4">
              <li>Name, email address, phone number</li>
              <li>Company name and job title</li>
              <li>Billing and payment information</li>
              <li>Account credentials</li>
            </ul>
            <p className="mb-2"><strong>Business Information:</strong></p>
            <ul className="list-disc pl-6 mb-4">
              <li>Company size, industry, and location</li>
              <li>CRM data and customer records (when integrated)</li>
              <li>Sales and marketing data you provide</li>
            </ul>
            <p className="mb-2"><strong>Usage Data:</strong></p>
            <ul className="list-disc pl-6 mb-4">
              <li>IP address, browser type, device information</li>
              <li>Pages visited, features used, time spent</li>
              <li>Interaction with our AI features</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3 mt-6">2.2 How We Use Information</h3>
            <p className="mb-4">We use your information to:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Provide, maintain, and improve our Services</li>
              <li>Process transactions and send related communications</li>
              <li>Send promotional communications (with your consent)</li>
              <li>Respond to your inquiries and support requests</li>
              <li>Analyze usage patterns to improve user experience</li>
              <li>Detect, prevent, and address technical issues or fraud</li>
              <li>Comply with legal obligations</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3 mt-6">2.3 Data Sharing and Third Parties</h3>
            <p className="mb-4">We may share your information with:</p>
            <ul className="list-disc pl-6 mb-4">
              <li><strong>Service Providers:</strong> Cloud hosting, payment processors, analytics providers</li>
              <li><strong>Business Partners:</strong> Integration partners with your consent</li>
              <li><strong>Legal Requirements:</strong> When required by law or to protect our rights</li>
              <li><strong>Business Transfers:</strong> In connection with mergers, acquisitions, or asset sales</li>
            </ul>
            <p className="mb-4">We do NOT sell your personal information to third parties.</p>

            {/* ISSUE-07: Harmonized Data Retention */}
            <h3 className="text-xl font-semibold mb-3 mt-6">2.4 Data Retention</h3>
            <p className="mb-4">
              We retain your information for as long as your account is active or as needed to provide
              Services. Upon account termination or cancellation, your data is retained for 30 days to
              facilitate export requests. After such period, data is deleted in accordance with our
              standard retention schedule, except as necessary to comply with legal obligations, resolve
              disputes, or enforce our agreements.
            </p>

            <h3 className="text-xl font-semibold mb-3 mt-6">2.5 Security Measures</h3>
            <p className="mb-4">
              We implement industry-standard security measures including encryption, access controls,
              and regular security audits. However, no method of transmission or storage is 100% secure.
            </p>

            <h3 className="text-xl font-semibold mb-3 mt-6">2.6 Your Rights</h3>
            <p className="mb-4">Depending on your location, you may have the right to:</p>
            <ul className="list-disc pl-6 mb-4">
              <li><strong>Access:</strong> Request a copy of your personal data</li>
              <li><strong>Correction:</strong> Request correction of inaccurate data</li>
              <li><strong>Deletion:</strong> Request deletion of your data (&quot;right to be forgotten&quot;)</li>
              <li><strong>Portability:</strong> Request your data in a machine-readable format</li>
              <li><strong>Opt-out:</strong> Opt-out of marketing communications</li>
              <li><strong>Restrict Processing:</strong> Limit how we use your data</li>
            </ul>
            <p className="mb-4">To exercise these rights, contact us at privacy@vexiohq.com.</p>

            <h3 className="text-xl font-semibold mb-3 mt-6">2.7 Cookies and Tracking</h3>
            <p className="mb-4">
              We use cookies and similar technologies to enhance your experience, analyze usage, and
              deliver targeted advertising. You can manage cookie preferences through your browser settings.
              See our <Link href="/cookie-notice" className="text-blue-600 hover:underline">Cookie Notice</Link> for details.
            </p>

            <h3 className="text-xl font-semibold mb-3 mt-6">2.8 International Data Transfers</h3>
            <p className="mb-4">
              Your information may be transferred to and processed in countries other than your own.
              We ensure appropriate safeguards are in place for such transfers, including Standard
              Contractual Clauses where required.
            </p>

            <h3 className="text-xl font-semibold mb-3 mt-6">2.9 Children&apos;s Privacy</h3>
            <p className="mb-4">
              Our Services are not intended for children under 13 years of age. We do not knowingly
              collect personal information from children under 13. If we learn we have collected such
              information, we will delete it promptly.
            </p>

            <h3 className="text-xl font-semibold mb-3 mt-6">2.10 California Privacy Rights (CCPA)</h3>
            <p className="mb-4">
              California residents have additional rights under the California Consumer Privacy Act (CCPA),
              including the right to know what personal information we collect and the right to opt-out
              of the sale of personal information. We do not sell personal information.
            </p>
          </section>

          {/* Section 3: SMS/Text Messaging Terms */}
          <section id="sms-terms" className="mb-12 scroll-mt-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-blue-600">
              3. SMS/Text Messaging Terms
            </h2>

            <div className="bg-blue-50 border-l-4 border-blue-600 p-4 mb-6">
              <p className="font-semibold">
                By providing your phone number, you consent to receive SMS messages from VexioHQ and its
                products. Message frequency varies. Message and data rates may apply. Reply STOP to
                unsubscribe. Reply HELP for help. Carriers are not liable for delayed or undelivered messages.
              </p>
            </div>

            {/* ISSUE-04: Separate Consent for SMS */}
            <h3 className="text-xl font-semibold mb-3">3.1 Consent to Receive SMS</h3>
            <p className="mb-4">
              By providing your mobile phone number and checking the SMS consent box, you provide your
              express written consent to receive text messages from VexioHQ and its product lines
              (VexioSales, VexioMarketing, VexioHRM, VexioExpense). This consent covers transactional
              messages related to your account.
            </p>
            <p className="mb-4">
              <strong>Separate Promotional Consent.</strong> Consent to receive promotional or marketing
              SMS messages requires a separate, clearly labeled opt-in at the time of collection.
              Promotional consent is not bundled with transactional consent and is not required as a
              condition of purchase or service.
            </p>

            <h3 className="text-xl font-semibold mb-3 mt-6">3.2 Types of Messages</h3>
            <p className="mb-4">You may receive the following types of SMS messages:</p>
            <ul className="list-disc pl-6 mb-4">
              <li><strong>Transactional Messages:</strong> Account notifications, security alerts, verification codes, appointment reminders</li>
              <li><strong>Service Alerts:</strong> System updates, feature announcements, service changes</li>
              <li><strong>Promotional Messages:</strong> Special offers, promotions, product updates (only with separate promotional consent)</li>
              <li><strong>AI Agent Communications:</strong> Responses from our AI voice and text agents</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3 mt-6">3.3 Message Frequency</h3>
            <p className="mb-4">
              Message frequency varies based on your account activity and preferences. Transactional messages
              are sent as needed. Promotional messages (if separately consented) are typically sent no more
              than 4 times per month.
            </p>

            <h3 className="text-xl font-semibold mb-3 mt-6">3.4 Rates and Charges</h3>
            <p className="mb-4 font-semibold">
              Standard message and data rates may apply. Check with your mobile carrier for details about
              your text messaging plan.
            </p>

            <h3 className="text-xl font-semibold mb-3 mt-6">3.5 Opt-Out Instructions</h3>
            <p className="mb-4">
              To stop receiving SMS messages from VexioHQ:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li><strong>Text STOP</strong> to any message to unsubscribe from all SMS communications</li>
              <li><strong>Text STOP PROMO</strong> to unsubscribe from promotional messages only</li>
              <li>Manage preferences in your account settings</li>
              <li>Contact support@vexiohq.com</li>
            </ul>
            <p className="mb-4">
              Opt-out requests are processed within 24 hours. After texting STOP, you will receive one
              final confirmation message. Transactional messages related to security and account access
              may continue as required for service delivery until you close your account.
            </p>

            <h3 className="text-xl font-semibold mb-3 mt-6">3.6 Opt-In Confirmation</h3>
            <p className="mb-4">
              To subscribe or re-subscribe to SMS messages:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li><strong>Text START</strong> or <strong>YES</strong> to subscribe</li>
              <li>Check the SMS consent box during account registration</li>
              <li>Update your preferences in account settings</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3 mt-6">3.7 Help Instructions</h3>
            <p className="mb-4">
              For help with SMS communications:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li><strong>Text HELP</strong> for assistance</li>
              <li>Email: support@vexiohq.com</li>
              <li>Phone: +1 (415) 390-5748</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3 mt-6">3.8 Supported Carriers</h3>
            <p className="mb-4">
              Our SMS services are compatible with major carriers including AT&amp;T, Verizon, T-Mobile,
              Sprint, and most regional carriers. Carrier participation may change without notice.
            </p>

            <h3 className="text-xl font-semibold mb-3 mt-6">3.9 Delivery Disclaimer</h3>
            <p className="mb-4">
              We cannot guarantee SMS delivery. Delivery depends on your carrier, network conditions,
              and device settings. Neither VexioHQ nor mobile carriers are liable for delayed or
              undelivered messages.
            </p>

            <h3 className="text-xl font-semibold mb-3 mt-6">3.10 TCPA Compliance</h3>
            <p className="mb-4">
              VexioHQ complies with the Telephone Consumer Protection Act (TCPA). We only send messages
              to users who have provided express written consent. We maintain internal do-not-call lists
              and honor all opt-out requests within 24 hours.
            </p>
          </section>

          {/* Section 4: Email Communication Terms */}
          <section id="email-terms" className="mb-12 scroll-mt-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-blue-600">
              4. Email Communication Terms
            </h2>

            <h3 className="text-xl font-semibold mb-3">4.1 Consent to Receive Emails</h3>
            <p className="mb-4">
              By creating an account or subscribing to our communications, you consent to receive emails
              from VexioHQ. You can manage your email preferences at any time.
            </p>

            <h3 className="text-xl font-semibold mb-3 mt-6">4.2 Types of Emails</h3>
            <p className="mb-4">We send the following types of emails:</p>
            <ul className="list-disc pl-6 mb-4">
              <li><strong>Transactional Emails:</strong> Account confirmations, password resets, security alerts, receipts, and service notifications</li>
              <li><strong>Service Updates:</strong> Product updates, feature announcements, maintenance notices</li>
              <li><strong>Marketing Emails:</strong> Newsletters, promotions, educational content, event invitations</li>
              <li><strong>Customer Success:</strong> Onboarding emails, tips, best practices, usage reports</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3 mt-6">4.3 Unsubscribe Process</h3>
            <p className="mb-4">
              To unsubscribe from marketing emails:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Click the &quot;Unsubscribe&quot; link at the bottom of any marketing email</li>
              <li>Update your email preferences in your account settings</li>
              <li>Contact support@vexiohq.com</li>
            </ul>
            <p className="mb-4">
              We will process your unsubscribe request within 10 business days. Note that transactional
              emails necessary for service delivery cannot be unsubscribed.
            </p>

            <h3 className="text-xl font-semibold mb-3 mt-6">4.4 CAN-SPAM Compliance</h3>
            <p className="mb-4">
              VexioHQ complies with the CAN-SPAM Act. All marketing emails include:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Clear identification of the sender (VexioHQ/Data Tranquil Inc.)</li>
              <li>Accurate subject lines</li>
              <li>Our valid physical postal address</li>
              <li>A clear and conspicuous unsubscribe mechanism</li>
            </ul>
          </section>

          {/* Section 5: Voice/Phone Communication Terms */}
          <section id="voice-terms" className="mb-12 scroll-mt-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-blue-600">
              5. Voice/Phone Communication Terms
            </h2>

            {/* ISSUE-04: Separate Voice Consent */}
            <h3 className="text-xl font-semibold mb-3">5.1 Consent to Receive Calls</h3>
            <p className="mb-4">
              By providing your phone number and separately opting in to voice communications, you consent
              to receive phone calls from VexioHQ, including calls made using automated dialing systems
              and pre-recorded messages.
            </p>
            <p className="mb-4">
              <strong>Separate Consent Required.</strong> Consent to receive promotional or sales calls
              requires a separate, clearly labeled opt-in at the time of collection. Promotional call
              consent is not bundled with transactional or service call consent. You may revoke voice
              communication consent at any time by following the opt-out instructions in Section 5.4.
            </p>

            <h3 className="text-xl font-semibold mb-3 mt-6">5.2 Call Recording Disclosure</h3>
            <p className="mb-4 font-semibold">
              Calls with VexioHQ may be recorded for quality assurance, training, and compliance purposes.
              By continuing a call, you consent to recording. If you do not consent, please inform the
              representative at the beginning of the call.
            </p>

            {/* ISSUE-05: Mandatory AI Disclosure */}
            <h3 className="text-xl font-semibold mb-3 mt-6">5.3 AI Voice Agent Disclosure</h3>
            <p className="mb-4">
              VexioHQ utilizes AI-powered voice agents for certain communications, including:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Appointment scheduling and reminders</li>
              <li>Lead qualification calls</li>
              <li>Customer support inquiries</li>
              <li>Survey and feedback collection</li>
            </ul>
            <p className="mb-4">
              <strong>Mandatory Disclosure.</strong> Our AI voice agents will identify themselves as
              automated or AI-powered systems at the beginning of each call before any substantive
              conversation. You may request to speak with a human representative at any time during the call.
            </p>

            <h3 className="text-xl font-semibold mb-3 mt-6">5.4 Opt-Out of Calls</h3>
            <p className="mb-4">
              To opt-out of phone communications:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Request to be added to our do-not-call list during any call</li>
              <li>Update your preferences in account settings</li>
              <li>Email support@vexiohq.com with your phone number</li>
              <li>Call +1 (415) 390-5748 and request removal</li>
            </ul>
            <p className="mb-4">
              We will honor your opt-out request within 30 days. Emergency and security-related calls
              may continue as necessary.
            </p>
          </section>

          {/* Section 6: Data Processing Agreement */}
          <section id="data-processing" className="mb-12 scroll-mt-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-blue-600">
              6. Data Processing Agreement (DPA)
            </h2>
            <p className="mb-4 italic">
              This section applies to business customers (&quot;Controllers&quot;) who use VexioHQ services
              to process personal data of their customers or employees.
            </p>

            {/* ISSUE-09: Document Hierarchy */}
            <h3 className="text-xl font-semibold mb-3">6.1 Document Hierarchy</h3>
            <p className="mb-4">
              In the event of any conflict between this DPA section and other portions of these Terms,
              this DPA section shall control with respect to data processing matters. In the event of
              any conflict between this DPA section and a separately executed Data Processing Agreement,
              the separately executed agreement shall control.
            </p>

            <h3 className="text-xl font-semibold mb-3 mt-6">6.2 GDPR Compliance</h3>
            <p className="mb-4">
              For customers subject to the General Data Protection Regulation (GDPR), VexioHQ acts as
              a data processor on your behalf. We commit to:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Process personal data only on your documented instructions</li>
              <li>Ensure personnel authorized to process data are bound by confidentiality</li>
              <li>Implement appropriate technical and organizational security measures</li>
              <li>Assist you in responding to data subject requests</li>
              <li>Support your compliance with GDPR obligations</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3 mt-6">6.3 Data Processor Responsibilities</h3>
            <p className="mb-4">As a data processor, VexioHQ will:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Process data only for the purposes specified in our service agreement</li>
              <li>Not use your data to train our AI models without explicit consent</li>
              <li>Maintain records of processing activities</li>
              <li>Delete or return all personal data upon termination of services, subject to our data retention policies and legal obligations</li>
              <li>Allow and contribute to audits and inspections</li>
            </ul>

            {/* ISSUE-09: Sub-Processor Objection Consequences */}
            <h3 className="text-xl font-semibold mb-3 mt-6">6.4 Sub-Processors</h3>
            <p className="mb-4">
              VexioHQ uses third-party sub-processors to provide our Services. A current list of
              sub-processors is available at vexiohq.com/legal/sub-processors or upon request.
              We will notify you of any intended changes to sub-processors at least 30 days in advance.
            </p>
            <p className="mb-4">
              <strong>Objection Right.</strong> You may object to a new sub-processor by providing written
              notice within 30 days of our notification. If you object and we cannot reasonably accommodate
              your objection, you may terminate the affected Services without penalty by providing written
              notice within 30 days of our response. This termination right is your sole remedy for
              sub-processor objections.
            </p>
            <p className="mb-4">Current categories of sub-processors include:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Cloud infrastructure providers (AWS, Google Cloud)</li>
              <li>Communication services (Twilio)</li>
              <li>Payment processors (Stripe)</li>
              <li>Analytics providers</li>
              <li>Customer support tools</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3 mt-6">6.5 Data Breach Notification</h3>
            <p className="mb-4">
              In the event of a personal data breach, VexioHQ will:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Notify you within 72 hours of becoming aware of the breach</li>
              <li>Provide details of the nature of the breach, categories of data affected, and approximate number of individuals impacted</li>
              <li>Describe the likely consequences and measures taken to address the breach</li>
              <li>Cooperate with your breach response and notification requirements</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3 mt-6">6.6 Enterprise DPA</h3>
            <p className="mb-4">
              Enterprise customers may request a formal Data Processing Agreement with additional terms
              specific to their compliance requirements. Contact legal@vexiohq.com for enterprise DPA requests.
            </p>
          </section>

          {/* Section 7: Acceptable Use Policy */}
          <section id="acceptable-use" className="mb-12 scroll-mt-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-blue-600">
              7. Acceptable Use Policy
            </h2>

            <h3 className="text-xl font-semibold mb-3">7.1 Prohibited Content</h3>
            <p className="mb-4">You may not use our Services to create, store, or transmit:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Content that is illegal, harmful, threatening, abusive, or defamatory</li>
              <li>Content that infringes intellectual property rights</li>
              <li>Malicious code, viruses, or harmful software</li>
              <li>Personally identifiable information without proper consent</li>
              <li>Content that promotes discrimination or hate speech</li>
              <li>Pornographic or sexually explicit material</li>
              <li>Content that exploits minors</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3 mt-6">7.2 Spam Policy</h3>
            <p className="mb-4">
              Users of our communication features (email, SMS, voice) must comply with all applicable
              anti-spam laws. You agree NOT to:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Send unsolicited bulk messages</li>
              <li>Use purchased, rented, or scraped contact lists</li>
              <li>Send messages without proper consent</li>
              <li>Use misleading subject lines or sender information</li>
              <li>Fail to honor opt-out requests</li>
            </ul>
            <p className="mb-4">
              Violation of our spam policy may result in immediate account suspension.
            </p>

            <h3 className="text-xl font-semibold mb-3 mt-6">7.3 Abuse Reporting</h3>
            <p className="mb-4">
              To report abuse, spam, or violations of this policy:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Email: support@vexiohq.com</li>
              <li>Include relevant details, screenshots, and message headers if applicable</li>
            </ul>
            <p className="mb-4">
              We investigate all reports and take appropriate action, which may include account suspension
              or termination.
            </p>
          </section>

          {/* Section 8: Product-Specific Terms */}
          <section id="product-terms" className="mb-12 scroll-mt-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-blue-600">
              8. Product-Specific Terms
            </h2>

            {/* ISSUE-10: Generally Available Products */}
            <h3 className="text-xl font-semibold mb-3">8.1 Generally Available Products</h3>
            <p className="mb-4">
              The following products are currently generally available: <strong>VexioSales</strong>.
              Terms for generally available products apply upon your first use of such products.
            </p>

            {/* ISSUE-03: No Professional Advice Disclaimer */}
            <h3 className="text-xl font-semibold mb-3 mt-6">8.2 VexioSales Terms</h3>
            <p className="mb-4">
              VexioSales is our AI-powered sales intelligence platform. Additional terms include:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li><strong>Lead Data:</strong> You are responsible for the accuracy and legality of lead data you import</li>
              <li><strong>AI Voice Agents:</strong> Must comply with all telemarketing laws and regulations</li>
              <li><strong>Integrations:</strong> Third-party CRM integrations are subject to those providers&apos; terms</li>
              <li><strong>Usage Limits:</strong> Subject to your subscription tier limits on calls, leads, and AI credits</li>
              <li><strong>No Professional Advice:</strong> AI-generated recommendations and insights are informational tools only and do not constitute professional sales, legal, or business advice. You are solely responsible for verifying AI outputs and for all business decisions made using the Services.</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3 mt-6">8.3 VexioMarketing Terms</h3>
            <p className="mb-4">
              VexioMarketing is our AI marketing automation platform. Additional terms include:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li><strong>Email Marketing:</strong> Must comply with CAN-SPAM, GDPR, and other applicable laws</li>
              <li><strong>Contact Lists:</strong> You must have proper consent for all contacts</li>
              <li><strong>Content:</strong> AI-generated content must be reviewed before distribution</li>
              <li><strong>Sending Limits:</strong> Subject to your subscription tier limits</li>
              <li><strong>No Professional Advice:</strong> AI-generated marketing recommendations and content are informational tools only. You are solely responsible for reviewing, verifying, and approving all AI outputs before use.</li>
            </ul>

            {/* ISSUE-01 & ISSUE-03: HRM Tool-Only and AI Disclaimer */}
            <h3 className="text-xl font-semibold mb-3 mt-6">8.4 VexioHRM Terms</h3>
            <p className="mb-4">
              VexioHRM is our AI-powered human resources platform. Additional terms include:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li><strong>Employee Data:</strong> You are the data controller for employee information</li>
              <li><strong>Tool-Only Platform:</strong> VexioHRM is a software tool only. VexioHQ does not provide HR consulting, legal advice, or employment recommendations. VexioHQ is not your employer, co-employer, or joint employer, and is not the employer of any individuals whose data you process through the Services.</li>
              <li><strong>AI Outputs Require Human Review:</strong> AI-generated recommendations, scores, or suggestions related to hiring, performance, compensation, termination, or any other employment decision are informational tools only and do not constitute professional HR, legal, or employment advice. You must independently verify all AI outputs and exercise independent human judgment for all employment-related decisions. You are solely responsible for all hiring, termination, and other employment decisions.</li>
              <li><strong>Compliance:</strong> You are responsible for compliance with all applicable employment laws</li>
              <li><strong>Data Retention:</strong> Employee data retention must comply with applicable laws</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3 mt-6">8.5 VexioExpense Terms</h3>
            <p className="mb-4">
              VexioExpense is our smart expense management platform. Additional terms include:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li><strong>Financial Data:</strong> Bank connections use read-only access through secure providers</li>
              <li><strong>Receipt Processing:</strong> AI extraction may require manual verification</li>
              <li><strong>No Professional Advice:</strong> The Services do not constitute and are not a substitute for professional tax, accounting, or financial advice. You are solely responsible for verifying all AI-generated categorizations, calculations, and reports before relying on them for any purpose.</li>
              <li><strong>Data Security:</strong> Financial data is encrypted and stored securely</li>
            </ul>

            {/* ISSUE-10: Beta and Future Products */}
            <h3 className="text-xl font-semibold mb-3 mt-6">8.6 Beta and Future Products</h3>
            <p className="mb-4">
              Products marked as &quot;Coming Soon,&quot; &quot;Beta,&quot; or &quot;Preview&quot; are not generally available and may
              be subject to additional or different terms. Beta products are provided &quot;AS IS&quot; without warranty.
              By using a beta product, you acknowledge that: (a) the product may not function as expected;
              (b) features may change or be discontinued without notice; and (c) separate terms may apply
              upon general availability, which will require your express acceptance before continued use.
            </p>

            {/* ISSUE-11: Third-Party Platform Disclaimer */}
            <h3 className="text-xl font-semibold mb-3 mt-6">8.7 Third-Party Platforms and Integrations</h3>
            <p className="mb-4">
              The Services may integrate with or enable access to third-party platforms, including but not
              limited to LinkedIn, Gmail, Google Workspace, Salesforce, and other CRM or communication platforms.
              VexioHQ is not responsible for the availability, terms, policies, or actions of any third-party
              platform. Your use of third-party platforms is subject to those platforms&apos; terms of service.
              VexioHQ disclaims all liability for any account suspension, restriction, or termination imposed
              by third-party platforms as a result of your use of the Services, including any use of automation
              features. You are solely responsible for ensuring your use of the Services complies with all
              applicable third-party platform terms.
            </p>
          </section>

          {/* Section 9: Billing & Refunds */}
          <section id="billing" className="mb-12 scroll-mt-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-blue-600">
              9. Billing &amp; Refunds
            </h2>

            <h3 className="text-xl font-semibold mb-3">9.1 Payment Terms</h3>
            <p className="mb-4">
              All fees are stated in U.S. dollars unless otherwise specified. Payment is due upon
              subscription or as specified in your service agreement. We accept major credit cards
              and other payment methods as displayed during checkout.
            </p>

            <h3 className="text-xl font-semibold mb-3 mt-6">9.2 Subscription Billing</h3>
            <p className="mb-4">
              For subscription services:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Billing occurs in advance on a monthly or annual basis</li>
              <li>Subscriptions automatically renew unless canceled before the renewal date</li>
              <li>Price changes will be notified 30 days in advance</li>
              <li>Failed payments may result in service suspension</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3 mt-6">9.3 Refund Policy</h3>
            <p className="mb-4">
              Except as required by law:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li><strong>Monthly Subscriptions:</strong> No refunds for partial months</li>
              <li><strong>Annual Subscriptions:</strong> Pro-rata refund available within 30 days of purchase</li>
              <li><strong>Enterprise Agreements:</strong> Refund terms as specified in your contract</li>
              <li><strong>One-Time Purchases:</strong> Refunds considered on a case-by-case basis within 14 days</li>
            </ul>
            <p className="mb-4">
              To request a refund, contact billing@vexiohq.com with your account details and reason
              for the request.
            </p>

            {/* ISSUE-07: Harmonized Cancellation */}
            <h3 className="text-xl font-semibold mb-3 mt-6">9.4 Cancellation</h3>
            <p className="mb-4">
              You may cancel your subscription at any time through your account settings or by
              contacting support. Upon cancellation:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>You retain access until the end of your current billing period</li>
              <li>No refund is provided for the remaining period (unless within refund window)</li>
              <li>You may request export of your Customer Inputs and Customer Outputs for 30 days following cancellation</li>
              <li>After 30 days, your data will be deleted in accordance with our data retention policies</li>
            </ul>
          </section>

          {/* Section 10: Contact Information */}
          <section id="contact" className="mb-12 scroll-mt-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-blue-600">
              10. Contact Information
            </h2>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">VexioHQ</h3>
              <p className="text-lg mb-2">A Data Tranquil Inc. Company (S-Corp)</p>

              <div className="mt-6 space-y-4">
                <div>
                  <h4 className="font-semibold">General Inquiries</h4>
                  <p>Email: support@vexiohq.com</p>
                  <p>Phone: +1 (415) 390-5748</p>
                </div>

                <div>
                  <h4 className="font-semibold">Legal &amp; Compliance</h4>
                  <p>Email: legal@vexiohq.com</p>
                </div>

                <div>
                  <h4 className="font-semibold">Privacy Concerns</h4>
                  <p>Email: privacy@vexiohq.com</p>
                </div>

                <div>
                  <h4 className="font-semibold">Billing Questions</h4>
                  <p>Email: billing@vexiohq.com</p>
                </div>

                <div>
                  <h4 className="font-semibold">Abuse Reports</h4>
                  <p>Email: support@vexiohq.com</p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <h3 className="text-xl font-semibold mb-4">Our Products</h3>
              <ul className="list-disc pl-6 mb-4">
                <li><strong>VexioSales:</strong> AI-powered sales intelligence platform (Generally Available)</li>
                <li><strong>VexioMarketing:</strong> AI marketing automation (Coming Soon)</li>
                <li><strong>VexioHRM:</strong> AI-powered human resources (Coming Soon)</li>
                <li><strong>VexioExpense:</strong> Smart expense management (Coming Soon)</li>
              </ul>
            </div>
          </section>

          {/* General Provisions */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-blue-600">
              General Provisions
            </h2>

            <h3 className="text-xl font-semibold mb-3">Entire Agreement</h3>
            <p className="mb-4">
              These Terms, together with our Privacy Notice, Cookie Notice, and any product-specific
              agreements you expressly accept, constitute the entire agreement between you and VexioHQ
              regarding the Services.
            </p>

            <h3 className="text-xl font-semibold mb-3 mt-6">Severability</h3>
            <p className="mb-4">
              If any provision of these Terms is found to be unenforceable, the remaining provisions
              shall continue in full force and effect.
            </p>

            <h3 className="text-xl font-semibold mb-3 mt-6">Waiver</h3>
            <p className="mb-4">
              Our failure to enforce any right or provision of these Terms shall not constitute a
              waiver of such right or provision.
            </p>

            <h3 className="text-xl font-semibold mb-3 mt-6">Assignment</h3>
            <p className="mb-4">
              You may not assign or transfer these Terms without our prior written consent. We may
              assign these Terms without restriction.
            </p>

            <h3 className="text-xl font-semibold mb-3 mt-6">Changes to These Terms</h3>
            <p className="mb-4">
              We may update these Terms from time to time. We will notify you of material changes by
              posting the new Terms on this page and updating the &quot;Last Updated&quot; date. For significant
              changes, we may also send you an email notification. Your continued use of the Services
              after any changes constitutes acceptance of the new Terms.
            </p>
          </section>

          {/* Related Documents */}
          <section className="mb-8 border-t pt-8">
            <h2 className="text-2xl font-semibold mb-4">Related Documents</h2>
            <ul className="list-disc pl-6">
              <li><Link href="/privacy-notice" className="text-blue-600 hover:underline">Privacy Notice</Link></li>
              <li><Link href="/cookie-notice" className="text-blue-600 hover:underline">Cookie Notice</Link></li>
              <li><Link href="/legal/sub-processors" className="text-blue-600 hover:underline">Sub-Processor List</Link></li>
            </ul>
          </section>

          {/* ISSUE-12: Normalized Compliance Badges */}
          <section className="mb-8 border-t pt-8">
            <h2 className="text-2xl font-semibold mb-4">Compliance</h2>
            <div className="flex flex-wrap gap-4 text-sm">
              <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full">TCPA Compliant</span>
              <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full">CAN-SPAM Compliant</span>
              <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full">CCPA Compliant</span>
              <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full">GDPR Compliant</span>
              <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full">COPPA Compliant</span>
              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full">SOC 2 In Progress</span>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

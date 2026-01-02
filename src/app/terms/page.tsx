import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service | VexioHQ',
  description: 'VexioHQ Terms of Service - Read our terms and conditions for using our AI-powered business solutions, including VexioSales, consulting services, and platform access.',
};

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Terms of Service</h1>

        <div className="prose prose-lg max-w-none">
          <p className="text-sm text-gray-600 mb-8">Last Updated: January 1, 2025</p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">1. Acceptance of Terms</h2>
            <p>
              Welcome to VexioHQ. These Terms of Service ("Terms") govern your access to and use of
              VexioHQ's website (vexiohq.com), products, and services, including VexioSales and our
              AI consulting services (collectively, the "Services"). VexioHQ is a brand operated by
              Datatranquil Inc. ("Company," "we," "our," or "us").
            </p>
            <p className="mt-4">
              By accessing or using our Services, you agree to be bound by these Terms and our Privacy
              Notice. If you do not agree to these Terms, you may not access or use the Services.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">2. Description of Services</h2>
            <p>VexioHQ provides AI-powered business solutions, including but not limited to:</p>
            <ul className="list-disc pl-6 mb-4">
              <li><strong>VexioSales:</strong> AI-powered sales intelligence platform with lead scoring, voice agents, response automation, and analytics</li>
              <li><strong>AI Consulting Services:</strong> Strategic AI advisory, implementation, and digital transformation consulting</li>
              <li><strong>VexioExpense:</strong> Smart expense tracking and management (Coming Soon)</li>
              <li><strong>VexioHR:</strong> AI-powered human resources platform (Planned)</li>
              <li><strong>VexioMarketing:</strong> AI marketing automation (Planned)</li>
            </ul>
            <p>
              We reserve the right to modify, suspend, or discontinue any part of the Services at any
              time with or without notice.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">3. User Accounts</h2>

            <h3 className="text-xl font-semibold mb-2">3.1 Account Registration</h3>
            <p>
              To access certain features of our Services, you may be required to create an account.
              You agree to provide accurate, current, and complete information during registration
              and to update such information to keep it accurate, current, and complete.
            </p>

            <h3 className="text-xl font-semibold mb-2 mt-4">3.2 Account Security</h3>
            <p>
              You are responsible for safeguarding your account credentials and for all activities
              that occur under your account. You agree to notify us immediately of any unauthorized
              use of your account or any other security breach.
            </p>

            <h3 className="text-xl font-semibold mb-2 mt-4">3.3 Account Termination</h3>
            <p>
              We reserve the right to suspend or terminate your account at any time for any reason,
              including if we reasonably believe you have violated these Terms.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">4. Subscription and Payment Terms</h2>

            <h3 className="text-xl font-semibold mb-2">4.1 Fees</h3>
            <p>
              Certain Services require payment of fees. All fees are stated in U.S. dollars unless
              otherwise specified. You agree to pay all applicable fees as described on the pricing
              page or in your service agreement.
            </p>

            <h3 className="text-xl font-semibold mb-2 mt-4">4.2 Billing</h3>
            <p>
              For subscription services, you will be billed in advance on a recurring basis (monthly
              or annually) depending on your selected plan. Your subscription will automatically renew
              unless you cancel before the renewal date.
            </p>

            <h3 className="text-xl font-semibold mb-2 mt-4">4.3 Refunds</h3>
            <p>
              Except as required by law or as explicitly stated in writing, all fees are non-refundable.
              For enterprise clients, refund terms may be specified in your individual service agreement.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">5. Acceptable Use Policy</h2>
            <p>You agree not to use the Services to:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Violate any applicable law, regulation, or third-party rights</li>
              <li>Transmit any malicious code, viruses, or harmful data</li>
              <li>Attempt to gain unauthorized access to our systems or other users' accounts</li>
              <li>Interfere with or disrupt the integrity or performance of the Services</li>
              <li>Engage in any fraudulent, deceptive, or misleading activity</li>
              <li>Send unsolicited communications (spam) through our platform</li>
              <li>Use automated systems or software to extract data from the Services (scraping)</li>
              <li>Reverse engineer, decompile, or disassemble any part of the Services</li>
              <li>Use the Services to compete with VexioHQ or for benchmarking purposes</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">6. AI Services and Data Usage</h2>

            <h3 className="text-xl font-semibold mb-2">6.1 AI-Generated Content</h3>
            <p>
              Our Services utilize artificial intelligence to generate content, insights, and
              recommendations. While we strive for accuracy, AI-generated outputs may contain
              errors or inaccuracies. You are responsible for reviewing and verifying any
              AI-generated content before use.
            </p>

            <h3 className="text-xl font-semibold mb-2 mt-4">6.2 Your Data</h3>
            <p>
              You retain ownership of all data you submit to our Services ("Your Data"). By using
              our Services, you grant us a limited license to process Your Data solely to provide
              the Services. We will not use Your Data to train our AI models without your explicit
              consent.
            </p>

            <h3 className="text-xl font-semibold mb-2 mt-4">6.3 Data Security</h3>
            <p>
              We implement industry-standard security measures to protect Your Data. However, no
              method of transmission or storage is 100% secure. You acknowledge and accept this
              inherent risk.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">7. Intellectual Property</h2>

            <h3 className="text-xl font-semibold mb-2">7.1 Our IP</h3>
            <p>
              The Services, including all software, content, designs, logos, and trademarks, are
              owned by or licensed to VexioHQ and are protected by intellectual property laws.
              You may not copy, modify, distribute, or create derivative works without our prior
              written consent.
            </p>

            <h3 className="text-xl font-semibold mb-2 mt-4">7.2 Feedback</h3>
            <p>
              If you provide us with feedback or suggestions regarding the Services, you grant us
              the right to use such feedback without restriction or compensation to you.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">8. Third-Party Services</h2>
            <p>
              Our Services may integrate with or contain links to third-party services (e.g., CRM
              systems, email providers, communication platforms). We are not responsible for the
              content, privacy practices, or terms of third-party services. Your use of third-party
              services is at your own risk.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">9. Disclaimers</h2>
            <p className="uppercase font-semibold">
              THE SERVICES ARE PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND,
              EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO IMPLIED WARRANTIES OF
              MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.
            </p>
            <p className="mt-4">
              We do not warrant that the Services will be uninterrupted, error-free, or secure.
              We do not guarantee any specific results from using the Services, including sales
              performance, lead conversion, or revenue outcomes.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">10. Limitation of Liability</h2>
            <p className="uppercase font-semibold">
              TO THE MAXIMUM EXTENT PERMITTED BY LAW, VEXIOHQ AND ITS AFFILIATES, OFFICERS,
              DIRECTORS, EMPLOYEES, AND AGENTS SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL,
              SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING BUT NOT LIMITED TO LOSS OF
              PROFITS, DATA, OR BUSINESS OPPORTUNITIES, ARISING OUT OF OR RELATED TO YOUR USE OF
              THE SERVICES.
            </p>
            <p className="mt-4">
              Our total liability for any claims arising from these Terms or your use of the
              Services shall not exceed the greater of (a) the amount you paid to us in the 12
              months preceding the claim, or (b) $100 USD.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">11. Indemnification</h2>
            <p>
              You agree to indemnify, defend, and hold harmless VexioHQ and its affiliates, officers,
              directors, employees, and agents from any claims, damages, losses, liabilities, and
              expenses (including reasonable attorneys' fees) arising out of or related to:
            </p>
            <ul className="list-disc pl-6">
              <li>Your use of the Services</li>
              <li>Your violation of these Terms</li>
              <li>Your violation of any third-party rights</li>
              <li>Your Data or content you submit through the Services</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">12. Governing Law and Dispute Resolution</h2>

            <h3 className="text-xl font-semibold mb-2">12.1 Governing Law</h3>
            <p>
              These Terms shall be governed by and construed in accordance with the laws of the
              State of California, United States, without regard to its conflict of law provisions.
            </p>

            <h3 className="text-xl font-semibold mb-2 mt-4">12.2 Dispute Resolution</h3>
            <p>
              Any disputes arising from these Terms or the Services shall first be attempted to
              be resolved through good-faith negotiation. If the dispute cannot be resolved within
              30 days, either party may pursue binding arbitration in San Francisco, California,
              administered by JAMS under its Comprehensive Arbitration Rules.
            </p>

            <h3 className="text-xl font-semibold mb-2 mt-4">12.3 Class Action Waiver</h3>
            <p>
              You agree that any dispute resolution proceedings will be conducted only on an
              individual basis and not in a class, consolidated, or representative action.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">13. General Provisions</h2>

            <h3 className="text-xl font-semibold mb-2">13.1 Entire Agreement</h3>
            <p>
              These Terms, together with our Privacy Notice and any service-specific agreements,
              constitute the entire agreement between you and VexioHQ regarding the Services.
            </p>

            <h3 className="text-xl font-semibold mb-2 mt-4">13.2 Severability</h3>
            <p>
              If any provision of these Terms is found to be unenforceable, the remaining provisions
              shall continue in full force and effect.
            </p>

            <h3 className="text-xl font-semibold mb-2 mt-4">13.3 Waiver</h3>
            <p>
              Our failure to enforce any right or provision of these Terms shall not constitute a
              waiver of such right or provision.
            </p>

            <h3 className="text-xl font-semibold mb-2 mt-4">13.4 Assignment</h3>
            <p>
              You may not assign or transfer these Terms without our prior written consent. We may
              assign these Terms without restriction.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">14. Changes to These Terms</h2>
            <p>
              We may update these Terms from time to time. We will notify you of any material changes
              by posting the new Terms on this page and updating the "Last Updated" date. Your
              continued use of the Services after any changes constitutes acceptance of the new Terms.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">15. Contact Us</h2>
            <p>If you have any questions about these Terms, please contact us at:</p>
            <div className="bg-gray-50 p-4 rounded-lg mt-4">
              <p><strong>VexioHQ Legal Team</strong></p>
              <p>A Datatranquil Inc. company</p>
              <p className="mt-2">Email: legal@vexiohq.com</p>
              <p>Phone: +1 (415) 390-5748</p>
              <p>Address: 535 Mission Street, 14th Floor, San Francisco, CA 94105</p>
            </div>
          </section>

          <section className="mb-8 border-t pt-8">
            <h2 className="text-2xl font-semibold mb-4">Related Documents</h2>
            <ul className="list-disc pl-6">
              <li><a href="/privacy-notice" className="text-blue-600 hover:underline">Privacy Notice</a></li>
              <li><a href="/cookie-notice" className="text-blue-600 hover:underline">Cookie Notice</a></li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}

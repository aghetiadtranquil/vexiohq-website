import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Notice | DataTranquil',
  description: 'DataTranquil Privacy Notice - Learn how we collect, use, and protect your personal information in compliance with GDPR and other privacy regulations.',
};

export default function PrivacyNotice() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Privacy Notice</h1>
        
        <div className="prose prose-lg max-w-none">
          <p className="text-sm text-gray-600 mb-8">Last Updated: {new Date().toLocaleDateString()}</p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
            <p>
              DataTranquil ("we," "our," or "us") is committed to protecting your privacy. This Privacy Notice 
              explains how we collect, use, disclose, and safeguard your information when you visit our website 
              datatranquil.com and use our services.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">2. Information We Collect</h2>
            
            <h3 className="text-xl font-semibold mb-2">Personal Information</h3>
            <ul className="list-disc pl-6 mb-4">
              <li>Name and contact details (email, phone number, address)</li>
              <li>Company information and job title</li>
              <li>Professional information</li>
              <li>Communication preferences</li>
              <li>Information provided through forms and surveys</li>
            </ul>

            <h3 className="text-xl font-semibold mb-2">Automatically Collected Information</h3>
            <ul className="list-disc pl-6 mb-4">
              <li>IP address and device information</li>
              <li>Browser type and operating system</li>
              <li>Pages visited and time spent on site</li>
              <li>Referring website addresses</li>
              <li>Cookie and tracking technology data</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">3. How We Use Your Information</h2>
            <ul className="list-disc pl-6">
              <li>To provide and improve our services</li>
              <li>To communicate with you about our services</li>
              <li>To send marketing communications (with your consent)</li>
              <li>To analyze website usage and improve user experience</li>
              <li>To comply with legal obligations</li>
              <li>To protect our rights and prevent fraud</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">4. Legal Basis for Processing (GDPR)</h2>
            <p>We process your personal data based on:</p>
            <ul className="list-disc pl-6">
              <li><strong>Consent:</strong> For marketing communications and optional cookies</li>
              <li><strong>Contract:</strong> To provide services you've requested</li>
              <li><strong>Legitimate Interests:</strong> For business operations and improvement</li>
              <li><strong>Legal Obligation:</strong> To comply with applicable laws</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">5. Data Sharing and Disclosure</h2>
            <p>We may share your information with:</p>
            <ul className="list-disc pl-6">
              <li>Service providers and business partners</li>
              <li>Analytics and advertising partners</li>
              <li>Legal and regulatory authorities when required</li>
              <li>Potential buyers in case of business transfer</li>
            </ul>
            <p className="mt-4">We do not sell your personal information to third parties.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">6. International Data Transfers</h2>
            <p>
              Your information may be transferred to and processed in countries other than your own. 
              We ensure appropriate safeguards are in place, including Standard Contractual Clauses 
              approved by the European Commission.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">7. Data Retention</h2>
            <p>
              We retain your personal information only for as long as necessary to fulfill the purposes 
              outlined in this Privacy Notice, unless a longer retention period is required by law.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">8. Your Rights (GDPR)</h2>
            <p>Under GDPR, you have the right to:</p>
            <ul className="list-disc pl-6">
              <li><strong>Access:</strong> Request a copy of your personal data</li>
              <li><strong>Rectification:</strong> Correct inaccurate or incomplete data</li>
              <li><strong>Erasure:</strong> Request deletion of your data ("right to be forgotten")</li>
              <li><strong>Restriction:</strong> Limit how we process your data</li>
              <li><strong>Portability:</strong> Receive your data in a portable format</li>
              <li><strong>Object:</strong> Oppose certain types of processing</li>
              <li><strong>Withdraw Consent:</strong> Where processing is based on consent</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">9. California Privacy Rights (CCPA)</h2>
            <p>California residents have additional rights including:</p>
            <ul className="list-disc pl-6">
              <li>Right to know what personal information is collected</li>
              <li>Right to delete personal information</li>
              <li>Right to opt-out of the sale of personal information</li>
              <li>Right to non-discrimination</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">10. Data Security</h2>
            <p>
              We implement appropriate technical and organizational measures to protect your personal 
              information against unauthorized access, alteration, disclosure, or destruction.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">11. Children's Privacy</h2>
            <p>
              Our services are not directed to individuals under 16. We do not knowingly collect 
              personal information from children under 16.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">12. Contact Us</h2>
            <p>For privacy-related questions or to exercise your rights, contact us at:</p>
            <div className="bg-gray-50 p-4 rounded-lg mt-4">
              <p><strong>DataTranquil Privacy Team</strong></p>
              <p>Email: privacy@datatranquil.com</p>
              <p>Phone: +1-415-255-5501</p>
              <p>Address: San Francisco, CA, USA</p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">13. Supervisory Authority</h2>
            <p>
              EU residents have the right to lodge a complaint with their local data protection authority 
              if they believe their rights have been violated.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">14. Changes to This Notice</h2>
            <p>
              We may update this Privacy Notice periodically. We will notify you of any material changes 
              by posting the new Privacy Notice on this page and updating the "Last Updated" date.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
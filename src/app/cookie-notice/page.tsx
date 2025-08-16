import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Cookie Policy | DataTranquil',
  description: 'DataTranquil Cookie Policy - Learn about how we use cookies and similar technologies on our website.',
};

export default function CookiePolicy() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Cookie Policy</h1>
        
        <div className="prose prose-lg max-w-none">
          <p className="text-sm text-gray-600 mb-8">Last Updated: {new Date().toLocaleDateString()}</p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">1. What Are Cookies</h2>
            <p>
              Cookies are small text files that are placed on your device when you visit our website. 
              They help us provide you with a better experience by remembering your preferences, 
              analyzing how you use our site, and enabling certain functionalities.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">2. How We Use Cookies</h2>
            <p>DataTranquil uses cookies and similar technologies for the following purposes:</p>
            <ul className="list-disc pl-6 mt-4">
              <li><strong>Essential Operations:</strong> To provide core website functionality</li>
              <li><strong>Performance Analysis:</strong> To understand how visitors use our site</li>
              <li><strong>Functionality:</strong> To remember your preferences and settings</li>
              <li><strong>Marketing:</strong> To deliver relevant advertisements and measure their effectiveness</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">3. Types of Cookies We Use</h2>
            
            <h3 className="text-xl font-semibold mb-2 mt-6">Strictly Necessary Cookies</h3>
            <p>These cookies are essential for the website to function properly.</p>
            <table className="w-full mt-4 border-collapse">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-2">Cookie Name</th>
                  <th className="text-left py-2">Purpose</th>
                  <th className="text-left py-2">Duration</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="py-2">sessionId</td>
                  <td className="py-2">Maintains user session</td>
                  <td className="py-2">Session</td>
                </tr>
                <tr className="border-b">
                  <td className="py-2">cookieConsent</td>
                  <td className="py-2">Stores cookie preferences</td>
                  <td className="py-2">1 year</td>
                </tr>
              </tbody>
            </table>

            <h3 className="text-xl font-semibold mb-2 mt-6">Performance Cookies</h3>
            <p>These cookies help us understand how visitors interact with our website.</p>
            <table className="w-full mt-4 border-collapse">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-2">Cookie Name</th>
                  <th className="text-left py-2">Provider</th>
                  <th className="text-left py-2">Purpose</th>
                  <th className="text-left py-2">Duration</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="py-2">_ga</td>
                  <td className="py-2">Google Analytics</td>
                  <td className="py-2">Distinguishes users</td>
                  <td className="py-2">2 years</td>
                </tr>
                <tr className="border-b">
                  <td className="py-2">_gid</td>
                  <td className="py-2">Google Analytics</td>
                  <td className="py-2">Distinguishes users</td>
                  <td className="py-2">24 hours</td>
                </tr>
              </tbody>
            </table>

            <h3 className="text-xl font-semibold mb-2 mt-6">Functional Cookies</h3>
            <p>These cookies enable enhanced functionality and personalization.</p>
            <table className="w-full mt-4 border-collapse">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-2">Cookie Name</th>
                  <th className="text-left py-2">Purpose</th>
                  <th className="text-left py-2">Duration</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="py-2">theme</td>
                  <td className="py-2">Stores theme preference</td>
                  <td className="py-2">1 year</td>
                </tr>
                <tr className="border-b">
                  <td className="py-2">language</td>
                  <td className="py-2">Stores language preference</td>
                  <td className="py-2">1 year</td>
                </tr>
              </tbody>
            </table>

            <h3 className="text-xl font-semibold mb-2 mt-6">Targeting/Marketing Cookies</h3>
            <p>These cookies are used to deliver relevant advertisements.</p>
            <table className="w-full mt-4 border-collapse">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-2">Cookie Name</th>
                  <th className="text-left py-2">Provider</th>
                  <th className="text-left py-2">Purpose</th>
                  <th className="text-left py-2">Duration</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="py-2">IDE</td>
                  <td className="py-2">Google</td>
                  <td className="py-2">Ad targeting</td>
                  <td className="py-2">1 year</td>
                </tr>
                <tr className="border-b">
                  <td className="py-2">_fbp</td>
                  <td className="py-2">Facebook</td>
                  <td className="py-2">Ad targeting</td>
                  <td className="py-2">3 months</td>
                </tr>
              </tbody>
            </table>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">4. Third-Party Cookies</h2>
            <p>
              Some cookies are placed by third-party services that appear on our pages. We do not control 
              these cookies and recommend reviewing the privacy policies of these third parties:
            </p>
            <ul className="list-disc pl-6 mt-4">
              <li>Google Analytics: <a href="https://policies.google.com/privacy" className="text-blue-600 hover:underline">Privacy Policy</a></li>
              <li>Facebook: <a href="https://www.facebook.com/policy.php" className="text-blue-600 hover:underline">Privacy Policy</a></li>
              <li>LinkedIn: <a href="https://www.linkedin.com/legal/privacy-policy" className="text-blue-600 hover:underline">Privacy Policy</a></li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">5. Managing Cookies</h2>
            <p>You have several options for managing cookies:</p>
            
            <h3 className="text-xl font-semibold mb-2 mt-4">Through Our Cookie Preference Center</h3>
            <p>
              You can manage your cookie preferences at any time by clicking the "Cookie Settings" 
              link in our website footer or by clearing your cookies to see the preference center again.
            </p>

            <h3 className="text-xl font-semibold mb-2 mt-4">Through Your Browser</h3>
            <p>
              Most browsers allow you to control cookies through their settings. Here are instructions 
              for common browsers:
            </p>
            <ul className="list-disc pl-6 mt-2">
              <li><a href="https://support.google.com/chrome/answer/95647" className="text-blue-600 hover:underline">Chrome</a></li>
              <li><a href="https://support.mozilla.org/en-US/kb/cookies-information-websites-store-on-your-computer" className="text-blue-600 hover:underline">Firefox</a></li>
              <li><a href="https://support.apple.com/guide/safari/manage-cookies-and-website-data-sfri11471/mac" className="text-blue-600 hover:underline">Safari</a></li>
              <li><a href="https://support.microsoft.com/en-us/help/17442/windows-internet-explorer-delete-manage-cookies" className="text-blue-600 hover:underline">Internet Explorer</a></li>
            </ul>

            <h3 className="text-xl font-semibold mb-2 mt-4">Opt-Out Tools</h3>
            <p>You can opt out of targeted advertising through:</p>
            <ul className="list-disc pl-6 mt-2">
              <li><a href="http://www.aboutads.info/choices/" className="text-blue-600 hover:underline">Digital Advertising Alliance</a></li>
              <li><a href="http://www.networkadvertising.org/choices/" className="text-blue-600 hover:underline">Network Advertising Initiative</a></li>
              <li><a href="http://www.youronlinechoices.eu/" className="text-blue-600 hover:underline">European Digital Advertising Alliance</a></li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">6. Consequences of Disabling Cookies</h2>
            <p>
              If you disable cookies, some features of our website may not function properly. 
              For example, you may not be able to access certain secure areas, save preferences, 
              or use interactive features.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">7. Updates to This Policy</h2>
            <p>
              We may update this Cookie Policy from time to time. We will notify you of any changes 
              by posting the new Cookie Policy on this page and updating the "Last Updated" date.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">8. Contact Us</h2>
            <p>If you have questions about our use of cookies, please contact us at:</p>
            <div className="bg-gray-50 p-4 rounded-lg mt-4">
              <p><strong>DataTranquil Privacy Team</strong></p>
              <p>Email: privacy@datatranquil.com</p>
              <p>Phone: +1-415-255-5501</p>
              <p>Address: San Francisco, CA, USA</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
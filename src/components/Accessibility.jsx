import React from 'react';

export default function Accessibility() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-white">
      <div className="max-w-4xl mx-auto px-6 py-24">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">
          Accessibility Statement
        </h1>

        {/* All the sections I provided earlier go here */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-purple-800 mb-4">
            Our Commitment to Accessibility
          </h2>
          <p className="text-gray-600 leading-relaxed">
            SaaSBay is committed to ensuring digital accessibility for people
            with disabilities...
          </p>
        </section>

        <section>
          <h3>Accessibility Standards</h3>
          <p>
            We aim to conform to the Web Content Accessibility Guidelines (WCAG)
            2.1 at Level AA. These guidelines help make web content more
            accessible to people with disabilities.
          </p>
        </section>

        <section>
          <h3>What We've Implemented</h3>
          <ul>
            <li>Alternative text for images and graphics</li>
            <li>Keyboard navigation support</li>
            <li>High color contrast ratios for better readability</li>
            <li>Clear and consistent navigation structure</li>
            <li>Responsive design for various devices and screen sizes</li>
            <li>Accessible forms with proper labels</li>
          </ul>
        </section>

        <section>
          <h3>Areas We're Working On</h3>
          <p>
            As a growing platform, we're continuously improving accessibility.
            Currently known limitations include:
          </p>
          <ul>
            <li>
              Some vendor-submitted content may not meet full accessibility
              standards
            </li>
            <li>
              We're working on adding more comprehensive screen reader support
            </li>
            <li>Video content accessibility features are being enhanced</li>
          </ul>
        </section>

        <section>
          <h3>Get Accessibility Support</h3>
          <p>
            If you experience any accessibility barriers on our website, please
            contact us:
          </p>
          <ul>
            <li>Email: accessibility@saasbay.com</li>
            <li>Phone: +91 XXX-XXX-XXXX</li>
            <li>
              Contact form: <Link to="/contact">Contact Us</Link>
            </li>
          </ul>
          <p>
            We will work with you to provide the information or service you need
            through alternative methods.
          </p>
        </section>

        <section>
          <h3>Our Ongoing Commitment</h3>
          <p>
            We are continuously working to improve accessibility across our
            platform:
          </p>
          <ul>
            <li>Regular accessibility audits and testing</li>
            <li>User feedback integration</li>
            <li>Staff training on accessibility best practices</li>
            <li>Vendor guidelines for accessible content submission</li>
          </ul>
        </section>

        <section>
          <p>
            <small>
              This accessibility statement was last updated on [Current Date].
            </small>
          </p>
        </section>
      </div>
    </div>
  );
}

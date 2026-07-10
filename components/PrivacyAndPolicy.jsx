
export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-2xl p-8 md:p-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">
          Privacy Policy
        </h1>

        <p className="text-gray-500 mb-8">
          Last Updated: July 10, 2026
        </p>

        <div className="space-y-8 text-gray-700 leading-8">
          <section>
            <h2 className="text-2xl font-semibold mb-3">
              1. Introduction
            </h2>
            <p>
              Welcome to <strong>Resuvix</strong>. Your privacy is important to
              us. This Privacy Policy explains how we collect, use, and protect
              your personal information when you use our platform.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">
              2. Information We Collect
            </h2>

            <ul className="list-disc ml-6 space-y-2">
              <li>Name and email address</li>
              <li>Profile picture (if you sign in with Google)</li>
              <li>Uploaded resumes (PDF)</li>
              <li>Resume analysis results and ATS scores</li>
              <li>Device and browser information</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">
              3. How We Use Your Information
            </h2>

            <ul className="list-disc ml-6 space-y-2">
              <li>Analyze your resume using AI.</li>
              <li>Provide ATS scores and improvement suggestions.</li>
              <li>Improve our platform and user experience.</li>
              <li>Maintain your account and resume history.</li>
              <li>Provide customer support.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">
              4. Data Security
            </h2>

            <p>
              We implement appropriate security measures to protect your
              personal information. While no system is completely secure, we
              strive to use industry-standard practices to safeguard your data.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">
              5. Data Sharing
            </h2>

            <p>
              We do not sell your personal information. We may share data only
              with trusted service providers that help operate our platform,
              such as authentication, hosting, and AI services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">
              7. Your Rights
            </h2>

            <ul className="list-disc ml-6 space-y-2">
              <li>Access your personal information.</li>
              <li>Update your account details.</li>
              <li>Request deletion of your account and data.</li>
              <li>Contact us with any privacy-related questions.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">
              8. Changes to This Policy
            </h2>

            <p>
              We may update this Privacy Policy from time to time. Any changes
              will be posted on this page with the updated revision date.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">
              9. Contact Us
            </h2>

            <p>
              If you have any questions about this Privacy Policy, please
              contact us at:
            </p>

            <div className="mt-4 rounded-xl bg-gray-100 p-4">
              <p>
                <strong>Email:</strong> support@resuvix.com
              </p>
              <p>
                <strong>Website:</strong> https://resuvix.vercel.app
              </p>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
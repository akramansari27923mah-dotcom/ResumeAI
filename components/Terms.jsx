export default function TermsOfService() {
  return (
    <main className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-8 md:p-12">
        <h1 className="text-4xl font-bold text-gray-900">
          Terms of Service
        </h1>

        <p className="text-gray-500 mt-2 mb-8">
          Last Updated: July 10, 2026
        </p>

        <div className="space-y-8 text-gray-700 leading-8">
          <section>
            <h2 className="text-2xl font-semibold mb-3">
              1. Acceptance of Terms
            </h2>
            <p>
              By accessing or using Resuvix, you agree to these Terms of
              Service. If you do not agree with any part of these terms,
              please do not use our platform.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">
              2. Our Services
            </h2>
            <p>
              Resuvix provides AI-powered resume analysis, ATS scoring,
              resume feedback, and career-related tools to help users
              improve their resumes.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">
              3. User Responsibilities
            </h2>

            <ul className="list-disc ml-6 space-y-2">
              <li>Provide accurate information.</li>
              <li>Do not upload harmful or illegal content.</li>
              <li>Do not attempt to misuse or disrupt the platform.</li>
              <li>Keep your account credentials secure.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">
              4. Intellectual Property
            </h2>

            <p>
              All content, branding, logos, designs, and software on
              Resuvix are owned by Resuvix or its licensors. You may not
              copy, distribute, or reproduce any part of the platform
              without permission.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">
              5. AI Disclaimer
            </h2>

            <p>
              Resume analysis and ATS scores are generated using AI and
              are intended to provide guidance only. We do not guarantee
              job interviews, employment, or recruitment outcomes.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">
              6. Limitation of Liability
            </h2>

            <p>
              Resuvix is provided `as is` without warranties of any kind.
              We are not responsible for any direct or indirect damages
              resulting from the use of our platform.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">
              7. Account Termination
            </h2>

            <p>
              We reserve the right to suspend or terminate accounts that
              violate these Terms of Service or misuse the platform.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">
              8. Changes to These Terms
            </h2>

            <p>
              We may update these Terms of Service from time to time.
              Continued use of Resuvix after changes are published
              indicates your acceptance of the updated terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">
              9. Contact Us
            </h2>

            <div className="rounded-xl bg-gray-100 p-4">
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
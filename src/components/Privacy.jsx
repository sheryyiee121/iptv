import SeoHead from './SeoHead'

const LAST_UPDATED = '13 November 2026'

export default function Privacy() {
  return (
    <main className="relative bg-[#0a0a0a] pt-32 pb-24">
      <SeoHead />

      <article className="max-w-3xl mx-auto px-6 sm:px-8">
        <h1 className="text-3xl sm:text-4xl font-black text-white mb-3 leading-tight">Privacy Policy</h1>
        <p className="text-gray-500 text-sm mb-10">Last updated: {LAST_UPDATED}</p>

        <div className="space-y-10 text-gray-300 text-base leading-relaxed">
          <section>
            <h2 className="text-xl font-bold text-white mb-3">1. Who we are</h2>
            <p>
              This policy explains how Quick TV Packages uses information when you visit{' '}
              <a href="https://www.quicktvpackages.co.uk/" className="text-sky-400 hover:underline">www.quicktvpackages.co.uk</a>
              {' '}or contact us about an IPTV subscription.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">2. What we collect</h2>
            <p className="mb-4">We may collect:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Name, email address and message if you submit the contact form (this opens WhatsApp with those details).</li>
              <li>Phone number if you call or message us on WhatsApp (+19433009678).</li>
              <li>Technical data such as browser type, pages viewed and approximate location from Google Analytics (GA4), if you allow analytics cookies in your browser.</li>
              <li>Ad-related data if Google AdSense is shown on the site.</li>
            </ul>
            <p className="mt-4">We do not ask you to create an account on this website.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">3. How we use it</h2>
            <p>
              We use contact details to answer enquiries, set up subscriptions you request, and provide support. We use analytics to understand which pages are used. We do not sell your personal information.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">4. Who we share it with</h2>
            <p>
              Messages you send via WhatsApp are processed by WhatsApp / Meta. Analytics and ads are processed by Google. Hosting is on Vercel. We only share what is needed for those services to run.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">5. How long we keep it</h2>
            <p>
              Enquiry messages are kept as long as needed to complete your order or support request, and then as required for accounting or legal reasons. You can ask us to delete contact details we hold by emailing us.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">6. Your rights</h2>
            <p>
              If you are in the UK, you can ask for a copy of personal data we hold about you, ask us to correct it, or ask us to delete it where we do not need to keep it. Contact us using the details below.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">7. Contact</h2>
            <p>
              Email:{' '}
              <a href="mailto:muhammad.sherazz932@gmail.com" className="text-sky-400 hover:underline">muhammad.sherazz932@gmail.com</a>
              <br />
              Phone / WhatsApp:{' '}
              <a href="tel:+19433009678" className="text-sky-400 hover:underline">+19433009678</a>
            </p>
          </section>
        </div>
      </article>
    </main>
  )
}

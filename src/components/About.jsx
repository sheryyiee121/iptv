import SeoHead from './SeoHead'

export default function About() {
  return (
    <main className="relative bg-[#0a0a0a] pt-32 pb-24">
      <SeoHead />

      <article className="max-w-3xl mx-auto px-6 sm:px-8">
        <h1 className="text-3xl sm:text-4xl font-black text-white mb-3 leading-tight">About Quick TV Packages</h1>
        <p className="text-gray-500 text-sm mb-10">UK IPTV for Firestick, Sky Glass and Smart TVs</p>

        <div className="space-y-6 text-gray-300 text-base leading-relaxed">
          <p>
            Quick TV Packages supplies IPTV subscriptions for viewers in the United Kingdom. We help customers watch live TV, sports, films and on-demand titles on devices they already own — including Amazon Fire Stick, Fire TV Stick 4K, Sky Glass and other Smart TVs.
          </p>
          <p>
            Plans, prices and device limits are listed on our{' '}
            <a href="/pricing" className="text-sky-400 hover:underline">pricing page</a>
            . Setup steps are on our{' '}
            <a href="/setup" className="text-sky-400 hover:underline">setup guide</a>
            . Support and orders are handled through WhatsApp and email — not through an automated checkout.
          </p>
          <p>
            We are based around serving UK customers. For help, use the{' '}
            <a href="/contact" className="text-sky-400 hover:underline">contact form</a>
            , WhatsApp or phone on{' '}
            <a href="tel:+19433009678" className="text-sky-400 hover:underline">+19433009678</a>
            , or email{' '}
            <a href="mailto:muhammad.sherazz932@gmail.com" className="text-sky-400 hover:underline">muhammad.sherazz932@gmail.com</a>
            .
          </p>
          <p>
            Refunds, if the service does not work, are described in our{' '}
            <a href="/terms#refund" className="text-sky-400 hover:underline">terms and refund policy</a>
            . How we handle personal data is in our{' '}
            <a href="/privacy" className="text-sky-400 hover:underline">privacy policy</a>
            .
          </p>
        </div>
      </article>
    </main>
  )
}

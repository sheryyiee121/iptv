import SeoHead from './SeoHead'

const LAST_UPDATED = '14 October 2026'

const sections = [
    {
        heading: '1. About these terms',
        paragraphs: [
            'These terms apply to your purchase and use of the IPTV subscription service sold by Quick TV Packages ("we", "us"). By placing an order, you agree to them.',
        ],
    },
    {
        heading: '2. The service',
        paragraphs: [
            'We provide IPTV subscription packages for use on compatible devices, including Amazon Fire TV Stick, Sky Glass, Android devices and Smart TVs. The features of each plan, including the number of devices it supports, are shown in the Pricing section of our website.',
        ],
    },
    {
        heading: '3. Ordering and payment',
        paragraphs: [
            'You place your order by contacting us through the WhatsApp or email details on our website. We confirm the plan, the price and how to pay before you make any payment. Your login details are sent to you once your payment is confirmed.',
        ],
    },
    {
        heading: '4. What you need',
        paragraphs: [
            'To use the service you need a compatible device and a stable internet connection. Higher-quality streams, such as 4K, need a faster connection than standard definition. Streaming quality also depends on your device, your network and your internet provider.',
        ],
    },
    {
        heading: '5. Refund policy',
        paragraphs: [
            'If the service does not work for you, contact us within 15 days of your purchase. You can reach us on WhatsApp or by email, and we will ask for your order details and a description of the problem.',
            'We will work with you to fix the problem first. If the service still does not work, we will refund you.',
            'Refund requests made more than 15 days after purchase are not covered by this policy.',
        ],
    },
    {
        heading: '6. Using the service',
        paragraphs: [
            'Keep your login details private and use the service within the device limit of your plan. We may suspend access if the service is being misused.',
        ],
    },
    {
        heading: '7. Availability',
        paragraphs: [
            'We aim to keep the service running reliably, but we cannot guarantee it will be uninterrupted. Maintenance, problems with upstream providers, or issues with your own internet connection or device can cause interruptions.',
        ],
    },
    {
        heading: '8. Changes to these terms',
        paragraphs: [
            'We may update these terms from time to time. The version on this page is the one that applies, and the date at the top shows when it was last updated.',
        ],
    },
    {
        heading: '9. Contact us',
        paragraphs: [
            'For orders, support or refund requests, contact us by email at muhammad.sherazz932@gmail.com or by phone or WhatsApp on +19433009678.',
        ],
    },
]

export default function Terms() {
    return (
        <main className="relative bg-[#0a0a0a] pt-32 pb-24">
            <SeoHead
                title="Terms & Conditions | Quick TV Packages"
                description="Terms and conditions for Quick TV Packages IPTV subscriptions, including our 15-day refund policy if the service does not work."
                path="/terms"
            />

            <article className="max-w-3xl mx-auto px-6 sm:px-8">
                <h1 className="text-3xl sm:text-4xl font-black text-white mb-3 leading-tight">Terms &amp; Conditions</h1>
                <p className="text-gray-500 text-sm mb-10">Last updated: {LAST_UPDATED}</p>

                <div className="space-y-10">
                    {sections.map((section) => (
                        <section key={section.heading}>
                            <h2 className="text-xl font-bold text-white mb-3">{section.heading}</h2>
                            <div className="space-y-4">
                                {section.paragraphs.map((p, i) => (
                                    <p key={i} className="text-gray-300 text-base leading-relaxed">
                                        {p}
                                    </p>
                                ))}
                            </div>
                        </section>
                    ))}
                </div>
            </article>
        </main>
    )
}
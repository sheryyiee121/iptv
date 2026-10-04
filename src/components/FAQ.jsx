import { useState } from 'react'
import { HelpCircle, ChevronDown } from 'lucide-react'

const faqs = [
    {
        q: "What devices do I need to run your IPTV package?",
        a: "Our service works across a wide range of devices! The most popular is an Amazon Firestick or Fire TV Stick 4K, but we perfectly support Sky Glass, Smart TVs, Android boxes, iPhones, and Windows PCs. A stable internet connection (at least 15 Mbps for HD, 25 Mbps for 4K) is recommended."
    },
    {
        q: "Is there a long-term contract?",
        a: "Absolutely not. We operate on a straightforward prepaid model. You simply select your package (1, 6, or 12 months) and you will never be automatically charged or tied into an expensive rolling broadband/TV contract like traditional providers."
    },
    {
        q: "How fast will I receive my login details?",
        a: "Instant activation. As soon as you reach out to our team on WhatsApp and select your package, we immediately generate and send your custom credentials along with an exclusive setup guide."
    },
    {
        q: "Do I need to use a VPN?",
        a: "A VPN is entirely optional but highly recommended. In the UK, internet service providers (ISPs) can sometimes throttle streaming during peak Premier League matches. Using a VPN ensures lightning-fast, zero-buffering 4K and 8K streams regardless of your ISP."
    },
    {
        q: "Can I use the subscription on multiple TVs?",
        a: "Yes! While our Basic plan covers up to 2 devices, our Standard, Premium, and Ultimate packages allow for 3, 5, or even unlimited devices simultaneously in your household."
    }
]

export default function FAQ() {
    const [open, setOpen] = useState(0)

    return (
        <section id="faq" className="relative py-28 bg-[#0a0a0a] min-h-[70vh] overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 right-1/4 w-[400px] h-[400px] bg-sky-600/10 rounded-full blur-[150px]" />

            <div className="relative w-full max-w-3xl mx-auto px-6 sm:px-8">
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sky-500/10 border border-sky-500/20 mb-6">
                        <HelpCircle size={14} className="text-sky-400" />
                        <span className="text-sky-400 text-xs font-bold uppercase tracking-widest">Support</span>
                    </div>
                    <h2 className="text-4xl sm:text-5xl font-black text-white mb-5">
                        Frequently Asked <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-cyan-400">Questions</span>
                    </h2>
                    <p className="text-gray-400 text-lg">Everything you need to know about our Firestick and IPTV packages in the UK.</p>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, i) => (
                        <div
                            key={i}
                            className={`rounded-2xl border transition-all duration-300 overflow-hidden ${open === i ? 'bg-white/[0.04] border-sky-500/30 shadow-[0_4px_30px_rgba(14,165,233,0.1)]' : 'bg-white/[0.01] border-white/5 hover:border-white/10'
                                }`}
                        >
                            <button
                                onClick={() => setOpen(open === i ? -1 : i)}
                                className="w-full px-6 py-5 flex items-center justify-between text-left"
                            >
                                <span className="text-white font-bold text-lg pr-4">{faq.q}</span>
                                <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300 ${open === i ? 'bg-sky-500/20 text-sky-400 rotate-180' : 'bg-white/5 text-gray-500'
                                    }`}>
                                    <ChevronDown size={18} />
                                </div>
                            </button>

                            <div
                                className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${open === i ? 'max-h-96 pb-6 opacity-100' : 'max-h-0 pb-0 opacity-0'
                                    }`}
                            >
                                <div className="w-full h-px bg-white/5 mb-5" />
                                <p className="text-gray-400 leading-relaxed text-sm lg:text-base">
                                    {faq.a}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

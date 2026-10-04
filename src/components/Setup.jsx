import { Monitor, Download, Key, PlayCircle } from 'lucide-react'

export default function Setup() {
    const steps = [
        {
            title: "1. Prepare your device",
            desc: "Go to Settings > My Fire TV > Developer Options. Turn ON 'Apps from Unknown Sources'.",
            icon: Monitor
        },
        {
            title: "2. Download App",
            desc: "Search for 'Downloader' in the Amazon App Store. Install and open it.",
            icon: Download
        },
        {
            title: "3. Enter Code",
            desc: "In Downloader, enter our premium app code or URL to install the IPTV player.",
            icon: Key
        },
        {
            title: "4. Login & Stream",
            desc: "Open the app, enter the Username and Password we provided via WhatsApp, and enjoy 4K streaming!",
            icon: PlayCircle
        }
    ]

    return (
        <section id="setup" className="relative py-28 bg-[#0a0a0a] overflow-hidden min-h-[70vh]">
            <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[400px] h-[400px] bg-sky-600/10 rounded-full blur-[120px]" />

            <div className="relative w-full max-w-4xl mx-auto px-6 sm:px-8">
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sky-500/10 border border-sky-500/20 mb-6">
                        <span className="text-sky-400 text-xs font-bold uppercase tracking-widest">Installation</span>
                    </div>
                    <h2 className="text-4xl sm:text-5xl font-black text-white mb-5">
                        Quick <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-cyan-400">Setup Guide</span>
                    </h2>
                    <p className="text-gray-500 text-lg">Follow these 4 simple steps to install our premium packages on your Firestick.</p>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                    {steps.map((step, i) => (
                        <div key={i} className="p-8 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-sky-500/20 transition-all duration-300 relative overflow-hidden group">
                            <div className="absolute top-0 left-0 w-1.5 h-full bg-gradient-to-b from-sky-500 to-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                            <div className="w-12 h-12 rounded-xl bg-sky-500/10 flex items-center justify-center mb-6">
                                <step.icon size={24} className="text-sky-400" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                            <p className="text-gray-400 leading-relaxed">{step.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

import { Zap, Globe, Trophy, Tv2, Headphones, Star, EyeOff, Download } from 'lucide-react'

const features = [
  { icon: Zap, title: 'Instant Activation', desc: 'Get started within minutes. Works on Firestick, Sky Glass & all Smart TVs.' },
  { icon: Globe, title: '4K & 8K Streaming', desc: 'Crystal-clear 4K & 8K Ultra HD streaming on all devices.' },
  { icon: Trophy, title: 'Top Value', desc: 'Premium quality 4K/8K streaming at the most competitive prices.' },
  { icon: Tv2, title: '28,000+ Channels', desc: 'Live sports, movies, TV shows & international content.' },
  { icon: Headphones, title: 'UK-Based Support', desc: '24/7 dedicated customer support team based in the UK.' },
  { icon: Star, title: 'Sky Glass Ready', desc: 'Full support for Sky Glass, Firestick & Fire TV Stick 4K.' },
  { icon: EyeOff, title: 'Ad-Free Viewing', desc: 'Enjoy uninterrupted streaming with zero advertisements.' },
  { icon: Download, title: 'Offline Viewing', desc: 'Download your favourite content and watch it offline.' },
]

export default function Features() {
  return (
    <section className="relative py-28 bg-[#0a0a0a] overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-sky-900/5 rounded-full blur-[180px]" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-sky-900/3 rounded-full blur-[150px]" />

      <div className="relative w-full max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sky-500/10 border border-sky-500/20 mb-6">
            <span className="text-sky-400 text-xs font-bold uppercase tracking-widest">Firestick • Sky Glass • 4K • 8K</span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-5">
            Key <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-cyan-400">Features</span>
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg">
            Everything you need for the ultimate streaming experience
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {features.map((f, i) => (
            <div
              key={i}
              className="group relative bg-gradient-to-b from-white/[0.03] to-transparent rounded-2xl p-7 border border-white/[0.04] hover:border-sky-500/20 transition-all duration-500 hover:-translate-y-2"
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-sky-500/[0.04] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-sky-500/10 to-sky-900/5 flex items-center justify-center mb-5 group-hover:from-sky-500/20 group-hover:to-sky-800/10 transition-colors border border-sky-500/5 group-hover:border-sky-500/15">
                  <f.icon size={24} className="text-sky-400" />
                </div>
                <h3 className="text-white font-bold text-lg mb-2">{f.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

import { Play, ChevronRight } from 'lucide-react'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden bg-black">
      {/* Full cinematic background */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=1920&q=80"
          alt=""
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/85 to-black/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-black/60" />
      </div>

      {/* Red glow accents */}
      <div className="absolute top-1/4 right-1/3 w-[500px] h-[500px] bg-red-600/8 rounded-full blur-[200px]" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-red-900/10 rounded-full blur-[150px]" />

      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-12 pt-32 pb-20">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-red-500/20 bg-red-500/5 mb-8">
            <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
            <span className="text-red-400 text-sm font-semibold">Now Streaming in 4K Ultra HD</span>
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-[5.5rem] font-black text-white leading-[1.02] mb-6">
            Stream Your{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-red-400 to-orange-400">
              Favorites
            </span>
            ,<br />Your Way.
          </h1>

          <p className="text-gray-400 text-lg sm:text-xl max-w-xl mb-10 leading-relaxed">
            Premium IPTV for your <strong className="text-gray-300 font-semibold">Amazon Fire Stick</strong>,{' '}
            <strong className="text-gray-300 font-semibold">Fire TV Stick</strong>, and{' '}
            <strong className="text-gray-300 font-semibold">Fire TV</strong> — 28,000+ live channels, sports, movies, and
            international content in stunning 4K across the UK.
          </p>

          <div className="flex flex-wrap gap-4 mb-14">
            <a
              href="#pricing"
              className="group inline-flex items-center gap-2.5 bg-gradient-to-r from-red-600 to-red-700 text-white font-bold px-8 py-4 rounded-lg text-base hover:from-red-500 hover:to-red-600 hover:shadow-[0_8px_40px_rgba(229,9,20,0.35)] transition-all duration-300"
            >
              View Packages
              <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#pricing"
              className="group inline-flex items-center gap-2.5 bg-white/5 border border-white/10 text-white font-bold px-8 py-4 rounded-lg text-base hover:bg-white/10 hover:border-white/20 transition-all duration-300 backdrop-blur-sm"
            >
              <div className="w-8 h-8 rounded-full bg-red-600 flex items-center justify-center">
                <Play size={14} className="text-white ml-0.5 fill-white" />
              </div>
              Start Free Trial
            </a>
          </div>

          {/* Stats */}
          <div className="flex items-center gap-10 pt-8 border-t border-white/5">
            {[
              { value: '100%', label: 'UK Based', highlight: false },
              { value: '28,000+', label: 'Live Channels', highlight: true },
              { value: '99.9%', label: 'Uptime', highlight: false },
            ].map((s, i) => (
              <div key={i} className="text-center">
                <div className={`text-3xl sm:text-4xl font-black ${s.highlight ? 'text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-400' : 'text-white'}`}>{s.value}</div>
                <div className="text-xs text-gray-500 mt-1 font-medium uppercase tracking-wider">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

import { Play, ChevronRight } from 'lucide-react'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden bg-black">
      {/* Full cinematic background */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=828&q=60&auto=format&fit=crop"
          srcSet="
            https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=480&q=60&auto=format&fit=crop 480w,
            https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=828&q=60&auto=format&fit=crop 828w,
            https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=1200&q=65&auto=format&fit=crop 1200w
          "
          sizes="100vw"
          width={828}
          height={553}
          fetchPriority="high"
          decoding="async"
          alt=""
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/85 to-black/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-black/60" />
      </div>

      {/* Red glow accents */}
      <div className="absolute top-1/4 right-1/3 w-[500px] h-[500px] bg-sky-600/8 rounded-full blur-[200px]" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-sky-900/10 rounded-full blur-[150px]" />

      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-12 pt-32 pb-20">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-sky-500/20 bg-sky-500/5 mb-8">
            <span className="w-2 h-2 rounded-full bg-sky-500 animate-pulse" />
            <span className="text-sky-400 text-sm font-semibold">Now Streaming in 4K & 8K Ultra HD</span>
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-[5.5rem] font-black text-white leading-[1.02] mb-6">
            Stream Your{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 via-sky-400 to-cyan-400">
              Favorites
            </span>
            ,<br />Your Way.
          </h1>

          <p className="text-gray-400 text-lg sm:text-xl max-w-xl mb-10 leading-relaxed">
            Premium IPTV for <strong className="text-gray-300 font-semibold">Amazon Firestick</strong>,{' '}
            <strong className="text-gray-300 font-semibold">Sky Glass</strong>,{' '}
            <strong className="text-gray-300 font-semibold">Fire TV Stick 4K</strong> & all Smart TVs — 28,000+ live channels, sports, movies in stunning <strong className="text-sky-400 font-semibold">4K & 8K</strong> across the UK.
          </p>

          <div className="flex flex-wrap gap-4 mb-14">
            <a
              href="#pricing"
              className="group inline-flex items-center gap-2.5 bg-gradient-to-r from-sky-500 via-sky-400 to-cyan-400 text-white font-bold px-8 py-4 rounded-xl text-base ring-1 ring-sky-400/30 hover:from-sky-400 hover:via-sky-300 hover:to-cyan-300 hover:shadow-[0_8px_40px_rgba(56,189,248,0.45)] transition-all duration-300"
            >
              View Packages
              <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#contact"
              className="group inline-flex items-center gap-2.5 bg-white/5 border border-white/10 text-white font-bold px-8 py-4 rounded-xl text-base hover:bg-sky-500/10 hover:border-sky-400/40 transition-all duration-300 backdrop-blur-sm"
            >
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-sky-500 to-cyan-400 flex items-center justify-center">
                <Play size={14} className="text-white ml-0.5 fill-white" />
              </div>
              Contact Us
            </a>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap items-center gap-8 sm:gap-10 pt-8 border-t border-white/5">
            {[
              { value: '4K/8K', label: 'Ultra HD', highlight: true },
              { value: '28,000+', label: 'Live Channels', highlight: false },
              { value: '24/7', label: 'UK Support', highlight: false },
              { value: '99.9%', label: 'Uptime', highlight: false },
            ].map((s, i) => (
              <div key={i} className="text-center">
                <div className={`text-3xl sm:text-4xl font-black ${s.highlight ? 'text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-cyan-400' : 'text-white'}`}>{s.value}</div>
                <div className="text-xs text-gray-500 mt-1 font-medium uppercase tracking-wider">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

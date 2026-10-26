import { Play, ChevronRight } from 'lucide-react'

const wallPosters = [
  'https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=400&q=60&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=400&q=60&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=400&q=60&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1574375927938-d5a98e8d7e28?w=400&q=60&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1594909122845-11baa439b7bf?w=400&q=60&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1535016120720-40c646be5580?w=400&q=60&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=400&q=60&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?w=400&q=60&auto=format&fit=crop',
]

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden bg-black">
      {/* Odyssey / space base */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1462331947965-a7a7d89440e9?w=1200&q=70&auto=format&fit=crop"
          srcSet="
            https://images.unsplash.com/photo-1462331947965-a7a7d89440e9?w=640&q=60&auto=format&fit=crop 640w,
            https://images.unsplash.com/photo-1462331947965-a7a7d89440e9?w=1200&q=70&auto=format&fit=crop 1200w,
            https://images.unsplash.com/photo-1462331947965-a7a7d89440e9?w=1800&q=70&auto=format&fit=crop 1800w
          "
          sizes="100vw"
          width={1200}
          height={800}
          fetchPriority="high"
          decoding="async"
          alt=""
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(0,0,0,0.35)_55%,#000_100%)]" />
      </div>

      {/* Dense app / poster wall */}
      <div className="absolute inset-y-0 right-0 w-full lg:w-[62%] opacity-90 pointer-events-none">
        <div className="absolute inset-0 grid grid-cols-4 gap-2 p-3 sm:p-4 rotate-[-6deg] scale-110 origin-right">
          {wallPosters.concat(wallPosters).slice(0, 16).map((src, i) => (
            <div key={i} className="relative aspect-[2/3] overflow-hidden rounded-md shadow-[0_12px_40px_rgba(0,0,0,0.65)] ring-1 ring-white/10">
              <img src={src} alt="" className="h-full w-full max-w-none object-cover" loading={i > 3 ? 'lazy' : 'eager'} decoding="async" referrerPolicy="no-referrer" />
            </div>
          ))}
        </div>
      </div>

      {/* Giant TV + apps frame */}
      <div className="absolute right-[-4%] xl:right-[4%] top-1/2 -translate-y-1/2 hidden lg:block w-[min(52vw,720px)] pointer-events-none z-[2]">
        <div className="relative rounded-[1.4rem] bg-[#111] p-2.5 shadow-[0_40px_120px_rgba(0,0,0,0.85)] ring-1 ring-white/15">
          <div className="relative overflow-hidden rounded-[1rem] aspect-video">
            <img
              src="https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=1200&q=80&auto=format&fit=crop"
              alt="Live TV streaming on screen"
              className="absolute inset-0 h-full w-full max-w-none object-cover"
              decoding="async"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-black/20" />
            <div className="absolute top-4 left-4 flex gap-2">
              <span className="bg-sky-500 text-white text-[10px] font-black px-2 py-1 rounded">LIVE</span>
              <span className="bg-black/60 text-white text-[10px] font-bold px-2 py-1 rounded">4K</span>
              <span className="bg-black/60 text-white text-[10px] font-bold px-2 py-1 rounded">8K</span>
            </div>
            <div className="absolute bottom-4 left-4 right-4">
              <div className="flex gap-2 mb-3">
                {['Netflix', 'Prime', 'Disney+', 'Sky', 'Sports'].map((app) => (
                  <span key={app} className="text-[10px] font-bold tracking-wide text-white/90 bg-white/10 backdrop-blur-sm px-2.5 py-1 rounded-md ring-1 ring-white/15">
                    {app}
                  </span>
                ))}
              </div>
              <div className="h-1 rounded-full bg-white/20">
                <div className="h-1 w-[62%] rounded-full bg-sky-400" />
              </div>
            </div>
          </div>
        </div>
        <div className="mx-auto mt-2 h-2 w-28 rounded-full bg-gradient-to-r from-transparent via-white/25 to-transparent" />
      </div>

      {/* Heavy readability wash — left for copy, right stays visual */}
      <div className="absolute inset-0 bg-gradient-to-r from-black from-[18%] via-black/80 via-[42%] to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-black/40" />
      <div className="absolute top-1/4 right-1/3 w-[500px] h-[500px] bg-sky-600/10 rounded-full blur-[200px]" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-cyan-900/15 rounded-full blur-[150px]" />

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

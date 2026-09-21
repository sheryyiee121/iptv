import { Play, Star, Clock, ChevronRight, Monitor, Globe, Smartphone, TabletSmartphone, Gamepad2, Laptop, ShoppingCart } from 'lucide-react'

const featured = {
  title: 'The Night Agent',
  subtitle: 'Season 2 • Now Streaming in 4K & 8K',
  desc: 'An FBI agent uncovers a mole threatening national security. Binge the entire season now in stunning 4K & 8K Ultra HD on Firestick, Sky Glass & all Smart TVs.',
  rating: '9.2',
  year: '2026',
  genre: 'Action • Thriller',
  img: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=800&q=65&auto=format&fit=crop',
}

const trendingMovies = [
  { title: 'Extraction III', genre: 'Action', rating: '8.7', img: 'https://images.unsplash.com/photo-1535016120720-40c646be5580?w=500&q=80' },
  { title: 'The Crown', genre: 'Drama', rating: '9.1', img: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=500&q=80' },
  { title: 'Stranger Things', genre: 'Sci-Fi', rating: '9.4', img: 'https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=500&q=80' },
  { title: 'Breaking Bad', genre: 'Crime', rating: '9.5', img: 'https://images.unsplash.com/photo-1594909122845-11baa439b7bf?w=500&q=80' },
  { title: 'House of Cards', genre: 'Political', rating: '8.8', img: 'https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?w=500&q=80' },
]

const continueWatching = [
  { title: 'Peaky Blinders', progress: 72, ep: 'S6 E4', img: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=400&q=80&auto=format&fit=crop' },
  { title: 'Money Heist', progress: 45, ep: 'S5 E2', img: 'https://images.unsplash.com/photo-1616530940355-351fabd9524b?w=400&q=80' },
  { title: 'Dark', progress: 88, ep: 'S3 E7', img: 'https://images.unsplash.com/photo-1598899134739-24c46f58b8c0?w=400&q=80' },
  { title: 'Narcos', progress: 33, ep: 'S2 E5', img: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=400&q=80' },
]

const platforms = [
  { icon: Monitor, label: 'Firestick' },
  { icon: Monitor, label: 'Sky Glass' },
  { icon: Globe, label: 'Smart TV' },
  { icon: Smartphone, label: 'iOS' },
  { icon: TabletSmartphone, label: 'Android' },
  { icon: Laptop, label: 'Windows' },
]

export default function Trending() {
  return (
    <section className="relative bg-[#0a0a0a] overflow-hidden">
      {/* ── FEATURED HERO BANNER ── */}
      <div className="relative h-[85vh] min-h-[600px]">
        <div className="absolute inset-0">
          <img src={featured.img} alt="" className="w-full h-full object-cover" loading="lazy" decoding="async" />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-black/40" />
        </div>

        <div className="relative z-10 h-full flex items-end pb-20">
          <div className="w-full max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-12">
            <div className="max-w-2xl">
              <div className="flex items-center gap-3 mb-4">
                <span className="bg-sky-600 text-white text-[10px] font-black px-2.5 py-1 rounded tracking-wider">TRENDING #1</span>
                <span className="text-white/50 text-sm">{featured.genre}</span>
                <span className="text-white/50 text-sm">•</span>
                <span className="text-white/50 text-sm">{featured.year}</span>
              </div>

              <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white mb-4 leading-[1.02]">{featured.title}</h2>
              <p className="text-sky-400 font-semibold text-lg mb-3">{featured.subtitle}</p>
              <p className="text-gray-300 text-base leading-relaxed mb-8 max-w-lg">{featured.desc}</p>

              <div className="flex items-center gap-4 mb-8">
                <div className="flex items-center gap-1.5">
                  <Star size={16} className="text-yellow-400 fill-yellow-400" />
                  <span className="text-white font-black text-lg">{featured.rating}</span>
                </div>
                <span className="text-white/20">|</span>
                <div className="flex items-center gap-1.5 text-gray-400 text-sm">
                  <Clock size={14} />
                  <span>2h 15m</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-3">
                <a href="#pricing" className="inline-flex items-center gap-2.5 bg-gradient-to-r from-sky-500 via-sky-400 to-cyan-400 text-white font-bold px-8 py-4 rounded-xl ring-1 ring-sky-400/30 transition-all hover:shadow-[0_8px_40px_rgba(56,189,248,0.45)]">
                  <Play size={18} className="fill-white" />
                  Watch Now
                </a>
                <a href="#pricing" className="inline-flex items-center gap-2.5 bg-white/10 hover:bg-white/15 backdrop-blur text-white font-bold px-8 py-4 rounded-lg transition-all border border-white/10">
                  <ShoppingCart size={18} />
                  Get Subscription
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── TRENDING NOW ── */}
      <div className="relative py-16">
        <div className="w-full max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-12">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-3">
              <div className="w-1.5 h-8 bg-sky-600 rounded-full" />
              <h3 className="text-white font-black text-2xl">Trending Now</h3>
            </div>
            <a href="#pricing" className="flex items-center gap-1 text-sky-400 text-sm font-semibold hover:text-sky-300 transition-colors">
              View All <ChevronRight size={16} />
            </a>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {trendingMovies.map((movie, i) => (
              <div key={i} className="group cursor-pointer">
                <div className="relative rounded-xl overflow-hidden aspect-[2/3] mb-3 shadow-lg">
                  <img src={movie.img} alt={movie.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" loading="lazy" decoding="async" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Rank number */}
                  <div className="absolute top-3 left-3">
                    <span className="text-5xl font-black text-white/20 leading-none" style={{WebkitTextStroke: '1px rgba(255,255,255,0.3)'}}>
                      {i + 1}
                    </span>
                  </div>

                  {/* Play on hover */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <div className="w-14 h-14 rounded-full bg-sky-600 flex items-center justify-center shadow-[0_0_30px_rgba(14,165,233,0.6)] scale-75 group-hover:scale-100 transition-transform duration-300">
                      <Play size={22} className="text-white ml-1 fill-white" />
                    </div>
                  </div>

                  {/* Info on hover */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                    <div className="flex items-center gap-1.5 mb-1">
                      <Star size={12} className="text-yellow-400 fill-yellow-400" />
                      <span className="text-white text-xs font-bold">{movie.rating}</span>
                    </div>
                  </div>
                </div>
                <h4 className="text-white font-bold text-sm group-hover:text-sky-400 transition-colors">{movie.title}</h4>
                <p className="text-gray-400 text-xs mt-0.5">{movie.genre}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── CONTINUE WATCHING ── */}
      <div className="relative pb-16">
        <div className="w-full max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-12">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-3">
              <div className="w-1.5 h-8 bg-sky-600 rounded-full" />
              <h3 className="text-white font-black text-2xl">Continue Watching</h3>
            </div>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {continueWatching.map((show, i) => (
              <div key={i} className="group cursor-pointer">
                <div className="relative rounded-xl overflow-hidden aspect-video mb-3 shadow-lg">
                  <img src={show.img} alt={show.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" decoding="async" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />

                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="w-12 h-12 rounded-full bg-sky-600/90 flex items-center justify-center">
                      <Play size={18} className="text-white ml-0.5 fill-white" />
                    </div>
                  </div>

                  <div className="absolute bottom-0 left-0 right-0">
                    {/* Progress bar */}
                    <div className="w-full bg-white/20 h-1">
                      <div className="bg-sky-600 h-1" style={{ width: `${show.progress}%` }} />
                    </div>
                  </div>

                  <span className="absolute top-3 right-3 bg-black/60 backdrop-blur text-white text-[10px] font-bold px-2 py-1 rounded">{show.ep}</span>
                </div>
                <h4 className="text-white font-bold text-sm group-hover:text-sky-400 transition-colors">{show.title}</h4>
                <p className="text-gray-400 text-xs mt-0.5">{show.progress}% watched</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── PLATFORMS + SUBSCRIPTION CTA ── */}
      <div className="relative py-16 bg-gradient-to-b from-transparent via-sky-950/5 to-transparent">
        <div className="w-full max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-10">
            <h3 className="text-white font-black text-3xl mb-3">
              Stream in <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-cyan-400">4K & 8K</span> on Any Device
            </h3>
            <p className="text-gray-500 text-base">28,000+ channels on Firestick, Sky Glass, Fire TV Stick & all Smart TVs</p>
          </div>

          <div className="flex flex-wrap justify-center gap-6 mb-12">
            {platforms.map((p, i) => (
              <div key={i} className="flex flex-col items-center gap-3 group cursor-pointer">
                <div className="w-16 h-16 rounded-2xl bg-white/[0.03] border border-white/5 flex items-center justify-center group-hover:border-sky-500/20 group-hover:bg-sky-500/5 transition-all duration-300">
                  <p.icon size={26} className="text-gray-500 group-hover:text-sky-400 transition-colors" />
                </div>
                <span className="text-xs text-gray-400 group-hover:text-gray-300 transition-colors font-medium">{p.label}</span>
              </div>
            ))}
          </div>

          <div className="text-center">
            <a
              href="#pricing"
              className="inline-flex items-center gap-2.5 bg-gradient-to-r from-sky-500 via-sky-400 to-cyan-400 text-white font-bold px-10 py-4 rounded-xl ring-1 ring-sky-400/30 hover:from-sky-400 hover:via-sky-300 hover:to-cyan-300 hover:shadow-[0_8px_40px_rgba(56,189,248,0.45)] transition-all duration-300 text-lg"
            >
              <ShoppingCart size={20} />
              Get Your Subscription Now
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

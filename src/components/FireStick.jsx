import { ShoppingCart, Play, Wifi, Monitor, Zap, Headphones } from 'lucide-react'

export default function FireStick() {
  return (
    <section className="relative py-28 overflow-hidden bg-black">
      {/* Cinematic background */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1593784991095-a205069470b6?w=800&q=60&auto=format&fit=crop"
          alt=""
          loading="lazy"
          decoding="async"
          width={800}
          height={533}
          className="w-full h-full object-cover opacity-15"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-black/70" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-transparent to-[#0a0a0a]" />
      </div>

      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-sky-600/5 rounded-full blur-[180px] -translate-y-1/2" />

      <div className="relative w-full max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center mb-6">
          <span className="inline-block text-sky-400 text-xs font-bold tracking-[0.25em] uppercase mb-4">
            Firestick • Sky Glass • 4K • 8K Packages in UK
          </span>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - TV with streaming content */}
          <div className="relative">
            <div className="absolute -inset-12 bg-sky-600/5 rounded-full blur-[80px]" />
            <div className="relative">
              {/* TV Frame */}
              <div className="relative bg-gradient-to-b from-[#1a1a1a] to-[#0d0d0d] rounded-2xl p-3 shadow-[0_20px_60px_rgba(0,0,0,0.8)] border border-white/5">
                <div className="relative rounded-xl overflow-hidden aspect-video">
                  <img
                    src="https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=600&q=60&auto=format&fit=crop"
                    alt="IPTV streaming preview"
                    loading="lazy"
                    decoding="async"
                    width={600}
                    height={400}
                    alt="Smart TV streaming"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

                  {/* Netflix-style UI overlay */}
                  <div className="absolute top-4 left-4 flex items-center gap-2">
                    <span className="bg-sky-600 text-white text-[10px] font-bold px-2 py-1 rounded">LIVE</span>
                    <span className="bg-black/50 backdrop-blur text-white text-[10px] font-medium px-2 py-1 rounded">4K</span>
                    <span className="bg-black/50 backdrop-blur text-white text-[10px] font-medium px-2 py-1 rounded">8K</span>
                  </div>

                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="w-full bg-white/20 rounded-full h-1 mb-3">
                      <div className="bg-sky-600 h-1 rounded-full w-[65%]" />
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-sky-600 flex items-center justify-center cursor-pointer hover:bg-sky-500 transition-colors">
                          <Play size={16} className="text-white ml-0.5 fill-white" />
                        </div>
                        <div>
                          <div className="text-white text-sm font-bold">Sky Sports Premier League</div>
                          <div className="text-white/50 text-xs">Live • 28,000+ Channels</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* TV stand */}
                <div className="flex justify-center mt-3">
                  <div className="w-32 h-1.5 rounded-full bg-gradient-to-r from-transparent via-sky-500/30 to-transparent" />
                </div>
              </div>

              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 bg-gradient-to-br from-sky-600 to-sky-800 text-white text-xs font-black px-4 py-2 rounded-xl shadow-[0_4px_20px_rgba(14,165,233,0.4)]">
                4K / 8K UHD
              </div>
              <div className="absolute -bottom-3 -left-3 bg-black border border-sky-500/20 text-sky-400 text-xs font-bold px-4 py-2 rounded-xl shadow-lg backdrop-blur">
                Firestick • Sky Glass
              </div>
            </div>
          </div>

          {/* Right - Content */}
          <div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-[1.05] mb-3">
              Firestick &{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-cyan-400">Sky Glass</span>
            </h2>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-[1.05] mb-8">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-sky-500">4K & 8K</span>
            </h2>

            <p className="text-gray-400 text-lg leading-relaxed mb-8 max-w-md">
              Convert Any TV Into a Smart Entertainment Hub. Works perfectly with Amazon Firestick, Fire TV Stick 4K, Sky Glass & all Smart TVs — enjoy stunning 4K & 8K quality.
            </p>

            <a
              href="#pricing"
              className="inline-flex items-center gap-2.5 bg-gradient-to-r from-sky-500 via-sky-400 to-cyan-400 text-white font-bold px-8 py-4 rounded-xl ring-1 ring-sky-400/30 hover:from-sky-400 hover:via-sky-300 hover:to-cyan-300 hover:shadow-[0_8px_40px_rgba(56,189,248,0.45)] transition-all duration-300 mb-10"
            >
              <ShoppingCart size={18} />
              Buy Now
            </a>

            {/* Mini features */}
            <div className="grid grid-cols-4 gap-3">
              {[
                { icon: Monitor, value: '4K/8K', label: 'Ultra HD' },
                { icon: Wifi, value: '28,000+', label: 'Channels' },
                { icon: Headphones, value: '24/7', label: 'Support' },
                { icon: Zap, value: '99.9%', label: 'Uptime' },
              ].map((stat, i) => (
                <div key={i} className="text-center p-5 bg-white/[0.02] rounded-2xl border border-white/5 hover:border-sky-500/15 transition-colors">
                  <stat.icon size={20} className="text-sky-400 mx-auto mb-3" />
                  <div className="text-2xl sm:text-3xl font-black text-white">{stat.value}</div>
                  <div className="text-[11px] text-gray-500 mt-1 uppercase tracking-wider font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

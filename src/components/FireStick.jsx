import { ShoppingCart, Play, Wifi, Monitor, Zap } from 'lucide-react'

export default function FireStick() {
  return (
    <section className="relative py-28 overflow-hidden bg-black">
      {/* Cinematic background */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1593784991095-a205069470b6?w=1920&q=80"
          alt=""
          className="w-full h-full object-cover opacity-15"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-black/70" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-transparent to-[#0a0a0a]" />
      </div>

      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-red-600/5 rounded-full blur-[180px] -translate-y-1/2" />

      <div className="relative w-full max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center mb-6">
          <span className="inline-block text-red-400 text-xs font-bold tracking-[0.25em] uppercase mb-4">
            Fire Stick Packages in UK
          </span>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - TV with streaming content */}
          <div className="relative">
            <div className="absolute -inset-12 bg-red-600/5 rounded-full blur-[80px]" />
            <div className="relative">
              {/* TV Frame */}
              <div className="relative bg-gradient-to-b from-[#1a1a1a] to-[#0d0d0d] rounded-2xl p-3 shadow-[0_20px_60px_rgba(0,0,0,0.8)] border border-white/5">
                <div className="relative rounded-xl overflow-hidden aspect-video">
                  <img
                    src="https://images.unsplash.com/photo-1574375927938-d5a98e8d7e28?w=800&q=80"
                    alt="Smart TV streaming"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

                  {/* Netflix-style UI overlay */}
                  <div className="absolute top-4 left-4 flex items-center gap-2">
                    <span className="bg-red-600 text-white text-[10px] font-bold px-2 py-1 rounded">LIVE</span>
                    <span className="bg-black/50 backdrop-blur text-white text-[10px] font-medium px-2 py-1 rounded">HD</span>
                    <span className="bg-black/50 backdrop-blur text-white text-[10px] font-medium px-2 py-1 rounded">4K</span>
                  </div>

                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="w-full bg-white/20 rounded-full h-1 mb-3">
                      <div className="bg-red-600 h-1 rounded-full w-[65%]" />
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-red-600 flex items-center justify-center cursor-pointer hover:bg-red-500 transition-colors">
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
                  <div className="w-32 h-1.5 rounded-full bg-gradient-to-r from-transparent via-red-500/30 to-transparent" />
                </div>
              </div>

              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 bg-gradient-to-br from-red-600 to-red-800 text-white text-xs font-black px-4 py-2 rounded-xl shadow-[0_4px_20px_rgba(229,9,20,0.4)]">
                4K UHD
              </div>
              <div className="absolute -bottom-3 -left-3 bg-black border border-red-500/20 text-red-400 text-xs font-bold px-4 py-2 rounded-xl shadow-lg backdrop-blur">
                Amazon Fire Stick 4K
              </div>
            </div>
          </div>

          {/* Right - Content */}
          <div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-[1.05] mb-3">
              Amazon{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-400">Fire</span>
            </h2>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-[1.05] mb-8">
              Stick{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500">4K</span>
            </h2>

            <p className="text-gray-400 text-lg leading-relaxed mb-8 max-w-md">
              Convert Any TV Into a Smart Entertainment Hub. Enjoy crystal-clear HD, Full HD, and 4K quality for the ultimate viewing experience.
            </p>

            <a
              href="#pricing"
              className="inline-flex items-center gap-2.5 bg-gradient-to-r from-red-600 to-red-700 text-white font-bold px-8 py-4 rounded-lg hover:from-red-500 hover:to-red-600 hover:shadow-[0_8px_40px_rgba(229,9,20,0.35)] transition-all duration-300 mb-10"
            >
              <ShoppingCart size={18} />
              Buy Now
            </a>

            {/* Mini features */}
            <div className="grid grid-cols-3 gap-4">
              {[
                { icon: Wifi, value: '100%', label: 'UK Based' },
                { icon: Monitor, value: '28,000+', label: 'Live Channels' },
                { icon: Zap, value: '99.9%', label: 'Uptime' },
              ].map((stat, i) => (
                <div key={i} className="text-center p-5 bg-white/[0.02] rounded-2xl border border-white/5 hover:border-red-500/15 transition-colors">
                  <stat.icon size={20} className="text-red-400 mx-auto mb-3" />
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

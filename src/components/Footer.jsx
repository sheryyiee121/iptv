import { Flame, Phone, Mail, ArrowUp, Play } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="relative bg-black border-t border-white/5">
      {/* CTA Band */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-red-700 via-red-600 to-red-800" />
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=1920&q=40')] bg-cover bg-center opacity-10" />
        <div className="relative py-14">
          <div className="w-full max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-12 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-white text-3xl sm:text-4xl font-black">Ready to Start Streaming?</h3>
              <p className="text-white/70 mt-2 text-lg">Join thousands of happy customers across the UK.</p>
            </div>
            <a
              href="#pricing"
              className="bg-black text-white font-bold px-10 py-4 rounded-lg hover:bg-gray-900 transition-colors whitespace-nowrap flex items-center gap-2.5 shadow-xl"
            >
              <Play size={16} className="fill-white" />
              Get Started Now
            </a>
          </div>
        </div>
      </div>

      {/* Footer content */}
      <div className="w-full max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-12 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-red-600 to-red-800 flex items-center justify-center shadow-[0_0_15px_rgba(229,9,20,0.2)]">
                <Flame size={22} className="text-white" />
              </div>
              <div className="leading-tight">
                <span className="block text-white font-black text-base tracking-tight">FIRESTICK</span>
                <span className="block text-red-500 text-[9px] font-bold tracking-[0.25em] uppercase">Premium IPTV</span>
              </div>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed max-w-xs">
              The UK's leading IPTV provider with 28,000+ live channels in 4K Ultra HD quality. Stream sports, movies, and TV shows.
            </p>
          </div>

          <div>
            <h4 className="text-white font-bold mb-5 text-xs uppercase tracking-[0.2em]">Quick Links</h4>
            <ul className="space-y-3.5">
              {['Home', 'Pricing', 'Blog', 'Contact'].map(item => (
                <li key={item}>
                  <a href={`#${item.toLowerCase()}`} className="text-gray-500 hover:text-red-400 transition-colors text-sm font-medium">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-5 text-xs uppercase tracking-[0.2em]">Legal</h4>
            <ul className="space-y-3.5">
              {['About Us', 'FAQ', 'Terms & Conditions', 'Privacy Policy'].map(item => (
                <li key={item}>
                  <a href="#" className="text-gray-500 hover:text-red-400 transition-colors text-sm font-medium">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-5 text-xs uppercase tracking-[0.2em]">Contact</h4>
            <ul className="space-y-3.5">
              <li>
                <a href="tel:+447346378897" className="flex items-center gap-2.5 text-gray-500 hover:text-red-400 transition-colors text-sm font-medium">
                  <Phone size={14} /> +447346378897
                </a>
              </li>
              <li>
                <a href="mailto:sherry@usaquicksolutions.com" className="flex items-center gap-2.5 text-gray-500 hover:text-red-400 transition-colors text-sm font-medium">
                  <Mail size={14} /> sherry@usaquicksolutions.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-600 text-sm">
            Copyright &copy; 2026 IP TV Packages Amazon Firestick. All rights reserved.
          </p>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="w-10 h-10 rounded-xl bg-white/[0.03] border border-white/5 flex items-center justify-center hover:border-red-500/20 hover:bg-red-500/5 transition-all"
          >
            <ArrowUp size={16} className="text-gray-500" />
          </button>
        </div>
      </div>
    </footer>
  )
}

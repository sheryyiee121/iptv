import { useState, useEffect } from 'react'
import { Menu, X, Flame, Phone, Mail } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'bg-black/95 backdrop-blur-xl shadow-[0_4px_30px_rgba(229,9,20,0.08)]' : 'bg-transparent'}`}>
      <div className="w-full max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-12">
        <div className="hidden md:flex items-center justify-end gap-6 py-2 text-xs text-gray-500 border-b border-white/5">
          <a href="tel:+447346378897" className="flex items-center gap-1.5 hover:text-red-400 transition-colors">
            <Phone size={11} /> +447346378897
          </a>
          <a href="mailto:sherry@usaquicksolutions.com" className="flex items-center gap-1.5 hover:text-red-400 transition-colors">
            <Mail size={11} /> sherry@usaquicksolutions.com
          </a>
        </div>

        <div className="flex items-center justify-between h-16">
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-red-600 to-red-800 flex items-center justify-center shadow-[0_0_20px_rgba(229,9,20,0.3)] group-hover:shadow-[0_0_30px_rgba(229,9,20,0.5)] transition-shadow">
              <Flame size={22} className="text-white" />
            </div>
            <div className="leading-tight">
              <span className="block text-white font-black text-base tracking-tight">FIRESTICK</span>
              <span className="block text-red-500 text-[9px] font-bold tracking-[0.25em] uppercase">Premium IPTV</span>
            </div>
          </a>

          <div className="hidden md:flex items-center gap-8">
            {['Home', 'Pricing', 'Blog', 'Contact'].map(item => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-sm text-gray-300 hover:text-white transition-colors font-medium relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-red-500 hover:after:w-full after:transition-all"
              >
                {item}
              </a>
            ))}
            <a
              href="#pricing"
              className="bg-gradient-to-r from-red-600 to-red-700 text-white font-bold text-sm px-6 py-2.5 rounded-lg hover:from-red-500 hover:to-red-600 hover:shadow-[0_0_25px_rgba(229,9,20,0.4)] transition-all duration-300"
            >
              Get Started
            </a>
          </div>

          <button onClick={() => setOpen(!open)} className="md:hidden text-white p-2">
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden bg-black/98 backdrop-blur-xl border-t border-white/5 px-6 pb-6 pt-2">
          {['Home', 'Pricing', 'Blog', 'Contact'].map(item => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={() => setOpen(false)}
              className="block py-3.5 text-gray-300 hover:text-white transition-colors font-medium border-b border-white/5"
            >
              {item}
            </a>
          ))}
          <a
            href="#pricing"
            onClick={() => setOpen(false)}
            className="mt-4 block text-center bg-gradient-to-r from-red-600 to-red-700 text-white font-bold text-sm px-5 py-3.5 rounded-lg"
          >
            Get Started
          </a>
        </div>
      )}
    </nav>
  )
}

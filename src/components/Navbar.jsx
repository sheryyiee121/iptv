import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Flame, Phone, Mail } from 'lucide-react';

const navLinks = [
  { label: "HOME", href: "/" },
  { label: "PRICING", href: "/pricing" },
  { label: "SETUP GUIDE", href: "/setup" },
  { label: "BLOG", href: "/blog" },
  { label: "FAQ", href: "/faq" },
  { label: "CONTACT US", href: "/contact" }
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'pt-4 px-4 sm:px-6' : 'pt-0 px-0'
          }`}
      >
        {/* Top Contact Bar - Fades out on scroll */}
        <AnimatePresence>
          {!scrolled && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="w-full bg-black/40 backdrop-blur-md border-b border-white/5"
            >
              <div className="max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-12 py-2 flex justify-end gap-6 text-xs text-gray-400">
                <a href="tel:+19433009678" className="flex items-center gap-1.5 hover:text-sky-400 transition-colors">
                  <Phone size={11} /> +19433009678
                </a>
                <a href="mailto:muhammad.sherazz932@gmail.com" className="flex items-center gap-1.5 hover:text-sky-400 transition-colors">
                  <Mail size={11} /> muhammad.sherazz932@gmail.com
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="flex justify-center w-full max-w-[1440px] mx-auto">
          <motion.div
            layout
            className={`w-full flex items-center justify-between transition-all duration-500 overflow-hidden ${scrolled
                ? 'bg-black/80 backdrop-blur-xl border border-white/10 shadow-[0_8px_30px_rgba(0,0,0,0.5)] rounded-full px-6 py-3 max-w-5xl'
                : 'bg-transparent px-6 sm:px-8 lg:px-12 py-5'
              }`}
          >
            {/* Logo */}
            <a href="/" className="flex items-center gap-3 group relative z-50">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="w-10 h-10 rounded-xl bg-gradient-to-br from-sky-500 to-sky-700 flex items-center justify-center shadow-[0_0_20px_rgba(14,165,233,0.3)] group-hover:shadow-[0_0_30px_rgba(14,165,233,0.6)] transition-all"
              >
                <Flame size={20} className="text-white" />
              </motion.div>
              <div className="leading-tight">
                <span className="block text-white font-black text-sm tracking-tight">FIRESTICK</span>
                <span className="block text-sky-400 text-[8px] font-bold tracking-[0.2em] uppercase">Sky Glass • 4K • 8K</span>
              </div>
            </a>

            {/* Desktop Links */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-xs text-gray-300 hover:text-white font-bold tracking-wider relative group uppercase"
                >
                  {link.label}
                  <span className="absolute -bottom-1.5 left-0 w-0 h-0.5 bg-sky-500 group-hover:w-full transition-all duration-300"></span>
                </a>
              ))}

              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="/pricing"
                className="bg-gradient-to-r from-sky-500 to-cyan-400 text-white font-bold text-xs uppercase tracking-wider px-6 py-2.5 rounded-full shadow-[0_0_20px_rgba(56,189,248,0.3)] hover:shadow-[0_0_30px_rgba(56,189,248,0.5)] transition-all"
              >
                Get Started
              </motion.a>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden relative z-50 p-2 text-white"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <AnimatePresence mode="wait">
                {mobileMenuOpen ? (
                  <motion.div key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }}>
                    <X size={24} />
                  </motion.div>
                ) : (
                  <motion.div key="menu" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }}>
                    <Menu size={24} />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          </motion.div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-40 bg-black/95 backdrop-blur-2xl flex flex-col justify-center items-center md:hidden"
          >
            <div className="flex flex-col items-center gap-8 w-full px-8">
              {navLinks.map((link) => (
                <motion.a
                  key={link.label}
                  whileHover={{ scale: 1.1 }}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-2xl font-black text-gray-300 hover:text-white uppercase tracking-widest"
                >
                  {link.label}
                </motion.a>
              ))}
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="/pricing"
                onClick={() => setMobileMenuOpen(false)}
                className="mt-6 w-full text-center bg-gradient-to-r from-sky-500 to-cyan-400 text-white font-black text-lg uppercase tracking-widest px-8 py-4 rounded-2xl shadow-[0_0_30px_rgba(56,189,248,0.3)]"
              >
                Get Started
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

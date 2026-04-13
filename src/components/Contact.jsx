import { useState } from 'react'
import { Phone, Mail, MapPin, MessageCircle } from 'lucide-react'
import { openWhatsApp } from '../lib/whatsapp'

function buildInquiryMessage({ name, email, message }) {
  return [
    '*Website — subscription / inquiry*',
    '',
    `*Name:* ${name}`,
    `*Email:* ${email}`,
    '',
    '*Message:*',
    message,
  ].join('\n')
}

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  const handleSubmit = (e) => {
    e.preventDefault()
    openWhatsApp(buildInquiryMessage(form))
  }

  return (
    <section id="contact" className="relative py-28 bg-black overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=1920&q=60"
          alt=""
          className="w-full h-full object-cover opacity-[0.04]"
        />
      </div>
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-red-900/5 rounded-full blur-[180px]" />

      <div className="relative w-full max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-500/10 border border-red-500/20 mb-6">
            <MessageCircle size={14} className="text-red-400" />
            <span className="text-red-400 text-xs font-bold uppercase tracking-widest">Get In Touch</span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-5">
            Contact{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-400">Us</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <div>
            <p className="text-gray-400 text-lg mb-10 leading-relaxed">
              Fill the form and tap Subscribe — we&apos;ll open WhatsApp with your details so you can chat with our team right away.
            </p>
            <div className="space-y-6">
              {[
                { icon: Phone, label: 'Phone', value: '+447346378897', href: 'tel:+447346378897' },
                { icon: Mail, label: 'Email', value: 'sherry@usaquicksolutions.com', href: 'mailto:sherry@usaquicksolutions.com' },
                { icon: MapPin, label: 'Location', value: 'United Kingdom', href: null },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4 group">
                  <div className="w-14 h-14 rounded-2xl bg-red-500/10 border border-red-500/10 flex items-center justify-center flex-shrink-0 group-hover:bg-red-500/15 group-hover:border-red-500/20 transition-colors">
                    <item.icon size={20} className="text-red-400" />
                  </div>
                  <div>
                    <div className="text-gray-600 text-[10px] font-bold uppercase tracking-[0.2em] mb-1">{item.label}</div>
                    {item.href ? (
                      <a href={item.href} className="text-white hover:text-red-400 transition-colors font-medium text-lg">
                        {item.value}
                      </a>
                    ) : (
                      <span className="text-white font-medium text-lg">{item.value}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Trust image */}
            <div className="mt-10 rounded-2xl overflow-hidden border border-white/5">
              <img
                src="https://images.unsplash.com/photo-1616530940355-351fabd9524b?w=600&q=80"
                alt="Customer support"
                className="w-full h-48 object-cover opacity-60"
              />
            </div>
          </div>

          <form onSubmit={handleSubmit} className="bg-white/[0.02] rounded-2xl p-8 border border-white/5 backdrop-blur-sm">
            <div className="space-y-5">
              <div>
                <label className="block text-gray-400 text-sm font-medium mb-2">Full Name</label>
                <input
                  type="text"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-5 py-3.5 text-white placeholder-gray-600 focus:border-red-500/40 focus:outline-none focus:shadow-[0_0_0_3px_rgba(229,9,20,0.1)] transition-all"
                  placeholder="Your name"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-400 text-sm font-medium mb-2">Email Address</label>
                <input
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-5 py-3.5 text-white placeholder-gray-600 focus:border-red-500/40 focus:outline-none focus:shadow-[0_0_0_3px_rgba(229,9,20,0.1)] transition-all"
                  placeholder="your@email.com"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-400 text-sm font-medium mb-2">Message</label>
                <textarea
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-5 py-3.5 text-white placeholder-gray-600 focus:border-red-500/40 focus:outline-none focus:shadow-[0_0_0_3px_rgba(229,9,20,0.1)] transition-all resize-none"
                  placeholder="Tell us what you need..."
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2.5 shadow-[0_4px_20px_rgba(37,211,102,0.25)] hover:shadow-[0_6px_28px_rgba(37,211,102,0.35)] transition-all duration-300"
              >
                <MessageCircle size={18} className="shrink-0" />
                Subscribe on WhatsApp
              </button>
              <p className="text-center text-gray-600 text-xs">
                Opens WhatsApp with your name, email, and message pre-filled.
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

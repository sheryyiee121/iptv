import { Check, Crown, Sparkles, Gem, Star } from 'lucide-react'
import { getWhatsAppSendUrl } from '../lib/whatsapp'

function planSubscribeMessage(plan) {
  return `Hi! I'd like to subscribe to the *${plan.name}* plan (${plan.price} — ${plan.period}). Please send me details and next steps.`
}

const plans = [
  {
    name: 'Basic',
    price: '£19',
    period: '1 Month Subscription',
    features: ['HD + 4K Streaming', '28,000+ Channels', '2 Devices', 'Firestick Compatible'],
    cta: 'Subscribe Now',
    badge: null,
    popular: false,
    icon: Crown,
  },
  {
    name: 'Standard',
    price: '£49',
    period: '6 Months Subscription',
    features: ['4K + 8K Streaming', '28,000+ Channels', '3 Devices', 'Firestick + Sky Glass', 'Mobile Downloads'],
    cta: 'Subscribe Now',
    badge: 'Most Popular',
    popular: true,
    icon: Sparkles,
  },
  {
    name: 'Premium',
    price: '£69',
    period: '1 Year Subscription',
    features: ['4K + 8K Ultra HD', '28,000+ Channels', '5 Devices', 'Firestick + Sky Glass', 'Mobile Downloads', 'Priority Support'],
    cta: 'Subscribe Now',
    badge: 'Best Value',
    popular: false,
    icon: Gem,
    note: '* Buy 1 year subscription — 2 months FREE',
  },
  {
    name: 'Ultimate',
    price: '£89',
    period: '1 Year Subscription',
    features: ['8K Ultra HD Streaming', '28,000+ Channels', 'Unlimited Devices', 'Firestick + Sky Glass + All TVs', 'VOD Library', 'VIP Support'],
    cta: 'Go Ultimate',
    badge: '8K Premium',
    popular: false,
    icon: Star,
    note: '* Best for Sky Glass & 8K TV owners',
  },
]

export default function Pricing() {
  return (
    <section id="pricing" className="relative py-28 bg-[#050505] overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=800&q=50&auto=format&fit=crop"
          alt=""
          loading="lazy"
          decoding="async"
          width={800}
          height={533}
          className="w-full h-full object-cover opacity-[0.04]"
        />
      </div>
      <div className="absolute top-1/4 left-0 w-[400px] h-[400px] bg-sky-900/5 rounded-full blur-[180px]" />
      <div className="absolute bottom-1/4 right-0 w-[300px] h-[300px] bg-sky-900/5 rounded-full blur-[150px]" />

      <div className="relative w-full max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sky-500/10 border border-sky-500/20 mb-6">
            <span className="text-sky-400 text-xs font-bold uppercase tracking-widest">Firestick • Sky Glass • 4K • 8K</span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-5">
            Best Prices for{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-cyan-400">
              4K & 8K Streaming
            </span>
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg">
            Premium IPTV packages for Amazon Firestick, Sky Glass, Fire TV Stick & all Smart TVs — 28,000+ channels in stunning 4K & 8K quality
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {plans.map((plan, i) => (
            <div
              key={i}
              className={`relative rounded-2xl border transition-all duration-500 hover:-translate-y-3 overflow-hidden ${plan.popular
                  ? 'bg-gradient-to-b from-sky-600/15 via-sky-900/10 to-transparent border-sky-500/30 shadow-[0_0_60px_rgba(14,165,233,0.1)]'
                  : 'bg-white/[0.02] border-white/5 hover:border-sky-500/15'
                }`}
            >
              {plan.popular && <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-40 bg-sky-600/10 rounded-full blur-[60px]" />}

              {plan.badge && (
                <div className="absolute -top-px left-0 right-0 h-1 bg-gradient-to-r from-sky-600 via-sky-500 to-cyan-400" />
              )}

              <div className="relative p-6">
                {plan.badge && (
                  <span className="inline-block bg-gradient-to-r from-sky-500 to-cyan-400 text-white text-[9px] font-bold px-2.5 py-1 rounded-md mb-3">{plan.badge}</span>
                )}

                <div className={`w-11 h-11 rounded-xl mb-4 flex items-center justify-center ${plan.popular ? 'bg-sky-500/15' : 'bg-white/[0.03]'}`}>
                  <plan.icon size={20} className={plan.popular ? 'text-sky-400' : 'text-gray-500'} />
                </div>

                <h3 className="text-white font-bold text-lg mb-1">{plan.name}</h3>
                <div className="flex items-baseline gap-1 mb-1">
                  <span className={`text-4xl font-black ${plan.popular ? 'text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-cyan-400' : 'text-white'}`}>
                    {plan.price}
                  </span>
                </div>
                <p className="text-gray-500 text-xs mb-5">{plan.period}</p>

                <div className="space-y-2.5 mb-5">
                  {plan.features.map((feature, j) => (
                    <div key={j} className="flex items-center gap-2.5">
                      <div className={`w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0 ${plan.popular ? 'bg-sky-500/15' : 'bg-white/5'}`}>
                        <Check size={9} className={plan.popular ? 'text-sky-400' : 'text-gray-500'} />
                      </div>
                      <span className="text-gray-300 text-xs">{feature}</span>
                    </div>
                  ))}
                </div>

                {plan.note && (
                  <p className="text-sky-400/60 text-[10px] mb-4 leading-relaxed">{plan.note}</p>
                )}

                <a
                  href={getWhatsAppSendUrl(planSubscribeMessage(plan))}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`block text-center font-bold text-sm py-3.5 rounded-xl transition-all duration-300 ${plan.popular
                      ? 'bg-gradient-to-r from-sky-500 via-sky-400 to-cyan-400 text-white ring-1 ring-sky-400/30 hover:from-sky-400 hover:via-sky-300 hover:to-cyan-300 hover:shadow-[0_8px_30px_rgba(56,189,248,0.4)]'
                      : 'border border-white/10 text-white hover:bg-sky-500/10 hover:border-sky-400/30 hover:shadow-[0_4px_20px_rgba(56,189,248,0.15)]'
                    }`}
                >
                  {plan.cta}
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Device compatibility note */}
        <div className="mt-12 text-center">
          <p className="text-gray-500 text-sm">
            Works on: <span className="text-white">Amazon Firestick</span> • <span className="text-white">Fire TV Stick 4K</span> • <span className="text-white">Sky Glass</span> • <span className="text-white">Smart TVs</span> • <span className="text-white">Android</span> • <span className="text-white">iOS</span> • <span className="text-white">Windows</span>
          </p>
        </div>
      </div>
    </section>
  )
}

import { Check, Zap, Crown, Sparkles, Gem } from 'lucide-react'
import { getWhatsAppSendUrl } from '../lib/whatsapp'

function planSubscribeMessage(plan) {
  return `Hi! I'd like to subscribe to the *${plan.name}* plan (${plan.price} — ${plan.period}). Please send me details and next steps.`
}

const plans = [
  {
    name: 'Trial',
    price: 'Free',
    period: '24 Hours Free Trial',
    features: ['HD Streaming', 'All Channels Access', 'Simultaneous Screens'],
    cta: 'Start Trial',
    badge: null,
    popular: false,
    icon: Zap,
  },
  {
    name: 'Basic',
    price: '£19',
    period: '1 Month Subscription',
    features: ['HD Streaming', '4K Ultra HD', 'Simultaneous Screens', 'Mobile Downloads'],
    cta: 'Subscribe Now',
    badge: null,
    popular: false,
    icon: Crown,
  },
  {
    name: 'Standard',
    price: '£34',
    period: '6 Months Subscription',
    features: ['HD Streaming', '4K Ultra HD', 'Simultaneous Screens', 'Mobile Downloads'],
    cta: 'Subscribe Now',
    badge: 'Most Popular',
    popular: true,
    icon: Sparkles,
  },
  {
    name: 'Premium',
    price: '£58',
    period: '1 Year Subscription',
    features: ['HD Streaming', '4K Ultra HD', 'Simultaneous Screens', 'Mobile Downloads'],
    cta: 'Subscribe Now',
    badge: 'Special Offer',
    popular: false,
    icon: Gem,
    note: '* Buy 1 year subscription 1st time — 2 months FREE',
  },
]

export default function Pricing() {
  return (
    <section id="pricing" className="relative py-28 bg-[#050505] overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=1920&q=60"
          alt=""
          className="w-full h-full object-cover opacity-[0.04]"
        />
      </div>
      <div className="absolute top-1/4 left-0 w-[400px] h-[400px] bg-red-900/5 rounded-full blur-[180px]" />
      <div className="absolute bottom-1/4 right-0 w-[300px] h-[300px] bg-red-900/5 rounded-full blur-[150px]" />

      <div className="relative w-full max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-500/10 border border-red-500/20 mb-6">
            <span className="text-red-400 text-xs font-bold uppercase tracking-widest">Pricing Plans</span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-5">
            Best Prices for{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-400">
              24/7 Live Channels
            </span>
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto text-lg">Choose the perfect plan for your streaming needs</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {plans.map((plan, i) => (
            <div
              key={i}
              className={`relative rounded-2xl border transition-all duration-500 hover:-translate-y-3 overflow-hidden ${
                plan.popular
                  ? 'bg-gradient-to-b from-red-600/15 via-red-900/10 to-transparent border-red-500/30 shadow-[0_0_60px_rgba(229,9,20,0.1)]'
                  : 'bg-white/[0.02] border-white/5 hover:border-red-500/15'
              }`}
            >
              {/* Glow for popular */}
              {plan.popular && <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-40 bg-red-600/10 rounded-full blur-[60px]" />}

              {plan.badge && (
                <div className="absolute -top-px left-0 right-0 h-1 bg-gradient-to-r from-red-600 via-red-500 to-orange-400" />
              )}

              <div className="relative p-7">
                {plan.badge && (
                  <span className="inline-block bg-gradient-to-r from-red-600 to-red-700 text-white text-[10px] font-bold px-3 py-1 rounded-md mb-4">{plan.badge}</span>
                )}

                <div className={`w-12 h-12 rounded-xl mb-5 flex items-center justify-center ${plan.popular ? 'bg-red-500/15' : 'bg-white/[0.03]'}`}>
                  <plan.icon size={22} className={plan.popular ? 'text-red-400' : 'text-gray-500'} />
                </div>

                <h3 className="text-white font-bold text-xl mb-1">{plan.name}</h3>
                <div className="flex items-baseline gap-1 mb-1">
                  <span className={`text-5xl font-black ${plan.popular ? 'text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-400' : 'text-white'}`}>
                    {plan.price}
                  </span>
                </div>
                <p className="text-gray-500 text-sm mb-7">{plan.period}</p>

                <div className="space-y-3.5 mb-7">
                  {plan.features.map((feature, j) => (
                    <div key={j} className="flex items-center gap-3">
                      <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 ${plan.popular ? 'bg-red-500/15' : 'bg-white/5'}`}>
                        <Check size={11} className={plan.popular ? 'text-red-400' : 'text-gray-500'} />
                      </div>
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                {plan.note && (
                  <p className="text-red-400/60 text-[11px] mb-5 leading-relaxed">{plan.note}</p>
                )}

                <a
                  href={getWhatsAppSendUrl(planSubscribeMessage(plan))}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`block text-center font-bold text-sm py-3.5 rounded-lg transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-red-600 to-red-700 text-white hover:from-red-500 hover:to-red-600 hover:shadow-[0_8px_30px_rgba(229,9,20,0.35)]'
                      : 'border border-white/10 text-white hover:bg-white/5 hover:border-red-500/20'
                  }`}
                >
                  {plan.cta}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

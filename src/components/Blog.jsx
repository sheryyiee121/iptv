import { ArrowRight, Clock, Play } from 'lucide-react'

const posts = [
  {
    tag: 'Netflix Tiers',
    title: 'The Ultimate Guide to Premium IPTV Tiers 2026',
    desc: 'Everything you need to know about pricing, quality, and new features.',
    img: 'https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?w=600&q=80',
    time: '5 min read',
  },
  {
    tag: 'Hidden Gems',
    title: 'Discover Hidden Gems on Premium IPTV',
    desc: 'Top underrated movies and series you simply have to stream this month.',
    img: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=600&q=80',
    time: '4 min read',
  },
  {
    tag: '4K Streaming',
    title: '4K Ultra HD Streaming: Is Your TV Ready?',
    desc: 'The technical requirements you need to enjoy our streams in perfect 4K quality.',
    img: 'https://images.unsplash.com/photo-1593784991095-a205069470b6?w=600&q=80',
    time: '6 min read',
  },
]

export default function Blog() {
  return (
    <section id="blog" className="relative py-28 bg-[#0a0a0a] overflow-hidden">
      <div className="absolute top-0 left-1/3 w-[500px] h-[500px] bg-red-900/5 rounded-full blur-[180px]" />

      <div className="relative w-full max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-500/10 border border-red-500/20 mb-6">
            <span className="text-red-400 text-xs font-bold uppercase tracking-widest">Blog & Articles</span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white">
            Latest{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-400">News</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post, i) => (
            <div
              key={i}
              className="group bg-white/[0.02] rounded-2xl overflow-hidden border border-white/5 hover:border-red-500/15 transition-all duration-500 hover:-translate-y-2"
            >
              <div className="relative overflow-hidden aspect-[16/10]">
                <img
                  src={post.img}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-black/20 to-transparent" />
                <span className="absolute top-4 left-4 bg-red-600 text-white text-[10px] font-bold px-2.5 py-1 rounded">
                  {post.tag}
                </span>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="w-14 h-14 rounded-full bg-red-600/90 flex items-center justify-center shadow-[0_0_30px_rgba(229,9,20,0.5)]">
                    <Play size={20} className="text-white ml-0.5 fill-white" />
                  </div>
                </div>
              </div>
              <div className="p-7">
                <div className="flex items-center gap-2 mb-3 text-gray-600 text-xs">
                  <Clock size={12} />
                  <span>{post.time}</span>
                </div>
                <h3 className="text-white font-bold text-lg mb-3 group-hover:text-red-400 transition-colors leading-snug">
                  {post.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-5">{post.desc}</p>
                <a
                  href="#"
                  className="inline-flex items-center gap-2 text-red-400 text-sm font-bold group-hover:gap-3 transition-all"
                >
                  READ MORE <ArrowRight size={14} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

import { useEffect, useState } from 'react'
import { ArrowRight, Clock, Play, Tag } from 'lucide-react'
import { blogPosts } from '../data/blogPosts'

function getSlugFromHash() {
  const hash = window.location.hash.replace(/^#/, '')
  if (hash.startsWith('blog-')) return hash.slice(5)
  return null
}

function BlogCard({ post }) {
  return (
    <article className="group bg-white/[0.02] rounded-2xl overflow-hidden border border-white/5 hover:border-sky-500/15 transition-all duration-500 hover:-translate-y-2">
      <div className="relative overflow-hidden aspect-[16/10]">
        <img
          src={post.img}
          alt={post.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
          loading="lazy"
          decoding="async"
          width={640}
          height={400}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-black/20 to-transparent" />
        <span className="absolute top-4 left-4 bg-sky-600 text-white text-[10px] font-bold px-2.5 py-1 rounded">
          {post.tag}
        </span>
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
          <div className="w-14 h-14 rounded-full bg-sky-600/90 flex items-center justify-center shadow-[0_0_30px_rgba(14,165,233,0.5)]">
            <Play size={20} className="text-white ml-0.5 fill-white" />
          </div>
        </div>
      </div>
      <div className="p-7">
        <div className="flex items-center gap-2 mb-3 text-gray-400 text-xs">
          <Clock size={12} />
          <span>{post.time}</span>
          <span>•</span>
          <time dateTime={post.date}>{new Date(post.date).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })}</time>
        </div>
        <h3 className="text-white font-bold text-lg mb-3 group-hover:text-sky-400 transition-colors leading-snug">
          {post.title}
        </h3>
        <p className="text-gray-500 text-sm leading-relaxed mb-4">{post.desc}</p>
        <div className="flex flex-wrap gap-1.5 mb-5">
          {post.keywords.slice(0, 3).map((kw) => (
            <span key={kw} className="text-[10px] text-sky-300 bg-sky-500/10 px-2 py-0.5 rounded-full">{kw}</span>
          ))}
        </div>
        <a
          href={`#blog-${post.slug}`}
          className="inline-flex items-center gap-2 text-sky-400 text-sm font-bold group-hover:gap-3 transition-all"
        >
          READ MORE <ArrowRight size={14} />
        </a>
      </div>
    </article>
  )
}

function FullBlogArticle({ post, highlighted }) {
  return (
    <article
      id={`blog-${post.slug}`}
      className={`blog-article-deferred scroll-mt-28 rounded-2xl border overflow-hidden transition-all duration-500 ${
        highlighted ? 'border-sky-500/40 shadow-[0_0_40px_rgba(14,165,233,0.12)]' : 'border-white/5'
      } bg-white/[0.02]`}
      itemScope
      itemType="https://schema.org/BlogPosting"
    >
      <div className="relative aspect-[21/9] sm:aspect-[3/1] overflow-hidden">
        <img src={post.img} alt={post.title} className="w-full h-full object-cover" itemProp="image" loading="lazy" decoding="async" width={800} height={380} />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-black/50 to-transparent" />
        <span className="absolute top-5 left-5 bg-sky-600 text-white text-xs font-bold px-3 py-1.5 rounded-lg">{post.tag}</span>
      </div>

      <div className="p-8 sm:p-10">
        <div className="flex flex-wrap items-center gap-3 text-gray-500 text-sm mb-4">
          <Clock size={14} />
          <span>{post.time}</span>
          <span>•</span>
          <time dateTime={post.date} itemProp="datePublished">
            {new Date(post.date).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}
          </time>
        </div>

        <h3 className="text-2xl sm:text-3xl font-black text-white mb-4 leading-tight" itemProp="headline">
          {post.title}
        </h3>

        <p className="text-gray-400 text-base sm:text-lg mb-6 leading-relaxed" itemProp="description">{post.desc}</p>

        <div className="flex flex-wrap gap-2 mb-8 pb-8 border-b border-white/5">
          <Tag size={14} className="text-sky-400 mt-0.5 shrink-0" />
          {post.keywords.map((kw) => (
            <span key={kw} className="text-xs text-sky-300 bg-sky-500/10 border border-sky-500/20 px-3 py-1 rounded-full">{kw}</span>
          ))}
        </div>

        <div className="space-y-5" itemProp="articleBody">
          {post.content.map((paragraph, i) => (
            <p key={i} className="text-gray-300 text-base leading-relaxed">{paragraph}</p>
          ))}
        </div>

        <div className="mt-8 p-5 sm:p-6 rounded-xl bg-gradient-to-r from-sky-500/10 to-cyan-500/5 border border-sky-500/20">
          <p className="text-white font-bold mb-1">Ready to start streaming?</p>
          <p className="text-gray-400 text-sm mb-4">
            IPTV packages from £49 Standard, £69 Premium, £89 Ultimate — Fire Stick, Sky Glass & Smart TV compatible.
          </p>
          <a
            href="#pricing"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-sky-500 via-sky-400 to-cyan-400 text-white font-bold text-sm px-6 py-3 rounded-xl ring-1 ring-sky-400/30 hover:shadow-[0_8px_30px_rgba(56,189,248,0.4)] transition-all"
          >
            View IPTV Packages <ArrowRight size={14} />
          </a>
        </div>
      </div>
    </article>
  )
}

export default function Blog() {
  const [activeSlug, setActiveSlug] = useState(getSlugFromHash)

  useEffect(() => {
    const sync = () => {
      const slug = getSlugFromHash()
      setActiveSlug(slug)
      if (slug) {
        setTimeout(() => {
          document.getElementById(`blog-${slug}`)?.scrollIntoView({ behavior: 'smooth' })
        }, 100)
      }
    }
    sync()
    window.addEventListener('hashchange', sync)
    return () => window.removeEventListener('hashchange', sync)
  }, [])

  return (
    <section id="blog" className="relative py-28 bg-[#0a0a0a] overflow-hidden">
      <div className="absolute top-0 left-1/3 w-[500px] h-[500px] bg-sky-900/5 rounded-full blur-[180px]" />

      <div className="relative w-full max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sky-500/10 border border-sky-500/20 mb-6">
            <span className="text-sky-400 text-xs font-bold uppercase tracking-widest">IPTV UK Blog & Guides</span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-5">
            IPTV Packages{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-cyan-400">UK Guides</span>
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg">
            Expert guides on IPTV packages UK, FIFA World Cup 2026 streaming, Amazon Fire Stick setup, Sky Glass, Sky Sports IPTV, and premium subscriptions for UK viewers.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {blogPosts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>

        <div className="mb-12">
          <h3 className="text-2xl sm:text-3xl font-black text-white mb-2">All Articles</h3>
          <p className="text-gray-500">Full IPTV guides for UK Fire Stick, Sky Glass, and Smart TV streaming.</p>
        </div>

        <div className="space-y-12 max-w-4xl mx-auto">
          {blogPosts.map((post) => (
            <FullBlogArticle
              key={post.slug}
              post={post}
              highlighted={activeSlug === post.slug}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

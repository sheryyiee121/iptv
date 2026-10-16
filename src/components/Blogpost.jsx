import { Link, Navigate, useParams } from 'react-router-dom'
import { ArrowLeft, ArrowRight, Clock } from 'lucide-react'
import SeoHead from './SeoHead'
import { blogPosts, getBlogPost } from '../data/blogPosts'
import { SITE_URL } from '../seo/seoConfig'

const ORG_ID = `${SITE_URL}/#organization`

// One BlogPosting per article page, pointing at that page's real URL (fixes F-07 and F-08).
function articleSchema(post) {
    const url = `${SITE_URL}/blog/${post.slug}`
    return {
        '@type': 'BlogPosting',
        '@id': `${url}#article`,
        headline: post.title,
        description: post.desc,
        image: post.img,
        datePublished: post.date, // ISO 8601
        author: { '@id': ORG_ID },
        publisher: { '@id': ORG_ID },
        mainEntityOfPage: { '@type': 'WebPage', '@id': url },
        url,
        inLanguage: 'en-GB',
    }
}

export default function BlogPost() {
    const { slug } = useParams()
    const post = getBlogPost(slug)

    if (!post) return <Navigate to="/#blog" replace />

    const more = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 3)
    const heroImg = post.img.replace('w=600', 'w=1200')

    return (
        <main className="relative bg-[#0a0a0a] pt-32 pb-24">
            <SeoHead
                title={post.seoTitle ?? post.title}
                description={post.desc}
                path={`/blog/${post.slug}`}
                extraSchema={[articleSchema(post)]}
            />

            <article className="max-w-4xl mx-auto px-6 sm:px-8">
                <Link
                    to="/#blog"
                    className="inline-flex items-center gap-2 text-sky-400 text-sm font-semibold mb-8 hover:gap-3 transition-all"
                >
                    <ArrowLeft size={14} /> All IPTV guides
                </Link>

                <div className="relative aspect-[21/9] sm:aspect-[3/1] overflow-hidden rounded-2xl mb-8">
                    <img
                        src={heroImg}
                        alt={post.title}
                        className="w-full h-full object-cover"
                        width={1200}
                        height={400}
                        fetchPriority="high"
                        decoding="async"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-black/40 to-transparent" />
                    <span className="absolute top-5 left-5 bg-sky-600 text-white text-xs font-bold px-3 py-1.5 rounded-lg">
                        {post.tag}
                    </span>
                </div>

                <div className="flex flex-wrap items-center gap-3 text-gray-500 text-sm mb-4">
                    <Clock size={14} />
                    <span>{post.time}</span>
                    <span>•</span>
                    <time dateTime={post.date}>
                        {new Date(post.date).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}
                    </time>
                </div>

                <h1 className="text-3xl sm:text-4xl font-black text-white mb-4 leading-tight">{post.title}</h1>
                <p className="text-gray-400 text-base sm:text-lg mb-8 leading-relaxed">{post.desc}</p>

                <div className="space-y-5 pt-8 border-t border-white/5">
                    {post.content.map((paragraph, i) => (
                        <p key={i} className="text-gray-300 text-base leading-relaxed">
                            {paragraph}
                        </p>
                    ))}
                </div>

                <div className="mt-10 p-5 sm:p-6 rounded-xl bg-gradient-to-r from-sky-500/10 to-cyan-500/5 border border-sky-500/20">
                    <p className="text-white font-bold mb-1">Ready to start streaming?</p>
                    <p className="text-gray-400 text-sm mb-4">
                        IPTV packages from £49 Standard, £69 Premium, £89 Ultimate — Fire Stick, Sky Glass & Smart TV compatible.
                    </p>
                    <Link
                        to="/#pricing"
                        className="inline-flex items-center gap-2 bg-gradient-to-r from-sky-500 via-sky-400 to-cyan-400 text-white font-bold text-sm px-6 py-3 rounded-xl ring-1 ring-sky-400/30 hover:shadow-[0_8px_30px_rgba(56,189,248,0.4)] transition-all"
                    >
                        View IPTV Packages <ArrowRight size={14} />
                    </Link>
                </div>
            </article>

            {more.length > 0 && (
                <aside className="max-w-4xl mx-auto px-6 sm:px-8 mt-16">
                    <h2 className="text-xl font-black text-white mb-5">More IPTV guides</h2>
                    <ul className="space-y-3">
                        {more.map((p) => (
                            <li key={p.slug}>
                                <Link to={`/blog/${p.slug}`} className="text-sky-400 hover:text-sky-300 font-semibold">
                                    {p.title}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </aside>
            )}
        </main>
    )
}
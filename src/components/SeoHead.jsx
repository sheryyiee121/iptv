import { useEffect } from 'react'
import {
  SITE_URL,
  SITE_NAME,
  SEO_TITLE,
  SEO_DESCRIPTION,
  OG_IMAGE,
  PAGE_SEO,
  keywordsMetaContent,
  ALL_SEO_KEYWORDS,
} from '../seo/seoConfig'
import { blogPosts } from '../data/blogPosts'
import { faqs } from '../data/faqs'

function upsertMeta(attrName, key, content) {
  let el = document.querySelector(`meta[${attrName}="${key}"]`)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(attrName, key)
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}

function upsertLink(rel, href) {
  let el = document.querySelector(`link[rel="${rel}"]`)
  if (!el) {
    el = document.createElement('link')
    el.setAttribute('rel', rel)
    document.head.appendChild(el)
  }
  el.setAttribute('href', href)
}

export default function SeoHead({ title: titleProp, description: descProp, path: pathProp } = {}) {
  useEffect(() => {
    const path = pathProp || window.location.pathname.replace(/\/$/, '') || '/'
    const page = PAGE_SEO[path]
    const title = titleProp || page?.title || SEO_TITLE
    const description = descProp || page?.description || SEO_DESCRIPTION
    const canonical = path === '/' ? `${SITE_URL}/` : `${SITE_URL}${path}`

    document.title = title
    upsertMeta('name', 'description', description)
    upsertMeta('name', 'keywords', keywordsMetaContent())
    upsertMeta('name', 'robots', 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1')
    upsertMeta('name', 'author', SITE_NAME)

    upsertMeta('property', 'og:type', 'website')
    upsertMeta('property', 'og:url', canonical)
    upsertMeta('property', 'og:title', title)
    upsertMeta('property', 'og:description', description)
    upsertMeta('property', 'og:image', OG_IMAGE)
    upsertMeta('property', 'og:image:width', '1200')
    upsertMeta('property', 'og:image:height', '800')
    upsertMeta('property', 'og:image:alt', title)
    upsertMeta('property', 'og:site_name', SITE_NAME)
    upsertMeta('property', 'og:locale', 'en_GB')

    upsertMeta('name', 'twitter:card', 'summary_large_image')
    upsertMeta('name', 'twitter:title', title)
    upsertMeta('name', 'twitter:description', description)
    upsertMeta('name', 'twitter:image', OG_IMAGE)
    upsertMeta('name', 'twitter:image:alt', title)

    upsertLink('canonical', canonical)

    const blogSchemas = blogPosts.map((post) => ({
      '@type': 'BlogPosting',
      headline: post.title,
      description: post.desc,
      image: post.img,
      datePublished: post.date,
      author: { '@type': 'Organization', name: SITE_NAME },
      publisher: { '@type': 'Organization', name: SITE_NAME, url: `${SITE_URL}/` },
      mainEntityOfPage: { '@type': 'WebPage', '@id': `${SITE_URL}/blog` },
      keywords: post.keywords.join(', '),
      inLanguage: 'en-GB',
      url: `${SITE_URL}/blog`,
    }))

    const jsonLd = {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'WebSite',
          name: SITE_NAME,
          url: `${SITE_URL}/`,
          description: SEO_DESCRIPTION,
          inLanguage: 'en-GB',
          publisher: { '@type': 'Organization', name: SITE_NAME, url: `${SITE_URL}/` },
        },
        {
          '@type': 'Organization',
          name: SITE_NAME,
          url: `${SITE_URL}/`,
          description: SEO_DESCRIPTION,
          areaServed: { '@type': 'Country', name: 'United Kingdom' },
        },
        {
          '@type': 'WebPage',
          '@id': `${SITE_URL}/#webpage`,
          name: SEO_TITLE,
          description: SEO_DESCRIPTION,
          url: `${SITE_URL}/`,
          isPartOf: { '@type': 'WebSite', name: SITE_NAME, url: `${SITE_URL}/` },
          keywords: ALL_SEO_KEYWORDS.join(', '),
        },
        {
          '@type': 'Blog',
          name: 'IPTV Packages UK Guides',
          description: 'UK IPTV guides for Fire Stick, Sky Glass, Sky Sports, and premium streaming packages.',
          url: `${SITE_URL}/blog`,
          inLanguage: 'en-GB',
          blogPost: blogSchemas,
        },
        ...blogSchemas,
        ...(path === '/faq'
          ? [
              {
                '@type': 'FAQPage',
                mainEntity: faqs.map((item) => ({
                  '@type': 'Question',
                  name: item.q,
                  acceptedAnswer: { '@type': 'Answer', text: item.a },
                })),
              },
            ]
          : []),
      ],
    }

    let script = document.getElementById('seo-jsonld')
    if (!script) {
      script = document.createElement('script')
      script.id = 'seo-jsonld'
      script.type = 'application/ld+json'
      document.head.appendChild(script)
    }
    script.textContent = JSON.stringify(jsonLd)

    return () => {
      // keep meta on unmount for SPA; optional cleanup omitted so refresh/HMR keeps tags
    }
  }, [titleProp, descProp, pathProp])

  return null
}

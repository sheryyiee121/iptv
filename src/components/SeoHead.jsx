import { useEffect } from 'react'
import {
  SITE_URL,
  SITE_NAME,
  SEO_TITLE,
  SEO_DESCRIPTION,
  OG_IMAGE,
  keywordsMetaContent,
  ALL_SEO_KEYWORDS,
} from '../seo/seoConfig'
import { blogPosts } from '../data/blogPosts'

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

export default function SeoHead() {
  useEffect(() => {
    document.title = SEO_TITLE
    upsertMeta('name', 'description', SEO_DESCRIPTION)
    upsertMeta('name', 'keywords', keywordsMetaContent())
    upsertMeta('name', 'robots', 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1')
    upsertMeta('name', 'author', SITE_NAME)

    upsertMeta('property', 'og:type', 'website')
    upsertMeta('property', 'og:url', SITE_URL + '/')
    upsertMeta('property', 'og:title', SEO_TITLE)
    upsertMeta('property', 'og:description', SEO_DESCRIPTION)
    upsertMeta('property', 'og:image', OG_IMAGE)
    upsertMeta('property', 'og:site_name', SITE_NAME)
    upsertMeta('property', 'og:locale', 'en_GB')

    upsertMeta('name', 'twitter:card', 'summary_large_image')
    upsertMeta('name', 'twitter:title', SEO_TITLE)
    upsertMeta('name', 'twitter:description', SEO_DESCRIPTION)
    upsertMeta('name', 'twitter:image', OG_IMAGE)

    upsertLink('canonical', SITE_URL + '/')

    const blogSchemas = blogPosts.map((post) => ({
      '@type': 'BlogPosting',
      headline: post.title,
      description: post.desc,
      image: post.img,
      datePublished: post.date,
      author: { '@type': 'Organization', name: SITE_NAME },
      publisher: { '@type': 'Organization', name: SITE_NAME, url: `${SITE_URL}/` },
      mainEntityOfPage: { '@type': 'WebPage', '@id': `${SITE_URL}/#blog-${post.slug}` },
      keywords: post.keywords.join(', '),
      inLanguage: 'en-GB',
      url: `${SITE_URL}/#blog-${post.slug}`,
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
          url: `${SITE_URL}/#blog`,
          inLanguage: 'en-GB',
          blogPost: blogSchemas,
        },
        ...blogSchemas,
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
  }, [])

  return null
}

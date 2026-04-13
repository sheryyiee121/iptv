/**
 * SEO config — primary phrases from your keyword research + IPTV / UK terms.
 * Note: Google ignores meta keywords; Bing may use lightly. Title + description + body copy matter most.
 */

export const SITE_URL = 'https://www.firestickpackagesstore.uk'
export const SITE_NAME = 'Firestick Packages Store UK'

/** Unique search phrases from your Wordstream list (deduped; noisy duplicates removed) */
export const RESEARCH_KEYWORDS = [
  'fire stick',
  'fire stick stick',
  'fire tv',
  'amazon fire stick',
  'amazon fire stick amazon',
  'fire tv stick amazon fire tv',
  'firestick tv stick',
  'fire stick amazon fire stick',
  'amazon fire stick amazon fire stick',
  'amazon fire tv fire stick',
  'fire amazon fire stick',
  'stick fire stick',
  'amazon fire fire stick',
  'amazon stick fire stick',
  'fire stick in amazon',
  'amazon fire stick stick',
  'amazon fire tv stick',
  'amazon fire tv stick tv',
  'amazon fire tv stick amazon',
  'fire tv fire stick',
  'stick amazon fire tv',
  'fire tv stick fire tv stick',
  'amazon tv fire tv stick',
  'fire tv stick stick',
  'amazon tv tv',
]

/** Service / intent keywords — natural SEO, not stuffing */
export const SERVICE_KEYWORDS = [
  'IPTV UK',
  'Fire Stick packages',
  'Amazon Fire TV',
  'Fire TV Stick 4K',
  'Fire Stick 4K',
  'streaming stick UK',
  'live TV Fire Stick',
  'Sky Sports IPTV',
  'premium IPTV subscription',
  'Firestick IPTV',
]

export const ALL_SEO_KEYWORDS = [...new Set([...RESEARCH_KEYWORDS, ...SERVICE_KEYWORDS])]

export const SEO_TITLE =
  'Amazon Fire Stick & Fire TV Stick UK | IPTV Packages | Fire Stick Streaming'

export const SEO_DESCRIPTION =
  'UK Fire Stick & Amazon Fire TV Stick IPTV packages: 28,000+ channels, 4K, sports & movies. Fire TV, Fire TV Stick, Amazon TV — instant setup & UK support.'

export const OG_IMAGE =
  'https://images.unsplash.com/photo-1593784991095-a205069470b6?w=1200&q=80'

export function keywordsMetaContent(maxLength = 3500) {
  const s = ALL_SEO_KEYWORDS.join(', ')
  return s.length <= maxLength ? s : `${s.slice(0, maxLength - 3)}...`
}

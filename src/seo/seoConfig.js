/**
 * SEO config — primary phrases from your keyword research + IPTV / UK terms.
 * Note: Google ignores meta keywords; Bing may use lightly. Title + description + body copy matter most.
 */

export const SITE_URL = 'https://quicktvpackages.co.uk'
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
  'IPTV packages UK',
  'best IPTV UK',
  'Fire Stick packages',
  'Amazon Fire TV',
  'Fire TV Stick 4K',
  'Fire Stick 4K',
  'streaming stick UK',
  'live TV Fire Stick',
  'Sky Sports IPTV',
  'premium IPTV subscription',
  'Firestick IPTV',
  'Amazon Fire Stick IPTV',
  'Sky Glass IPTV',
  'Sky Glass streaming',
  '8K streaming UK',
  '8K IPTV',
  '4K 8K TV subscription',
  'Sky Glass 4K',
  'Sky Glass 8K',
  'Firestick Sky Glass',
  'UK IPTV packages',
  'IPTV subscription UK',
  'Fire Stick IPTV setup',
  'IPTV vs cable UK',
  'FIFA World Cup 2026',
  'FIFA World Cup UK',
  'watch FIFA World Cup UK',
  'FIFA World Cup IPTV',
  'FIFA World Cup Fire Stick',
  'FIFA live stream UK',
  'World Cup streaming UK',
  'World Cup IPTV UK',
  'FIFA World Cup streaming',
  'England World Cup 2026',
  'FIFA football IPTV UK',
  'World Cup Fire Stick UK',
  'FIFA IPTV packages UK',
]

export const ALL_SEO_KEYWORDS = [...new Set([...RESEARCH_KEYWORDS, ...SERVICE_KEYWORDS])]

export const SEO_TITLE =
  'Firestick & Sky Glass IPTV UK | 4K 8K Streaming | Fire TV Stick Packages'

export const SEO_DESCRIPTION =
  'UK Firestick & Sky Glass IPTV packages: 28,000+ channels in 4K & 8K Ultra HD. Amazon Fire Stick, Fire TV Stick 4K, Sky Glass — sports, movies, instant setup & UK support.'

export const OG_IMAGE =
  'https://images.unsplash.com/photo-1593784991095-a205069470b6?w=1200&q=80'

export function keywordsMetaContent(maxLength = 3500) {
  const s = ALL_SEO_KEYWORDS.join(', ')
  return s.length <= maxLength ? s : `${s.slice(0, maxLength - 3)}...`
}

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
  // Core IPTV UK
  'IPTV UK',
  'IPTV packages UK',
  'best IPTV UK',
  'cheap IPTV UK',
  'IPTV subscription UK',
  'premium IPTV subscription',
  'best IPTV subscription UK',
  'IPTV service UK',
  'UK IPTV packages',
  'affordable IPTV UK',
  'IPTV trial UK',
  'IPTV reseller UK',
  'no buffering IPTV UK',
  'stable IPTV UK',
  'IPTV 2026 UK',
  'buy IPTV UK',
  'IPTV shop UK',
  'IPTV store UK',

  // Firestick / Fire TV
  'Fire Stick packages',
  'Firestick IPTV',
  'Firestick IPTV UK',
  'Amazon Fire TV',
  'Amazon Fire Stick IPTV',
  'Fire TV Stick 4K',
  'Fire Stick 4K',
  'Fire Stick 4K Max',
  'live TV Fire Stick',
  'Fire Stick IPTV setup',
  'best Fire Stick IPTV UK',
  'Firestick packages UK',
  'firestick streaming UK',
  'Amazon Fire Stick UK',
  'fire tv stick iptv UK',

  // Sky Glass / Sky Sports
  'Sky Glass IPTV',
  'Sky Glass streaming',
  'Sky Glass 4K',
  'Sky Glass 8K',
  'Firestick Sky Glass',
  'Sky Sports IPTV',
  'watch Sky Sports cheap UK',
  'Sky Sports alternative UK',
  'Sky Sports without contract',

  // Quality & Tech
  '4K IPTV UK',
  '8K streaming UK',
  '8K IPTV',
  '4K 8K TV subscription',
  'HD IPTV UK',
  'Ultra HD IPTV UK',
  '4K streaming stick UK',
  'streaming stick UK',
  'IPTV 4K channels UK',

  // Channels & Content
  'IPTV 22000 channels UK',
  'IPTV live sports UK',
  'IPTV Premier League UK',
  'IPTV Champions League UK',
  'IPTV PPV UK',
  'IPTV VOD UK',
  'IPTV movies UK',
  'IPTV kids channels UK',
  'IPTV international channels UK',
  'IPTV Arabic channels UK',

  // Pricing & Value
  'cheap IPTV packages UK',
  'IPTV 6 month subscription UK',
  'IPTV yearly subscription UK',
  'IPTV monthly subscription UK',
  'IPTV cut the cord UK',
  'IPTV cancel cable UK',
  'IPTV vs Sky UK',
  'IPTV vs cable UK',
  'IPTV vs Virgin Media UK',

  // Setup & Support
  'IPTV setup guide UK',
  'how to install IPTV UK',
  'IPTV app for Firestick UK',
  'IPTV m3u UK',
  'xtream codes UK',
  'IPTV player UK',
  'IPTV EPG UK',
  'IPTV activation UK',

  // FIFA World Cup
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
  'cheap World Cup streaming UK',
  'FIFA World Cup 4K UK',

  // Long-tail buyer intent
  'best IPTV for Firestick UK 2026',
  'IPTV packages UK with Sky Sports',
  'IPTV subscription UK no contract',
  'firestick packages with sports channels UK',
  'best streaming service UK 2026',
  'IPTV quicktv packages UK',
  'quicktv packages UK',
  'quick tv packages firestick',
]

export const ALL_SEO_KEYWORDS = [...new Set([...RESEARCH_KEYWORDS, ...SERVICE_KEYWORDS])]

export const SEO_TITLE =
  'Best Firestick IPTV Packages UK 2026 | 4K 8K Sky Sports | Amazon Fire Stick Subscription'

export const SEO_DESCRIPTION =
  "UK's #1 Firestick & Sky Glass IPTV packages — 22,000+ live channels, 150,000+ VOD titles in 4K & 8K Ultra HD. Watch Sky Sports, Premier League, FIFA World Cup 2026 & more. From £19/mo. Instant setup & 24/7 UK support."

export const OG_IMAGE =
  'https://images.unsplash.com/photo-1593784991095-a205069470b6?w=1200&q=80'

export function keywordsMetaContent(maxLength = 3500) {
  const s = ALL_SEO_KEYWORDS.join(', ')
  return s.length <= maxLength ? s : `${s.slice(0, maxLength - 3)}...`
}

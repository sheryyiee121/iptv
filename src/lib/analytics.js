/**
 * GA4 helpers. Initial page_view is sent by gtag config in index.html.
 */

const MEASUREMENT_ID = 'G-6ZZM0FFB0P'

function pagePath() {
  return window.location.pathname + window.location.search + window.location.hash
}

export function trackWhatsAppClick({ linkUrl, buttonLocation }) {
  if (typeof window.gtag !== 'function') return
  window.gtag('event', 'whatsapp_click', {
    link_url: linkUrl || '',
    page_path: pagePath(),
    button_location: buttonLocation || 'unknown',
  })
}

export function trackClientPageView() {
  if (typeof window.gtag !== 'function') return
  window.gtag('event', 'page_view', {
    page_path: pagePath(),
    page_title: document.title,
    send_to: MEASUREMENT_ID,
  })
}

export function initSpaPageViews() {
  let last = pagePath()

  const maybeTrack = () => {
    const next = pagePath()
    if (next === last) return
    last = next
    trackClientPageView()
  }

  window.addEventListener('popstate', maybeTrack)
  window.addEventListener('hashchange', maybeTrack)

  return () => {
    window.removeEventListener('popstate', maybeTrack)
    window.removeEventListener('hashchange', maybeTrack)
  }
}

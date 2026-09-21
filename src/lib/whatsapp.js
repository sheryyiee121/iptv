/**
 * WhatsApp Click-to-Chat (no server required)
 * @see https://developers.facebook.com/docs/whatsapp/click-to-chat
 */
export const WHATSAPP_PHONE_E164 = '19433009678'

export const DEFAULT_WHATSAPP_MESSAGE =
  "Hi! I'm interested in your IPTV / Firestick packages. Can you help me?"

/**
 * @param {string} [text] - Pre-filled chat message (keep under ~4000 chars)
 * @returns {string} https://api.whatsapp.com/send?...
 */
export function getWhatsAppSendUrl(text = DEFAULT_WHATSAPP_MESSAGE) {
  const params = new URLSearchParams({ phone: WHATSAPP_PHONE_E164 })
  const trimmed = typeof text === 'string' ? text.trim() : ''
  if (trimmed) params.set('text', trimmed)
  return `https://api.whatsapp.com/send?${params.toString()}`
}

export function openWhatsApp(text) {
  const url = getWhatsAppSendUrl(text || DEFAULT_WHATSAPP_MESSAGE)
  window.open(url, '_blank', 'noopener,noreferrer')
}

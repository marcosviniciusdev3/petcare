import DOMPurify from 'dompurify';

export function sanitizeHtml(rawHtml: string): string {
  if (typeof window === 'undefined') {
    // Server-side fallback or basic sanitization if DOMPurify requires DOM
    // For SSR, DOMPurify can be initialized with a JSDOM window if needed, or we sanitize on client.
    // Here we return escaped or stripped text if server-side, or use DOMPurify when window exists.
    return rawHtml.replace(/<[^>]*>?/gm, '');
  }
  return DOMPurify.sanitize(rawHtml);
}

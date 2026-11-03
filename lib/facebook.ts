/** Only allow ordinary public-facing Facebook video/reel URLs. No arbitrary iframes. */
export function normalizeFacebookReelUrl(value?: string | null): string | undefined {
  if (!value) return undefined;
  try {
    const url = new URL(value.trim());
    if (url.protocol !== 'https:') return undefined;
    if (!['facebook.com', 'www.facebook.com', 'm.facebook.com'].includes(url.hostname.toLowerCase())) return undefined;
    const parts = url.pathname.split('/').filter(Boolean);
    const isReel = parts.length === 2 && parts[0] === 'reel' && /^[a-zA-Z0-9]+$/.test(parts[1]);
    const isVideo = parts.length >= 3 && parts[parts.length - 2] === 'videos' && /^[a-zA-Z0-9]+$/.test(parts.at(-1) || '');
    const isWatch = parts.length === 1 && parts[0] === 'watch' && /^\d+$/.test(url.searchParams.get('v') || '');
    if (!isReel && !isVideo && !isWatch) return undefined;
    return 'https://www.facebook.com' + url.pathname.replace(/\/+$/, '/') +
      (isWatch ? '?v=' + url.searchParams.get('v') : '');
  } catch { return undefined; }
}

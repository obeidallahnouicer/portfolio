/**
 * Resolves a public-folder asset path against Vite's BASE_URL.
 * This ensures images work both locally (base = "/") and on GitHub Pages
 * (base = "/portfolio/").
 *
 * Usage: assetUrl("/images/avatar/photo.jpg")
 */
export function assetUrl(path: string): string {
  // import.meta.env.BASE_URL always has a trailing slash
  const base = import.meta.env.BASE_URL.replace(/\/$/, "");
  return `${base}${path}`;
}

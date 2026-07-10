export function GET({ site }: { site: URL | undefined }) {
  const base = site ?? new URL('https://warteamx.github.io/blog/');
  const body = `User-agent: *\nAllow: /\nSitemap: ${new URL('sitemap-index.xml', base).toString()}\n`;

  return new Response(body, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
    },
  });
}

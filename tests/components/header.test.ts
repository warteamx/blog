import { experimental_AstroContainer as AstroContainer } from 'astro/container';
import { describe, expect, it } from 'vitest';
import Header from '../../src/components/Header.astro';

describe('Header', () => {
  it('renders the primary navigation links', async () => {
    const container = await AstroContainer.create();
    const html = await container.renderToString(Header, {
      props: {
        currentPath: '/blog/',
      },
    });

    expect(html).toContain('Blog Home');
    expect(html).toContain('Main Site');
    expect(html).toContain('Blog');
    expect(html).toContain('About');
    expect(html).toContain('Uses');
    expect(html).toContain('Software Lab');
    expect(html).toContain('https://warteamx.com');
  });
});

import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { unified } from '@astrojs/markdown-remark';
import { remarkCodeFilename } from './src/plugins/remark-code-filename';

const FILENAME_PATTERN = /(?:filename|title)="([^"]+)"/;

export default defineConfig({
  site: 'https://warteamx.github.io/blog/',
  base: '/blog',
  trailingSlash: 'always',
  integrations: [mdx(), sitemap()],
  markdown: {
    processor: unified({
      remarkPlugins: [remarkCodeFilename],
    }),
    shikiConfig: {
      themes: {
        light: 'github-light',
        dark: 'github-dark',
      },
      wrap: true,
      transformers: [
        {
          name: 'filename-transformer',
          pre(node) {
            const rawMeta = this.options.meta?.__raw;
            const filename =
              typeof rawMeta === 'string' ? rawMeta.match(FILENAME_PATTERN)?.[1] : null;

            if (filename) {
              node.properties['data-filename'] = filename;
            }
          },
        },
      ],
    },
  },
  vite: {
    server: {
      host: true,
    },
  },
});

import { readFileSync } from 'node:fs';
import { describe, expect, it } from 'vitest';

describe('card cover styling', () => {
  it('keeps the cover image fully visible without cropping it', () => {
    const css = readFileSync(new URL('../src/styles/global.css', import.meta.url), 'utf8');

    expect(css).toMatch(/\.card-cover\s*\{[^}]*object-fit:\s*contain/);
  });
});

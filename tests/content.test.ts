import { describe, expect, it } from 'vitest';
import { formatDate, getRelatedPosts, toTagSlug } from '../src/utils/content';

const posts = [
  {
    id: 'one',
    data: { tags: ['TypeScript', 'Node.js'], publishedDate: new Date('2026-01-01') },
  },
  {
    id: 'two',
    data: { tags: ['TypeScript', 'OpenTelemetry'], publishedDate: new Date('2026-01-02') },
  },
  {
    id: 'three',
    data: { tags: ['Cloud'], publishedDate: new Date('2026-01-03') },
  },
] as const;

describe('content helpers', () => {
  it('builds stable tag slugs', () => {
    expect(toTagSlug('OpenTelemetry & Grafana')).toBe('opentelemetry-grafana');
  });

  it('formats dates for readers', () => {
    expect(formatDate(new Date('2026-07-10'))).toBe('July 10, 2026');
  });

  it('finds related posts by shared tags', () => {
    expect(getRelatedPosts(posts as never, 'one').map((post) => post.id)).toEqual(['two']);
  });
});

import type { CollectionEntry } from 'astro:content';

export type BlogPost = CollectionEntry<'blog'>;
export type ProjectEntry = CollectionEntry<'projects'>;

export function isPublished(post: BlogPost): boolean {
  return import.meta.env.DEV || !post.data.draft;
}

export function sortPosts(posts: BlogPost[]): BlogPost[] {
  return [...posts].sort(
    (left, right) => right.data.publishedDate.getTime() - left.data.publishedDate.getTime(),
  );
}

export function getRelatedPosts(posts: BlogPost[], currentId: string, limit = 3): BlogPost[] {
  const currentPost = posts.find((post) => post.id === currentId);

  if (!currentPost) {
    return [];
  }

  return posts
    .filter((post) => post.id !== currentId)
    .map((post) => ({
      post,
      sharedTags: post.data.tags.filter((tag: string) => currentPost.data.tags.includes(tag))
        .length,
    }))
    .filter(({ sharedTags }) => sharedTags > 0)
    .sort((left, right) => right.sharedTags - left.sharedTags)
    .slice(0, limit)
    .map(({ post }) => post);
}

export function formatDate(date: Date): string {
  return new Intl.DateTimeFormat('en', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(date);
}

export function toTagSlug(tag: string): string {
  return tag
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

export function withBase(path: string): string {
  const normalizedPath = path.startsWith('/') ? path.slice(1) : path;
  return `${import.meta.env.BASE_URL}${normalizedPath}`;
}

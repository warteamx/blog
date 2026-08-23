export const siteConfig = {
  title: 'WarTeamX Software Labs',
  author: 'WarTeamX Software Labs',
  role: 'Independent Software Laboratory',
  description:
    'A software laboratory focused on software architecture, modern technologies, and practical engineering knowledge.',
  siteUrl: 'https://warteamx.github.io/blog/',
  socialImage: '/social-card.svg',
  socialHandle: '@warteamx',
  email: 'hello@warteamx.com',
  navigation: [
    { href: '/', label: 'Home' },
    { href: '/blog/', label: 'Blog' },
    { href: '/projects/', label: 'Projects' },
    { href: '/about/', label: 'About' },
    { href: '/uses/', label: 'Uses' },
  ],
  featuredTopics: [
    'System Design',
    'Cloud',
    'Artificial Intelligence',
    'Reliability',
    'Observability',
    'Open Source',
    'JavaScript',
  ],
} as const;

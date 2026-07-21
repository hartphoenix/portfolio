export type Project = {
  slug: string
  title: string
  tagline: string
  description: string
  tags: string[]
  year?: string
  liveUrl?: string
  codeUrl?: string
  accentColor?: string
  bannerUrl?: string
  demoUrl?: string
}

export type CreativeItem = {
  title: string
  domain: string
  description: string
  url?: string
}

export type SocialLink = {
  platform: string
  url: string
  handle?: string
}

export const projects: Project[] = [
  {
    slug: 'weft',
    title: 'Weft',
    tagline: 'Developmentally-aware AI tutoring platform.',
    description:
      'A system that tracks how the learner develops, matches interventions to developmental needs, and compounds the value of human teachers rather than replacing them. Multi-agent orchestration, learner state tracking, 10+ skills encoding pedagogical logic.',
    tags: ['TypeScript', 'Claude Skills', 'Multi-Agent Orchestration', 'Systems Architecture'],
    year: '2026',
    accentColor: '#6cb4ee',
    bannerUrl: '/harness-banner.png',
    codeUrl: 'https://github.com/hartphoenix/weft',
  },
  {
    slug: 'the-schelling-point',
    title: 'The Schelling Point',
    tagline: 'Real-time cooperative word game for 20 players.',
    description:
      "Led a four-person team from an open brief — 'a party game of some kind' — to a shipped 20-player product in a five-day sprint. When the first scoring design made players compete instead of cooperate, I rebuilt it overnight around embedding-space centroids so cooperation became the winning move; the first live group of 20 won together.",
    tags: ['React', 'Node.js', 'WebSockets', 'AI/Embeddings'],
    year: '2026',
    accentColor: '#7cb87a',
    bannerUrl: '/schelling-point.png',
    liveUrl: 'https://schellingpoints.ulyssepence.com/',
    codeUrl: 'https://github.com/ulyssepence/schellingpoints',
    demoUrl: '/schelling-point-movie.mp4',
  },
  {
    slug: 'pulsemap',
    title: 'PulseMap',
    tagline: 'Open protocol for synchronized media experiences.',
    description:
      'An open-source protocol and SDK for layering synchronized, interactive experiences onto any time-based media — turning passive playback into something audiences shape together. Designing the event schema, the sync model, and the developer-facing SDK.',
    tags: ['TypeScript', 'Protocol Design', 'SDK', 'Open Source'],
    year: '2026',
    accentColor: '#d4a843',
    bannerUrl: '/pulsemap-banner.png',
    liveUrl: 'https://hartphoenix.github.io/pulseguide/',
    codeUrl: 'https://github.com/hartphoenix/pulsemap',
  },
  {
    slug: 'triple-tac-toe',
    title: 'Triple-Tac-Toe',
    tagline: '3D tic-tac-toe in the browser.',
    description:
      'A 3D tic-tac-toe game built with React Three Fiber. Multitouch controls for rotating and expanding the grid, multiplayer via shareable link.',
    tags: ['React', 'React Three Fiber', 'WebGL', 'Multiplayer'],
    year: '2026',
    accentColor: '#c9a84c',
    bannerUrl: '/triple-tac-toe.png',
    liveUrl: 'https://tic-tac-toe-3d-p3ar.onrender.com/',
    codeUrl: 'https://github.com/hartphoenix/tic-tac-toe-sp-2026/tree/multigame',
  },
]

export const creativeItems: CreativeItem[] = [
  {
    title: 'Lucid Drama',
    domain: 'theater',
    description:
      'Co-wrote many ambitious immersive plays, including a 22-character medieval court drama where players drive the narrative across 8 hours. Built each world, crafted each character, wove the backstories together, and then let go.',
    url: 'https://www.lucidtheater.co/',
  },
  {
    title: 'Vocal Coaching',
    domain: 'coaching',
    description:
      'Private music lessons using somatic awareness and exposure to help singers and songwriters find their voice, trust their intuition, and play freely.',
    url: 'https://power-point-d75.notion.site/Music-Lessons-with-Hart-13cf7429eefe80a787caecadf4ce71fe',
  },
  {
    title: 'Group Courses',
    domain: 'teaching',
    description:
      'Designed and facilitated an 8-week somatic singing workshop: daily practice, weekly solo performances, and a public showcase.',
    url: 'https://power-point-d75.notion.site/Singing-from-Shy-to-Fly-Owning-Your-True-Voice-3cc49898e874461b87bf5172df9b7672',
  },
  {
    title: 'Music Performance',
    domain: 'music',
    description:
      'Cruise ship vocalist, cabaret creator. "I Dare You" — a show born from turning stage fright into artistic fuel.',
    url: 'https://youtu.be/ZQu1g3pYx2E?si=enSp_39SwRSFOmKt',
  },
]

export const socialLinks: SocialLink[] = [
  { platform: 'GitHub', url: 'https://github.com/hartphoenix', handle: 'hartphoenix' },
  { platform: 'LinkedIn', url: 'https://www.linkedin.com/in/rhhart/', handle: 'rhhart' },
  { platform: 'Twitter', url: 'https://x.com/puheenix', handle: 'puheenix' },
]

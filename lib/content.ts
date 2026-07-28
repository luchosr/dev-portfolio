/**
 * content.ts — Single source of truth for portfolio copy.
 *
 * Every string the site renders lives here so the components stay dumb.
 * Lines marked TODO need your input before going live.
 */

export type Tag = string;

export interface Stat {
  value: string;
  label: string;
}

export interface Role {
  period: string;
  title: string;
  company: string;
  description: string;
  tags: Tag[];
}

export interface Project {
  index: string;
  title: string;
  year: string;
  description: string;
  tags: Tag[];
  href?: string;
}

export interface StackGroup {
  label: string;
  items: string[];
}

/* ------------------------------------------------------------------ */
/* Site                                                                */
/* ------------------------------------------------------------------ */

export const site = {
  name: 'Luciano Ramello',
  domain: '.dev',
  monogram: 'L·R',
  url: 'https://luciano-ramello.dev', // TODO: confirm final domain
  available: true,
  availabilityLabel: 'Available · EU remote',
  navigation: [
    { label: 'About', href: '#about' },
    { label: 'Experience', href: '#experience' },
    { label: 'Stack', href: '#stack' },
    { label: 'Work', href: '#work' },
    { label: 'Contact', href: '#contact' },
  ],
} as const;

/* ------------------------------------------------------------------ */
/* 01 — Hero                                                           */
/* ------------------------------------------------------------------ */

export const hero = {
  eyebrow: 'Senior Frontend Developer · Madrid, Spain · Remote across Europe',
  intro:
    'Building web products with React, TypeScript and Next.js for 6+ years. Moving toward fullstack — Node.js, Prisma, own the feature end to end. Background in banking and aviation, where getting the details right actually matters. Based in Madrid, working remotely with teams across Europe.',
  primaryCta: { label: 'Get in touch', href: '#contact' },
  secondaryCta: { label: 'See work', href: '#work' },
};

export const stats: Stat[] = [
  { value: '6+', label: 'Years of experience' },
  { value: 'React', label: 'Primary stack' },
  { value: 'Banking · Aviation', label: 'Industries' },
  { value: 'ES · EN', label: 'Native · Professional' },
];

/* ------------------------------------------------------------------ */
/* 02 — About                                                          */
/* ------------------------------------------------------------------ */

export const about = {
  title: ['Frontend by trade,', 'product by mindset.'],
  paragraphs: [
    "I'm a frontend developer based in Madrid with 6+ years building web apps, mostly with React, TypeScript and Next.js. Most of my experience is on the frontend, but lately I've been moving toward fullstack — working with Node.js and Prisma so I can own a feature end to end instead of stopping at the API boundary. I like understanding the whole picture, not just the UI.",
    "A good part of my career has been in banking and aviation, working through consultancies on products where the domain is complex and getting the details right actually matters. That's made me care about maintainable code and clear specs. I lean on spec-driven development to keep things predictable as projects grow.",
    "I'm happy staying hands-on. The goal isn't to move away from the code but to keep getting better at it: writing software that's solid, readable, and pleasant to work with. Always up for learning something new along the way.",
  ],
  meta: {
    location: 'Madrid, Spain · CET — remote across Europe',
    currently:
      'Expanding into fullstack. Building NomadHome with Node.js, Prisma and PostgreSQL to own features from schema to UI.',
    approach:
      'Spec-driven development — write the specification before the code. Predictable at scale, legible across teams.',
    status: 'Open to opportunities — remote, European time zones',
  },
};

/* ------------------------------------------------------------------ */
/* 03 — Experience                                                     */
/* ------------------------------------------------------------------ */

export const experience: Role[] = [
  {
    period: '2025 — Present',
    title: 'Senior Frontend Developer',
    company: 'Coforge · Iberia',
    description:
      "Built the UI of Relay Book from scratch — the web app Iberia's mechanics use in the hangar to record and process maintenance, repairs and routine procedures on aircraft. Then built a shift-swapping app for staff on rotating rosters, running the full lifecycle from requirements to deployment with spec-driven development and Claude Code as the agent layer.",
    tags: ['TypeScript', 'Next.js', 'React', 'Tailwind CSS', 'Playwright'],
  },
  {
    period: '2021 — 2024',
    title: 'Mid / Senior Frontend Developer',
    company: 'GFT',
    description:
      'Frontend work for European banks. Migrated a legacy class-component codebase to React 18 hooks at Unicaja; extended the suite Deutsche Bank London uses to manage data-processing policies across its financial products; built an atomic-design component library for Fidor Bank in Munich; and shipped views for Radicant, a digital bank focused on sustainable investment.',
    tags: ['React', 'TypeScript', 'Redux', 'Storybook', 'Jest'],
  },
  {
    period: '2020 — 2021',
    title: 'Frontend Developer · Blockchain Researcher',
    company: 'VASS',
    description:
      "Split between product and research. Shipped features and fixes on AXA's insurance funnel and on the Telefónica Movistar / DAZN streaming platform, and ran proof-of-concept work on decentralised tech — Hyperledger, Ethereum smart contracts, IOTA — with frontends in React, Vue, LitElement and Yew.",
    tags: ['React', 'Redux', 'SASS', 'Docker', 'Vue'],
  },
  {
    period: '2019 — 2020',
    title: 'Junior Frontend Developer',
    company: 'Nassua.tech',
    description:
      'Where it started, in Buenos Aires. React components for Paquery, a last-mile delivery platform, and a back-office rebuild for a company in the steel industry.',
    tags: ['React', 'JavaScript', 'Material UI', 'Webpack'],
  },
];

/* ------------------------------------------------------------------ */
/* 04 — Stack                                                          */
/* ------------------------------------------------------------------ */

export const stack: StackGroup[] = [
  {
    label: 'Frontend',
    items: [
      'React',
      'TypeScript',
      'Next.js',
      'Tailwind CSS',
      'Shadcn/ui',
      'Zustand',
      'React Query',
      'Zod',
      'Vitest',
      'Playwright',
    ],
  },
  {
    label: 'Backend',
    items: ['Node.js', 'Prisma', 'PostgreSQL', 'REST', 'Stripe'],
  },
  {
    label: 'Methods · Tools',
    items: [
      'Spec-Driven Development',
      'OpenSpec',
      'Claude Code',
      'Git / GitHub Actions',
      'Figma',
      'Agile / Scrum',
    ],
  },
];

/* ------------------------------------------------------------------ */
/* 05 — Selected work                                                  */
/* ------------------------------------------------------------------ */

export const projects: Project[] = [
  {
    index: '01',
    title: 'NomadHome',
    year: '2026',
    description:
      'A co-living and workspace booking platform, built solo end to end. Next.js frontend, Node and Prisma over PostgreSQL, Stripe Checkout for payments, transactional email through Resend. Backend on Railway, frontend on Vercel — schema, API and UI all mine.',
    tags: ['Next.js', 'Node.js', 'Prisma', 'PostgreSQL', 'Stripe'],
    // href: live demo or repo — optional, only if you want the card clickable
  },
  {
    index: '02',
    title: 'Spec-Driven Agent Orchestrator',
    year: '2026',
    description:
      'A multi-agent development setup for Claude Code: specialised Architect, Backend, Frontend, QA and DevOps roles running a four-phase OpenSpec workflow with human checkpoints between phases, and each ticket isolated in its own Git worktree. Specs first, code second.',
    tags: ['Claude Code', 'OpenSpec', 'Git Worktrees', 'Markdown'],
  },
  {
    index: '03',
    title: 'User Stories → GitHub Projects',
    year: '2025',
    description:
      'A small automation that turns Markdown user stories into GitHub Projects tasks through the GraphQL API. Written to stop copying backlog items by hand; kept because it made planning cheap enough to actually do.',
    tags: ['Python', 'GraphQL', 'GitHub API'],
  },
];

/* ------------------------------------------------------------------ */
/* 06 — Contact                                                        */
/* ------------------------------------------------------------------ */

export const contact = {
  title: ["Let's build", 'something', 'together.'],
  highlightIndex: 1, // the word rendered in the accent colour
  intro:
    "I'm currently open to new opportunities — senior frontend roles, fullstack positions, or anything where product thinking and technical rigour go hand in hand. I work remotely from Madrid (CET) with European teams, so we share a full working day. If that sounds like a match, I'd love to hear from you.",
  links: [
    {
      type: 'email',
      label: 'lucianoramello@gmail.com',
      href: 'mailto:lucianoramello@gmail.com',
    },
    {
      type: 'linkedin',
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/luciano-ramello-b45411143/',
    },
    { type: 'github', label: 'GitHub', href: 'https://github.com/luchosr' },
  ],
};

export const footer = {
  copyright: `© ${new Date().getFullYear()} Luciano Ramello`,
  builtWith: ['React', 'TypeScript', 'Tailwind CSS'],
};

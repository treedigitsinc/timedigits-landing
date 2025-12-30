// SEO metadata for all pages
// Each page gets unique title, description, and canonical URL

export interface PageSEO {
  title: string;
  description: string;
  canonical: string;
}

export const seoData: Record<string, PageSEO> = {
  // Main pages
  home: {
    title: 'timedigits - The Cheapest Time Tracker | Free for Individuals',
    description: 'Track time for free. $1/user for teams. No surveillance, no screenshots. The most affordable time tracking app for freelancers, agencies, and small businesses.',
    canonical: '/',
  },
  about: {
    title: 'About timedigits - Built by Treedigits Inc.',
    description: 'timedigits is built by Treedigits Inc. in Toronto, Canada. We believe time tracking should be simple, affordable, and privacy-focused.',
    canonical: '/about',
  },
  compare: {
    title: 'Compare Time Trackers - timedigits vs Toggl, Clockify, Harvest',
    description: 'See how timedigits compares to Toggl, Clockify, Harvest, Hubstaff and other time trackers. Save 80-90% on time tracking costs.',
    canonical: '/compare',
  },
  faq: {
    title: 'Frequently Asked Questions - timedigits Time Tracking',
    description: 'Get answers to common questions about timedigits pricing, features, privacy, and how it compares to other time trackers.',
    canonical: '/faq',
  },
  blog: {
    title: 'Blog - Time Tracking Insights & Guides',
    description: 'Tips, guides, and insights on time tracking, productivity, and running a freelance or agency business.',
    canonical: '/blog',
  },
  privacy: {
    title: 'Privacy Policy - timedigits',
    description: 'Learn how timedigits protects your privacy. No surveillance, no selling data, minimal collection.',
    canonical: '/privacy',
  },
  cookies: {
    title: 'Cookie Policy - timedigits',
    description: 'Learn about how timedigits uses cookies to improve your experience.',
    canonical: '/cookies',
  },
  terms: {
    title: 'Terms of Service - timedigits',
    description: 'Terms and conditions for using timedigits time tracking software.',
    canonical: '/terms',
  },

  // Competitor alternatives
  togglAlternative: {
    title: 'Toggl Alternative - Save 90% with timedigits',
    description: 'Looking for a Toggl alternative? timedigits costs $1/user vs Toggl\'s $10/user. Same features, 90% cheaper. No surveillance.',
    canonical: '/toggl-alternative',
  },
  clockifyAlternative: {
    title: 'Clockify Alternative - Simpler & Cheaper Time Tracking',
    description: 'Switch from Clockify to timedigits. Cleaner interface, truly free tier, $1/user for teams vs Clockify\'s $5.49/user.',
    canonical: '/clockify-alternative',
  },
  harvestAlternative: {
    title: 'Harvest Alternative - 91% Cheaper Time Tracking',
    description: 'Looking for a Harvest alternative? timedigits is $1/user vs Harvest\'s $11/user. Save 91% on time tracking costs.',
    canonical: '/harvest-alternative',
  },

  // Use case pages
  bestFreeTimeTracker: {
    title: 'Best Free Time Tracker 2025 - Unlimited & No Credit Card',
    description: 'The best free time tracker with no limits. Track unlimited projects, export to CSV, works offline. Free forever for individuals.',
    canonical: '/best-free-time-tracker',
  },
  noSurveillance: {
    title: 'Time Tracker Without Surveillance - No Screenshots, No Spying',
    description: 'Track time without surveillance. timedigits has no screenshots, keystroke logging, GPS tracking, or webcam monitoring. Trust your team.',
    canonical: '/time-tracker-no-surveillance',
  },
  freelance: {
    title: 'Best Time Tracker for Freelancers - Free Forever',
    description: 'Free time tracking for freelancers. Track billable hours, manage multiple clients, export for invoicing. No credit card required.',
    canonical: '/freelance-time-tracker',
  },
  agency: {
    title: 'Time Tracker for Agencies - $1/User Team Tracking',
    description: 'Affordable time tracking for agencies. Track team hours across clients and projects. $10/month for 10 people.',
    canonical: '/agency-time-tracker',
  },
  smallBusiness: {
    title: 'Time Tracker for Small Business - Affordable Team Tracking',
    description: 'Simple time tracking for small businesses. No enterprise complexity. $5/month for up to 5 users, $1/user after.',
    canonical: '/small-business-time-tracker',
  },
  remoteTeam: {
    title: 'Time Tracker for Remote Teams - Real-time Sync, No Surveillance',
    description: 'Track time across remote teams without surveillance. Real-time sync, timezone support, $1/user/month.',
    canonical: '/remote-team-time-tracker',
  },

  // Profession pages
  consultant: {
    title: 'Best Time Tracker for Consultants - Bill Clients Accurately',
    description: 'Time tracking for consultants. Track billable hours across clients, export for invoicing. Free for solo consultants.',
    canonical: '/consultant-time-tracker',
  },
  developer: {
    title: 'Best Time Tracker for Developers - No Surveillance Coding Timer',
    description: 'Time tracking for developers without surveillance. Track coding, meetings, code review. No screenshots or keystroke logging.',
    canonical: '/developer-time-tracker',
  },
  lawyer: {
    title: 'Best Time Tracker for Lawyers - 6-Minute Billing Increments',
    description: 'Time tracking for lawyers and law firms. Bill in 6-minute increments, track by matter, export for client billing.',
    canonical: '/lawyer-time-tracker',
  },
  accountant: {
    title: 'Best Time Tracker for Accountants & CPAs - Tax Season Ready',
    description: 'Time tracking for accountants and CPAs. Track tax prep, advisory, audit hours. Export for client billing.',
    canonical: '/accountant-time-tracker',
  },
  designer: {
    title: 'Best Time Tracker for Designers - Track Projects & Revisions',
    description: 'Time tracking for designers. Track design time, revision rounds, client communication. Free for solo designers.',
    canonical: '/designer-time-tracker',
  },
  contractor: {
    title: 'Best Time Tracker for Contractors - Works Offline on Job Sites',
    description: 'Time tracking for contractors and construction. Works offline on job sites, syncs when back online. Track crews and projects.',
    canonical: '/contractor-time-tracker',
  },
  architect: {
    title: 'Best Time Tracker for Architects - Track by Project Phase',
    description: 'Time tracking for architects. Track by phase (SD, DD, CD, CA), export for client billing. Free for solo architects.',
    canonical: '/architect-time-tracker',
  },
  writer: {
    title: 'Best Time Tracker for Writers - Track Writing Sessions',
    description: 'Time tracking for writers and editors. Track writing, research, editing sessions. Know your effective hourly rate.',
    canonical: '/writer-time-tracker',
  },
  virtualAssistant: {
    title: 'Best Time Tracker for Virtual Assistants - Multi-Client Tracking',
    description: 'Time tracking for virtual assistants. Track hours across multiple clients, switch with one click, export for invoicing.',
    canonical: '/virtual-assistant-time-tracker',
  },
  projectManager: {
    title: 'Best Time Tracker for Project Managers - Team & Budget Tracking',
    description: 'Time tracking for project managers. Track team hours, monitor project budgets, $1/user/month.',
    canonical: '/project-manager-time-tracker',
  },
  therapist: {
    title: 'Best Time Tracker for Therapists - Privacy-Focused Session Tracking',
    description: 'Time tracking for therapists and mental health professionals. Track session hours for billing and insurance. No surveillance.',
    canonical: '/therapist-time-tracker',
  },
};

// Related pages for cross-linking
export const relatedPages: Record<string, string[]> = {
  freelance: ['consultant', 'writer', 'designer', 'virtualAssistant'],
  consultant: ['freelance', 'lawyer', 'accountant', 'architect'],
  developer: ['projectManager', 'remoteTeam', 'agency'],
  lawyer: ['consultant', 'accountant', 'freelance'],
  accountant: ['lawyer', 'consultant', 'smallBusiness'],
  designer: ['freelance', 'writer', 'architect', 'agency'],
  contractor: ['architect', 'projectManager', 'smallBusiness'],
  architect: ['contractor', 'designer', 'consultant'],
  writer: ['freelance', 'designer', 'virtualAssistant'],
  virtualAssistant: ['freelance', 'writer', 'remoteTeam'],
  projectManager: ['developer', 'agency', 'remoteTeam'],
  therapist: ['consultant', 'freelance', 'noSurveillance'],
  agency: ['freelance', 'projectManager', 'remoteTeam', 'designer'],
  smallBusiness: ['agency', 'remoteTeam', 'contractor'],
  remoteTeam: ['agency', 'smallBusiness', 'developer', 'projectManager'],
};

// Page display names for cross-linking
export const pageDisplayNames: Record<string, string> = {
  freelance: 'Freelancers',
  consultant: 'Consultants',
  developer: 'Developers',
  lawyer: 'Lawyers',
  accountant: 'Accountants',
  designer: 'Designers',
  contractor: 'Contractors',
  architect: 'Architects',
  writer: 'Writers',
  virtualAssistant: 'Virtual Assistants',
  projectManager: 'Project Managers',
  therapist: 'Therapists',
  agency: 'Agencies',
  smallBusiness: 'Small Businesses',
  remoteTeam: 'Remote Teams',
  noSurveillance: 'Privacy-Focused Teams',
};

// URL paths for cross-linking
export const pagePaths: Record<string, string> = {
  freelance: '/freelance-time-tracker',
  consultant: '/consultant-time-tracker',
  developer: '/developer-time-tracker',
  lawyer: '/lawyer-time-tracker',
  accountant: '/accountant-time-tracker',
  designer: '/designer-time-tracker',
  contractor: '/contractor-time-tracker',
  architect: '/architect-time-tracker',
  writer: '/writer-time-tracker',
  virtualAssistant: '/virtual-assistant-time-tracker',
  projectManager: '/project-manager-time-tracker',
  therapist: '/therapist-time-tracker',
  agency: '/agency-time-tracker',
  smallBusiness: '/small-business-time-tracker',
  remoteTeam: '/remote-team-time-tracker',
  noSurveillance: '/time-tracker-no-surveillance',
};

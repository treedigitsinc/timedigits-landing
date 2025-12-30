// Comprehensive FAQ Data for SEO optimization
// 50+ questions organized by category

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: FAQCategory;
  priority: 'featured' | 'standard';
  keywords: string[];
}

export type FAQCategory =
  | 'pricing-billing'
  | 'features-functionality'
  | 'teams-collaboration'
  | 'data-privacy'
  | 'integrations-api'
  | 'mcp-ai'
  | 'getting-started'
  | 'troubleshooting'
  | 'comparison'
  | 'technical';

export const categoryLabels: Record<FAQCategory, string> = {
  'pricing-billing': 'Pricing & Billing',
  'features-functionality': 'Features & Functionality',
  'teams-collaboration': 'Teams & Collaboration',
  'data-privacy': 'Data & Privacy',
  'integrations-api': 'Integrations & API',
  'mcp-ai': 'MCP & AI Automation',
  'getting-started': 'Getting Started',
  'troubleshooting': 'Troubleshooting',
  'comparison': 'Comparisons',
  'technical': 'Technical Details',
};

export const faqData: FAQItem[] = [
  // ============================================
  // PRICING & BILLING (12 questions)
  // ============================================
  {
    id: 'free-forever',
    question: 'Is timedigits really free for individuals?',
    answer: 'Yes, completely free with no time limits or hidden fees. Individual users get unlimited projects, unlimited time entries, full history access, CSV export, and offline support. We monetize through team features, not by restricting solo users. There is no credit card required to sign up, and you will never be automatically charged.',
    category: 'pricing-billing',
    priority: 'featured',
    keywords: ['free time tracker', 'free forever', 'no credit card', 'individual pricing'],
  },
  {
    id: 'team-pricing',
    question: 'How does the team pricing work?',
    answer: 'Teams pay a flat $5/month base fee which includes up to 5 team members. Beyond 5 members, each additional person costs $1/month. For example, a 10-person team pays $10/month total ($5 base + $5 for 5 extra members). There are no per-feature charges, no enterprise tiers, and no annual contract requirements. Cancel anytime.',
    category: 'pricing-billing',
    priority: 'featured',
    keywords: ['team pricing', 'per user cost', 'monthly subscription', 'affordable teams'],
  },
  {
    id: 'price-comparison-toggl',
    question: 'How does timedigits compare to Toggl pricing?',
    answer: 'Toggl Track charges $10/user/month for their Starter plan. A 10-person team on Toggl costs $100/month. The same team on timedigits costs $10/month—a 90% savings. Both tools offer core time tracking features, but Toggl bundles in extras like Gantt charts that many teams never use. We focus on doing time tracking exceptionally well at a fraction of the cost.',
    category: 'pricing-billing',
    priority: 'standard',
    keywords: ['toggl alternative', 'toggl vs timedigits', 'toggl pricing comparison'],
  },
  {
    id: 'price-comparison-harvest',
    question: 'How does timedigits compare to Harvest pricing?',
    answer: 'Harvest charges $11/user/month for their Pro plan with a $20/month base fee. A 10-person team pays $130/month. With timedigits, that same team pays $10/month—saving over $1,400/year. Harvest includes invoicing which timedigits is adding soon, but for pure time tracking, the value proposition is clear.',
    category: 'pricing-billing',
    priority: 'standard',
    keywords: ['harvest alternative', 'harvest vs timedigits', 'harvest pricing comparison'],
  },
  {
    id: 'price-comparison-clockify',
    question: 'How does timedigits compare to Clockify pricing?',
    answer: 'Clockify offers a generous free tier but charges $5.49-$11.99/user/month for advanced features like project templates, targets, and extra integrations. A 10-person team on their Pro plan costs $54.90/month. timedigits costs $10/month for the same team size. Our philosophy differs too: Clockify monetizes by restricting free features, while we keep all core features free.',
    category: 'pricing-billing',
    priority: 'standard',
    keywords: ['clockify alternative', 'clockify vs timedigits', 'clockify pricing'],
  },
  {
    id: 'hidden-fees',
    question: 'Are there any hidden fees or costs?',
    answer: 'No hidden fees whatsoever. Our pricing is transparent: free for individuals, $5/month + $1 per additional member for teams. No setup fees, no data storage fees, no export fees, no API usage fees. What you see is what you pay. We believe surprise charges erode trust, so we price honestly upfront.',
    category: 'pricing-billing',
    priority: 'featured',
    keywords: ['transparent pricing', 'no hidden fees', 'honest pricing'],
  },
  {
    id: 'billing-cycle',
    question: 'How does billing work? Monthly or annual?',
    answer: 'We bill monthly by default with no long-term commitment required. You can cancel anytime and continue using the service until your billing period ends. We currently do not offer annual plans with discounts, but may introduce this option based on customer feedback. Your subscription automatically renews each month unless you cancel.',
    category: 'pricing-billing',
    priority: 'standard',
    keywords: ['monthly billing', 'subscription', 'cancel anytime'],
  },
  {
    id: 'payment-methods',
    question: 'What payment methods do you accept?',
    answer: 'We accept all major credit cards (Visa, Mastercard, American Express, Discover) through Stripe, our payment processor. Stripe handles all payment security and PCI compliance. We do not currently accept PayPal, bank transfers, or cryptocurrency, though we may add more options based on demand.',
    category: 'pricing-billing',
    priority: 'standard',
    keywords: ['payment methods', 'credit card', 'stripe', 'secure payment'],
  },
  {
    id: 'refund-policy',
    question: 'What is your refund policy?',
    answer: 'We offer a full refund within 14 days of your first payment if you are not satisfied. For ongoing subscriptions, we do not provide partial-month refunds, but you can cancel anytime and your access continues until the end of your billing period. Since individuals can use timedigits completely free, we recommend trying all features before upgrading your team.',
    category: 'pricing-billing',
    priority: 'standard',
    keywords: ['refund policy', 'money back guarantee', 'cancel subscription'],
  },
  {
    id: 'enterprise-pricing',
    question: 'Do you offer enterprise or custom pricing?',
    answer: 'We do not have separate enterprise tiers because we believe our team pricing is already fair at any scale. A 100-person team pays $100/month, a 500-person team pays $500/month. If you have specific compliance requirements (SOC 2, HIPAA, etc.) or need custom contracts, contact us at support@timedigits.com and we will work with you.',
    category: 'pricing-billing',
    priority: 'standard',
    keywords: ['enterprise pricing', 'large teams', 'custom pricing', 'volume discount'],
  },
  {
    id: 'upgrade-downgrade',
    question: 'Can I upgrade or downgrade my plan?',
    answer: 'Absolutely. As an individual, you can invite team members anytime to upgrade to a team plan. Team admins can add or remove members, and billing adjusts automatically on the next cycle. If your team shrinks below 5 members, you still pay the $5 base fee. If you remove all team members, you revert to a free individual account.',
    category: 'pricing-billing',
    priority: 'standard',
    keywords: ['upgrade plan', 'downgrade plan', 'change subscription'],
  },
  {
    id: 'nonprofit-discount',
    question: 'Do you offer discounts for nonprofits or education?',
    answer: 'We do not currently have formal nonprofit or education discounts because our pricing is already extremely affordable. A 10-person nonprofit team pays just $10/month. That said, if you are a registered nonprofit and need assistance, reach out to support@timedigits.com and we will see how we can help.',
    category: 'pricing-billing',
    priority: 'standard',
    keywords: ['nonprofit discount', 'education pricing', 'charity discount'],
  },

  // ============================================
  // FEATURES & FUNCTIONALITY (12 questions)
  // ============================================
  {
    id: 'export-data',
    question: 'Can I export my time tracking data?',
    answer: 'Yes, you can export your data to CSV at any time with one click. Select any date range—a single day, a week, a month, or your entire history—and download a spreadsheet with project names, time entries, durations, and notes. Your data belongs to you, and we make it easy to use for invoicing, accounting, or switching tools.',
    category: 'features-functionality',
    priority: 'featured',
    keywords: ['export data', 'csv export', 'download time entries', 'data portability'],
  },
  {
    id: 'offline-support',
    question: 'Does timedigits work offline?',
    answer: 'Yes, timedigits is built with offline-first architecture. Start a timer without internet, and it will keep running locally. When you reconnect, your data syncs automatically to the cloud. This is essential for field workers, commuters, or anyone with unreliable connectivity. You will never lose tracked time due to network issues.',
    category: 'features-functionality',
    priority: 'featured',
    keywords: ['offline mode', 'offline time tracking', 'sync data', 'no internet'],
  },
  {
    id: 'unlimited-projects',
    question: 'How many projects can I create?',
    answer: 'Unlimited projects on all plans, including free. There is no artificial cap on projects, clients, or time entries. We do not believe in restricting how you organize your work. Create as many projects as you need without worrying about hitting a limit or being prompted to upgrade.',
    category: 'features-functionality',
    priority: 'standard',
    keywords: ['unlimited projects', 'no limits', 'project management'],
  },
  {
    id: 'manual-time-entry',
    question: 'Can I add time entries manually?',
    answer: 'Yes, you can add time entries manually in addition to using the timer. Forgot to start the timer? Add the entry after the fact with the exact start time, end time, project, and notes. This flexibility ensures accurate records even when you forget to track in real-time.',
    category: 'features-functionality',
    priority: 'standard',
    keywords: ['manual time entry', 'add past time', 'edit time entries'],
  },
  {
    id: 'reports-analytics',
    question: 'What reports and analytics are available?',
    answer: 'timedigits provides real-time reports showing daily, weekly, and monthly summaries. View time by project with visual breakdowns, track productivity trends over time, and filter by date range or specific projects. Team plans add the ability to see individual member contributions. All reports can be exported to CSV for external analysis.',
    category: 'features-functionality',
    priority: 'standard',
    keywords: ['time reports', 'analytics', 'productivity tracking', 'time breakdown'],
  },
  {
    id: 'mobile-apps',
    question: 'Is there a mobile app?',
    answer: 'timedigits is a Progressive Web App (PWA) that works on any device with a modern browser. On mobile, you can add it to your home screen for an app-like experience with offline support. We chose PWA technology over native apps to ensure feature parity across all platforms and faster update cycles.',
    category: 'features-functionality',
    priority: 'standard',
    keywords: ['mobile app', 'ios app', 'android app', 'progressive web app', 'pwa'],
  },
  {
    id: 'desktop-app',
    question: 'Is there a desktop app?',
    answer: 'Currently, timedigits runs in your web browser and as a PWA. A dedicated desktop app with system tray integration and idle detection is on our roadmap for 2026. The web version already supports keyboard shortcuts and works offline, providing most desktop app benefits.',
    category: 'features-functionality',
    priority: 'standard',
    keywords: ['desktop app', 'windows app', 'mac app', 'native app'],
  },
  {
    id: 'browser-extension',
    question: 'Is there a browser extension?',
    answer: 'A browser extension for Chrome, Firefox, and Edge is planned for 2026. The extension will allow one-click timer starts from any webpage and integrate with project management tools like Jira, Asana, and Linear. For now, you can pin the timedigits tab or use the PWA.',
    category: 'features-functionality',
    priority: 'standard',
    keywords: ['browser extension', 'chrome extension', 'firefox addon'],
  },
  {
    id: 'invoicing-feature',
    question: 'Can I create invoices from tracked time?',
    answer: 'Invoicing is coming soon as a team feature. You will be able to set hourly rates per project, select billable time entries, and generate PDF invoices ready to send to clients. We are building a straightforward invoicing flow that does not require accounting expertise—just select time, preview, and send.',
    category: 'features-functionality',
    priority: 'standard',
    keywords: ['invoicing', 'create invoices', 'billable hours', 'client billing'],
  },
  {
    id: 'billable-hours',
    question: 'Can I track billable vs non-billable hours?',
    answer: 'Yes, you can mark time entries as billable or non-billable. This distinction is essential for client work where only certain activities should be invoiced. Reports filter by billable status so you can see exactly how much revenue-generating work was completed.',
    category: 'features-functionality',
    priority: 'standard',
    keywords: ['billable hours', 'non-billable time', 'client hours'],
  },
  {
    id: 'tags-labels',
    question: 'Can I add tags or labels to time entries?',
    answer: 'Tags and labels for time entries are planned for a future update. This will allow categorization beyond projects—for example, tagging entries as "meeting", "deep work", or "admin". Our current workaround is using project names or notes to achieve similar organization.',
    category: 'features-functionality',
    priority: 'standard',
    keywords: ['tags', 'labels', 'categorize time', 'organize entries'],
  },
  {
    id: 'pomodoro-technique',
    question: 'Does timedigits support Pomodoro technique?',
    answer: 'timedigits focuses on continuous time tracking rather than interval-based methods like Pomodoro. However, you can manually start and stop timers in 25-minute blocks if you prefer Pomodoro workflows. Dedicated Pomodoro features with break reminders may be added based on user demand.',
    category: 'features-functionality',
    priority: 'standard',
    keywords: ['pomodoro', 'pomodoro timer', 'focus technique', 'time intervals'],
  },

  // ============================================
  // TEAMS & COLLABORATION (8 questions)
  // ============================================
  {
    id: 'team-workspace',
    question: 'How do team workspaces work?',
    answer: 'When you upgrade to a team plan, you create a shared workspace where all members see the same projects and can track time against them. Team admins invite members via email, and each person maintains their own timer while contributing to shared reports. Think of it as a collaborative time log with centralized visibility.',
    category: 'teams-collaboration',
    priority: 'featured',
    keywords: ['team workspace', 'shared workspace', 'collaboration'],
  },
  {
    id: 'invite-team-members',
    question: 'How do I invite team members?',
    answer: 'Team admins can invite members by entering their email addresses in the Team Settings page. Invitees receive an email with a link to join the workspace. They can create a new account or link an existing timedigits account. Once they accept, they immediately gain access to team projects and can start tracking.',
    category: 'teams-collaboration',
    priority: 'standard',
    keywords: ['invite team', 'add members', 'team invitations'],
  },
  {
    id: 'team-roles',
    question: 'What roles and permissions are available?',
    answer: 'Currently, we have two roles: Admin and Member. Admins can invite/remove members, manage billing, create projects, and view all team reports. Members can track time, view their own reports, and see shared projects. More granular permissions (like project-level access) are planned for a future update.',
    category: 'teams-collaboration',
    priority: 'standard',
    keywords: ['team roles', 'permissions', 'admin access', 'member permissions'],
  },
  {
    id: 'team-reports',
    question: 'Can I see how much time my team tracked?',
    answer: 'Yes, team admins and members can view aggregated team reports showing total hours tracked per project, per member, or per day. This visibility helps with resource planning, project budgeting, and ensuring balanced workloads. All data updates in real-time as team members track.',
    category: 'teams-collaboration',
    priority: 'standard',
    keywords: ['team reports', 'team analytics', 'view team time'],
  },
  {
    id: 'multiple-teams',
    question: 'Can I be part of multiple teams?',
    answer: 'Yes, a single timedigits account can belong to multiple team workspaces. This is useful for freelancers who work with multiple clients or employees who contribute to different departments. You can switch between workspaces from the dashboard. Each workspace has its own billing and member list.',
    category: 'teams-collaboration',
    priority: 'standard',
    keywords: ['multiple teams', 'multiple workspaces', 'freelancer teams'],
  },
  {
    id: 'real-time-sync',
    question: 'Is team data synced in real-time?',
    answer: 'Yes, all team activity syncs in real-time. When a team member starts a timer, other members can see the update within seconds. Reports refresh automatically. This real-time architecture uses WebSocket connections to push updates instantly rather than requiring page refreshes.',
    category: 'teams-collaboration',
    priority: 'standard',
    keywords: ['real-time sync', 'live updates', 'instant sync'],
  },
  {
    id: 'timesheet-approvals',
    question: 'Are timesheet approvals available?',
    answer: 'Timesheet approval workflows are planned for a future team update. Managers will be able to review and approve submitted timesheets before they are finalized. This is particularly useful for compliance, payroll integration, and client billing verification.',
    category: 'teams-collaboration',
    priority: 'standard',
    keywords: ['timesheet approval', 'approve timesheets', 'review time'],
  },
  {
    id: 'leave-team',
    question: 'How do I leave a team or remove a member?',
    answer: 'Members can leave a team anytime from their account settings—no admin approval needed. Team admins can remove members from the Team Settings page. When removed, the member loses access to team projects but retains their personal timedigits account. Their historical time entries remain in team records for audit purposes.',
    category: 'teams-collaboration',
    priority: 'standard',
    keywords: ['leave team', 'remove member', 'delete team member'],
  },

  // ============================================
  // DATA & PRIVACY (8 questions)
  // ============================================
  {
    id: 'data-ownership',
    question: 'Who owns my time tracking data?',
    answer: 'You own your data completely. We are merely a custodian that stores and processes it on your behalf. You can export all your data anytime, and if you delete your account, we remove your data from our systems. We never sell, share, or monetize your data. Our business model is subscriptions, not data harvesting.',
    category: 'data-privacy',
    priority: 'featured',
    keywords: ['data ownership', 'my data', 'data rights', 'privacy'],
  },
  {
    id: 'data-encryption',
    question: 'How is my data protected?',
    answer: 'All data is encrypted in transit using TLS 1.3 and at rest using AES-256 encryption. We use Supabase as our database provider, which runs on AWS infrastructure with SOC 2 Type II certification. Access to production databases is restricted to essential personnel only, and all access is logged.',
    category: 'data-privacy',
    priority: 'featured',
    keywords: ['data encryption', 'data security', 'secure storage', 'tls encryption'],
  },
  {
    id: 'gdpr-compliance',
    question: 'Is timedigits GDPR compliant?',
    answer: 'Yes, we are GDPR compliant. European users have the right to access, rectify, and delete their personal data. We process only the minimum data necessary for the service, do not use data for advertising, and honor data subject requests within 30 days. Our privacy policy details our data processing activities.',
    category: 'data-privacy',
    priority: 'standard',
    keywords: ['gdpr', 'gdpr compliant', 'european privacy', 'data protection'],
  },
  {
    id: 'data-deletion',
    question: 'How do I delete my data or account?',
    answer: 'You can delete your account from the Account Settings page. This permanently removes all your personal data, time entries, and projects. For team accounts, the team admin must first remove you or delete the team. Deletion is irreversible—we recommend exporting your data first. We complete deletion requests within 30 days per GDPR requirements.',
    category: 'data-privacy',
    priority: 'standard',
    keywords: ['delete account', 'delete data', 'remove account', 'data erasure'],
  },
  {
    id: 'data-location',
    question: 'Where is my data stored?',
    answer: 'Data is stored in secure cloud infrastructure provided by Supabase (running on AWS). Our primary data centers are in the United States, with potential regional options in the future for organizations with data residency requirements. Backups are stored in geographically separate locations for disaster recovery.',
    category: 'data-privacy',
    priority: 'standard',
    keywords: ['data location', 'data center', 'where is data stored', 'data residency'],
  },
  {
    id: 'data-backup',
    question: 'How often is data backed up?',
    answer: 'We perform automated backups daily with point-in-time recovery capability. This means we can restore data to any point within the last 7 days. Additionally, we maintain weekly backups for the past month. Our infrastructure is designed for 99.9% uptime with automatic failover.',
    category: 'data-privacy',
    priority: 'standard',
    keywords: ['data backup', 'backup frequency', 'data recovery', 'disaster recovery'],
  },
  {
    id: 'no-surveillance',
    question: 'Does timedigits track my activity or take screenshots?',
    answer: 'Absolutely not. We believe in trust over surveillance. We do not take screenshots, log keystrokes, track mouse movements, monitor websites visited, or access your webcam. timedigits tracks exactly what you tell it to track: the time you spend on projects. Our philosophy is that productivity comes from empowerment, not monitoring.',
    category: 'data-privacy',
    priority: 'featured',
    keywords: ['no screenshots', 'no surveillance', 'no monitoring', 'privacy focused'],
  },
  {
    id: 'third-party-sharing',
    question: 'Do you share data with third parties?',
    answer: 'We do not sell or share your data with third parties for marketing or advertising. We use essential service providers (Supabase for database, Stripe for payments, Vercel for hosting) who process data only as needed to provide our service. These providers are contractually bound to data protection standards. See our privacy policy for the complete list.',
    category: 'data-privacy',
    priority: 'standard',
    keywords: ['third party data', 'data sharing', 'service providers'],
  },

  // ============================================
  // INTEGRATIONS & API (8 questions)
  // ============================================
  {
    id: 'api-access',
    question: 'Does timedigits have an API?',
    answer: 'Yes, we provide a REST API for teams that enables programmatic access to projects, time entries, and reports. The API uses bearer token authentication and supports CRUD operations on all core entities. Full API documentation is available at docs.timedigits.com. API access is included in team plans at no extra cost.',
    category: 'integrations-api',
    priority: 'featured',
    keywords: ['api access', 'rest api', 'api documentation', 'programmatic access'],
  },
  {
    id: 'project-management-integrations',
    question: 'Does timedigits integrate with Jira, Asana, or Linear?',
    answer: 'Native integrations with Jira, Asana, Linear, and other project management tools are on our roadmap. Currently, you can use our API to build custom integrations or sync data manually. Our MCP Server also allows AI assistants like Claude to create projects based on external task data, enabling a different form of integration.',
    category: 'integrations-api',
    priority: 'standard',
    keywords: ['jira integration', 'asana integration', 'linear integration', 'project management'],
  },
  {
    id: 'calendar-sync',
    question: 'Can I sync time entries with Google Calendar?',
    answer: 'Calendar integration (Google Calendar, Outlook) is planned for a future update. When available, you will be able to automatically create time entries from calendar events or see tracked time reflected on your calendar. For now, you can use our API to build a custom sync if needed.',
    category: 'integrations-api',
    priority: 'standard',
    keywords: ['google calendar', 'calendar sync', 'outlook calendar', 'calendar integration'],
  },
  {
    id: 'accounting-integrations',
    question: 'Does timedigits integrate with QuickBooks or Xero?',
    answer: 'Accounting software integrations (QuickBooks, Xero, FreshBooks) are planned alongside our invoicing feature. The goal is to sync invoices and billable time directly with your accounting system. Currently, you can export CSV data and import it into most accounting tools manually.',
    category: 'integrations-api',
    priority: 'standard',
    keywords: ['quickbooks integration', 'xero integration', 'accounting integration'],
  },
  {
    id: 'zapier-integration',
    question: 'Is there a Zapier or Make integration?',
    answer: 'Zapier and Make (formerly Integromat) integrations are planned to enable no-code automations. Until then, our REST API allows developers to create custom workflows connecting timedigits with thousands of other apps. Our MCP Server offers another automation path for AI-powered workflows.',
    category: 'integrations-api',
    priority: 'standard',
    keywords: ['zapier', 'make', 'integromat', 'automation', 'no-code'],
  },
  {
    id: 'webhooks',
    question: 'Do you support webhooks?',
    answer: 'Webhook support for real-time event notifications (timer started, entry created, etc.) is planned. This will allow you to trigger external actions when events occur in timedigits. Our current API supports polling for changes, though webhooks will be more efficient for real-time use cases.',
    category: 'integrations-api',
    priority: 'standard',
    keywords: ['webhooks', 'event notifications', 'real-time events'],
  },
  {
    id: 'api-rate-limits',
    question: 'What are the API rate limits?',
    answer: 'The API allows 1000 requests per hour per API key, which is sufficient for most integration use cases. Bulk operations (like syncing all historical data) should be done during off-peak hours. If you need higher limits for enterprise use cases, contact support@timedigits.com.',
    category: 'integrations-api',
    priority: 'standard',
    keywords: ['api rate limits', 'api throttling', 'request limits'],
  },
  {
    id: 'import-from-other-tools',
    question: 'Can I import data from other time trackers?',
    answer: 'We do not have automated import from competitors like Toggl or Harvest yet, but it is on our roadmap. Currently, if you have exported CSV data from another tool, contact support@timedigits.com and we can assist with bulk import. Our goal is to make switching to timedigits as frictionless as possible.',
    category: 'integrations-api',
    priority: 'standard',
    keywords: ['import data', 'migrate from toggl', 'switch from harvest', 'data migration'],
  },

  // ============================================
  // MCP & AI AUTOMATION (10 questions)
  // ============================================
  {
    id: 'what-is-mcp',
    question: 'What is MCP (Model Context Protocol)?',
    answer: 'MCP is an open protocol developed by Anthropic that standardizes how AI applications connect to external data sources and tools. Think of it as a universal adapter that lets AI assistants like Claude interact with services like timedigits. Instead of each AI needing custom integrations, MCP provides a consistent interface for reading and writing data across different applications.',
    category: 'mcp-ai',
    priority: 'featured',
    keywords: ['mcp', 'model context protocol', 'anthropic', 'ai protocol'],
  },
  {
    id: 'mcp-server-feature',
    question: 'What is the timedigits MCP Server?',
    answer: 'The timedigits MCP Server is a component that exposes your time tracking data and actions to MCP-compatible AI assistants. When enabled, AI tools like Claude can start/stop timers, create projects, query time data, and generate reports on your behalf. It transforms natural language commands ("Start tracking the marketing project") into actual timedigits operations.',
    category: 'mcp-ai',
    priority: 'featured',
    keywords: ['mcp server', 'timedigits mcp', 'ai integration', 'claude integration'],
  },
  {
    id: 'mcp-how-it-works',
    question: 'How does AI-powered time tracking work?',
    answer: 'When you connect Claude (or another MCP-compatible AI) to timedigits, the AI can understand context from your conversation and manage time tracking accordingly. Say "I\'m starting work on the API refactor" and Claude can start a timer on the appropriate project. Ask "How much did I work this week?" and it queries your data to respond. The AI acts as an intelligent interface to timedigits.',
    category: 'mcp-ai',
    priority: 'featured',
    keywords: ['ai time tracking', 'automated time tracking', 'voice time tracking', 'natural language'],
  },
  {
    id: 'mcp-setup',
    question: 'How do I set up the MCP Server?',
    answer: 'The MCP Server is enabled from Team Settings for teams on paid plans. Once enabled, you receive an MCP endpoint URL and authentication token. Configure your AI assistant (like Claude Desktop) to connect to this endpoint using the MCP client protocol. Detailed setup instructions are in our documentation at docs.timedigits.com/mcp.',
    category: 'mcp-ai',
    priority: 'standard',
    keywords: ['mcp setup', 'configure mcp', 'install mcp server'],
  },
  {
    id: 'mcp-security',
    question: 'Is the MCP integration secure?',
    answer: 'Yes. The MCP Server uses the same authentication as our API—bearer tokens with configurable scopes. You control exactly what actions the AI can perform: read-only access, timer control, or full management. All requests are encrypted via TLS, and you can revoke access tokens anytime. The AI only accesses data you explicitly authorize.',
    category: 'mcp-ai',
    priority: 'standard',
    keywords: ['mcp security', 'ai security', 'secure ai integration'],
  },
  {
    id: 'mcp-supported-ai',
    question: 'Which AI assistants support MCP?',
    answer: 'Currently, Claude (via Claude Desktop and the Claude API) has native MCP support as Anthropic developed the protocol. Other AI providers may adopt MCP over time as it gains traction. We also support direct API integration for AI tools that don\'t yet have MCP clients, allowing any programmable AI to interact with timedigits.',
    category: 'mcp-ai',
    priority: 'standard',
    keywords: ['claude mcp', 'ai assistants', 'mcp compatible ai'],
  },
  {
    id: 'mcp-use-cases',
    question: 'What can I do with AI-powered time tracking?',
    answer: 'Common use cases include: voice-controlled timers ("Claude, stop the timer"), contextual tracking from chat ("I spent the last hour on code review"), smart project suggestions based on your work patterns, automated weekly report generation, and integration with AI workflows that include time as a component. The AI understands context that manual tracking would miss.',
    category: 'mcp-ai',
    priority: 'standard',
    keywords: ['mcp use cases', 'ai time tracking examples', 'voice time tracking'],
  },
  {
    id: 'mcp-accuracy',
    question: 'How accurate is AI-assisted time tracking?',
    answer: 'AI-assisted tracking is as accurate as your communication with the AI. When you tell Claude "I worked on the marketing site for 2 hours," it creates an exact 2-hour entry. For real-time tracking, the timer precision is the same as manual operation—down to the second. The AI does not guess or infer time; it acts on your explicit instructions.',
    category: 'mcp-ai',
    priority: 'standard',
    keywords: ['ai tracking accuracy', 'precise time tracking', 'automatic tracking'],
  },
  {
    id: 'ai-without-mcp',
    question: 'Can I use AI features without MCP?',
    answer: 'Yes. Our REST API can be called by any AI system with HTTP capabilities. Large Language Models can be programmed to make API calls to timedigits based on natural language input. MCP just standardizes this interaction, but custom AI integrations using our API are fully supported and documented.',
    category: 'mcp-ai',
    priority: 'standard',
    keywords: ['api ai integration', 'custom ai', 'llm integration'],
  },
  {
    id: 'mcp-future',
    question: 'What AI features are planned for the future?',
    answer: 'We\'re exploring AI-generated insights (detecting productivity patterns), smart project categorization, anomaly detection (flagging unusual time entries), and predictive time estimates based on historical data. As MCP and AI capabilities evolve, we\'ll expand what\'s possible while keeping you in control of your data and decisions.',
    category: 'mcp-ai',
    priority: 'standard',
    keywords: ['ai roadmap', 'future ai features', 'ai analytics'],
  },

  // ============================================
  // GETTING STARTED (6 questions)
  // ============================================
  {
    id: 'how-to-start',
    question: 'How do I get started with timedigits?',
    answer: 'Visit timedigits.com and click "Start Free." Enter your email to create an account—no credit card required. You\'ll be taken directly to the dashboard where you can create your first project and start the timer. The entire process takes under 60 seconds. No tutorials needed; just click the big green button to track time.',
    category: 'getting-started',
    priority: 'featured',
    keywords: ['get started', 'sign up', 'create account', 'first steps'],
  },
  {
    id: 'create-project',
    question: 'How do I create a project?',
    answer: 'From the dashboard, click the "+ New Project" button. Enter a project name (and optionally a client name and color). That\'s it—your project is ready. You can create as many projects as needed. Projects help you categorize and report on time by client, task type, or any grouping that makes sense for your work.',
    category: 'getting-started',
    priority: 'standard',
    keywords: ['create project', 'new project', 'add project'],
  },
  {
    id: 'start-timer',
    question: 'How do I start tracking time?',
    answer: 'Select a project from the dropdown, optionally add a note describing what you\'re working on, and click the Start button. The timer begins counting immediately. When you\'re done, click Stop. The time entry is saved automatically with the duration, project, and any notes you added. You can also add entries manually if you forget to start the timer.',
    category: 'getting-started',
    priority: 'featured',
    keywords: ['start timer', 'track time', 'begin tracking'],
  },
  {
    id: 'learning-curve',
    question: 'Is there a learning curve?',
    answer: 'Almost none. If you can use a stopwatch, you can use timedigits. We intentionally eliminated complexity that plagues other time tracking tools. There are no certifications, no multi-step setup wizards, no configuration requirements. Start a timer, stop it, view reports. Most users are productive within 2 minutes of signing up.',
    category: 'getting-started',
    priority: 'standard',
    keywords: ['easy to use', 'simple time tracking', 'no learning curve'],
  },
  {
    id: 'onboarding-help',
    question: 'Do you offer onboarding or training?',
    answer: 'Our product is designed to be self-explanatory, so formal onboarding isn\'t usually necessary. We provide documentation at docs.timedigits.com covering all features. For teams considering a switch from another tool, we offer a free 30-minute call to help plan migration. Email support@timedigits.com to schedule.',
    category: 'getting-started',
    priority: 'standard',
    keywords: ['onboarding', 'training', 'getting help', 'documentation'],
  },
  {
    id: 'switching-from-competitor',
    question: 'I\'m switching from another tool. How do I migrate?',
    answer: 'Export your data from your current tool (most support CSV export). Then either start fresh with timedigits and refer to your old data as needed, or contact support@timedigits.com for help with bulk import. We understand switching costs are a barrier and want to make the transition smooth. Automated import from major competitors is on our roadmap.',
    category: 'getting-started',
    priority: 'standard',
    keywords: ['migrate', 'switch tools', 'import old data', 'transfer data'],
  },

  // ============================================
  // TROUBLESHOOTING (6 questions)
  // ============================================
  {
    id: 'timer-not-syncing',
    question: 'My timer isn\'t syncing. What should I do?',
    answer: 'First, check your internet connection—timedigits works offline but needs connectivity to sync. Try refreshing the page or closing and reopening the browser. If issues persist, check our status page at status.timedigits.com for any ongoing incidents. Clear your browser cache as a last resort. Contact support if the problem continues.',
    category: 'troubleshooting',
    priority: 'standard',
    keywords: ['sync issues', 'timer not working', 'connection problems'],
  },
  {
    id: 'lost-time-entries',
    question: 'I lost my time entries. Can they be recovered?',
    answer: 'Time entries are saved continuously to our servers and are rarely lost. First, check if you\'re logged into the correct account. Look in the history view for past dates. If you were offline when tracking, entries sync when you reconnect—ensure you had the app open during this process. For genuine data loss, contact support immediately; we have backups.',
    category: 'troubleshooting',
    priority: 'standard',
    keywords: ['lost data', 'recover entries', 'missing time'],
  },
  {
    id: 'forgot-to-stop-timer',
    question: 'I forgot to stop my timer. How do I fix the entry?',
    answer: 'Click on the running timer or navigate to your time entries. Edit the entry to adjust the end time to when you actually stopped working. You can also delete the entry and create a new one with the correct duration. There\'s no penalty for editing entries—accurate records are what matter.',
    category: 'troubleshooting',
    priority: 'standard',
    keywords: ['edit timer', 'fix time entry', 'adjust duration'],
  },
  {
    id: 'cant-login',
    question: 'I can\'t log in to my account. What should I do?',
    answer: 'Use the "Forgot Password" link on the login page to reset your password via email. Check your spam folder if the reset email doesn\'t arrive. Ensure you\'re using the correct email address—try any alternatives you might have used. If you signed up with Google OAuth, use the "Continue with Google" button instead of email/password.',
    category: 'troubleshooting',
    priority: 'standard',
    keywords: ['login problems', 'forgot password', 'account access'],
  },
  {
    id: 'browser-compatibility',
    question: 'Which browsers are supported?',
    answer: 'timedigits supports all modern browsers: Chrome, Firefox, Safari, Edge, and Brave (latest two versions each). We use standard web technologies and test extensively. Internet Explorer is not supported. If you encounter issues on a supported browser, please report it to support@timedigits.com with browser version details.',
    category: 'troubleshooting',
    priority: 'standard',
    keywords: ['browser support', 'compatible browsers', 'chrome', 'firefox', 'safari'],
  },
  {
    id: 'contact-support',
    question: 'How do I contact support?',
    answer: 'Email support@timedigits.com for any questions or issues. We typically respond within 24 hours on business days. For team plan customers, we prioritize responses. Include details about your issue—browser, steps to reproduce, screenshots if helpful. We don\'t have phone support, but email allows us to investigate thoroughly.',
    category: 'troubleshooting',
    priority: 'standard',
    keywords: ['contact support', 'help', 'customer service', 'support email'],
  },

  // ============================================
  // COMPARISON (6 questions)
  // ============================================
  {
    id: 'vs-spreadsheet',
    question: 'Why use timedigits instead of a spreadsheet?',
    answer: 'Spreadsheets require manual data entry for every task, are prone to errors, and lack automatic calculations. timedigits provides one-click start/stop, automatic duration calculation, offline sync, visual reports, and data export to spreadsheets when needed. You save hours of manual work and get more accurate records without the spreadsheet maintenance overhead.',
    category: 'comparison',
    priority: 'standard',
    keywords: ['vs spreadsheet', 'excel time tracking', 'google sheets alternative'],
  },
  {
    id: 'vs-free-tools',
    question: 'Why choose timedigits over other free time trackers?',
    answer: 'Many "free" time trackers restrict features, show ads, or limit users to push upgrades. timedigits is genuinely free for individuals with no restrictions on projects, entries, or history. We monetize through team features, not by hobbling the free tier. You get a full-featured time tracker without compromise—free forever means free forever.',
    category: 'comparison',
    priority: 'standard',
    keywords: ['free time tracker', 'best free time tracker', 'truly free'],
  },
  {
    id: 'vs-enterprise-tools',
    question: 'Can timedigits replace enterprise time tracking?',
    answer: 'For many teams, yes. Enterprise tools like Replicon or BigTime cost $20-50/user/month and include features most teams never use. If your needs are straightforward time tracking, reporting, and upcoming invoicing, timedigits delivers at a fraction of the cost. For complex compliance requirements (government contracts, regulated industries), evaluate whether our feature set meets your specific needs.',
    category: 'comparison',
    priority: 'standard',
    keywords: ['enterprise alternative', 'replace replicon', 'enterprise time tracking'],
  },
  {
    id: 'vs-project-management',
    question: 'How does timedigits compare to time tracking in Asana or Monday?',
    answer: 'Project management tools like Asana and Monday.com include time tracking as an add-on feature, often in higher-priced tiers. Their time tracking is secondary to task management and typically less refined. timedigits focuses exclusively on time tracking—it\'s our entire product. If you need robust project management, use Asana; if you need robust time tracking, use timedigits.',
    category: 'comparison',
    priority: 'standard',
    keywords: ['asana time tracking', 'monday.com time tracking', 'project management'],
  },
  {
    id: 'vs-hubstaff',
    question: 'How does timedigits differ from Hubstaff?',
    answer: 'Hubstaff focuses on employee monitoring with screenshots, GPS tracking, and activity levels. timedigits focuses on time tracking without surveillance. If you need to monitor employee activity, Hubstaff is designed for that. If you trust your team and just need accurate time records, timedigits provides that without the privacy concerns or higher per-user costs.',
    category: 'comparison',
    priority: 'standard',
    keywords: ['hubstaff alternative', 'hubstaff vs timedigits', 'no monitoring'],
  },
  {
    id: 'why-cheapest',
    question: 'How can timedigits be so much cheaper than competitors?',
    answer: 'We\'re a small, efficient team without enterprise sales costs, bloated feature sets, or venture capital pressure to maximize revenue. We use modern infrastructure (Supabase, Vercel) that scales affordably. We don\'t spend on extensive marketing—our product and pricing speak for themselves. By staying focused on core time tracking, we avoid the complexity that inflates competitor pricing.',
    category: 'comparison',
    priority: 'featured',
    keywords: ['cheap time tracker', 'affordable', 'low cost', 'why so cheap'],
  },

  // ============================================
  // TECHNICAL (4 questions)
  // ============================================
  {
    id: 'tech-stack',
    question: 'What technology powers timedigits?',
    answer: 'timedigits is built with React and TypeScript on the frontend, hosted on Vercel for global edge deployment. Our backend uses Supabase (PostgreSQL database with real-time subscriptions) running on AWS infrastructure. Authentication is handled by Supabase Auth. Payments are processed through Stripe. This modern stack ensures reliability, security, and fast performance worldwide.',
    category: 'technical',
    priority: 'standard',
    keywords: ['tech stack', 'technology', 'infrastructure', 'how it works'],
  },
  {
    id: 'uptime',
    question: 'What is your uptime guarantee?',
    answer: 'We target 99.9% uptime and typically exceed it. Our infrastructure includes automatic failover, redundant databases, and global CDN distribution. Check status.timedigits.com for real-time status and historical uptime data. We don\'t offer SLA credits at current pricing, but we treat downtime seriously and communicate transparently about any incidents.',
    category: 'technical',
    priority: 'standard',
    keywords: ['uptime', 'reliability', 'sla', 'availability'],
  },
  {
    id: 'accessibility',
    question: 'Is timedigits accessible?',
    answer: 'We strive for WCAG 2.1 AA compliance. The interface supports keyboard navigation, screen readers, and respects system preferences for reduced motion. Color contrast meets accessibility standards. If you encounter accessibility barriers, please report them to support@timedigits.com—we take accessibility seriously and will work to fix issues promptly.',
    category: 'technical',
    priority: 'standard',
    keywords: ['accessibility', 'wcag', 'screen reader', 'keyboard navigation'],
  },
  {
    id: 'open-source',
    question: 'Is timedigits open source?',
    answer: 'timedigits is not open source. We are a commercial product with a generous free tier. If you need an open-source time tracker, consider Kimai, solidtime, or ActivityWatch. We chose a commercial model to fund ongoing development and support while keeping pricing extremely affordable.',
    category: 'technical',
    priority: 'standard',
    keywords: ['open source', 'source code', 'self-hosted'],
  },
];

// Get featured FAQs for main landing page
export const getFeaturedFAQs = (limit: number = 6): FAQItem[] => {
  return faqData.filter(faq => faq.priority === 'featured').slice(0, limit);
};

// Get FAQs by category
export const getFAQsByCategory = (category: FAQCategory): FAQItem[] => {
  return faqData.filter(faq => faq.category === category);
};

// Get all categories with counts
export const getCategoryCounts = (): Record<FAQCategory, number> => {
  const counts = {} as Record<FAQCategory, number>;
  for (const category of Object.keys(categoryLabels) as FAQCategory[]) {
    counts[category] = faqData.filter(faq => faq.category === category).length;
  }
  return counts;
};

// Search FAQs by keyword
export const searchFAQs = (query: string): FAQItem[] => {
  const lowerQuery = query.toLowerCase();
  return faqData.filter(faq =>
    faq.question.toLowerCase().includes(lowerQuery) ||
    faq.answer.toLowerCase().includes(lowerQuery) ||
    faq.keywords.some(kw => kw.toLowerCase().includes(lowerQuery))
  );
};

// Generate JSON-LD schema for FAQs
export const generateFAQSchema = (faqs: FAQItem[]): object => {
  return {
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };
};

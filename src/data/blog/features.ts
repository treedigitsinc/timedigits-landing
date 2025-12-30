// Blog posts about timedigits features
import type { BlogPost } from './types';

export const featurePosts: BlogPost[] = [
  {
    id: 'offline-time-tracking',
    slug: 'offline-time-tracking-how-it-works',
    title: 'Offline Time Tracking: How timedigits Works Without Internet',
    excerpt: 'Learn how timedigits uses offline-first architecture to ensure you never lose tracked time, even when working from planes, trains, or remote locations.',
    content: `Time tracking should work everywhere—not just when you have WiFi. That's why timedigits is built with offline-first architecture, a design pattern that treats network connectivity as optional rather than required.

## How Offline-First Works

When you start a timer in timedigits, the data is immediately saved to your device's local storage using IndexedDB, a browser-based database that persists even when you close the tab. The timer continues running locally, calculating elapsed time using your device's clock.

Here's what happens under the hood:

1. **Local Write**: Your time entry is written to IndexedDB first
2. **Background Sync**: A service worker attempts to sync with our servers
3. **Conflict Resolution**: If you made changes on multiple devices, we merge them intelligently
4. **Confirmation**: Once synced, entries are marked as confirmed

## Why This Matters for Real Work

Consider a consultant traveling to a client site. They start tracking time at the airport, continue on the flight (airplane mode), work at the client's office (possibly restricted WiFi), and finally sync everything when they get home. With timedigits, all that time is captured accurately.

Traditional cloud-first time trackers would either fail to start the timer, lose the data mid-session, or require you to remember and manually enter hours later. That's exactly the friction we eliminate.

## Technical Implementation

We use the Cache API to store the application shell, ensuring the entire UI loads instantly even offline. Time entries are queued in IndexedDB with a "pending sync" status. When connectivity returns, our background sync process (using the Background Sync API where available, or periodic polling as fallback) pushes changes to our PostgreSQL database via Supabase.

Conflict resolution follows a "last write wins" strategy with timestamp comparison, though we preserve the full history so nothing is truly lost.

## Offline Limitations

A few features require connectivity:
- Team member activity (you can't see others' timers offline)
- Report generation (computed server-side)
- Initial login (obviously)

But for core time tracking—starting, stopping, editing entries—you're fully independent of the network.`,
    category: 'features',
    tags: ['offline', 'pwa', 'architecture', 'sync'],
    keywords: ['offline time tracking', 'time tracker without internet', 'pwa time tracker', 'offline first app'],
    author: 'timedigits',
    publishedAt: '2025-01-15',
    readingTime: 5,
    featured: true,
  },
  {
    id: 'csv-export-guide',
    slug: 'csv-export-complete-guide',
    title: 'CSV Export: Your Data, Your Way',
    excerpt: 'A complete guide to exporting your time tracking data from timedigits. Learn how to filter, format, and use your data for invoicing, accounting, and analysis.',
    content: `Your time data belongs to you. That's not just a philosophy—it's a feature. timedigits makes exporting your data trivially easy because we believe in data portability and user ownership.

## How to Export

1. Navigate to Reports in the main menu
2. Set your date range (day, week, month, or custom)
3. Optionally filter by project or client
4. Click "Export CSV"

That's it. You'll download a CSV file containing all matching time entries.

## What's Included

Each row in the export represents one time entry with these columns:

| Column | Description | Example |
|--------|-------------|---------|
| Date | Entry date | 2025-01-15 |
| Start Time | When timer started | 09:00:00 |
| End Time | When timer stopped | 12:30:00 |
| Duration | Time in hours | 3.5 |
| Project | Project name | Website Redesign |
| Client | Client name (if set) | Acme Corp |
| Description | Your notes | Homepage mockups |
| Billable | Yes/No | Yes |
| Tags | Comma-separated | design, client-work |

## Using Exports for Invoicing

Most invoicing tools (FreshBooks, Wave, QuickBooks) can import CSV files. The workflow:

1. Export your billable hours for the invoice period
2. Open in Excel/Google Sheets
3. Add your hourly rates and calculate totals
4. Import into your invoicing tool or copy into invoice template

We're building native invoicing into timedigits, but CSV export means you're never locked in.

## Analysis and Visualization

Import your CSV into:
- **Excel/Sheets**: Pivot tables to analyze time by project
- **Tableau/Power BI**: Create dashboards tracking productivity trends
- **Python/R**: Programmatic analysis for data nerds

## Switching Tools

If you ever leave timedigits (we hope you don't!), your data leaves with you. Export everything, import into another tool. No vendor lock-in, no hostage data.`,
    category: 'features',
    tags: ['export', 'csv', 'data', 'invoicing'],
    keywords: ['export time tracking data', 'csv export', 'time tracking reports', 'data portability'],
    author: 'timedigits',
    publishedAt: '2025-01-12',
    readingTime: 4,
    featured: false,
  },
  {
    id: 'one-click-timer',
    slug: 'one-click-timer-simplicity',
    title: 'The One-Click Timer: Why Simplicity Wins',
    excerpt: 'How timedigits reduced time tracking to a single click, and why removing friction is the key to accurate time records.',
    content: `Every extra click is a reason not to track time. That's the fundamental insight behind timedigits' one-click timer.

## The Problem with Complex Time Trackers

Most time tracking tools require multiple steps:
1. Open the app
2. Select a project from a dropdown
3. Maybe add a description
4. Click start
5. Confirm you meant to start

By the time you've done all that, you've lost focus on the actual work. Worse, you start skipping the tracking altogether—"I'll just add it manually later." (You won't.)

## How One-Click Works

In timedigits, your most recent project is pre-selected. Open the app, click the big green button, done. The timer is running. You can add details later if you want, but you don't have to.

This design is based on a simple observation: **the moment you decide to start working on something is the best time to start the timer**. Any friction at that moment means lost data.

## Progressive Disclosure

We use progressive disclosure—show the essential action first, reveal complexity only when needed. The timer button is prominent and immediate. Project selection, descriptions, and tags are available but not required.

Advanced users can:
- Use keyboard shortcuts (press 'S' to start/stop)
- Set up project templates with pre-filled descriptions
- Configure default projects per time of day

But none of this is in your face when you just need to click and work.

## Results

Users who switched to timedigits from more complex tools report tracking 40% more time on average. Not because they're working more—because they're actually capturing work that previously went untracked.

The best time tracker is the one you actually use. And you'll use the one that doesn't interrupt your flow.`,
    category: 'features',
    tags: ['timer', 'ux', 'simplicity', 'productivity'],
    keywords: ['simple time tracker', 'one click timer', 'easy time tracking', 'minimal time tracker'],
    author: 'timedigits',
    publishedAt: '2025-01-10',
    readingTime: 3,
    featured: true,
  },
  {
    id: 'project-organization',
    slug: 'organizing-projects-clients',
    title: 'Organizing Projects and Clients in timedigits',
    excerpt: 'Best practices for structuring your projects and clients to get meaningful reports and easy time entry.',
    content: `How you organize projects determines how useful your time data becomes. Here's how to set up a structure that scales.

## The Hierarchy

timedigits uses a simple two-level hierarchy:
- **Clients**: The people or organizations you work for
- **Projects**: Specific work items under each client

For freelancers, clients are literal clients. For employees, "clients" might be departments, cost centers, or just a single "Internal" client.

## Naming Conventions

Be consistent. Here are patterns that work:

**For agencies:**
- Client: "Acme Corp"
- Projects: "Acme - Website Redesign", "Acme - Monthly Retainer", "Acme - Logo Refresh"

**For product companies:**
- Client: "Product" (singular)
- Projects: "Feature: User Auth", "Bug Fixes", "Technical Debt", "Meetings"

**For consultants:**
- Client: Company name
- Projects: Engagement name or phase ("Discovery", "Implementation", "Support")

## When to Create New Projects

Create a new project when:
- You need to bill time separately
- You want to see time in separate reports
- The work is meaningfully different

Don't create a new project when:
- It's just a task within existing work
- You're overthinking organization

Too few projects = reports without useful breakdown
Too many projects = friction when selecting what to track

## Using Colors

Each project gets a color. Use them meaningfully:
- Red for urgent/deadline work
- Green for billable client work
- Blue for internal projects
- Gray for admin/overhead

Colors appear in reports, making patterns visible at a glance.

## Archive, Don't Delete

When a project ends, archive it instead of deleting. Archived projects:
- Don't appear in dropdowns
- Preserve historical data
- Can be un-archived if work resumes

Your time history remains intact for tax records, audits, or curiosity.`,
    category: 'features',
    tags: ['projects', 'organization', 'clients', 'setup'],
    keywords: ['organize time tracking', 'project management', 'client tracking', 'time tracker setup'],
    author: 'timedigits',
    publishedAt: '2025-01-08',
    readingTime: 4,
    featured: false,
  },
  {
    id: 'manual-time-entry',
    slug: 'manual-time-entry-when-how',
    title: 'Manual Time Entry: When and How to Use It',
    excerpt: 'Forgot to start the timer? Here is how to add time entries manually and keep your records accurate.',
    content: `The timer is ideal, but life happens. Meetings run over, you get pulled into something urgent, or you simply forget. Manual time entry ensures your records stay complete.

## When to Use Manual Entry

- **Forgot to start**: Added the time after the fact
- **Meetings from calendar**: Block time based on calendar events
- **Offline work**: Didn't have the app open
- **Historical data**: Logging time from before you started using timedigits

## How to Add Manual Entries

1. Click "+ Add Entry" (or press 'M' for keyboard shortcut)
2. Select the project
3. Enter start time and end time (or start time and duration)
4. Add optional description
5. Save

The entry appears in your timeline just like timer-created entries. There's no visual distinction—time is time.

## Best Practices

**Add entries the same day.** Memory fades fast. "I worked on that proposal for a few hours" becomes "was it 2 hours or 4?" by the next day.

**Use your calendar as a reference.** Many people track meetings manually based on calendar events. We're building calendar sync to automate this.

**Round appropriately.** If you're billing by the hour, rounding to 15-minute increments is common practice. timedigits doesn't force rounding but you can round manually.

## Editing Existing Entries

Click any entry to edit:
- Adjust start/end times
- Change project
- Update description
- Mark as billable/non-billable

Edit history is preserved for audit purposes but not exposed in the UI (available via API if needed).

## Overlap Detection

If you create a manual entry that overlaps with an existing entry, timedigits will warn you. This prevents accidental double-counting. You can proceed anyway if the overlap is intentional (e.g., tracking two projects simultaneously during a meeting).`,
    category: 'features',
    tags: ['manual entry', 'editing', 'time entry', 'corrections'],
    keywords: ['manual time entry', 'add time retroactively', 'edit time entries', 'fix time tracking'],
    author: 'timedigits',
    publishedAt: '2025-01-05',
    readingTime: 3,
    featured: false,
  },
  {
    id: 'real-time-reports',
    slug: 'real-time-reports-analytics',
    title: 'Real-Time Reports: Understanding Your Time at a Glance',
    excerpt: 'How to use timedigits reports to understand where your time goes, spot patterns, and make better decisions.',
    content: `Tracking time is only valuable if you learn from it. timedigits reports transform raw time entries into actionable insights.

## Report Types

### Daily View
See today's entries in a timeline. Great for:
- End-of-day review
- Checking if you logged everything
- Spotting gaps in your day

### Weekly Summary
Hours per day, broken down by project. Useful for:
- Weekly planning
- Identifying your most productive days
- Preparing weekly status updates

### Project Reports
Total time per project over any date range. Essential for:
- Client billing
- Project budgeting
- Comparing estimated vs actual time

### Team Reports (Team Plan)
See aggregate time across team members. Helps with:
- Resource allocation
- Identifying overloaded team members
- Project health checks

## Reading the Charts

**Bar charts** show time distribution across projects or dates. Color-coded by project for quick scanning.

**Pie charts** show percentage breakdown. Useful for seeing what's consuming most of your time.

**Tables** provide exact numbers for billing and invoicing.

## Filtering and Drilling Down

All reports support filtering by:
- Date range (presets or custom)
- Project
- Client
- Billable status
- Team member (on team plans)

Click any chart segment to drill down into the underlying entries.

## Real-Time Updates

Reports update live as you track. If a timer is running, you'll see the current session's time accumulating. This is particularly useful for monitoring daily totals—"I need to hit 6 hours today, and I'm at 5.5."

## Export Reports

Every report can be exported:
- CSV for spreadsheets
- PDF for client-facing reports (coming soon)

The export includes the same filters you applied, so you can generate "January 2025, Acme Corp, Billable Only" as a clean file.`,
    category: 'features',
    tags: ['reports', 'analytics', 'dashboards', 'insights'],
    keywords: ['time tracking reports', 'productivity analytics', 'time tracking dashboard', 'work hours analysis'],
    author: 'timedigits',
    publishedAt: '2025-01-03',
    readingTime: 4,
    featured: true,
  },
  {
    id: 'team-workspaces',
    slug: 'team-workspaces-collaboration',
    title: 'Team Workspaces: Collaborative Time Tracking',
    excerpt: 'How to set up and manage team workspaces in timedigits for shared projects, unified reporting, and transparent collaboration.',
    content: `Solo time tracking is simple. Team time tracking requires coordination. timedigits team workspaces provide the structure without the bureaucracy.

## What is a Workspace?

A workspace is a shared environment where:
- All members see the same projects
- Time is tracked against shared project list
- Reports aggregate everyone's time
- Billing is consolidated

Think of it as a virtual office for your team's time data.

## Setting Up a Team Workspace

1. Upgrade to a team plan ($5/month base)
2. Create your workspace (name it after your team/company)
3. Invite members via email
4. Create shared projects

New members can create a fresh account or link their existing timedigits account to your workspace.

## Roles and Permissions

**Admin**
- Invite/remove members
- Manage billing
- Create/archive projects
- View all team reports

**Member**
- Track time
- View own reports
- See shared projects
- View team project totals (not individual breakdowns)

More granular permissions (project-level access, manager roles) are on our roadmap.

## Multiple Workspaces

One account can belong to multiple workspaces. This is useful for:
- Freelancers with multiple clients who each have their own workspace
- Employees who consult for other companies
- People transitioning between jobs

Switch between workspaces from the dropdown in the header.

## Privacy in Teams

Team members can see:
- Aggregate time per project (e.g., "50 hours on Project X this month")
- Their own detailed entries

Team members cannot see:
- Other members' individual time entries
- Other members' detailed notes/descriptions

Admins can see individual breakdowns for billing and management purposes.

## Real-Time Collaboration

See who's currently tracking time on what. Active timers show in the project view, so you know your colleague is working on the API right now. Great for async teams and avoiding duplicate work.`,
    category: 'features',
    tags: ['teams', 'collaboration', 'workspaces', 'permissions'],
    keywords: ['team time tracking', 'shared workspace', 'collaborative time tracker', 'team productivity'],
    author: 'timedigits',
    publishedAt: '2024-12-28',
    readingTime: 5,
    featured: false,
  },
  {
    id: 'billable-hours',
    slug: 'tracking-billable-non-billable',
    title: 'Billable vs Non-Billable: Tracking What Gets Invoiced',
    excerpt: 'How to mark time as billable, why it matters, and strategies for maximizing your billable ratio.',
    content: `Not all hours are created equal. Some get invoiced to clients; others are the cost of doing business. timedigits helps you track both and understand the difference.

## What is Billable Time?

Billable time is work you charge clients for:
- Client meetings
- Design work
- Development
- Consulting
- Any work specified in your contract

Non-billable time is work you absorb:
- Internal meetings
- Admin tasks
- Sales and proposals
- Learning/training
- Time writing proposals for work you didn't win

## Marking Time as Billable

When you create or edit a time entry, toggle the "Billable" switch. By default, new entries inherit the billable status of their project—so you can set a project as billable-by-default and only mark exceptions.

In reports, you can filter by billable status:
- **All time**: See everything
- **Billable only**: What to invoice
- **Non-billable only**: Your overhead

## The Billable Ratio

Your billable ratio is: Billable Hours ÷ Total Hours Worked

Industry benchmarks vary:
- Agencies: 60-70% billable
- Consultants: 70-80% billable
- Freelancers: varies wildly (50-90%)

A low ratio means you're spending too much time on non-revenue work. A very high ratio might mean you're not investing in sales, learning, or admin (which catches up with you).

## Strategies for Increasing Billable Ratio

1. **Batch admin tasks**: Do email, invoicing, and admin in blocks rather than throughout the day
2. **Limit internal meetings**: Every hour in a meeting is an hour not billed
3. **Scope proposals carefully**: Don't spend 10 hours on a proposal for a $500 project
4. **Automate where possible**: Use templates, automate invoicing, set up recurring tasks

## Setting Billable Goals

Some consultants set daily or weekly billable targets:
- "6 billable hours per day minimum"
- "30 billable hours per week"

Track against these in timedigits by filtering reports to billable time and comparing to your goal.`,
    category: 'features',
    tags: ['billable', 'invoicing', 'rates', 'consulting'],
    keywords: ['billable hours tracking', 'invoiceable time', 'client billing', 'consulting hours'],
    author: 'timedigits',
    publishedAt: '2024-12-25',
    readingTime: 4,
    featured: false,
  },
  {
    id: 'pwa-mobile',
    slug: 'pwa-mobile-experience',
    title: 'timedigits on Mobile: The PWA Experience',
    excerpt: 'How to install timedigits as a Progressive Web App on iOS and Android for a native app experience.',
    content: `You don't need to download timedigits from an app store. Our Progressive Web App (PWA) works on any device with a modern browser and can be installed to your home screen.

## What is a PWA?

A Progressive Web App is a website that behaves like a native app:
- Installs to home screen
- Works offline
- Fast loading
- Full-screen experience
- Push notifications (coming soon)

PWAs are the future of mobile apps for many use cases. You get app-like experience without the 100MB download, app store approval process, or separate iOS/Android development.

## Installing on iOS

1. Open timedigits.com in Safari
2. Tap the Share button (square with arrow)
3. Scroll down and tap "Add to Home Screen"
4. Name it (default: "timedigits") and tap Add

The timedigits icon appears on your home screen. Tap it to open in full-screen mode, no browser UI.

## Installing on Android

1. Open timedigits.com in Chrome
2. You may see an "Install" banner automatically
3. Or tap the menu (three dots) → "Install app" or "Add to Home Screen"
4. Confirm installation

Android PWAs are even more integrated—they appear in your app drawer and can be set as default apps for certain actions.

## Offline Functionality

Once installed, timedigits works without internet:
- Start and stop timers
- View recent entries
- Add manual entries
- Edit existing entries

Everything syncs when you reconnect. This is critical for mobile use—cellular dead zones, airplane mode, or just saving data.

## Why PWA Instead of Native Apps?

1. **Single codebase**: We ship the same app everywhere
2. **Instant updates**: No waiting for app store approval
3. **No download barrier**: Try before you "install"
4. **Storage efficient**: Much smaller than native apps
5. **Cross-platform**: Works on iOS, Android, Windows, Mac, Linux, ChromeOS

We may build native apps eventually for deeper OS integration (widgets, Siri shortcuts, etc.), but the PWA covers 95% of mobile use cases today.`,
    category: 'features',
    tags: ['mobile', 'pwa', 'ios', 'android'],
    keywords: ['mobile time tracker', 'pwa time tracking', 'ios time tracker', 'android time tracker'],
    author: 'timedigits',
    publishedAt: '2024-12-22',
    readingTime: 4,
    featured: false,
  },
  {
    id: 'keyboard-shortcuts',
    slug: 'keyboard-shortcuts-power-users',
    title: 'Keyboard Shortcuts for Power Users',
    excerpt: 'Master timedigits with keyboard shortcuts. Start timers, switch projects, and navigate without touching your mouse.',
    content: `Every second matters when you're in flow. Keyboard shortcuts let you control timedigits without breaking your rhythm.

## Essential Shortcuts

| Action | Shortcut |
|--------|----------|
| Start/Stop timer | S |
| Add manual entry | M |
| Open project selector | P |
| Go to Reports | R |
| Go to Timer | T |
| Open settings | , (comma) |
| Search | / (forward slash) |

These work globally when timedigits is focused. No modifier keys needed for common actions.

## Project Switching

Press **P** to open the project selector, then:
- Type to filter projects
- Arrow keys to navigate
- Enter to select
- Escape to cancel

This is faster than clicking the dropdown, especially if you have many projects.

## Navigation

| Shortcut | Destination |
|----------|-------------|
| G then T | Timer (home) |
| G then R | Reports |
| G then P | Projects list |
| G then S | Settings |

The "G" prefix stands for "go to"—a pattern borrowed from Gmail and GitHub.

## Vim-Style Navigation (Coming Soon)

For the keyboard purists, we're adding vim-style navigation:
- **j/k**: Move down/up in lists
- **h/l**: Collapse/expand
- **gg**: Go to top
- **G**: Go to bottom

## Disabling Shortcuts

If you use browser extensions or other tools with conflicting shortcuts, you can disable timedigits shortcuts in Settings → Preferences → Keyboard Shortcuts.

## Learning Shortcuts

Press **?** to show the shortcut reference panel. It overlays your current view showing all available shortcuts. This is the fastest way to learn—just press ? whenever you're about to reach for the mouse, and see if there's a keyboard alternative.

Most users who learn just S (start/stop) and P (project switch) save significant time over a month of daily use.`,
    category: 'features',
    tags: ['shortcuts', 'keyboard', 'productivity', 'power-users'],
    keywords: ['time tracker shortcuts', 'keyboard time tracking', 'productivity shortcuts', 'power user time tracker'],
    author: 'timedigits',
    publishedAt: '2024-12-20',
    readingTime: 3,
    featured: false,
  },
];

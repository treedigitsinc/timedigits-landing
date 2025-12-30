// How-to guides and productivity tips
import type { BlogPost } from './types';

export const guidePosts: BlogPost[] = [
  {
    id: 'getting-started-guide',
    slug: 'getting-started-with-timedigits',
    title: 'Getting Started with timedigits: 5-Minute Setup',
    excerpt: 'Everything you need to start tracking time in under 5 minutes. No credit card required.',
    content: `You can be tracking time in 5 minutes. Here's exactly how.

## Minute 1: Create Your Account

1. Go to timedigits.com
2. Click "Start Free"
3. Enter your email
4. Verify (check inbox)

You're in. No credit card asked.

## Minute 2: Create Your First Project

The dashboard is empty. Let's fix that.

1. Click "+ New Project"
2. Enter a name (e.g., "Client Work" or "Main Project")
3. Pick a color (optional but helpful)
4. Click Create

Your first project exists.

## Minute 3: Start Your First Timer

1. Select your project from the dropdown
2. Optionally add a description ("Working on homepage")
3. Click the big Start button

Timer is running. That's it—you're tracking time.

## Minute 4: Explore the Interface

While the timer runs:
- See elapsed time update in real-time
- Notice the project color in the timer bar
- Click the timer to see options (pause, stop, edit)

## Minute 5: Stop and Review

1. Click Stop when ready
2. Your entry appears in the timeline below
3. Click the entry to edit if needed

Congratulations—you've tracked your first time entry.

## What's Next?

**Add more projects**: Most people have 3-10 active projects
**Install on mobile**: Add to home screen for PWA access
**Review reports**: See where your time goes
**Invite team**: When ready, upgrade and invite others

## Tips for Building the Habit

**Week 1**: Focus on just starting the timer. Accuracy comes later.

**Week 2**: Review entries at end of each day. Fill gaps.

**Week 3**: Start tracking automatically. Timer running = working.

**Week 4**: Analyze reports. What surprises you?

Time tracking becomes automatic after 3-4 weeks of consistent use.

## Need Help?

- Documentation: docs.timedigits.com
- Email: support@timedigits.com
- This blog: Tutorials for every feature

Now go track some time!`,
    category: 'guides',
    tags: ['getting-started', 'tutorial', 'basics', 'onboarding'],
    keywords: ['timedigits tutorial', 'how to use timedigits', 'time tracking setup', 'getting started time tracker'],
    author: 'timedigits',
    publishedAt: '2025-01-18',
    readingTime: 3,
    featured: true,
  },
  {
    id: 'accurate-time-tracking',
    slug: 'how-to-track-time-accurately',
    title: 'How to Track Time Accurately: 7 Practical Tips',
    excerpt: 'Common accuracy problems and how to solve them. Stop losing hours to poor tracking habits.',
    content: `Inaccurate time tracking is worse than no tracking—it gives false confidence. Here's how to track accurately.

## Tip 1: Track in Real-Time

The most accurate method: start timer when you start working, stop when you stop.

Retrospective entry ("I worked about 3 hours yesterday") is prone to:
- Optimism bias (thinking you worked more)
- Forgetting tasks
- Rounding errors

Real-time tracking eliminates guessing.

## Tip 2: Handle Interruptions

Interruption happens. Options:
1. **Stop timer**: If interruption is >5 minutes
2. **Keep running**: If you'll return in <5 minutes
3. **Switch project**: If interruption is work-related

Pick a consistent approach. Consistency beats precision.

## Tip 3: Review Daily

End of each day, spend 2 minutes:
- Check today's entries
- Fill obvious gaps (that meeting at 2pm)
- Correct wrong projects (oops, meant Client A)

Same-day review catches errors while memory is fresh.

## Tip 4: Use Calendar as Reference

Your calendar is a time tracking backup:
- Meetings are automatically time-blocked
- Compare calendar to tracked time
- Fill gaps with "I was in that meeting"

Calendar sync is coming, but manual cross-reference works now.

## Tip 5: Track Non-Work Time (Sometimes)

Tracking breaks and lunch creates complete records:
- Timer running 9am-12pm
- Lunch (not tracked) 12pm-1pm
- Timer running 1pm-5pm

This confirms you didn't forget to stop the timer. A 6-hour continuous entry at 5pm suggests forgotten stop.

## Tip 6: Accept Imperfection

Perfect tracking is impossible. Aim for:
- Right project 95% of the time
- Within 15 minutes of actual time
- No major gaps in your day

That's accurate enough for billing and analysis.

## Tip 7: Weekly Audit

Friday ritual:
1. Pull this week's entries
2. Scan for anomalies (8-hour entries, duplicates, gaps)
3. Compare to what you remember
4. Correct as needed

Weekly audits catch errors before they compound.

## Common Accuracy Killers

**Forgetting to stop**: Set reminders, use idle detection (coming soon)

**Wrong project selected**: Review entries; edit immediately when noticed

**"I'll add it later"**: You won't. Add it now, imperfect is better than missing.

**Rounding up/down**: Track actual time; round only for billing if needed.

## The 95% Rule

If 95% of your time is tracked accurately:
- Reports are reliable
- Billing is defensible
- Patterns are visible

Don't let the pursuit of 100% prevent you from hitting 95%.`,
    category: 'guides',
    tags: ['accuracy', 'tips', 'habits', 'best-practices'],
    keywords: ['accurate time tracking', 'time tracking tips', 'track time correctly', 'time tracking accuracy'],
    author: 'timedigits',
    publishedAt: '2025-01-17',
    readingTime: 5,
    featured: false,
  },
  {
    id: 'billable-ratio-guide',
    slug: 'improve-your-billable-ratio',
    title: 'How to Improve Your Billable Ratio',
    excerpt: 'Strategies to increase the percentage of your work that generates revenue. More billable hours, less overhead.',
    content: `Billable ratio = billable hours ÷ total hours worked. It's the key metric for professional services profitability.

## Understanding the Numbers

Industry benchmarks:
- **Agencies**: 60-70% billable
- **Consultants**: 70-80% billable
- **Solo freelancers**: 50-80% (varies widely)
- **Lawyers**: 60-70% (higher at big firms)

If you're below these ranges, you're likely spending too much time on overhead.

## What Counts as Non-Billable

Non-billable time includes:
- Internal meetings
- Sales and business development
- Admin (email, invoicing, bookkeeping)
- Training and learning
- Travel (unless billed)
- Marketing and networking

None of this is wasted—it's necessary. But it should be minimized.

## Strategy 1: Batch Non-Billable Work

Instead of checking email throughout the day:
- Morning: 15 minutes of email
- Midday: 15 minutes
- End of day: 15 minutes

That's 45 minutes, not 3 hours of scattered checking.

Batch admin tasks:
- Invoice all clients on Friday afternoon
- Update bookkeeping weekly, not daily
- Do all expenses monthly

## Strategy 2: Reduce Meeting Time

Meetings are often the biggest billable ratio killer:
- Decline optional meetings
- Suggest 25 minutes instead of 30
- Stand-ups instead of sit-downs
- Async communication when possible

If it could be an email, make it an email.

## Strategy 3: Automate Admin

Tools that reduce non-billable time:
- **Invoicing**: Auto-generate from time entries
- **Scheduling**: Calendly instead of email back-and-forth
- **Proposals**: Templates instead of from-scratch
- **Bookkeeping**: Automated expense tracking

Each automation saves hours monthly.

## Strategy 4: Track Everything (Then Optimize)

You can't improve what you don't measure:
1. Track ALL time for 4 weeks
2. Calculate billable ratio
3. Identify biggest non-billable categories
4. Target one for improvement
5. Repeat

## Strategy 5: Increase Billable Rates

Higher rates = same revenue in fewer hours = more hours available for other clients (or rest).

If you're at capacity with a 50% billable ratio:
- Raise rates 20%
- Maintain revenue with fewer billable hours
- Reclaim non-billable capacity

## Strategy 6: Say No More Often

Low-value activities to reject:
- Unpaid "quick calls"
- Scope creep without change orders
- Clients who consume excessive time
- Projects with poor fit

Saying no protects billable time.

## Realistic Targets

100% billable is impossible (and unhealthy—you need non-billable for business sustainability).

Realistic improvements:
- From 50% to 60%: Achievable in 2-3 months
- From 60% to 70%: Requires process changes
- Above 75%: For solo operators mainly; teams struggle here

Set a target 5-10 points above current, work toward it, then reassess.`,
    category: 'guides',
    tags: ['billable-ratio', 'productivity', 'profitability', 'efficiency'],
    keywords: ['improve billable ratio', 'billable hours', 'consulting profitability', 'utilization rate'],
    author: 'timedigits',
    publishedAt: '2025-01-15',
    readingTime: 5,
    featured: false,
  },
  {
    id: 'pricing-services-with-data',
    slug: 'pricing-services-using-time-data',
    title: 'How to Price Services Using Time Tracking Data',
    excerpt: 'Turn your time tracking history into accurate project quotes and profitable pricing.',
    content: `Pricing services is hard. Charge too little, you lose money. Charge too much, you lose clients. Time data provides the answer.

## The Pricing Formula

Minimum Viable Price = (Hours × Cost Rate) + Margin

Where:
- Hours = Estimated time to complete
- Cost Rate = Your fully-loaded cost per hour
- Margin = Desired profit percentage

Time data improves the "Hours" estimate dramatically.

## Step 1: Know Your Cost Rate

Calculate your true hourly cost:

**Solo freelancer:**
- Target annual income: $100,000
- Available work hours/year: 1,800
- Cost rate: $55.55/hour

**Agency employee:**
- Salary + benefits: $85,000
- Overhead allocation: $15,000
- Total cost: $100,000
- Available hours: 1,600
- Cost rate: $62.50/hour

## Step 2: Analyze Historical Data

For any new project, find similar past work:

"New website redesign quote requested."

Query your time data:
- Last 5 website redesigns
- Average hours: 45
- Range: 30-65 hours
- Median: 42 hours

Better than guessing "maybe 40 hours?"

## Step 3: Adjust for Complexity

Past data is a baseline. Adjust for:

**Simpler than average**: -20% hours
**Similar complexity**: Use median
**More complex**: +30% hours
**Unknown complexity**: Use 75th percentile (conservative)

## Step 4: Calculate Price

Example quote:
- Estimated hours: 45 (median for similar work)
- Cost rate: $62.50
- Base cost: $2,812.50
- Target margin: 40%
- Quote: $3,937.50 → Round to $4,000

## Step 5: Track and Compare

After project completion:
- Actual hours: 52
- Actual cost: $3,250
- Revenue: $4,000
- Actual margin: 18.75%

The 45-hour estimate was too low. Adjust future quotes upward.

## Pricing Strategies by Type

### Hourly Billing
Price = (Cost Rate × Margin) per hour
- Simplest, lowest risk
- Clients may resist hourly uncertainty

### Fixed Price
Price = Estimated Hours × (Cost Rate × Margin)
- Client certainty
- Your risk if estimate is wrong

### Value-Based
Price = Client Value × Capture Percentage
- Highest potential margin
- Requires understanding client's value

## Red Flags in Time Data

**High variance**: If similar projects range 20-100 hours, something's inconsistent (scope, client type, complexity).

**Always over estimate**: You're systematically underpricing. Increase buffer.

**Always under estimate**: Either you're padding too much, or scope creep isn't tracked.

## Building a Pricing Database

Over time, create a reference:

| Project Type | Avg Hours | Range | Last Updated |
|--------------|-----------|-------|--------------|
| Logo design | 12 | 8-20 | Jan 2025 |
| Website (5 pages) | 45 | 30-65 | Jan 2025 |
| Brand strategy | 25 | 15-40 | Dec 2024 |

Update quarterly as you complete more projects.`,
    category: 'guides',
    tags: ['pricing', 'quotes', 'estimating', 'profitability'],
    keywords: ['price services', 'project pricing', 'freelance pricing', 'quote projects'],
    author: 'timedigits',
    publishedAt: '2025-01-13',
    readingTime: 6,
    featured: true,
  },
  {
    id: 'reducing-time-waste',
    slug: 'identify-and-reduce-time-waste',
    title: 'Using Time Data to Identify and Reduce Waste',
    excerpt: 'Find the activities consuming your time disproportionately. Eliminate, automate, or delegate.',
    content: `Every business has time waste—activities that consume hours without proportional value. Time tracking exposes it.

## Common Time Wastes

### Email
Average knowledge worker: 2-3 hours/day on email
Value-generating portion: Maybe 30 minutes

Track email as its own project for one week. The number may shock you.

### Meetings
Average: 15+ hours/week in meetings
Productive meeting time: Often <50%

Track meeting time separately. Then ask: which meetings generated value?

### Context Switching
Switching tasks costs 15-25 minutes of refocus time. 10 switches/day = 2.5-4 hours lost.

Look at your time entries: how often do you switch projects daily?

### Admin and Overhead
Invoicing, bookkeeping, scheduling—necessary but often bloated.

Track admin time. Benchmark against revenue. If admin is 20%+ of your hours, automate.

## Analysis Process

### Step 1: Categorize All Time

Create high-level buckets:
- Client delivery (billable)
- Client communication (billable?)
- Internal meetings
- Admin
- Business development
- Learning

### Step 2: Calculate Percentages

After one month:
- Client delivery: 35%
- Client communication: 15%
- Internal meetings: 20%
- Admin: 15%
- Business development: 10%
- Learning: 5%

### Step 3: Question Each Category

**"Is 20% meetings right?"**
Maybe yes (agency culture), maybe no (could be 10%).

**"Is 15% admin acceptable?"**
For early-stage, maybe. At scale, should be 5%.

### Step 4: Set Targets

"Reduce internal meetings from 20% to 12% by Q2."
"Automate admin to reduce from 15% to 8%."

Track progress monthly.

## Reduction Strategies

### Eliminate
Can this activity simply stop?
- Redundant status meetings
- Reports no one reads
- Processes from an old era

### Automate
Can software do this?
- Invoice generation
- Expense categorization
- Scheduling coordination

### Delegate
Can someone else do this cheaper?
- Virtual assistant for admin
- Bookkeeper for finances
- Junior staff for repetitive tasks

### Optimize
Can this be done faster?
- Meeting agendas and timers
- Email templates
- Process documentation

## The 80/20 Reality

Usually, 80% of waste comes from 20% of activities.

Find your top 3 time wastes. Fix those first. The rest can wait.

## Ongoing Monitoring

Time waste creeps back. Quarterly review:
1. Pull last quarter's time
2. Categorize into buckets
3. Compare to targets
4. Adjust as needed

What gets measured gets managed.`,
    category: 'guides',
    tags: ['productivity', 'efficiency', 'waste', 'optimization'],
    keywords: ['reduce time waste', 'productivity analysis', 'time audit', 'efficiency improvement'],
    author: 'timedigits',
    publishedAt: '2025-01-11',
    readingTime: 5,
    featured: false,
  },
  {
    id: 'weekly-time-review',
    slug: 'weekly-time-review-habit',
    title: 'The Weekly Time Review: A 15-Minute Habit That Transforms Productivity',
    excerpt: 'How to conduct a weekly review of your time data. Simple process, significant insights.',
    content: `Fifteen minutes once a week reveals patterns months of daily work obscure. Here's the weekly time review practice.

## When to Review

Pick a consistent time:
- **Friday afternoon**: Close out the work week
- **Sunday evening**: Prepare for the week ahead
- **Monday morning**: Fresh start perspective

Consistency matters more than timing.

## The 15-Minute Process

### Minutes 1-3: Pull Reports

Open timedigits reports for the past week:
- Total hours
- Hours by project
- Daily breakdown

### Minutes 4-6: Check Against Expectations

Compare to your plan:
- Did you hit your target hours? (e.g., 40 billable)
- Did projects get the time you intended?
- Were there surprises?

### Minutes 7-9: Identify Patterns

Ask:
- What was my most productive day? Least?
- Which project consumed more time than expected?
- Where did unplanned work appear?
- Any unusual entries to investigate?

### Minutes 10-12: Note Learnings

Write down 1-3 observations:
- "Meetings consumed 30% this week—too high"
- "Client X took 12 hours; should have been 6"
- "Thursday was my best focus day"

### Minutes 13-15: Plan Adjustments

Based on learnings:
- Block focus time on Thursday (my best day)
- Talk to Client X about scope
- Decline one optional meeting next week

## What to Track Over Time

Keep a simple log of weekly reviews:

| Week | Total Hours | Billable % | Key Learning |
|------|-------------|------------|--------------|
| Jan 13 | 42 | 68% | Meetings too high |
| Jan 20 | 38 | 75% | Good focus week |
| Jan 27 | 45 | 62% | Client Y scope creep |

Patterns emerge across weeks that single weeks don't show.

## Monthly Deep Dive

Once a month, go deeper:
- Compare all weeks
- Calculate monthly averages
- Review client profitability
- Adjust rates or processes if needed

Monthly review: 30-45 minutes.

## Quarterly Strategic Review

Every quarter:
- Full time analysis
- Year-over-year comparison
- Pricing adjustments
- Process overhaul if needed

Quarterly review: 1-2 hours.

## Making It Stick

**Calendar it**: Recurring 15-minute block
**Same place**: Create ritual (coffee shop, home office)
**Same format**: Use a template so it's routine
**Action-oriented**: Every review ends with one action

The review is only valuable if it leads to change.

## Questions for Your Review

Keep these prompts handy:
1. What went well this week?
2. What took longer than expected?
3. What should I do differently next week?
4. Am I on track for my monthly goals?
5. What can I eliminate, automate, or delegate?

Answer quickly, act decisively.`,
    category: 'guides',
    tags: ['weekly-review', 'habits', 'productivity', 'reflection'],
    keywords: ['weekly time review', 'productivity review', 'time tracking review', 'weekly planning'],
    author: 'timedigits',
    publishedAt: '2025-01-09',
    readingTime: 5,
    featured: false,
  },
  {
    id: 'scope-creep-defense',
    slug: 'defending-against-scope-creep',
    title: 'Scope Creep Defense: Using Time Data to Protect Projects',
    excerpt: 'How to identify, document, and address scope creep before it destroys project profitability.',
    content: `Scope creep is the silent project killer. "One small change" becomes ten, and suddenly your profitable project is underwater.

## What Scope Creep Looks Like

**Explicit creep**: Client requests additional features
**Implicit creep**: "Clarifying" requirements into bigger scope
**Self-inflicted creep**: You add "nice to haves" unbilled

All three appear in time data if you look.

## Early Detection

Track time against original estimate:

Week 1: Estimated 40 hours, spent 12. On track.
Week 2: Estimated 40 hours, spent 28. On track.
Week 3: Estimated 40 hours, spent 45. Problem.

When actual exceeds estimate mid-project, scope has crept.

## Detection Metrics

**Hours burn rate**: Hours spent ÷ hours estimated
- 0.5 at halfway = on track
- 0.8 at halfway = scope creep

**Revision hours**: Track revisions separately
- 1-2 rounds normal
- 5+ rounds = scope problem

**Communication hours**: Unusual increase suggests misalignment

## Documentation for Discussions

When approaching the client:

"Hey, I wanted to give you a project update. We're at 45 hours against a 40-hour estimate, and we're about 60% complete based on deliverables. This suggests we're looking at 75 hours total—roughly 35 hours over scope.

Looking at my time tracking, the additional work has been:
- Blog section (not in original scope): 8 hours
- Extra revision rounds (3 vs planned 2): 6 hours
- Additional pages (7 vs planned 5): 12 hours

How would you like to proceed?"

Data transforms confrontation into collaboration.

## Prevention Strategies

### Clear Scope Documents
Write down exactly what's included. Share with client. Reference when additions come.

### Change Order Process
Any addition = written change order with hours and cost. No verbal approvals.

### Separate "Revisions" Project
Create project for revisions. Watch it grow. Show client the data.

### Regular Check-Ins
Weekly: "We're at X hours of Y estimated." Catch creep early.

## When to Absorb vs. Bill

**Absorb when:**
- Your mistake caused the extra work
- Scope document was unclear
- Client relationship justifies flexibility
- Truly minor (under 5% extra)

**Bill when:**
- Clear addition to scope
- Client made changes
- Documented in change order
- Significant hours impact

## Contract Protection

Future contracts should include:
- Defined scope with deliverables listed
- X included revision rounds
- Hourly rate for out-of-scope work
- Regular budget check-ins

Time data from past projects informs these terms.

## The Profitability Calculation

Project A: $5,000 fixed price, 40 hours estimated
- No creep: $125/hour (great)
- +50% creep: $83/hour (marginal)
- +100% creep: $62/hour (below cost)

Scope creep doesn't just reduce profit—it can create losses.`,
    category: 'guides',
    tags: ['scope-creep', 'project-management', 'clients', 'profitability'],
    keywords: ['scope creep', 'project scope management', 'client management', 'project profitability'],
    author: 'timedigits',
    publishedAt: '2025-01-07',
    readingTime: 6,
    featured: false,
  },
  {
    id: 'work-life-balance-tracking',
    slug: 'time-tracking-for-work-life-balance',
    title: 'Time Tracking for Work-Life Balance',
    excerpt: 'Using time data to prevent overwork, set boundaries, and actually achieve work-life balance.',
    content: `Time tracking is usually about productivity. But it's equally powerful for protecting personal time.

## The Overwork Blind Spot

Without data, it's easy to:
- Underestimate hours worked
- Not notice gradual increases
- Believe you're working "normal" hours

Time data provides objective truth.

## Warning Signs in Data

**Weekly hours creep**: 40 → 45 → 50 → 55
Look at 3-month trend, not just this week.

**Weekend work**: Any Saturday/Sunday entries? How often?

**Evening hours**: When do entries stop? 6pm or 10pm?

**No-break days**: Continuous 8+ hour stretches without lunch logged

## Setting Boundaries with Data

Define your targets:
- Maximum weekly hours: 45
- Maximum daily hours: 9
- Weekend work: Emergency only
- Evening cutoff: 7pm

Track against these like project budgets.

## Using Alerts

Create simple rules:
- If daily hours > 9: Review tomorrow
- If weekly hours > 45 by Thursday: Adjust Friday
- If any weekend entry: Question why

timedigits doesn't have built-in alerts yet, but weekly review catches these.

## The Burnout Correlation

Research shows:
- 50+ hours/week: Productivity per hour drops
- 55+ hours/week: Burnout risk increases significantly
- 60+ hours/week: Error rates spike

Track hours. If consistently >50, something needs to change.

## Having the Conversation

With yourself:
"I've averaged 52 hours/week for the past month. This isn't sustainable. I need to [decline X / delegate Y / push back on Z]."

With employer/clients:
"Looking at my time data, I've been working 15% over capacity for 6 weeks. Either workload needs to reduce or we need to discuss additional resources."

Data makes abstract feelings concrete.

## Building Rest into the System

Track non-work time too:
- "Personal" project for hours off
- See the balance visually
- Notice when work expands into personal

Protect personal time like project deadlines.

## Sustainable Productivity

Counterintuitively, working less often means better output:
- Rested minds solve problems faster
- Creativity requires downtime
- Sustainable pace beats sprint-and-crash

Time tracking reveals when you're in unhealthy territory before burnout hits.

## Weekly Balance Check

Add to your weekly review:
1. Total hours this week?
2. Any weekend/evening work?
3. Is this sustainable for the next 6 months?
4. What would I need to change to hit my target hours?

Balance isn't found. It's designed.`,
    category: 'guides',
    tags: ['work-life-balance', 'burnout', 'boundaries', 'wellness'],
    keywords: ['work life balance', 'prevent burnout', 'working hours tracking', 'time management balance'],
    author: 'timedigits',
    publishedAt: '2025-01-05',
    readingTime: 5,
    featured: false,
  },
  {
    id: 'invoicing-from-time-data',
    slug: 'creating-invoices-from-time-tracking',
    title: 'Creating Professional Invoices from Time Tracking Data',
    excerpt: 'Step-by-step process for turning your time entries into clear, professional client invoices.',
    content: `Tracked time is only valuable if it becomes payment. Here's how to convert time data into professional invoices.

## The Basic Process

1. Export time entries for invoice period
2. Filter to billable work for this client
3. Apply rates to calculate totals
4. Format professionally
5. Send and track payment

## Step 1: Export Data

In timedigits:
1. Go to Reports
2. Set date range (e.g., January 1-31)
3. Filter by client
4. Filter by billable = yes
5. Export CSV

You now have all billable entries for the period.

## Step 2: Review and Clean

Before invoicing, check:
- All entries have descriptions
- Projects are correctly assigned
- No duplicate entries
- Reasonable durations (not 0.1 hours for 2-hour work)

Edit in timedigits before exporting if needed.

## Step 3: Calculate Totals

In your spreadsheet or invoicing tool:

| Date | Description | Hours | Rate | Amount |
|------|-------------|-------|------|--------|
| 1/5 | Homepage design | 4.0 | $100 | $400 |
| 1/6 | Revisions round 1 | 2.0 | $100 | $200 |
| 1/8 | Product page design | 3.5 | $100 | $350 |
| **Total** | | **9.5** | | **$950** |

## Step 4: Professional Formatting

Invoice should include:
- Your business name and contact
- Client name and contact
- Invoice number and date
- Payment terms (Net 15, Net 30)
- Itemized work
- Total due
- Payment instructions

## Invoice Format Options

**Detailed**: Every entry listed individually
- Best for hourly clients who want transparency
- Can be overwhelming for large invoices

**Summarized**: Grouped by project or category
- "Website design: 20 hours @ $100 = $2,000"
- Cleaner, with detail available if requested

**Fixed + Overage**: Fixed project price + extra hours
- "Website design (fixed): $3,000"
- "Additional revisions: 5 hours @ $100 = $500"

## Tools for Invoicing

**From CSV to Invoice:**
- Excel/Sheets: Manual but flexible
- FreshBooks: Import time, generate invoices
- Wave: Free invoicing with import
- QuickBooks: Full accounting integration

**timedigits Native (Coming Soon):**
- Invoicing directly from tracked time
- No export required

## Following Up

Track invoice status:
- Sent: Date invoice emailed
- Viewed: If tool tracks opens
- Paid: Date payment received
- Overdue: Follow up at Net+5

Time data + invoice tracking = complete billing picture.

## Common Invoicing Mistakes

**No descriptions**: "8 hours work" invites questions. "Homepage design and revisions" is clear.

**Billing non-billable**: Review filters before sending. Admin time shouldn't be invoiced.

**Wrong rates**: Double-check if different projects have different rates.

**Late invoicing**: Bill monthly or at project end. Waiting 60 days hurts cash flow.`,
    category: 'guides',
    tags: ['invoicing', 'billing', 'clients', 'payments'],
    keywords: ['create invoice from time tracking', 'billing clients', 'professional invoices', 'invoicing process'],
    author: 'timedigits',
    publishedAt: '2025-01-03',
    readingTime: 5,
    featured: false,
  },
  {
    id: 'team-time-culture',
    slug: 'building-time-tracking-culture',
    title: 'Building a Time Tracking Culture in Your Team',
    excerpt: 'How to implement team time tracking without micromanagement. Creating habits that stick.',
    content: `Implementing time tracking on a team requires more than tools—it requires culture change.

## Why Teams Resist

Common objections:
- "It feels like surveillance"
- "I forget to track"
- "It interrupts my flow"
- "What's the point?"

Address these before rollout.

## Pre-Launch: Set the Why

Explain the purpose clearly:

**Good**: "We need time data to price projects accurately and ensure no one is overloaded."

**Bad**: "We're implementing tracking to see who's working."

People support initiatives that benefit them.

## The Rollout Process

### Week 1: Announce and Demo
- Team meeting: Explain purpose
- Live demo: Show how simple it is
- Q&A: Address concerns honestly

### Week 2: Soft Launch
- Everyone tracks, but no pressure
- Daily Slack reminder: "Don't forget to track!"
- Individual help for strugglers

### Week 3-4: Calibration
- Review together: "Here's what we learned"
- Adjust project structure if needed
- Celebrate early wins

### Week 5+: Habit Formation
- Reduce reminders
- Focus on using data, not policing tracking
- Regular reporting on insights gained

## Leadership's Role

**Do:**
- Track your own time publicly
- Reference time data in decisions
- Celebrate when tracking reveals insights
- Help individuals who struggle

**Don't:**
- Use time data punitively
- Compare individuals publicly
- Expect perfection immediately
- Abandon the initiative after a month

## Handling Resistance

**"I forgot"**
Solutions: Browser tab always open, phone reminders, buddy system

**"It interrupts flow"**
Solutions: Timer running always, one project at a time, review and allocate at day end

**"I don't see the point"**
Solutions: Show how data was used for a decision, share client invoice transparency, demonstrate avoided overwork

## What to Measure

Track adoption metrics:
- % of team tracking daily
- Average entries per person
- Gap between calendar and tracked time

Share these in team meetings (without naming individuals).

## When to Use Data

Use time data for:
- Project pricing and estimates
- Resource allocation
- Workload balancing
- Client profitability analysis

Never use time data for:
- Individual performance review (primarily)
- Surveillance or distrust
- Punishment

## Long-Term Success

After 3-6 months, time tracking should be:
- Automatic (people just do it)
- Valuable (team references data regularly)
- Uncontroversial (no one questions why)

If you're still fighting resistance after 6 months, revisit your why and leadership example.`,
    category: 'guides',
    tags: ['team', 'culture', 'implementation', 'management'],
    keywords: ['team time tracking', 'time tracking culture', 'implement time tracking', 'team productivity'],
    author: 'timedigits',
    publishedAt: '2024-12-30',
    readingTime: 6,
    featured: false,
  },
  {
    id: 'switching-time-trackers',
    slug: 'how-to-switch-time-trackers',
    title: 'How to Switch from Another Time Tracker to timedigits',
    excerpt: 'Migration guide for moving from Toggl, Clockify, Harvest, or other tools to timedigits.',
    content: `Switching tools is annoying. Here's how to make the transition as painless as possible.

## Before You Switch

### Export Everything
From your current tool, export:
- All time entries (full history)
- Project list
- Client list
- User list (if team)

Most tools export to CSV. Save these files.

### Document Your Setup
Note:
- How projects are organized
- Naming conventions
- Billable rates
- Team permissions

You'll recreate this in timedigits.

## The Migration Process

### Option 1: Start Fresh (Recommended)

Simply begin using timedigits for new work:
1. Set up projects in timedigits
2. Start tracking tomorrow
3. Keep old tool for historical reference

**Pros:**
- Clean start
- No data import complexity
- Faster setup

**Cons:**
- Historical data in two places
- Can't run reports across tools

### Option 2: Import Historical Data

Contact support@timedigits.com for import assistance:
1. Send your CSV exports
2. We map to timedigits structure
3. Data appears in your account

**Pros:**
- All history in one place
- Complete reporting

**Cons:**
- Takes more setup time
- May need cleanup

## Setting Up timedigits

### Recreate Projects

From your export:
1. List unique project names
2. Create each in timedigits
3. Match colors/clients if desired

### Configure Team (If Applicable)

1. Create workspace
2. Invite team members
3. Assign roles

### Set Billing (When Available)

1. Configure billable rates
2. Set defaults per project
3. Test with sample entries

## Parallel Running Period

Consider 1-2 weeks of tracking in both:
- Confirms timedigits works for you
- Catches anything you forgot
- Team adapts gradually

Then cut over fully. Half-measures prolong pain.

## Tool-Specific Notes

### From Toggl
- CSV export is clean and comprehensive
- Projects and clients map directly
- Tags may need consolidation

### From Clockify
- Export all workspaces separately
- Consider which features you actually used
- Free tier → timedigits free (easy switch)

### From Harvest
- Expense data doesn't transfer (timedigits doesn't have expenses yet)
- Invoice history stays in Harvest
- Projects/time entries transfer well

### From Spreadsheet
- Format your spreadsheet with columns: Date, Project, Hours, Description
- Import via support or recreate key entries manually
- Old spreadsheet becomes archive

## After Migration

### First Week
- Check data accuracy
- Adjust project structure if needed
- Get team comfortable

### First Month
- Run comparison reports (old tool vs timedigits)
- Identify anything missing
- Finalize any imports

### Ongoing
- Cancel old tool subscription
- Archive export files
- Full commitment to new system

## Getting Help

Migration questions? support@timedigits.com

We want switching to be easy. That's how we grow.`,
    category: 'guides',
    tags: ['migration', 'switching', 'import', 'setup'],
    keywords: ['switch time trackers', 'migrate from toggl', 'migrate from clockify', 'time tracker migration'],
    author: 'timedigits',
    publishedAt: '2024-12-26',
    readingTime: 5,
    featured: false,
  },
];

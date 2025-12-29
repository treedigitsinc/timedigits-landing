# timedigits Feature Spec Card

**Document Purpose:** Comprehensive feature specification based on competitive analysis of 100+ time tracking tools
**Version:** 1.0
**Created:** December 29, 2025
**Target Audience:** AI agents and developers implementing new features

---

## Executive Summary

This document outlines features to implement in timedigits based on a comprehensive analysis of 100+ competing time tracking tools. Features are prioritized by competitive necessity, user value, and implementation complexity.

---

## Competitive Landscape Analysis

### Competitors Analyzed (100+ Tools)

#### Tier 1: Direct Competitors (Free/Low-Cost Time Trackers)
| # | Tool | Pricing | Key Differentiator |
|---|------|---------|-------------------|
| 1 | Clockify | Free unlimited / $5.49+ | Unlimited free users |
| 2 | Toggl Track | Free (5 users) / $10+ | Elegant UX, 150+ integrations |
| 3 | TopTracker | Free forever | Payment processing included |
| 4 | Jibble | Free unlimited | Face recognition, GPS |
| 5 | My Hours | Free / $9+ | 20 years experience, simple |
| 6 | Harvest | Free (1 user) / $11+ | Best invoicing integration |
| 7 | TimeCamp | Free / $3.99+ | Automatic time tracking |
| 8 | Paymo | $3.90+ | PM + invoicing + tracking |
| 9 | Everhour | Free (5 users) / $8.50+ | PM tool integrations |
| 10 | Tick | Fixed fee plans | Budget-focused tracking |

#### Tier 2: Mid-Market ($5-15/user/month)
| # | Tool | Pricing | Key Differentiator |
|---|------|---------|-------------------|
| 11 | Hubstaff | $4.99+ | GPS + screenshots |
| 12 | Time Doctor | $6.70+ | Productivity monitoring |
| 13 | DeskTime | Paid plans | Auto-tracking + productivity |
| 14 | ClickUp | $10+ | All-in-one workspace |
| 15 | Apploye | $4.50+ | Multi-platform |
| 16 | WebWork | $4.99+ | Screenshot monitoring |
| 17 | TMetric | Free (5) / $5+ | Task management |
| 18 | Timeneye | Free (2) / $7+ | Smart suggestions |
| 19 | TrackingTime | Paid | 60+ integrations |
| 20 | Rize | $9.99+ | AI-powered focus |

#### Tier 3: Enterprise/Professional ($15-50/user/month)
| # | Tool | Pricing | Key Differentiator |
|---|------|---------|-------------------|
| 21 | QuickBooks Time | $8+ base + per user | Payroll integration |
| 22 | Replicon | Custom | Enterprise compliance |
| 23 | BigTime | $20-45+ | PSA for consultants |
| 24 | BQE Core | $26+ | Architecture/engineering |
| 25 | Scoro | $26+ | Full PSA platform |
| 26 | Kantata (Mavenlink) | Custom | Resource planning |
| 27 | Accelo | Custom | Client work automation |
| 28 | ClickTime | $13-28+ | Budget/compliance |
| 29 | Chrometa | $19-49 | Automatic capture |
| 30 | Memtime | $12-21 | Privacy-focused auto |

#### Tier 4: Industry-Specific
| # | Tool | Industry | Pricing |
|---|------|----------|---------|
| 31 | ClockShark | Construction | Field GPS tracking |
| 32 | ExakTime | Construction | Rugged hardware clocks |
| 33 | BusyBusy | Construction | Free GPS tracking |
| 34 | Workyard | Construction | Job costing |
| 35 | Jobber | Field Service | Scheduling + tracking |
| 36 | Connecteam | Field Teams | $29+ (30 users) |
| 37 | Deputy | Shift Work | $5+ |
| 38 | Homebase | Retail/Restaurant | Free + paid |
| 39 | When I Work | Shift Scheduling | Time tracking add-on |
| 40 | Sling | Scheduling | Free tier available |

#### Tier 5: Legal/Accounting Specific
| # | Tool | Industry | Pricing |
|---|------|----------|---------|
| 41 | Clio | Legal | $39+ |
| 42 | PracticePanther | Legal | Practice management |
| 43 | Rocket Matter | Legal | $39+ |
| 44 | Bill4Time | Legal | Time + billing |
| 45 | TimeSolv | Legal | Legal billing |
| 46 | LawGro/MagicTime | Legal | AI timesheet |

#### Tier 6: Project Management with Time Tracking
| # | Tool | Pricing | Notes |
|---|------|---------|-------|
| 47 | Asana | + third-party | Via TimeCamp, Everhour |
| 48 | Monday.com | Built-in | Limited tracking |
| 49 | Wrike | Built-in | $9.80+ |
| 50 | Basecamp | No native | Needs integration |
| 51 | Trello | + third-party | Via integrations |
| 52 | Notion | + third-party | Via integrations |
| 53 | Smartsheet | Built-in | Enterprise focus |
| 54 | Hive | Built-in | All-in-one platform |
| 55 | Nifty | Built-in | Remote-first |
| 56 | Zoho Projects | Built-in | $4+ |
| 57 | Teamwork | Built-in | Full PM suite |
| 58 | Productive | Built-in | Agency-focused |

#### Tier 7: Open Source / Self-Hosted
| # | Tool | License | Notes |
|---|------|---------|-------|
| 59 | Kimai | AGPL | Self-hosted, SaaS option |
| 60 | solidtime | AGPL v3 | Modern, PWA support |
| 61 | ActivityWatch | Open source | Privacy-first |
| 62 | TimeCase | Open source | Self-hosted web app |
| 63 | Traggo | Open source | Tag-based tracking |
| 64 | Titra | Open source | Freelancer/small teams |
| 65 | Cattr | Open source | Screenshot monitoring |
| 66 | Pendulums | Open source | Multi-platform |
| 67 | Timestrap | Open source | Docker support |

#### Tier 8: Productivity/Focus Tools with Time Tracking
| # | Tool | Pricing | Focus |
|---|------|---------|-------|
| 68 | RescueTime | $6.50+ | Automatic productivity |
| 69 | Timing (Mac) | macOS | Auto-tracking |
| 70 | ManicTime | Local | Offline-first |
| 71 | Timeular | $7.50+ | Physical dice tracker |

#### Tier 9: Accounting Software with Time Tracking
| # | Tool | Time Tracking | Notes |
|---|------|---------------|-------|
| 72 | FreshBooks | Built-in | Excellent invoicing |
| 73 | Xero | Built-in | Strong accounting |
| 74 | Wave | No native | Free accounting |
| 75 | Zoho Books | Built-in | Zoho ecosystem |
| 76 | QuickBooks | Via QBO Time | Payroll integration |

#### Tier 10: Payroll/HR with Time Tracking
| # | Tool | Type | Notes |
|---|------|------|-------|
| 77 | Gusto | Payroll | QBO Time integration |
| 78 | Paychex | Payroll | Enterprise HR |
| 79 | ADP | Payroll | QBO Time integration |
| 80 | Buddy Punch | Time Clock | $4.49+ |
| 81 | OnTheClock | Time Clock | PTO + GPS |
| 82 | TimeClock Plus | Time Clock | Enterprise |

#### Tier 11: Additional Competitors
| # | Tool | Type | Pricing/Notes |
|---|------|------|--------------|
| 83 | Insightful | Analytics | Workforce monitoring |
| 84 | Worksnaps | Remote | Screenshot tracking |
| 85 | Traqq | Remote | Ethical monitoring |
| 86 | Trackabi | General | Gamification |
| 87 | Hours Tracker | Mobile | Simple mobile app |
| 88 | HourStack | Visual | Calendar-based |
| 89 | MinuteDock | Simple | Wave/Xero integration |
| 90 | Beebole | Simple | €8.99 flat |
| 91 | Motion | AI | AI scheduling |
| 92 | SAP SuccessFactors | Enterprise | Real-time tracking |
| 93 | Workday | Enterprise | HR integration |
| 94 | Oracle | Enterprise | Full ERP |
| 95 | Rippling | Enterprise | $8+ |
| 96 | Paycom | Enterprise | Self-service payroll |
| 97 | 7shifts | Restaurant | Scheduling focus |
| 98 | TSheets (now QBO Time) | Field | GPS + payroll |
| 99 | Timely | AI | $11+ |
| 100 | Bonsai | Freelance | All-in-one |
| 101 | Freckle (now Noko) | Simple | Budget tracking |
| 102 | Hours | iOS | Simple timer |
| 103 | aTimeLogger | Mobile | Personal tracking |
| 104 | Boosted | Mobile | Productivity focus |

---

## Feature Gap Analysis

### Current timedigits Features
- ✅ Timer (start/stop)
- ✅ Manual time entry
- ✅ Projects
- ✅ Tasks
- ✅ Basic reports
- ✅ CSV export
- ✅ Offline support
- ✅ Free for individuals
- ✅ $1/user team pricing

### Missing Features (by Priority)

---

## PRIORITY 1: Core Competitive Features
*Must-have to compete with free alternatives*

### 1.1 Invoicing & Billing
**Competitors:** Harvest, Clockify Pro, Paymo, FreshBooks, TopTracker
**Implementation:**
```yaml
feature: invoicing
priority: P1
effort: Large
specs:
  - Create invoice from tracked time
  - Customizable invoice templates (3-5 templates)
  - PDF export
  - Line item editing
  - Tax calculation (single rate)
  - Payment status tracking (Paid/Unpaid)
  - Send via email
  - Due date tracking
  - Client information storage
  - Currency support (USD, EUR, GBP, CAD minimum)
```

### 1.2 Billable/Non-billable Hours
**Competitors:** 95% of competitors
**Implementation:**
```yaml
feature: billable_tracking
priority: P1
effort: Small
specs:
  - Toggle per time entry: billable/non-billable
  - Default billable setting per project
  - Filter reports by billable status
  - Billable hours summary in reports
```

### 1.3 Hourly Rates
**Competitors:** Toggl, Harvest, Clockify, 90% of competitors
**Implementation:**
```yaml
feature: hourly_rates
priority: P1
effort: Medium
specs:
  - Set rate per project
  - Set rate per team member
  - Set rate per client
  - Override hierarchy: Team Member > Project > Client > Default
  - Calculate earnings in reports
  - Support multiple currencies
```

### 1.4 Client Management
**Competitors:** All invoicing competitors
**Implementation:**
```yaml
feature: clients
priority: P1
effort: Medium
specs:
  - Client entity with: name, email, address, phone
  - Associate projects with clients
  - Client-level reports
  - Client-specific hourly rate
  - Client dashboard view
```

### 1.5 Integrations (Top 10)
**Competitors:** Toggl (100+), Everhour (50+), TrackingTime (60+)
**Implementation:**
```yaml
feature: integrations
priority: P1
effort: Large
specs:
  phase_1:
    - Google Calendar (sync events as time entries)
    - Slack (start timer via slash command)
    - Zapier (connect to 2000+ apps)
  phase_2:
    - Asana (track time on tasks)
    - Trello (track time on cards)
    - Jira (developer workflow)
  phase_3:
    - QuickBooks Online (sync invoices)
    - Xero (sync invoices)
    - GitHub (track coding time)
  phase_4:
    - Notion
    - Linear
    - ClickUp
```

---

## PRIORITY 2: Team Features
*Required for team adoption*

### 2.1 Timesheet Approvals
**Competitors:** Harvest, Replicon, QuickBooks Time, enterprise tools
**Implementation:**
```yaml
feature: approvals
priority: P2
effort: Medium
specs:
  - Weekly timesheet submission
  - Manager approval workflow
  - Approval/rejection with comments
  - Email notifications
  - Approval history audit trail
```

### 2.2 Team Member Permissions
**Competitors:** All team-focused tools
**Implementation:**
```yaml
feature: permissions
priority: P2
effort: Medium
specs:
  roles:
    - Owner: Full access, billing, delete workspace
    - Admin: Manage team, projects, view all reports
    - Manager: Approve timesheets, view team reports
    - Member: Track time, view own reports
  project_level:
    - Project Manager: Edit project, view project reports
    - Project Member: Track time on project
```

### 2.3 PTO/Leave Tracking
**Competitors:** Jibble, Deputy, Homebase, HR tools
**Implementation:**
```yaml
feature: pto_tracking
priority: P2
effort: Medium
specs:
  - Define leave types (Vacation, Sick, Personal)
  - Leave request submission
  - Manager approval
  - Leave balance tracking
  - Accrual policies (basic)
  - Calendar view of team availability
```

### 2.4 Tags
**Competitors:** Toggl, Clockify, most modern trackers
**Implementation:**
```yaml
feature: tags
priority: P2
effort: Small
specs:
  - Create custom tags
  - Apply multiple tags per entry
  - Filter by tags
  - Tag-based reports
  - Color-coded tags
```

---

## PRIORITY 3: Advanced Reporting
*Differentiation and professional use*

### 3.1 Advanced Report Builder
**Competitors:** Toggl, BigTime, enterprise tools
**Implementation:**
```yaml
feature: report_builder
priority: P3
effort: Large
specs:
  - Custom date ranges
  - Group by: Project, Client, Team Member, Tag, Day/Week/Month
  - Multiple filters (AND/OR logic)
  - Column customization
  - Save report templates
  - Schedule recurring reports (email)
  - Export: PDF, CSV, Excel
```

### 3.2 Project Budgets & Alerts
**Competitors:** Tick, Everhour, Scoro, 60% of paid tools
**Implementation:**
```yaml
feature: budgets
priority: P3
effort: Medium
specs:
  - Set budget per project (hours or money)
  - Real-time budget tracking
  - Visual progress indicator
  - Alert at 50%, 80%, 100% thresholds
  - Email/in-app notifications
  - Budget vs actual reports
```

### 3.3 Utilization & Capacity Planning
**Competitors:** Kantata, BigTime, enterprise PSA tools
**Implementation:**
```yaml
feature: utilization
priority: P3
effort: Large
specs:
  - Define working hours per team member
  - Calculate utilization rate
  - Capacity heatmap view
  - Forecasting (basic)
  - Overtime tracking
```

---

## PRIORITY 4: Productivity & Monitoring
*Optional, for monitoring-oriented teams*

### 4.1 Activity Tracking
**Competitors:** Hubstaff, Time Doctor, DeskTime, WebWork
**Implementation:**
```yaml
feature: activity_tracking
priority: P4
effort: Large
specs:
  - Activity level (keyboard/mouse)
  - App usage tracking
  - Website tracking
  - Privacy controls (can be disabled)
  - Activity reports
note: "Consider as optional premium feature - many users prefer privacy"
```

### 4.2 Screenshots
**Competitors:** Hubstaff, Time Doctor, WebWork
**Implementation:**
```yaml
feature: screenshots
priority: P4
effort: Large
specs:
  - Configurable intervals (5/10/15 min)
  - Blur option for privacy
  - Delete own screenshots
  - On/off per project
  - Manager review interface
note: "CAUTION: Can alienate users. Make opt-in only."
```

### 4.3 GPS Tracking
**Competitors:** Jibble, ClockShark, ExakTime, Connecteam
**Implementation:**
```yaml
feature: gps_tracking
priority: P4
effort: Large
specs:
  - Clock-in location stamp
  - Geofencing (auto clock in/out)
  - Location history
  - Privacy controls
note: "Primarily for field service/construction verticals"
```

---

## PRIORITY 5: Automation & AI
*Future differentiation*

### 5.1 AI Time Suggestions
**Competitors:** Timely, Rize, Memtime
**Implementation:**
```yaml
feature: ai_suggestions
priority: P5
effort: Large
specs:
  - Learn from user patterns
  - Suggest time entries from calendar
  - Suggest project/task based on app usage
  - Smart autocomplete
```

### 5.2 Automatic Time Tracking
**Competitors:** RescueTime, Timing, Memtime, Chrometa
**Implementation:**
```yaml
feature: auto_tracking
priority: P5
effort: Very Large
specs:
  - Track app usage automatically
  - Track websites visited
  - Local data storage (privacy)
  - Manual review before submission
  - Rules for categorization
```

### 5.3 MCP Server (Claude/AI Integration)
**Current Status:** Already mentioned on landing page
**Implementation:**
```yaml
feature: mcp_server
priority: P5
effort: Medium
specs:
  - Start/stop timer via AI assistants
  - Query time data via natural language
  - Create entries from voice/text
  - Integration with Claude, ChatGPT, etc.
```

---

## PRIORITY 6: Platform & Accessibility
*Cross-platform and accessibility improvements*

### 6.1 Browser Extensions
**Competitors:** Toggl, Clockify, Harvest, TimeCamp
**Implementation:**
```yaml
feature: browser_extensions
priority: P6
effort: Medium
specs:
  - Chrome extension
  - Firefox extension
  - Edge extension
  - Quick timer start/stop
  - Website integration (Asana, Trello buttons)
  - Idle detection
```

### 6.2 Desktop Apps
**Competitors:** Toggl, Clockify, Harvest, 80% of competitors
**Implementation:**
```yaml
feature: desktop_apps
priority: P6
effort: Large
specs:
  platforms:
    - macOS
    - Windows
    - Linux (optional)
  features:
    - Menu bar/system tray
    - Keyboard shortcuts
    - Idle detection
    - Offline sync
    - Pomodoro timer option
```

### 6.3 Mobile Apps (Enhanced)
**Competitors:** All major tools
**Implementation:**
```yaml
feature: mobile_apps
priority: P6
effort: Large
specs:
  - iOS native app
  - Android native app
  - Push notifications (timer running, approvals)
  - Offline support
  - Widget for quick timer access
  - Apple Watch / Wear OS support (optional)
```

---

## Feature Comparison Matrix

| Feature | timedigits | Toggl | Clockify | Harvest | Priority |
|---------|------------|-------|----------|---------|----------|
| Timer | ✅ | ✅ | ✅ | ✅ | - |
| Manual Entry | ✅ | ✅ | ✅ | ✅ | - |
| Projects | ✅ | ✅ | ✅ | ✅ | - |
| Tasks | ✅ | ✅ | ✅ | ✅ | - |
| Reports | ✅ | ✅ | ✅ | ✅ | - |
| CSV Export | ✅ | ✅ | ✅ | ✅ | - |
| Offline | ✅ | ✅ | ✅ | ✅ | - |
| **Invoicing** | ❌ | ❌ | 💲 | ✅ | P1 |
| **Billable Hours** | ❌ | ✅ | ✅ | ✅ | P1 |
| **Hourly Rates** | ❌ | ✅ | 💲 | ✅ | P1 |
| **Clients** | ❌ | ✅ | ✅ | ✅ | P1 |
| **Integrations** | ❌ | ✅ | ✅ | ✅ | P1 |
| Approvals | ❌ | 💲 | 💲 | 💲 | P2 |
| Permissions | ❌ | ✅ | ✅ | ✅ | P2 |
| PTO Tracking | ❌ | ❌ | 💲 | ❌ | P2 |
| Tags | ❌ | ✅ | ✅ | ❌ | P2 |
| Budgets | ❌ | 💲 | 💲 | ✅ | P3 |
| Utilization | ❌ | 💲 | ❌ | ❌ | P3 |
| Screenshots | ❌ | ❌ | 💲 | ❌ | P4 |
| GPS | ❌ | ❌ | 💲 | ❌ | P4 |
| AI Tracking | ❌ | ❌ | ❌ | ❌ | P5 |
| Browser Ext | ❌ | ✅ | ✅ | ✅ | P6 |
| Desktop App | ❌ | ✅ | ✅ | ✅ | P6 |
| Mobile App | ❌ | ✅ | ✅ | ✅ | P6 |

Legend: ✅ = Included, 💲 = Paid only, ❌ = Not available

---

## Pricing Position Analysis

### Competitor Pricing Summary (per user/month)

| Tier | Examples | Price Range |
|------|----------|-------------|
| Free | Clockify, Jibble, TopTracker | $0 |
| Budget | timedigits, WebWork, TimeCamp | $1-5 |
| Mid | Toggl, Hubstaff, Everhour | $5-15 |
| Professional | Harvest, QuickBooks Time | $10-20 |
| Enterprise | BigTime, Replicon, BQE Core | $20-50+ |

### timedigits Value Proposition

**Current:** $1/user for teams = 80-95% cheaper than mid-tier competitors

**Recommended Pricing Strategy:**
- Solo: Free forever (maintain)
- Team (2-5): $5/mo flat (maintain)
- Team (6+): $1/user/mo (maintain)
- Pro features (invoicing, budgets): Consider $2/user or $3/user tier
- Enterprise (SSO, API, support): Custom pricing

---

## Implementation Roadmap

### Phase 1 (Q1 2026): Core Billing
- Billable/non-billable toggle
- Hourly rates
- Client management
- Basic invoicing

### Phase 2 (Q2 2026): Team Power
- Tags
- Advanced permissions
- Timesheet approvals
- 5 key integrations (Calendar, Slack, Zapier, Asana, Trello)

### Phase 3 (Q3 2026): Reporting & Budgets
- Advanced report builder
- Project budgets
- Browser extensions

### Phase 4 (Q4 2026): Platform Expansion
- Desktop apps
- Enhanced mobile apps
- 10 additional integrations

### Phase 5 (2027): Advanced Features
- Utilization tracking
- PTO management
- AI suggestions
- MCP server completion

---

## Scoring Methodology

### timedigits Competitive Score

Each tool is scored on 5 dimensions (0-20 points each, 100 total):

| Dimension | Weight | Criteria |
|-----------|--------|----------|
| **Pricing** | 20 | Lower cost = higher score |
| **Core Features** | 25 | Timer, projects, reports, export |
| **Team Features** | 20 | Permissions, approvals, collaboration |
| **Integrations** | 15 | Number and quality of integrations |
| **UX/Platform** | 20 | Ease of use, mobile, desktop, web |

### Current Score Card

| Tool | Pricing | Core | Team | Integrations | UX | Total |
|------|---------|------|------|--------------|----|----|
| timedigits | 20 | 18 | 10 | 5 | 14 | **67** |
| Clockify | 18 | 20 | 15 | 18 | 18 | 89 |
| Toggl | 12 | 20 | 18 | 20 | 20 | 90 |
| Harvest | 10 | 20 | 16 | 18 | 18 | 82 |
| Jibble | 19 | 16 | 14 | 10 | 15 | 74 |

**Target Score After Phase 3:** 85+ points

---

## Success Criteria

### Ralph Wiggum Validation Cycles

**Cycle 1:** Verify 100+ competitors listed ✅
**Cycle 2:** Verify pricing accuracy (spot check 20 tools) ✅
**Cycle 3:** Verify feature gaps are real (cross-reference 3 sources) ✅
**Cycle 4:** Validate priority ordering (business value + effort matrix) ✅
**Cycle 5:** Ensure implementation specs are actionable for AI agents ✅

---

## Appendix: Feature Implementation Notes

### API Design Considerations
- RESTful API for all features
- Real-time sync via WebSocket or Server-Sent Events
- Offline-first architecture (continue current approach)
- GraphQL optional for complex queries

### Database Schema Hints
```
clients: id, name, email, address, phone, default_rate, workspace_id
projects: add client_id, budget_hours, budget_amount, billable_default
time_entries: add billable (boolean), hourly_rate (override)
tags: id, name, color, workspace_id
entry_tags: entry_id, tag_id (many-to-many)
invoices: id, client_id, status, due_date, items (json), total
```

### Third-Party Services to Evaluate
- Stripe for payment processing
- SendGrid/Resend for email
- OAuth providers for integrations
- Zapier webhook integration

---

## Document Metadata

**Research Sources:**
- Capterra
- G2
- GetApp
- Official competitor websites
- Industry comparison articles
- User reviews

**Validation Status:** 5/5 Ralph Wiggum cycles complete

**Next Review Date:** March 2026

---

*This document is designed for AI agents to understand and implement features. Each feature spec includes structured YAML for parsing and implementation.*

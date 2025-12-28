---
name: interactive-demo-builder
description: |
  Create interactive product demos with animations for TimeDigits landing page. Use when: (1) Building timer simulations, (2) Creating animated dashboards, (3) Designing floating report animations, (4) Project selection dropdowns, (5) Demo interactions. Triggers on: "demo", "interactive", "timer animation", "dashboard preview".
---

# Interactive Demo Builder

Interactive product demonstrations for TimeDigits landing page.

## Interactive Timer Component

```tsx
// src/components/InteractiveTimer.tsx
interface TimerDemoProps {
  projects: { id: string; name: string; color: string }[]
}

export function InteractiveTimer({ projects }: TimerDemoProps) {
  const [isRunning, setIsRunning] = useState(false)
  const [elapsed, setElapsed] = useState(0)
  const [selectedProject, setSelectedProject] = useState(projects[0])

  useEffect(() => {
    if (!isRunning) return

    const interval = setInterval(() => {
      setElapsed(e => e + 1)
    }, 1000)

    return () => clearInterval(interval)
  }, [isRunning])

  const formatTime = (seconds: number) => {
    const h = Math.floor(seconds / 3600)
    const m = Math.floor((seconds % 3600) / 60)
    const s = seconds % 60
    return `${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`
  }

  return (
    <div className="bg-card rounded-xl p-6 shadow-lg">
      {/* Project selector */}
      <div className="mb-4">
        <select
          value={selectedProject.id}
          onChange={(e) => setSelectedProject(projects.find(p => p.id === e.target.value)!)}
          className="w-full p-2 border rounded-lg"
        >
          {projects.map(p => (
            <option key={p.id} value={p.id}>{p.name}</option>
          ))}
        </select>
      </div>

      {/* Timer display */}
      <div className="text-center">
        <div className="text-5xl font-mono font-bold mb-4">
          {formatTime(elapsed)}
        </div>

        <div
          className="w-3 h-3 rounded-full mx-auto mb-4 animate-pulse"
          style={{ backgroundColor: isRunning ? '#22c55e' : '#94a3b8' }}
        />

        {/* Start/Stop button */}
        <button
          onClick={() => setIsRunning(!isRunning)}
          className={`px-8 py-3 rounded-full font-medium transition-all ${
            isRunning
              ? 'bg-red-500 hover:bg-red-600 text-white'
              : 'bg-teal-500 hover:bg-teal-600 text-white'
          }`}
        >
          {isRunning ? 'Stop' : 'Start'}
        </button>
      </div>

      {/* Floating time entry animation */}
      {!isRunning && elapsed > 0 && (
        <FloatingEntry
          project={selectedProject.name}
          time={formatTime(elapsed)}
          onComplete={() => setElapsed(0)}
        />
      )}
    </div>
  )
}
```

## Floating Entry Animation

```tsx
function FloatingEntry({
  project,
  time,
  onComplete
}: {
  project: string
  time: string
  onComplete: () => void
}) {
  useEffect(() => {
    const timeout = setTimeout(onComplete, 2000)
    return () => clearTimeout(timeout)
  }, [onComplete])

  return (
    <motion.div
      initial={{ opacity: 0, y: 0, scale: 0.8 }}
      animate={{ opacity: 1, y: -20, scale: 1 }}
      exit={{ opacity: 0, y: -40 }}
      className="absolute top-0 left-1/2 -translate-x-1/2 bg-white shadow-lg rounded-lg p-3"
    >
      <div className="flex items-center gap-2 text-sm">
        <Check className="w-4 h-4 text-green-500" />
        <span>{time} logged to {project}</span>
      </div>
    </motion.div>
  )
}
```

## Dashboard Preview Animation

```tsx
function DashboardPreview() {
  const [activeTab, setActiveTab] = useState<'week' | 'month'>('week')

  const mockData = {
    week: [
      { day: 'Mon', hours: 8.5, billable: 7 },
      { day: 'Tue', hours: 7.5, billable: 6.5 },
      { day: 'Wed', hours: 9, billable: 8 },
      { day: 'Thu', hours: 8, billable: 7.5 },
      { day: 'Fri', hours: 6, billable: 5 },
    ],
  }

  return (
    <div className="bg-card rounded-xl p-6 shadow-lg">
      {/* Tab switcher */}
      <div className="flex gap-2 mb-4">
        {(['week', 'month'] as const).map(tab => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 rounded-lg capitalize ${
              activeTab === tab ? 'bg-primary text-white' : 'bg-muted'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Animated bars */}
      <div className="space-y-3">
        {mockData.week.map((day, i) => (
          <motion.div
            key={day.day}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.1 }}
            className="flex items-center gap-3"
          >
            <span className="w-10 text-sm text-muted-foreground">{day.day}</span>
            <div className="flex-1 h-6 bg-muted rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${(day.hours / 10) * 100}%` }}
                transition={{ delay: i * 0.1 + 0.2, duration: 0.5 }}
                className="h-full bg-teal-500 rounded-full"
              />
            </div>
            <span className="w-12 text-sm font-medium">{day.hours}h</span>
          </motion.div>
        ))}
      </div>

      {/* Summary */}
      <div className="mt-6 pt-4 border-t grid grid-cols-2 gap-4">
        <div>
          <div className="text-2xl font-bold">39h</div>
          <div className="text-sm text-muted-foreground">Total</div>
        </div>
        <div>
          <div className="text-2xl font-bold text-green-500">34h</div>
          <div className="text-sm text-muted-foreground">Billable</div>
        </div>
      </div>
    </div>
  )
}
```

## Framer Motion Variants

```typescript
// src/lib/animations.ts
export const demoVariants = {
  container: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  },
  item: {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 300, damping: 24 }
    }
  },
  float: {
    initial: { y: 0 },
    animate: {
      y: [-5, 5, -5],
      transition: { duration: 3, repeat: Infinity, ease: 'easeInOut' }
    }
  }
}
```

## Ralph Loop Integration

```bash
/ralph-loop "Add project color indicator to timer. Create weekly summary animation. Add hover states. Test interactions. <promise>DEMOED</promise>" --max-iterations 10
```

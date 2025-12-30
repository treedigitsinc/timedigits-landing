import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Analytics } from './components/Analytics'
import { Landing } from './pages/Landing'
import { About } from './pages/About'
import { Privacy } from './pages/Privacy'
import { Terms } from './pages/Terms'
import { Compare } from './pages/Compare'
import { BestFreeTimeTracker } from './pages/BestFreeTimeTracker'
import { TogglAlternative } from './pages/TogglAlternative'
import { TimeTrackerNoSurveillance } from './pages/TimeTrackerNoSurveillance'
import { FreelanceTimeTracker } from './pages/FreelanceTimeTracker'
import { AgencyTimeTracker } from './pages/AgencyTimeTracker'
import { ClockifyAlternative } from './pages/ClockifyAlternative'
import { HarvestAlternative } from './pages/HarvestAlternative'
import { SmallBusinessTimeTracker } from './pages/SmallBusinessTimeTracker'

function App() {
  return (
    <BrowserRouter>
      <Analytics />
      <div className="min-h-screen bg-zinc-950">
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/about" element={<About />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/compare" element={<Compare />} />
          <Route path="/best-free-time-tracker" element={<BestFreeTimeTracker />} />
          <Route path="/toggl-alternative" element={<TogglAlternative />} />
          <Route path="/time-tracker-no-surveillance" element={<TimeTrackerNoSurveillance />} />
          <Route path="/freelance-time-tracker" element={<FreelanceTimeTracker />} />
          <Route path="/agency-time-tracker" element={<AgencyTimeTracker />} />
          <Route path="/clockify-alternative" element={<ClockifyAlternative />} />
          <Route path="/harvest-alternative" element={<HarvestAlternative />} />
          <Route path="/small-business-time-tracker" element={<SmallBusinessTimeTracker />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Analytics } from './components/Analytics'
import { CookieConsent } from './components/CookieConsent'
import { Landing } from './pages/Landing'
import { About } from './pages/About'
import { Privacy } from './pages/Privacy'
import { Cookies } from './pages/Cookies'
import { Terms } from './pages/Terms'
import { Compare } from './pages/Compare'
import { Blog } from './pages/Blog'
import { BlogPost } from './pages/BlogPost'
import { FAQPage } from './pages/FAQPage'
import { BestFreeTimeTracker } from './pages/BestFreeTimeTracker'
import { TogglAlternative } from './pages/TogglAlternative'
import { TimeTrackerNoSurveillance } from './pages/TimeTrackerNoSurveillance'
import { FreelanceTimeTracker } from './pages/FreelanceTimeTracker'
import { AgencyTimeTracker } from './pages/AgencyTimeTracker'
import { ClockifyAlternative } from './pages/ClockifyAlternative'
import { HarvestAlternative } from './pages/HarvestAlternative'
import { SmallBusinessTimeTracker } from './pages/SmallBusinessTimeTracker'
import { RemoteTeamTimeTracker } from './pages/RemoteTeamTimeTracker'
import { ConsultantTimeTracker } from './pages/ConsultantTimeTracker'
import { DeveloperTimeTracker } from './pages/DeveloperTimeTracker'
import { LawyerTimeTracker } from './pages/LawyerTimeTracker'
import { AccountantTimeTracker } from './pages/AccountantTimeTracker'
import { DesignerTimeTracker } from './pages/DesignerTimeTracker'
import { ContractorTimeTracker } from './pages/ContractorTimeTracker'
import { ArchitectTimeTracker } from './pages/ArchitectTimeTracker'
import { WriterTimeTracker } from './pages/WriterTimeTracker'
import { VirtualAssistantTimeTracker } from './pages/VirtualAssistantTimeTracker'
import { ProjectManagerTimeTracker } from './pages/ProjectManagerTimeTracker'
import { TherapistTimeTracker } from './pages/TherapistTimeTracker'
import { DataProcessingAgreement } from './pages/DataProcessingAgreement'
import { Pricing } from './pages/Pricing'

function App() {
  return (
    <BrowserRouter>
      <Analytics />
      <div className="min-h-screen bg-zinc-950">
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/about" element={<About />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/cookies" element={<Cookies />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/compare" element={<Compare />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/faq" element={<FAQPage />} />
          <Route path="/best-free-time-tracker" element={<BestFreeTimeTracker />} />
          <Route path="/toggl-alternative" element={<TogglAlternative />} />
          <Route path="/time-tracker-no-surveillance" element={<TimeTrackerNoSurveillance />} />
          <Route path="/freelance-time-tracker" element={<FreelanceTimeTracker />} />
          <Route path="/agency-time-tracker" element={<AgencyTimeTracker />} />
          <Route path="/clockify-alternative" element={<ClockifyAlternative />} />
          <Route path="/harvest-alternative" element={<HarvestAlternative />} />
          <Route path="/small-business-time-tracker" element={<SmallBusinessTimeTracker />} />
          <Route path="/remote-team-time-tracker" element={<RemoteTeamTimeTracker />} />
          <Route path="/consultant-time-tracker" element={<ConsultantTimeTracker />} />
          <Route path="/developer-time-tracker" element={<DeveloperTimeTracker />} />
          <Route path="/lawyer-time-tracker" element={<LawyerTimeTracker />} />
          <Route path="/accountant-time-tracker" element={<AccountantTimeTracker />} />
          <Route path="/designer-time-tracker" element={<DesignerTimeTracker />} />
          <Route path="/contractor-time-tracker" element={<ContractorTimeTracker />} />
          <Route path="/architect-time-tracker" element={<ArchitectTimeTracker />} />
          <Route path="/writer-time-tracker" element={<WriterTimeTracker />} />
          <Route path="/virtual-assistant-time-tracker" element={<VirtualAssistantTimeTracker />} />
          <Route path="/project-manager-time-tracker" element={<ProjectManagerTimeTracker />} />
          <Route path="/therapist-time-tracker" element={<TherapistTimeTracker />} />
          <Route path="/dpa" element={<DataProcessingAgreement />} />
          <Route path="/pricing" element={<Pricing />} />
        </Routes>
        <CookieConsent />
      </div>
    </BrowserRouter>
  )
}

export default App

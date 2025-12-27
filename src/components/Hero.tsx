import { Play, ArrowRight } from 'lucide-react'

export function Hero() {
  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 hero-gradient">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-emerald-50 text-emerald-700 px-4 py-2 rounded-full text-sm font-medium mb-8">
            <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
            Now available for teams
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-gray-900 tracking-tight mb-6">
            Track time in seconds
            <br />
            <span className="gradient-text">Save money for real</span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl sm:text-2xl text-gray-600 mb-10 max-w-2xl mx-auto">
            The simplest time tracker ever built. Free for individuals,
            just <span className="font-semibold text-emerald-600">$1/month</span> per user for teams.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <a
              href="#pricing"
              className="w-full sm:w-auto bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all hover:shadow-lg hover:shadow-emerald-500/25 flex items-center justify-center gap-2"
            >
              Start Tracking Free
              <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href="#how-it-works"
              className="w-full sm:w-auto bg-gray-100 hover:bg-gray-200 text-gray-900 px-8 py-4 rounded-lg font-semibold text-lg transition-colors flex items-center justify-center gap-2"
            >
              <Play className="w-5 h-5" />
              See How It Works
            </a>
          </div>

          {/* App Preview */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent z-10 pointer-events-none"></div>
            <div className="bg-gray-900 rounded-xl shadow-2xl overflow-hidden border border-gray-800">
              <div className="bg-gray-800 px-4 py-3 flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <div className="p-8">
                {/* Timer UI Mock */}
                <div className="bg-gray-800 rounded-lg p-6 mb-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-gray-400 text-sm">Currently tracking</span>
                    <span className="text-emerald-400 text-sm font-medium">Project Alpha</span>
                  </div>
                  <div className="text-6xl font-mono text-white text-center mb-6">02:34:17</div>
                  <div className="flex justify-center gap-4">
                    <button className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center">
                      <div className="w-5 h-5 bg-white rounded-sm"></div>
                    </button>
                  </div>
                </div>

                {/* Today's entries mock */}
                <div className="space-y-3">
                  <div className="bg-gray-800 rounded-lg p-4 flex items-center justify-between">
                    <div>
                      <div className="text-white font-medium">Client Meeting</div>
                      <div className="text-gray-400 text-sm">9:00 AM - 10:30 AM</div>
                    </div>
                    <div className="text-emerald-400 font-mono">1.5h</div>
                  </div>
                  <div className="bg-gray-800 rounded-lg p-4 flex items-center justify-between">
                    <div>
                      <div className="text-white font-medium">Development</div>
                      <div className="text-gray-400 text-sm">10:45 AM - 12:30 PM</div>
                    </div>
                    <div className="text-emerald-400 font-mono">1.75h</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

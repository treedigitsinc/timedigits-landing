import { Clock, Heart, Sparkle, Globe } from "@phosphor-icons/react";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

export function About() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="pt-28 pb-16">
        <div className="container max-w-3xl">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">About timedigits</h1>
          <p className="text-xl text-teal-500 mb-12">track time. bill time.</p>

          <div className="space-y-12">
            {/* Hero statement */}
            <section className="bg-slate-50 border border-slate-200 rounded-2xl p-8">
              <p className="text-lg text-slate-600 leading-relaxed">
                We built timedigits because we were tired of time trackers that felt like homework.
                No endless features you'll never use. No pricing that punishes growth.
                Just a clean, fast way to track your time and get back to work.
              </p>
            </section>

            {/* Values */}
            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-6">What we believe</h2>
              <div className="grid gap-6">
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-xl bg-teal-500/10 flex items-center justify-center flex-shrink-0">
                    <Clock size={20} className="text-teal-500" />
                  </div>
                  <div>
                    <h3 className="text-slate-900 font-semibold mb-1">Simple beats complex</h3>
                    <p className="text-slate-500 text-sm">Start a timer. Stop it. That's it. No learning curve, no onboarding videos.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-xl bg-teal-500/10 flex items-center justify-center flex-shrink-0">
                    <Heart size={20} className="text-teal-500" />
                  </div>
                  <div>
                    <h3 className="text-slate-900 font-semibold mb-1">Fair pricing, always</h3>
                    <p className="text-slate-500 text-sm">Free for individuals. $1/user for teams. No "contact sales" games.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-xl bg-teal-500/10 flex items-center justify-center flex-shrink-0">
                    <Sparkle size={20} className="text-teal-500" />
                  </div>
                  <div>
                    <h3 className="text-slate-900 font-semibold mb-1">Your data is yours</h3>
                    <p className="text-slate-500 text-sm">Export anytime. No lock-in. We're confident you'll stay because you want to.</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Parent company */}
            <section className="border-t border-slate-200 pt-12">
              <div className="flex items-center gap-3 mb-4">
                <Globe size={24} className="text-slate-400" />
                <h2 className="text-2xl font-bold text-slate-900">Part of the Treedigits family</h2>
              </div>
              <p className="text-slate-500 leading-relaxed mb-4">
                timedigits is a product of{" "}
                <a
                  href="https://treedigits.ca"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-teal-500 hover:text-teal-600 font-medium"
                >
                  Treedigits Inc.
                </a>
                , a Toronto-based software company building tools that respect your time and intelligence.
                We serve teams across Canada, the United States, Europe, and Latin America.
              </p>
              <p className="text-slate-400 text-sm">
                Want to learn more about our other projects? Visit{" "}
                <a
                  href="https://treedigits.ca"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-teal-500 hover:text-teal-600"
                >
                  treedigits.ca
                </a>
              </p>
            </section>

            {/* Contact */}
            <section className="bg-slate-50 border border-slate-200 rounded-2xl p-8 text-center">
              <h2 className="text-xl font-bold text-slate-900 mb-2">Questions?</h2>
              <p className="text-slate-500 mb-4">We're humans, and we reply.</p>
              <a
                href="https://twitter.com/treedigitsinc"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-teal-500 hover:text-teal-600 font-medium"
              >
                Say hi on Twitter/X
              </a>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

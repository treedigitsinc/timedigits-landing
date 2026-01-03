"use client";
import { useState, useEffect } from "react";
import { ArrowRight, Play, Pause, Check } from "@phosphor-icons/react";
import { motion, AnimatePresence } from "framer-motion";

// Rotating words for the hero headline - action words tied to features
const rotatingWords = [
  "bill",
  "export",
  "budget",
  "manage",
  "invoice",
  "review",
  "approve",
];

export function Hero() {
  const [isRunning, setIsRunning] = useState(false);
  const [seconds, setSeconds] = useState(0);
  const [wordIndex, setWordIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  // Typewriter effect for rotating words - clicky, mechanical feel
  useEffect(() => {
    const currentWord = rotatingWords[wordIndex];
    // Fast, clicky typing with slight randomness for mechanical feel
    const baseSpeed = isDeleting ? 35 : 55;
    const randomVariation = Math.random() * 25;
    const typeSpeed = baseSpeed + randomVariation;

    if (!isDeleting && displayedText === currentWord) {
      // Word fully typed, wait then start deleting
      const timeout = setTimeout(() => setIsDeleting(true), 1800);
      return () => clearTimeout(timeout);
    }

    if (isDeleting && displayedText === "") {
      // Word fully deleted, move to next word
      setIsDeleting(false);
      setWordIndex((prev) => (prev + 1) % rotatingWords.length);
      return;
    }

    const timeout = setTimeout(() => {
      if (isDeleting) {
        setDisplayedText(currentWord.substring(0, displayedText.length - 1));
      } else {
        setDisplayedText(currentWord.substring(0, displayedText.length + 1));
      }
    }, typeSpeed);

    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, wordIndex]);

  useEffect(() => {
    let interval: ReturnType<typeof setInterval>;
    if (isRunning) {
      interval = setInterval(() => {
        setSeconds((s) => s + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isRunning]);

  const formatTime = (totalSeconds: number) => {
    const hrs = Math.floor(totalSeconds / 3600);
    const mins = Math.floor((totalSeconds % 3600) / 60);
    const secs = totalSeconds % 60;
    return `${hrs.toString().padStart(2, "0")}:${mins
      .toString()
      .padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

  const plans = [
    {
      name: "Solo",
      price: "Free",
      period: "forever",
      features: ["Unlimited tracking", "Unlimited projects", "Reports & export"],
      highlight: false,
    },
    {
      name: "Team",
      price: "$5",
      period: "/month",
      features: ["5 team members", "+$1/extra member", "Team reports"],
      highlight: true,
    },
  ];

  return (
    <section className="relative min-h-[85vh] flex items-center pt-20 pb-12 bg-white">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Column - Motto and Animation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-left"
          >
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-slate-900 mb-6 leading-[1.05] tracking-tight">
              Track time.
              <br />
              <span className="text-teal-500">
                <span className="inline-block min-w-[4ch]">
                  {displayedText}
                  <span
                    className="inline-block w-[2px] h-[0.9em] bg-teal-400/60 ml-0.5 align-middle"
                    style={{ animation: 'blink 1s step-end infinite' }}
                  />
                </span>
                <span className="ml-1">time.</span>
              </span>
            </h1>

            <p className="text-xl text-slate-600 max-w-md mb-8 leading-relaxed">
              Simple time tracking with invoicing. Free forever, $5/mo for teams.
            </p>

            <div className="flex flex-col sm:flex-row items-start gap-4 mb-12">
              <a
                href="https://app.timedigits.ca/login"
                className="group inline-flex items-center gap-3 bg-teal-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-teal-600 transition-all duration-300 shadow-lg shadow-teal-500/25"
              >
                Start Free
                <ArrowRight size={20} weight="bold" className="group-hover:translate-x-1 transition-transform" />
              </a>
              <span className="text-slate-500 text-sm self-center">
                No credit card required
              </span>
            </div>

            {/* Interactive Timer Demo */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-slate-50 rounded-2xl p-6 border border-slate-200 max-w-sm"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <div className={`w-2.5 h-2.5 rounded-full ${isRunning ? 'bg-teal-500 animate-pulse' : 'bg-slate-300'}`} />
                  <span className="text-xs font-medium text-slate-500 uppercase tracking-wider">
                    {isRunning ? 'Tracking' : 'Ready'}
                  </span>
                </div>
                <span className="text-xs text-slate-400">Try it!</span>
              </div>

              <div className="text-center py-4">
                <div className="font-mono text-4xl font-medium tracking-tight text-slate-900 tabular-nums mb-4">
                  {formatTime(seconds)}
                </div>
                <button
                  onClick={() => setIsRunning(!isRunning)}
                  className={`w-14 h-14 rounded-full flex items-center justify-center transition-all duration-300 ${
                    isRunning
                      ? 'bg-slate-200 text-slate-700 hover:bg-slate-300'
                      : 'bg-teal-500 text-white hover:bg-teal-600 shadow-lg shadow-teal-500/30'
                  }`}
                >
                  {isRunning ? <Pause size={24} weight="fill" /> : <Play size={24} weight="fill" />}
                </button>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Pricing */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:pl-8"
          >
            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold text-slate-900 mb-2">Simple pricing</h2>
              <p className="text-slate-500">No hidden fees. Pay for enterprise-like features.</p>
            </div>

            <div className="grid gap-4">
              {plans.map((plan) => (
                <div
                  key={plan.name}
                  className={`relative p-6 rounded-2xl transition-all duration-300 ${
                    plan.highlight
                      ? 'bg-teal-50 border-2 border-teal-200'
                      : 'bg-slate-50 border border-slate-200'
                  }`}
                >
                  {plan.highlight && (
                    <div className="absolute -top-3 left-6 px-3 py-1 bg-teal-500 text-white text-xs font-bold rounded-full">
                      POPULAR
                    </div>
                  )}

                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-lg font-bold text-slate-900">{plan.name}</h3>
                      <div className="flex items-baseline gap-1 mt-1">
                        <span className="text-3xl font-bold text-slate-900">{plan.price}</span>
                        <span className="text-slate-500 text-sm">{plan.period}</span>
                      </div>
                    </div>
                  </div>

                  <ul className="space-y-2">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-sm text-slate-600">
                        <Check size={16} className="text-teal-500 flex-shrink-0" weight="bold" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="mt-6 text-center">
              <a
                href="https://app.timedigits.ca/login"
                className="inline-flex items-center gap-2 bg-slate-900 text-white px-6 py-3 rounded-full font-semibold hover:bg-slate-800 transition-colors w-full justify-center"
              >
                Get Started
                <ArrowRight size={18} weight="bold" />
              </a>
              <p className="text-slate-400 text-sm mt-3">
                90% cheaper than Toggl & Harvest
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

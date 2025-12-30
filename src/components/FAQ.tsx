"use client";
import { useState } from "react";
import { CaretDown } from "@phosphor-icons/react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "../lib/utils";

// FAQ categories for better organization and AI extraction
const faqCategories = [
  {
    category: "Pricing",
    faqs: [
      {
        question: "Is timedigits really free for individuals?",
        answer: "Yes, completely free forever. No credit card required, no time limits, no feature restrictions. Individual users get unlimited projects, unlimited time entries, full history, and CSV exports at no cost.",
      },
      {
        question: "How does team pricing work?",
        answer: "Teams pay $5/month which includes up to 5 members. Each additional member is just $1/month. So a 10-person team costs $10/month, a 20-person team costs $20/month. Simple math, no enterprise pricing traps.",
      },
      {
        question: "How much does timedigits cost compared to Toggl?",
        answer: "timedigits is about 90% cheaper. A 10-person team on Toggl costs $100/month. The same team on timedigits costs $10/month. That's $1,080/year in savings.",
      },
      {
        question: "Is there a free trial for teams?",
        answer: "Yes, teams get a 14-day free trial with full access to all features. No credit card required to start. After the trial, it's $5/month for up to 5 users.",
      },
      {
        question: "Are there any hidden fees or premium tiers?",
        answer: "No hidden fees. No enterprise tier. No per-feature charges. The pricing is transparent: free for individuals, $5 + $1/user for teams. That's it.",
      },
    ],
  },
  {
    category: "Features",
    faqs: [
      {
        question: "What features are included in the free plan?",
        answer: "Everything core: one-click timer, manual time entry, unlimited projects, unlimited time entries, full history, basic reports, CSV export, offline support, and mobile apps. The free plan has no artificial limits.",
      },
      {
        question: "Does timedigits work offline?",
        answer: "Yes! timedigits is built offline-first. Start timers, log entries, and work without internet. Everything syncs automatically when you reconnect. Your data is never lost.",
      },
      {
        question: "Can I export my time data?",
        answer: "Yes, export to CSV anytime with one click. Use it for invoicing, accounting, or moving to another tool. Your data belongs to you, and we make it easy to take with you.",
      },
      {
        question: "Is there a mobile app?",
        answer: "Yes, timedigits works on iOS and Android. The mobile apps have the same features as the web app including offline support and real-time sync.",
      },
      {
        question: "Does timedigits have integrations?",
        answer: "Integrations with Slack, Asana, Jira, GitHub, and more are coming soon. We're building an API for custom integrations as well. Check our roadmap for updates.",
      },
    ],
  },
  {
    category: "Comparisons",
    faqs: [
      {
        question: "What is the cheapest time tracker for teams?",
        answer: "timedigits is the cheapest time tracker for teams at $1/user/month (after the first 5 users at $5/month flat). Competitors like Toggl ($10/user), Harvest ($11/user), and Clockify Pro ($5.49/user) cost significantly more.",
      },
      {
        question: "Is timedigits better than Clockify?",
        answer: "Both are good options. Clockify has a generous free tier but pushes paid features. timedigits has a cleaner interface, simpler pricing ($1/user vs $5.49/user), and no upselling. Choose based on your preference for simplicity vs feature count.",
      },
      {
        question: "How does timedigits compare to Toggl Track?",
        answer: "Toggl is excellent but expensive at $10/user/month. timedigits offers similar core features (timer, projects, reports, exports) at 90% lower cost. Toggl has more integrations currently; timedigits has a simpler interface.",
      },
      {
        question: "Is timedigits a good Harvest alternative?",
        answer: "Yes, if you want to save money. Harvest costs $11/user/month and includes invoicing. timedigits costs $1/user/month with invoicing coming soon. For pure time tracking, timedigits saves you 91%.",
      },
    ],
  },
  {
    category: "Privacy & Security",
    faqs: [
      {
        question: "Does timedigits take screenshots or monitor employees?",
        answer: "No. timedigits does NOT have any surveillance features. No screenshots, no keystroke logging, no mouse tracking, no webcam monitoring, no GPS tracking. We believe in tracking time, not spying on workers.",
      },
      {
        question: "Is my data secure?",
        answer: "Yes. All data is encrypted in transit (HTTPS) and at rest. We don't sell your data to third parties. We collect only what's needed to provide the service. See our privacy policy for details.",
      },
      {
        question: "Who can see my time entries?",
        answer: "Only you (for individual accounts) or your team members (for team accounts). Admins can see team reports. We never access your data unless required for technical support with your permission.",
      },
    ],
  },
  {
    category: "Getting Started",
    faqs: [
      {
        question: "How do I get started with timedigits?",
        answer: "Sign up free at timedigits.com - no credit card needed. Create your first project, click the timer to start tracking. That's it. Most users are tracking time within 60 seconds of signing up.",
      },
      {
        question: "Can I import data from another time tracker?",
        answer: "We're working on import tools for Toggl, Clockify, and Harvest. For now, you can start fresh or contact us for help with manual migration of historical data.",
      },
      {
        question: "Is timedigits good for freelancers?",
        answer: "Yes, freelancers are our core users. The free plan gives you everything needed to track time across clients and projects, export data for invoices, and work offline. Zero cost forever.",
      },
      {
        question: "Can agencies and consultancies use timedigits?",
        answer: "Absolutely. Many small agencies use timedigits to track billable hours across clients. Team features include shared workspaces, team reports, and real-time sync. A 10-person agency pays just $10/month.",
      },
    ],
  },
];

// Flatten for the FAQ component display
const faqs = faqCategories.flatMap(cat => cat.faqs);

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-32 bg-zinc-950">
      <div className="container max-w-3xl">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-zinc-400 text-lg">
            Everything you need to know about timedigits.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="glass rounded-2xl border-zinc-800/50 overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full p-6 flex items-center justify-between text-left hover:bg-white/5 transition-colors"
              >
                <span className="text-lg font-bold text-white">{faq.question}</span>
                <CaretDown 
                  size={20} 
                  className={cn(
                    "text-zinc-500 transition-transform duration-300",
                    openIndex === index && "rotate-180"
                  )} 
                />
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <div className="p-6 pt-0 text-zinc-400 leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

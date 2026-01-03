import { useState, useMemo, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CaretDown, MagnifyingGlass } from '@phosphor-icons/react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { cn } from '../lib/utils';
import {
  faqData,
  categoryLabels,
  searchFAQs,
  getFAQsByCategory
} from '../data/faqData';
import type { FAQCategory } from '../data/faqData';

const categories: FAQCategory[] = [
  'pricing-billing',
  'features-functionality',
  'teams-collaboration',
  'data-privacy',
  'integrations-api',
  'mcp-ai',
  'getting-started',
  'troubleshooting',
  'comparison',
  'technical'
];

export function FAQPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<FAQCategory | 'all'>('all');
  const [openId, setOpenId] = useState<string | null>(null);

  const filteredFAQs = useMemo(() => {
    let faqs = selectedCategory === 'all'
      ? faqData
      : getFAQsByCategory(selectedCategory);

    if (searchQuery.trim()) {
      faqs = searchFAQs(searchQuery);
      if (selectedCategory !== 'all') {
        faqs = faqs.filter(f => f.category === selectedCategory);
      }
    }

    return faqs;
  }, [selectedCategory, searchQuery]);

  // Group FAQs by category for display
  const groupedFAQs = useMemo(() => {
    if (selectedCategory !== 'all') {
      return { [selectedCategory]: filteredFAQs };
    }

    const groups: Record<string, typeof filteredFAQs> = {};
    filteredFAQs.forEach(faq => {
      if (!groups[faq.category]) {
        groups[faq.category] = [];
      }
      groups[faq.category].push(faq);
    });
    return groups;
  }, [filteredFAQs, selectedCategory]);

  useEffect(() => {
    document.title = 'Frequently Asked Questions | timedigits Time Tracking';
  }, []);

  return (
    <>
      <Header />

      <main id="main-content" className="min-h-screen bg-white pt-28">
        {/* Hero */}
        <section className="py-16 border-b border-slate-200">
          <div className="container max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
                Frequently Asked Questions
              </h1>
              <p className="text-xl text-slate-500 max-w-2xl mx-auto">
                Everything you need to know about timedigits. Can't find what you're looking for? Contact us.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Search and Filter */}
        <section className="py-8 border-b border-slate-200 sticky top-16 bg-white/95 backdrop-blur-sm z-10">
          <div className="container max-w-4xl">
            {/* Search */}
            <div className="relative mb-6">
              <MagnifyingGlass
                size={20}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
              />
              <input
                type="text"
                placeholder="Search questions..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 placeholder-slate-400 focus:border-teal-500 focus:outline-none transition-colors text-lg"
              />
            </div>

            {/* Category Pills */}
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setSelectedCategory('all')}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  selectedCategory === 'all'
                    ? 'bg-teal-500 text-white'
                    : 'bg-slate-100 text-slate-500 hover:text-slate-900 hover:bg-slate-200'
                }`}
              >
                All ({faqData.length})
              </button>
              {categories.map(cat => {
                const count = faqData.filter(f => f.category === cat).length;
                return (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                      selectedCategory === cat
                        ? 'bg-teal-500 text-white'
                        : 'bg-slate-100 text-slate-500 hover:text-slate-900 hover:bg-slate-200'
                    }`}
                  >
                    {categoryLabels[cat]} ({count})
                  </button>
                );
              })}
            </div>
          </div>
        </section>

        {/* FAQ List */}
        <section className="py-16">
          <div className="container max-w-4xl">
            {filteredFAQs.length === 0 ? (
              <div className="text-center py-16">
                <p className="text-slate-500 text-lg">No questions found matching your search.</p>
                <button
                  onClick={() => { setSearchQuery(''); setSelectedCategory('all'); }}
                  className="mt-4 text-teal-500 hover:underline"
                >
                  Clear filters
                </button>
              </div>
            ) : (
              Object.entries(groupedFAQs).map(([category, faqs]) => (
                <div key={category} className="mb-12">
                  {selectedCategory === 'all' && (
                    <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                      <span className="w-2 h-2 rounded-full bg-teal-500" />
                      {categoryLabels[category as FAQCategory]}
                    </h2>
                  )}
                  <div className="space-y-3">
                    {faqs.map((faq, index) => (
                      <motion.div
                        key={faq.id}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: Math.min(index * 0.03, 0.3) }}
                        className="bg-slate-50 border border-slate-200 rounded-xl overflow-hidden"
                      >
                        <button
                          onClick={() => setOpenId(openId === faq.id ? null : faq.id)}
                          className="w-full p-5 flex items-start justify-between text-left hover:bg-slate-100 transition-colors gap-4"
                        >
                          <span className="text-slate-900 font-medium leading-relaxed">
                            {faq.question}
                            {faq.priority === 'featured' && (
                              <span className="ml-2 text-xs px-2 py-0.5 rounded-full bg-teal-500/20 text-teal-600">
                                Popular
                              </span>
                            )}
                          </span>
                          <CaretDown
                            size={20}
                            className={cn(
                              'text-slate-400 flex-shrink-0 transition-transform duration-300 mt-1',
                              openId === faq.id && 'rotate-180'
                            )}
                          />
                        </button>

                        <AnimatePresence>
                          {openId === faq.id && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.3, ease: 'easeInOut' }}
                            >
                              <div className="px-5 pb-5 text-slate-500 leading-relaxed border-t border-slate-200 pt-4">
                                {faq.answer}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </motion.div>
                    ))}
                  </div>
                </div>
              ))
            )}
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 border-t border-slate-200">
          <div className="container max-w-2xl text-center">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              Still have questions?
            </h2>
            <p className="text-slate-500 mb-8">
              Can't find what you're looking for? Our team is happy to help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:support@timedigits.com"
                className="px-6 py-3 bg-slate-100 hover:bg-slate-200 text-slate-900 font-medium rounded-lg transition-colors"
              >
                Contact Support
              </a>
              <a
                href="https://app.timedigits.ca/login"
                className="px-6 py-3 bg-teal-500 hover:bg-teal-600 text-white font-medium rounded-lg transition-colors"
              >
                Try timedigits Free
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

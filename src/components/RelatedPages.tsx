import { Link } from 'react-router-dom';
import { ArrowRight } from '@phosphor-icons/react';
import { relatedPages, pageDisplayNames, pagePaths } from '../data/seoData';

interface RelatedPagesProps {
  currentPage: string;
}

export function RelatedPages({ currentPage }: RelatedPagesProps) {
  const related = relatedPages[currentPage];

  if (!related || related.length === 0) {
    return null;
  }

  return (
    <section className="mb-20 max-w-4xl mx-auto">
      <h2 className="text-xl md:text-2xl font-bold text-white text-center mb-8">
        Also Popular
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
        {related.map((pageKey) => (
          <Link
            key={pageKey}
            to={pagePaths[pageKey]}
            className="glass rounded-xl p-4 border border-zinc-800/50 hover:border-teal-500/30 transition-colors group"
          >
            <div className="flex items-center justify-between">
              <span className="text-white font-medium group-hover:text-teal-400 transition-colors">
                {pageDisplayNames[pageKey]}
              </span>
              <ArrowRight size={16} className="text-zinc-500 group-hover:text-teal-400 transition-colors" />
            </div>
            <p className="text-zinc-500 text-sm mt-1">
              Time tracking for {pageDisplayNames[pageKey].toLowerCase()}
            </p>
          </Link>
        ))}
      </div>
    </section>
  );
}

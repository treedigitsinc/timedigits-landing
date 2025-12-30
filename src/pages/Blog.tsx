import { useState, useMemo, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Clock, MagnifyingGlass, Tag } from '@phosphor-icons/react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import {
  allBlogPosts,
  getFeaturedPosts,
  getPostsByCategory,
  searchPosts,
  blogCategories
} from '../data/blog';
import type { BlogCategory } from '../data/blog';

export function Blog() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<BlogCategory | 'all'>('all');

  const featuredPosts = useMemo(() => getFeaturedPosts(3), []);

  const filteredPosts = useMemo(() => {
    let posts = selectedCategory === 'all'
      ? allBlogPosts
      : getPostsByCategory(selectedCategory);

    if (searchQuery.trim()) {
      const searchResults = searchPosts(searchQuery);
      posts = posts.filter(p => searchResults.some(s => s.id === p.id));
    }

    return posts.sort((a, b) =>
      new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
    );
  }, [selectedCategory, searchQuery]);

  const categoryLabels: Record<BlogCategory | 'all', string> = {
    'all': 'All Posts',
    'features': 'Features',
    'comparisons': 'Comparisons',
    'ai-mcp': 'AI & MCP',
    'industries': 'Industries',
    'guides': 'Guides'
  };

  useEffect(() => {
    document.title = 'Blog - Time Tracking Insights & Guides | timedigits';
  }, []);

  return (
    <>
      <Header />

      <main id="main-content" className="min-h-screen bg-zinc-950 pt-24">
        {/* Hero Section */}
        <section className="py-16 border-b border-zinc-800/50">
          <div className="container max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Time Tracking Blog
              </h1>
              <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
                Insights on productivity, time tracking best practices, AI automation, and building efficient workflows.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Featured Posts */}
        <section className="py-16 border-b border-zinc-800/50">
          <div className="container max-w-6xl">
            <h2 className="text-2xl font-bold text-white mb-8">Featured Articles</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {featuredPosts.map((post, index) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="glass rounded-2xl p-6 border border-zinc-800/50 hover:border-teal-500/30 transition-colors group"
                >
                  <div className="flex items-center gap-2 text-xs text-teal-400 mb-3">
                    <span className="px-2 py-1 rounded-full bg-teal-500/10">
                      {categoryLabels[post.category]}
                    </span>
                    <span className="text-zinc-500 flex items-center gap-1">
                      <Clock size={12} />
                      {post.readingTime} min read
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-teal-400 transition-colors">
                    <Link to={`/blog/${post.slug}`}>{post.title}</Link>
                  </h3>
                  <p className="text-zinc-400 text-sm mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <Link
                    to={`/blog/${post.slug}`}
                    className="text-teal-400 text-sm flex items-center gap-1 hover:gap-2 transition-all"
                  >
                    Read more <ArrowRight size={14} />
                  </Link>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* Search and Filter */}
        <section className="py-8 border-b border-zinc-800/50 sticky top-16 bg-zinc-950/95 backdrop-blur-sm z-10">
          <div className="container max-w-6xl">
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
              {/* Search */}
              <div className="relative w-full md:w-80">
                <MagnifyingGlass
                  size={18}
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500"
                />
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 bg-zinc-900 border border-zinc-800 rounded-lg text-white placeholder-zinc-500 focus:border-teal-500 focus:outline-none transition-colors"
                />
              </div>

              {/* Category Filter */}
              <div className="flex flex-wrap gap-2">
                {(['all', ...blogCategories] as const).map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                      selectedCategory === category
                        ? 'bg-teal-500 text-white'
                        : 'bg-zinc-900 text-zinc-400 hover:text-white hover:bg-zinc-800'
                    }`}
                  >
                    {categoryLabels[category]}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* All Posts */}
        <section className="py-16">
          <div className="container max-w-6xl">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-bold text-white">
                {selectedCategory === 'all' ? 'All Articles' : categoryLabels[selectedCategory]}
              </h2>
              <span className="text-zinc-500 text-sm">
                {filteredPosts.length} {filteredPosts.length === 1 ? 'article' : 'articles'}
              </span>
            </div>

            {filteredPosts.length === 0 ? (
              <div className="text-center py-16">
                <p className="text-zinc-400">No articles found matching your criteria.</p>
                <button
                  onClick={() => { setSearchQuery(''); setSelectedCategory('all'); }}
                  className="mt-4 text-teal-400 hover:underline"
                >
                  Clear filters
                </button>
              </div>
            ) : (
              <div className="grid md:grid-cols-2 gap-6">
                {filteredPosts.map((post, index) => (
                  <motion.article
                    key={post.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: Math.min(index * 0.05, 0.5) }}
                    className="glass rounded-xl p-6 border border-zinc-800/50 hover:border-zinc-700 transition-colors group"
                  >
                    <div className="flex items-center gap-2 text-xs mb-3">
                      <span className="px-2 py-1 rounded-full bg-zinc-800 text-zinc-400">
                        {categoryLabels[post.category]}
                      </span>
                      <span className="text-zinc-500 flex items-center gap-1">
                        <Clock size={12} />
                        {post.readingTime} min
                      </span>
                      <span className="text-zinc-600">
                        {new Date(post.publishedAt).toLocaleDateString('en-US', {
                          month: 'short',
                          day: 'numeric',
                          year: 'numeric'
                        })}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2 group-hover:text-teal-400 transition-colors">
                      <Link to={`/blog/${post.slug}`}>{post.title}</Link>
                    </h3>
                    <p className="text-zinc-400 text-sm mb-4 line-clamp-2">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex flex-wrap gap-1">
                        {post.tags.slice(0, 3).map(tag => (
                          <span
                            key={tag}
                            className="text-xs text-zinc-500 flex items-center gap-1"
                          >
                            <Tag size={10} />
                            {tag}
                          </span>
                        ))}
                      </div>
                      <Link
                        to={`/blog/${post.slug}`}
                        className="text-teal-400 text-sm flex items-center gap-1 hover:gap-2 transition-all"
                      >
                        Read <ArrowRight size={14} />
                      </Link>
                    </div>
                  </motion.article>
                ))}
              </div>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

import { useEffect } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Clock, Tag, ArrowRight, CalendarBlank, User } from '@phosphor-icons/react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { getPostBySlug, getRelatedPosts } from '../data/blog';
import type { BlogCategory } from '../data/blog';

export function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? getPostBySlug(slug) : undefined;

  useEffect(() => {
    if (post) {
      document.title = `${post.title} | timedigits Blog`;
    }
  }, [post]);

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  const relatedPosts = getRelatedPosts(post, 3);

  const categoryLabels: Record<BlogCategory, string> = {
    'features': 'Features',
    'comparisons': 'Comparisons',
    'ai-mcp': 'AI & MCP',
    'industries': 'Industries',
    'guides': 'Guides'
  };

  return (
    <>
      <Header />

      <main id="main-content" className="min-h-screen bg-zinc-950 pt-24">
        {/* Article Header */}
        <article className="py-16">
          <div className="container max-w-3xl">
            {/* Breadcrumb */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="mb-8"
            >
              <Link
                to="/blog"
                className="text-zinc-400 hover:text-teal-400 flex items-center gap-2 text-sm transition-colors"
              >
                <ArrowLeft size={16} />
                Back to Blog
              </Link>
            </motion.div>

            {/* Meta */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex flex-wrap items-center gap-3 text-sm mb-6"
            >
              <Link
                to={`/blog?category=${post.category}`}
                className="px-3 py-1 rounded-full bg-teal-500/10 text-teal-400 hover:bg-teal-500/20 transition-colors"
              >
                {categoryLabels[post.category]}
              </Link>
              <span className="text-zinc-500 flex items-center gap-1">
                <Clock size={14} />
                {post.readingTime} min read
              </span>
              <span className="text-zinc-500 flex items-center gap-1">
                <CalendarBlank size={14} />
                {new Date(post.publishedAt).toLocaleDateString('en-US', {
                  month: 'long',
                  day: 'numeric',
                  year: 'numeric'
                })}
              </span>
              <span className="text-zinc-500 flex items-center gap-1">
                <User size={14} />
                {post.author}
              </span>
            </motion.div>

            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight"
            >
              {post.title}
            </motion.h1>

            {/* Excerpt */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-zinc-400 mb-8 leading-relaxed"
            >
              {post.excerpt}
            </motion.p>

            {/* Tags */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="flex flex-wrap gap-2 mb-12 pb-12 border-b border-zinc-800"
            >
              {post.tags.map(tag => (
                <span
                  key={tag}
                  className="px-3 py-1 rounded-full bg-zinc-900 text-zinc-400 text-sm flex items-center gap-1"
                >
                  <Tag size={12} />
                  {tag}
                </span>
              ))}
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="prose prose-invert prose-lg max-w-none
                prose-headings:font-bold prose-headings:text-white
                prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-4
                prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3
                prose-p:text-zinc-300 prose-p:leading-relaxed prose-p:mb-6
                prose-strong:text-white prose-strong:font-semibold
                prose-a:text-teal-400 prose-a:no-underline hover:prose-a:underline
                prose-code:text-teal-300 prose-code:bg-zinc-800 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:text-sm
                prose-pre:bg-zinc-900 prose-pre:border prose-pre:border-zinc-800
                prose-ul:text-zinc-300 prose-ol:text-zinc-300
                prose-li:mb-2
                prose-blockquote:border-l-teal-500 prose-blockquote:text-zinc-400 prose-blockquote:italic"
              dangerouslySetInnerHTML={{ __html: formatContent(post.content) }}
            />

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="mt-16 p-8 rounded-2xl bg-gradient-to-br from-teal-500/10 to-zinc-900 border border-teal-500/20 text-center"
            >
              <h3 className="text-2xl font-bold text-white mb-3">
                Ready to track time smarter?
              </h3>
              <p className="text-zinc-400 mb-6">
                Join thousands of freelancers and teams using timedigits. Free forever for individuals.
              </p>
              <a
                href="https://timedigits.vercel.app/login"
                className="inline-flex items-center gap-2 px-6 py-3 bg-teal-500 hover:bg-teal-400 text-white font-medium rounded-lg transition-colors"
              >
                Start Tracking Free <ArrowRight size={18} />
              </a>
            </motion.div>
          </div>
        </article>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <section className="py-16 border-t border-zinc-800">
            <div className="container max-w-6xl">
              <h2 className="text-2xl font-bold text-white mb-8">Related Articles</h2>
              <div className="grid md:grid-cols-3 gap-6">
                {relatedPosts.map((relatedPost, index) => (
                  <motion.article
                    key={relatedPost.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="glass rounded-xl p-6 border border-zinc-800/50 hover:border-zinc-700 transition-colors group"
                  >
                    <div className="flex items-center gap-2 text-xs text-zinc-500 mb-3">
                      <span className="px-2 py-1 rounded-full bg-zinc-800 text-zinc-400">
                        {categoryLabels[relatedPost.category]}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock size={12} />
                        {relatedPost.readingTime} min
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2 group-hover:text-teal-400 transition-colors">
                      <Link to={`/blog/${relatedPost.slug}`}>{relatedPost.title}</Link>
                    </h3>
                    <p className="text-zinc-400 text-sm line-clamp-2">
                      {relatedPost.excerpt}
                    </p>
                  </motion.article>
                ))}
              </div>
            </div>
          </section>
        )}
      </main>

      <Footer />
    </>
  );
}

// Simple content formatter - converts markdown-style content to HTML
function formatContent(content: string): string {
  return content
    // Headers
    .replace(/^### (.+)$/gm, '<h3>$1</h3>')
    .replace(/^## (.+)$/gm, '<h2>$1</h2>')
    // Bold
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    // Inline code
    .replace(/`([^`]+)`/g, '<code>$1</code>')
    // Links
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2">$1</a>')
    // Paragraphs (double newlines)
    .split(/\n\n+/)
    .map(para => {
      const trimmed = para.trim();
      if (trimmed.startsWith('<h') || trimmed.startsWith('<ul') || trimmed.startsWith('<ol')) {
        return trimmed;
      }
      if (trimmed.startsWith('- ')) {
        const items = trimmed.split('\n').map(line =>
          `<li>${line.replace(/^- /, '')}</li>`
        ).join('');
        return `<ul>${items}</ul>`;
      }
      if (/^\d+\. /.test(trimmed)) {
        const items = trimmed.split('\n').map(line =>
          `<li>${line.replace(/^\d+\. /, '')}</li>`
        ).join('');
        return `<ol>${items}</ol>`;
      }
      return trimmed ? `<p>${trimmed.replace(/\n/g, ' ')}</p>` : '';
    })
    .join('\n');
}

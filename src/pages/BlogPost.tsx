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
                href="https://app.timedigits.ca/login"
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

// Comprehensive content formatter - converts markdown to well-formatted HTML
function formatContent(content: string): string {
  // First, extract code blocks to prevent processing their contents
  const codeBlocks: string[] = [];
  let processed = content.replace(/```(\w*)\n([\s\S]*?)```/g, (_, lang, code) => {
    const index = codeBlocks.length;
    const langClass = lang ? ` class="language-${lang}"` : '';
    codeBlocks.push(`<pre${langClass}><code>${escapeHtml(code.trim())}</code></pre>`);
    return `%%CODEBLOCK_${index}%%`;
  });

  // Process tables before splitting paragraphs
  processed = processed.replace(/(?:^\|.+\|$\n?)+/gm, (tableBlock) => {
    const lines = tableBlock.trim().split('\n').filter(line => line.trim());
    if (lines.length < 2) return tableBlock;

    const parseRow = (row: string): string[] => {
      return row.split('|').slice(1, -1).map(cell => cell.trim());
    };

    const headerCells = parseRow(lines[0]);
    const isHeaderSeparator = /^\|[\s-:]+\|$/.test(lines[1]);

    let html = '<div class="overflow-x-auto my-6"><table class="w-full border-collapse">';

    if (isHeaderSeparator) {
      html += '<thead class="bg-zinc-800"><tr>';
      headerCells.forEach(cell => {
        html += `<th class="border border-zinc-700 px-4 py-3 text-left text-zinc-200 font-semibold">${processInlineMarkdown(cell)}</th>`;
      });
      html += '</tr></thead><tbody>';

      for (let i = 2; i < lines.length; i++) {
        const cells = parseRow(lines[i]);
        html += '<tr class="hover:bg-zinc-800/50">';
        cells.forEach(cell => {
          html += `<td class="border border-zinc-700 px-4 py-3 text-zinc-300">${processInlineMarkdown(cell)}</td>`;
        });
        html += '</tr>';
      }
      html += '</tbody>';
    } else {
      html += '<tbody>';
      lines.forEach(line => {
        const cells = parseRow(line);
        html += '<tr class="hover:bg-zinc-800/50">';
        cells.forEach(cell => {
          html += `<td class="border border-zinc-700 px-4 py-3 text-zinc-300">${processInlineMarkdown(cell)}</td>`;
        });
        html += '</tr>';
      });
      html += '</tbody>';
    }

    html += '</table></div>';
    return `\n\n${html}\n\n`;
  });

  // Process blockquotes
  processed = processed.replace(/^> (.+)$/gm, '<blockquote class="border-l-4 border-teal-500 pl-4 py-2 my-4 text-zinc-400 italic">$1</blockquote>');

  // Process horizontal rules
  processed = processed.replace(/^---+$/gm, '<hr class="border-zinc-700 my-8" />');

  // Headers
  processed = processed
    .replace(/^#### (.+)$/gm, '<h4 class="text-lg font-bold text-white mt-6 mb-3">$1</h4>')
    .replace(/^### (.+)$/gm, '<h3 class="text-xl font-bold text-white mt-8 mb-4">$1</h3>')
    .replace(/^## (.+)$/gm, '<h2 class="text-2xl font-bold text-white mt-12 mb-6">$1</h2>');

  // Process inline markdown
  processed = processInlineMarkdown(processed);

  // Split into blocks and process
  const blocks = processed.split(/\n\n+/);
  const result = blocks.map(block => {
    const trimmed = block.trim();

    // Skip already processed HTML elements
    if (trimmed.startsWith('<h') ||
        trimmed.startsWith('<div') ||
        trimmed.startsWith('<table') ||
        trimmed.startsWith('<blockquote') ||
        trimmed.startsWith('<hr') ||
        trimmed.startsWith('<pre') ||
        trimmed.startsWith('<ul') ||
        trimmed.startsWith('<ol') ||
        trimmed.startsWith('%%CODEBLOCK_')) {
      return trimmed;
    }

    // Process bullet lists
    if (trimmed.startsWith('- ') || trimmed.startsWith('* ')) {
      const items = trimmed.split('\n').map(line => {
        const content = line.replace(/^[-*] /, '');
        return `<li class="mb-2 text-zinc-300">${content}</li>`;
      }).join('');
      return `<ul class="list-disc list-outside ml-6 my-4 space-y-1">${items}</ul>`;
    }

    // Process numbered lists
    if (/^\d+\. /.test(trimmed)) {
      const items = trimmed.split('\n').map(line => {
        const content = line.replace(/^\d+\. /, '');
        return `<li class="mb-2 text-zinc-300">${content}</li>`;
      }).join('');
      return `<ol class="list-decimal list-outside ml-6 my-4 space-y-1">${items}</ol>`;
    }

    // Regular paragraph
    return trimmed ? `<p class="text-zinc-300 leading-relaxed mb-6">${trimmed.replace(/\n/g, ' ')}</p>` : '';
  }).join('\n');

  // Restore code blocks
  let finalResult = result;
  codeBlocks.forEach((codeBlock, index) => {
    finalResult = finalResult.replace(`%%CODEBLOCK_${index}%%`, codeBlock);
  });

  return finalResult;
}

// Process inline markdown: bold, italic, code, links
function processInlineMarkdown(text: string): string {
  return text
    // Bold + Italic
    .replace(/\*\*\*(.+?)\*\*\*/g, '<strong><em>$1</em></strong>')
    // Bold
    .replace(/\*\*(.+?)\*\*/g, '<strong class="text-white">$1</strong>')
    // Italic
    .replace(/\*(.+?)\*/g, '<em>$1</em>')
    // Inline code
    .replace(/`([^`]+)`/g, '<code class="bg-zinc-800 text-teal-300 px-1.5 py-0.5 rounded text-sm font-mono">$1</code>')
    // Links
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" class="text-teal-400 hover:text-teal-300 underline">$1</a>');
}

// Escape HTML special characters
function escapeHtml(text: string): string {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

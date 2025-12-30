// Blog data index - exports all 50 blog posts and helper functions
import type { BlogPost, BlogCategory } from './types';
import { blogCategories } from './types';
import { featurePosts } from './features';
import { comparisonPosts } from './comparisons';
import { aiMcpPosts } from './ai-mcp';
import { industryPosts } from './industries';
import { guidePosts } from './guides';

// Combine all posts
export const allBlogPosts: BlogPost[] = [
  ...featurePosts,
  ...comparisonPosts,
  ...aiMcpPosts,
  ...industryPosts,
  ...guidePosts,
];

// Re-export types
export type { BlogPost, BlogCategory };
export { blogCategories };

// Re-export individual category arrays for direct access
export { featurePosts, comparisonPosts, aiMcpPosts, industryPosts, guidePosts };

// Helper functions

/**
 * Get featured blog posts for homepage display
 */
export function getFeaturedPosts(limit: number = 6): BlogPost[] {
  return allBlogPosts
    .filter(post => post.featured)
    .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
    .slice(0, limit);
}

/**
 * Get posts by category
 */
export function getPostsByCategory(category: BlogCategory): BlogPost[] {
  return allBlogPosts
    .filter(post => post.category === category)
    .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime());
}

/**
 * Get a single post by slug
 */
export function getPostBySlug(slug: string): BlogPost | undefined {
  return allBlogPosts.find(post => post.slug === slug);
}

/**
 * Get related posts based on tags and category
 */
export function getRelatedPosts(post: BlogPost, limit: number = 3): BlogPost[] {
  const otherPosts = allBlogPosts.filter(p => p.id !== post.id);

  // Score posts by relevance
  const scored = otherPosts.map(p => {
    let score = 0;
    // Same category = 3 points
    if (p.category === post.category) score += 3;
    // Shared tags = 1 point each
    const sharedTags = p.tags.filter(t => post.tags.includes(t));
    score += sharedTags.length;
    // Shared keywords = 0.5 points each
    const sharedKeywords = p.keywords.filter(k => post.keywords.includes(k));
    score += sharedKeywords.length * 0.5;
    return { post: p, score };
  });

  return scored
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map(s => s.post);
}

/**
 * Search blog posts by query
 */
export function searchPosts(query: string): BlogPost[] {
  const normalizedQuery = query.toLowerCase().trim();
  if (!normalizedQuery) return [];

  return allBlogPosts
    .map(post => {
      let score = 0;
      const titleLower = post.title.toLowerCase();
      const excerptLower = post.excerpt.toLowerCase();
      const contentLower = post.content.toLowerCase();

      // Title matches score highest
      if (titleLower.includes(normalizedQuery)) score += 10;
      // Excerpt matches score medium
      if (excerptLower.includes(normalizedQuery)) score += 5;
      // Tag matches score medium
      if (post.tags.some(t => t.toLowerCase().includes(normalizedQuery))) score += 5;
      // Keyword matches score medium
      if (post.keywords.some(k => k.toLowerCase().includes(normalizedQuery))) score += 4;
      // Content matches score lowest
      if (contentLower.includes(normalizedQuery)) score += 2;

      return { post, score };
    })
    .filter(item => item.score > 0)
    .sort((a, b) => b.score - a.score)
    .map(item => item.post);
}

/**
 * Get recent posts
 */
export function getRecentPosts(limit: number = 10): BlogPost[] {
  return allBlogPosts
    .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
    .slice(0, limit);
}

/**
 * Get all unique tags from posts
 */
export function getAllTags(): string[] {
  const tags = new Set<string>();
  allBlogPosts.forEach(post => post.tags.forEach(tag => tags.add(tag)));
  return Array.from(tags).sort();
}

/**
 * Get posts by tag
 */
export function getPostsByTag(tag: string): BlogPost[] {
  return allBlogPosts
    .filter(post => post.tags.includes(tag))
    .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime());
}

/**
 * Generate JSON-LD Article schema for a blog post
 */
export function generateArticleSchema(post: BlogPost): object {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": post.title,
    "description": post.excerpt,
    "author": {
      "@type": "Person",
      "name": post.author
    },
    "publisher": {
      "@type": "Organization",
      "name": "timedigits",
      "url": "https://timedigits.com"
    },
    "datePublished": post.publishedAt,
    "dateModified": post.updatedAt || post.publishedAt,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://timedigits.com/blog/${post.slug}`
    },
    "keywords": post.keywords.join(", ")
  };
}

/**
 * Generate sitemap entries for all blog posts
 */
export function getBlogSitemapEntries(): Array<{ url: string; lastmod: string; priority: number }> {
  return allBlogPosts.map(post => ({
    url: `https://timedigits.com/blog/${post.slug}`,
    lastmod: post.updatedAt || post.publishedAt,
    priority: post.featured ? 0.8 : 0.6
  }));
}

// Stats for debugging/admin
export const blogStats = {
  totalPosts: allBlogPosts.length,
  featuredPosts: allBlogPosts.filter(p => p.featured).length,
  byCategory: blogCategories.reduce<Record<BlogCategory, number>>((acc, cat) => {
    acc[cat] = allBlogPosts.filter(p => p.category === cat).length;
    return acc;
  }, {} as Record<BlogCategory, number>),
  totalReadingTime: allBlogPosts.reduce((sum, p) => sum + p.readingTime, 0),
  averageReadingTime: Math.round(allBlogPosts.reduce((sum, p) => sum + p.readingTime, 0) / allBlogPosts.length)
};

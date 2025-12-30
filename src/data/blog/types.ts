// Blog post types and utilities

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: BlogCategory;
  tags: string[];
  keywords: string[];
  author: string;
  publishedAt: string;
  updatedAt?: string;
  readingTime: number;
  featured: boolean;
  relatedPosts?: string[];
}

export type BlogCategory =
  | 'features'
  | 'comparisons'
  | 'industries'
  | 'ai-mcp'
  | 'guides';

// Array of all categories for iteration
export const blogCategories: BlogCategory[] = [
  'features',
  'comparisons',
  'industries',
  'ai-mcp',
  'guides'
];

export const categoryLabels: Record<BlogCategory, string> = {
  'features': 'Product Features',
  'comparisons': 'Comparisons',
  'industries': 'Industry Guides',
  'ai-mcp': 'AI & MCP',
  'guides': 'How-To Guides',
};

export const categoryDescriptions: Record<BlogCategory, string> = {
  'features': 'Deep dives into timedigits features and how to use them effectively',
  'comparisons': 'How timedigits compares to other time tracking tools',
  'industries': 'Time tracking best practices for specific industries and professions',
  'ai-mcp': 'Using AI and MCP to automate your time tracking workflows',
  'guides': 'Step-by-step tutorials for getting the most out of timedigits',
};

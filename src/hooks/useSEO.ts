import { useEffect } from 'react';

interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  ogImage?: string;
  ogType?: 'website' | 'article';
  noindex?: boolean;
}

const BASE_URL = 'https://timedigits.com';
const DEFAULT_OG_IMAGE = `${BASE_URL}/og-image.png`;

export function useSEO({
  title,
  description,
  canonical,
  ogImage = DEFAULT_OG_IMAGE,
  ogType = 'website',
  noindex = false,
}: SEOProps) {
  useEffect(() => {
    // Set document title
    const fullTitle = title.includes('timedigits') ? title : `${title} | timedigits`;
    document.title = fullTitle;

    // Helper to set/create meta tag
    const setMeta = (name: string, content: string, property = false) => {
      const attr = property ? 'property' : 'name';
      let meta = document.querySelector(`meta[${attr}="${name}"]`) as HTMLMetaElement;
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute(attr, name);
        document.head.appendChild(meta);
      }
      meta.content = content;
    };

    // Basic meta tags
    setMeta('description', description);
    if (noindex) {
      setMeta('robots', 'noindex, nofollow');
    } else {
      setMeta('robots', 'index, follow');
    }

    // Open Graph tags
    setMeta('og:title', fullTitle, true);
    setMeta('og:description', description, true);
    setMeta('og:type', ogType, true);
    setMeta('og:image', ogImage, true);
    if (canonical) {
      setMeta('og:url', canonical.startsWith('http') ? canonical : `${BASE_URL}${canonical}`, true);
    }

    // Twitter Card tags
    setMeta('twitter:card', 'summary_large_image');
    setMeta('twitter:title', fullTitle);
    setMeta('twitter:description', description);
    setMeta('twitter:image', ogImage);

    // Canonical link
    if (canonical) {
      let link = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
      if (!link) {
        link = document.createElement('link');
        link.rel = 'canonical';
        document.head.appendChild(link);
      }
      link.href = canonical.startsWith('http') ? canonical : `${BASE_URL}${canonical}`;
    }

    // Cleanup function to restore defaults when component unmounts
    return () => {
      // We don't clean up here since React will handle re-renders
      // and we want SEO tags to persist during navigation
    };
  }, [title, description, canonical, ogImage, ogType, noindex]);
}

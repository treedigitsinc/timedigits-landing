import { useEffect } from 'react';

/**
 * Google Analytics 4 Component
 *
 * To enable analytics:
 * 1. Get your GA4 Measurement ID from Google Analytics
 * 2. Set the environment variable: VITE_GA_MEASUREMENT_ID=G-XXXXXXXXXX
 * 3. Rebuild and deploy
 *
 * For tracking custom events, use trackEvent from src/lib/analytics.ts
 */
export function Analytics() {
  const measurementId = import.meta.env.VITE_GA_MEASUREMENT_ID;

  useEffect(() => {
    if (!measurementId) {
      if (import.meta.env.DEV) {
        console.log('[Analytics] No GA_MEASUREMENT_ID configured. Skipping analytics.');
      }
      return;
    }

    // Load gtag.js script
    const script = document.createElement('script');
    script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
    script.async = true;
    document.head.appendChild(script);

    // Initialize gtag
    window.dataLayer = window.dataLayer || [];
    window.gtag = function gtag(...args: unknown[]) {
      window.dataLayer.push(args);
    };
    window.gtag('js', new Date());
    window.gtag('config', measurementId, {
      // Anonymize IP for GDPR compliance
      anonymize_ip: true,
      // Respect Do Not Track
      allow_google_signals: true,
    });

    return () => {
      // Cleanup script on unmount (unlikely but good practice)
      const existingScript = document.querySelector(`script[src*="${measurementId}"]`);
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, [measurementId]);

  return null;
}

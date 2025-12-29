declare global {
  interface Window {
    dataLayer: unknown[];
    gtag: (...args: unknown[]) => void;
  }
}

/**
 * Track a custom event
 * Use this to track button clicks, form submissions, etc.
 *
 * @example
 * trackEvent('button_click', { button_name: 'start_free' });
 * trackEvent('signup_start');
 */
export function trackEvent(
  eventName: string,
  eventParams?: Record<string, string | number | boolean>
) {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, eventParams);
  }
}

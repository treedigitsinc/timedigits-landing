import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { X } from '@phosphor-icons/react';
import { motion, AnimatePresence } from 'framer-motion';

const COOKIE_CONSENT_KEY = 'cookie-consent';

type ConsentStatus = 'pending' | 'accepted' | 'declined';

export function CookieConsent() {
  const [status, setStatus] = useState<ConsentStatus>('pending');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if user has already made a choice
    const savedConsent = localStorage.getItem(COOKIE_CONSENT_KEY);
    if (savedConsent) {
      setStatus(savedConsent as ConsentStatus);
      setIsVisible(false);
    } else {
      // Small delay before showing banner (less jarring)
      const timer = setTimeout(() => setIsVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem(COOKIE_CONSENT_KEY, 'accepted');
    setStatus('accepted');
    setIsVisible(false);
    // Enable analytics if applicable
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('consent', 'update', {
        analytics_storage: 'granted'
      });
    }
  };

  const handleDecline = () => {
    localStorage.setItem(COOKIE_CONSENT_KEY, 'declined');
    setStatus('declined');
    setIsVisible(false);
    // Disable analytics if applicable
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('consent', 'update', {
        analytics_storage: 'denied'
      });
    }
  };

  const handleDismiss = () => {
    // Dismiss without saving preference (will show again next visit)
    setIsVisible(false);
  };

  if (status !== 'pending') return null;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          className="fixed bottom-4 left-4 right-4 md:left-auto md:right-6 md:bottom-6 md:max-w-sm z-50"
        >
          <div className="bg-white border border-slate-200 rounded-xl p-4 shadow-xl">
            <div className="flex items-start justify-between gap-3">
              <div className="flex-1 min-w-0">
                <p className="text-sm text-slate-600 leading-relaxed">
                  We use cookies to improve your experience.{' '}
                  <Link
                    to="/cookies"
                    className="text-teal-600 hover:text-teal-700 underline underline-offset-2 font-medium"
                  >
                    Learn more
                  </Link>
                </p>
              </div>
              <button
                onClick={handleDismiss}
                className="text-slate-400 hover:text-slate-600 transition-colors p-1 -mr-1 -mt-1"
                aria-label="Dismiss"
              >
                <X size={16} />
              </button>
            </div>
            <div className="flex items-center gap-2 mt-3">
              <button
                onClick={handleAccept}
                className="flex-1 px-3 py-1.5 bg-teal-500 hover:bg-teal-600 text-white text-sm font-medium rounded-lg transition-colors"
              >
                Accept
              </button>
              <button
                onClick={handleDecline}
                className="flex-1 px-3 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-700 text-sm font-medium rounded-lg transition-colors border border-slate-200"
              >
                Decline
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

// Utility to check consent status (for use in analytics)
export function hasAnalyticsConsent(): boolean {
  if (typeof window === 'undefined') return false;
  return localStorage.getItem(COOKIE_CONSENT_KEY) === 'accepted';
}

// Utility to reset consent (for "Cookie Settings" link)
export function resetCookieConsent(): void {
  if (typeof window === 'undefined') return;
  localStorage.removeItem(COOKIE_CONSENT_KEY);
  window.location.reload();
}

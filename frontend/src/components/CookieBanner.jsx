import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Cookie, X } from 'lucide-react';

export const CookieBanner = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('bknx-cookie-consent');
    if (!consent) {
      // Show banner after a short delay
      const timer = setTimeout(() => setIsVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('bknx-cookie-consent', 'accepted');
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem('bknx-cookie-consent', 'declined');
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: 'spring', damping: 25, stiffness: 200 }}
          className="cookie-banner fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6"
          data-testid="cookie-banner"
        >
          <div className="max-w-7xl mx-auto">
            <div className="glass-card rounded-lg p-6 flex flex-col md:flex-row items-start md:items-center gap-4">
              <div className="flex items-start gap-4 flex-1">
                <div className="p-2 rounded-full bg-[#B8974A]/10">
                  <Cookie size={24} className="text-[#B8974A]" strokeWidth={1.5} />
                </div>
                <div>
                  <h4 className="font-heading text-lg text-[#F5F5F0] mb-1">
                    Nous utilisons des cookies
                  </h4>
                  <p className="text-[#A0AAB5] text-sm leading-relaxed">
                    Ce site utilise des cookies pour améliorer votre expérience de navigation. 
                    En continuant, vous acceptez notre{' '}
                    <a href="/politique-confidentialite" className="text-[#B8974A] hover:underline">
                      politique de confidentialité
                    </a>.
                  </p>
                </div>
              </div>
              
              <div className="flex items-center gap-3 w-full md:w-auto">
                <button
                  onClick={handleDecline}
                  data-testid="cookie-decline-btn"
                  className="flex-1 md:flex-none px-4 py-2 text-sm text-[#A0AAB5] hover:text-[#F5F5F0] transition-colors"
                >
                  Refuser
                </button>
                <button
                  onClick={handleAccept}
                  data-testid="cookie-accept-btn"
                  className="flex-1 md:flex-none btn-primary text-sm"
                >
                  Accepter
                </button>
              </div>

              <button
                onClick={handleDecline}
                className="absolute top-4 right-4 md:hidden text-[#A0AAB5] hover:text-[#F5F5F0] transition-colors"
                aria-label="Fermer"
              >
                <X size={20} />
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CookieBanner;

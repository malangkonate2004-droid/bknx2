import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone, Mail } from 'lucide-react';

const LOGO_URL = "https://customer-assets.emergentagent.com/job_bknx-advisory/artifacts/t86pbu5y_logo.png";

const navLinks = [
  { path: '/', label: 'Accueil' },
  { path: '/a-propos', label: 'À propos' },
  { path: '/services', label: 'Services' },
  { path: '/temoignages', label: 'Témoignages' },
  { path: '/contact', label: 'Contact' },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  return (
    <>
      {/* Top bar */}
      <div className="hidden md:block bg-[#0D1B2A] border-b border-[#B8974A]/10">
        <div className="max-w-7xl mx-auto px-6 py-2 flex justify-end items-center gap-6 text-sm">
          <a href="tel:+33616268850" className="flex items-center gap-2 text-[#A0AAB5] hover:text-[#B8974A] transition-colors">
            <Phone size={14} strokeWidth={1.5} />
            <span>+33 6 16 26 88 50</span>
          </a>
          <a href="mailto:bknx.advisory@gmx.fr" className="flex items-center gap-2 text-[#A0AAB5] hover:text-[#B8974A] transition-colors">
            <Mail size={14} strokeWidth={1.5} />
            <span>bknx.advisory@gmx.fr</span>
          </a>
        </div>
      </div>

      {/* Main navbar */}
      <nav
        data-testid="main-navbar"
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#0D1B2A]/95 backdrop-blur-xl shadow-lg border-b border-[#B8974A]/10'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link to="/" data-testid="nav-logo" className="flex-shrink-0">
              <img
                src={LOGO_URL}
                alt="BKNX Advisory"
                className="h-12 w-auto"
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  data-testid={`nav-link-${link.path.replace('/', '') || 'home'}`}
                  className={`nav-link text-sm font-medium tracking-wide ${
                    location.pathname === link.path ? 'text-[#B8974A] active' : 'text-[#F5F5F0]'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                to="/contact"
                data-testid="nav-cta-contact"
                className="btn-primary text-sm"
              >
                Prendre contact
              </Link>
            </div>

            {/* Mobile menu button */}
            <button
              data-testid="mobile-menu-toggle"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-[#F5F5F0] hover:text-[#B8974A] transition-colors"
              aria-label="Menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="mobile-menu fixed inset-0 top-20 z-40 md:hidden"
            data-testid="mobile-menu"
          >
            <div className="flex flex-col p-6 space-y-4">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.path}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Link
                    to={link.path}
                    data-testid={`mobile-nav-link-${link.path.replace('/', '') || 'home'}`}
                    className={`block py-3 text-lg font-medium border-b border-[#B8974A]/10 ${
                      location.pathname === link.path ? 'text-[#B8974A]' : 'text-[#F5F5F0]'
                    }`}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                className="pt-4"
              >
                <Link
                  to="/contact"
                  data-testid="mobile-nav-cta"
                  className="btn-primary block text-center"
                >
                  Prendre contact
                </Link>
              </motion.div>

              {/* Mobile contact info */}
              <div className="pt-8 space-y-4 text-sm text-[#A0AAB5]">
                <a href="tel:+33616268850" className="flex items-center gap-3">
                  <Phone size={16} strokeWidth={1.5} className="text-[#B8974A]" />
                  <span>+33 6 16 26 88 50</span>
                </a>
                <a href="mailto:bknx.advisory@gmx.fr" className="flex items-center gap-3">
                  <Mail size={16} strokeWidth={1.5} className="text-[#B8974A]" />
                  <span>bknx.advisory@gmx.fr</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;

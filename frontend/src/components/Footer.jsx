import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Linkedin, ArrowUpRight } from 'lucide-react';

const LOGO_URL = "https://customer-assets.emergentagent.com/job_bknx-advisory/artifacts/t86pbu5y_logo.png";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer data-testid="main-footer" className="bg-[#0a1420] border-t border-[#B8974A]/10">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand column */}
          <div className="lg:col-span-1">
            <Link to="/" data-testid="footer-logo">
              <img
                src={LOGO_URL}
                alt="BKNX Advisory"
                className="h-10 w-auto mb-6"
              />
            </Link>
            <p className="text-[#A0AAB5] text-sm leading-relaxed mb-6">
              Cabinet de Conseil & Expertise Financière.<br />
              Votre performance financière, notre priorité.
            </p>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[#A0AAB5] hover:text-[#B8974A] transition-colors"
              data-testid="footer-linkedin"
            >
              <Linkedin size={18} strokeWidth={1.5} />
              <span className="text-sm">LinkedIn</span>
            </a>
          </div>

          {/* Services column */}
          <div>
            <h4 className="font-heading text-lg text-[#F5F5F0] mb-6">Services</h4>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/services#audit"
                  data-testid="footer-link-audit"
                  className="text-[#A0AAB5] hover:text-[#B8974A] transition-colors text-sm flex items-center gap-1 group"
                >
                  Audit & Diagnostic
                  <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link
                  to="/services#controle"
                  data-testid="footer-link-controle"
                  className="text-[#A0AAB5] hover:text-[#B8974A] transition-colors text-sm flex items-center gap-1 group"
                >
                  Contrôle de Gestion
                  <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link
                  to="/services#conseil"
                  data-testid="footer-link-conseil"
                  className="text-[#A0AAB5] hover:text-[#B8974A] transition-colors text-sm flex items-center gap-1 group"
                >
                  Conseil & Accompagnement
                  <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link
                  to="/services#comptable"
                  data-testid="footer-link-comptable"
                  className="text-[#A0AAB5] hover:text-[#B8974A] transition-colors text-sm flex items-center gap-1 group"
                >
                  Exercice Comptable
                  <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Navigation column */}
          <div>
            <h4 className="font-heading text-lg text-[#F5F5F0] mb-6">Navigation</h4>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/a-propos"
                  data-testid="footer-link-about"
                  className="text-[#A0AAB5] hover:text-[#B8974A] transition-colors text-sm"
                >
                  À propos
                </Link>
              </li>
              <li>
                <Link
                  to="/temoignages"
                  data-testid="footer-link-testimonials"
                  className="text-[#A0AAB5] hover:text-[#B8974A] transition-colors text-sm"
                >
                  Témoignages
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  data-testid="footer-link-contact"
                  className="text-[#A0AAB5] hover:text-[#B8974A] transition-colors text-sm"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  to="/mentions-legales"
                  data-testid="footer-link-legal"
                  className="text-[#A0AAB5] hover:text-[#B8974A] transition-colors text-sm"
                >
                  Mentions légales
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact column */}
          <div>
            <h4 className="font-heading text-lg text-[#F5F5F0] mb-6">Contact</h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="tel:+33616268850"
                  data-testid="footer-phone"
                  className="flex items-start gap-3 text-[#A0AAB5] hover:text-[#B8974A] transition-colors text-sm"
                >
                  <Phone size={16} strokeWidth={1.5} className="text-[#B8974A] mt-0.5" />
                  <span>+33 6 16 26 88 50</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:bknx.advisory@gmx.fr"
                  data-testid="footer-email"
                  className="flex items-start gap-3 text-[#A0AAB5] hover:text-[#B8974A] transition-colors text-sm"
                >
                  <Mail size={16} strokeWidth={1.5} className="text-[#B8974A] mt-0.5" />
                  <span>bknx.advisory@gmx.fr</span>
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3 text-[#A0AAB5] text-sm">
                  <MapPin size={16} strokeWidth={1.5} className="text-[#B8974A] mt-0.5" />
                  <span>Paris, France</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-[#B8974A]/10">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[#A0AAB5] text-xs">
            © {currentYear} BKNX Advisory. Tous droits réservés.
          </p>
          <div className="flex items-center gap-6 text-xs">
            <Link
              to="/mentions-legales"
              className="text-[#A0AAB5] hover:text-[#B8974A] transition-colors"
            >
              Mentions légales
            </Link>
            <Link
              to="/politique-confidentialite"
              className="text-[#A0AAB5] hover:text-[#B8974A] transition-colors"
            >
              Politique de confidentialité
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

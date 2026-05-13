import { motion } from 'framer-motion';

export const LegalNotice = () => {
  return (
    <div data-testid="legal-page">
      {/* Hero Section */}
      <section className="py-20 bg-[#0D1B2A]">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="font-heading text-4xl sm:text-5xl text-[#F5F5F0] mb-6">
              Mentions légales
            </h1>
            <div className="gold-line mx-auto" />
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-[#162A42]/30">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="prose prose-invert max-w-none"
          >
            <div className="glass-card rounded-lg p-8 mb-8">
              <h2 className="font-heading text-2xl text-[#F5F5F0] mb-4">1. Éditeur du site</h2>
              <p className="text-[#A0AAB5] leading-relaxed">
                <strong className="text-[#F5F5F0]">BKNX Advisory</strong><br />
                Cabinet de Conseil & Expertise Financière<br />
                Paris, France<br /><br />
                Email : bknx.advisory@gmx.fr<br />
                Téléphone : +33 6 16 26 88 50
              </p>
            </div>

            <div className="glass-card rounded-lg p-8 mb-8">
              <h2 className="font-heading text-2xl text-[#F5F5F0] mb-4">2. Hébergement</h2>
              <p className="text-[#A0AAB5] leading-relaxed">
                Ce site est hébergé par :<br />
                [Nom de l'hébergeur]<br />
                [Adresse de l'hébergeur]
              </p>
            </div>

            <div className="glass-card rounded-lg p-8 mb-8">
              <h2 className="font-heading text-2xl text-[#F5F5F0] mb-4">3. Propriété intellectuelle</h2>
              <p className="text-[#A0AAB5] leading-relaxed">
                L'ensemble de ce site relève de la législation française et internationale sur le droit d'auteur 
                et la propriété intellectuelle. Tous les droits de reproduction sont réservés, y compris pour 
                les documents téléchargeables et les représentations iconographiques et photographiques.
              </p>
              <p className="text-[#A0AAB5] leading-relaxed mt-4">
                La reproduction de tout ou partie de ce site sur un support électronique ou autre quel qu'il soit 
                est formellement interdite sauf autorisation expresse de BKNX Advisory.
              </p>
            </div>

            <div className="glass-card rounded-lg p-8 mb-8">
              <h2 className="font-heading text-2xl text-[#F5F5F0] mb-4">4. Données personnelles</h2>
              <p className="text-[#A0AAB5] leading-relaxed">
                Conformément à la loi « Informatique et Libertés » du 6 janvier 1978 modifiée et au Règlement 
                Général sur la Protection des Données (RGPD), vous disposez d'un droit d'accès, de rectification, 
                de suppression et d'opposition aux données personnelles vous concernant.
              </p>
              <p className="text-[#A0AAB5] leading-relaxed mt-4">
                Pour exercer ces droits, vous pouvez nous contacter à l'adresse : bknx.advisory@gmx.fr
              </p>
            </div>

            <div className="glass-card rounded-lg p-8 mb-8">
              <h2 className="font-heading text-2xl text-[#F5F5F0] mb-4">5. Cookies</h2>
              <p className="text-[#A0AAB5] leading-relaxed">
                Ce site utilise des cookies pour améliorer l'expérience utilisateur. En continuant à naviguer 
                sur ce site, vous acceptez l'utilisation de cookies conformément à notre politique de confidentialité.
              </p>
            </div>

            <div className="glass-card rounded-lg p-8">
              <h2 className="font-heading text-2xl text-[#F5F5F0] mb-4">6. Responsabilité</h2>
              <p className="text-[#A0AAB5] leading-relaxed">
                Les informations contenues sur ce site sont aussi précises que possible et le site est 
                périodiquement remis à jour, mais peut toutefois contenir des inexactitudes, des omissions 
                ou des lacunes. BKNX Advisory ne pourra être tenue responsable des dommages directs ou 
                indirects pouvant résulter de l'accès ou de l'utilisation de ce site.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default LegalNotice;

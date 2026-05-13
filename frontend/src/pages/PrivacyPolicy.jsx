import { motion } from 'framer-motion';

export const PrivacyPolicy = () => {
  return (
    <div data-testid="privacy-page">
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
              Politique de confidentialité
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
          >
            <div className="glass-card rounded-lg p-8 mb-8">
              <h2 className="font-heading text-2xl text-[#F5F5F0] mb-4">1. Introduction</h2>
              <p className="text-[#A0AAB5] leading-relaxed">
                BKNX Advisory s'engage à protéger la vie privée des utilisateurs de son site web. 
                Cette politique de confidentialité explique comment nous collectons, utilisons et 
                protégeons vos données personnelles.
              </p>
            </div>

            <div className="glass-card rounded-lg p-8 mb-8">
              <h2 className="font-heading text-2xl text-[#F5F5F0] mb-4">2. Données collectées</h2>
              <p className="text-[#A0AAB5] leading-relaxed mb-4">
                Nous pouvons collecter les informations suivantes :
              </p>
              <ul className="text-[#A0AAB5] space-y-2 list-disc pl-6">
                <li>Nom et prénom</li>
                <li>Adresse email</li>
                <li>Numéro de téléphone</li>
                <li>Informations relatives à votre entreprise</li>
                <li>Données de navigation (cookies)</li>
              </ul>
            </div>

            <div className="glass-card rounded-lg p-8 mb-8">
              <h2 className="font-heading text-2xl text-[#F5F5F0] mb-4">3. Utilisation des données</h2>
              <p className="text-[#A0AAB5] leading-relaxed mb-4">
                Vos données personnelles sont utilisées pour :
              </p>
              <ul className="text-[#A0AAB5] space-y-2 list-disc pl-6">
                <li>Répondre à vos demandes de contact</li>
                <li>Vous fournir des informations sur nos services</li>
                <li>Améliorer notre site web et nos services</li>
                <li>Respecter nos obligations légales</li>
              </ul>
            </div>

            <div className="glass-card rounded-lg p-8 mb-8">
              <h2 className="font-heading text-2xl text-[#F5F5F0] mb-4">4. Protection des données</h2>
              <p className="text-[#A0AAB5] leading-relaxed">
                Nous mettons en œuvre des mesures de sécurité appropriées pour protéger vos données 
                personnelles contre tout accès non autorisé, modification, divulgation ou destruction. 
                Vos données sont stockées sur des serveurs sécurisés et ne sont accessibles qu'au 
                personnel autorisé.
              </p>
            </div>

            <div className="glass-card rounded-lg p-8 mb-8">
              <h2 className="font-heading text-2xl text-[#F5F5F0] mb-4">5. Cookies</h2>
              <p className="text-[#A0AAB5] leading-relaxed">
                Notre site utilise des cookies pour améliorer votre expérience de navigation. 
                Vous pouvez configurer votre navigateur pour refuser les cookies, mais certaines 
                fonctionnalités du site pourraient ne pas fonctionner correctement.
              </p>
            </div>

            <div className="glass-card rounded-lg p-8 mb-8">
              <h2 className="font-heading text-2xl text-[#F5F5F0] mb-4">6. Vos droits</h2>
              <p className="text-[#A0AAB5] leading-relaxed mb-4">
                Conformément au RGPD, vous disposez des droits suivants :
              </p>
              <ul className="text-[#A0AAB5] space-y-2 list-disc pl-6">
                <li>Droit d'accès à vos données personnelles</li>
                <li>Droit de rectification de vos données</li>
                <li>Droit à l'effacement de vos données</li>
                <li>Droit à la limitation du traitement</li>
                <li>Droit à la portabilité de vos données</li>
                <li>Droit d'opposition au traitement</li>
              </ul>
            </div>

            <div className="glass-card rounded-lg p-8 mb-8">
              <h2 className="font-heading text-2xl text-[#F5F5F0] mb-4">7. Conservation des données</h2>
              <p className="text-[#A0AAB5] leading-relaxed">
                Nous conservons vos données personnelles pendant la durée nécessaire aux finalités 
                pour lesquelles elles ont été collectées, dans le respect des obligations légales 
                de conservation.
              </p>
            </div>

            <div className="glass-card rounded-lg p-8">
              <h2 className="font-heading text-2xl text-[#F5F5F0] mb-4">8. Contact</h2>
              <p className="text-[#A0AAB5] leading-relaxed">
                Pour toute question concernant cette politique de confidentialité ou pour exercer 
                vos droits, vous pouvez nous contacter :<br /><br />
                <strong className="text-[#F5F5F0]">BKNX Advisory</strong><br />
                Email : bknx.advisory@gmx.fr<br />
                Téléphone : +33 6 16 26 88 50
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicy;

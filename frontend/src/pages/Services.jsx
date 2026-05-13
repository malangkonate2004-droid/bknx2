import { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  ClipboardCheck, 
  BarChart3, 
  Lightbulb, 
  Calculator,
  ArrowRight,
  Check
} from 'lucide-react';

const FINANCE_IMAGE = "https://static.prod-images.emergentagent.com/jobs/1fa3edd5-8750-4787-92f6-5265f6f884b5/images/9150311581b01dd843bb544a88366fb8e490fbb41580914d6e6a08c1c4b0310c.png";
const ABSTRACT_TEXTURE = "https://static.prod-images.emergentagent.com/jobs/1fa3edd5-8750-4787-92f6-5265f6f884b5/images/9bda502e06be563a7a25d1d4b3061746a9878c031661ae09ddc6efd5fda415d4.png";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

const services = [
  {
    id: 'audit',
    icon: ClipboardCheck,
    title: 'Audit & Diagnostic',
    subtitle: 'Évaluez et optimisez vos processus',
    description: 'Notre équipe réalise des audits approfondis pour identifier les forces et les axes d\'amélioration de votre organisation. Nous vous fournissons un diagnostic clair et des recommandations actionnables.',
    features: [
      'Audit organisationnel complet',
      'Diagnostic de performance financière',
      'Évaluation du contrôle interne',
      'Revue des processus métier',
      'Cartographie des risques',
      'Benchmark sectoriel'
    ],
    image: FINANCE_IMAGE
  },
  {
    id: 'controle',
    icon: BarChart3,
    title: 'Contrôle de Gestion',
    subtitle: 'Pilotez votre performance',
    description: 'Nous mettons en place les outils et processus nécessaires pour piloter efficacement votre activité. Tableaux de bord, KPIs, reporting : prenez les bonnes décisions au bon moment.',
    features: [
      'Définition et suivi de KPIs pertinents',
      'Conception de tableaux de bord',
      'Élaboration budgétaire',
      'Analyse des écarts et variances',
      'Reporting financier et opérationnel',
      'Analyse des coûts et rentabilité'
    ],
    image: null
  },
  {
    id: 'conseil',
    icon: Lightbulb,
    title: 'Conseil & Accompagnement',
    subtitle: 'Transformez votre entreprise',
    description: 'De la stratégie à l\'opérationnel, nous vous accompagnons dans vos projets de transformation. Notre approche pragmatique garantit des résultats concrets et durables.',
    features: [
      'Optimisation des processus',
      'Accompagnement à la mise en place d\'ERP',
      'Formation des équipes financières',
      'Définition de la stratégie financière',
      'Conduite du changement',
      'Business plan et modélisation'
    ],
    image: ABSTRACT_TEXTURE
  },
  {
    id: 'comptable',
    icon: Calculator,
    title: 'Exercice Comptable',
    subtitle: 'Sécurisez vos obligations',
    description: 'Nous prenons en charge l\'ensemble de vos obligations comptables et fiscales. Concentrez-vous sur votre cœur de métier, nous gérons le reste avec rigueur et expertise.',
    features: [
      'Tenue comptable complète',
      'Établissement des comptes annuels',
      'Déclarations fiscales et sociales',
      'Gestion de la trésorerie',
      'Gestion de la paie',
      'Préparation des clôtures'
    ],
    image: null
  }
];

export const Services = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.slice(1));
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
      }
    }
  }, [location]);

  return (
    <div data-testid="services-page">
      {/* Hero Section */}
      <section className="py-20 bg-[#0D1B2A]">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <p className="text-[#B8974A] text-sm uppercase tracking-[0.2em] mb-4">Nos services</p>
            <h1 className="font-heading text-4xl sm:text-5xl text-[#F5F5F0] mb-6">
              Expertise financière sur mesure
            </h1>
            <div className="gold-line mx-auto mb-6" />
            <p className="text-[#A0AAB5] text-lg max-w-3xl mx-auto">
              Découvrez nos quatre pôles d'expertise conçus pour répondre à l'ensemble 
              de vos besoins en conseil et gestion financière.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Detail Sections */}
      {services.map((service, index) => (
        <section
          key={service.id}
          id={service.id}
          data-testid={`service-section-${service.id}`}
          className={`py-20 ${index % 2 === 0 ? 'bg-[#162A42]/30' : 'bg-[#0D1B2A]'}`}
        >
          <div className="max-w-7xl mx-auto px-6">
            <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
              index % 2 === 1 ? 'lg:flex-row-reverse' : ''
            }`}>
              {/* Content */}
              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className={index % 2 === 1 ? 'lg:order-2' : ''}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-lg bg-[#B8974A]/10 flex items-center justify-center">
                    <service.icon size={28} className="text-[#B8974A]" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h2 className="font-heading text-3xl text-[#F5F5F0]">{service.title}</h2>
                    <p className="text-[#B8974A] text-sm">{service.subtitle}</p>
                  </div>
                </div>

                <p className="text-[#A0AAB5] leading-relaxed mb-8">
                  {service.description}
                </p>

                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, featureIndex) => (
                    <li 
                      key={featureIndex}
                      className="flex items-start gap-3 text-[#F5F5F0]"
                    >
                      <Check size={18} className="text-[#B8974A] mt-0.5 flex-shrink-0" strokeWidth={1.5} />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  to="/contact"
                  data-testid={`service-cta-${service.id}`}
                  className="btn-primary inline-flex items-center gap-2 group"
                >
                  Demander un devis
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>

              {/* Image or Visual */}
              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? 20 : -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className={`relative ${index % 2 === 1 ? 'lg:order-1' : ''}`}
              >
                {service.image ? (
                  <div className="aspect-[4/3] rounded-lg overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ) : (
                  <div className="aspect-[4/3] rounded-lg glass-card flex items-center justify-center">
                    <service.icon size={120} className="text-[#B8974A]/20" strokeWidth={0.5} />
                  </div>
                )}
                <div className={`absolute -bottom-6 ${index % 2 === 0 ? '-right-6' : '-left-6'} w-32 h-32 border-2 border-[#B8974A]/30 rounded-lg -z-10`} />
              </motion.div>
            </div>
          </div>
        </section>
      ))}

      {/* CTA Section */}
      <section className="py-20 bg-[#0D1B2A]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-heading text-3xl sm:text-4xl text-[#F5F5F0] mb-6">
              Un besoin spécifique ?
            </h2>
            <p className="text-[#A0AAB5] text-lg mb-8 max-w-2xl mx-auto">
              Chaque entreprise est unique. Contactez-nous pour discuter de vos enjeux 
              et découvrir comment nous pouvons vous accompagner.
            </p>
            <Link
              to="/contact"
              data-testid="services-contact-cta"
              className="btn-primary inline-flex items-center gap-2 group"
            >
              Discutons de votre projet
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services;

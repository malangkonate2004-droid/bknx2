import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Shield, 
  Lock, 
  Award, 
  ArrowRight, 
  ClipboardCheck, 
  BarChart3, 
  Lightbulb, 
  Calculator,
  Quote,
  Users,
  Briefcase,
  TrendingUp
} from 'lucide-react';

const HERO_BG = "https://static.prod-images.emergentagent.com/jobs/1fa3edd5-8750-4787-92f6-5265f6f884b5/images/d5b92a6323a8d1374024ff6bf255ab811d120f3771659ecfe43b46e41ca420fe.png";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

const values = [
  {
    icon: Shield,
    title: 'Rigueur',
    description: 'Une approche méthodique et précise pour des résultats fiables.'
  },
  {
    icon: Lock,
    title: 'Confidentialité',
    description: 'Protection absolue de vos données et informations sensibles.'
  },
  {
    icon: Award,
    title: 'Expertise',
    description: 'Des compétences pointues au service de votre performance.'
  }
];

const services = [
  {
    icon: ClipboardCheck,
    title: 'Audit & Diagnostic',
    description: 'Évaluation approfondie de vos processus financiers et organisationnels.',
    link: '/services#audit'
  },
  {
    icon: BarChart3,
    title: 'Contrôle de Gestion',
    description: 'Pilotage de la performance avec des tableaux de bord et KPIs pertinents.',
    link: '/services#controle'
  },
  {
    icon: Lightbulb,
    title: 'Conseil & Accompagnement',
    description: 'Stratégies sur mesure pour optimiser vos processus et votre croissance.',
    link: '/services#conseil'
  },
  {
    icon: Calculator,
    title: 'Exercice Comptable',
    description: 'Gestion complète de votre comptabilité, fiscalité et trésorerie.',
    link: '/services#comptable'
  }
];

const metrics = [
  { value: '150+', label: 'Clients accompagnés', icon: Users },
  { value: '15', label: "Années d'expérience", icon: Briefcase },
  { value: '98%', label: 'Taux de satisfaction', icon: TrendingUp }
];

const testimonials = [
  {
    quote: "BKNX Advisory a transformé notre vision financière. Leur expertise en contrôle de gestion nous a permis d'optimiser nos coûts de 25%.",
    author: "Marie Dupont",
    role: "Directrice Financière",
    company: "Tech Solutions SAS"
  },
  {
    quote: "Un accompagnement de qualité et une équipe à l'écoute. Leur rigueur et professionnalisme font toute la différence.",
    author: "Jean-Pierre Martin",
    role: "CEO",
    company: "Groupe Industriel Martin"
  }
];

export const Home = () => {
  return (
    <div data-testid="home-page">
      {/* Hero Section */}
      <section 
        data-testid="hero-section"
        className="relative min-h-[90vh] flex items-center justify-center overflow-hidden"
      >
        {/* Background */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${HERO_BG})` }}
        />
        <div className="hero-overlay absolute inset-0" />
        
        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-[#B8974A] text-sm uppercase tracking-[0.2em] mb-6 font-medium">
              Cabinet de Conseil & Expertise Financière
            </p>
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl text-[#F5F5F0] mb-6 leading-tight">
              Votre performance financière,
              <br />
              <span className="text-gradient-gold">notre priorité.</span>
            </h1>
            <p className="text-[#A0AAB5] text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
              Audit, Contrôle de Gestion, Conseil et Comptabilité — 
              Des solutions sur mesure pour piloter et optimiser vos finances.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/contact"
                data-testid="hero-cta-contact"
                className="btn-primary inline-flex items-center gap-2 group"
              >
                Prendre contact
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/services"
                data-testid="hero-cta-services"
                className="btn-secondary inline-flex items-center gap-2"
              >
                Découvrir nos services
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div 
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <div className="w-6 h-10 rounded-full border-2 border-[#B8974A]/30 flex items-start justify-center p-2">
            <div className="w-1.5 h-3 bg-[#B8974A] rounded-full" />
          </div>
        </motion.div>
      </section>

      {/* Values Section */}
      <section data-testid="values-section" className="py-20 bg-[#0D1B2A]">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                variants={fadeInUp}
                className="value-card rounded-lg p-8 text-center"
                data-testid={`value-card-${index}`}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#B8974A]/10 mb-6">
                  <value.icon size={28} className="text-[#B8974A]" strokeWidth={1.5} />
                </div>
                <h3 className="font-heading text-2xl text-[#F5F5F0] mb-3">{value.title}</h3>
                <p className="text-[#A0AAB5] text-sm leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Metrics Section */}
      <section data-testid="metrics-section" className="py-20 bg-[#162A42]/50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {metrics.map((metric, index) => (
              <motion.div
                key={metric.label}
                variants={fadeInUp}
                className="text-center"
                data-testid={`metric-${index}`}
              >
                <metric.icon size={32} className="text-[#B8974A] mx-auto mb-4" strokeWidth={1} />
                <p className="metric-value mb-2">{metric.value}</p>
                <p className="text-[#A0AAB5] text-sm uppercase tracking-wider">{metric.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section data-testid="services-section" className="py-20 bg-[#0D1B2A]">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-[#B8974A] text-sm uppercase tracking-[0.2em] mb-4">Nos expertises</p>
            <h2 className="font-heading text-3xl sm:text-4xl text-[#F5F5F0] mb-4">
              Des services adaptés à vos besoins
            </h2>
            <div className="gold-line mx-auto" />
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                variants={fadeInUp}
              >
                <Link
                  to={service.link}
                  className="service-card glass-card rounded-lg p-8 block group"
                  data-testid={`service-card-${index}`}
                >
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0 w-14 h-14 rounded-lg bg-[#B8974A]/10 flex items-center justify-center group-hover:bg-[#B8974A]/20 transition-colors">
                      <service.icon size={26} className="text-[#B8974A]" strokeWidth={1.5} />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-heading text-xl text-[#F5F5F0] mb-2 group-hover:text-[#B8974A] transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-[#A0AAB5] text-sm leading-relaxed mb-4">
                        {service.description}
                      </p>
                      <span className="inline-flex items-center gap-2 text-[#B8974A] text-sm font-medium">
                        En savoir plus
                        <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link
              to="/services"
              data-testid="services-cta"
              className="btn-secondary inline-flex items-center gap-2"
            >
              Voir tous nos services
              <ArrowRight size={16} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Preview */}
      <section data-testid="testimonials-section" className="py-20 bg-[#162A42]/30">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-[#B8974A] text-sm uppercase tracking-[0.2em] mb-4">Témoignages</p>
            <h2 className="font-heading text-3xl sm:text-4xl text-[#F5F5F0] mb-4">
              Ce que disent nos clients
            </h2>
            <div className="gold-line mx-auto" />
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="testimonial-card rounded-lg p-8"
                data-testid={`testimonial-${index}`}
              >
                <Quote size={32} className="text-[#B8974A]/30 mb-4" strokeWidth={1} />
                <p className="text-[#F5F5F0] leading-relaxed mb-6 italic">
                  "{testimonial.quote}"
                </p>
                <div>
                  <p className="text-[#B8974A] font-medium">{testimonial.author}</p>
                  <p className="text-[#A0AAB5] text-sm">
                    {testimonial.role} — {testimonial.company}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link
              to="/temoignages"
              data-testid="testimonials-cta"
              className="btn-secondary inline-flex items-center gap-2"
            >
              Voir tous les témoignages
              <ArrowRight size={16} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section data-testid="cta-section" className="py-20 bg-[#0D1B2A]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-heading text-3xl sm:text-4xl text-[#F5F5F0] mb-6">
              Prêt à optimiser vos performances ?
            </h2>
            <p className="text-[#A0AAB5] text-lg mb-8 max-w-2xl mx-auto">
              Parlons de votre projet et découvrez comment BKNX Advisory peut vous accompagner 
              vers l'excellence financière.
            </p>
            <Link
              to="/contact"
              data-testid="final-cta"
              className="btn-primary inline-flex items-center gap-2 group text-lg px-8 py-4"
            >
              Parlons de votre projet
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;

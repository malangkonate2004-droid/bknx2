import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Quote, ArrowRight, Star } from 'lucide-react';

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

const testimonials = [
  {
    quote: "BKNX Advisory a transformé notre vision financière. Leur expertise en contrôle de gestion nous a permis d'optimiser nos coûts de 25% en seulement 6 mois.",
    author: "Marie Dupont",
    role: "Directrice Financière",
    company: "Tech Solutions SAS",
    sector: "Technologie",
    featured: true
  },
  {
    quote: "Un accompagnement de qualité et une équipe à l'écoute. Leur rigueur et professionnalisme font toute la différence dans notre gestion quotidienne.",
    author: "Jean-Pierre Martin",
    role: "CEO",
    company: "Groupe Industriel Martin",
    sector: "Industrie",
    featured: true
  },
  {
    quote: "L'audit réalisé par BKNX nous a permis d'identifier des axes d'amélioration que nous n'avions jamais envisagés. Un travail remarquable.",
    author: "Sophie Leroy",
    role: "Directrice Générale",
    company: "Retail Excellence",
    sector: "Distribution",
    featured: false
  },
  {
    quote: "Leur approche pragmatique et leur connaissance du terrain font de BKNX un partenaire de confiance pour notre développement.",
    author: "François Dubois",
    role: "Président",
    company: "Dubois Holding",
    sector: "Immobilier",
    featured: false
  },
  {
    quote: "La mise en place du contrôle de gestion avec BKNX a été un tournant pour notre PME. Nous pilotons maintenant notre activité avec sérénité.",
    author: "Catherine Bernard",
    role: "Gérante",
    company: "Bernard & Associés",
    sector: "Services",
    featured: false
  },
  {
    quote: "Professionnalisme, réactivité et expertise : BKNX Advisory coche toutes les cases du partenaire financier idéal.",
    author: "Philippe Moreau",
    role: "Directeur Administratif",
    company: "Groupe Santé Plus",
    sector: "Santé",
    featured: false
  },
  {
    quote: "L'accompagnement sur notre projet ERP a été exemplaire. L'équipe BKNX a su s'adapter à nos contraintes et nos délais.",
    author: "Isabelle Petit",
    role: "DAF",
    company: "LogiTech France",
    sector: "Logistique",
    featured: false
  },
  {
    quote: "Grâce à BKNX, nous avons enfin une vision claire de notre rentabilité par activité. Un outil de décision indispensable.",
    author: "Laurent Blanc",
    role: "Directeur Commercial",
    company: "MultiServices Pro",
    sector: "Services B2B",
    featured: false
  }
];

const featuredTestimonials = testimonials.filter(t => t.featured);
const otherTestimonials = testimonials.filter(t => !t.featured);

export const Testimonials = () => {
  return (
    <div data-testid="testimonials-page">
      {/* Hero Section */}
      <section className="py-20 bg-[#0D1B2A]">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <p className="text-[#B8974A] text-sm uppercase tracking-[0.2em] mb-4">Témoignages</p>
            <h1 className="font-heading text-4xl sm:text-5xl text-[#F5F5F0] mb-6">
              Ils nous font confiance
            </h1>
            <div className="gold-line mx-auto mb-6" />
            <p className="text-[#A0AAB5] text-lg max-w-3xl mx-auto">
              Découvrez les retours d'expérience de nos clients et comment BKNX Advisory 
              les accompagne vers l'excellence financière.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Testimonials */}
      <section data-testid="featured-testimonials" className="py-20 bg-[#162A42]/30">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {featuredTestimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="glass-card rounded-lg p-8 relative"
                data-testid={`featured-testimonial-${index}`}
              >
                <div className="absolute top-6 right-6 flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} className="text-[#B8974A] fill-[#B8974A]" />
                  ))}
                </div>
                
                <Quote size={40} className="text-[#B8974A]/20 mb-4" strokeWidth={1} />
                
                <p className="text-[#F5F5F0] text-lg leading-relaxed mb-6 italic">
                  "{testimonial.quote}"
                </p>
                
                <div className="border-t border-[#B8974A]/10 pt-6">
                  <p className="text-[#B8974A] font-medium text-lg">{testimonial.author}</p>
                  <p className="text-[#A0AAB5] text-sm">
                    {testimonial.role} — {testimonial.company}
                  </p>
                  <span className="inline-block mt-3 px-3 py-1 rounded-full bg-[#B8974A]/10 text-[#B8974A] text-xs">
                    {testimonial.sector}
                  </span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Other Testimonials Grid */}
      <section data-testid="testimonials-grid" className="py-20 bg-[#0D1B2A]">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-heading text-2xl sm:text-3xl text-[#F5F5F0] mb-4">
              Plus de témoignages
            </h2>
            <div className="gold-line mx-auto" />
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {otherTestimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="testimonial-card rounded-lg p-6"
                data-testid={`testimonial-${index}`}
              >
                <Quote size={24} className="text-[#B8974A]/20 mb-3" strokeWidth={1} />
                
                <p className="text-[#F5F5F0] text-sm leading-relaxed mb-4 italic">
                  "{testimonial.quote}"
                </p>
                
                <div className="border-t border-[#B8974A]/10 pt-4">
                  <p className="text-[#B8974A] font-medium text-sm">{testimonial.author}</p>
                  <p className="text-[#A0AAB5] text-xs">
                    {testimonial.role}
                  </p>
                  <p className="text-[#A0AAB5] text-xs">
                    {testimonial.company}
                  </p>
                  <span className="inline-block mt-2 px-2 py-0.5 rounded-full bg-[#B8974A]/10 text-[#B8974A] text-xs">
                    {testimonial.sector}
                  </span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#162A42]/30">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-heading text-3xl sm:text-4xl text-[#F5F5F0] mb-6">
              Rejoignez nos clients satisfaits
            </h2>
            <p className="text-[#A0AAB5] text-lg mb-8 max-w-2xl mx-auto">
              Vous aussi, faites confiance à BKNX Advisory pour transformer 
              votre gestion financière.
            </p>
            <Link
              to="/contact"
              data-testid="testimonials-cta"
              className="btn-primary inline-flex items-center gap-2 group"
            >
              Contactez-nous
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;

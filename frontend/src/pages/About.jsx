import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Shield, Lock, Users, Star, ArrowRight } from 'lucide-react';

const OFFICE_MEETING = "https://images.pexels.com/photos/1181396/pexels-photo-1181396.jpeg";
const TEAM_MEMBER_1 = "https://static.prod-images.emergentagent.com/jobs/1fa3edd5-8750-4787-92f6-5265f6f884b5/images/c90248630c9f7c3f42ba018e8a14e0ba49f653cbdb10047593c53f2cabf8c591.png";

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
    description: 'Chaque analyse, chaque recommandation repose sur des données vérifiées et une méthodologie éprouvée. Nous ne laissons rien au hasard.'
  },
  {
    icon: Lock,
    title: 'Confidentialité',
    description: 'Vos informations financières sont traitées avec la plus stricte confidentialité. La discrétion est au cœur de notre engagement.'
  },
  {
    icon: Users,
    title: 'Proximité',
    description: 'Un interlocuteur dédié et disponible. Nous construisons des relations durables basées sur l\'écoute et la réactivité.'
  },
  {
    icon: Star,
    title: 'Excellence',
    description: 'Nous visons l\'excellence dans chaque mission. Votre succès est notre meilleure référence.'
  }
];

const teamMembers = [
  {
    name: 'Sophie Laurent',
    role: 'Directrice Associée',
    bio: 'Expert-comptable diplômée avec 20 ans d\'expérience en audit et conseil financier.',
    image: TEAM_MEMBER_1
  },
  {
    name: 'Thomas Moreau',
    role: 'Directeur Audit',
    bio: 'Spécialiste en audit organisationnel et diagnostic financier. Ancien Big Four.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face'
  },
  {
    name: 'Claire Bernard',
    role: 'Responsable Contrôle de Gestion',
    bio: 'Experte en pilotage de la performance et systèmes de reporting avancés.',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop&crop=face'
  },
  {
    name: 'Marc Dubois',
    role: 'Senior Consultant',
    bio: 'Consultant en stratégie financière et accompagnement à la transformation.',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face'
  }
];

export const About = () => {
  return (
    <div data-testid="about-page">
      {/* Hero Section */}
      <section className="py-20 bg-[#0D1B2A]">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <p className="text-[#B8974A] text-sm uppercase tracking-[0.2em] mb-4">À propos</p>
            <h1 className="font-heading text-4xl sm:text-5xl text-[#F5F5F0] mb-6">
              BKNX Advisory
            </h1>
            <div className="gold-line mx-auto mb-6" />
            <p className="text-[#A0AAB5] text-lg max-w-3xl mx-auto">
              Cabinet de conseil et d'expertise financière dédié à l'accompagnement 
              des entreprises vers l'excellence opérationnelle et financière.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Company Presentation */}
      <section data-testid="company-section" className="py-20 bg-[#162A42]/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-heading text-3xl sm:text-4xl text-[#F5F5F0] mb-6">
                Notre mission
              </h2>
              <div className="space-y-4 text-[#A0AAB5] leading-relaxed">
                <p>
                  Fondé par des professionnels passionnés de la finance d'entreprise, 
                  BKNX Advisory s'est donné pour mission d'accompagner les dirigeants 
                  et les directions financières dans leurs décisions stratégiques.
                </p>
                <p>
                  Notre approche combine expertise technique, vision stratégique et 
                  pragmatisme opérationnel. Nous croyons qu'une gestion financière 
                  performante est le socle de toute croissance durable.
                </p>
                <p>
                  Que vous soyez une PME en développement ou un grand groupe, 
                  nous adaptons nos méthodes et nos outils à vos enjeux spécifiques 
                  pour vous apporter des solutions concrètes et mesurables.
                </p>
              </div>
              <Link
                to="/services"
                data-testid="about-services-cta"
                className="btn-primary inline-flex items-center gap-2 mt-8 group"
              >
                Découvrir nos services
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="aspect-[4/3] rounded-lg overflow-hidden">
                <img
                  src={OFFICE_MEETING}
                  alt="Équipe BKNX Advisory en réunion"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 border-2 border-[#B8974A]/30 rounded-lg -z-10" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section data-testid="values-section" className="py-20 bg-[#0D1B2A]">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-[#B8974A] text-sm uppercase tracking-[0.2em] mb-4">Nos valeurs</p>
            <h2 className="font-heading text-3xl sm:text-4xl text-[#F5F5F0] mb-4">
              Les piliers de notre engagement
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
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                variants={fadeInUp}
                className="value-card rounded-lg p-8"
                data-testid={`about-value-${index}`}
              >
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0 w-14 h-14 rounded-lg bg-[#B8974A]/10 flex items-center justify-center">
                    <value.icon size={26} className="text-[#B8974A]" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="font-heading text-xl text-[#F5F5F0] mb-2">{value.title}</h3>
                    <p className="text-[#A0AAB5] text-sm leading-relaxed">{value.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
      <section data-testid="team-section" className="py-20 bg-[#162A42]/30">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-[#B8974A] text-sm uppercase tracking-[0.2em] mb-4">Notre équipe</p>
            <h2 className="font-heading text-3xl sm:text-4xl text-[#F5F5F0] mb-4">
              Des experts à votre service
            </h2>
            <div className="gold-line mx-auto" />
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                variants={fadeInUp}
                className="team-card rounded-lg overflow-hidden text-center"
                data-testid={`team-member-${index}`}
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-heading text-xl text-[#F5F5F0] mb-1">{member.name}</h3>
                  <p className="text-[#B8974A] text-sm mb-3">{member.role}</p>
                  <p className="text-[#A0AAB5] text-sm leading-relaxed">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#0D1B2A]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-heading text-3xl sm:text-4xl text-[#F5F5F0] mb-6">
              Travaillons ensemble
            </h2>
            <p className="text-[#A0AAB5] text-lg mb-8 max-w-2xl mx-auto">
              Vous avez un projet ? Une question ? Notre équipe est à votre disposition 
              pour échanger sur vos besoins.
            </p>
            <Link
              to="/contact"
              data-testid="about-contact-cta"
              className="btn-primary inline-flex items-center gap-2 group"
            >
              Nous contacter
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;

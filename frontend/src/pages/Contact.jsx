import { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Send, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';
import axios from 'axios';

const OFFICE_IMAGE = "https://images.unsplash.com/photo-1765366417030-16d9765d920a?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1Mjh8MHwxfHNlYXJjaHwzfHxtb2Rlcm4lMjBjb3Jwb3JhdGUlMjBvZmZpY2V8ZW58MHx8fHwxNzc0NDcwNzIzfDA&ixlib=rb-4.1.0&q=85";

const API = `${process.env.REACT_APP_BACKEND_URL}/api`;

const subjects = [
  'Audit & Diagnostic',
  'Contrôle de Gestion',
  'Conseil & Accompagnement',
  'Exercice Comptable',
  'Demande de devis',
  'Autre'
];

export const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' | 'error' | null
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};

    if (!formData.firstName.trim()) {
      newErrors.firstName = 'Le prénom est requis';
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = 'Le nom est requis';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'L\'email est requis';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'L\'email n\'est pas valide';
    }

    if (formData.phone && !/^[+]?[\d\s-]{10,}$/.test(formData.phone.replace(/\s/g, ''))) {
      newErrors.phone = 'Le numéro de téléphone n\'est pas valide';
    }

    if (!formData.subject) {
      newErrors.subject = 'Veuillez sélectionner un sujet';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Le message est requis';
    } else if (formData.message.length < 20) {
      newErrors.message = 'Le message doit contenir au moins 20 caractères';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: null }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      await axios.post(`${API}/contact`, formData);
      setSubmitStatus('success');
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      console.error('Contact form error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div data-testid="contact-page">
      {/* Hero Section */}
      <section className="py-20 bg-[#0D1B2A]">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <p className="text-[#B8974A] text-sm uppercase tracking-[0.2em] mb-4">Contact</p>
            <h1 className="font-heading text-4xl sm:text-5xl text-[#F5F5F0] mb-6">
              Parlons de votre projet
            </h1>
            <div className="gold-line mx-auto mb-6" />
            <p className="text-[#A0AAB5] text-lg max-w-3xl mx-auto">
              Notre équipe est à votre disposition pour répondre à vos questions 
              et vous accompagner dans vos projets.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-[#162A42]/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-heading text-2xl sm:text-3xl text-[#F5F5F0] mb-8">
                Nos coordonnées
              </h2>

              <div className="space-y-6 mb-10">
                <a
                  href="tel:+33616268850"
                  data-testid="contact-phone"
                  className="flex items-start gap-4 group"
                >
                  <div className="w-12 h-12 rounded-lg bg-[#B8974A]/10 flex items-center justify-center group-hover:bg-[#B8974A]/20 transition-colors">
                    <Phone size={22} className="text-[#B8974A]" strokeWidth={1.5} />
                  </div>
                  <div>
                    <p className="text-[#A0AAB5] text-sm mb-1">Téléphone</p>
                    <p className="text-[#F5F5F0] group-hover:text-[#B8974A] transition-colors">
                      +33 6 16 26 88 50
                    </p>
                  </div>
                </a>

                <a
                  href="mailto:bknx.advisory@gmx.fr"
                  data-testid="contact-email"
                  className="flex items-start gap-4 group"
                >
                  <div className="w-12 h-12 rounded-lg bg-[#B8974A]/10 flex items-center justify-center group-hover:bg-[#B8974A]/20 transition-colors">
                    <Mail size={22} className="text-[#B8974A]" strokeWidth={1.5} />
                  </div>
                  <div>
                    <p className="text-[#A0AAB5] text-sm mb-1">Email</p>
                    <p className="text-[#F5F5F0] group-hover:text-[#B8974A] transition-colors">
                      bknx.advisory@gmx.fr
                    </p>
                  </div>
                </a>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-[#B8974A]/10 flex items-center justify-center">
                    <MapPin size={22} className="text-[#B8974A]" strokeWidth={1.5} />
                  </div>
                  <div>
                    <p className="text-[#A0AAB5] text-sm mb-1">Adresse</p>
                    <p className="text-[#F5F5F0]">
                      Paris, France
                    </p>
                  </div>
                </div>
              </div>

              {/* Office Image */}
              <div className="relative rounded-lg overflow-hidden aspect-video">
                <img
                  src={OFFICE_IMAGE}
                  alt="Bureau BKNX Advisory"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0D1B2A]/60 to-transparent" />
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="glass-card rounded-lg p-8">
                <h2 className="font-heading text-2xl text-[#F5F5F0] mb-6">
                  Envoyez-nous un message
                </h2>

                {submitStatus === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-6 p-4 rounded-lg bg-green-500/10 border border-green-500/30 flex items-center gap-3"
                    data-testid="contact-success-message"
                  >
                    <CheckCircle size={20} className="text-green-500" />
                    <p className="text-green-400 text-sm">
                      Votre message a été envoyé avec succès. Nous vous répondrons dans les plus brefs délais.
                    </p>
                  </motion.div>
                )}

                {submitStatus === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-6 p-4 rounded-lg bg-red-500/10 border border-red-500/30 flex items-center gap-3"
                    data-testid="contact-error-message"
                  >
                    <AlertCircle size={20} className="text-red-500" />
                    <p className="text-red-400 text-sm">
                      Une erreur est survenue. Veuillez réessayer ou nous contacter directement par téléphone.
                    </p>
                  </motion.div>
                )}

                <form onSubmit={handleSubmit} data-testid="contact-form">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label htmlFor="firstName" className="block text-[#A0AAB5] text-sm mb-2">
                        Prénom *
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        className={`form-input ${errors.firstName ? 'border-red-500' : ''}`}
                        placeholder="Votre prénom"
                        data-testid="contact-input-firstname"
                      />
                      {errors.firstName && (
                        <p className="text-red-400 text-xs mt-1">{errors.firstName}</p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="lastName" className="block text-[#A0AAB5] text-sm mb-2">
                        Nom *
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        className={`form-input ${errors.lastName ? 'border-red-500' : ''}`}
                        placeholder="Votre nom"
                        data-testid="contact-input-lastname"
                      />
                      {errors.lastName && (
                        <p className="text-red-400 text-xs mt-1">{errors.lastName}</p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label htmlFor="email" className="block text-[#A0AAB5] text-sm mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={`form-input ${errors.email ? 'border-red-500' : ''}`}
                        placeholder="votre@email.com"
                        data-testid="contact-input-email"
                      />
                      {errors.email && (
                        <p className="text-red-400 text-xs mt-1">{errors.email}</p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-[#A0AAB5] text-sm mb-2">
                        Téléphone
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className={`form-input ${errors.phone ? 'border-red-500' : ''}`}
                        placeholder="+33 6 00 00 00 00"
                        data-testid="contact-input-phone"
                      />
                      {errors.phone && (
                        <p className="text-red-400 text-xs mt-1">{errors.phone}</p>
                      )}
                    </div>
                  </div>

                  <div className="mb-4">
                    <label htmlFor="subject" className="block text-[#A0AAB5] text-sm mb-2">
                      Sujet *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className={`form-input ${errors.subject ? 'border-red-500' : ''}`}
                      data-testid="contact-select-subject"
                    >
                      <option value="">Sélectionnez un sujet</option>
                      {subjects.map(subject => (
                        <option key={subject} value={subject}>{subject}</option>
                      ))}
                    </select>
                    {errors.subject && (
                      <p className="text-red-400 text-xs mt-1">{errors.subject}</p>
                    )}
                  </div>

                  <div className="mb-6">
                    <label htmlFor="message" className="block text-[#A0AAB5] text-sm mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      className={`form-input resize-none ${errors.message ? 'border-red-500' : ''}`}
                      placeholder="Décrivez votre projet ou votre demande..."
                      data-testid="contact-textarea-message"
                    />
                    {errors.message && (
                      <p className="text-red-400 text-xs mt-1">{errors.message}</p>
                    )}
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    data-testid="contact-submit-btn"
                    className="btn-primary w-full flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 size={18} className="animate-spin" />
                        Envoi en cours...
                      </>
                    ) : (
                      <>
                        Envoyer le message
                        <Send size={18} />
                      </>
                    )}
                  </button>

                  <p className="text-[#A0AAB5] text-xs mt-4 text-center">
                    En soumettant ce formulaire, vous acceptez notre{' '}
                    <a href="/politique-confidentialite" className="text-[#B8974A] hover:underline">
                      politique de confidentialité
                    </a>.
                  </p>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;

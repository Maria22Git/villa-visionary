import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { ArrowRight } from 'lucide-react';

export function Benefits() {
  const { t } = useLanguage();
  const { ref, isInView } = useScrollReveal({ threshold: 0.2 });

  const benefits = [
    'citizenship',
    'installment',
    'downpayment',
    'included',
    'fast',
  ];

  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="benefits" 
      ref={ref}
      className="section-editorial bg-gradient-atmosphere relative overflow-hidden"
    >
      {/* Subtle Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-sky-200/10 to-transparent blur-3xl" />
      </div>

      <div className="container-wide relative z-10">
        {/* Why Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
          className="max-w-3xl mb-20"
        >
          <h2 className="text-section-title text-navy-900 mb-8">
            {t('why.title')}
          </h2>
          <p className="text-section-subtitle leading-relaxed">
            {t('why.description')}
          </p>
        </motion.div>

        {/* Editorial Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : {}}
          transition={{ duration: 1, delay: 0.3, ease: [0.4, 0, 0.2, 1] }}
          className="h-px bg-gradient-to-r from-border via-blue-architect/30 to-transparent mb-16 origin-left"
        />

        {/* Benefits Title */}
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="font-editorial text-2xl md:text-3xl text-navy-800 mb-12"
        >
          {t('benefits.title')}
        </motion.h3>

        {/* Benefits List — Clean text only */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {benefits.map((key, index) => (
            <motion.div
              key={key}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
              className="group"
            >
              <p className="text-navy-900 text-lg leading-relaxed">
                {t(`benefits.${key}`)}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1 }}
        >
          <button
            onClick={scrollToContact}
            className="group btn-editorial text-navy-900"
          >
            <span>{t('benefits.cta')}</span>
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-2" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}

import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { Flag, CreditCard, Percent, FileText, Zap, ArrowRight } from 'lucide-react';

export function Benefits() {
  const { t } = useLanguage();
  const { ref, isInView } = useScrollReveal({ threshold: 0.2 });

  const benefits = [
    { key: 'citizenship', icon: Flag },
    { key: 'installment', icon: Percent },
    { key: 'downpayment', icon: CreditCard },
    { key: 'included', icon: FileText },
    { key: 'fast', icon: Zap },
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
      {/* Ornamental Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-sky-200/20 to-transparent blur-3xl animate-drift" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-gradient-to-tr from-blue-soft/10 to-transparent blur-3xl" />
      </div>

      <div className="container-wide relative z-10">
        {/* Why Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
          className="max-w-3xl mb-20"
        >
          <span className="text-architectural text-primary mb-6 block">
            {t('why.label') || 'Why Choose Us'}
          </span>
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

        {/* Benefits Grid — Editorial Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <motion.div
                key={benefit.key}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                className="group card-editorial hover:border-primary/20 border border-transparent"
              >
                <div className="flex items-start gap-5">
                  <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center group-hover:from-primary/20 group-hover:to-primary/10 transition-colors duration-500">
                    <Icon size={22} className="text-primary" strokeWidth={1.5} />
                  </div>
                  <div>
                    <p className="text-navy-900 font-medium text-lg leading-snug tracking-tight">
                      {t(`benefits.${benefit.key}`)}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1 }}
          className="text-center"
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

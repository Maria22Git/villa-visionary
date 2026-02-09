import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { ArrowRight } from 'lucide-react';

export function Benefits() {
  const { t, language } = useLanguage();
  const { ref, isInView } = useScrollReveal({ threshold: 0.2 });

  const benefits = [
    {
      key: 'citizenship',
      highlight: language === 'ru' ? 'Гражданство' : language === 'en' ? 'Citizenship' : 'Vatandaşlık',
    },
    {
      key: 'installment',
      highlight: language === 'ru' ? '0%' : language === 'en' ? '0%' : '%0',
    },
    {
      key: 'downpayment',
      highlight: language === 'ru' ? '30%' : language === 'en' ? '30%' : '%30',
    },
    {
      key: 'included',
      highlight: language === 'ru' ? 'Под ключ' : language === 'en' ? 'Turnkey' : 'Anahtar Teslim',
    },
    {
      key: 'fast',
      highlight: language === 'ru' ? '2026' : language === 'en' ? '2026' : '2026',
    },
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
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-gradient-to-tr from-blue-architect/5 to-transparent blur-3xl" />
      </div>

      <div className="container-wide relative z-10">
        {/* Why Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
          className="max-w-3xl mb-12"
        >
          <h2 className="text-section-title text-navy-900 mb-4">
            {t('why.title')}
          </h2>
          <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
            {t('why.description')}
          </p>
        </motion.div>

        {/* Benefits Title */}
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="font-editorial text-2xl md:text-3xl text-navy-800 mb-10"
        >
          {t('benefits.title')}
        </motion.h3>

        {/* Benefits Cards — Premium Design */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 mb-16">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.key}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
              className="group relative"
            >
              <div className="relative p-6 rounded-2xl bg-white/80 backdrop-blur-sm border border-white/50 shadow-soft hover:shadow-medium transition-all duration-500 hover:-translate-y-1 h-full">
                {/* Highlight Badge */}
                <div className="mb-4">
                  <span className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-primary/10 to-sky-light/20 text-primary font-bold text-lg">
                    {benefit.highlight}
                  </span>
                </div>
                
                {/* Benefit Text */}
                <p className="text-navy-900 text-base leading-relaxed font-light">
                  {t(`benefits.${benefit.key}`)}
                </p>
                
                {/* Decorative corner */}
                <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden rounded-tr-2xl">
                  <div className="absolute -top-8 -right-8 w-16 h-16 bg-gradient-to-br from-sky-light/20 to-transparent rotate-45" />
                </div>
              </div>
            </motion.div>
          ))}
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
            className="group btn-primary text-base px-10 py-5 inline-flex items-center gap-4"
          >
            {t('benefits.cta')}
            <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}

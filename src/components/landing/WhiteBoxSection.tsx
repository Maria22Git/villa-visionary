import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';
import { useScrollReveal } from '@/hooks/useScrollReveal';

export function WhiteBoxSection() {
  const { t, language } = useLanguage();
  const { ref, isInView } = useScrollReveal({ threshold: 0.2 });

  const features = ['smarthome', 'floors', 'materials'];

  return (
    <section ref={ref} className="section-padding-sm bg-muted/30 relative overflow-hidden">
      <div className="container-wide relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <span className="text-architectural text-primary mb-4 block">
            {language === 'ru' ? 'Технологии' : language === 'en' ? 'Technology' : 'Teknoloji'}
          </span>
          
          <h2 className="text-section-title text-navy-900 mb-6">
            {t('whitebox.title')}
          </h2>
          
          <p className="text-muted-foreground text-lg font-light mb-12">
            {t('whitebox.description')}
          </p>

          <div className="space-y-4">
            {features.map((key, index) => (
              <motion.p
                key={key}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                className="text-navy-900 text-lg font-medium"
              >
                {t(`whitebox.${key}`)}
              </motion.p>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

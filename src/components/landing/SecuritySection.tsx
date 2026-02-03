import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';
import { useScrollReveal } from '@/hooks/useScrollReveal';

export function SecuritySection() {
  const { t, language } = useLanguage();
  const { ref, isInView } = useScrollReveal({ threshold: 0.2 });

  const features = [
    { key: 'closed', label: t('security.closed') },
    { key: 'guard', label: t('security.guard') },
    { key: 'cctv', label: t('security.cctv') },
    { key: 'access', label: t('security.access') },
  ];

  return (
    <section ref={ref} className="section-padding-sm bg-background">
      <div className="container-wide">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <span className="text-architectural text-primary mb-6 block">
              {language === 'ru' ? 'Безопасность' : language === 'en' ? 'Security' : 'Güvenlik'}
            </span>
            
            <h2 className="text-section-title text-navy-900 mb-12">
              {t('security.title')}
            </h2>

            <div className="grid sm:grid-cols-2 gap-6 mb-12">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.key}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  className="p-6 rounded-2xl bg-muted/50 text-left"
                >
                  <p className="text-navy-900 font-medium text-lg">
                    {feature.label}
                  </p>
                </motion.div>
              ))}
            </div>

            <p className="text-navy-900 font-editorial text-2xl italic">
              {t('security.family')}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

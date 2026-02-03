import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';
import { useScrollReveal } from '@/hooks/useScrollReveal';

export function NatureSection() {
  const { t, language } = useLanguage();
  const { ref, isInView } = useScrollReveal({ threshold: 0.2 });

  const features = ['mountains', 'forests', 'views'];

  return (
    <section ref={ref} className="section-editorial relative overflow-hidden">
      {/* Soft blue cinematic gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[hsl(192,35%,45%)] via-[hsl(204,50%,55%)] to-[hsl(210,60%,65%)]" />
      
      {/* Decorative orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-sky-200/20 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="container-wide relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center"
        >
          <span className="text-architectural text-white/70 mb-6 block">
            {language === 'ru' ? 'Природа' : language === 'en' ? 'Nature' : 'Doğa'}
          </span>
          
          <h2 className="text-section-title text-white mb-8">
            {t('nature.title')}
          </h2>
          
          <p className="text-white/70 text-lg font-light leading-relaxed mb-12">
            {t('nature.description')}
          </p>

          <div className="space-y-4 mb-12">
            {features.map((key, index) => (
              <motion.p
                key={key}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className="text-white/90 text-xl font-light"
              >
                {t(`nature.${key}`)}
              </motion.p>
            ))}
          </div>

          <p className="font-editorial text-2xl text-white italic">
            {t('nature.peace')}
          </p>
        </motion.div>
      </div>
    </section>
  );
}

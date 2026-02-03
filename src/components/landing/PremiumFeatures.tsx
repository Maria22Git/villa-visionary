import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import bedroom from '@/assets/interiors/bedroom-1.jpg';

export function PremiumFeatures() {
  const { t, language } = useLanguage();
  const { ref, isInView } = useScrollReveal({ threshold: 0.2 });

  const features = ['smarthome', 'heating', 'windows', 'materials'];

  return (
    <section ref={ref} className="relative overflow-hidden">
      {/* Background with image */}
      <div className="absolute inset-0">
        <motion.img 
          src={bedroom} 
          alt="" 
          className="w-full h-full object-cover"
          initial={{ scale: 1.1 }}
          animate={isInView ? { scale: 1 } : {}}
          transition={{ duration: 1.5, ease: [0.4, 0, 0.2, 1] }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-900/95 via-navy-900/90 to-navy-900/70" />
      </div>

      <div className="relative z-10 section-padding">
        <div className="container-wide">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <span className="text-architectural text-sky-400 mb-6 block">
                {language === 'ru' ? 'Премиум оснащение' : language === 'en' ? 'Premium Equipment' : 'Premium Ekipman'}
              </span>

              <h2 className="text-section-title text-white mb-6">
                {t('premium.title')}
              </h2>

              <p className="text-white/70 text-lg mb-12 font-light">
                {language === 'ru' 
                  ? 'Каждая вилла оснащена передовыми технологиями и материалами премиум-класса для максимального комфорта.' 
                  : language === 'en' 
                  ? 'Each villa is equipped with cutting-edge technology and premium materials for maximum comfort.' 
                  : 'Her villa, maksimum konfor için son teknoloji ve premium malzemelerle donatılmıştır.'}
              </p>
            </motion.div>

            <div className="space-y-4">
              {features.map((key, index) => (
                <motion.div
                  key={key}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10"
                >
                  <p className="text-white text-lg font-light">
                    {t(`premium.${key}`)}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

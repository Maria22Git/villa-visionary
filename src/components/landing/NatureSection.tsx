import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { Check } from 'lucide-react';
import balconyView from '@/assets/balcony-view.jpg';

export function NatureSection() {
  const { t, language } = useLanguage();
  const { ref, isInView } = useScrollReveal({ threshold: 0.2 });

  const features = [
    language === 'ru' ? 'Величественные горы Тавр' : language === 'en' ? 'Majestic Taurus Mountains' : 'Görkemli Toros Dağları',
    language === 'ru' ? 'Хвойные леса' : language === 'en' ? 'Coniferous forests' : 'İğne yapraklı ormanlar',
    language === 'ru' ? 'Панорамные виды на море' : language === 'en' ? 'Panoramic sea views' : 'Panoramik deniz manzaraları',
    language === 'ru' ? 'Крепость Алании' : language === 'en' ? 'Alanya Castle' : 'Alanya Kalesi',
  ];

  return (
    <section ref={ref} className="relative overflow-hidden">
      {/* Full-screen Background Image */}
      <div className="absolute inset-0">
        <motion.img
          src={balconyView}
          alt="Mountain View from Balcony"
          className="w-full h-full object-cover"
          initial={{ scale: 1.1 }}
          animate={isInView ? { scale: 1 } : {}}
          transition={{ duration: 1.5, ease: [0.4, 0, 0.2, 1] }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-900/90 via-navy-900/70 to-navy-900/40" />
      </div>

      <div className="relative z-10 section-editorial">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <span className="text-architectural text-sky-400 mb-6 block">
              {language === 'ru' ? 'Природа' : language === 'en' ? 'Nature' : 'Doğa'}
            </span>
            
            <h2 className="text-section-title text-white mb-6">
              {t('nature.title')}
            </h2>
            
            <p className="text-white/80 text-lg font-light leading-relaxed mb-10">
              {t('nature.description')}
            </p>

            <div className="space-y-3 mb-10">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <Check size={18} className="text-sky-light flex-shrink-0" />
                  <span className="text-white text-lg font-light">{feature}</span>
                </motion.div>
              ))}
            </div>

            <p className="font-editorial text-2xl text-white/90 italic">
              {t('nature.peace')}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

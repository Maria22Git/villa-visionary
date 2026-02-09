import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { Check } from 'lucide-react';
import balconyView from '@/assets/balcony-view-new.jpg';

export function NatureSection() {
  const { t, language } = useLanguage();
  const { ref, isInView } = useScrollReveal({ threshold: 0.2 });

  const features = [
    language === 'ru' ? 'Величественных гор' : language === 'en' ? 'Majestic mountains' : 'Görkemli dağlar',
    language === 'ru' ? 'Хвойных лесов' : language === 'en' ? 'Coniferous forests' : 'İğne yapraklı ormanlar',
    language === 'ru' ? 'Панорамных видов на море' : language === 'en' ? 'Panoramic sea views' : 'Panoramik deniz manzaraları',
    language === 'ru' ? 'Крепость Кале' : language === 'en' ? 'Kale Fortress' : 'Kale Kalesi',
  ];

  return (
    <section ref={ref} className="relative overflow-hidden">
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
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <span className="text-architectural text-sky-400 mb-6 block">
                {language === 'ru' ? 'Природа' : language === 'en' ? 'Nature' : 'Doğa'}
              </span>
              
              <h2 className="text-section-title text-white mb-6">
                {t('nature.title')}
              </h2>
              
              <p className="text-white/80 text-lg font-light leading-relaxed mb-6">
                {language === 'ru' 
                  ? 'Экологически чистый район в окружении:' 
                  : language === 'en' 
                  ? 'An ecologically clean area surrounded by:' 
                  : 'Çevresinde doğal güzelliklerle çevrili ekolojik temiz bir bölge:'}
              </p>

              <div className="space-y-3 mb-8">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <Check size={18} className="text-white flex-shrink-0" />
                    <span className="text-white text-lg font-light">{feature}</span>
                  </motion.div>
                ))}
              </div>

              <p className="text-white/70 text-lg font-light italic border-l-2 border-sky-400/40 pl-5">
                {language === 'ru' 
                  ? 'Здесь тишина, свежий воздух и ощущение уединённого курорта' 
                  : language === 'en' 
                  ? 'Silence, fresh air and the feeling of a secluded resort' 
                  : 'Sessizlik, temiz hava ve tenha bir tatil köyü hissi'}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="hidden lg:block"
            >
              <div className="p-10 rounded-3xl bg-white/5 backdrop-blur-sm border border-white/10">
                <p className="font-editorial text-2xl text-white/90 italic leading-relaxed">
                  {t('nature.peace')}
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import locationMap from '@/assets/location-map.jpg';

export function CityConceptSection() {
  const { t, language } = useLanguage();
  const { ref, isInView } = useScrollReveal({ threshold: 0.2 });

  return (
    <section ref={ref} className="relative overflow-hidden">
      {/* Background with Location Map */}
      <div className="absolute inset-0">
        <motion.img
          src={locationMap}
          alt="Location Map"
          className="w-full h-full object-cover"
          initial={{ scale: 1.1 }}
          animate={isInView ? { scale: 1 } : {}}
          transition={{ duration: 1.5, ease: [0.4, 0, 0.2, 1] }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-900/95 via-navy-900/80 to-navy-900/40" />
      </div>

      <div className="relative z-10 section-editorial">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            {/* Content */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <span className="text-architectural text-sky-400 mb-8 block">
                {t('city.location')}
              </span>

              <h2 className="text-section-title text-white mb-8">
                {t('city.title')}
              </h2>
              
              <p className="text-white/70 text-lg font-light leading-relaxed mb-10">
                {t('city.description')}
              </p>

              <div className="space-y-4 mb-10">
                <motion.p 
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="text-white/90 text-lg font-light"
                >
                  {t('city.center')}
                </motion.p>
                
                <motion.p 
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="text-white/90 text-lg font-light"
                >
                  {language === 'ru' 
                    ? 'Все необходимое в пешей доступности' 
                    : language === 'en' 
                    ? 'Everything you need within walking distance' 
                    : 'İhtiyacınız olan her şey yürüme mesafesinde'}
                </motion.p>
              </div>

              <p className="text-white italic font-editorial text-xl">
                {t('city.ecosystem')}
              </p>
            </motion.div>

            {/* Visual Element — 15-minute concept with map overlay */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative hidden lg:flex items-center justify-center"
            >
              <div className="relative">
                {/* Central Circle */}
                <div className="w-64 h-64 rounded-full bg-white/10 backdrop-blur-md border border-white/30 flex items-center justify-center shadow-large">
                  <div className="text-center">
                    <span className="font-editorial text-6xl text-white block">15</span>
                    <span className="text-sm text-white/80 tracking-widest uppercase">
                      {language === 'ru' ? 'минут' : language === 'en' ? 'minutes' : 'dakika'}
                    </span>
                  </div>
                </div>
                
                {/* Decorative rings */}
                <div className="absolute inset-0 -m-8 rounded-full border border-white/20" />
                <div className="absolute inset-0 -m-16 rounded-full border border-white/10" />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

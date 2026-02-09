import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import locationMap from '@/assets/location-map.jpg';

export function CityConceptSection() {
  const { t, language } = useLanguage();
  const { ref, isInView } = useScrollReveal({ threshold: 0.2 });

  return (
    <section ref={ref} className="relative overflow-hidden bg-navy-900">
      <div className="section-editorial">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Side — Map Image in rounded frame */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 1, delay: 0.2 }}
              className="relative"
            >
              <div className="rounded-3xl overflow-hidden border border-white/10 shadow-large">
                <img
                  src={locationMap}
                  alt="Location Map"
                  className="w-full h-full object-cover aspect-[4/3]"
                />
              </div>
            </motion.div>

            {/* Right Side — Text Content */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="flex flex-col justify-center"
            >
              <span className="text-architectural text-sky-400 mb-6 block">
                {t('city.location')}
              </span>

              <h2 className="text-section-title text-white mb-6">
                {t('city.title')}
              </h2>
              
              <p className="text-white/70 text-lg font-light leading-relaxed mb-8">
                {t('city.description')}
              </p>

              <div className="space-y-4 mb-10">
                <motion.p 
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="text-white text-lg font-light flex items-center gap-3"
                >
                  <span className="w-2 h-2 rounded-full bg-sky-light flex-shrink-0" />
                  {t('city.center')}
                </motion.p>
                
                <motion.p 
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="text-white text-lg font-light flex items-center gap-3"
                >
                  <span className="w-2 h-2 rounded-full bg-sky-light flex-shrink-0" />
                  {language === 'ru' 
                    ? 'Все необходимое в пешей доступности' 
                    : language === 'en' 
                    ? 'Everything you need within walking distance' 
                    : 'İhtiyacınız olan her şey yürüme mesafesinde'}
                </motion.p>
              </div>

              {/* 15-minute concept badge */}
              <div className="inline-flex items-center gap-4 p-5 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/15 w-fit">
                <div className="text-center">
                  <span className="font-editorial text-4xl text-sky-light block">15</span>
                  <span className="text-xs text-white/60 tracking-widest uppercase">
                    {language === 'ru' ? 'минут' : language === 'en' ? 'minutes' : 'dakika'}
                  </span>
                </div>
                <p className="text-white/80 text-sm font-light max-w-[200px]">
                  {t('city.ecosystem')}
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

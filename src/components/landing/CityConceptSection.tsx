import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import locationMap from '@/assets/location-map.jpg';

export function CityConceptSection() {
  const { t, language } = useLanguage();
  const { ref, isInView } = useScrollReveal({ threshold: 0.2 });

  return (
    <section ref={ref} className="relative overflow-hidden bg-navy-900">
      <div className="container-wide">
        <div className="grid lg:grid-cols-5 min-h-[700px]">
          {/* Left Side — Text Content (narrower) */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="lg:col-span-2 py-16 lg:py-24 pr-8 flex flex-col justify-center"
          >
            <span className="text-architectural text-sky-400 mb-8 block">
              {t('city.location')}
            </span>

            <h2 className="text-section-title text-white mb-8">
              {t('city.title')}
            </h2>
            
            <p className="text-white/80 text-lg font-light leading-relaxed mb-8">
              {t('city.description')}
            </p>

            <div className="space-y-4 mb-10">
              <motion.p 
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="text-white text-lg font-light flex items-center gap-3"
              >
                <span className="w-2 h-2 rounded-full bg-sky-light flex-shrink-0" />
                {t('city.center')}
              </motion.p>
              
              <motion.p 
                initial={{ opacity: 0, x: -20 }}
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
            <div className="inline-flex items-center gap-4 p-4 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 w-fit">
              <div className="text-center">
                <span className="font-editorial text-4xl text-sky-light block">15</span>
                <span className="text-xs text-white/70 tracking-widest uppercase">
                  {language === 'ru' ? 'минут' : language === 'en' ? 'minutes' : 'dakika'}
                </span>
              </div>
              <p className="text-white/90 text-sm font-light max-w-[180px]">
                {t('city.ecosystem')}
              </p>
            </div>
          </motion.div>

          {/* Right Side — Full Map Image (wider, no overlay) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 1, delay: 0.2 }}
            className="lg:col-span-3 relative min-h-[400px] lg:min-h-full"
          >
            <img
              src={locationMap}
              alt="Location Map"
              className="absolute inset-0 w-full h-full object-cover object-center"
            />
            {/* Sharp edge, no gradient */}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

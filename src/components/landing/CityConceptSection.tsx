import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { MapPin, Footprints } from 'lucide-react';
import locationMap from '@/assets/location-map.jpg';

export function CityConceptSection() {
  const { t, language } = useLanguage();
  const { ref, isInView } = useScrollReveal({ threshold: 0.2 });

  return (
    <section ref={ref} className="relative overflow-hidden bg-navy-900">
      <div className="section-padding-sm">
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
              <h2 className="text-section-title text-white mb-6">
                {t('city.title')}
              </h2>

              <div className="space-y-5 mb-8">
                <motion.div 
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="flex items-center gap-4"
                >
                  <div className="w-10 h-10 rounded-xl bg-white/10 border border-white/15 flex items-center justify-center flex-shrink-0">
                    <MapPin size={18} className="text-white" />
                  </div>
                  <span className="text-white text-lg font-light">
                    {t('city.center')}
                  </span>
                </motion.div>
                
                <motion.div 
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="flex items-center gap-4"
                >
                  <div className="w-10 h-10 rounded-xl bg-white/10 border border-white/15 flex items-center justify-center flex-shrink-0">
                    <Footprints size={18} className="text-white" />
                  </div>
                  <span className="text-white text-lg font-light">
                    {language === 'ru' 
                      ? 'Все необходимое в пешей доступности' 
                      : language === 'en' 
                      ? 'Everything you need within walking distance' 
                      : 'İhtiyacınız olan her şey yürüme mesafesinde'}
                  </span>
                </motion.div>
              </div>

              {/* Location badge */}
              <div className="p-5 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/15 w-fit">
                <p className="text-white text-sm font-light uppercase tracking-widest">
                  {language === 'ru' 
                    ? 'Victoria Villas расположены в престижном районе Оба' 
                    : language === 'en' 
                    ? 'Victoria Villas are located in the prestigious Oba district' 
                    : 'Victoria Villas prestijli Oba bölgesinde yer almaktadır'}
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

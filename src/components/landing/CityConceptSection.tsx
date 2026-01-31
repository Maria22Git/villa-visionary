import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { MapPin, Clock, Building } from 'lucide-react';

export function CityConceptSection() {
  const { t, language } = useLanguage();
  const { ref, isInView } = useScrollReveal({ threshold: 0.2 });

  const nearbyItems = [
    { emoji: '🏖️', label: language === 'ru' ? 'Пляжи' : language === 'en' ? 'Beaches' : 'Plajlar' },
    { emoji: '🏥', label: language === 'ru' ? 'Медицина' : language === 'en' ? 'Healthcare' : 'Sağlık' },
    { emoji: '🏫', label: language === 'ru' ? 'Школы' : language === 'en' ? 'Schools' : 'Okullar' },
    { emoji: '🛒', label: language === 'ru' ? 'Магазины' : language === 'en' ? 'Shops' : 'Mağazalar' },
  ];

  return (
    <section ref={ref} className="relative overflow-hidden">
      {/* Background with Ornamental Layers */}
      <div className="absolute inset-0 bg-gradient-hero" />
      
      {/* Ornamental floating shapes */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div 
          className="absolute top-20 -left-20 w-80 h-80 rounded-full border border-white/5"
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
        />
        <motion.div 
          className="absolute bottom-20 -right-32 w-96 h-96 rounded-full border border-white/5"
          animate={{ rotate: -360 }}
          transition={{ duration: 80, repeat: Infinity, ease: 'linear' }}
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-gradient-radial from-sky-400/10 to-transparent blur-3xl" />
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
              <div className="inline-flex items-center gap-3 mb-8">
                <MapPin size={18} className="text-sky-400" />
                <span className="text-architectural text-white/70">
                  {t('city.location')}
                </span>
              </div>

              <h2 className="text-section-title text-white mb-8">
                {t('city.title')}
              </h2>
              
              <p className="text-white/60 text-lg font-light leading-relaxed mb-10">
                {t('city.description')}
              </p>

              <div className="space-y-5 mb-10">
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="flex items-center gap-5 p-5 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10"
                >
                  <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center">
                    <Clock size={22} className="text-sky-400" strokeWidth={1.5} />
                  </div>
                  <span className="text-white font-light text-lg">{t('city.center')}</span>
                </motion.div>
                
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="flex items-center gap-5 p-5 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10"
                >
                  <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center">
                    <Building size={22} className="text-sky-400" strokeWidth={1.5} />
                  </div>
                  <span className="text-white font-light text-lg">{t('city.amenities')}</span>
                </motion.div>
              </div>

              <p className="text-white/70 italic font-editorial text-xl">
                {t('city.ecosystem')}
              </p>
            </motion.div>

            {/* Visual Element */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative aspect-square">
                {/* Central Circle */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-48 h-48 rounded-full bg-white/5 backdrop-blur-md border border-white/20 flex items-center justify-center">
                    <div className="text-center">
                      <span className="font-editorial text-5xl text-white block">15</span>
                      <span className="text-sm text-white/60 tracking-widest uppercase">
                        {language === 'ru' ? 'минут' : language === 'en' ? 'minutes' : 'dakika'}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Orbiting Items */}
                <div className="absolute inset-0">
                  {nearbyItems.map((item, index) => {
                    const angle = (index * 90) - 45;
                    const radius = 42;
                    const x = 50 + radius * Math.cos((angle * Math.PI) / 180);
                    const y = 50 + radius * Math.sin((angle * Math.PI) / 180);
                    
                    return (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                        className="absolute w-20 -translate-x-1/2 -translate-y-1/2"
                        style={{ left: `${x}%`, top: `${y}%` }}
                      >
                        <div className="flex flex-col items-center gap-2">
                          <span className="text-2xl">{item.emoji}</span>
                          <span className="text-xs text-white/70 whitespace-nowrap">{item.label}</span>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>

                {/* Connecting Lines */}
                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100">
                  <circle 
                    cx="50" 
                    cy="50" 
                    r="35" 
                    fill="none" 
                    stroke="rgba(255,255,255,0.1)" 
                    strokeWidth="0.5"
                    strokeDasharray="2,4"
                  />
                </svg>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

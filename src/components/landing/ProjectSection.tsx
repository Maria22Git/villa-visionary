import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import villaAerial from '@/assets/villa-aerial.jpg';

export function ProjectSection() {
  const { t, language } = useLanguage();
  const { ref, isInView } = useScrollReveal({ threshold: 0.15 });

  const stats = [
    { value: '3', label: language === 'ru' ? 'этажа' : language === 'en' ? 'floors' : 'kat' },
    { value: '5', label: language === 'ru' ? 'спален' : language === 'en' ? 'bedrooms' : 'yatak odası' },
    { value: '350', label: 'm²' },
    { value: '€290K', label: language === 'ru' ? 'от' : language === 'en' ? 'from' : 'dan' },
  ];

  return (
    <section 
      id="about" 
      ref={ref}
      className="relative overflow-hidden"
    >
      {/* Full-width Image with Content Overlay */}
      <div className="relative min-h-[90vh]">
        {/* Background Image */}
        <motion.div 
          className="absolute inset-0"
          initial={{ scale: 1.1 }}
          animate={isInView ? { scale: 1 } : {}}
          transition={{ duration: 1.5, ease: [0.4, 0, 0.2, 1] }}
        >
          <img
            src={villaAerial}
            alt="Victoria Villas Aerial View"
            className="w-full h-full object-cover"
          />
          {/* Cinematic Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-navy-900 via-navy-900/70 to-navy-900/30" />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-900/80 via-transparent to-transparent" />
        </motion.div>

        {/* Content */}
        <div className="relative z-10 container-wide h-full min-h-[90vh] flex items-end pb-20">
          <div className="grid lg:grid-cols-2 gap-16 items-end w-full">
            {/* Left Column — Text */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="text-architectural text-sky-400 mb-6 block">
                {language === 'ru' ? 'О проекте' : language === 'en' ? 'About Project' : 'Proje Hakkında'}
              </span>
              
              <h2 className="text-editorial-xl text-white mb-8 leading-tight">
                {t('project.title')}
              </h2>
              
              <p className="text-white/70 text-lg font-light leading-relaxed mb-8 max-w-xl">
                {t('project.description')}
              </p>

              <div className="w-24 h-px bg-gradient-to-r from-sky-400/40 to-transparent mb-8" />
              
              <p className="font-editorial text-xl text-white/90 italic max-w-lg">
                {t('project.premium')}
              </p>
            </motion.div>

            {/* Right Column — Stats */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="grid grid-cols-2 gap-6"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  className="p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10"
                >
                  <span className="font-editorial text-4xl lg:text-5xl text-white block mb-2">
                    {stat.value}
                  </span>
                  <span className="text-xs text-white/50 uppercase tracking-widest">
                    {stat.label}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>

      {/* Location Caption */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 1 }}
        className="bg-navy-900 py-6"
      >
        <div className="container-wide flex items-center justify-between">
          <span className="text-xs text-white/40 tracking-wide">
            📍 Alanya, Turkey
          </span>
          <span className="text-xs text-white/40 tracking-wide">
            Victoria Villas © 2024
          </span>
        </div>
      </motion.div>
    </section>
  );
}

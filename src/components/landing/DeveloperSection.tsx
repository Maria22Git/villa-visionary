import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { Check } from 'lucide-react';
import ikyGroupOffice from '@/assets/iky-group-office.jpg';

export function DeveloperSection() {
  const { t, language } = useLanguage();
  const { ref, isInView } = useScrollReveal({ threshold: 0.2 });

  const features = ['top3', 'projects', 'quality', 'standards'];

  const stats = [
    { value: '40+', label: language === 'ru' ? 'Проектов' : language === 'en' ? 'Projects' : 'Proje' },
    { value: 'TOP-3', label: 'Alanya' },
    { value: '15+', label: language === 'ru' ? 'Лет опыта' : language === 'en' ? 'Years' : 'Yıl' },
  ];

  return (
    <section ref={ref} className="relative overflow-hidden">
      <div className="absolute inset-0">
        <motion.img
          src={ikyGroupOffice}
          alt="IKY Group Office"
          className="w-full h-full object-cover"
          initial={{ scale: 1.1 }}
          animate={isInView ? { scale: 1 } : {}}
          transition={{ duration: 1.5, ease: [0.4, 0, 0.2, 1] }}
        />
        <div className="absolute inset-0 bg-gradient-to-l from-navy-900/80 via-navy-900/60 to-navy-900/50" />
      </div>

      <div className="relative z-10 section-editorial">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            {/* Stats Card */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="order-2 lg:order-1"
            >
              <div className="relative rounded-3xl bg-navy-900/90 backdrop-blur-md border border-white/20 p-10">
                <div className="text-center mb-10">
                  <h3 className="font-editorial text-5xl lg:text-6xl text-white mb-3">
                    IKY Group
                  </h3>
                  <p className="text-white/70 text-lg font-light">
                    {t('developer.description')}
                  </p>
                </div>
                
                <div className="grid grid-cols-3 gap-4">
                  {stats.map((stat, index) => (
                    <motion.div 
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={isInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                      className="text-center p-5 rounded-2xl bg-white/10 border border-white/20"
                    >
                      <span className="font-editorial text-3xl md:text-4xl text-white block mb-1">
                        {stat.value}
                      </span>
                      <span className="text-white/60 text-sm font-light">
                        {stat.label}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="order-1 lg:order-2"
            >
              <h2 className="text-section-title text-white mb-10">
                {language === 'ru' ? 'IKY Group — создатель проекта' : language === 'en' ? 'IKY Group — Project Creator' : 'IKY Group — Proje Yaratıcısı'}
              </h2>

              {/* Features with glass backdrop */}
              <div className="p-6 rounded-2xl bg-navy-900/60 backdrop-blur-md border border-white/10 mb-10">
                <div className="space-y-4">
                  <motion.div initial={{ opacity: 0, x: 20 }} animate={isInView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.5, delay: 0.4 }} className="flex items-start gap-3">
                    <Check size={18} className="text-white flex-shrink-0 mt-0.5" />
                    <span className="text-white/90 text-lg font-light">
                      {language === 'ru' ? 'С 2010 года на рынке Алании и Турции' : language === 'en' ? 'On the Alanya and Turkey market since 2010' : '2010\'dan beri Alanya ve Türkiye pazarında'}
                    </span>
                  </motion.div>
                  <motion.div initial={{ opacity: 0, x: 20 }} animate={isInView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.5, delay: 0.5 }} className="flex items-start gap-3">
                    <Check size={18} className="text-white flex-shrink-0 mt-0.5" />
                    <span className="text-white/90 text-lg font-light">
                      {language === 'ru' ? 'Строительство проектов в 100% соответствии с турецким законодательством и техническими стандартами' : language === 'en' ? 'Construction in 100% compliance with Turkish legislation and technical standards' : 'Türk mevzuatına ve teknik standartlara %100 uygunluk'}
                    </span>
                  </motion.div>
                  <motion.div initial={{ opacity: 0, x: 20 }} animate={isInView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.5, delay: 0.6 }} className="flex items-start gap-3">
                    <Check size={18} className="text-white flex-shrink-0 mt-0.5" />
                    <span className="text-white/90 text-lg font-light">
                      {language === 'ru' ? 'Гарантия безопасности и легальности инвестиций' : language === 'en' ? 'Guarantee of investment safety and legality' : 'Yatırım güvenliği ve yasallık garantisi'}
                    </span>
                  </motion.div>
                </div>
              </div>

              <p className="text-white font-editorial text-xl italic border-l-2 border-sky-light/50 pl-6">
                {t('developer.trust')}
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

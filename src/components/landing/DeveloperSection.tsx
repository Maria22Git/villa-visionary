import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { Trophy, Building, CheckCircle, Scale } from 'lucide-react';
import livingRoom from '@/assets/interiors/living-room-2.jpg';

export function DeveloperSection() {
  const { t, language } = useLanguage();
  const { ref, isInView } = useScrollReveal({ threshold: 0.2 });

  const features = [
    { key: 'top3', icon: Trophy },
    { key: 'projects', icon: Building },
    { key: 'quality', icon: CheckCircle },
    { key: 'standards', icon: Scale },
  ];

  const stats = [
    { value: '40+', label: language === 'ru' ? 'Проектов' : language === 'en' ? 'Projects' : 'Proje' },
    { value: 'TOP-3', label: 'Alanya' },
    { value: '15+', label: language === 'ru' ? 'Лет опыта' : language === 'en' ? 'Years' : 'Yıl' },
  ];

  return (
    <section ref={ref} className="relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={livingRoom}
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-l from-navy-900/98 via-navy-900/95 to-navy-900/85" />
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
              <div className="relative">
                {/* Decorative glow */}
                <div className="absolute -inset-8 bg-gradient-to-br from-primary/10 to-sky-500/10 rounded-3xl blur-3xl" />
                
                <div className="relative rounded-3xl bg-white/5 backdrop-blur-sm border border-white/10 p-10">
                  <div className="text-center mb-10">
                    <h3 className="font-editorial text-5xl lg:text-6xl text-white mb-3">
                      IKY Group
                    </h3>
                    <p className="text-white/60 text-lg font-light">
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
                        className="text-center p-5 rounded-2xl bg-white/5 border border-white/10"
                      >
                        <span className="font-editorial text-3xl md:text-4xl text-primary block mb-1">
                          {stat.value}
                        </span>
                        <span className="text-white/60 text-sm">
                          {stat.label}
                        </span>
                      </motion.div>
                    ))}
                  </div>
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
              <span className="text-architectural text-sky-400 mb-6 block">
                {language === 'ru' ? 'Застройщик' : language === 'en' ? 'Developer' : 'Geliştirici'}
              </span>

              <h2 className="text-section-title text-white mb-10">
                {t('developer.title')}
              </h2>

              <div className="space-y-4 mb-10">
                {features.map((feature, index) => {
                  const Icon = feature.icon;
                  return (
                    <motion.div
                      key={feature.key}
                      initial={{ opacity: 0, x: 20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                      className="flex items-center gap-4 p-5 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors duration-300"
                    >
                      <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
                        <Icon size={20} className="text-sky-400" strokeWidth={1.5} />
                      </div>
                      <span className="text-white font-light text-lg">
                        {t(`developer.${feature.key}`)}
                      </span>
                    </motion.div>
                  );
                })}
              </div>

              <p className="text-white/80 font-editorial text-xl italic border-l-2 border-primary/50 pl-6">
                {t('developer.trust')}
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

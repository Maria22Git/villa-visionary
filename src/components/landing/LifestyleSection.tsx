import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { Award, Heart, Sun, Home, ArrowRight } from 'lucide-react';
import livingRoom from '@/assets/interiors/living-room-1.jpg';

export function LifestyleSection() {
  const { t, language } = useLanguage();
  const { ref, isInView } = useScrollReveal({ threshold: 0.2 });

  const features = [
    { key: 'status', icon: Award },
    { key: 'comfort', icon: Home },
    { key: 'enjoyment', icon: Heart },
    { key: 'climate', icon: Sun },
  ];

  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section ref={ref} className="relative overflow-hidden">
      {/* Full-width background image */}
      <div className="absolute inset-0">
        <motion.img
          src={livingRoom}
          alt="Luxury Living Room"
          className="w-full h-full object-cover"
          initial={{ scale: 1.1 }}
          animate={isInView ? { scale: 1 } : {}}
          transition={{ duration: 1.5, ease: [0.4, 0, 0.2, 1] }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-900/95 via-navy-900/85 to-navy-900/60" />
      </div>

      <div className="relative z-10 section-editorial">
        <div className="container-wide">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <span className="text-architectural text-sky-400 mb-6 block">
                {language === 'ru' ? 'Образ жизни' : language === 'en' ? 'Lifestyle' : 'Yaşam Tarzı'}
              </span>

              <h2 className="text-section-title text-white mb-8">
                {t('lifestyle.title')}
              </h2>
              
              <p className="text-white/60 text-lg font-light leading-relaxed mb-4">
                {t('lifestyle.description')}
              </p>
              
              <p className="text-white/80 text-xl font-editorial mb-12">
                {t('lifestyle.intro')}
              </p>
            </motion.div>

            {/* Features Grid */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="grid sm:grid-cols-2 gap-4 mb-12"
            >
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <motion.div
                    key={feature.key}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                    className="flex items-center gap-4 p-5 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-colors duration-300"
                  >
                    <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
                      <Icon size={20} className="text-sky-400" strokeWidth={1.5} />
                    </div>
                    <span className="font-medium text-white">
                      {t(`lifestyle.${feature.key}`)}
                    </span>
                  </motion.div>
                );
              })}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-col sm:flex-row items-start sm:items-center gap-8"
            >
              <p className="text-white/90 italic font-editorial text-2xl">
                {t('lifestyle.home')}
              </p>
              <button
                onClick={scrollToContact}
                className="group btn-primary inline-flex items-center gap-3"
              >
                {t('hero.cta')}
                <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
              </button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

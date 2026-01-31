import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { Shield, Video, Users, Lock } from 'lucide-react';
import villaAerial from '@/assets/villa-aerial.jpg';

export function SecuritySection() {
  const { t, language } = useLanguage();
  const { ref, isInView } = useScrollReveal({ threshold: 0.2 });

  const features = [
    { key: 'closed', icon: Lock },
    { key: 'guard', icon: Shield },
    { key: 'cctv', icon: Video },
    { key: 'access', icon: Users },
  ];

  return (
    <section ref={ref} className="section-editorial-sm bg-background relative overflow-hidden">
      <div className="container-wide relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <span className="text-architectural text-primary mb-6 block">
              {language === 'ru' ? 'Безопасность' : language === 'en' ? 'Security' : 'Güvenlik'}
            </span>
            
            <h2 className="text-section-title text-navy-900 mb-10">
              {t('security.title')}
            </h2>

            <div className="grid sm:grid-cols-2 gap-4 mb-10">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <motion.div
                    key={feature.key}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                    className="flex items-center gap-4 p-5 rounded-2xl bg-muted"
                  >
                    <div className="w-11 h-11 rounded-xl bg-navy-900 flex items-center justify-center">
                      <Icon size={20} className="text-sky-400" strokeWidth={1.5} />
                    </div>
                    <span className="text-navy-900 font-light">
                      {t(`security.${feature.key}`)}
                    </span>
                  </motion.div>
                );
              })}
            </div>

            <p className="font-editorial text-xl text-navy-800 italic">
              {t('security.family')}
            </p>
          </motion.div>

          {/* Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex items-center justify-center"
          >
            <div className="relative w-72 h-72">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-navy-800 to-navy-900 flex items-center justify-center">
                <Shield size={72} className="text-white/80" strokeWidth={1} />
              </div>
              <div className="absolute -top-4 -right-4 w-16 h-16 rounded-full bg-primary flex items-center justify-center text-white font-editorial text-xl">
                24/7
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

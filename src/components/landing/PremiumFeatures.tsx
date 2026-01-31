import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { 
  Waves, 
  ParkingCircle, 
  Dumbbell, 
  TreePine, 
  Shield, 
  Home 
} from 'lucide-react';
import living1 from '@/assets/interiors/living-room-1.jpg';

export function PremiumFeatures() {
  const { t, language } = useLanguage();
  const { ref, isInView } = useScrollReveal({ threshold: 0.15 });

  const features = [
    { key: 'pool', icon: Waves },
    { key: 'parking', icon: ParkingCircle },
    { key: 'gym', icon: Dumbbell },
    { key: 'garden', icon: TreePine },
    { key: 'security', icon: Shield },
    { key: 'smart', icon: Home },
  ];

  return (
    <section ref={ref} className="relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={living1}
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-900/98 via-navy-900/90 to-navy-900/75" />
      </div>

      <div className="relative z-10 section-editorial">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <span className="text-architectural text-sky-400 mb-6 block">
                {language === 'ru' ? 'Премиум удобства' : language === 'en' ? 'Premium Amenities' : 'Premium Olanaklar'}
              </span>
              
              <h2 className="text-section-title text-white mb-8">
                {t('features.title')}
              </h2>
              
              <p className="text-white/60 text-lg font-light leading-relaxed mb-10">
                {t('features.description')}
              </p>

              <p className="font-editorial text-xl text-white/80 italic border-l-2 border-primary/50 pl-6">
                {t('features.quote')}
              </p>
            </motion.div>

            {/* Features Grid */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="grid grid-cols-2 gap-4">
                {features.map((feature, index) => {
                  const Icon = feature.icon;
                  return (
                    <motion.div
                      key={feature.key}
                      initial={{ opacity: 0, y: 20 }}
                      animate={isInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                      className="group p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-500"
                    >
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-sky-400/20 to-blue-soft/10 flex items-center justify-center mb-4 group-hover:from-sky-400/30 transition-colors">
                        <Icon size={22} className="text-sky-400" strokeWidth={1.5} />
                      </div>
                      <span className="text-white font-medium text-sm tracking-wide">
                        {t(`features.${feature.key}`)}
                      </span>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Bottom Gradient Transition */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}

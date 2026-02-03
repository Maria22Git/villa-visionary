import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { ArrowRight } from 'lucide-react';
import happyFamily from '@/assets/happy-family.jpg';

export function LifestyleSection() {
  const { t, language } = useLanguage();
  const { ref, isInView } = useScrollReveal({ threshold: 0.2 });

  const features = [
    language === 'ru' ? 'Статус и приватность' : language === 'en' ? 'Status and privacy' : 'Statü ve mahremiyet',
    language === 'ru' ? 'Комфортная среда' : language === 'en' ? 'Comfortable environment' : 'Konforlu ortam',
    language === 'ru' ? 'Удовольствие от каждого дня' : language === 'en' ? 'Enjoyment every day' : 'Her gün keyif',
    language === 'ru' ? 'Наслаждение климатом и горным воздухом' : language === 'en' ? 'Enjoying the climate and mountain air' : 'İklim ve dağ havasının tadını çıkarma',
  ];

  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section ref={ref} className="relative overflow-hidden">
      {/* Full-width background image — Happy Family */}
      <div className="absolute inset-0">
        <motion.img
          src={happyFamily}
          alt="Happy Family in Villa"
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
              
              <p className="text-white/70 text-lg font-light leading-relaxed mb-4">
                {t('lifestyle.description')}
              </p>
              
              <p className="text-white/80 text-xl font-editorial mb-12">
                {t('lifestyle.intro')}
              </p>
            </motion.div>

            {/* Features — Simple text list */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-4 mb-12"
            >
              {features.map((feature, index) => (
                <motion.p
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  className="text-white text-lg font-light flex items-center gap-3"
                >
                  <span className="w-2 h-2 rounded-full bg-sky-light flex-shrink-0" />
                  {feature}
                </motion.p>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="space-y-8"
            >
              <p className="text-white italic font-editorial text-2xl">
                {t('lifestyle.home')}
              </p>
              
              <button
                onClick={scrollToContact}
                className="group btn-primary text-base px-10 py-5 inline-flex items-center gap-4"
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

import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import livingRoom from '@/assets/interiors/living-room-1.jpg';

export function WhiteBoxSection() {
  const { t, language } = useLanguage();
  const { ref, isInView } = useScrollReveal({ threshold: 0.2 });

  const features = [
    {
      title: language === 'ru' ? 'Умный дом' : language === 'en' ? 'Smart Home' : 'Akıllı Ev',
      description: language === 'ru' 
        ? 'Интеллектуальные системы управления освещением, климатом и безопасностью'
        : language === 'en' 
        ? 'Intelligent lighting, climate and security management systems'
        : 'Akıllı aydınlatma, iklim ve güvenlik yönetim sistemleri',
    },
    {
      title: language === 'ru' ? 'Тёплые полы' : language === 'en' ? 'Heated Floors' : 'Yerden Isıtma',
      description: language === 'ru' 
        ? 'Система подогрева пола во всех жилых помещениях'
        : language === 'en' 
        ? 'Underfloor heating system in all living areas'
        : 'Tüm yaşam alanlarında yerden ısıtma sistemi',
    },
    {
      title: language === 'ru' ? 'Премиальные материалы' : language === 'en' ? 'Premium Materials' : 'Premium Malzemeler',
      description: language === 'ru' 
        ? 'Высококачественная отделка от европейских производителей'
        : language === 'en' 
        ? 'High-quality finishes from European manufacturers'
        : 'Avrupa üreticilerinden yüksek kaliteli kaplamalar',
    },
    {
      title: language === 'ru' ? 'Инженерные системы' : language === 'en' ? 'Engineering Systems' : 'Mühendislik Sistemleri',
      description: language === 'ru' 
        ? 'Современные коммуникации и вентиляция премиум-класса'
        : language === 'en' 
        ? 'Modern communications and premium-class ventilation'
        : 'Modern iletişim ve premium sınıf havalandırma',
    },
  ];

  return (
    <section ref={ref} className="relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <motion.img
          src={livingRoom}
          alt="Interior"
          className="w-full h-full object-cover"
          initial={{ scale: 1.1 }}
          animate={isInView ? { scale: 1 } : {}}
          transition={{ duration: 1.5, ease: [0.4, 0, 0.2, 1] }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-900/95 via-navy-900/85 to-navy-900/60" />
      </div>

      <div className="relative z-10 section-editorial">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Content */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <span className="text-architectural text-sky-400 mb-6 block">
                {language === 'ru' ? 'Технологии' : language === 'en' ? 'Technology' : 'Teknoloji'}
              </span>
              
              <h2 className="text-section-title text-white mb-6">
                {t('whitebox.title')}
              </h2>
              
              <p className="text-white/70 text-lg font-light mb-12">
                {t('whitebox.description')}
              </p>
            </motion.div>

            {/* Features Grid */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="grid grid-cols-2 gap-6"
            >
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-colors"
                >
                  <h3 className="font-editorial text-xl text-white mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-white/60 text-sm font-light leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

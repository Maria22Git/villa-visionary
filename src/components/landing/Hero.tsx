import { useLanguage } from '@/contexts/LanguageContext';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import heroImage from '@/assets/hero-villa.jpg';

export function Hero() {
  const { t, language } = useLanguage();

  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const benefits = [
    language === 'ru' ? 'Беспроцентная рассрочка на 3 года' : language === 'en' ? 'Interest-free installments for 3 years' : '3 yıl faizsiz taksit',
    language === 'ru' ? 'Первоначальный взнос 30%' : language === 'en' ? '30% down payment' : '%30 peşinat',
    language === 'ru' ? 'Под ключ без скрытых расходов' : language === 'en' ? 'Turnkey with no hidden costs' : 'Gizli maliyet olmadan anahtar teslimi',
    language === 'ru' ? 'Напрямую от застройщика' : language === 'en' ? 'Directly from developer' : 'Doğrudan geliştiriciden',
  ];

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Full-screen Background Image */}
      <motion.div 
        className="absolute inset-0"
        initial={{ scale: 1.05 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2, ease: [0.4, 0, 0.2, 1] }}
      >
        <img
          src={heroImage}
          alt="Victoria Villas"
          className="w-full h-full object-cover"
        />
        {/* Dark Overlay for Readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-navy-900/60 via-navy-900/40 to-navy-900/80" />
        <div className="absolute inset-0 bg-navy-900/30" />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 container-wide py-32 md:py-40">
        <div className="max-w-3xl">
          {/* Main Title */}
          <div className="overflow-hidden mb-10">
            <motion.h1
              initial={{ y: '100%', opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 1, ease: [0.4, 0, 0.2, 1] }}
              className="font-display text-6xl md:text-7xl lg:text-8xl xl:text-9xl text-white font-light tracking-tight"
            >
              Victoria Villas
            </motion.h1>
          </div>

          {/* Benefits Lines */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
            className="space-y-3 mb-14"
          >
            {benefits.map((benefit, index) => (
              <motion.p
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 + index * 0.15, duration: 0.6 }}
                className="text-white/80 text-lg md:text-xl font-light"
              >
                {benefit}
              </motion.p>
            ))}
          </motion.div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.8, duration: 0.8 }}
          >
            <button
              onClick={scrollToContact}
              className="group btn-primary text-base px-10 py-5 inline-flex items-center gap-4"
            >
              {t('hero.cta')}
              <ArrowRight 
                size={18} 
                className="transition-transform duration-300 group-hover:translate-x-1" 
              />
            </button>
          </motion.div>
        </div>
      </div>

      {/* Bottom Fade Transition */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}

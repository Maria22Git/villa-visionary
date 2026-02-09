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
    language === 'ru' ? 'Напрямую от застройщика IKY Group' : language === 'en' ? 'Directly from developer IKY Group' : 'Doğrudan IKY Group geliştiricisinden',
    language === 'ru' ? '40+ реализованных проектов' : language === 'en' ? '40+ completed projects' : '40+ tamamlanmış proje',
    language === 'ru' ? 'Беспроцентная рассрочка на 3 года' : language === 'en' ? 'Interest-free installments for 3 years' : '3 yıl faizsiz taksit',
    language === 'ru' ? 'Первоначальный взнос 30%' : language === 'en' ? '30% down payment' : '%30 peşinat',
    language === 'ru' ? 'Под ключ без скрытых расходов' : language === 'en' ? 'Turnkey with no hidden costs' : 'Gizli maliyet olmadan anahtar teslimi',
  ];

  return (
    <section className="relative min-h-screen flex items-end overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Victoria Villas"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-900/70 via-navy-900/30 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-900/60 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 container-wide pb-20 md:pb-28 pt-40">
        <div className="max-w-3xl">
          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 1, ease: [0.4, 0, 0.2, 1] }}
            className="font-editorial text-5xl md:text-7xl lg:text-8xl text-white tracking-tight mb-6"
            style={{ textShadow: '0 4px 30px rgba(0, 29, 57, 0.5)' }}
          >
            Victoria Villas
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-white/80 text-lg md:text-xl uppercase tracking-[0.25em] font-light mb-10"
            style={{ textShadow: '0 2px 15px rgba(0, 29, 57, 0.4)' }}
          >
            {language === 'ru' ? 'Виллы под гражданство Турции' : language === 'en' ? 'Villas for Turkish Citizenship' : 'Türk Vatandaşlığı İçin Villalar'}
          </motion.p>
          
          {/* Benefits — glass cards */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 1 }}
            className="mb-10"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.9 + index * 0.1, duration: 0.6 }}
                  className="p-4 rounded-xl bg-white/10 backdrop-blur-sm border border-white/15 flex items-center gap-3"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-sky-light flex-shrink-0" />
                  <span className="text-white text-sm md:text-base font-light">{benefit}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 0.8 }}
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
    </section>
  );
}

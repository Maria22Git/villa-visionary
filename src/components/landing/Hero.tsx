import { useLanguage } from '@/contexts/LanguageContext';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import heroImage from '@/assets/hero-villa.jpg';
import villaEntrance from '@/assets/villa-entrance.jpg';
import villaAerial from '@/assets/villa-aerial.jpg';
import villaMountains from '@/assets/villa-mountains.jpg';
import { useState, useEffect } from 'react';

export function Hero() {
  const [currentImage, setCurrentImage] = useState(0);
  const heroImages = [heroImage, villaEntrance, villaAerial, villaMountains];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);
  const { t, language } = useLanguage();

  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const benefits = [
    language === 'ru' ? 'Виллы под гражданство Турции' : language === 'en' ? 'Villas for Turkish citizenship' : 'Türk vatandaşlığı için villalar',
    language === 'ru' ? 'Напрямую от застройщика IKY Group' : language === 'en' ? 'Directly from developer IKY Group' : 'Doğrudan IKY Group geliştiricisinden',
    language === 'ru' ? '40+ реализованных проектов' : language === 'en' ? '40+ completed projects' : '40+ tamamlanmış proje',
    language === 'ru' ? 'Беспроцентная рассрочка на 3 года' : language === 'en' ? 'Interest-free installments for 3 years' : '3 yıl faizsiz taksit',
    language === 'ru' ? 'Первоначальный взнос 30%' : language === 'en' ? '30% down payment' : '%30 peşinat',
    language === 'ru' ? 'Под ключ без скрытых расходов' : language === 'en' ? 'Turnkey with no hidden costs' : 'Gizli maliyet olmadan anahtar teslimi',
  ];

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Full-screen Background Image Slideshow - минимальное затенение */}
      <div className="absolute inset-0">
        {heroImages.map((img, index) => (
          <motion.img
            key={index}
            src={img}
            alt="Victoria Villas"
            className="absolute inset-0 w-full h-full object-cover"
            initial={{ opacity: 0 }}
            animate={{ opacity: currentImage === index ? 1 : 0 }}
            transition={{ duration: 1.5, ease: [0.4, 0, 0.2, 1] }}
          />
        ))}
        {/* Минимальное затенение - фото хорошо видны */}
        <div className="absolute inset-0 bg-gradient-to-r from-navy-900/60 via-navy-900/20 to-transparent" />
      </div>

      {/* Content - выровнено влево */}
      <div className="relative z-10 container-wide py-32 md:py-40">
        <div className="max-w-2xl">
          {/* Benefits с минимальным градиентом под текстом */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="inline-block"
          >
            <div className="px-8 py-8 rounded-2xl bg-gradient-to-r from-navy-900/80 via-navy-900/60 to-transparent backdrop-blur-[2px]">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.8 }}
                className="text-white/70 text-sm md:text-base uppercase tracking-[0.2em] font-light mb-4"
              >
                {language === 'ru' ? 'Элитные виллы в Алании' : language === 'en' ? 'Premium Villas in Alanya' : 'Alanya\'da Lüks Villalar'}
              </motion.p>
              
              <div className="space-y-2.5 mb-8">
                {benefits.map((benefit, index) => (
                  <motion.p
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.9 + index * 0.12, duration: 0.6 }}
                    className="text-white text-lg md:text-xl font-light flex items-center gap-3"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-sky-light flex-shrink-0" />
                    {benefit}
                  </motion.p>
                ))}
              </div>

              {/* CTA Button - под текстом */}
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
          </motion.div>
        </div>
      </div>

      {/* Bottom Fade Transition */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}

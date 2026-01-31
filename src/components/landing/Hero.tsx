import { useLanguage } from '@/contexts/LanguageContext';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import heroImage from '@/assets/hero-villa.jpg';

export function Hero() {
  const { t } = useLanguage();

  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const features = [
    { key: 'turnkey', label: t('hero.turnkey') },
    { key: 'nohidden', label: t('hero.nohidden') },
    { key: 'developer', label: t('hero.developer') },
  ];

  return (
    <section className="relative min-h-screen flex items-end overflow-hidden">
      {/* Background with Parallax */}
      <motion.div 
        className="absolute inset-0"
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: [0.4, 0, 0.2, 1] }}
      >
        <img
          src={heroImage}
          alt="Victoria Villas"
          className="w-full h-full object-cover"
        />
        {/* Cinematic Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-navy-900/40 via-navy-900/20 to-navy-900/95" />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-900/60 via-transparent to-transparent" />
      </motion.div>

      {/* Ornamental Elements */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-navy-900/40 to-transparent" />
      <div className="absolute top-1/4 right-12 hidden xl:block">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.15, scale: 1 }}
          transition={{ delay: 1, duration: 1.5 }}
          className="w-64 h-64 rounded-full border border-white/20 animate-pulse-soft"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 container-wide pb-20 pt-40 md:pb-28 md:pt-48">
        <div className="max-w-5xl">
          {/* Micro Label */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
            className="flex items-center gap-4 mb-8"
          >
            <span className="text-3xl">🇹🇷</span>
            <span className="text-architectural text-white/70">
              {t('hero.subtitle')}
            </span>
            <div className="w-16 h-px bg-white/20" />
          </motion.div>

          {/* Main Title — Oversized Editorial */}
          <div className="overflow-hidden mb-6">
            <motion.h1
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              transition={{ delay: 0.5, duration: 1, ease: [0.4, 0, 0.2, 1] }}
              className="text-hero text-white"
            >
              {t('hero.title')}
            </motion.h1>
          </div>

          {/* Headline */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="font-editorial text-2xl md:text-3xl lg:text-4xl text-white/90 font-light tracking-[-0.01em] leading-snug mb-6 max-w-3xl"
          >
            {t('hero.headline')}
          </motion.p>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="text-lg text-white/60 font-light mb-12 max-w-2xl leading-relaxed"
          >
            {t('hero.description')}
          </motion.p>

          {/* Benefits Row — Editorial Aligned */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="flex flex-wrap gap-4 mb-14"
          >
            {features.map((feature, index) => (
              <div
                key={feature.key}
                className="flex items-center gap-3 px-5 py-3 rounded-full bg-white/5 backdrop-blur-sm border border-white/10"
              >
                <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                <span className="text-white/80 text-sm font-light tracking-wide">
                  {feature.label}
                </span>
              </div>
            ))}
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4, duration: 0.8 }}
          >
            <button
              onClick={scrollToContact}
              className="group btn-primary text-base px-12 py-5 inline-flex items-center gap-4"
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

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 right-8 hidden md:flex flex-col items-center gap-3"
      >
        <span className="text-micro text-white/40 tracking-widest uppercase rotate-90 origin-center translate-x-6">
          Scroll
        </span>
        <div className="w-px h-16 bg-gradient-to-b from-white/40 to-transparent" />
      </motion.div>

      {/* Bottom Fade Transition */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}

import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import ibrahimBey from '@/assets/ibrahim-bey.png';

export function ArchitectSection() {
  const { t, language } = useLanguage();
  const { ref, isInView } = useScrollReveal({ threshold: 0.2 });

  return (
    <section ref={ref} className="section-editorial bg-background relative overflow-hidden">
      <div className="container-wide relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Content — Left */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="order-2 lg:order-1"
          >
            <span className="text-architectural text-primary mb-6 block">
              {language === 'ru' ? 'Архитектор' : language === 'en' ? 'Architect' : 'Mimar'}
            </span>
            
            <h2 className="text-section-title text-navy-900 mb-8">
              {t('architect.title')}
            </h2>
            
            <p className="text-muted-foreground text-lg font-light leading-relaxed mb-10">
              {t('architect.description')}
            </p>

            {/* Quote */}
            <blockquote className="relative pl-8 border-l-2 border-primary/30">
              <p className="font-editorial text-xl text-navy-800 italic leading-relaxed">
                "{t('architect.quote')}"
              </p>
              <footer className="mt-4">
                <span className="text-sm text-muted-foreground">
                  — İbrahim Bey, {language === 'ru' ? 'соучредитель IKY Group' : language === 'en' ? 'Co-founder IKY Group' : 'IKY Group Kurucu Ortağı'}
                </span>
              </footer>
            </blockquote>
          </motion.div>

          {/* Photo — Right */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="order-1 lg:order-2 relative"
          >
            <div className="relative rounded-3xl overflow-hidden">
              <img
                src={ibrahimBey}
                alt="İbrahim Bey"
                className="w-full aspect-[4/5] object-cover object-top"
              />
              {/* Subtle Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-navy-900/20 to-transparent" />
              
              {/* Name overlay at bottom */}
              <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-navy-900/80 to-transparent">
                <span className="font-editorial text-2xl text-white block mb-1">
                  İbrahim Bey
                </span>
                <span className="text-sm text-white/70">
                  {language === 'ru' ? 'Соучредитель IKY Group' : language === 'en' ? 'Co-founder IKY Group' : 'IKY Group Kurucu Ortağı'}
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

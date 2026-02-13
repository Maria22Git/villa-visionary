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
          {/* Content — Left Side with Quote */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
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

            {/* Quote - Prominent styling */}
            <blockquote className="relative pl-8 border-l-4 border-primary">
              <p className="font-editorial text-2xl text-navy-900 italic leading-relaxed">
                "{t('architect.quote')}"
              </p>
              <footer className="mt-6">
                <span className="text-navy-800 font-medium text-lg">
                  İbrahim Bey
                </span>
                <span className="text-muted-foreground block text-sm mt-1">
                  {language === 'ru' ? 'Соучредитель IKY Group' : language === 'en' ? 'Co-founder IKY Group' : 'IKY Group Kurucu Ortağı'}
                </span>
              </footer>
            </blockquote>
          </motion.div>

          {/* Photo — Right Side */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="order-1 lg:order-2 flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Decorative background element */}
              <div className="absolute -inset-4 bg-gradient-to-br from-primary/10 to-sky-light/10 rounded-3xl -z-10" />
              
              <div className="relative rounded-2xl overflow-hidden w-72 md:w-80 lg:w-[420px] shadow-large">
                <img
                  src={ibrahimBey}
                  alt="İbrahim Bey"
                  className="w-full aspect-[4/5] object-cover object-top"
                />
                {/* Subtle Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-navy-900/40 to-transparent" />
                
                {/* Name overlay at bottom */}
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-navy-900/90 to-transparent">
                  <span className="font-editorial text-xl text-white block">
                    İbrahim Bey
                  </span>
                  <span className="text-white/70 text-sm">
                    {language === 'ru' ? 'Соучредитель' : language === 'en' ? 'Co-founder' : 'Kurucu Ortak'}
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

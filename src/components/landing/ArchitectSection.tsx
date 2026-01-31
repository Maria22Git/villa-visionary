import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import ibrahimBey from '@/assets/ibrahim-bey.png';

export function ArchitectSection() {
  const { t, language } = useLanguage();
  const { ref, isInView } = useScrollReveal({ threshold: 0.2 });

  return (
    <section ref={ref} className="section-editorial bg-background relative overflow-hidden">
      {/* Ornamental Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-gradient-radial from-muted/40 to-transparent opacity-50" />
      </div>

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
            
            <p className="text-muted-foreground text-lg font-light leading-relaxed mb-8">
              {t('architect.description')}
            </p>

            {/* Editorial Divider */}
            <div className="w-24 h-px bg-gradient-to-r from-primary/40 to-transparent mb-8" />

            <div className="space-y-4 mb-10">
              {['experience', 'philosophy', 'projects'].map((item) => (
                <div key={item} className="flex items-start gap-4">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 flex-shrink-0" />
                  <p className="text-navy-800 font-light">
                    {t(`architect.${item}`)}
                  </p>
                </div>
              ))}
            </div>

            {/* Quote */}
            <blockquote className="relative pl-8 border-l-2 border-primary/30">
              <p className="font-editorial text-xl text-navy-800 italic leading-relaxed">
                "{t('architect.quote')}"
              </p>
              <footer className="mt-4">
                <span className="text-xs text-muted-foreground tracking-wide">
                  — İbrahim Bey, {language === 'ru' ? 'соучредитель' : language === 'en' ? 'Co-founder' : 'Kurucu Ortak'}
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
            <div className="relative">
              {/* Main Image */}
              <div className="relative rounded-3xl overflow-hidden">
                <img
                  src={ibrahimBey}
                  alt="İbrahim Bey"
                  className="w-full aspect-[4/5] object-cover object-top"
                />
                {/* Subtle Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-navy-900/20 to-transparent" />
              </div>

              {/* Floating Name Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="absolute -bottom-6 -left-6 md:left-8 bg-white rounded-2xl p-6 shadow-large"
              >
                <span className="font-editorial text-2xl text-navy-900 block mb-1">
                  İbrahim Bey
                </span>
                <span className="text-xs text-muted-foreground tracking-wide">
                  {language === 'ru' ? 'Соучредитель IKY Group' : language === 'en' ? 'Co-founder IKY Group' : 'IKY Group Kurucu Ortağı'}
                </span>
              </motion.div>

              {/* Decorative Corner */}
              <div className="absolute -top-4 -right-4 w-24 h-24 border-t-2 border-r-2 border-primary/20 rounded-tr-3xl" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

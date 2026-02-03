import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import villaAerial from '@/assets/villa-aerial.jpg';

export function StepsSection() {
  const { t, language } = useLanguage();
  const { ref, isInView } = useScrollReveal({ threshold: 0.1 });

  const steps = [
    { key: 'step1', number: '01' },
    { key: 'step2', number: '02' },
    { key: 'step3', number: '03' },
    { key: 'step4', number: '04' },
    { key: 'step5', number: '05' },
    { key: 'step6', number: '06' },
  ];

  return (
    <section ref={ref} className="relative overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={villaAerial}
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-navy-900/95" />
      </div>

      <div className="relative z-10 section-editorial">
        <div className="container-wide">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="mb-20"
          >
            <span className="text-architectural text-sky-400 mb-6 block">
              {language === 'ru' ? 'Процесс покупки' : language === 'en' ? 'Purchase Process' : 'Satın Alma Süreci'}
            </span>
            
            <h2 className="text-section-title text-white max-w-2xl mb-6">
              {t('steps.title')}
            </h2>
            
            <p className="text-white/60 text-lg max-w-xl font-light">
              {language === 'ru' 
                ? 'От первого звонка до получения ключей — простой и прозрачный процесс' 
                : language === 'en'
                ? 'From the first call to receiving the keys — a simple and transparent process'
                : 'İlk aramadan anahtarları almaya kadar - basit ve şeffaf bir süreç'}
            </p>
          </motion.div>

          {/* Steps Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {steps.map((step, index) => (
              <motion.div
                key={step.key}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                className="group relative"
              >
                <div className="relative p-8 rounded-3xl bg-white/5 backdrop-blur-sm border border-white/10">
                  {/* Number */}
                  <span className="font-editorial text-5xl text-primary/70 block mb-4">
                    {step.number}
                  </span>
                  
                  {/* Content */}
                  <p className="text-white font-light text-lg leading-relaxed">
                    {t(`steps.${step.key}`)}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Final note */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="mt-16 text-center"
          >
            <p className="font-editorial text-xl text-white/80 italic">
              {language === 'ru' 
                ? 'Готовы начать? Свяжитесь с нами сегодня!' 
                : language === 'en'
                ? 'Ready to start? Contact us today!'
                : 'Başlamaya hazır mısınız? Bugün bizimle iletişime geçin!'}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

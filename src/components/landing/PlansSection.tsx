import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { ArrowRight, X, ChevronLeft, ChevronRight } from 'lucide-react';
import groundFloor from '@/assets/plans/ground-floor.png';
import firstFloor from '@/assets/plans/first-floor.png';
import secondFloor from '@/assets/plans/second-floor.png';

export function PlansSection() {
  const { t, language } = useLanguage();
  const { ref, isInView } = useScrollReveal({ threshold: 0.2 });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentPlan, setCurrentPlan] = useState(0);

  const plans = [
    { image: groundFloor, label: language === 'ru' ? 'Первый этаж' : language === 'en' ? 'Ground Floor' : 'Zemin Kat' },
    { image: firstFloor, label: language === 'ru' ? 'Второй этаж' : language === 'en' ? 'First Floor' : 'Birinci Kat' },
    { image: secondFloor, label: language === 'ru' ? 'Третий этаж' : language === 'en' ? 'Second Floor' : 'İkinci Kat' },
  ];

  const features = ['zones', 'master', 'private'];

  const openModal = (index: number) => {
    setCurrentPlan(index);
    setIsModalOpen(true);
  };

  const nextPlan = () => {
    setCurrentPlan((prev) => (prev + 1) % plans.length);
  };

  const prevPlan = () => {
    setCurrentPlan((prev) => (prev - 1 + plans.length) % plans.length);
  };

  return (
    <section id="plans" ref={ref} className="section-padding bg-background">
      <div className="container-wide">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <span className="text-architectural text-primary mb-6 block">
            {language === 'ru' ? 'Планировки' : language === 'en' ? 'Floor Plans' : 'Kat Planları'}
          </span>
          
          <h2 className="text-section-title text-navy-900 mb-6">
            {t('plans.title')}
          </h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
            {t('plans.description')}
          </p>

          <div className="space-y-2 mb-8">
            {features.map((feature, index) => (
              <motion.p
                key={feature}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                className="text-navy-900 font-light"
              >
                {t(`plans.${feature}`)}
              </motion.p>
            ))}
          </div>

          <p className="text-navy-900 italic font-editorial text-xl mb-12">
            {t('plans.comfort')}
          </p>
        </motion.div>

        {/* Plans Gallery */}
        <div className="grid md:grid-cols-3 gap-6 mb-10">
          {plans.map((plan, index) => (
            <motion.button
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              onClick={() => openModal(index)}
              className="group relative aspect-[4/3] rounded-2xl overflow-hidden bg-muted shadow-soft hover:shadow-medium transition-all"
            >
              <img
                src={plan.image}
                alt={plan.label}
                className="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-navy-900/0 group-hover:bg-navy-900/40 transition-colors flex items-center justify-center">
                <span className="text-white font-light opacity-0 group-hover:opacity-100 transition-opacity">
                  {language === 'ru' ? 'Увеличить' : language === 'en' ? 'View' : 'Görüntüle'}
                </span>
              </div>
              <div className="absolute bottom-4 left-4 right-4">
                <span className="inline-block px-3 py-1.5 rounded-full bg-white/90 text-navy-900 text-sm font-medium shadow-soft">
                  {plan.label}
                </span>
              </div>
            </motion.button>
          ))}
        </div>

        {/* CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center"
        >
          <button
            onClick={() => openModal(0)}
            className="btn-primary inline-flex items-center gap-3"
          >
            {t('plans.view')}
            <ArrowRight size={20} />
          </button>
        </motion.div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy-900/90 backdrop-blur-sm animate-fade-in">
          <button
            onClick={() => setIsModalOpen(false)}
            className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors text-white"
          >
            <X size={24} />
          </button>

          <button
            onClick={prevPlan}
            className="absolute left-4 p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors text-white"
          >
            <ChevronLeft size={24} />
          </button>

          <div className="max-w-5xl w-full aspect-[4/3] bg-white rounded-2xl overflow-hidden shadow-large">
            <img
              src={plans[currentPlan].image}
              alt={plans[currentPlan].label}
              className="w-full h-full object-contain p-8"
            />
          </div>

          <button
            onClick={nextPlan}
            className="absolute right-4 p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors text-white"
          >
            <ChevronRight size={24} />
          </button>

          {/* Thumbnails */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3">
            {plans.map((plan, index) => (
              <button
                key={index}
                onClick={() => setCurrentPlan(index)}
                className={`w-20 h-14 rounded-lg overflow-hidden border-2 transition-all ${
                  currentPlan === index
                    ? 'border-primary shadow-glow'
                    : 'border-transparent opacity-60 hover:opacity-100'
                }`}
              >
                <img
                  src={plan.image}
                  alt={plan.label}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}

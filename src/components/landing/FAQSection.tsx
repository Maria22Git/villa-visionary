import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

export function FAQSection() {
  const { t, language } = useLanguage();
  const { ref, isInView } = useScrollReveal({ threshold: 0.1 });

  const faqItems = [
    { q: 'faq.q1', a: 'faq.a1' },
    { q: 'faq.q2', a: 'faq.a2' },
    { q: 'faq.q3', a: 'faq.a3' },
    { q: 'faq.q4', a: 'faq.a4' },
    { q: 'faq.q5', a: 'faq.a5' },
    { q: 'faq.q6', a: 'faq.a6' },
    { q: 'faq.q7', a: 'faq.a7' },
    { q: 'faq.q8', a: 'faq.a8' },
    { q: 'faq.q9', a: 'faq.a9' },
  ];

  return (
    <section id="faq" ref={ref} className="relative overflow-hidden">
      {/* Background — Liquid Blue Panels */}
      <div className="absolute inset-0 bg-gradient-hero" />
      
      {/* Ornamental layers */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-48 bg-gradient-to-b from-background to-transparent" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 rounded-full bg-sky-400/5 blur-3xl" />
        <div className="absolute top-1/4 left-0 w-80 h-80 rounded-full bg-blue-soft/5 blur-3xl" />
      </div>

      <div className="relative z-10 section-editorial">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
            {/* Header — Sticky */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="lg:sticky lg:top-32 lg:h-fit"
            >
              <span className="text-architectural text-sky-400 mb-6 block">
                FAQ
              </span>
              
              <h2 className="text-section-title text-white mb-8">
                {t('faq.title')}
              </h2>
              
              <p className="text-white/60 text-lg font-light mb-10">
                {language === 'ru' 
                  ? 'Ответы на часто задаваемые вопросы о покупке виллы в Турции' 
                  : language === 'en'
                  ? 'Answers to frequently asked questions about buying a villa in Turkey'
                  : 'Türkiye\'de villa satın alma hakkında sıkça sorulan sorulara cevaplar'}
              </p>
              
              {/* Card with message */}
              <div className="hidden lg:block p-8 rounded-3xl bg-white/5 backdrop-blur-sm border border-white/10">
                <p className="text-white/80 italic font-editorial text-xl mb-4">
                  {language === 'ru' 
                    ? 'Не нашли ответ?' 
                    : language === 'en'
                    ? "Didn't find an answer?"
                    : 'Cevap bulamadınız mı?'}
                </p>
                <p className="text-white/50 font-light">
                  {language === 'ru' 
                    ? 'Свяжитесь с нами — мы ответим на все ваши вопросы' 
                    : language === 'en'
                    ? "Contact us — we'll answer all your questions"
                    : 'Bizimle iletişime geçin — tüm sorularınızı yanıtlayacağız'}
                </p>
              </div>
            </motion.div>

            {/* FAQ Items */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Accordion type="single" collapsible className="space-y-4">
                {faqItems.map((item, index) => (
                  <AccordionItem
                    key={index}
                    value={`item-${index}`}
                    className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:bg-white/8 transition-colors duration-300 data-[state=open]:bg-white/10"
                  >
                    <AccordionTrigger className="text-left font-light text-white hover:no-underline px-6 py-5 [&[data-state=open]>svg]:text-primary">
                      <span className="flex items-start gap-4 pr-4">
                        <span className="flex-shrink-0 font-editorial text-xl text-primary/70">
                          {String(index + 1).padStart(2, '0')}
                        </span>
                        <span className="text-base leading-relaxed">{t(item.q)}</span>
                      </span>
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-6 text-white/60">
                      <div className="pl-10">
                        <p className="text-base font-light leading-relaxed">{t(item.a)}</p>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import bedroom from '@/assets/interiors/bedroom-3.jpg';

export function FAQSection() {
  const { t, language } = useLanguage();

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
    <section id="faq" className="relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={bedroom}
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-navy-900/98 via-navy-900/95 to-navy-800/98" />
      </div>

      <div className="relative z-10 section-padding">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Header */}
            <div className="lg:sticky lg:top-32 lg:h-fit">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6">
                <span className="text-xl">❓</span>
                <span className="text-white/90 text-sm font-medium">FAQ</span>
              </div>
              
              <h2 className="text-section-title text-white mb-6">
                {t('faq.title')}
              </h2>
              
              <p className="text-white/70 text-lg mb-8">
                {language === 'ru' 
                  ? 'Ответы на часто задаваемые вопросы о покупке виллы в Турции' 
                  : language === 'en'
                  ? 'Answers to frequently asked questions about buying a villa in Turkey'
                  : 'Türkiye\'de villa satın alma hakkında sıkça sorulan sorulara cevaplar'}
              </p>
              
              <div className="hidden lg:block">
                <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
                  <p className="text-white/80 italic font-display text-lg">
                    {language === 'ru' 
                      ? 'Не нашли ответ? Свяжитесь с нами!' 
                      : language === 'en'
                      ? "Didn't find an answer? Contact us!"
                      : 'Cevap bulamadınız mı? Bizimle iletişime geçin!'}
                  </p>
                </div>
              </div>
            </div>

            {/* FAQ Items */}
            <div>
              <Accordion type="single" collapsible className="space-y-3">
                {faqItems.map((item, index) => (
                  <AccordionItem
                    key={index}
                    value={`item-${index}`}
                    className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 transition-colors"
                  >
                    <AccordionTrigger className="text-left font-medium text-white hover:no-underline px-6 py-5 [&[data-state=open]>svg]:text-primary">
                      <span className="flex items-start gap-3 pr-4">
                        <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary text-sm font-bold">
                          {index + 1}
                        </span>
                        <span className="text-lg">{t(item.q)}</span>
                      </span>
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-5 text-white/70">
                      <div className="pl-11">
                        <p className="text-base leading-relaxed">{t(item.a)}</p>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

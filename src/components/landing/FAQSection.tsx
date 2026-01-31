import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

export function FAQSection() {
  const { t } = useLanguage();

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
    <section id="faq" className="section-padding bg-background">
      <div className="container-narrow">
        <h2 className="text-section-title text-navy-900 text-center mb-12">
          {t('faq.title')}
        </h2>

        <Accordion type="single" collapsible className="space-y-4">
          {faqItems.map((item, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="card-premium border-none"
            >
              <AccordionTrigger className="text-left font-medium text-navy-900 hover:no-underline px-6 py-4">
                <span className="flex items-start gap-3">
                  <span className="text-primary">❓</span>
                  <span>{t(item.q)}</span>
                </span>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 text-muted-foreground">
                <div className="flex items-start gap-3 pl-7">
                  <span className="text-teal-500 flex-shrink-0">✅</span>
                  <span>{t(item.a)}</span>
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}

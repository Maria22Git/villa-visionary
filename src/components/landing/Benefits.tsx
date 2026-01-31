import { useLanguage } from '@/contexts/LanguageContext';
import { Flag, CreditCard, Percent, FileText, Zap, ArrowRight } from 'lucide-react';

export function Benefits() {
  const { t } = useLanguage();

  const benefits = [
    { key: 'citizenship', icon: Flag },
    { key: 'installment', icon: Percent },
    { key: 'downpayment', icon: CreditCard },
    { key: 'included', icon: FileText },
    { key: 'fast', icon: Zap },
  ];

  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="benefits" className="section-padding bg-gradient-light">
      <div className="container-wide">
        {/* Why Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-section-title text-navy-900 mb-6">
            {t('why.title')}
          </h2>
          <p className="text-section-subtitle">
            {t('why.description')}
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="mb-12">
          <h3 className="text-2xl md:text-3xl font-display font-semibold text-center text-navy-900 mb-10">
            {t('benefits.title')}
          </h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div
                  key={benefit.key}
                  className="card-premium group hover:scale-[1.02] transition-transform"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors">
                      <Icon size={24} className="text-primary group-hover:text-white" />
                    </div>
                    <div>
                      <p className="text-navy-900 font-medium text-lg leading-snug">
                        {t(`benefits.${benefit.key}`)}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <button
            onClick={scrollToContact}
            className="btn-primary inline-flex items-center gap-3"
          >
            {t('benefits.cta')}
            <ArrowRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
}

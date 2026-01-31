import { useLanguage } from '@/contexts/LanguageContext';

export function StepsSection() {
  const { t } = useLanguage();

  const steps = [
    { key: 'step1', number: 1 },
    { key: 'step2', number: 2 },
    { key: 'step3', number: 3 },
    { key: 'step4', number: 4 },
    { key: 'step5', number: 5 },
    { key: 'step6', number: 6 },
  ];

  return (
    <section className="section-padding bg-gradient-hero text-white">
      <div className="container-wide">
        <h2 className="text-section-title text-center mb-12">
          {t('steps.title')}
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((step, index) => (
            <div
              key={step.key}
              className="relative p-6 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/15 transition-colors"
            >
              <div className="absolute -top-4 left-6 w-10 h-10 rounded-full bg-primary flex items-center justify-center font-bold text-lg shadow-glow">
                {step.number}
              </div>
              <div className="pt-4">
                <p className="font-medium text-lg">
                  {t(`steps.${step.key}`)}
                </p>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-white/30" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

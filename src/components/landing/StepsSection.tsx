import { useLanguage } from '@/contexts/LanguageContext';
import villaAerial from '@/assets/villa-aerial.jpg';

export function StepsSection() {
  const { t, language } = useLanguage();

  const steps = [
    { key: 'step1', number: '01', icon: '🎯' },
    { key: 'step2', number: '02', icon: '📋' },
    { key: 'step3', number: '03', icon: '✍️' },
    { key: 'step4', number: '04', icon: '💳' },
    { key: 'step5', number: '05', icon: '🏠' },
    { key: 'step6', number: '06', icon: '🔑' },
  ];

  return (
    <section className="relative overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={villaAerial}
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-navy-900/95 via-navy-900/90 to-navy-800/95" />
      </div>

      <div className="relative z-10 section-padding">
        <div className="container-wide">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6">
              <span className="text-xl">📝</span>
              <span className="text-white/90 text-sm font-medium">
                {language === 'ru' ? 'Процесс покупки' : language === 'en' ? 'Purchase Process' : 'Satın Alma Süreci'}
              </span>
            </div>
            
            <h2 className="text-section-title text-white mb-4">
              {t('steps.title')}
            </h2>
            <p className="text-white/70 text-lg max-w-2xl mx-auto">
              {language === 'ru' 
                ? 'От первого звонка до получения ключей — простой и прозрачный процесс' 
                : language === 'en'
                ? 'From the first call to receiving the keys — a simple and transparent process'
                : 'İlk aramadan anahtarları almaya kadar - basit ve şeffaf bir süreç'}
            </p>
          </div>

          {/* Steps timeline */}
          <div className="relative">
            {/* Connection line */}
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {steps.map((step, index) => (
                <div
                  key={step.key}
                  className="relative group"
                >
                  {/* Step card */}
                  <div className="relative p-8 rounded-3xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300">
                    {/* Number badge */}
                    <div className="absolute -top-5 left-8 flex items-center gap-3">
                      <span className="text-5xl font-display font-bold text-primary/80 group-hover:text-primary transition-colors">
                        {step.number}
                      </span>
                      <span className="text-3xl">{step.icon}</span>
                    </div>
                    
                    <div className="pt-8">
                      <p className="text-white text-lg font-medium leading-relaxed">
                        {t(`steps.${step.key}`)}
                      </p>
                    </div>

                    {/* Arrow for non-last items */}
                    {index < steps.length - 1 && (
                      <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-8 rounded-full bg-navy-800 border border-white/20 flex items-center justify-center z-10">
                        <span className="text-white/60">→</span>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Final CTA */}
          <div className="mt-16 text-center">
            <p className="text-white/80 text-xl font-display italic mb-6">
              {language === 'ru' 
                ? 'Готовы начать? Свяжитесь с нами сегодня!' 
                : language === 'en'
                ? 'Ready to start? Contact us today!'
                : 'Başlamaya hazır mısınız? Bugün bizimle iletişime geçin!'}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

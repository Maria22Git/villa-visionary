import { useLanguage } from '@/contexts/LanguageContext';
import { Award, Heart, Sun, Home } from 'lucide-react';

export function LifestyleSection() {
  const { t } = useLanguage();

  const features = [
    { key: 'status', icon: Award },
    { key: 'comfort', icon: Home },
    { key: 'enjoyment', icon: Heart },
    { key: 'climate', icon: Sun },
  ];

  return (
    <section className="section-padding bg-navy-900 text-white">
      <div className="container-wide">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-section-title mb-6">
            {t('lifestyle.title')}
          </h2>
          <p className="text-white/70 text-lg mb-4">
            {t('lifestyle.description')}
          </p>
          <p className="text-white/80 text-xl font-display mb-10">
            {t('lifestyle.intro')}
          </p>

          <div className="grid sm:grid-cols-2 gap-6 mb-10">
            {features.map((feature) => {
              const Icon = feature.icon;
              return (
                <div
                  key={feature.key}
                  className="flex items-center gap-4 p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center">
                    <Icon size={24} className="text-primary" />
                  </div>
                  <span className="font-medium text-lg">
                    {t(`lifestyle.${feature.key}`)}
                  </span>
                </div>
              );
            })}
          </div>

          <p className="text-white/90 italic font-display text-2xl">
            {t('lifestyle.home')}
          </p>
        </div>
      </div>
    </section>
  );
}

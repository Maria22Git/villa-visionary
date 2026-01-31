import { useLanguage } from '@/contexts/LanguageContext';
import { Home, Thermometer, Wrench } from 'lucide-react';

export function WhiteBoxSection() {
  const { t } = useLanguage();

  const features = [
    { key: 'smarthome', icon: Home },
    { key: 'floors', icon: Thermometer },
    { key: 'materials', icon: Wrench },
  ];

  return (
    <section className="section-padding-sm bg-muted/50">
      <div className="container-wide">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-section-title text-navy-900 mb-6">
            {t('whitebox.title')}
          </h2>
          <p className="text-muted-foreground text-lg mb-10">
            {t('whitebox.description')}
          </p>

          <div className="flex flex-wrap justify-center gap-6">
            {features.map((feature) => {
              const Icon = feature.icon;
              return (
                <div
                  key={feature.key}
                  className="flex items-center gap-3 px-6 py-3 rounded-full bg-card shadow-soft"
                >
                  <Icon size={20} className="text-primary" />
                  <span className="text-navy-900 font-medium">
                    {t(`whitebox.${feature.key}`)}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

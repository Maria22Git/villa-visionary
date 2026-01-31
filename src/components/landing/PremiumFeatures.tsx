import { useLanguage } from '@/contexts/LanguageContext';
import { Smartphone, Thermometer, PanelTop, Gem } from 'lucide-react';

export function PremiumFeatures() {
  const { t } = useLanguage();

  const features = [
    { key: 'smarthome', icon: Smartphone },
    { key: 'heating', icon: Thermometer },
    { key: 'windows', icon: PanelTop },
    { key: 'materials', icon: Gem },
  ];

  return (
    <section className="section-padding-sm bg-background">
      <div className="container-wide">
        <h2 className="text-section-title text-navy-900 text-center mb-12">
          {t('premium.title')}
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.key}
                className="text-center p-8 rounded-2xl bg-gradient-to-b from-sky-200/30 to-transparent border border-sky-200/50 hover:shadow-soft transition-shadow"
              >
                <div className="w-14 h-14 rounded-2xl bg-navy-900 flex items-center justify-center mx-auto mb-4">
                  <Icon size={28} className="text-sky-400" />
                </div>
                <p className="text-navy-900 font-medium">
                  {t(`premium.${feature.key}`)}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

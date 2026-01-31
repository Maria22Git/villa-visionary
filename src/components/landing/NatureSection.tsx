import { useLanguage } from '@/contexts/LanguageContext';
import { Mountain, TreePine, Waves } from 'lucide-react';

export function NatureSection() {
  const { t } = useLanguage();

  const features = [
    { key: 'mountains', icon: Mountain },
    { key: 'forests', icon: TreePine },
    { key: 'views', icon: Waves },
  ];

  return (
    <section className="section-padding bg-gradient-to-br from-teal-500 to-navy-800 text-white relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-sky-400 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="container-wide relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <div className="text-6xl mb-6">🌿</div>
          <h2 className="text-section-title mb-6">
            {t('nature.title')}
          </h2>
          <p className="text-white/80 text-lg mb-10">
            {t('nature.description')}
          </p>

          <div className="grid sm:grid-cols-3 gap-6 mb-10">
            {features.map((feature) => {
              const Icon = feature.icon;
              return (
                <div
                  key={feature.key}
                  className="p-6 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20"
                >
                  <Icon size={32} className="mx-auto mb-3 text-sky-200" />
                  <p className="font-medium">{t(`nature.${feature.key}`)}</p>
                </div>
              );
            })}
          </div>

          <p className="text-white/90 italic font-display text-xl">
            {t('nature.peace')}
          </p>
        </div>
      </div>
    </section>
  );
}

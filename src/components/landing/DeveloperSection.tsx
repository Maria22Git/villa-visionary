import { useLanguage } from '@/contexts/LanguageContext';
import { Trophy, Building, CheckCircle, Scale } from 'lucide-react';

export function DeveloperSection() {
  const { t } = useLanguage();

  const features = [
    { key: 'top3', icon: Trophy },
    { key: 'projects', icon: Building },
    { key: 'quality', icon: CheckCircle },
    { key: 'standards', icon: Scale },
  ];

  return (
    <section className="section-padding bg-muted/50">
      <div className="container-wide">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Visual */}
          <div className="order-2 lg:order-1">
            <div className="card-premium p-12 text-center">
              <div className="text-6xl font-display font-bold text-navy-900 mb-2">
                IKY Group
              </div>
              <p className="text-muted-foreground text-lg mb-6">
                {t('developer.description')}
              </p>
              <div className="flex justify-center gap-8">
                <div className="text-center">
                  <div className="text-4xl font-display font-bold text-primary">40+</div>
                  <p className="text-muted-foreground text-sm">Проектов</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-display font-bold text-primary">TOP-3</div>
                  <p className="text-muted-foreground text-sm">Алания</p>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <h2 className="text-section-title text-navy-900 mb-8">
              {t('developer.title')}
            </h2>

            <div className="space-y-4 mb-8">
              {features.map((feature) => {
                const Icon = feature.icon;
                return (
                  <div
                    key={feature.key}
                    className="flex items-center gap-4"
                  >
                    <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                      <Icon size={20} className="text-primary" />
                    </div>
                    <span className="text-navy-900 font-medium">
                      {t(`developer.${feature.key}`)}
                    </span>
                  </div>
                );
              })}
            </div>

            <p className="text-navy-900 font-display text-xl italic">
              {t('developer.trust')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

import { useLanguage } from '@/contexts/LanguageContext';
import { Check, Waves, Home, Sparkles, Flame, Car } from 'lucide-react';
import heroImage from '@/assets/hero-villa.jpg';

export function ProjectSection() {
  const { t } = useLanguage();

  const features = [
    { key: 'architecture', icon: Home },
    { key: 'layouts', icon: Sparkles },
    { key: 'pool', icon: Waves },
    { key: 'bbq', icon: Flame },
    { key: 'parking', icon: Car },
  ];

  return (
    <section id="about" className="section-padding bg-navy-900">
      <div className="container-wide">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div className="relative">
            <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-large">
              <img
                src={heroImage}
                alt="Victoria Villas Project"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-6 shadow-large">
              <div className="text-4xl mb-2">🌊</div>
              <p className="text-navy-900 font-display font-semibold">Алания</p>
              <p className="text-muted-foreground text-sm">Турция</p>
            </div>
          </div>

          {/* Content */}
          <div>
            <h2 className="text-section-title text-white mb-6">
              {t('project.title')}
            </h2>
            <p className="text-white/70 text-lg mb-8">
              {t('project.description')}
            </p>

            <div className="space-y-4">
              {features.map((feature) => {
                const Icon = feature.icon;
                return (
                  <div key={feature.key} className="flex items-center gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
                      <Icon size={20} className="text-sky-400" />
                    </div>
                    <span className="text-white font-medium">
                      {t(`project.${feature.key}`)}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

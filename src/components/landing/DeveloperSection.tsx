import { useLanguage } from '@/contexts/LanguageContext';
import { Trophy, Building, CheckCircle, Scale } from 'lucide-react';
import livingRoom from '@/assets/interiors/living-room-2.jpg';

export function DeveloperSection() {
  const { t, language } = useLanguage();

  const features = [
    { key: 'top3', icon: Trophy, emoji: '🏆' },
    { key: 'projects', icon: Building, emoji: '🏗️' },
    { key: 'quality', icon: CheckCircle, emoji: '✅' },
    { key: 'standards', icon: Scale, emoji: '⚖️' },
  ];

  const stats = [
    { value: '40+', label: { ru: 'Проектов', en: 'Projects', tr: 'Proje' } },
    { value: 'TOP-3', label: { ru: 'Алания', en: 'Alanya', tr: 'Alanya' } },
    { value: '15+', label: { ru: 'Лет опыта', en: 'Years', tr: 'Yıl' } },
  ];

  return (
    <section className="relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={livingRoom}
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-l from-navy-900/98 via-navy-900/95 to-navy-900/85" />
      </div>

      <div className="relative z-10 section-padding">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Stats visual */}
            <div className="order-2 lg:order-1">
              <div className="relative">
                {/* Decorative glow */}
                <div className="absolute -inset-8 bg-gradient-to-br from-primary/20 to-sky-500/20 rounded-3xl blur-3xl" />
                
                <div className="relative rounded-3xl bg-white/5 backdrop-blur-sm border border-white/10 p-10">
                  <div className="text-center mb-8">
                    <h3 className="text-5xl lg:text-6xl font-display font-bold text-white mb-2">
                      IKY Group
                    </h3>
                    <p className="text-white/70 text-lg">
                      {t('developer.description')}
                    </p>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-4">
                    {stats.map((stat, index) => (
                      <div 
                        key={index}
                        className="text-center p-4 rounded-2xl bg-white/5 border border-white/10"
                      >
                        <div className="text-3xl md:text-4xl font-display font-bold text-primary">
                          {stat.value}
                        </div>
                        <p className="text-white/70 text-sm mt-1">
                          {stat.label[language as keyof typeof stat.label]}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="order-1 lg:order-2">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6">
                <span className="text-xl">🏢</span>
                <span className="text-white/90 text-sm font-medium">
                  {language === 'ru' ? 'Застройщик' : language === 'en' ? 'Developer' : 'Geliştirici'}
                </span>
              </div>

              <h2 className="text-section-title text-white mb-8">
                {t('developer.title')}
              </h2>

              <div className="space-y-4 mb-8">
                {features.map((feature) => (
                  <div
                    key={feature.key}
                    className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
                  >
                    <span className="text-2xl">{feature.emoji}</span>
                    <span className="text-white font-medium text-lg">
                      {t(`developer.${feature.key}`)}
                    </span>
                  </div>
                ))}
              </div>

              <p className="text-white/90 font-display text-xl italic border-l-4 border-primary pl-6">
                {t('developer.trust')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

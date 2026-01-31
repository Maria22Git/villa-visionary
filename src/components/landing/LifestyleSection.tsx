import { useLanguage } from '@/contexts/LanguageContext';
import { Award, Heart, Sun, Home, ArrowRight } from 'lucide-react';
import livingRoom from '@/assets/interiors/living-room-1.jpg';

export function LifestyleSection() {
  const { t, language } = useLanguage();

  const features = [
    { key: 'status', icon: Award, emoji: '🏆' },
    { key: 'comfort', icon: Home, emoji: '🏠' },
    { key: 'enjoyment', icon: Heart, emoji: '❤️' },
    { key: 'climate', icon: Sun, emoji: '☀️' },
  ];

  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative overflow-hidden">
      {/* Full-width background image */}
      <div className="absolute inset-0">
        <img
          src={livingRoom}
          alt="Luxury Living Room"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-900/95 via-navy-900/85 to-navy-900/70" />
      </div>

      <div className="relative z-10 section-padding">
        <div className="container-wide">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6">
              <span className="text-xl">🌟</span>
              <span className="text-white/90 text-sm font-medium">
                {language === 'ru' ? 'Образ жизни' : language === 'en' ? 'Lifestyle' : 'Yaşam Tarzı'}
              </span>
            </div>

            <h2 className="text-section-title text-white mb-6">
              {t('lifestyle.title')}
            </h2>
            
            <p className="text-white/70 text-lg mb-4">
              {t('lifestyle.description')}
            </p>
            
            <p className="text-white/90 text-xl font-display mb-10">
              {t('lifestyle.intro')}
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mb-10">
              {features.map((feature) => {
                return (
                  <div
                    key={feature.key}
                    className="flex items-center gap-4 p-5 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/10 hover:bg-white/15 hover:border-white/20 transition-all"
                  >
                    <span className="text-3xl">{feature.emoji}</span>
                    <span className="font-medium text-white text-lg">
                      {t(`lifestyle.${feature.key}`)}
                    </span>
                  </div>
                );
              })}
            </div>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
              <p className="text-white/90 italic font-display text-2xl">
                {t('lifestyle.home')}
              </p>
              <button
                onClick={scrollToContact}
                className="btn-primary inline-flex items-center gap-3 whitespace-nowrap"
              >
                {t('hero.cta')}
                <ArrowRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

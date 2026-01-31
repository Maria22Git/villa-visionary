import { useLanguage } from '@/contexts/LanguageContext';
import { Check, ArrowRight } from 'lucide-react';
import heroImage from '@/assets/hero-villa.jpg';

export function Hero() {
  const { t } = useLanguage();

  const features = [
    { key: 'turnkey', icon: '👉' },
    { key: 'nohidden', icon: '👉' },
    { key: 'developer', icon: '👉' },
  ];

  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Victoria Villas"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-navy-900/80 via-navy-900/60 to-navy-900/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 container-wide pt-24 pb-16 md:pt-32 md:pb-24">
        <div className="max-w-4xl mx-auto text-center">
          {/* Small label */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6 animate-fade-in">
            <span className="text-2xl">🇹🇷</span>
            <span className="text-white/90 text-sm font-medium">
              {t('hero.subtitle')}
            </span>
          </div>

          {/* Main Title */}
          <h1 className="text-hero text-white mb-6 animate-slide-up">
            {t('hero.title')}
          </h1>

          {/* Headline */}
          <p className="text-xl md:text-2xl lg:text-3xl font-display text-white/90 mb-4 animate-slide-up" style={{ animationDelay: '0.1s' }}>
            {t('hero.headline')}
          </p>

          {/* Description */}
          <p className="text-lg text-white/70 mb-8 max-w-2xl mx-auto animate-slide-up" style={{ animationDelay: '0.2s' }}>
            {t('hero.description')}
          </p>

          {/* Features */}
          <div className="flex flex-wrap justify-center gap-4 mb-10 animate-slide-up" style={{ animationDelay: '0.3s' }}>
            {features.map((feature, index) => (
              <div
                key={feature.key}
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20"
              >
                <span>{feature.icon}</span>
                <span className="text-white/90 text-sm">
                  {t(`hero.${feature.key}`)}
                </span>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="animate-slide-up" style={{ animationDelay: '0.4s' }}>
            <button
              onClick={scrollToContact}
              className="btn-primary text-lg px-10 py-5 inline-flex items-center gap-3"
            >
              {t('hero.cta')}
              <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
        <div className="w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-white/50 rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
}

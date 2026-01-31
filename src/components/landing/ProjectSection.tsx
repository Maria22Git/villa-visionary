import { useLanguage } from '@/contexts/LanguageContext';
import { Check, Waves, Home, Sparkles, Flame, Car, ArrowRight } from 'lucide-react';
import heroImage from '@/assets/hero-villa.jpg';
import villaAerial from '@/assets/villa-aerial.jpg';

export function ProjectSection() {
  const { t, language } = useLanguage();

  const features = [
    { key: 'architecture', icon: Home },
    { key: 'layouts', icon: Sparkles },
    { key: 'pool', icon: Waves },
    { key: 'bbq', icon: Flame },
    { key: 'parking', icon: Car },
  ];

  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="about" className="relative overflow-hidden">
      {/* Hero image section */}
      <div className="relative h-[60vh] lg:h-[80vh]">
        <img
          src={villaAerial}
          alt="Victoria Villas Aerial View"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-navy-900/40 via-navy-900/20 to-navy-900" />
        
        {/* Floating stats */}
        <div className="absolute bottom-0 left-0 right-0">
          <div className="container-wide py-8">
            <div className="flex flex-wrap justify-center lg:justify-start gap-6">
              <div className="px-8 py-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20">
                <div className="text-3xl md:text-4xl font-display font-bold text-white">8</div>
                <p className="text-white/80 text-sm">
                  {language === 'ru' ? 'Вилл в проекте' : language === 'en' ? 'Villas' : 'Villa'}
                </p>
              </div>
              <div className="px-8 py-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20">
                <div className="text-3xl md:text-4xl font-display font-bold text-white">400+</div>
                <p className="text-white/80 text-sm">m²</p>
              </div>
              <div className="px-8 py-4 rounded-2xl bg-primary/90 backdrop-blur-md">
                <div className="text-3xl md:text-4xl font-display font-bold text-white">$390K</div>
                <p className="text-white/90 text-sm">
                  {language === 'ru' ? 'от цены' : language === 'en' ? 'from' : 'başlangıç'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content section */}
      <div className="bg-navy-900 py-16 lg:py-24">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Image with badge */}
            <div className="relative order-2 lg:order-1">
              <div className="relative rounded-3xl overflow-hidden shadow-large">
                <img
                  src={heroImage}
                  alt="Victoria Villas Project"
                  className="w-full h-auto object-cover aspect-[4/3]"
                />
                {/* Decorative corner */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-primary/30 to-transparent" />
              </div>
              
              {/* Floating badge */}
              <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-6 shadow-large">
                <div className="text-4xl mb-2">🌊</div>
                <p className="text-navy-900 font-display font-semibold">Алания</p>
                <p className="text-muted-foreground text-sm">Турция</p>
              </div>
            </div>

            {/* Content */}
            <div className="order-1 lg:order-2">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6">
                <span className="text-2xl">🏗️</span>
                <span className="text-white/90 text-sm font-medium">
                  {language === 'ru' ? 'Строительство 2025' : language === 'en' ? 'Construction 2025' : 'İnşaat 2025'}
                </span>
              </div>

              <h2 className="text-section-title text-white mb-6">
                {t('project.title')}
              </h2>
              <p className="text-white/70 text-lg mb-8">
                {t('project.description')}
              </p>

              <div className="grid sm:grid-cols-2 gap-4 mb-8">
                {features.map((feature) => {
                  const Icon = feature.icon;
                  return (
                    <div 
                      key={feature.key} 
                      className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
                    >
                      <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-sky-500/20 to-primary/20 flex items-center justify-center">
                        <Icon size={24} className="text-sky-400" />
                      </div>
                      <span className="text-white font-medium">
                        {t(`project.${feature.key}`)}
                      </span>
                    </div>
                  );
                })}
              </div>

              <button
                onClick={scrollToContact}
                className="btn-primary inline-flex items-center gap-3"
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

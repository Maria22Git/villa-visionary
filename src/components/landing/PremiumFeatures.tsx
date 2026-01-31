import { useLanguage } from '@/contexts/LanguageContext';
import { Smartphone, Thermometer, PanelTop, Gem } from 'lucide-react';
import bedroom from '@/assets/interiors/bedroom-1.jpg';

export function PremiumFeatures() {
  const { t, language } = useLanguage();

  const features = [
    { key: 'smarthome', icon: Smartphone, emoji: '📱' },
    { key: 'heating', icon: Thermometer, emoji: '🌡️' },
    { key: 'windows', icon: PanelTop, emoji: '🪟' },
    { key: 'materials', icon: Gem, emoji: '💎' },
  ];

  return (
    <section className="relative overflow-hidden">
      {/* Background with image */}
      <div className="absolute inset-0">
        <img
          src={bedroom}
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-900/98 via-navy-900/95 to-navy-900/80" />
      </div>

      <div className="relative z-10 section-padding">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Content */}
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6">
                <span className="text-xl">⭐</span>
                <span className="text-white/90 text-sm font-medium">
                  {language === 'ru' ? 'Премиум оснащение' : language === 'en' ? 'Premium Equipment' : 'Premium Ekipman'}
                </span>
              </div>

              <h2 className="text-section-title text-white mb-6">
                {t('premium.title')}
              </h2>

              <p className="text-white/70 text-lg mb-10">
                {language === 'ru' 
                  ? 'Каждая вилла оснащена передовыми технологиями и материалами премиум-класса для максимального комфорта.' 
                  : language === 'en'
                  ? 'Each villa is equipped with cutting-edge technology and premium materials for maximum comfort.'
                  : 'Her villa, maksimum konfor için son teknoloji ve premium malzemelerle donatılmıştır.'}
              </p>

              <div className="grid sm:grid-cols-2 gap-4">
                {features.map((feature, index) => {
                  const Icon = feature.icon;
                  return (
                    <div
                      key={feature.key}
                      className="group relative p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 hover:border-primary/30 transition-all duration-300"
                    >
                      {/* Decorative gradient on hover */}
                      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                      
                      <div className="relative flex items-start gap-4">
                        <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-gradient-to-br from-navy-800 to-navy-900 border border-white/10 flex items-center justify-center">
                          <span className="text-2xl">{feature.emoji}</span>
                        </div>
                        <div>
                          <p className="text-white font-medium text-lg leading-snug">
                            {t(`premium.${feature.key}`)}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Visual placeholder - could be replaced with actual image */}
            <div className="hidden lg:block">
              <div className="relative">
                {/* Decorative elements */}
                <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 to-sky-500/20 rounded-3xl blur-2xl" />
                <div className="relative aspect-square rounded-3xl bg-white/5 backdrop-blur-sm border border-white/10 p-8 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-8xl mb-4">🏡</div>
                    <p className="text-white font-display text-2xl">Smart Villa</p>
                    <p className="text-white/60">Premium Technology</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

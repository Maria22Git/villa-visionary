import { useLanguage } from '@/contexts/LanguageContext';
import { MapPin, Clock, School, Building } from 'lucide-react';

export function CityConceptSection() {
  const { t } = useLanguage();

  return (
    <section className="section-padding bg-gradient-hero text-white">
      <div className="container-wide">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6">
              <MapPin size={18} />
              <span className="text-sm font-medium">{t('city.location')}</span>
            </div>

            <h2 className="text-section-title mb-6">
              {t('city.title')}
            </h2>
            <p className="text-white/70 text-lg mb-8">
              {t('city.description')}
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center">
                  <Clock size={24} className="text-sky-400" />
                </div>
                <span className="font-medium">{t('city.center')}</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center">
                  <Building size={24} className="text-sky-400" />
                </div>
                <span className="font-medium">{t('city.amenities')}</span>
              </div>
            </div>

            <p className="text-white/80 italic font-display text-lg">
              {t('city.ecosystem')}
            </p>
          </div>

          {/* Map placeholder */}
          <div className="relative">
            <div className="aspect-square rounded-3xl bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center">
              <div className="text-center p-8">
                <div className="text-6xl mb-4">🗺️</div>
                <p className="text-white/70">15 минут до всего важного</p>
                <div className="mt-6 flex flex-wrap justify-center gap-3">
                  {['🏖️ Пляжи', '🏥 Медицина', '🏫 Школы', '🛒 Магазины'].map((item) => (
                    <span key={item} className="px-3 py-1.5 rounded-full bg-white/10 text-sm">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

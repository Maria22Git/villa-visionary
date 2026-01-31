import { useLanguage } from '@/contexts/LanguageContext';
import { Shield, Video, Users, Lock } from 'lucide-react';
export function SecuritySection() {
  const {
    t
  } = useLanguage();
  const features = [{
    key: 'closed',
    icon: Lock
  }, {
    key: 'guard',
    icon: Shield
  }, {
    key: 'cctv',
    icon: Video
  }, {
    key: 'access',
    icon: Users
  }];
  return <section className="section-padding-sm bg-background">
      <div className="container-wide">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <h2 className="text-section-title text-navy-900 mb-8">
              {t('security.title')}
            </h2>

            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {features.map(feature => {
              const Icon = feature.icon;
              return;
            })}
            </div>

            <p className="text-navy-900 font-display text-xl">
              {t('security.family')}
            </p>
          </div>

          {/* Visual */}
          <div className="flex items-center justify-center">
            <div className="relative">
              <div className="w-64 h-64 rounded-full bg-gradient-to-br from-navy-800 to-teal-500 flex items-center justify-center">
                <Shield size={80} className="text-white" />
              </div>
              <div className="absolute -top-4 -right-4 w-16 h-16 rounded-full bg-primary flex items-center justify-center text-white text-2xl animate-pulse">
                24/7
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
}
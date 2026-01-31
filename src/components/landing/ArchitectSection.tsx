import { useLanguage } from '@/contexts/LanguageContext';
import ibrahimBey from '@/assets/ibrahim-bey.png';

export function ArchitectSection() {
  const { t } = useLanguage();

  return (
    <section className="section-padding bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl" />
      
      <div className="container-wide relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Photo */}
          <div className="relative">
            <div className="relative mx-auto lg:mx-0 max-w-md">
              {/* Decorative frame */}
              <div className="absolute -inset-4 bg-gradient-to-br from-primary/30 to-sky-500/30 rounded-3xl blur-xl" />
              <div className="absolute -inset-1 bg-gradient-to-br from-primary to-sky-500 rounded-3xl opacity-50" />
              
              <div className="relative rounded-3xl overflow-hidden bg-navy-800">
                <img
                  src={ibrahimBey}
                  alt="İbrahim Bey - Со-учредитель IKY Group"
                  className="w-full h-auto object-cover"
                />
                {/* Gradient overlay at bottom */}
                <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-navy-900/90 to-transparent" />
                
                {/* Name badge */}
                <div className="absolute bottom-6 left-6 right-6">
                  <p className="text-white font-display text-xl font-semibold">
                    {t('architect.name')}
                  </p>
                  <p className="text-sky-400 text-sm">
                    {t('architect.role')}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Quote & Content */}
          <div className="text-white">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6">
              <span className="text-primary text-xl">💎</span>
              <span className="text-white/90 text-sm font-medium">
                IKY Group
              </span>
            </div>

            <h2 className="text-section-title mb-8">
              {t('architect.title')}
            </h2>

            <div className="relative mb-8">
              {/* Quote mark */}
              <span className="absolute -left-2 -top-4 text-6xl text-primary/30 font-display leading-none">
                "
              </span>
              <blockquote className="text-xl md:text-2xl lg:text-3xl font-display italic text-white/90 pl-8 border-l-4 border-primary">
                {t('architect.quote')}
              </blockquote>
            </div>

            <p className="text-white/70 text-lg">
              {t('architect.description')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

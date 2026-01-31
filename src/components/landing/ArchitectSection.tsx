import { useLanguage } from '@/contexts/LanguageContext';

export function ArchitectSection() {
  const { t } = useLanguage();

  return (
    <section className="section-padding bg-muted/50">
      <div className="container-narrow">
        <div className="text-center">
          <h2 className="text-section-title text-navy-900 mb-10">
            {t('architect.title')}
          </h2>

          <div className="card-premium max-w-3xl mx-auto">
            <div className="flex flex-col md:flex-row items-center gap-8">
              {/* Photo placeholder */}
              <div className="flex-shrink-0">
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-navy-800 to-teal-500 flex items-center justify-center text-white text-3xl font-display">
                  İK
                </div>
              </div>

              {/* Quote */}
              <div className="text-left">
                <blockquote className="text-xl md:text-2xl font-display text-navy-900 italic mb-4">
                  {t('architect.quote')}
                </blockquote>
                <div>
                  <p className="font-semibold text-navy-900">{t('architect.name')}</p>
                  <p className="text-muted-foreground text-sm">{t('architect.role')}</p>
                </div>
              </div>
            </div>
          </div>

          <p className="text-muted-foreground text-lg mt-8 max-w-2xl mx-auto">
            {t('architect.description')}
          </p>
        </div>
      </div>
    </section>
  );
}

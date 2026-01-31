import { useLanguage } from '@/contexts/LanguageContext';
import { Link } from 'react-router-dom';

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-navy-900 text-white py-12">
      <div className="container-wide">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div>
            <span className="font-display text-2xl font-bold">Victoria Villas</span>
            <p className="text-white/50 text-sm mt-1">
              IKY Group © {new Date().getFullYear()}
            </p>
          </div>

          {/* Links */}
          <div className="flex items-center gap-6 text-sm">
            <Link to="/privacy" className="text-white/70 hover:text-white transition-colors">
              {t('footer.privacy')}
            </Link>
            <Link to="/terms" className="text-white/70 hover:text-white transition-colors">
              {t('footer.terms')}
            </Link>
          </div>

          {/* Rights */}
          <div className="text-white/50 text-sm">
            {t('footer.rights')}
          </div>
        </div>
      </div>
    </footer>
  );
}

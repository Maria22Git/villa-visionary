import { useLanguage } from '@/contexts/LanguageContext';
import { Link } from 'react-router-dom';

export function Footer() {
  const { t, language } = useLanguage();

  return (
    <footer className="bg-navy-900 text-white py-16">
      <div className="container-wide">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo */}
          <div>
            <span className="font-editorial text-2xl">Victoria Villas</span>
            <p className="text-white/40 text-sm mt-2 font-light tracking-wide">
              IKY Group © {new Date().getFullYear()}
            </p>
          </div>

          {/* Links */}
          <div className="flex items-center gap-8 text-sm">
            <Link to="/privacy" className="text-white/50 hover:text-white transition-colors font-light">
              {t('footer.privacy')}
            </Link>
            <Link to="/terms" className="text-white/50 hover:text-white transition-colors font-light">
              {t('footer.terms')}
            </Link>
          </div>

          {/* Rights */}
          <div className="text-white/40 text-sm font-light">
            {t('footer.rights')}
          </div>
        </div>
      </div>
    </footer>
  );
}

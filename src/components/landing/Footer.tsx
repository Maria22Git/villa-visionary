import { useLanguage } from '@/contexts/LanguageContext';
import { Link } from 'react-router-dom';
import { Mail, Phone } from 'lucide-react';

export function Footer() {
  const { t, language } = useLanguage();

  return (
    <footer className="bg-navy-900 text-white py-16">
      <div className="container-wide">
        {/* Top row: Logo + Contact */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-8">
          <div className="text-center md:text-left">
            <span className="font-editorial text-2xl">Victoria Villas</span>
            <p className="text-white/40 text-sm mt-2 font-light tracking-wide">
              IKY Group © {new Date().getFullYear()}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8">
            <a href="mailto:ikymudur@gmail.com" className="flex items-center gap-2 text-white/60 hover:text-white transition-colors text-sm font-light">
              <Mail size={16} />
              <span>ikymudur@gmail.com</span>
            </a>
            <a href="tel:+905380225080" className="flex items-center gap-2 text-white/60 hover:text-white transition-colors text-sm font-light">
              <Phone size={16} />
              <span>+90 538 022 50 80</span>
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-white/10 mb-6" />

        {/* Bottom row: Links + Rights */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-6 text-sm">
            <Link to="/privacy" className="text-white/40 hover:text-white transition-colors font-light">
              {t('footer.privacy')}
            </Link>
            <Link to="/terms" className="text-white/40 hover:text-white transition-colors font-light">
              {t('footer.terms')}
            </Link>
          </div>
          <div className="text-white/40 text-xs font-light">
            {t('footer.rights')}
          </div>
        </div>
      </div>
    </footer>
  );
}

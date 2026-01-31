import { useState, useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Menu, X } from 'lucide-react';

const languages = [
  { code: 'ru' as const, label: 'RU' },
  { code: 'en' as const, label: 'EN' },
  { code: 'tr' as const, label: 'TR' },
];

export function Header() {
  const { language, setLanguage, t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { key: 'about', href: '#about' },
    { key: 'plans', href: '#plans' },
    { key: 'benefits', href: '#benefits' },
    { key: 'faq', href: '#faq' },
    { key: 'contact', href: '#contact' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-soft py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container-wide flex items-center justify-between">
        {/* Logo */}
        <a
          href="#"
          className={`font-display text-2xl font-bold transition-colors ${
            isScrolled ? 'text-navy-900' : 'text-white'
          }`}
        >
          Victoria Villas
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1">
          {navItems.map((item) => (
            <button
              key={item.key}
              onClick={() => scrollToSection(item.href)}
              className={`btn-pill transition-colors ${
                isScrolled
                  ? 'text-navy-900 hover:bg-muted'
                  : 'text-white/90 hover:text-white border-white/20 hover:bg-white/10'
              }`}
            >
              {t(`nav.${item.key}`)}
            </button>
          ))}
        </nav>

        {/* Right Side */}
        <div className="hidden lg:flex items-center gap-4">
          {/* Language Switcher */}
          <div className="flex items-center gap-1">
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => setLanguage(lang.code)}
                className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all ${
                  language === lang.code
                    ? 'bg-primary text-primary-foreground'
                    : isScrolled
                    ? 'text-navy-900 hover:bg-muted'
                    : 'text-white/70 hover:text-white'
                }`}
              >
                {lang.label}
              </button>
            ))}
          </div>

          {/* CTA Button */}
          <button
            onClick={() => scrollToSection('#contact')}
            className="btn-primary text-sm py-3"
          >
            {t('nav.consultation')}
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className={`lg:hidden p-2 rounded-full transition-colors ${
            isScrolled
              ? 'text-navy-900 hover:bg-muted'
              : 'text-white hover:bg-white/10'
          }`}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-white shadow-large animate-fade-in">
          <nav className="container-wide py-6 flex flex-col gap-2">
            {navItems.map((item) => (
              <button
                key={item.key}
                onClick={() => scrollToSection(item.href)}
                className="text-left px-4 py-3 rounded-lg text-navy-900 hover:bg-muted transition-colors font-medium"
              >
                {t(`nav.${item.key}`)}
              </button>
            ))}
            <hr className="my-4 border-border" />
            <div className="flex items-center gap-2 px-4">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => setLanguage(lang.code)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    language === lang.code
                      ? 'bg-primary text-primary-foreground'
                      : 'text-navy-900 bg-muted'
                  }`}
                >
                  {lang.label}
                </button>
              ))}
            </div>
            <button
              onClick={() => scrollToSection('#contact')}
              className="btn-primary mt-4 mx-4 text-center"
            >
              {t('nav.consultation')}
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}

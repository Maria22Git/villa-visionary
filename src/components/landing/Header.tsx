import { useState, useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

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
      setIsScrolled(window.scrollY > 80);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
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
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ease-cinematic ${
          isScrolled
            ? 'py-4 bg-white/90 backdrop-blur-xl shadow-soft'
            : 'py-6 bg-transparent'
        }`}
      >
        <div className="container-wide flex items-center justify-between">
          {/* Logo */}
          <a
            href="#"
            className={`font-editorial text-2xl tracking-[-0.02em] transition-colors duration-500 ${
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
                className={`relative px-5 py-2.5 text-[15px] font-normal tracking-wide transition-all duration-500 rounded-full ${
                  isScrolled
                    ? 'text-navy-800 hover:text-navy-900 hover:bg-muted'
                    : 'text-white/80 hover:text-white hover:bg-white/10'
                }`}
              >
                {t(`nav.${item.key}`)}
              </button>
            ))}
          </nav>

          {/* Right Side */}
          <div className="hidden lg:flex items-center gap-6">
            {/* Language Switcher */}
            <div className="flex items-center gap-1">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => setLanguage(lang.code)}
                  className={`px-3 py-1.5 text-xs font-medium tracking-widest uppercase transition-all duration-300 rounded-full ${
                    language === lang.code
                      ? 'bg-primary text-primary-foreground'
                      : isScrolled
                      ? 'text-navy-600 hover:text-navy-900'
                      : 'text-white/60 hover:text-white'
                  }`}
                >
                  {lang.label}
                </button>
              ))}
            </div>

            {/* CTA Button */}
            <button
              onClick={() => scrollToSection('#contact')}
              className={`px-6 py-2.5 text-sm font-medium tracking-wide rounded-full transition-all duration-500 ${
                isScrolled
                  ? 'bg-primary text-white hover:bg-primary/90'
                  : 'bg-white/10 text-white border border-white/30 hover:bg-white/20'
              }`}
            >
              {t('nav.consultation')}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`lg:hidden p-3 rounded-full transition-colors duration-300 ${
              isScrolled
                ? 'text-navy-900 hover:bg-muted'
                : 'text-white hover:bg-white/10'
            }`}
          >
            {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            <div className="absolute inset-0 bg-navy-900/95 backdrop-blur-xl" />
            <div className="relative h-full flex flex-col justify-center items-center p-8">
              <nav className="flex flex-col items-center gap-6">
                {navItems.map((item, index) => (
                  <motion.button
                    key={item.key}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    onClick={() => scrollToSection(item.href)}
                    className="font-editorial text-3xl text-white/90 hover:text-white transition-colors"
                  >
                    {t(`nav.${item.key}`)}
                  </motion.button>
                ))}
              </nav>
              
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="mt-12 flex items-center gap-4"
              >
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => setLanguage(lang.code)}
                    className={`px-5 py-2.5 rounded-full text-sm font-medium tracking-widest uppercase transition-all ${
                      language === lang.code
                        ? 'bg-primary text-white'
                        : 'text-white/60 hover:text-white border border-white/20'
                    }`}
                  >
                    {lang.label}
                  </button>
                ))}
              </motion.div>

              <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                onClick={() => scrollToSection('#contact')}
                className="mt-8 btn-primary"
              >
                {t('nav.consultation')}
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

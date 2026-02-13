import { useState, useEffect, useCallback } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { ChevronLeft, ChevronRight, Check } from 'lucide-react';
import villaAerial from '@/assets/villa-exterior-new.png';
import poolView from '@/assets/pool-view.jpg';
import villaExterior from '@/assets/villa-exterior.jpg';
import villaArchitecture from '@/assets/villa-architecture.jpg';
import balconyView from '@/assets/balcony-view.jpg';
import mountainsPanorama from '@/assets/mountains-panorama.jpg';
import villaEntrance from '@/assets/villa-entrance.jpg';
import villaMountains from '@/assets/villa-mountains.jpg';
import villaSitePlan from '@/assets/villa-site-plan.jpg';
import villaPoolFacade from '@/assets/villa-pool-facade.jpg';

export function ProjectSection() {
  const { t, language } = useLanguage();
  const { ref, isInView } = useScrollReveal({ threshold: 0.15 });
  const [currentSlide, setCurrentSlide] = useState(0);

  const features = [
    language === 'ru' ? 'Современная архитектура' : language === 'en' ? 'Modern architecture' : 'Modern mimari',
    language === 'ru' ? 'Просторные планировки' : language === 'en' ? 'Spacious layouts' : 'Geniş planlar',
    language === 'ru' ? 'Infinity-бассейн' : language === 'en' ? 'Infinity pool' : 'Sonsuzluk havuzu',
    language === 'ru' ? 'Джакузи' : language === 'en' ? 'Jacuzzi' : 'Jakuzi',
    language === 'ru' ? 'Зона барбекю' : language === 'en' ? 'BBQ zone' : 'Barbekü alanı',
    language === 'ru' ? 'Парковка для авто' : language === 'en' ? 'Car parking' : 'Otopark',
  ];

  const galleryImages = [
    { src: villaAerial, label: language === 'ru' ? 'Панорама на море' : language === 'en' ? 'Sea Panorama' : 'Deniz Panoraması' },
    { src: villaMountains, label: language === 'ru' ? 'Вид на горы' : language === 'en' ? 'Mountain View' : 'Dağ Manzarası' },
    { src: villaEntrance, label: language === 'ru' ? 'Вход' : language === 'en' ? 'Entrance' : 'Giriş' },
    { src: villaPoolFacade, label: language === 'ru' ? 'Фасад с бассейном' : language === 'en' ? 'Pool Facade' : 'Havuz Cephesi' },
    { src: poolView, label: language === 'ru' ? 'Бассейн' : language === 'en' ? 'Pool' : 'Havuz' },
    { src: villaExterior, label: language === 'ru' ? 'Экстерьер' : language === 'en' ? 'Exterior' : 'Dış Görünüm' },
    { src: villaSitePlan, label: language === 'ru' ? 'План участка' : language === 'en' ? 'Site Plan' : 'Vaziyet Planı' },
    { src: mountainsPanorama, label: language === 'ru' ? 'Панорама гор' : language === 'en' ? 'Mountain Panorama' : 'Dağ Panoraması' },
  ];

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % galleryImages.length);
  }, [galleryImages.length]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  }, [galleryImages.length]);

  // Auto-play every 2 seconds
  useEffect(() => {
    const interval = setInterval(nextSlide, 2000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  return (
    <section 
      id="about" 
      ref={ref}
      className="relative overflow-hidden"
    >
      {/* Full-width Image with Content Overlay */}
      <div className="relative min-h-[90vh]">
        {/* Background Image — Lightened */}
        <motion.div 
          className="absolute inset-0"
          initial={{ scale: 1.1 }}
          animate={isInView ? { scale: 1 } : {}}
          transition={{ duration: 1.5, ease: [0.4, 0, 0.2, 1] }}
        >
          <img
            src={villaAerial}
            alt="Victoria Villas Aerial View"
            className="w-full h-full object-cover"
          />
          {/* Lighter overlay to show the beautiful image */}
          <div className="absolute inset-0 bg-gradient-to-t from-navy-900/80 via-navy-900/40 to-navy-900/20" />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-900/60 via-transparent to-transparent" />
        </motion.div>

        <div className="relative z-10 container-wide h-full min-h-[90vh] flex items-end pb-20">
          <div className="grid lg:grid-cols-2 gap-16 items-end w-full">
            {/* Left Column — Text with dark backdrop */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="p-8 rounded-2xl bg-navy-900/80 backdrop-blur-sm"
            >
              <h2 className="text-editorial-xl text-white mb-3 leading-[1.05]">
                {t('project.title')}
              </h2>
              
              <p className="text-white/80 text-lg font-light leading-relaxed mb-8 max-w-xl">
                {t('project.description')}
              </p>

              {/* Features Grid */}
              <div className="grid grid-cols-2 gap-3 mb-8">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <Check size={16} className="text-white flex-shrink-0" />
                    <span className="text-white/90 font-light">{feature}</span>
                  </motion.div>
                ))}
              </div>

              <div className="w-24 h-px bg-gradient-to-r from-sky-400/40 to-transparent mb-8" />
              
              <p className="font-editorial text-xl text-white/90 italic max-w-lg">
                {t('project.premium')}
              </p>
            </motion.div>

            {/* Right Column — Empty for balance */}
            <div />
          </div>
        </div>
      </div>

      {/* Photo Gallery Slider */}
      <div className="bg-navy-900 py-12">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-editorial text-xl text-white/80">
                {language === 'ru' ? 'Галерея проекта' : language === 'en' ? 'Project Gallery' : 'Proje Galerisi'}
              </h3>
              <div className="flex gap-2">
                <button
                  onClick={prevSlide}
                  className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors text-white"
                >
                  <ChevronLeft size={20} />
                </button>
                <button
                  onClick={nextSlide}
                  className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors text-white"
                >
                  <ChevronRight size={20} />
                </button>
              </div>
            </div>

            {/* Slider — crossfade only, no movement */}
            <div className="relative overflow-hidden rounded-2xl aspect-[21/9]">
              {galleryImages.map((image, index) => (
                <img
                  key={index}
                  src={image.src}
                  alt={image.label}
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
                    currentSlide === index ? 'opacity-100 z-10' : 'opacity-0 z-0'
                  }`}
                />
              ))}
              <div className="absolute bottom-4 left-4 z-20 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm text-white text-sm">
                {galleryImages[currentSlide].label}
              </div>
            </div>

            {/* Dots */}
            <div className="flex justify-center gap-2 mt-4">
              {galleryImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    currentSlide === index
                      ? 'bg-white w-8'
                      : 'bg-white/30 hover:bg-white/50'
                  }`}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Location Caption */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 1 }}
        className="bg-navy-900 py-6 border-t border-white/10"
      >
        <div className="container-wide flex items-center justify-between">
          <span className="text-xs text-white/40 tracking-wide">
            📍 Alanya, Turkey
          </span>
          <span className="text-xs text-white/40 tracking-wide">
            Victoria Villas © 2024
          </span>
        </div>
      </motion.div>
    </section>
  );
}

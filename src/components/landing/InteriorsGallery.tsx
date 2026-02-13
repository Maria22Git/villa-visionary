import { useState, useEffect, useCallback } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { motion, AnimatePresence } from 'framer-motion';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

// Import images
import bathroom from '@/assets/interiors/bathroom.png';
import bedroom1 from '@/assets/interiors/bedroom-1.jpg';
import bedroom2 from '@/assets/interiors/bedroom-2.png';
import bedroom3 from '@/assets/interiors/bedroom-3.jpg';
import bedroom4 from '@/assets/interiors/bedroom-4.png';
import living1 from '@/assets/interiors/living-room-1.jpg';
import living2 from '@/assets/interiors/living-room-2.jpg';

interface GalleryImage {
  src: string;
  category: string;
}

export function InteriorsGallery() {
  const { language } = useLanguage();
  const { ref, isInView } = useScrollReveal({ threshold: 0.1 });
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const categories = {
    ru: { living: 'Гостиная', bedroom: 'Спальня', bathroom: 'Ванная' },
    en: { living: 'Living', bedroom: 'Bedroom', bathroom: 'Bathroom' },
    tr: { living: 'Salon', bedroom: 'Yatak Odası', bathroom: 'Banyo' },
  };

  const cat = categories[language];

  const images: GalleryImage[] = [
    { src: living1, category: cat.living },
    { src: bedroom1, category: cat.bedroom },
    { src: bathroom, category: cat.bathroom },
    { src: bedroom3, category: cat.bedroom },
    { src: living2, category: cat.living },
    { src: bedroom2, category: cat.bedroom },
    { src: bedroom4, category: cat.bedroom },
  ];

  const goNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  }, [images.length]);

  const goPrev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  }, [images.length]);

  // Auto-play every 2 seconds
  useEffect(() => {
    if (selectedImage !== null) return;
    const interval = setInterval(goNext, 2000);
    return () => clearInterval(interval);
  }, [goNext, selectedImage]);

  const navigateLightbox = (direction: 'prev' | 'next') => {
    if (selectedImage === null) return;
    const newIndex = direction === 'next' 
      ? (selectedImage + 1) % images.length
      : (selectedImage - 1 + images.length) % images.length;
    setSelectedImage(newIndex);
  };

  // Show 3 images on desktop, 1 on mobile
  const getVisibleIndices = () => {
    const indices = [];
    for (let i = -1; i <= 1; i++) {
      indices.push((currentIndex + i + images.length) % images.length);
    }
    return indices;
  };

  const visibleIndices = getVisibleIndices();

  return (
    <section ref={ref} className="section-editorial bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-atmosphere" />

      <div className="container-wide relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <span className="text-architectural text-primary mb-4 block">
            {language === 'ru' ? 'Интерьеры' : language === 'en' ? 'Interiors' : 'İç Mekanlar'}
          </span>
          <h2 className="text-section-title text-navy-900 max-w-2xl">
            {language === 'ru' 
              ? 'Современный дизайн, вдохновлённый природой' 
              : language === 'en'
              ? 'Modern design inspired by nature'
              : 'Doğadan ilham alan modern tasarım'}
          </h2>
        </motion.div>

        {/* Carousel */}
        <div className="relative">
          {/* Navigation Buttons */}
          <button
            onClick={goPrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-white/80 backdrop-blur-sm shadow-lg hover:bg-white transition-colors -translate-x-1/2 md:translate-x-0"
          >
            <ChevronLeft size={22} className="text-navy-900" />
          </button>
          <button
            onClick={goNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-white/80 backdrop-blur-sm shadow-lg hover:bg-white transition-colors translate-x-1/2 md:translate-x-0"
          >
            <ChevronRight size={22} className="text-navy-900" />
          </button>

          {/* Images */}
          <div className="overflow-hidden mx-8 md:mx-12">
            <div className="flex gap-4">
              {/* Mobile: 1 image, Desktop: 3 images */}
              <div className="hidden md:flex gap-4 w-full">
                {visibleIndices.map((imgIndex, i) => (
                  <motion.button
                    key={`${imgIndex}-${i}`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    onClick={() => setSelectedImage(imgIndex)}
                    className={`group relative overflow-hidden rounded-2xl flex-1 ${
                      i === 1 ? 'aspect-[4/3]' : 'aspect-[4/3] opacity-80 hover:opacity-100'
                    } transition-opacity duration-300`}
                  >
                    <img
                      src={images[imgIndex].src}
                      alt={images[imgIndex].category}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-navy-900/0 group-hover:bg-navy-900/30 transition-colors duration-500" />
                    <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span className="px-4 py-2 rounded-full bg-white/90 backdrop-blur-sm text-navy-900 text-xs font-medium tracking-wide">
                        {images[imgIndex].category}
                      </span>
                    </div>
                  </motion.button>
                ))}
              </div>
              
              {/* Mobile: single image */}
              <div className="md:hidden w-full">
                <AnimatePresence mode="wait">
                  <motion.button
                    key={currentIndex}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -50 }}
                    transition={{ duration: 0.3 }}
                    onClick={() => setSelectedImage(currentIndex)}
                    className="group relative overflow-hidden rounded-2xl w-full aspect-[4/3]"
                  >
                    <img
                      src={images[currentIndex].src}
                      alt={images[currentIndex].category}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute bottom-4 left-4">
                      <span className="px-4 py-2 rounded-full bg-white/90 backdrop-blur-sm text-navy-900 text-xs font-medium tracking-wide">
                        {images[currentIndex].category}
                      </span>
                    </div>
                  </motion.button>
                </AnimatePresence>
              </div>
            </div>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  currentIndex === index ? 'bg-primary w-6' : 'bg-navy-900/20 hover:bg-navy-900/40'
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-navy-900/95 backdrop-blur-xl p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-6 right-6 p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors text-white"
            >
              <X size={20} />
            </button>

            <button
              onClick={(e) => { e.stopPropagation(); navigateLightbox('prev'); }}
              className="absolute left-4 md:left-8 p-4 rounded-full bg-white/10 hover:bg-white/20 transition-colors text-white"
            >
              <ChevronLeft size={24} />
            </button>

            <motion.img
              key={selectedImage}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              src={images[selectedImage].src}
              alt={images[selectedImage].category}
              className="max-h-[80vh] max-w-[90vw] object-contain rounded-2xl shadow-cinematic"
              onClick={(e) => e.stopPropagation()}
            />

            <button
              onClick={(e) => { e.stopPropagation(); navigateLightbox('next'); }}
              className="absolute right-4 md:right-8 p-4 rounded-full bg-white/10 hover:bg-white/20 transition-colors text-white"
            >
              <ChevronRight size={24} />
            </button>

            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
              {images.map((img, index) => (
                <button
                  key={index}
                  onClick={(e) => { e.stopPropagation(); setSelectedImage(index); }}
                  className={`w-16 h-12 rounded-lg overflow-hidden border-2 transition-all ${
                    selectedImage === index
                      ? 'border-white opacity-100'
                      : 'border-transparent opacity-50 hover:opacity-80'
                  }`}
                >
                  <img src={img.src} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

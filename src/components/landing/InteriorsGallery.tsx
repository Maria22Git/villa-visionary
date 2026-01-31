import { useState } from 'react';
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
  span?: string;
}

export function InteriorsGallery() {
  const { language } = useLanguage();
  const { ref, isInView } = useScrollReveal({ threshold: 0.1 });
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const categories = {
    ru: { living: 'Гостиная', bedroom: 'Спальня', bathroom: 'Ванная' },
    en: { living: 'Living', bedroom: 'Bedroom', bathroom: 'Bathroom' },
    tr: { living: 'Salon', bedroom: 'Yatak Odası', bathroom: 'Banyo' },
  };

  const cat = categories[language];

  const images: GalleryImage[] = [
    { src: living1, category: cat.living, span: 'col-span-2 row-span-2' },
    { src: bedroom1, category: cat.bedroom, span: 'col-span-1 row-span-1' },
    { src: bathroom, category: cat.bathroom, span: 'col-span-1 row-span-1' },
    { src: bedroom3, category: cat.bedroom, span: 'col-span-1 row-span-2' },
    { src: living2, category: cat.living, span: 'col-span-1 row-span-1' },
    { src: bedroom2, category: cat.bedroom, span: 'col-span-1 row-span-1' },
  ];

  const navigateGallery = (direction: 'prev' | 'next') => {
    if (selectedImage === null) return;
    const newIndex = direction === 'next' 
      ? (selectedImage + 1) % images.length
      : (selectedImage - 1 + images.length) % images.length;
    setSelectedImage(newIndex);
  };

  return (
    <section ref={ref} className="section-editorial bg-background relative overflow-hidden">
      {/* Subtle Background */}
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

        {/* Masonry Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[200px] md:auto-rows-[240px]">
          {images.map((image, index) => (
            <motion.button
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              onClick={() => setSelectedImage(index)}
              className={`group relative overflow-hidden rounded-2xl ${image.span || ''}`}
            >
              <img
                src={image.src}
                alt={image.category}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-navy-900/0 group-hover:bg-navy-900/40 transition-colors duration-500" />
              
              {/* Category Label */}
              <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="px-4 py-2 rounded-full bg-white/90 backdrop-blur-sm text-navy-900 text-xs font-medium tracking-wide">
                  {image.category}
                </span>
              </div>

              {/* Corner Accent */}
              <div className="absolute top-0 right-0 w-20 h-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-white/60" />
              </div>
            </motion.button>
          ))}
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
            {/* Close Button */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-6 right-6 p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors text-white"
            >
              <X size={20} />
            </button>

            {/* Navigation */}
            <button
              onClick={(e) => { e.stopPropagation(); navigateGallery('prev'); }}
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
              onClick={(e) => { e.stopPropagation(); navigateGallery('next'); }}
              className="absolute right-4 md:right-8 p-4 rounded-full bg-white/10 hover:bg-white/20 transition-colors text-white"
            >
              <ChevronRight size={24} />
            </button>

            {/* Thumbnails */}
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

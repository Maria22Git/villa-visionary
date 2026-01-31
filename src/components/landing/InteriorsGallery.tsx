import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';

// Import all interior images
import livingRoom1 from '@/assets/interiors/living-room-1.jpg';
import livingRoom2 from '@/assets/interiors/living-room-2.jpg';
import bedroom1 from '@/assets/interiors/bedroom-1.jpg';
import bedroom2 from '@/assets/interiors/bedroom-2.png';
import bedroom3 from '@/assets/interiors/bedroom-3.jpg';
import bedroom4 from '@/assets/interiors/bedroom-4.png';
import bathroom from '@/assets/interiors/bathroom.png';

interface GalleryImage {
  src: string;
  category: string;
  label: { ru: string; en: string; tr: string };
}

export function InteriorsGallery() {
  const { t, language } = useLanguage();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [activeCategory, setActiveCategory] = useState('all');

  const images: GalleryImage[] = [
    { src: livingRoom1, category: 'living', label: { ru: 'Гостиная', en: 'Living Room', tr: 'Oturma Odası' } },
    { src: livingRoom2, category: 'living', label: { ru: 'Гостиная и кухня', en: 'Living & Kitchen', tr: 'Salon ve Mutfak' } },
    { src: bedroom1, category: 'bedroom', label: { ru: 'Мастер-спальня', en: 'Master Bedroom', tr: 'Ana Yatak Odası' } },
    { src: bedroom2, category: 'bedroom', label: { ru: 'Спальня', en: 'Bedroom', tr: 'Yatak Odası' } },
    { src: bedroom3, category: 'bedroom', label: { ru: 'Дизайнерская спальня', en: 'Designer Bedroom', tr: 'Tasarım Yatak Odası' } },
    { src: bedroom4, category: 'bedroom', label: { ru: 'Рабочая зона', en: 'Work Area', tr: 'Çalışma Alanı' } },
    { src: bathroom, category: 'bathroom', label: { ru: 'Ванная комната', en: 'Bathroom', tr: 'Banyo' } },
  ];

  const categories = [
    { key: 'all', label: { ru: 'Все', en: 'All', tr: 'Tümü' } },
    { key: 'living', label: { ru: 'Гостиная', en: 'Living', tr: 'Salon' } },
    { key: 'bedroom', label: { ru: 'Спальни', en: 'Bedrooms', tr: 'Yatak Odaları' } },
    { key: 'bathroom', label: { ru: 'Ванные', en: 'Bathrooms', tr: 'Banyolar' } },
  ];

  const filteredImages = activeCategory === 'all' 
    ? images 
    : images.filter(img => img.category === activeCategory);

  const openModal = (index: number) => {
    setCurrentIndex(index);
    setIsModalOpen(true);
  };

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % filteredImages.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + filteredImages.length) % filteredImages.length);
  };

  return (
    <section className="section-padding bg-navy-900 relative overflow-hidden">
      {/* Decorative gradient */}
      <div className="absolute top-0 left-0 w-full h-48 bg-gradient-to-b from-background to-transparent" />
      
      <div className="container-wide relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6">
            <span className="text-2xl">✨</span>
            <span className="text-white/90 text-sm font-medium">
              {language === 'ru' ? 'Премиум интерьеры' : language === 'en' ? 'Premium Interiors' : 'Premium İç Mekanlar'}
            </span>
          </div>
          
          <h2 className="text-section-title text-white mb-6">
            {language === 'ru' ? 'Роскошь в каждой детали' : language === 'en' ? 'Luxury in Every Detail' : 'Her Detayda Lüks'}
          </h2>
          
          <p className="text-white/70 text-lg max-w-2xl mx-auto mb-8">
            {language === 'ru' 
              ? 'Эксклюзивные интерьеры от ведущих дизайнеров Турции. Каждая вилла — произведение искусства.' 
              : language === 'en'
              ? "Exclusive interiors by Turkey's leading designers. Each villa is a work of art."
              : "Türkiye'nin önde gelen tasarımcılarından özel iç mekanlar. Her villa bir sanat eseri."}
          </p>

          {/* Category filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {categories.map((cat) => (
              <button
                key={cat.key}
                onClick={() => setActiveCategory(cat.key)}
                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all ${
                  activeCategory === cat.key
                    ? 'bg-primary text-white shadow-glow'
                    : 'bg-white/10 text-white/80 hover:bg-white/20'
                }`}
              >
                {cat.label[language as keyof typeof cat.label]}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid - Masonry-like layout */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-[200px] md:auto-rows-[250px]">
          {filteredImages.map((image, index) => (
            <button
              key={index}
              onClick={() => openModal(index)}
              className={`group relative rounded-2xl overflow-hidden shadow-large hover:shadow-glow transition-all duration-300 ${
                index === 0 || index === 3 ? 'row-span-2' : ''
              } ${index === 1 ? 'col-span-2' : ''}`}
            >
              <img
                src={image.src}
                alt={image.label[language as keyof typeof image.label]}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-900/80 via-navy-900/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
              
              {/* Zoom icon */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                  <ZoomIn size={24} className="text-white" />
                </div>
              </div>
              
              {/* Label */}
              <div className="absolute bottom-4 left-4 right-4">
                <span className="inline-block px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-sm text-white text-sm font-medium">
                  {image.label[language as keyof typeof image.label]}
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy-900/95 backdrop-blur-md animate-fade-in">
          <button
            onClick={() => setIsModalOpen(false)}
            className="absolute top-4 right-4 p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors text-white z-10"
          >
            <X size={24} />
          </button>

          <button
            onClick={prevImage}
            className="absolute left-4 p-4 rounded-full bg-white/10 hover:bg-white/20 transition-colors text-white"
          >
            <ChevronLeft size={28} />
          </button>

          <div className="max-w-6xl w-full max-h-[85vh] relative">
            <img
              src={filteredImages[currentIndex].src}
              alt={filteredImages[currentIndex].label[language as keyof typeof filteredImages[0]['label']]}
              className="w-full h-full object-contain rounded-2xl"
            />
            
            {/* Caption */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2">
              <span className="px-6 py-3 rounded-full bg-navy-900/80 backdrop-blur-sm text-white font-medium">
                {filteredImages[currentIndex].label[language as keyof typeof filteredImages[0]['label']]}
              </span>
            </div>
          </div>

          <button
            onClick={nextImage}
            className="absolute right-4 p-4 rounded-full bg-white/10 hover:bg-white/20 transition-colors text-white"
          >
            <ChevronRight size={28} />
          </button>

          {/* Thumbnails */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 mt-4 max-w-full overflow-x-auto px-4 pb-2">
            {filteredImages.map((img, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`flex-shrink-0 w-16 h-12 md:w-20 md:h-14 rounded-lg overflow-hidden border-2 transition-all ${
                  currentIndex === index
                    ? 'border-primary shadow-glow'
                    : 'border-transparent opacity-50 hover:opacity-100'
                }`}
              >
                <img
                  src={img.src}
                  alt=""
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}

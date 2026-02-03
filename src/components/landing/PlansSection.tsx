import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { ArrowRight, X, ChevronLeft, ChevronRight, Check } from 'lucide-react';

// Villa 5+1 plans (light background)
import villa5GroundFloor from '@/assets/plans/villa-5plus1-ground-floor.png';
import villa5FirstFloor from '@/assets/plans/villa-5plus1-first-floor.png';
import villa5Attic from '@/assets/plans/villa-5plus1-attic.png';
import villa5Basement from '@/assets/plans/villa-5plus1-basement.png';

// Villa 3+1 plans (silver background with English labels)
import villa3GroundFloor from '@/assets/plans/villa-3plus1-ground-floor.png';
import villa3FirstFloor from '@/assets/plans/villa-3plus1-first-floor.png';
import villa3SecondFloor from '@/assets/plans/villa-3plus1-second-floor.png';

export function PlansSection() {
  const { t, language } = useLanguage();
  const { ref, isInView } = useScrollReveal({ threshold: 0.2 });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentPlan, setCurrentPlan] = useState(0);
  const [activeVillaType, setActiveVillaType] = useState<'3+1' | '5+1'>('3+1');

  const plans3Plus1 = [
    { image: villa3GroundFloor, label: language === 'ru' ? 'Первый этаж' : language === 'en' ? 'Ground Floor' : 'Zemin Kat' },
    { image: villa3FirstFloor, label: language === 'ru' ? 'Второй этаж' : language === 'en' ? 'First Floor' : 'Birinci Kat' },
    { image: villa3SecondFloor, label: language === 'ru' ? 'Третий этаж' : language === 'en' ? 'Second Floor' : 'İkinci Kat' },
  ];

  const plans5Plus1 = [
    { image: villa5Basement, label: language === 'ru' ? 'Подвал' : language === 'en' ? 'Basement' : 'Bodrum Kat' },
    { image: villa5GroundFloor, label: language === 'ru' ? 'Первый этаж' : language === 'en' ? 'Ground Floor' : 'Zemin Kat' },
    { image: villa5FirstFloor, label: language === 'ru' ? 'Второй этаж' : language === 'en' ? 'First Floor' : 'Birinci Kat' },
    { image: villa5Attic, label: language === 'ru' ? 'Мансарда' : language === 'en' ? 'Attic' : 'Çatı Arası' },
  ];

  const currentPlans = activeVillaType === '3+1' ? plans3Plus1 : plans5Plus1;

  const villa3Plus1 = {
    title: language === 'ru' ? 'Вилла 3+1' : language === 'en' ? 'Villa 3+1' : 'Villa 3+1',
    area: '208 – 250 m²',
    features: language === 'ru' 
      ? ['Кухня-гостиная', '2 Детские комнаты', 'Бассейн', 'Джакузи', 'Видеонаблюдение', 'Мастер-спальня с гардеробной', 'Парковка для авто', 'Охрана']
      : language === 'en'
      ? ['Kitchen-living room', '2 Children rooms', 'Pool', 'Jacuzzi', 'Video surveillance', 'Master bedroom with wardrobe', 'Car parking', 'Security']
      : ['Mutfak-oturma odası', '2 Çocuk odası', 'Havuz', 'Jakuzi', 'Video gözetimi', 'Giyinme odalı ana yatak odası', 'Otopark', 'Güvenlik'],
  };

  const villa5Plus1 = {
    title: language === 'ru' ? 'Вилла 5+1' : language === 'en' ? 'Villa 5+1' : 'Villa 5+1',
    area: '450 – 654 m²',
    features: language === 'ru'
      ? ['Двусветная гостиная', 'Постирочная', 'Лифт', 'Гардеробная', 'Бассейн', 'Хамам', 'Сауна', 'Детская площадка', 'Сад', 'Видеонаблюдение', 'Подземная парковка на 2 авто', 'Охрана']
      : language === 'en'
      ? ['Double-height living room', 'Laundry room', 'Elevator', 'Walk-in closet', 'Pool', 'Hammam', 'Sauna', 'Playground', 'Garden', 'Video surveillance', 'Underground parking for 2 cars', 'Security']
      : ['Çift yükseklikli oturma odası', 'Çamaşır odası', 'Asansör', 'Giyinme odası', 'Havuz', 'Hamam', 'Sauna', 'Oyun alanı', 'Bahçe', 'Video gözetimi', '2 araçlık yeraltı otoparkı', 'Güvenlik'],
  };

  const openModal = (index: number) => {
    setCurrentPlan(index);
    setIsModalOpen(true);
  };

  const nextPlan = () => {
    setCurrentPlan((prev) => (prev + 1) % currentPlans.length);
  };

  const prevPlan = () => {
    setCurrentPlan((prev) => (prev - 1 + currentPlans.length) % currentPlans.length);
  };

  return (
    <section id="plans" ref={ref} className="section-padding bg-background">
      <div className="container-wide">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-architectural text-primary mb-6 block">
            {language === 'ru' ? 'Планировки' : language === 'en' ? 'Floor Plans' : 'Kat Planları'}
          </span>
          
          <h2 className="text-section-title text-navy-900 mb-6">
            {t('plans.title')}
          </h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
            {t('plans.description')}
          </p>

          <p className="text-navy-900 italic font-editorial text-xl mb-4">
            {language === 'ru' ? 'Продуманное зонирование и отдельные зоны отдыха' 
              : language === 'en' ? 'Thoughtful zoning and separate relaxation areas' 
              : 'Düşünceli bölgeleme ve ayrı dinlenme alanları'}
          </p>
        </motion.div>

        {/* Villa Types Cards */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {/* Villa 3+1 */}
          <motion.button
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            onClick={() => setActiveVillaType('3+1')}
            className={`relative p-8 rounded-3xl text-left transition-all ${
              activeVillaType === '3+1' 
                ? 'bg-gradient-to-br from-white to-mist/30 border-2 border-primary shadow-medium' 
                : 'bg-gradient-to-br from-white to-mist/30 border border-blue-soft/20 shadow-soft hover:shadow-medium'
            }`}
          >
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-editorial text-3xl text-navy-900">{villa3Plus1.title}</h3>
              <span className="px-4 py-2 rounded-full bg-primary/10 text-primary font-bold text-lg">
                {villa3Plus1.area}
              </span>
            </div>
            
            <div className="grid grid-cols-2 gap-3">
              {villa3Plus1.features.map((feature, index) => (
                <div key={index} className="flex items-center gap-2">
                  <Check size={16} className="text-primary flex-shrink-0" />
                  <span className="text-navy-900/80 text-sm">{feature}</span>
                </div>
              ))}
            </div>
          </motion.button>

          {/* Villa 5+1 - Fixed readability */}
          <motion.button
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            onClick={() => setActiveVillaType('5+1')}
            className={`relative p-8 rounded-3xl text-left transition-all ${
              activeVillaType === '5+1' 
                ? 'bg-gradient-to-br from-navy-900 to-navy-main border-2 border-sky-light shadow-large' 
                : 'bg-gradient-to-br from-navy-900 to-navy-main border border-white/20 shadow-large hover:border-white/40'
            }`}
          >
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-editorial text-3xl text-white">{villa5Plus1.title}</h3>
              <span className="px-4 py-2 rounded-full bg-sky-light/20 text-sky-light font-bold text-lg border border-sky-light/30">
                {villa5Plus1.area}
              </span>
            </div>
            
            <div className="grid grid-cols-2 gap-3">
              {villa5Plus1.features.map((feature, index) => (
                <div key={index} className="flex items-center gap-2">
                  <Check size={16} className="text-sky-light flex-shrink-0" />
                  <span className="text-white text-sm">{feature}</span>
                </div>
              ))}
            </div>
          </motion.button>
        </div>

        {/* Plans Gallery Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="text-center mb-8"
        >
          <h3 className="font-editorial text-2xl text-navy-900">
            {language === 'ru' 
              ? `Планировки ${activeVillaType === '3+1' ? 'Вилла 3+1' : 'Вилла 5+1'}` 
              : language === 'en' 
              ? `${activeVillaType === '3+1' ? 'Villa 3+1' : 'Villa 5+1'} Floor Plans` 
              : `${activeVillaType === '3+1' ? 'Villa 3+1' : 'Villa 5+1'} Kat Planları`}
          </h3>
        </motion.div>

        {/* Plans Gallery */}
        <div className={`grid gap-6 mb-10 ${currentPlans.length === 4 ? 'md:grid-cols-4' : 'md:grid-cols-3'}`}>
          {currentPlans.map((plan, index) => (
            <motion.button
              key={`${activeVillaType}-${index}`}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
              onClick={() => openModal(index)}
              className="group relative aspect-[4/3] rounded-2xl overflow-hidden bg-muted shadow-soft hover:shadow-medium transition-all"
            >
              <img
                src={plan.image}
                alt={plan.label}
                className="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-navy-900/0 group-hover:bg-navy-900/40 transition-colors flex items-center justify-center">
                <span className="text-white font-light opacity-0 group-hover:opacity-100 transition-opacity">
                  {language === 'ru' ? 'Увеличить' : language === 'en' ? 'View' : 'Görüntüle'}
                </span>
              </div>
              <div className="absolute bottom-4 left-4 right-4">
                <span className="inline-block px-3 py-1.5 rounded-full bg-white/90 text-navy-900 text-sm font-medium shadow-soft">
                  {plan.label}
                </span>
              </div>
            </motion.button>
          ))}
        </div>

        {/* CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center"
        >
          <button
            onClick={() => openModal(0)}
            className="btn-primary inline-flex items-center gap-3"
          >
            {t('plans.view')}
            <ArrowRight size={20} />
          </button>
        </motion.div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy-900/90 backdrop-blur-sm animate-fade-in">
          <button
            onClick={() => setIsModalOpen(false)}
            className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors text-white"
          >
            <X size={24} />
          </button>

          <button
            onClick={prevPlan}
            className="absolute left-4 p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors text-white"
          >
            <ChevronLeft size={24} />
          </button>

          <div className="max-w-5xl w-full aspect-[4/3] bg-white rounded-2xl overflow-hidden shadow-large">
            <img
              src={currentPlans[currentPlan].image}
              alt={currentPlans[currentPlan].label}
              className="w-full h-full object-contain p-8"
            />
          </div>

          <button
            onClick={nextPlan}
            className="absolute right-4 p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors text-white"
          >
            <ChevronRight size={24} />
          </button>

          {/* Thumbnails */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3">
            {currentPlans.map((plan, index) => (
              <button
                key={index}
                onClick={() => setCurrentPlan(index)}
                className={`w-20 h-14 rounded-lg overflow-hidden border-2 transition-all ${
                  currentPlan === index
                    ? 'border-primary shadow-glow'
                    : 'border-transparent opacity-60 hover:opacity-100'
                }`}
              >
                <img
                  src={plan.image}
                  alt={plan.label}
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

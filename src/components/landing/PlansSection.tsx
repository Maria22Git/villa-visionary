import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { ArrowRight, X, ChevronLeft, ChevronRight, Check } from 'lucide-react';

// Villa 5+1 plans
import villa5GroundFloor from '@/assets/plans/villa-5plus1-ground-floor.png';
import villa5FirstFloor from '@/assets/plans/villa-5plus1-first-floor.png';
import villa5Attic from '@/assets/plans/villa-5plus1-attic.png';
import villa5Basement from '@/assets/plans/villa-5plus1-basement.png';

// Villa 3+1 plans
import villa3GroundFloor from '@/assets/plans/villa-3plus1-ground-floor.png';
import villa3FirstFloor from '@/assets/plans/villa-3plus1-first-floor.png';
import villa3SecondFloor from '@/assets/plans/villa-3plus1-second-floor.png';

// Villa renders
import villaExterior from '@/assets/villa-exterior.jpg';
import villaPoolFacade from '@/assets/villa-pool-facade.jpg';

export function PlansSection() {
  const { t, language } = useLanguage();
  const { ref, isInView } = useScrollReveal({ threshold: 0.1 });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentPlan, setCurrentPlan] = useState(0);
  const [modalPlans, setModalPlans] = useState<Array<{ image: string; label: string }>>([]);

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

  const villa3Plus1 = {
    title: language === 'ru' ? 'Вилла 3+1' : language === 'en' ? 'Villa 3+1' : 'Villa 3+1',
    area: '208 – 250 m²',
    render: villaExterior,
    features: language === 'ru' 
      ? ['Кухня-гостиная', '2 Детские комнаты', 'Бассейн', 'Джакузи', 'Видеонаблюдение', 'Мастер-спальня с гардеробной', 'Парковка для авто', 'Охрана']
      : language === 'en'
      ? ['Kitchen-living room', '2 Children rooms', 'Pool', 'Jacuzzi', 'Video surveillance', 'Master bedroom with wardrobe', 'Car parking', 'Security']
      : ['Mutfak-oturma odası', '2 Çocuk odası', 'Havuz', 'Jakuzi', 'Video gözetimi', 'Giyinme odalı ana yatak odası', 'Otopark', 'Güvenlik'],
  };

  const villa5Plus1 = {
    title: language === 'ru' ? 'Вилла 5+1' : language === 'en' ? 'Villa 5+1' : 'Villa 5+1',
    area: '450 – 654 m²',
    render: villaPoolFacade,
    features: language === 'ru'
      ? ['Двусветная гостиная', 'Постирочная', 'Лифт', 'Гардеробная', 'Бассейн', 'Хамам', 'Сауна', 'Детская площадка', 'Сад', 'Видеонаблюдение', 'Подземная парковка на 2 авто', 'Охрана']
      : language === 'en'
      ? ['Double-height living room', 'Laundry room', 'Elevator', 'Walk-in closet', 'Pool', 'Hammam', 'Sauna', 'Playground', 'Garden', 'Video surveillance', 'Underground parking for 2 cars', 'Security']
      : ['Çift yükseklikli oturma odası', 'Çamaşır odası', 'Asansör', 'Giyinme odası', 'Havuz', 'Hamam', 'Sauna', 'Oyun alanı', 'Bahçe', 'Video gözetimi', '2 araçlık yeraltı otoparkı', 'Güvenlik'],
  };

  const openModal = (plans: Array<{ image: string; label: string }>, index: number) => {
    setModalPlans(plans);
    setCurrentPlan(index);
    setIsModalOpen(true);
  };

  const nextPlan = () => {
    setCurrentPlan((prev) => (prev + 1) % modalPlans.length);
  };

  const prevPlan = () => {
    setCurrentPlan((prev) => (prev - 1 + modalPlans.length) % modalPlans.length);
  };

  return (
    <section id="plans" ref={ref} className="section-padding bg-background">
      <div className="container-wide">
        {/* Section Header */}
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
        </motion.div>

        {/* Villa 3+1 Block */}
        <VillaPlansBlock
          villa={villa3Plus1}
          plans={plans3Plus1}
          isInView={isInView}
          onOpenModal={(index) => openModal(plans3Plus1, index)}
          delay={0.2}
          language={language}
          variant="light"
        />

        {/* Villa 5+1 Block */}
        <VillaPlansBlock
          villa={villa5Plus1}
          plans={plans5Plus1}
          isInView={isInView}
          onOpenModal={(index) => openModal(plans5Plus1, index)}
          delay={0.4}
          language={language}
          variant="dark"
        />

        {/* CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-16"
        >
          <button
            onClick={() => openModal(plans3Plus1, 0)}
            className="btn-primary inline-flex items-center gap-3"
          >
            {t('plans.view')}
            <ArrowRight size={20} />
          </button>
        </motion.div>
      </div>

      {/* Modal */}
      {isModalOpen && modalPlans.length > 0 && (
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
              src={modalPlans[currentPlan].image}
              alt={modalPlans[currentPlan].label}
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
            {modalPlans.map((plan, index) => (
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

// Separate component for villa plans block
interface VillaPlansBlockProps {
  villa: {
    title: string;
    area: string;
    render: string;
    features: string[];
  };
  plans: Array<{ image: string; label: string }>;
  isInView: boolean;
  onOpenModal: (index: number) => void;
  delay: number;
  language: string;
  variant: 'light' | 'dark';
}

function VillaPlansBlock({ villa, plans, isInView, onOpenModal, delay, language, variant }: VillaPlansBlockProps) {
  const isDark = variant === 'dark';
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay }}
      className={`rounded-3xl overflow-hidden mb-12 ${
        isDark 
          ? 'bg-gradient-to-br from-navy-900 to-navy-main' 
          : 'bg-gradient-to-br from-mist/50 to-white border border-blue-soft/20'
      }`}
    >
      {/* Header with Render + Info */}
      <div className="grid lg:grid-cols-2 gap-0">
        {/* Render Image */}
        <div className="relative aspect-[16/10] lg:aspect-auto overflow-hidden">
          <img
            src={villa.render}
            alt={villa.title}
            className="w-full h-full object-cover"
          />
          <div className={`absolute inset-0 ${isDark ? 'bg-gradient-to-r from-transparent to-navy-900/50' : 'bg-gradient-to-r from-transparent to-white/30'}`} />
        </div>

        {/* Villa Info */}
        <div className="p-8 lg:p-10 flex flex-col justify-center">
          <div className="flex items-center justify-between mb-6">
            <h3 className={`font-editorial text-3xl lg:text-4xl ${isDark ? 'text-white' : 'text-navy-900'}`}>
              {villa.title}
            </h3>
            <span className={`px-4 py-2 rounded-full font-bold text-lg ${
              isDark 
                ? 'bg-white/15 text-white border border-white/30' 
                : 'bg-primary/10 text-primary'
            }`}>
              {villa.area}
            </span>
          </div>
          
          <div className="grid grid-cols-2 gap-3">
            {villa.features.slice(0, 8).map((feature, index) => (
              <div key={index} className="flex items-center gap-2">
                <Check size={16} className={`flex-shrink-0 ${isDark ? 'text-white' : 'text-primary'}`} />
                <span className={`text-sm ${isDark ? 'text-white' : 'text-navy-900/80'}`}>{feature}</span>
              </div>
            ))}
          </div>
          
          {villa.features.length > 8 && (
            <div className="grid grid-cols-2 gap-3 mt-3">
              {villa.features.slice(8).map((feature, index) => (
                <div key={index} className="flex items-center gap-2">
                  <Check size={16} className={`flex-shrink-0 ${isDark ? 'text-white' : 'text-primary'}`} />
                  <span className={`text-sm ${isDark ? 'text-white' : 'text-navy-900/80'}`}>{feature}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Floor Plans Gallery */}
      <div className={`p-8 lg:p-10 ${isDark ? 'border-t border-white/10' : 'border-t border-blue-soft/20'}`}>
        <h4 className={`font-editorial text-xl mb-6 ${isDark ? 'text-white' : 'text-navy-900'}`}>
          {language === 'ru' ? 'Планировки этажей' : language === 'en' ? 'Floor Plans' : 'Kat Planları'}
        </h4>
        
        <div className={`grid gap-4 ${plans.length === 4 ? 'md:grid-cols-4' : 'md:grid-cols-3'}`}>
          {plans.map((plan, index) => (
            <button
              key={index}
              onClick={() => onOpenModal(index)}
              className={`group relative aspect-[4/3] rounded-xl overflow-hidden shadow-soft hover:shadow-medium transition-all ${
                isDark ? 'bg-white/10' : 'bg-white'
              }`}
            >
              <img
                src={plan.image}
                alt={plan.label}
                className="w-full h-full object-contain p-3 group-hover:scale-105 transition-transform duration-300"
              />
              <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center ${
                isDark ? 'bg-navy-900/40' : 'bg-navy-900/30'
              }`}>
                <span className="text-white font-light text-sm">
                  {language === 'ru' ? 'Увеличить' : language === 'en' ? 'View' : 'Görüntüle'}
                </span>
              </div>
              <div className="absolute bottom-2 left-2 right-2">
                <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium shadow-soft ${
                  isDark ? 'bg-navy-900/80 text-white' : 'bg-white/90 text-navy-900'
                }`}>
                  {plan.label}
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

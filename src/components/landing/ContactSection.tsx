import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { MessageCircle, Send, User, Phone, Loader2, ArrowRight } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

export function ContactSection() {
  const { t, language } = useLanguage();
  const { ref, isInView } = useScrollReveal({ threshold: 0.2 });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState({ name: '', phone: '' });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSuccess(true);
    setFormData({ name: '', phone: '' });
  };

  const whatsappLink = 'https://wa.me/905551234567?text=Здравствуйте! Меня интересует проект Victoria Villas.';

  return (
    <section id="contact" ref={ref} className="relative overflow-hidden">
      {/* Muted Green Gradient Background — Final CTA */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[hsl(160,35%,28%)] via-[hsl(160,35%,32%)] to-[hsl(165,30%,38%)]" />
        {/* Subtle texture */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.05),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(255,255,255,0.03),transparent_50%)]" />
      </div>

      <div className="relative z-10 section-editorial">
        <div className="container-wide">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <span className="text-architectural text-white/60 mb-6 block">
              {language === 'ru' ? 'Свяжитесь с нами' : language === 'en' ? 'Contact Us' : 'Bize Ulaşın'}
            </span>
            
            <h2 className="text-section-title text-white mb-6">
              {language === 'ru' 
                ? 'Готовы обсудить вашу виллу?' 
                : language === 'en'
                ? 'Ready to discuss your villa?'
                : 'Villanızı tartışmaya hazır mısınız?'}
            </h2>

            <p className="text-white/60 text-lg font-light max-w-xl mx-auto">
              {language === 'ru'
                ? 'Оставьте заявку и мы свяжемся с вами в течение 24 часов'
                : language === 'en'
                ? 'Submit your request and we will contact you within 24 hours'
                : 'Talebinizi gönderin, 24 saat içinde sizinle iletişime geçelim'}
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* WhatsApp Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="h-full p-10 rounded-3xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/8 transition-colors duration-500">
                <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center mb-8">
                  <MessageCircle size={26} className="text-white" strokeWidth={1.5} />
                </div>
                
                <h3 className="font-editorial text-2xl text-white mb-4">
                  {t('consultation.title')}
                </h3>
                
                <p className="text-white/60 font-light leading-relaxed mb-8">
                  {t('consultation.description')}
                </p>

                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-white text-[hsl(160,35%,30%)] font-medium hover:bg-white/90 transition-colors"
                >
                  <MessageCircle size={20} />
                  {t('consultation.whatsapp')}
                </a>
              </div>
            </motion.div>

            {/* Form Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="h-full p-10 rounded-3xl bg-white/10 backdrop-blur-sm border border-white/15">
                <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center mb-8">
                  <Send size={24} className="text-white" strokeWidth={1.5} />
                </div>

                <h3 className="font-editorial text-2xl text-white mb-6">
                  {t('form.title')}
                </h3>

                {isSuccess ? (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-8"
                  >
                    <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center mx-auto mb-4">
                      <span className="text-3xl">✓</span>
                    </div>
                    <p className="text-white font-editorial text-xl">
                      {t('form.success')}
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="relative">
                      <User className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40" size={18} />
                      <Input
                        type="text"
                        placeholder={t('form.name')}
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="pl-12 py-6 text-base bg-white/10 border-white/20 text-white placeholder:text-white/40 focus:border-white/40 rounded-xl"
                        required
                      />
                    </div>

                    <div className="relative">
                      <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40" size={18} />
                      <Input
                        type="tel"
                        placeholder={t('form.phone')}
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="pl-12 py-6 text-base bg-white/10 border-white/20 text-white placeholder:text-white/40 focus:border-white/40 rounded-xl"
                        required
                      />
                    </div>

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-6 text-base rounded-full bg-white text-[hsl(160,35%,30%)] hover:bg-white/90 font-medium"
                    >
                      {isSubmitting ? (
                        <Loader2 className="animate-spin" size={20} />
                      ) : (
                        <span className="flex items-center gap-2">
                          {t('form.submit')}
                          <ArrowRight size={18} />
                        </span>
                      )}
                    </Button>

                    <p className="text-xs text-white/40 text-center pt-2">
                      {t('form.consent')}
                    </p>
                  </form>
                )}
              </div>
            </motion.div>
          </div>

          {/* Calm confidence note */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-center mt-16"
          >
            <p className="font-editorial text-xl text-white/70 italic">
              {language === 'ru' 
                ? 'Ваш новый дом ждёт вас в Алании' 
                : language === 'en'
                ? 'Your new home awaits in Alanya'
                : 'Yeni eviniz Alanya\'da sizi bekliyor'}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { MessageCircle, Send, User, Phone, Loader2 } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import bathroom from '@/assets/interiors/bathroom.png';

export function ContactSection() {
  const { t, language } = useLanguage();
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
    <section id="contact" className="relative overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={bathroom}
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-navy-900/95 via-navy-900/90 to-navy-800/95" />
      </div>

      <div className="relative z-10 section-padding">
        <div className="container-wide">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6">
              <span className="text-xl">📞</span>
              <span className="text-white/90 text-sm font-medium">
                {language === 'ru' ? 'Связаться с нами' : language === 'en' ? 'Contact Us' : 'Bize Ulaşın'}
              </span>
            </div>
            
            <h2 className="text-section-title text-white mb-4">
              {language === 'ru' 
                ? 'Готовы обсудить вашу виллу?' 
                : language === 'en'
                ? 'Ready to discuss your villa?'
                : 'Villanızı tartışmaya hazır mısınız?'}
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* WhatsApp Section */}
            <div className="relative rounded-3xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-green-600/20 to-green-500/10 backdrop-blur-sm" />
              <div className="relative p-8 lg:p-10 border border-white/10 rounded-3xl h-full">
                <div className="text-5xl mb-6">💬</div>
                <h3 className="text-2xl md:text-3xl font-display font-semibold text-white mb-4">
                  {t('consultation.title')}
                </h3>
                <p className="text-white/70 text-lg mb-8">
                  {t('consultation.description')}
                </p>

                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-green-500 hover:bg-green-600 text-white font-medium transition-all shadow-lg shadow-green-500/30 hover:shadow-green-500/40"
                >
                  <MessageCircle size={24} />
                  {t('consultation.whatsapp')}
                </a>
              </div>
            </div>

            {/* Form Section */}
            <div className="relative rounded-3xl overflow-hidden">
              <div className="absolute inset-0 bg-white/5 backdrop-blur-sm" />
              <div className="relative p-8 lg:p-10 border border-white/10 rounded-3xl h-full">
                <div className="text-5xl mb-6">📝</div>
                <h3 className="text-2xl md:text-3xl font-display font-semibold text-white mb-6">
                  {t('form.title')}
                </h3>

                {isSuccess ? (
                  <div className="text-center py-8">
                    <div className="text-6xl mb-4">✅</div>
                    <p className="text-white font-medium text-xl">
                      {t('form.success')}
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="relative">
                      <User className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40" size={20} />
                      <Input
                        type="text"
                        placeholder={t('form.name')}
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="pl-12 py-6 text-base bg-white/10 border-white/20 text-white placeholder:text-white/40 focus:border-primary"
                        required
                      />
                    </div>

                    <div className="relative">
                      <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40" size={20} />
                      <Input
                        type="tel"
                        placeholder={t('form.phone')}
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="pl-12 py-6 text-base bg-white/10 border-white/20 text-white placeholder:text-white/40 focus:border-primary"
                        required
                      />
                    </div>

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full btn-primary py-6 text-lg"
                    >
                      {isSubmitting ? (
                        <Loader2 className="animate-spin" size={24} />
                      ) : (
                        <>
                          {t('form.submit')}
                          <Send size={20} className="ml-2" />
                        </>
                      )}
                    </Button>

                    <p className="text-xs text-white/50 text-center">
                      {t('form.consent')}
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

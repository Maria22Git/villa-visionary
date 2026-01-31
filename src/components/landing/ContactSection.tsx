import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { MessageCircle, Send, User, Phone, Loader2 } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

export function ContactSection() {
  const { t } = useLanguage();
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
    <section id="contact" className="section-padding bg-muted/50">
      <div className="container-wide">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* WhatsApp Section */}
          <div className="card-premium bg-navy-900 text-white">
            <h2 className="text-section-title mb-6">
              {t('consultation.title')}
            </h2>
            <p className="text-white/70 text-lg mb-8">
              {t('consultation.description')}
            </p>

            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-green-500 hover:bg-green-600 text-white font-medium transition-colors"
            >
              <MessageCircle size={24} />
              {t('consultation.whatsapp')}
            </a>
          </div>

          {/* Form Section */}
          <div className="card-premium">
            <h2 className="text-2xl md:text-3xl font-display font-semibold text-navy-900 mb-6">
              {t('form.title')}
            </h2>

            {isSuccess ? (
              <div className="text-center py-8">
                <div className="text-5xl mb-4">✅</div>
                <p className="text-navy-900 font-medium text-lg">
                  {t('form.success')}
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="relative">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" size={20} />
                  <Input
                    type="text"
                    placeholder={t('form.name')}
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="pl-12 py-6 text-base border-border"
                    required
                  />
                </div>

                <div className="relative">
                  <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" size={20} />
                  <Input
                    type="tel"
                    placeholder={t('form.phone')}
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="pl-12 py-6 text-base border-border"
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

                <p className="text-xs text-muted-foreground text-center">
                  {t('form.consent')}
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

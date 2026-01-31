import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const Terms = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container-narrow py-20">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-8"
        >
          <ArrowLeft size={20} />
          На главную
        </Link>

        <h1 className="text-4xl font-display font-bold text-navy-900 mb-8">
          Условия использования
        </h1>

        <div className="prose prose-lg max-w-none">
          <p className="text-muted-foreground">
            Последнее обновление: {new Date().toLocaleDateString('ru-RU')}
          </p>

          <h2 className="text-2xl font-display font-semibold text-navy-900 mt-8 mb-4">
            1. Общие условия
          </h2>
          <p className="text-foreground/80">
            Используя данный сайт, вы соглашаетесь с настоящими условиями использования. 
            Если вы не согласны с какими-либо условиями, пожалуйста, не используйте сайт.
          </p>

          <h2 className="text-2xl font-display font-semibold text-navy-900 mt-8 mb-4">
            2. Информация на сайте
          </h2>
          <p className="text-foreground/80">
            Информация, представленная на сайте, носит ознакомительный характер. 
            Компания оставляет за собой право изменять цены, планировки и условия без предварительного уведомления.
          </p>

          <h2 className="text-2xl font-display font-semibold text-navy-900 mt-8 mb-4">
            3. Интеллектуальная собственность
          </h2>
          <p className="text-foreground/80">
            Все материалы сайта, включая тексты, изображения, дизайн и логотипы, 
            являются собственностью IKY Group и защищены законом об авторских правах.
          </p>

          <h2 className="text-2xl font-display font-semibold text-navy-900 mt-8 mb-4">
            4. Ограничение ответственности
          </h2>
          <p className="text-foreground/80">
            Компания не несёт ответственности за любые убытки, возникшие в результате 
            использования информации с сайта.
          </p>

          <h2 className="text-2xl font-display font-semibold text-navy-900 mt-8 mb-4">
            5. Контакты
          </h2>
          <p className="text-foreground/80">
            По всем вопросам обращайтесь: info@art-sites.org
          </p>
        </div>
      </div>
    </div>
  );
};

export default Terms;

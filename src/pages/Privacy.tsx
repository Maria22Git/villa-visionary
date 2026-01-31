import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const Privacy = () => {
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
          Политика конфиденциальности
        </h1>

        <div className="prose prose-lg max-w-none">
          <p className="text-muted-foreground">
            Последнее обновление: {new Date().toLocaleDateString('ru-RU')}
          </p>

          <h2 className="text-2xl font-display font-semibold text-navy-900 mt-8 mb-4">
            1. Общие положения
          </h2>
          <p className="text-foreground/80">
            Настоящая политика конфиденциальности определяет порядок обработки и защиты 
            персональных данных пользователей сайта Victoria Villas.
          </p>

          <h2 className="text-2xl font-display font-semibold text-navy-900 mt-8 mb-4">
            2. Сбор информации
          </h2>
          <p className="text-foreground/80">
            Мы собираем только ту информацию, которую вы предоставляете нам добровольно 
            через формы на сайте: имя и номер телефона.
          </p>

          <h2 className="text-2xl font-display font-semibold text-navy-900 mt-8 mb-4">
            3. Использование информации
          </h2>
          <p className="text-foreground/80">
            Полученная информация используется исключительно для связи с вами по вопросам 
            приобретения недвижимости и предоставления консультаций.
          </p>

          <h2 className="text-2xl font-display font-semibold text-navy-900 mt-8 mb-4">
            4. Защита данных
          </h2>
          <p className="text-foreground/80">
            Мы принимаем все необходимые меры для защиты ваших персональных данных 
            от несанкционированного доступа.
          </p>

          <h2 className="text-2xl font-display font-semibold text-navy-900 mt-8 mb-4">
            5. Контакты
          </h2>
          <p className="text-foreground/80">
            По всем вопросам, касающимся политики конфиденциальности, вы можете 
            обратиться по email: info@art-sites.org
          </p>
        </div>
      </div>
    </div>
  );
};

export default Privacy;

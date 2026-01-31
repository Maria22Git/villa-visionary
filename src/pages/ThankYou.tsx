import { Link } from 'react-router-dom';
import { CheckCircle, ArrowLeft } from 'lucide-react';

const ThankYou = () => {
  return (
    <div className="min-h-screen bg-gradient-hero flex items-center justify-center p-4">
      <div className="text-center text-white max-w-md">
        <div className="w-20 h-20 rounded-full bg-green-500 flex items-center justify-center mx-auto mb-6">
          <CheckCircle size={48} />
        </div>
        <h1 className="text-4xl font-display font-bold mb-4">
          Спасибо за заявку!
        </h1>
        <p className="text-white/80 text-lg mb-8">
          Мы получили вашу заявку и свяжемся с вами в ближайшее время для обсуждения деталей.
        </p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-navy-900 font-medium hover:bg-white/90 transition-colors"
        >
          <ArrowLeft size={20} />
          Вернуться на главную
        </Link>
      </div>
    </div>
  );
};

export default ThankYou;

import { useState, createContext, useContext, ReactNode } from 'react';

type Language = 'ru' | 'en' | 'tr';

interface Translations {
  [key: string]: {
    ru: string;
    en: string;
    tr: string;
  };
}

const translations: Translations = {
  // Navigation
  'nav.home': { ru: 'Главная', en: 'Home', tr: 'Ana Sayfa' },
  'nav.about': { ru: 'О проекте', en: 'About', tr: 'Hakkında' },
  'nav.plans': { ru: 'Планировки', en: 'Plans', tr: 'Planlar' },
  'nav.benefits': { ru: 'Преимущества', en: 'Benefits', tr: 'Avantajlar' },
  'nav.faq': { ru: 'FAQ', en: 'FAQ', tr: 'SSS' },
  'nav.contact': { ru: 'Контакты', en: 'Contact', tr: 'İletişim' },
  'nav.consultation': { ru: 'Получить консультацию', en: 'Get Consultation', tr: 'Danışma Al' },
  
  // Hero
  'hero.title': { ru: 'Victoria Villas', en: 'Victoria Villas', tr: 'Victoria Villas' },
  'hero.subtitle': { ru: 'виллы под гражданство Турции', en: 'villas for Turkish citizenship', tr: 'Türk vatandaşlığı için villalar' },
  'hero.headline': { ru: 'Беспроцентная рассрочка на 3 года | Первоначальный взнос 30%', en: 'Interest-free installment for 3 years | 30% down payment', tr: '3 yıl faizsiz taksit | %30 peşinat' },
  'hero.description': { ru: 'Гражданство Турции для всей семьи — оформление начинается сразу после первого платежа.', en: 'Turkish citizenship for the whole family — processing starts immediately after the first payment.', tr: 'Tüm aile için Türk vatandaşlığı — işlem ilk ödemeden hemen sonra başlar.' },
  'hero.cta': { ru: 'Получить консультацию в WhatsApp', en: 'Get consultation on WhatsApp', tr: 'WhatsApp\'ta danışma alın' },
  'hero.turnkey': { ru: 'Под ключ', en: 'Turnkey', tr: 'Anahtar teslimi' },
  'hero.nohidden': { ru: 'Без скрытых расходов', en: 'No hidden costs', tr: 'Gizli maliyet yok' },
  'hero.developer': { ru: 'Напрямую от застройщика IKY Group (40+ реализованных проектов)', en: 'Directly from developer IKY Group (40+ completed projects)', tr: 'Doğrudan IKY Group\'tan (40+ tamamlanmış proje)' },
  
  // Why Section
  'why.title': { ru: 'Почему Victoria Villas?', en: 'Why Victoria Villas?', tr: 'Neden Victoria Villas?' },
  'why.description': { ru: 'Вы инвестируете в ликвидную виллу в Алании и параллельно оформляете гражданство Турции — прозрачно, легально и с фиксированными условиями.', en: 'You invest in a liquid villa in Alanya and simultaneously obtain Turkish citizenship — transparently, legally and with fixed conditions.', tr: 'Alanya\'da likit bir villaya yatırım yapıyorsunuz ve aynı anda Türk vatandaşlığı alıyorsunuz — şeffaf, yasal ve sabit koşullarla.' },
  
  // Benefits
  'benefits.title': { ru: 'Условия, которые делают Victoria Villas уникальным проектом', en: 'Conditions that make Victoria Villas a unique project', tr: 'Victoria Villas\'ı benzersiz bir proje yapan koşullar' },
  'benefits.citizenship': { ru: 'Виллы полностью соответствуют программе гражданства Турции', en: 'Villas fully comply with Turkish citizenship program', tr: 'Villalar Türk vatandaşlık programına tam uygundur' },
  'benefits.installment': { ru: 'Рассрочка 0% на 3 года', en: '0% installment for 3 years', tr: '3 yıl %0 taksit' },
  'benefits.downpayment': { ru: 'Первоначальный взнос — всего 30%', en: 'Down payment — only 30%', tr: 'Peşinat — sadece %30' },
  'benefits.included': { ru: 'Все расходы на TAPU, гражданство и адвокатов уже включены', en: 'All TAPU, citizenship and lawyer expenses are already included', tr: 'Tüm TAPU, vatandaşlık ve avukat masrafları dahildir' },
  'benefits.fast': { ru: 'Оформление гражданства стартует сразу после первого платежа', en: 'Citizenship processing starts immediately after first payment', tr: 'Vatandaşlık işlemi ilk ödemeden hemen sonra başlar' },
  'benefits.cta': { ru: 'Проверить доступные виллы', en: 'Check available villas', tr: 'Mevcut villaları kontrol edin' },
  
  // Project Section
  'project.title': { ru: 'Victoria Villas — элитные виллы в Алании', en: 'Victoria Villas — elite villas in Alanya', tr: 'Victoria Villas — Alanya\'da lüks villalar' },
  'project.description': { ru: 'Панорамные виды на море и горы, приватность и премиальный уровень жизни.', en: 'Panoramic views of the sea and mountains, privacy and premium lifestyle.', tr: 'Deniz ve dağ manzarası, mahremiyet ve premium yaşam tarzı.' },
  'project.architecture': { ru: 'Современная архитектура', en: 'Modern architecture', tr: 'Modern mimari' },
  'project.layouts': { ru: 'Просторные планировки', en: 'Spacious layouts', tr: 'Ferah planlar' },
  'project.pool': { ru: 'Infinity-бассейн, джакузи', en: 'Infinity pool, jacuzzi', tr: 'Infinity havuz, jakuzi' },
  'project.bbq': { ru: 'Зона барбекю', en: 'BBQ area', tr: 'Barbekü alanı' },
  'project.parking': { ru: 'Парковка для авто', en: 'Car parking', tr: 'Otopark' },
  
  // Premium Features
  'premium.title': { ru: 'Премиальная комплектация', en: 'Premium finishing', tr: 'Premium donatım' },
  'premium.smarthome': { ru: 'Система «умный дом»', en: 'Smart home system', tr: 'Akıllı ev sistemi' },
  'premium.heating': { ru: 'Тёплые полы с термостатами', en: 'Heated floors with thermostats', tr: 'Termostatli yerden isitma' },
  'premium.windows': { ru: 'Панорамное остекление и шумоизоляция', en: 'Panoramic glazing and sound insulation', tr: 'Panoramik cam ve ses yalıtımı' },
  'premium.materials': { ru: 'Премиальные материалы отделки', en: 'Premium finishing materials', tr: 'Premium bitirme malzemeleri' },
  
  // Architect Section
  'architect.title': { ru: 'Слово архитектора', en: "Architect's Word", tr: 'Mimarın Sözü' },
  'architect.name': { ru: 'Ибрагим Карачомак', en: 'Ibrahim Karachomak', tr: 'İbrahim Karaçomak' },
  'architect.role': { ru: 'Архитектор проекта', en: 'Project Architect', tr: 'Proje Mimarı' },
  'architect.quote': { ru: '«Высокие стандарты IKY Group обеспечили функциональность, эстетику и удобство в каждой детали проекта Victoria Villas»', en: '"IKY Group\'s high standards ensured functionality, aesthetics and convenience in every detail of the Victoria Villas project"', tr: '"IKY Group\'un yüksek standartları, Victoria Villas projesinin her detayında işlevsellik, estetik ve konfor sağladı"' },
  'architect.description': { ru: 'Архитектура проекта сочетает современный дизайн, эргономику пространства и премиальные материалы, создавая комфортную среду для жизни и инвестиций.', en: 'The project architecture combines modern design, space ergonomics and premium materials, creating a comfortable environment for living and investment.', tr: 'Proje mimarisi, modern tasarımı, alan ergonomisini ve premium malzemeleri bir araya getirerek yaşam ve yatırım için konforlu bir ortam oluşturuyor.' },
  
  // 15-minute city
  'city.title': { ru: 'Концепция «15-минутного города»', en: '15-minute city concept', tr: '15 dakikalık şehir konsepti' },
  'city.location': { ru: 'Victoria Villas расположены в престижном районе Оба', en: 'Victoria Villas is located in the prestigious Oba district', tr: 'Victoria Villas, prestijli Oba bölgesinde yer almaktadır' },
  'city.description': { ru: 'Все ключевые элементы благополучной жизни находятся рядом с вашей виллой.', en: 'All key elements of a good life are close to your villa.', tr: 'İyi bir yaşamın tüm temel unsurları villanızın yakınında.' },
  'city.center': { ru: '15 минут до центра Алании', en: '15 minutes to Alanya center', tr: 'Alanya merkezine 15 dakika' },
  'city.amenities': { ru: 'Школы, колледжи, магазины, медицина, пляжи — в быстрой доступности', en: 'Schools, colleges, shops, medicine, beaches — quickly accessible', tr: 'Okullar, kolejler, mağazalar, sağlık, plajlar — hızlı erişim' },
  'city.ecosystem': { ru: 'Victoria Villas — часть новой городской экосистемы для комфортной жизни семьи.', en: 'Victoria Villas is part of a new urban ecosystem for comfortable family life.', tr: 'Victoria Villas, konforlu aile yaşamı için yeni bir şehir ekosisteminin parçasıdır.' },
  
  // Plans Section
  'plans.title': { ru: 'Продуманная планировка для комфортной жизни', en: 'Thoughtful layouts for comfortable living', tr: 'Konforlu yaşam için düşünceli planlar' },
  'plans.description': { ru: 'Проект предусматривает грамотное зонирование пространства:', en: 'The project provides smart space zoning:', tr: 'Proje akıllı alan bölmeleme sağlar:' },
  'plans.zones': { ru: 'Отдельные зоны отдыха для всей семьи', en: 'Separate relaxation zones for the whole family', tr: 'Tüm aile için ayrı dinlenme alanları' },
  'plans.master': { ru: 'Просторные мастер-спальни с джакузи и гардеробной', en: 'Spacious master bedrooms with jacuzzi and walk-in closet', tr: 'Jakuzi ve giyinme odası ile geniş ana yatak odaları' },
  'plans.private': { ru: 'Приватный этаж для хозяев', en: 'Private floor for owners', tr: 'Ev sahipleri için özel kat' },
  'plans.comfort': { ru: 'Каждая планировка создана для максимального уюта и приватности.', en: 'Each layout is designed for maximum comfort and privacy.', tr: 'Her plan maksimum konfor ve mahremiyet için tasarlanmıştır.' },
  'plans.view': { ru: 'Смотреть планировки', en: 'View plans', tr: 'Planları görüntüle' },
  
  // WhiteBox Section
  'whitebox.title': { ru: 'Отделка White Box и технологии', en: 'White Box finishing and technologies', tr: 'White Box bitirme ve teknolojiler' },
  'whitebox.description': { ru: 'Виллы сдаются в формате White Box — идеальная база для любого дизайнерского решения.', en: 'Villas are delivered in White Box format — perfect base for any design solution.', tr: 'Villalar White Box formatında teslim edilir — herhangi bir tasarım çözümü için mükemmel temel.' },
  'whitebox.smarthome': { ru: 'Система «Умный дом»', en: 'Smart home system', tr: 'Akıllı ev sistemi' },
  'whitebox.floors': { ru: 'Тёплые полы', en: 'Heated floors', tr: 'Yerden ısıtma' },
  'whitebox.materials': { ru: 'Премиальные материалы и инженерные системы', en: 'Premium materials and engineering systems', tr: 'Premium malzemeler ve mühendislik sistemleri' },
  
  // Nature Section
  'nature.title': { ru: 'Природа, виды и экология', en: 'Nature, views and ecology', tr: 'Doğa, manzara ve ekoloji' },
  'nature.description': { ru: 'Экологически чистый район в окружении:', en: 'Ecologically clean area surrounded by:', tr: 'Çevresi temiz ekolojik alan:' },
  'nature.mountains': { ru: 'величественных гор', en: 'majestic mountains', tr: 'görkemli dağlar' },
  'nature.forests': { ru: 'хвойных лесов', en: 'coniferous forests', tr: 'iğne yapraklı ormanlar' },
  'nature.views': { ru: 'панорамных видов на море и крепость Кале', en: 'panoramic views of the sea and Kale fortress', tr: 'deniz ve Kale kalesinin panoramik manzarası' },
  'nature.peace': { ru: 'Здесь тишина, свежий воздух и ощущение уединённого курорта.', en: 'Here is silence, fresh air and the feeling of a secluded resort.', tr: 'Burada sessizlik, temiz hava ve tenha bir tatil yeri hissi var.' },
  
  // Security Section
  'security.title': { ru: 'Безопасность и приватность', en: 'Security and privacy', tr: 'Güvenlik ve gizlilik' },
  'security.closed': { ru: 'Закрытая территория комплекса', en: 'Gated complex territory', tr: 'Kapalı site alanı' },
  'security.guard': { ru: 'Круглосуточная охрана', en: '24/7 security', tr: '7/24 güvenlik' },
  'security.cctv': { ru: 'Система видеонаблюдения 24/7', en: '24/7 CCTV system', tr: '7/24 güvenlik kamerası sistemi' },
  'security.access': { ru: 'Контролируемый доступ для курьеров', en: 'Controlled access for couriers', tr: 'Kuryeler için kontrollü erişim' },
  'security.family': { ru: 'Вы и ваша семья в полной безопасности.', en: 'You and your family are completely safe.', tr: 'Siz ve aileniz tamamen güvende.' },
  
  // Lifestyle Section
  'lifestyle.title': { ru: 'Атмосфера привилегированной жизни', en: 'Atmosphere of privileged life', tr: 'Ayrıcalıklı yaşam atmosferi' },
  'lifestyle.description': { ru: 'Это пространство для тех, кто выбирает лучшее.', en: 'This space is for those who choose the best.', tr: 'Bu alan en iyiyi seçenler için.' },
  'lifestyle.intro': { ru: 'Victoria Villas — это:', en: 'Victoria Villas is:', tr: 'Victoria Villas:' },
  'lifestyle.status': { ru: 'статус и приватность', en: 'status and privacy', tr: 'statü ve gizlilik' },
  'lifestyle.comfort': { ru: 'комфортная среда', en: 'comfortable environment', tr: 'konforlu ortam' },
  'lifestyle.enjoyment': { ru: 'удовольствие от каждого дня', en: 'enjoyment of every day', tr: 'her günün tadını çıkarma' },
  'lifestyle.climate': { ru: 'наслаждаться каждым днём климатом и горным воздухом', en: 'enjoy the climate and mountain air every day', tr: 'her gün iklimin ve dağ havasının tadını çıkarın' },
  'lifestyle.home': { ru: 'Дом, в который хочется возвращаться.', en: 'A home you want to return to.', tr: 'Dönmek isteyeceğiniz bir ev.' },
  
  // Developer Section
  'developer.title': { ru: 'IKY Group — девелопер проекта', en: 'IKY Group — project developer', tr: 'IKY Group — proje geliştiricisi' },
  'developer.description': { ru: 'Один из лидеров строительного рынка Алании.', en: 'One of the leaders of the Alanya construction market.', tr: 'Alanya inşaat pazarının liderlerinden biri.' },
  'developer.top3': { ru: 'Входит в ТОП-3 застройщиков региона', en: 'Among TOP-3 developers in the region', tr: 'Bölgedeki İLK 3 geliştirici arasında' },
  'developer.projects': { ru: 'Более 40 успешно завершённых проектов', en: 'More than 40 successfully completed projects', tr: '40\'tan fazla başarıyla tamamlanmış proje' },
  'developer.quality': { ru: 'Рациональный перфекционизм и прозрачное ценообразование', en: 'Rational perfectionism and transparent pricing', tr: 'Rasyonel mükemmeliyetçilik ve şeffaf fiyatlandırma' },
  'developer.standards': { ru: 'Современные строительные и юридические стандарты', en: 'Modern construction and legal standards', tr: 'Modern inşaat ve yasal standartlar' },
  'developer.trust': { ru: 'IKY Group — это надёжность, подтверждённая годами.', en: 'IKY Group — reliability proven over the years.', tr: 'IKY Group — yıllarla kanıtlanmış güvenilirlik.' },
  
  // FAQ
  'faq.title': { ru: 'Часто задаваемые вопросы', en: 'Frequently Asked Questions', tr: 'Sıkça Sorulan Sorular' },
  'faq.q1': { ru: 'Я боюсь, что гражданство не одобрят.', en: "I'm afraid the citizenship won't be approved.", tr: 'Vatandaşlığın onaylanmayacağından korkuyorum.' },
  'faq.a1': { ru: 'Проект Victoria Villas полностью соответствует требованиям программы гражданства Турции. Оформление ведут лицензированные адвокаты, риск отказа отсутствует.', en: 'The Victoria Villas project fully complies with the Turkish citizenship program requirements. Licensed lawyers handle the processing, there is no risk of rejection.', tr: 'Victoria Villas projesi, Türk vatandaşlık programı gereksinimlerine tam olarak uygundur. Lisanslı avukatlar işlemi yürütür, red riski yoktur.' },
  'faq.q2': { ru: 'Рассрочка помешает получению паспорта?', en: 'Will installments interfere with getting a passport?', tr: 'Taksit pasaport almayı engelleyecek mi?' },
  'faq.a2': { ru: 'Нет. Процесс оформления запускается сразу после внесения 30% первоначального взноса, остальная сумма выплачивается в беспроцентной рассрочке на 3 года.', en: 'No. The processing starts immediately after making the 30% down payment, the rest is paid in interest-free installments over 3 years.', tr: 'Hayır. İşlem, %30 peşinat yapıldıktan hemen sonra başlar, geri kalanı 3 yıl boyunca faizsiz taksitle ödenir.' },
  'faq.q3': { ru: 'А вдруг появятся скрытые платежи?', en: 'What if hidden payments appear?', tr: 'Ya gizli ödemeler ortaya çıkarsa?' },
  'faq.a3': { ru: 'Нет. Все расходы на TAPU, оформление гражданства и юридическое сопровождение уже включены в стоимость.', en: 'No. All TAPU expenses, citizenship processing and legal support are already included in the price.', tr: 'Hayır. Tüm TAPU masrafları, vatandaşlık işlemi ve hukuki destek fiyata dahildir.' },
  'faq.q4': { ru: 'Я не живу в Турции — это проблема?', en: "I don't live in Turkey — is that a problem?", tr: 'Türkiye\'de yaşamıyorum — bu bir sorun mu?' },
  'faq.a4': { ru: 'Нет. Постоянное проживание в Турции не является обязательным условием для получения гражданства.', en: 'No. Permanent residence in Turkey is not a mandatory requirement for citizenship.', tr: 'Hayır. Türkiye\'de sürekli ikamet, vatandaşlık için zorunlu bir gereklilik değildir.' },
  'faq.q5': { ru: 'Гражданство дадут всей семье или только мне?', en: 'Will citizenship be given to the whole family or just me?', tr: 'Vatandaşlık tüm aileye mi yoksa sadece bana mı verilecek?' },
  'faq.a5': { ru: 'Паспорт Турции получают супруг(а) и дети до 18 лет одновременно с основным заявителем.', en: 'The spouse and children under 18 receive a Turkish passport simultaneously with the main applicant.', tr: 'Eş ve 18 yaş altı çocuklar, ana başvuru sahibiyle aynı anda Türk pasaportu alır.' },
  'faq.q6': { ru: 'Когда передача ключей?', en: 'When is the key handover?', tr: 'Anahtar teslimi ne zaman?' },
  'faq.a6': { ru: 'Виллы сдаются уже в марте. После внесения первого платежа вы свободно распоряжаетесь недвижимостью: проживание или аренда.', en: 'Villas are delivered in March. After making the first payment, you can freely use the property: living or renting.', tr: 'Villalar Mart ayında teslim edilir. İlk ödemeyi yaptıktan sonra mülkü serbestçe kullanabilirsiniz: yaşama veya kiralama.' },
  'faq.q7': { ru: 'Можно ли купить виллу дистанционно?', en: 'Can I buy a villa remotely?', tr: 'Uzaktan villa satın alabilir miyim?' },
  'faq.a7': { ru: 'Да, это стандартная и безопасная процедура. Компания IKY Group организует процесс покупки онлайн: от видео-показа объекта до подписания договора. Оформление права собственности (ТАПУ) и подача на гражданство происходят по доверенности, ваше присутствие в Турции не обязательно.', en: 'Yes, it is a standard and safe procedure. IKY Group organizes the purchase process online: from video viewing to contract signing. Title registration (TAPU) and citizenship application are done by power of attorney, your presence in Turkey is not required.', tr: 'Evet, standart ve güvenli bir prosedürdür. IKY Group satın alma sürecini çevrimiçi organize eder: video gösteriminden sözleşme imzalamaya kadar. Tapu tescili ve vatandaşlık başvurusu vekaletname ile yapılır, Türkiye\'de bulunmanız gerekmez.' },
  'faq.q8': { ru: 'А если правила гражданства изменятся?', en: 'What if citizenship rules change?', tr: 'Ya vatandaşlık kuralları değişirse?' },
  'faq.a8': { ru: 'Вы подаёте документы по действующему законодательству. После старта процесса условия для вас фиксируются.', en: 'You submit documents according to current legislation. Once the process starts, conditions are fixed for you.', tr: 'Mevcut mevzuata göre başvuru yaparsınız. Süreç başladığında, koşullar sizin için sabitlenir.' },
  'faq.q9': { ru: 'Почему стоит доверять именно IKY Group?', en: 'Why should I trust IKY Group?', tr: 'Neden IKY Group\'a güvenmeliyim?' },
  'faq.a9': { ru: 'IKY Group входит в ТОП-3 застройщиков Алании, имеет более 40 завершённых проектов и работает напрямую, без посредников.', en: 'IKY Group is among the TOP-3 developers in Alanya, has more than 40 completed projects and works directly, without intermediaries.', tr: 'IKY Group, Alanya\'daki İLK 3 geliştirici arasındadır, 40\'tan fazla tamamlanmış projesi vardır ve aracı olmadan doğrudan çalışır.' },
  
  // Steps Section
  'steps.title': { ru: 'Как проходит покупка и получение гражданства', en: 'How the purchase and citizenship process works', tr: 'Satın alma ve vatandaşlık süreci nasıl işler' },
  'steps.step1': { ru: 'Выбор виллы', en: 'Choosing a villa', tr: 'Villa seçimi' },
  'steps.step2': { ru: 'Составление индивидуального плана оплаты', en: 'Creating an individual payment plan', tr: 'Bireysel ödeme planı oluşturma' },
  'steps.step3': { ru: 'Внесение 30% первоначального взноса', en: 'Making 30% down payment', tr: '%30 peşinat ödeme' },
  'steps.step4': { ru: 'Запуск оформления гражданства', en: 'Starting citizenship processing', tr: 'Vatandaşlık işlemini başlatma' },
  'steps.step5': { ru: 'Рассрочка на 3 года без процентов', en: '3-year interest-free installments', tr: '3 yıl faizsiz taksit' },
  'steps.step6': { ru: 'Получение TAPU и паспорта Турции', en: 'Receiving TAPU and Turkish passport', tr: 'TAPU ve Türk pasaportu alma' },
  
  // Consultation Section
  'consultation.title': { ru: 'Получите консультацию', en: 'Get Consultation', tr: 'Danışma Alın' },
  'consultation.description': { ru: 'Мы подберём доступные виллы, рассчитаем рассрочку и подробно расскажем о гражданстве.', en: 'We will find available villas, calculate installments and tell you about citizenship in detail.', tr: 'Mevcut villaları bulacağız, taksitleri hesaplayacağız ve vatandaşlık hakkında ayrıntılı bilgi vereceğiz.' },
  'consultation.whatsapp': { ru: 'Написать в WhatsApp и получить детали', en: 'Write on WhatsApp and get details', tr: 'WhatsApp\'a yazın ve detayları alın' },
  
  // Contact Form
  'form.title': { ru: 'Получите детали и доступные варианты', en: 'Get details and available options', tr: 'Detayları ve mevcut seçenekleri alın' },
  'form.name': { ru: 'Ваше имя', en: 'Your name', tr: 'Adınız' },
  'form.phone': { ru: 'Телефон', en: 'Phone', tr: 'Telefon' },
  'form.submit': { ru: 'Получить консультацию', en: 'Get Consultation', tr: 'Danışma Al' },
  'form.consent': { ru: 'Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности', en: 'By clicking the button, you agree to the privacy policy', tr: 'Butona tıklayarak gizlilik politikasını kabul etmiş olursunuz' },
  'form.success': { ru: 'Спасибо! Мы свяжемся с вами в ближайшее время.', en: 'Thank you! We will contact you shortly.', tr: 'Teşekkürler! En kısa sürede sizinle iletişime geçeceğiz.' },
  
  // Footer
  'footer.privacy': { ru: 'Политика конфиденциальности', en: 'Privacy Policy', tr: 'Gizlilik Politikası' },
  'footer.terms': { ru: 'Условия использования', en: 'Terms of Use', tr: 'Kullanım Koşulları' },
  'footer.rights': { ru: 'Все права защищены', en: 'All rights reserved', tr: 'Tüm hakları saklıdır' },
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('ru');

  const t = (key: string): string => {
    const translation = translations[key];
    if (!translation) {
      console.warn(`Translation missing for key: ${key}`);
      return key;
    }
    return translation[language] || translation['ru'] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}

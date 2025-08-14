import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-blue-100">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                <Icon name="Cross" size={20} className="text-white" />
              </div>
              <h1 className="text-2xl font-bold text-gray-800">МедТранспорт</h1>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#home" className="text-gray-600 hover:text-primary transition-colors">Главная</a>
              <a href="#services" className="text-gray-600 hover:text-primary transition-colors">Услуги</a>
              <a href="#about" className="text-gray-600 hover:text-primary transition-colors">О нас</a>
              <a href="#contacts" className="text-gray-600 hover:text-primary transition-colors">Контакты</a>
            </nav>
            <Button className="hidden md:block">
              <Icon name="Phone" size={16} className="mr-2" />
              Заказать
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="bg-gradient-to-br from-blue-50 to-white py-20">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-5xl font-bold text-gray-800 mb-6 leading-tight">
                Медицинский транспорт
                <span className="text-primary block">круглосуточно</span>
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Профессиональная транспортировка людей с ограниченной подвижностью. 
                Безопасно, комфортно, с медицинским сопровождением 24/7.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="text-lg px-8 py-6">
                  <Icon name="Phone" size={20} className="mr-3" />
                  Вызвать транспорт
                </Button>
                <Button variant="outline" size="lg" className="text-lg px-8 py-6">
                  <Icon name="Play" size={20} className="mr-3" />
                  Узнать больше
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-xl p-8 border border-blue-100">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon name="Clock" size={24} className="text-white" />
                    </div>
                    <h3 className="font-semibold text-gray-800">24/7</h3>
                    <p className="text-sm text-gray-600">Круглосуточно</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon name="Shield" size={24} className="text-white" />
                    </div>
                    <h3 className="font-semibold text-gray-800">Безопасно</h3>
                    <p className="text-sm text-gray-600">Лицензировано</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon name="Heart" size={24} className="text-white" />
                    </div>
                    <h3 className="font-semibold text-gray-800">Медперсонал</h3>
                    <p className="text-sm text-gray-600">Сопровождение</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon name="MapPin" size={24} className="text-white" />
                    </div>
                    <h3 className="font-semibold text-gray-800">По городу</h3>
                    <p className="text-sm text-gray-600">И области</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Наши услуги</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Полный спектр медицинских транспортных услуг для людей с особыми потребностями
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-blue-100 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Wheelchair" size={24} className="text-white" />
                </div>
                <CardTitle className="text-xl">Перевозка в коляске</CardTitle>
                <CardDescription>
                  Специально оборудованный транспорт для людей в инвалидных колясках
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center">
                    <Icon name="Check" size={16} className="text-green-500 mr-2" />
                    Фиксация коляски
                  </li>
                  <li className="flex items-center">
                    <Icon name="Check" size={16} className="text-green-500 mr-2" />
                    Подъемник
                  </li>
                  <li className="flex items-center">
                    <Icon name="Check" size={16} className="text-green-500 mr-2" />
                    Сопровождение
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-blue-100 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Bed" size={24} className="text-white" />
                </div>
                <CardTitle className="text-xl">Лежачие пациенты</CardTitle>
                <CardDescription>
                  Транспортировка лежачих больных с медицинским оборудованием
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center">
                    <Icon name="Check" size={16} className="text-green-500 mr-2" />
                    Медицинские носилки
                  </li>
                  <li className="flex items-center">
                    <Icon name="Check" size={16} className="text-green-500 mr-2" />
                    Кислородное оборудование
                  </li>
                  <li className="flex items-center">
                    <Icon name="Check" size={16} className="text-green-500 mr-2" />
                    Медсестра в пути
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-blue-100 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Building2" size={24} className="text-white" />
                </div>
                <CardTitle className="text-xl">Клиники и больницы</CardTitle>
                <CardDescription>
                  Доставка в медицинские учреждения для процедур и обследований
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center">
                    <Icon name="Check" size={16} className="text-green-500 mr-2" />
                    Запись к врачу
                  </li>
                  <li className="flex items-center">
                    <Icon name="Check" size={16} className="text-green-500 mr-2" />
                    Ожидание процедуры
                  </li>
                  <li className="flex items-center">
                    <Icon name="Check" size={16} className="text-green-500 mr-2" />
                    Обратная доставка
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-medical-gray">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-800 mb-6">О нашей службе</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Мы специализируемся на медицинских перевозках уже более 10 лет. 
                Наша команда состоит из квалифицированных медработников и водителей 
                с большим опытом работы с людьми с ограниченными возможностями.
              </p>
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">500+</div>
                  <div className="text-gray-600">Довольных клиентов</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">24/7</div>
                  <div className="text-gray-600">Круглосуточная работа</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">15</div>
                  <div className="text-gray-600">Автомобилей в парке</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">10</div>
                  <div className="text-gray-600">Лет опыта</div>
                </div>
              </div>
              <Button size="lg">
                <Icon name="FileText" size={18} className="mr-2" />
                Наши лицензии
              </Button>
            </div>
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-blue-100">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Наши преимущества</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <Icon name="CheckCircle" size={20} className="text-green-500 mr-3 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-800">Медицинское сопровождение</h4>
                    <p className="text-gray-600 text-sm">Квалифицированный медперсонал в каждой поездке</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Icon name="CheckCircle" size={20} className="text-green-500 mr-3 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-800">Специальное оборудование</h4>
                    <p className="text-gray-600 text-sm">Современные автомобили с медицинским оснащением</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Icon name="CheckCircle" size={20} className="text-green-500 mr-3 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-800">Доступные цены</h4>
                    <p className="text-gray-600 text-sm">Честные тарифы без скрытых доплат</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Icon name="CheckCircle" size={20} className="text-green-500 mr-3 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-800">Быстрая подача</h4>
                    <p className="text-gray-600 text-sm">Прибытие в течение 30-60 минут по городу</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contacts Section */}
      <section id="contacts" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Контакты</h2>
            <p className="text-xl text-gray-600">Свяжитесь с нами любым удобным способом</p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <div className="space-y-8">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mr-4">
                    <Icon name="Phone" size={20} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">Телефон</h3>
                    <p className="text-gray-600 mb-1">Круглосуточная диспетчерская служба</p>
                    <p className="text-2xl font-bold text-primary">+7 (495) 123-45-67</p>
                    <p className="text-lg text-primary">+7 (800) 123-45-67</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center mr-4">
                    <Icon name="Mail" size={20} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">Email</h3>
                    <p className="text-gray-600 mb-1">Для заявок и вопросов</p>
                    <p className="text-lg text-gray-800">info@medtransport.ru</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mr-4">
                    <Icon name="MapPin" size={20} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">Адрес</h3>
                    <p className="text-gray-600 mb-1">Главный офис</p>
                    <p className="text-lg text-gray-800">г. Москва, ул. Медицинская, 15</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center mr-4">
                    <Icon name="Clock" size={20} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">Режим работы</h3>
                    <p className="text-lg text-primary font-semibold">24 часа / 7 дней в неделю</p>
                    <p className="text-gray-600">Включая праздники</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-medical-gray rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Заказать транспорт</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Откуда</label>
                  <input 
                    type="text" 
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                    placeholder="Адрес подачи"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Куда</label>
                  <input 
                    type="text" 
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                    placeholder="Адрес назначения"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">Дата</label>
                    <input 
                      type="date" 
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">Время</label>
                    <input 
                      type="time" 
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Телефон</label>
                  <input 
                    type="tel" 
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                    placeholder="+7 (___) ___-__-__"
                  />
                </div>
                <Button className="w-full" size="lg">
                  <Icon name="Send" size={18} className="mr-2" />
                  Отправить заявку
                </Button>
                <p className="text-sm text-gray-600 text-center">
                  Мы перезвоним в течение 5 минут для уточнения деталей
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                  <Icon name="Cross" size={20} className="text-white" />
                </div>
                <h3 className="text-xl font-bold">МедТранспорт</h3>
              </div>
              <p className="text-gray-400 mb-4">
                Надежный медицинский транспорт для людей с ограниченной подвижностью. 
                Работаем круглосуточно по всей Москве и области.
              </p>
              <div className="flex space-x-4">
                <Button variant="outline" size="sm">
                  <Icon name="Phone" size={16} />
                </Button>
                <Button variant="outline" size="sm">
                  <Icon name="Mail" size={16} />
                </Button>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Услуги</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Перевозка в инвалидной коляске</li>
                <li>Транспортировка лежачих больных</li>
                <li>Доставка в клиники</li>
                <li>Медицинское сопровождение</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Контакты</h4>
              <ul className="space-y-2 text-gray-400">
                <li>+7 (495) 123-45-67</li>
                <li>+7 (800) 123-45-67</li>
                <li>info@medtransport.ru</li>
                <li>г. Москва, ул. Медицинская, 15</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 МедТранспорт. Все права защищены. Лицензия №12345</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
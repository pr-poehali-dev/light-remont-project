import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";
import { useState } from "react";

const Index = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: ""
  });

  const services = [
    { 
      icon: "Hammer", 
      title: "Работа с гипсокартоном", 
      description: "Качественная установка и отделка стен и потолков",
      price: "от 500 ₽/м²"
    },
    { 
      icon: "Paintbrush", 
      title: "Нанесение мозаичной плитки", 
      description: "Декоративная отделка любой сложности",
      price: "от 800 ₽/м²"
    },
    { 
      icon: "Construction", 
      title: "Заливка полов", 
      description: "Идеально ровные полы под любое покрытие",
      price: "от 400 ₽/м²"
    },
    { 
      icon: "Home", 
      title: "Комплексный ремонт", 
      description: "Полная отделка квартир под ключ",
      price: "от 3000 ₽/м²"
    }
  ];

  const portfolio = [
    {
      title: "Гостиная в современном стиле",
      image: "https://cdn.poehali.dev/projects/f61b204b-45bf-48b5-9d4d-c786e1405cbb/files/90486d61-d313-4dd0-8c72-068a91864323.jpg",
      description: "Полная отделка с гипсокартонными конструкциями"
    },
    {
      title: "Мозаичная плитка в ванной",
      image: "https://cdn.poehali.dev/projects/f61b204b-45bf-48b5-9d4d-c786e1405cbb/files/950601a4-49f7-4602-bd6d-c46e25ffe436.jpg",
      description: "Декоративная отделка премиум класса"
    },
    {
      title: "Заливка пола",
      image: "https://cdn.poehali.dev/projects/f61b204b-45bf-48b5-9d4d-c786e1405cbb/files/8ec928dc-96d4-425b-b509-b069c0554950.jpg",
      description: "Идеально ровное основание под ламинат"
    }
  ];

  const reviews = [
    {
      name: "Анна Петрова",
      rating: 5,
      text: "Отличная работа! Сделали ремонт в квартире за 3 недели. Всё аккуратно, качественно, в срок. Рекомендую!",
      date: "15 декабря 2024"
    },
    {
      name: "Михаил Соколов",
      rating: 5,
      text: "Заливали полы во всей квартире - результат превосходный. Профессионалы своего дела!",
      date: "8 декабря 2024"
    },
    {
      name: "Елена Иванова",
      rating: 5,
      text: "Делали мозаичную плитку в ванной. Работа на высшем уровне, все пожелания учли. Спасибо!",
      date: "1 декабря 2024"
    }
  ];

  const team = [
    {
      name: "Сергей Иванов",
      position: "Главный мастер",
      experience: "15 лет опыта",
      specialization: "Гипсокартон, отделка"
    },
    {
      name: "Дмитрий Петров",
      position: "Специалист по полам",
      experience: "10 лет опыта",
      specialization: "Заливка, стяжка"
    },
    {
      name: "Александр Сидоров",
      position: "Плиточник",
      experience: "12 лет опыта",
      specialization: "Мозаика, плитка"
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Спасибо за заявку! Мы свяжемся с вами в ближайшее время.");
    setFormData({ name: "", phone: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-white">
      <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-gray-100 z-50">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Icon name="Wrench" className="text-primary" size={28} />
              <span className="font-heading font-bold text-xl text-gray-900">РемонтПро</span>
            </div>
            <div className="hidden md:flex items-center gap-8">
              <a href="#services" className="text-gray-600 hover:text-primary transition-colors">Услуги</a>
              <a href="#portfolio" className="text-gray-600 hover:text-primary transition-colors">Портфолио</a>
              <a href="#reviews" className="text-gray-600 hover:text-primary transition-colors">Отзывы</a>
              <a href="#prices" className="text-gray-600 hover:text-primary transition-colors">Цены</a>
              <a href="#team" className="text-gray-600 hover:text-primary transition-colors">О нас</a>
              <a href="#contact" className="text-gray-600 hover:text-primary transition-colors">Контакты</a>
            </div>
            <Button className="hidden md:flex">
              <Icon name="Phone" size={18} className="mr-2" />
              +7 (999) 123-45-67
            </Button>
          </nav>
        </div>
      </header>

      <section className="pt-32 pb-20 px-4 bg-gradient-to-b from-orange-50 to-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <Badge className="mb-4 bg-orange-100 text-primary hover:bg-orange-100">
                Работаем с 2010 года
              </Badge>
              <h1 className="font-heading font-bold text-5xl md:text-6xl text-gray-900 mb-6 leading-tight">
                Качественный ремонт вашей квартиры
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Профессиональная отделка помещений, работа с гипсокартоном, мозаичная плитка и заливка полов. 
                Гарантия на все виды работ.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="text-lg px-8" asChild>
                  <a href="#contact">
                    Оставить заявку
                    <Icon name="ArrowRight" size={20} className="ml-2" />
                  </a>
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-8" asChild>
                  <a href="#portfolio">
                    Наши работы
                  </a>
                </Button>
              </div>
            </div>
            <div className="animate-scale-in">
              <div className="grid grid-cols-2 gap-4">
                <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
                  <CardContent className="p-6 text-center">
                    <div className="text-4xl font-heading font-bold text-primary mb-2">500+</div>
                    <div className="text-gray-600">Завершенных проектов</div>
                  </CardContent>
                </Card>
                <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
                  <CardContent className="p-6 text-center">
                    <div className="text-4xl font-heading font-bold text-primary mb-2">14</div>
                    <div className="text-gray-600">Лет на рынке</div>
                  </CardContent>
                </Card>
                <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
                  <CardContent className="p-6 text-center">
                    <div className="text-4xl font-heading font-bold text-primary mb-2">100%</div>
                    <div className="text-gray-600">Гарантия качества</div>
                  </CardContent>
                </Card>
                <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
                  <CardContent className="p-6 text-center">
                    <div className="text-4xl font-heading font-bold text-primary mb-2">24/7</div>
                    <div className="text-gray-600">Поддержка клиентов</div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <Badge className="mb-4">Наши услуги</Badge>
            <h2 className="font-heading font-bold text-4xl text-gray-900 mb-4">
              Что мы делаем
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Полный спектр услуг по отделке и ремонту помещений
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="border border-gray-100 hover:border-primary hover:shadow-lg transition-all duration-300 group">
                <CardHeader>
                  <div className="w-14 h-14 bg-orange-50 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary group-hover:scale-110 transition-all">
                    <Icon name={service.icon} className="text-primary group-hover:text-white transition-colors" size={28} />
                  </div>
                  <CardTitle className="text-xl mb-2">{service.title}</CardTitle>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-heading font-bold text-primary">{service.price}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="portfolio" className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <Badge className="mb-4">Портфолио</Badge>
            <h2 className="font-heading font-bold text-4xl text-gray-900 mb-4">
              Примеры наших работ
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Смотрите результаты выполненных проектов
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {portfolio.map((project, index) => (
              <Card key={index} className="overflow-hidden border-none shadow-lg hover:shadow-2xl transition-all duration-300 group">
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <CardHeader>
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                  <CardDescription className="text-base">{project.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="reviews" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <Badge className="mb-4">Отзывы</Badge>
            <h2 className="font-heading font-bold text-4xl text-gray-900 mb-4">
              Что говорят наши клиенты
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Честные отзывы от реальных заказчиков
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <Card key={index} className="border border-gray-100 hover:border-primary transition-all hover:shadow-lg">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                      <Icon name="User" className="text-primary" size={24} />
                    </div>
                    <div>
                      <CardTitle className="text-lg">{review.name}</CardTitle>
                      <div className="flex gap-1">
                        {[...Array(review.rating)].map((_, i) => (
                          <Icon key={i} name="Star" size={16} className="text-yellow-400 fill-yellow-400" />
                        ))}
                      </div>
                    </div>
                  </div>
                  <CardDescription className="text-base text-gray-700 leading-relaxed">
                    "{review.text}"
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-500">{review.date}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="prices" className="py-20 px-4 bg-gradient-to-b from-orange-50 to-white">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <Badge className="mb-4">Прайс-лист</Badge>
            <h2 className="font-heading font-bold text-4xl text-gray-900 mb-4">
              Стоимость услуг
            </h2>
            <p className="text-xl text-gray-600">
              Прозрачное ценообразование без скрытых платежей
            </p>
          </div>
          <Card className="border-none shadow-xl">
            <CardContent className="p-8">
              <div className="space-y-6">
                <div className="flex justify-between items-center pb-4 border-b border-gray-100">
                  <div>
                    <div className="font-semibold text-lg text-gray-900">Работа с гипсокартоном</div>
                    <div className="text-gray-600">Монтаж стен и потолков</div>
                  </div>
                  <div className="text-2xl font-heading font-bold text-primary">от 500 ₽/м²</div>
                </div>
                <div className="flex justify-between items-center pb-4 border-b border-gray-100">
                  <div>
                    <div className="font-semibold text-lg text-gray-900">Мозаичная плитка</div>
                    <div className="text-gray-600">Укладка декоративной плитки</div>
                  </div>
                  <div className="text-2xl font-heading font-bold text-primary">от 800 ₽/м²</div>
                </div>
                <div className="flex justify-between items-center pb-4 border-b border-gray-100">
                  <div>
                    <div className="font-semibold text-lg text-gray-900">Заливка полов</div>
                    <div className="text-gray-600">Наливные полы, стяжка</div>
                  </div>
                  <div className="text-2xl font-heading font-bold text-primary">от 400 ₽/м²</div>
                </div>
                <div className="flex justify-between items-center pb-4 border-b border-gray-100">
                  <div>
                    <div className="font-semibold text-lg text-gray-900">Комплексный ремонт</div>
                    <div className="text-gray-600">Под ключ с материалами</div>
                  </div>
                  <div className="text-2xl font-heading font-bold text-primary">от 3000 ₽/м²</div>
                </div>
                <div className="flex justify-between items-center">
                  <div>
                    <div className="font-semibold text-lg text-gray-900">Дизайн-проект</div>
                    <div className="text-gray-600">3D визуализация</div>
                  </div>
                  <div className="text-2xl font-heading font-bold text-primary">Бесплатно</div>
                </div>
              </div>
              <div className="mt-8 p-6 bg-orange-50 rounded-lg">
                <div className="flex items-start gap-3">
                  <Icon name="Info" className="text-primary mt-1" size={24} />
                  <div>
                    <div className="font-semibold text-gray-900 mb-2">Калькулятор стоимости</div>
                    <p className="text-gray-600">
                      Точная стоимость рассчитывается индивидуально после осмотра объекта. 
                      Выезд мастера для замеров — бесплатно!
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="team" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <Badge className="mb-4">Наша команда</Badge>
            <h2 className="font-heading font-bold text-4xl text-gray-900 mb-4">
              Опытные мастера
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Квалифицированные специалисты с многолетним опытом
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {team.map((member, index) => (
              <Card key={index} className="text-center border border-gray-100 hover:border-primary hover:shadow-lg transition-all">
                <CardHeader className="pb-4">
                  <div className="w-24 h-24 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name="User" className="text-primary" size={48} />
                  </div>
                  <CardTitle className="text-xl">{member.name}</CardTitle>
                  <CardDescription className="text-base">
                    <div className="font-semibold text-gray-700 mb-1">{member.position}</div>
                    <div className="text-primary">{member.experience}</div>
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Badge variant="secondary" className="text-sm">
                    {member.specialization}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
          <Card className="border-none shadow-lg bg-gradient-to-r from-orange-50 to-white">
            <CardContent className="p-8">
              <div className="flex items-start gap-4">
                <Icon name="Award" className="text-primary flex-shrink-0 mt-1" size={32} />
                <div>
                  <h3 className="font-heading font-bold text-2xl text-gray-900 mb-3">
                    О компании РемонтПро
                  </h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Мы работаем на рынке ремонтных услуг с 2010 года. За это время выполнили более 500 проектов 
                    различной сложности — от косметического ремонта до полной перепланировки квартир.
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Наша команда состоит из квалифицированных мастеров с опытом работы от 10 лет. 
                    Все специалисты регулярно проходят обучение и повышают квалификацию.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    Мы используем только качественные материалы и современное оборудование. 
                    Даем гарантию на все виды работ и всегда соблюдаем сроки.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="contact" className="py-20 px-4 bg-gray-900 text-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <Badge className="mb-4 bg-primary text-white hover:bg-primary">
                Контакты
              </Badge>
              <h2 className="font-heading font-bold text-4xl mb-6">
                Свяжитесь с нами
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Оставьте заявку, и мы свяжемся с вами в течение 15 минут
              </p>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="Phone" className="text-primary" size={24} />
                  </div>
                  <div>
                    <div className="font-semibold mb-1">Телефон</div>
                    <a href="tel:+79991234567" className="text-xl text-primary hover:underline">
                      +7 (999) 123-45-67
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="Mail" className="text-primary" size={24} />
                  </div>
                  <div>
                    <div className="font-semibold mb-1">Email</div>
                    <a href="mailto:info@remontpro.ru" className="text-xl text-primary hover:underline">
                      info@remontpro.ru
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="MapPin" className="text-primary" size={24} />
                  </div>
                  <div>
                    <div className="font-semibold mb-1">Адрес</div>
                    <p className="text-gray-300">
                      г. Москва, ул. Строителей, д. 10<br />
                      Офис работает: Пн-Пт 9:00-18:00
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <Card className="border-none shadow-xl">
              <CardHeader>
                <CardTitle className="text-2xl">Заказать звонок</CardTitle>
                <CardDescription className="text-base">
                  Заполните форму, и мы перезвоним вам
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="text-sm font-medium text-gray-700 mb-2 block">
                      Ваше имя
                    </label>
                    <Input
                      placeholder="Иван Иванов"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      className="h-12"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-700 mb-2 block">
                      Телефон
                    </label>
                    <Input
                      type="tel"
                      placeholder="+7 (999) 123-45-67"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      required
                      className="h-12"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-700 mb-2 block">
                      Сообщение
                    </label>
                    <Textarea
                      placeholder="Расскажите о вашем проекте..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      rows={4}
                    />
                  </div>
                  <Button type="submit" size="lg" className="w-full text-lg">
                    Отправить заявку
                    <Icon name="Send" size={20} className="ml-2" />
                  </Button>
                  <p className="text-sm text-gray-500 text-center">
                    Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="py-8 px-4 bg-gray-950 text-gray-400">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <Icon name="Wrench" className="text-primary" size={24} />
              <span className="font-heading font-bold text-white">РемонтПро</span>
            </div>
            <p className="text-center">
              © 2024 РемонтПро. Все права защищены.
            </p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-primary transition-colors">
                Политика конфиденциальности
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;

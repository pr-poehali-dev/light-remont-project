import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const HeroSection = () => {
  return (
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
  );
};

export default HeroSection;

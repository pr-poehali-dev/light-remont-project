import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Header = () => {
  return (
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
  );
};

export default Header;

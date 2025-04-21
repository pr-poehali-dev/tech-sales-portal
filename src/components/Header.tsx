
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, Search, ShoppingCart, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { 
  Sheet, 
  SheetContent, 
  SheetTrigger 
} from '@/components/ui/sheet';

const Header = () => {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b shadow-sm">
      <div className="container flex items-center justify-between h-16 px-4 md:px-6 lg:px-8">
        <div className="flex items-center gap-4">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="w-5 h-5" />
                <span className="sr-only">Меню</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[260px] sm:w-[300px]">
              <nav className="flex flex-col gap-6 mt-6">
                <Link to="/" className="text-lg font-semibold">Главная</Link>
                <Link to="/catalog" className="text-lg font-semibold">Каталог</Link>
                <Link to="/promo" className="text-lg font-semibold">Акции</Link>
                <Link to="/about" className="text-lg font-semibold">О нас</Link>
                <Link to="/contacts" className="text-lg font-semibold">Контакты</Link>
              </nav>
            </SheetContent>
          </Sheet>
          <Link to="/" className="text-xl font-bold">ТехноСтор</Link>
        </div>
        
        <div className="hidden md:flex md:items-center md:gap-6">
          <nav className="flex items-center gap-4">
            <Link to="/" className="text-sm font-medium hover:text-primary">Главная</Link>
            <Link to="/catalog" className="text-sm font-medium hover:text-primary">Каталог</Link>
            <Link to="/promo" className="text-sm font-medium hover:text-primary">Акции</Link>
            <Link to="/about" className="text-sm font-medium hover:text-primary">О нас</Link>
            <Link to="/contacts" className="text-sm font-medium hover:text-primary">Контакты</Link>
          </nav>
        </div>
        
        <div className="flex items-center gap-4">
          <form className="hidden md:flex md:w-[200px] lg:w-[300px]">
            <div className="relative w-full">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
              <Input
                type="search"
                placeholder="Поиск..."
                className="w-full pl-8"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </form>
          <Button variant="ghost" size="icon">
            <Search className="w-5 h-5 md:hidden" />
            <span className="sr-only">Поиск</span>
          </Button>
          <Button variant="ghost" size="icon">
            <User className="w-5 h-5" />
            <span className="sr-only">Аккаунт</span>
          </Button>
          <Button variant="ghost" size="icon">
            <ShoppingCart className="w-5 h-5" />
            <span className="sr-only">Корзина</span>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;

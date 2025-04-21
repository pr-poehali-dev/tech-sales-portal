
import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProductCard from '@/components/ProductCard';
import { Slider } from '@/components/ui/slider';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Laptop, Smartphone, Tv, Camera, Headphones, Watch } from 'lucide-react';

// Пример продуктов для каталога
const catalogProducts = [
  {
    id: 1,
    name: 'Смартфон Pro X',
    price: 79999,
    image: '/placeholder.svg',
    rating: 4.5,
    category: 'smartphones',
    discount: 10,
  },
  {
    id: 2,
    name: 'Ноутбук UltraBook',
    price: 89999,
    image: '/placeholder.svg',
    rating: 4.8,
    category: 'laptops',
    discount: 0,
  },
  {
    id: 3,
    name: 'Умные часы FitTrack',
    price: 15999,
    image: '/placeholder.svg',
    rating: 4.2,
    category: 'wearables',
    discount: 15,
  },
  {
    id: 4,
    name: 'Беспроводные наушники SoundPlus',
    price: 12999,
    image: '/placeholder.svg',
    rating: 4.6,
    category: 'audio',
    discount: 0,
  },
  {
    id: 5,
    name: 'Телевизор SmartView 55"',
    price: 59999,
    image: '/placeholder.svg',
    rating: 4.7,
    category: 'tv',
    discount: 5,
  },
  {
    id: 6,
    name: 'Цифровая камера ProShot',
    price: 45999,
    image: '/placeholder.svg',
    rating: 4.4,
    category: 'cameras',
    discount: 0,
  },
  {
    id: 7,
    name: 'Игровая приставка GameMaster',
    price: 49999,
    image: '/placeholder.svg',
    rating: 4.9,
    category: 'gaming',
    discount: 0,
  },
  {
    id: 8,
    name: 'Планшет ThinTab 10',
    price: 39999,
    image: '/placeholder.svg',
    rating: 4.3,
    category: 'tablets',
    discount: 8,
  },
];

// Категории для фильтрации
const categories = [
  { id: 'smartphones', name: 'Смартфоны', icon: Smartphone },
  { id: 'laptops', name: 'Ноутбуки', icon: Laptop },
  { id: 'tv', name: 'Телевизоры', icon: Tv },
  { id: 'cameras', name: 'Камеры', icon: Camera },
  { id: 'audio', name: 'Аудио', icon: Headphones },
  { id: 'wearables', name: 'Носимые устройства', icon: Watch },
];

const Catalog = () => {
  const [priceRange, setPriceRange] = useState<number[]>([0, 100000]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [showDiscount, setShowDiscount] = useState(false);

  // Функция для обработки выбора категории
  const handleCategoryChange = (categoryId: string) => {
    setSelectedCategories(prev => 
      prev.includes(categoryId) 
        ? prev.filter(id => id !== categoryId) 
        : [...prev, categoryId]
    );
  };

  // Фильтрация продуктов
  const filteredProducts = catalogProducts.filter(product => {
    const matchesPrice = product.price >= priceRange[0] && product.price <= priceRange[1];
    const matchesCategory = selectedCategories.length === 0 || selectedCategories.includes(product.category);
    const matchesDiscount = !showDiscount || product.discount > 0;
    
    return matchesPrice && matchesCategory && matchesDiscount;
  });

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 container px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Каталог техники</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Боковая панель с фильтрами */}
          <div className="lg:col-span-1 space-y-6 bg-white p-4 rounded-lg shadow">
            <div>
              <h3 className="text-lg font-medium mb-4">Категории</h3>
              <div className="space-y-3">
                {categories.map(category => (
                  <div key={category.id} className="flex items-center space-x-2">
                    <Checkbox 
                      id={`category-${category.id}`} 
                      checked={selectedCategories.includes(category.id)}
                      onCheckedChange={() => handleCategoryChange(category.id)}
                    />
                    <Label 
                      htmlFor={`category-${category.id}`}
                      className="flex items-center space-x-2 cursor-pointer"
                    >
                      <category.icon className="h-4 w-4" />
                      <span>{category.name}</span>
                    </Label>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-medium mb-4">Цена</h3>
              <div className="space-y-4">
                <Slider 
                  value={priceRange} 
                  min={0} 
                  max={100000} 
                  step={1000}
                  onValueChange={setPriceRange}
                />
                <div className="flex justify-between">
                  <span>{priceRange[0]} ₽</span>
                  <span>{priceRange[1]} ₽</span>
                </div>
              </div>
            </div>
            
            <div>
              <div className="flex items-center space-x-2">
                <Checkbox 
                  id="discount-only" 
                  checked={showDiscount}
                  onCheckedChange={() => setShowDiscount(!showDiscount)}
                />
                <Label htmlFor="discount-only">Только со скидкой</Label>
              </div>
            </div>
            
            <Button 
              variant="outline" 
              className="w-full"
              onClick={() => {
                setPriceRange([0, 100000]);
                setSelectedCategories([]);
                setShowDiscount(false);
              }}
            >
              Сбросить фильтры
            </Button>
          </div>
          
          {/* Сетка продуктов */}
          <div className="lg:col-span-3">
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.map(product => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="bg-gray-100 p-8 rounded-lg text-center">
                <h3 className="text-lg font-medium mb-2">Товары не найдены</h3>
                <p className="text-gray-500">Попробуйте изменить параметры фильтрации</p>
              </div>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Catalog;

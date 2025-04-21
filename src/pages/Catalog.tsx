
import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FilterSidebar from '@/components/catalog/FilterSidebar';
import ProductGrid from '@/components/catalog/ProductGrid';
import { catalogProducts } from '@/types/product';

const Catalog = () => {
  const [priceRange, setPriceRange] = useState<number[]>([0, 100000]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [showDiscount, setShowDiscount] = useState(false);

  // Фильтрация продуктов
  const filteredProducts = catalogProducts.filter(product => {
    const matchesPrice = product.price >= priceRange[0] && product.price <= priceRange[1];
    const matchesCategory = selectedCategories.length === 0 || selectedCategories.includes(product.category);
    const matchesDiscount = !showDiscount || product.discount > 0;
    
    return matchesPrice && matchesCategory && matchesDiscount;
  });

  // Сброс всех фильтров
  const resetFilters = () => {
    setPriceRange([0, 100000]);
    setSelectedCategories([]);
    setShowDiscount(false);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 container px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Каталог техники</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Боковая панель с фильтрами */}
          <FilterSidebar 
            priceRange={priceRange}
            setPriceRange={setPriceRange}
            selectedCategories={selectedCategories}
            setSelectedCategories={setSelectedCategories}
            showDiscount={showDiscount}
            setShowDiscount={setShowDiscount}
            resetFilters={resetFilters}
          />
          
          {/* Сетка продуктов */}
          <div className="lg:col-span-3">
            <ProductGrid products={filteredProducts} />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Catalog;

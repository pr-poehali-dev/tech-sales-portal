
import { Button } from '@/components/ui/button';
import CategoryFilter from './CategoryFilter';
import PriceRangeFilter from './PriceRangeFilter';
import DiscountFilter from './DiscountFilter';

interface FilterSidebarProps {
  priceRange: number[];
  setPriceRange: (value: number[]) => void;
  selectedCategories: string[];
  setSelectedCategories: (value: string[]) => void;
  showDiscount: boolean;
  setShowDiscount: (value: boolean) => void;
  resetFilters: () => void;
}

const FilterSidebar = ({
  priceRange,
  setPriceRange,
  selectedCategories,
  setSelectedCategories,
  showDiscount,
  setShowDiscount,
  resetFilters
}: FilterSidebarProps) => {
  
  // Функция для обработки выбора категории
  const handleCategoryChange = (categoryId: string) => {
    setSelectedCategories(prev => 
      prev.includes(categoryId) 
        ? prev.filter(id => id !== categoryId) 
        : [...prev, categoryId]
    );
  };

  return (
    <div className="lg:col-span-1 space-y-6 bg-white p-4 rounded-lg shadow">
      <CategoryFilter 
        selectedCategories={selectedCategories} 
        onCategoryChange={handleCategoryChange} 
      />
      
      <PriceRangeFilter 
        priceRange={priceRange} 
        onPriceRangeChange={setPriceRange} 
      />
      
      <DiscountFilter 
        showDiscount={showDiscount} 
        onShowDiscountChange={setShowDiscount} 
      />
      
      <Button 
        variant="outline" 
        className="w-full"
        onClick={resetFilters}
      >
        Сбросить фильтры
      </Button>
    </div>
  );
};

export default FilterSidebar;

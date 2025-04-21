
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { Laptop, Smartphone, Tv, Camera, Headphones, Watch } from 'lucide-react';

// Категории для фильтрации
export const categories = [
  { id: 'smartphones', name: 'Смартфоны', icon: Smartphone },
  { id: 'laptops', name: 'Ноутбуки', icon: Laptop },
  { id: 'tv', name: 'Телевизоры', icon: Tv },
  { id: 'cameras', name: 'Камеры', icon: Camera },
  { id: 'audio', name: 'Аудио', icon: Headphones },
  { id: 'wearables', name: 'Носимые устройства', icon: Watch },
];

interface CategoryFilterProps {
  selectedCategories: string[];
  onCategoryChange: (categoryId: string) => void;
}

const CategoryFilter = ({ selectedCategories, onCategoryChange }: CategoryFilterProps) => {
  return (
    <div>
      <h3 className="text-lg font-medium mb-4">Категории</h3>
      <div className="space-y-3">
        {categories.map(category => (
          <div key={category.id} className="flex items-center space-x-2">
            <Checkbox 
              id={`category-${category.id}`} 
              checked={selectedCategories.includes(category.id)}
              onCheckedChange={() => onCategoryChange(category.id)}
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
  );
};

export default CategoryFilter;

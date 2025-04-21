
import { Slider } from '@/components/ui/slider';

interface PriceRangeFilterProps {
  priceRange: number[];
  onPriceRangeChange: (value: number[]) => void;
  min?: number;
  max?: number;
  step?: number;
}

const PriceRangeFilter = ({ 
  priceRange, 
  onPriceRangeChange, 
  min = 0, 
  max = 100000, 
  step = 1000 
}: PriceRangeFilterProps) => {
  return (
    <div>
      <h3 className="text-lg font-medium mb-4">Цена</h3>
      <div className="space-y-4">
        <Slider 
          value={priceRange} 
          min={min} 
          max={max} 
          step={step}
          onValueChange={onPriceRangeChange}
        />
        <div className="flex justify-between">
          <span>{priceRange[0]} ₽</span>
          <span>{priceRange[1]} ₽</span>
        </div>
      </div>
    </div>
  );
};

export default PriceRangeFilter;

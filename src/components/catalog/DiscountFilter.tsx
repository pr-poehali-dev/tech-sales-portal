
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';

interface DiscountFilterProps {
  showDiscount: boolean;
  onShowDiscountChange: (value: boolean) => void;
}

const DiscountFilter = ({ showDiscount, onShowDiscountChange }: DiscountFilterProps) => {
  return (
    <div>
      <div className="flex items-center space-x-2">
        <Checkbox 
          id="discount-only" 
          checked={showDiscount}
          onCheckedChange={() => onShowDiscountChange(!showDiscount)}
        />
        <Label htmlFor="discount-only">Только со скидкой</Label>
      </div>
    </div>
  );
};

export default DiscountFilter;

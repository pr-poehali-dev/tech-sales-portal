
import { Heart, ShoppingCart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export interface ProductProps {
  id: string;
  name: string;
  category: string;
  price: number;
  oldPrice?: number;
  image: string;
  isNew?: boolean;
  discount?: number;
}

const ProductCard = ({ 
  id, 
  name, 
  category, 
  price, 
  oldPrice, 
  image, 
  isNew = false, 
  discount = 0 
}: ProductProps) => {
  return (
    <Card className="overflow-hidden group transition-all duration-300 hover:shadow-md">
      <div className="relative aspect-square overflow-hidden">
        <img
          src={image || "/placeholder.svg"}
          alt={name}
          className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute top-2 left-2 flex gap-1 flex-wrap">
          {isNew && (
            <Badge className="bg-blue-500 hover:bg-blue-600">Новинка</Badge>
          )}
          {discount > 0 && (
            <Badge className="bg-red-500 hover:bg-red-600">-{discount}%</Badge>
          )}
        </div>
        <Button
          variant="ghost"
          size="icon"
          className="absolute top-2 right-2 bg-white/80 hover:bg-white rounded-full"
        >
          <Heart className="h-5 w-5" />
          <span className="sr-only">Добавить в избранное</span>
        </Button>
      </div>
      <CardContent className="p-4">
        <p className="text-sm text-gray-500">{category}</p>
        <h3 className="font-semibold mt-1 truncate">{name}</h3>
        <div className="mt-2 flex items-center gap-2">
          <span className="font-bold text-lg">{price.toLocaleString()} ₽</span>
          {oldPrice && (
            <span className="text-gray-400 line-through text-sm">
              {oldPrice.toLocaleString()} ₽
            </span>
          )}
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Button className="w-full bg-purple-600 hover:bg-purple-700 gap-2">
          <ShoppingCart className="h-4 w-4" />
          В корзину
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;


import ProductCard from '@/components/ProductCard';
import { ProductType } from '@/types/product';

interface ProductGridProps {
  products: ProductType[];
}

const ProductGrid = ({ products }: ProductGridProps) => {
  if (products.length === 0) {
    return (
      <div className="bg-gray-100 p-8 rounded-lg text-center">
        <h3 className="text-lg font-medium mb-2">Товары не найдены</h3>
        <p className="text-gray-500">Попробуйте изменить параметры фильтрации</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductGrid;

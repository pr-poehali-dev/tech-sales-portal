
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import ProductCard, { ProductProps } from '@/components/ProductCard';

const featuredProducts: ProductProps[] = [
  {
    id: '1',
    name: 'Смартфон Apple iPhone 15 Pro',
    category: 'Смартфоны',
    price: 129990,
    oldPrice: 145990,
    image: '/placeholder.svg',
    isNew: true,
    discount: 10,
  },
  {
    id: '2',
    name: 'Ноутбук ASUS ROG Zephyrus G14',
    category: 'Ноутбуки',
    price: 144990,
    image: '/placeholder.svg',
  },
  {
    id: '3',
    name: 'Телевизор Samsung QE65QN90BAUXRU',
    category: 'Телевизоры',
    price: 149990,
    oldPrice: 189990,
    image: '/placeholder.svg',
    discount: 20,
  }
];

const FeaturedProducts = () => {
  return (
    <section className="py-12 bg-white">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
          <div>
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
              Популярные товары
            </h2>
            <p className="mt-2 text-gray-500">
              Самые востребованные модели этого месяца
            </p>
          </div>
          <Link to="/catalog" className="inline-flex mt-4 md:mt-0">
            <Button variant="link" className="gap-1 text-purple-600">
              Перейти в каталог <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;

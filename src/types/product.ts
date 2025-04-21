
export interface ProductType {
  id: number;
  name: string;
  price: number;
  image: string;
  rating: number;
  category: string;
  discount: number;
}

// Пример продуктов для каталога
export const catalogProducts: ProductType[] = [
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


import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-purple-50 to-white">
      <div className="container px-4 py-16 md:py-24 lg:py-32">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
          <div className="space-y-4">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Новейшие технологии для вашего дома
            </h1>
            <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Откройте для себя инновационные гаджеты и технику от ведущих мировых производителей.
              Бесплатная доставка при заказе от 5000 ₽.
            </p>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link to="/catalog">
                <Button size="lg" className="bg-purple-600 hover:bg-purple-700">
                  Смотреть каталог
                </Button>
              </Link>
              <Link to="/promo">
                <Button size="lg" variant="outline">
                  Специальные предложения
                </Button>
              </Link>
            </div>
          </div>
          <div className="relative mx-auto aspect-video overflow-hidden rounded-xl lg:order-last">
            <img
              src="/placeholder.svg" 
              alt="Современная техника"
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

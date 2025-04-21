
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import FeaturedProducts from '@/components/FeaturedProducts';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <Hero />
        <div className="py-8 bg-white">
          <div className="container px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-blue-50 rounded-lg p-6 text-center hover:shadow-md transition-shadow">
                <div className="text-blue-600 mb-3 text-4xl">🚚</div>
                <h3 className="font-medium text-lg mb-2">Быстрая доставка</h3>
                <p className="text-gray-600">Доставка по России от 1 до 3 дней</p>
              </div>
              <div className="bg-green-50 rounded-lg p-6 text-center hover:shadow-md transition-shadow">
                <div className="text-green-600 mb-3 text-4xl">🔄</div>
                <h3 className="font-medium text-lg mb-2">30 дней на возврат</h3>
                <p className="text-gray-600">Если товар вам не подошел</p>
              </div>
              <div className="bg-purple-50 rounded-lg p-6 text-center hover:shadow-md transition-shadow">
                <div className="text-purple-600 mb-3 text-4xl">🔒</div>
                <h3 className="font-medium text-lg mb-2">Безопасная оплата</h3>
                <p className="text-gray-600">Защита платежей покупателя</p>
              </div>
            </div>
          </div>
        </div>
        <FeaturedProducts />
        <section className="py-12 bg-purple-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center text-center space-y-4">
              <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
                Подпишитесь на нашу рассылку
              </h2>
              <p className="text-gray-500 max-w-[600px]">
                Будьте в курсе новых поступлений и специальных предложений
              </p>
              <div className="flex w-full max-w-md gap-2 mt-4">
                <input
                  type="email"
                  placeholder="Введите email"
                  className="w-full px-4 py-2 text-gray-900 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
                />
                <button className="px-4 py-2 font-medium text-white bg-purple-600 rounded-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">
                  Подписаться
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;

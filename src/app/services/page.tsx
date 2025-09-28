import Layout from '@/components/layout/Layout';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import Image from 'next/image';
import Link from 'next/link';

const ServicesPage = () => {
  const services = [
    {
      id: 'project-documentation',
      title: 'Разработка проектно-сметной документации',
      description: 'Полный цикл разработки проектной документации для дорожного строительства и инфраструктуры',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      features: [
        'Проектирование автомобильных дорог',
        'Разработка сметной документации',
        'Инженерные изыскания',
        'Экспертиза проектов',
        'Авторский надзор'
      ],
      price: 'от 150 000 ₽',
      duration: '30-90 дней'
    },
    {
      id: 'crane-rental',
      title: 'Аренда автовышки',
      description: 'Предоставление в аренду автовышек различной высоты для работ на высоте',
      image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      features: [
        'Автовышки 12-45 метров',
        'Опытные операторы',
        'Техническое обслуживание',
        'Доставка на объект',
        'Круглосуточная поддержка'
      ],
      price: 'от 3 500 ₽/смена',
      duration: 'Почасово/посменно'
    },
    {
      id: 'tow-service',
      title: 'Вызов эвакуатора',
      description: 'Круглосуточная служба эвакуации автомобилей с быстрым реагированием',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      features: [
        'Круглосуточная работа',
        'Быстрое прибытие (15-30 мин)',
        'Эвакуация любых ТС',
        'Безопасная транспортировка',
        'Страхование груза'
      ],
      price: 'от 2 000 ₽',
      duration: '15-30 минут'
    }
  ];

  return (
    <>
      <div className="min-h-screen bg-secondary">
        {/* Hero Section */}
        <div className="bg-primary text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Наши услуги
              </h1>
              <p className="text-xl text-primary-light max-w-3xl mx-auto">
                Комплексные решения для дорожной инфраструктуры и транспортных услуг
              </p>
            </div>
          </div>
        </div>

        {/* Services Grid */}
        <div className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {services.map((service) => (
                <Card key={service.id} className="overflow-hidden" hover>
                  <div className="relative h-48">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-foreground mb-3">
                      {service.title}
                    </h3>
                    
                    <p className="text-text-muted mb-4">
                      {service.description}
                    </p>

                    <div className="mb-4">
                      <h4 className="font-semibold text-foreground mb-2">Включает:</h4>
                      <ul className="space-y-1">
                        {service.features.map((feature, index) => (
                          <li key={index} className="text-sm text-text-muted flex items-center">
                            <svg className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex justify-between items-center mb-4 text-sm">
                      <div>
                        <span className="text-text-muted">Цена: </span>
                        <span className="font-semibold text-primary">{service.price}</span>
                      </div>
                      <div>
                        <span className="text-text-muted">Срок: </span>
                        <span className="font-semibold">{service.duration}</span>
                      </div>
                    </div>

                    <div className="flex space-x-3">
                      <Link href={`/services/${service.id}`} className="flex-1">
                        <Button fullWidth>
                          Подробнее
                        </Button>
                      </Link>
                      <Button variant="outline">
                        Заказать
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-primary text-white py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4">
              Нужна консультация?
            </h2>
            <p className="text-xl text-primary-light mb-8">
              Наши специалисты помогут выбрать оптимальное решение для ваших задач
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="secondary" size="lg">
                Получить консультацию
              </Button>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary">
                Рассчитать стоимость
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServicesPage;
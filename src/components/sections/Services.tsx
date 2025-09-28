import Image from 'next/image';
import Link from 'next/link';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
const Services = () => {
  const services = [
    {
      title: 'Разработка проектно-сметной документации',
      description: 'Профессиональная разработка проектной документации для дорожных объектов с учетом современных стандартов и требований безопасности.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      features: ['Проектирование дорог', 'Сметная документация', 'Экспертиза проектов', 'Авторский надзор'],
      link: 'services/project-documentation'
    },
    {
      title: 'Аренда автовышки',
      description: 'Предоставление в аренду современных автовышек для обслуживания дорожной инфраструктуры, установки и ремонта оборудования.',
      image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      features: ['Высота до 22 метров', 'Опытные операторы', 'Гибкий график', 'Конкурентные цены'],
      link: 'services/crane-rental'
    },
    {
      title: 'Вызов эвакуатора',
      description: 'Круглосуточная служба эвакуации транспортных средств с быстрым реагированием и профессиональным подходом.',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      features: ['Работа 24/7', 'Быстрое прибытие', 'Любые типы ТС', 'Страхование груза'],
      link: 'services/tow-service'
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Наши услуги
          </h2>
          <p className="text-xl text-text-muted max-w-3xl mx-auto leading-relaxed">
            Комплексные решения для дорожной инфраструктуры и транспортной безопасности
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} hover className="overflow-hidden">
              <div className="relative h-48 mb-6">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover rounded-xl"
                />
              </div>
              
              <h3 className="text-xl font-bold text-foreground mb-4">
                {service.title}
              </h3>
              
              <p className="text-text-muted mb-6 leading-relaxed">
                {service.description}
              </p>

              <div className="mb-6">
                <h4 className="font-semibold text-foreground mb-3">Особенности:</h4>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-text-muted">
                      <svg className="w-4 h-4 text-primary mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <Link href={service.link}>
                <Button variant="outline" fullWidth>
                  Подробнее
                </Button>
              </Link>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-text-muted mb-6">
            Нужна консультация по нашим услугам?
          </p>
          <Button size="lg">
            Связаться с нами
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;
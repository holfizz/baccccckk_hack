'use client';

import { useState } from 'react';
import Layout from '@/components/layout/Layout';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import Image from 'next/image';
import Link from 'next/link';

const TowServicePage = () => {
  const [selectedService, setSelectedService] = useState('standard');

  const services = {
    standard: {
      title: 'Стандартная эвакуация',
      price: '2 000 ₽',
      description: 'Эвакуация легковых автомобилей весом до 3,5 тонн',
      features: [
        'Легковые автомобили',
        'Кроссоверы и внедорожники',
        'Микроавтобусы до 3,5т',
        'Мотоциклы и скутеры'
      ],
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    truck: {
      title: 'Эвакуация грузовиков',
      price: '5 000 ₽',
      description: 'Эвакуация грузовых автомобилей и спецтехники',
      features: [
        'Грузовики до 20 тонн',
        'Автобусы',
        'Спецтехника',
        'Прицепы и полуприцепы'
      ],
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    emergency: {
      title: 'Экстренная эвакуация',
      price: '3 500 ₽',
      description: 'Круглосуточная экстренная эвакуация с места ДТП',
      features: [
        'Круглосуточно',
        'Прибытие 15-20 мин',
        'Работа с ГИБДД',
        'Документооборот'
      ],
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    }
  };

  const reasons = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
        </svg>
      ),
      title: 'ДТП',
      description: 'Авария с повреждениями'
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: 'Поломка',
      description: 'Техническая неисправность'
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      ),
      title: 'Блокировка',
      description: 'Заблокированный автомобиль'
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
        </svg>
      ),
      title: 'Эвакуация',
      description: 'Нарушение правил парковки'
    }
  ];

  return (
    <>
      <div className="min-h-screen bg-secondary">
        {/* Hero Section */}
        <div className="relative h-96 bg-primary">
          <div className="absolute inset-0">
            <Image
              src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
              alt="Эвакуатор"
              fill
              className="object-cover opacity-20"
            />
          </div>
          <div className="relative z-10 flex items-center h-full">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-white">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">
                  Вызов эвакуатора
                </h1>
                <p className="text-xl text-primary-light max-w-2xl">
                  Круглосуточная служба эвакуации с быстрым прибытием по Москве и области
                </p>
                <div className="mt-8">
                  <Button size="lg" variant="secondary">
                    Вызвать эвакуатор
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Quick Call Section */}
            <Card className="mb-12 bg-gradient-to-r from-red-50 to-orange-50 border-red-200">
              <div className="text-center">
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  Экстренный вызов эвакуатора
                </h2>
                <p className="text-text-muted mb-6">
                  Если вам нужна срочная помощь, звоните прямо сейчас
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <a href="tel:+74951234567" className="text-3xl font-bold text-red-600 hover:text-red-700">
                    +7 (495) 123-45-67
                  </a>
                  <Button variant="outline" className="border-red-600 text-red-600 hover:bg-red-600 hover:text-white">
                    Заказать обратный звонок
                  </Button>
                </div>
              </div>
            </Card>

            {/* Service Types */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-foreground mb-8">Виды эвакуации</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                {Object.entries(services).map(([key, service]) => (
                  <Card 
                    key={key}
                    className={`cursor-pointer transition-all ${
                      selectedService === key ? 'ring-2 ring-primary' : ''
                    }`}
                    onClick={() => setSelectedService(key)}
                    hover
                  >
                    <div className="relative h-32 mb-4">
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        className="object-cover rounded"
                      />
                    </div>
                    <h3 className="font-bold text-foreground mb-2">{service.title}</h3>
                    <p className="text-text-muted text-sm mb-3">{service.description}</p>
                    <p className="text-primary font-bold text-xl">{service.price}</p>
                  </Card>
                ))}
              </div>

              {/* Selected Service Details */}
              <Card>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div>
                    <div className="relative h-64 mb-6">
                      <Image
                        src={services[selectedService as keyof typeof services].image}
                        alt={services[selectedService as keyof typeof services].title}
                        fill
                        className="object-cover rounded"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-2xl font-bold text-foreground mb-4">
                      {services[selectedService as keyof typeof services].title}
                    </h3>
                    
                    <p className="text-text-muted mb-6">
                      {services[selectedService as keyof typeof services].description}
                    </p>

                    <div className="mb-6">
                      <h4 className="font-semibold text-foreground mb-3">Подходит для:</h4>
                      <ul className="space-y-2">
                        {services[selectedService as keyof typeof services].features.map((feature, index) => (
                          <li key={index} className="flex items-center">
                            <svg className="w-4 h-4 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <span className="text-text-muted">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-text-muted">Стоимость:</span>
                        <p className="text-2xl font-bold text-primary">
                          {services[selectedService as keyof typeof services].price}
                        </p>
                      </div>
                      <Button size="lg">
                        Заказать
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            </div>

            {/* Reasons for Towing */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-foreground mb-8">Причины вызова эвакуатора</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {reasons.map((reason, index) => (
                  <Card key={index} className="text-center" hover>
                    <div className="w-16 h-16 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-4">
                      {reason.icon}
                    </div>
                    <h3 className="font-bold text-foreground mb-2">{reason.title}</h3>
                    <p className="text-text-muted text-sm">{reason.description}</p>
                  </Card>
                ))}
              </div>
            </div>

            {/* Order Form */}
            <Card>
              <h3 className="text-2xl font-bold text-foreground mb-6">Вызвать эвакуатор</h3>
              <form className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Имя *
                    </label>
                    <input
                      type="text"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Телефон *
                    </label>
                    <input
                      type="tel"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Тип транспорта *
                    </label>
                    <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent">
                      <option>Легковой автомобиль</option>
                      <option>Кроссовер/внедорожник</option>
                      <option>Микроавтобус</option>
                      <option>Грузовик</option>
                      <option>Мотоцикл</option>
                      <option>Другое</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Марка и модель
                    </label>
                    <input
                      type="text"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="Toyota Camry"
                    />
                  </div>
                </div>

                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Откуда забрать *
                    </label>
                    <input
                      type="text"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="Москва, ул. Примерная, д. 1"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Куда доставить *
                    </label>
                    <input
                      type="text"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="Москва, ул. Другая, д. 2"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Причина эвакуации
                    </label>
                    <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent">
                      <option>ДТП</option>
                      <option>Поломка</option>
                      <option>Нарушение парковки</option>
                      <option>Другое</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Дополнительная информация
                    </label>
                    <textarea
                      rows={3}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="Опишите ситуацию, состояние автомобиля..."
                    ></textarea>
                  </div>
                </div>

                <div className="lg:col-span-2">
                  <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6">
                    <div className="flex">
                      <svg className="w-5 h-5 text-yellow-600 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                      </svg>
                      <div>
                        <h4 className="font-semibold text-yellow-800 mb-1">Важная информация</h4>
                        <p className="text-sm text-yellow-700">
                          Стоимость может изменяться в зависимости от расстояния, времени суток и сложности эвакуации. 
                          Окончательная цена согласовывается с диспетчером.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center mb-6">
                    <input
                      type="checkbox"
                      id="agreement"
                      className="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded"
                      required
                    />
                    <label htmlFor="agreement" className="ml-2 text-sm text-text-muted">
                      Я согласен с <Link href="/legal/terms-service" className="text-primary hover:underline">условиями оказания услуг</Link> и 
                      <Link href="/legal/data-processing" className="text-primary hover:underline ml-1">политикой обработки персональных данных</Link>
                    </label>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button type="submit" size="lg" className="flex-1">
                      Вызвать эвакуатор
                    </Button>
                    <Button type="button" variant="outline" size="lg">
                      Рассчитать стоимость
                    </Button>
                  </div>
                </div>
              </form>
            </Card>

            {/* Advantages */}
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="text-center">
                <div className="w-12 h-12 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="font-bold text-foreground mb-2">Быстрое прибытие</h3>
                <p className="text-text-muted">15-30 минут по Москве</p>
              </Card>

              <Card className="text-center">
                <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="font-bold text-foreground mb-2">Полное страхование</h3>
                <p className="text-text-muted">Ваш автомобиль застрахован</p>
              </Card>

              <Card className="text-center">
                <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <h3 className="font-bold text-foreground mb-2">Круглосуточно</h3>
                <p className="text-text-muted">Работаем 24/7 без выходных</p>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TowServicePage;
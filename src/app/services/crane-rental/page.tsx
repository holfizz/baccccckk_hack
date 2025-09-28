'use client';

import { useState } from 'react';
import Layout from '@/components/layout/Layout';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import Image from 'next/image';
import Link from 'next/link';

const CraneRentalPage = () => {
  const [selectedCrane, setSelectedCrane] = useState(0);

  const cranes = [
    {
      model: 'АГП-12',
      height: '12 м',
      capacity: '200 кг',
      price: '3 500 ₽/смена',
      image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      features: ['Компактные размеры', 'Маневренность', 'Экономичность'],
      specs: {
        'Рабочая высота': '12 м',
        'Грузоподъемность': '200 кг',
        'Вылет стрелы': '8 м',
        'Базовое шасси': 'ГАЗ-3307'
      }
    },
    {
      model: 'АГП-18',
      height: '18 м',
      capacity: '200 кг',
      price: '4 500 ₽/смена',
      image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      features: ['Универсальность', 'Надежность', 'Простота управления'],
      specs: {
        'Рабочая высота': '18 м',
        'Грузоподъемность': '200 кг',
        'Вылет стрелы': '10 м',
        'Базовое шасси': 'ЗИЛ-433362'
      }
    },
    {
      model: 'АГП-28',
      height: '28 м',
      capacity: '300 кг',
      price: '6 500 ₽/смена',
      image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      features: ['Большая высота', 'Повышенная грузоподъемность', 'Стабильность'],
      specs: {
        'Рабочая высота': '28 м',
        'Грузоподъемность': '300 кг',
        'Вылет стрелы': '15 м',
        'Базовое шасси': 'КамАЗ-43253'
      }
    },
    {
      model: 'АГП-45',
      height: '45 м',
      capacity: '300 кг',
      price: '9 500 ₽/смена',
      image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      features: ['Максимальная высота', 'Профессиональное оборудование', 'Высокая производительность'],
      specs: {
        'Рабочая высота': '45 м',
        'Грузоподъемность': '300 кг',
        'Вылет стрелы': '20 м',
        'Базовое шасси': 'МАЗ-6312'
      }
    }
  ];

  const services = [
    'Монтаж и демонтаж рекламных конструкций',
    'Обслуживание уличного освещения',
    'Ремонт фасадов зданий',
    'Установка и обслуживание светофоров',
    'Обрезка деревьев',
    'Мойка окон высотных зданий',
    'Монтаж систем видеонаблюдения',
    'Ремонт кровли'
  ];

  return (
    <>
      <div className="min-h-screen bg-secondary">
        {/* Hero Section */}
        <div className="relative h-96 bg-primary">
          <div className="absolute inset-0">
            <Image
              src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
              alt="Автовышка"
              fill
              className="object-cover opacity-20"
            />
          </div>
          <div className="relative z-10 flex items-center h-full">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-white">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">
                  Аренда автовышки
                </h1>
                <p className="text-xl text-primary-light max-w-2xl">
                  Надежные автовышки от 12 до 45 метров с опытными операторами
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Crane Selection */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-foreground mb-8">Выберите автовышку</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                {cranes.map((crane, index) => (
                  <Card 
                    key={index} 
                    className={`cursor-pointer transition-all ${
                      selectedCrane === index ? 'ring-2 ring-primary' : ''
                    }`}
                    onClick={() => setSelectedCrane(index)}
                  >
                    <div className="relative h-32 mb-4">
                      <Image
                        src={crane.image}
                        alt={crane.model}
                        fill
                        className="object-cover rounded"
                      />
                    </div>
                    <h3 className="font-bold text-foreground mb-2">{crane.model}</h3>
                    <p className="text-text-muted text-sm mb-2">Высота: {crane.height}</p>
                    <p className="text-primary font-semibold">{crane.price}</p>
                  </Card>
                ))}
              </div>

              {/* Selected Crane Details */}
              <Card>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div>
                    <div className="relative h-64 mb-6">
                      <Image
                        src={cranes[selectedCrane].image}
                        alt={cranes[selectedCrane].model}
                        fill
                        className="object-cover rounded"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-2xl font-bold text-foreground mb-4">
                      {cranes[selectedCrane].model}
                    </h3>
                    
                    <div className="mb-6">
                      <h4 className="font-semibold text-foreground mb-3">Технические характеристики:</h4>
                      <div className="grid grid-cols-2 gap-4">
                        {Object.entries(cranes[selectedCrane].specs).map(([key, value]) => (
                          <div key={key}>
                            <span className="text-sm text-text-muted">{key}:</span>
                            <p className="font-semibold">{value}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="mb-6">
                      <h4 className="font-semibold text-foreground mb-3">Особенности:</h4>
                      <ul className="space-y-2">
                        {cranes[selectedCrane].features.map((feature, index) => (
                          <li key={index} className="flex items-center">
                            <svg className="w-4 h-4 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <span className="text-text-muted">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex items-center justify-between mb-6">
                      <div>
                        <span className="text-text-muted">Стоимость аренды:</span>
                        <p className="text-2xl font-bold text-primary">{cranes[selectedCrane].price}</p>
                      </div>
                      <Button size="lg">
                        Заказать
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            </div>

            {/* Services */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
              <Card>
                <h3 className="text-xl font-bold text-foreground mb-6">Виды работ</h3>
                <div className="grid grid-cols-1 gap-3">
                  {services.map((service, index) => (
                    <div key={index} className="flex items-center">
                      <svg className="w-5 h-5 text-primary mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-text-muted">{service}</span>
                    </div>
                  ))}
                </div>
              </Card>

              <Card>
                <h3 className="text-xl font-bold text-foreground mb-6">Условия аренды</h3>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-text-muted">Минимальный срок аренды:</span>
                    <span className="font-semibold">4 часа</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-text-muted">Доставка по Москве:</span>
                    <span className="font-semibold">Бесплатно</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-text-muted">Доставка за МКАД:</span>
                    <span className="font-semibold">50 ₽/км</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-text-muted">Оператор:</span>
                    <span className="font-semibold">Включен</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-text-muted">Топливо:</span>
                    <span className="font-semibold">Включено</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-text-muted">Страхование:</span>
                    <span className="font-semibold">Включено</span>
                  </div>
                </div>
              </Card>
            </div>

            {/* Order Form */}
            <Card>
              <h3 className="text-2xl font-bold text-foreground mb-6">Заказать автовышку</h3>
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
                      Email
                    </label>
                    <input
                      type="email"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Модель автовышки
                    </label>
                    <select 
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      value={cranes[selectedCrane].model}
                      onChange={(e) => {
                        const index = cranes.findIndex(crane => crane.model === e.target.value);
                        setSelectedCrane(index);
                      }}
                    >
                      {cranes.map((crane, index) => (
                        <option key={index} value={crane.model}>
                          {crane.model} - {crane.height}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Дата начала работ *
                    </label>
                    <input
                      type="date"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Продолжительность (часов) *
                    </label>
                    <input
                      type="number"
                      min="4"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Адрес объекта *
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
                      Описание работ
                    </label>
                    <textarea
                      rows={3}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="Опишите характер работ..."
                    ></textarea>
                  </div>
                </div>

                <div className="lg:col-span-2">
                  <div className="flex items-center mb-6">
                    <input
                      type="checkbox"
                      id="agreement"
                      className="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded"
                      required
                    />
                    <label htmlFor="agreement" className="ml-2 text-sm text-text-muted">
                      Я согласен с <Link href="/legal/aerial-lift-rental" className="text-primary hover:underline">условиями аренды</Link> и 
                      <Link href="/legal/data-processing" className="text-primary hover:underline ml-1">политикой обработки персональных данных</Link>
                    </label>
                  </div>

                  <Button type="submit" size="lg" className="w-full md:w-auto">
                    Отправить заявку
                  </Button>
                </div>
              </form>
            </Card>

            {/* Contact Info */}
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="text-center">
                <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <h3 className="font-bold text-foreground mb-2">Телефон</h3>
                <p className="text-text-muted">+7 (495) 123-45-67</p>
                <p className="text-sm text-text-muted">Круглосуточно</p>
              </Card>

              <Card className="text-center">
                <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="font-bold text-foreground mb-2">Время подачи</h3>
                <p className="text-text-muted">30-60 минут</p>
                <p className="text-sm text-text-muted">По Москве</p>
              </Card>

              <Card className="text-center">
                <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="font-bold text-foreground mb-2">Гарантия</h3>
                <p className="text-text-muted">Полное страхование</p>
                <p className="text-sm text-text-muted">Безопасность работ</p>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CraneRentalPage;
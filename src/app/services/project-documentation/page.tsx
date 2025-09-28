'use client';

import { useState } from 'react';
import Layout from '@/components/layout/Layout';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import Image from 'next/image';
import Link from 'next/link';

const ProjectDocumentationPage = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const stages = [
    {
      title: 'Техническое задание',
      description: 'Анализ требований и составление технического задания',
      duration: '3-5 дней',
      deliverables: ['Техническое задание', 'План работ', 'Смета предварительная']
    },
    {
      title: 'Инженерные изыскания',
      description: 'Проведение необходимых изысканий на объекте',
      duration: '10-15 дней',
      deliverables: ['Топографическая съемка', 'Геологические изыскания', 'Экологические исследования']
    },
    {
      title: 'Проектирование',
      description: 'Разработка проектной документации',
      duration: '15-30 дней',
      deliverables: ['Чертежи', 'Расчеты', 'Спецификации', 'Пояснительная записка']
    },
    {
      title: 'Экспертиза',
      description: 'Прохождение государственной экспертизы',
      duration: '20-45 дней',
      deliverables: ['Положительное заключение экспертизы', 'Доработанная документация']
    }
  ];

  const projects = [
    {
      title: 'Реконструкция участка М-1 "Беларусь"',
      description: 'Проектирование реконструкции 15 км автомагистрали',
      image: 'https://images.unsplash.com/photo-1486754735734-325b5831c3ad?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      year: '2023',
      length: '15 км',
      budget: '2.5 млрд ₽'
    },
    {
      title: 'Строительство развязки в г. Москва',
      description: 'Проект многоуровневой транспортной развязки',
      image: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      year: '2023',
      length: '2.5 км',
      budget: '1.8 млрд ₽'
    }
  ];

  return (
    <>
      <div className="min-h-screen bg-secondary">
        {/* Hero Section */}
        <div className="relative h-96 bg-primary">
          <div className="absolute inset-0">
            <Image
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
              alt="Проектирование дорог"
              fill
              className="object-cover opacity-20"
            />
          </div>
          <div className="relative z-10 flex items-center h-full">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-white">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">
                  Разработка проектно-сметной документации
                </h1>
                <p className="text-xl text-primary-light max-w-2xl">
                  Полный цикл проектирования дорожной инфраструктуры от изысканий до авторского надзора
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="bg-white border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav className="flex space-x-8">
              {[
                { id: 'overview', label: 'Обзор' },
                { id: 'stages', label: 'Этапы работ' },
                { id: 'portfolio', label: 'Портфолио' },
                { id: 'order', label: 'Заказать' }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`py-4 px-1 border-b-2 font-medium text-sm ${
                    activeTab === tab.id
                      ? 'border-primary text-primary'
                      : 'border-transparent text-text-muted hover:text-foreground hover:border-gray-300'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </nav>
          </div>
        </div>

        <div className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Overview Tab */}
            {activeTab === 'overview' && (
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2">
                  <Card>
                    <h2 className="text-2xl font-bold text-foreground mb-6">
                      О услуге
                    </h2>
                    <div className="prose max-w-none">
                      <p className="text-text-muted mb-4">
                        Наша компания предоставляет полный спектр услуг по разработке проектно-сметной 
                        документации для объектов дорожного строительства. Мы работаем с проектами 
                        любой сложности - от локальных участков до крупных магистралей.
                      </p>
                      
                      <h3 className="text-lg font-semibold text-foreground mb-3">Что входит в услугу:</h3>
                      <ul className="space-y-2 mb-6">
                        <li className="flex items-start">
                          <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-text-muted">Инженерные изыскания (топографические, геологические, экологические)</span>
                        </li>
                        <li className="flex items-start">
                          <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-text-muted">Разработка проектной документации в соответствии с ГОСТ и СНиП</span>
                        </li>
                        <li className="flex items-start">
                          <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-text-muted">Составление сметной документации</span>
                        </li>
                        <li className="flex items-start">
                          <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-text-muted">Прохождение государственной экспертизы</span>
                        </li>
                        <li className="flex items-start">
                          <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-text-muted">Авторский надзор за строительством</span>
                        </li>
                      </ul>

                      <h3 className="text-lg font-semibold text-foreground mb-3">Преимущества работы с нами:</h3>
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <svg className="w-5 h-5 text-primary mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          <span className="text-text-muted">Опыт работы более 15 лет</span>
                        </li>
                        <li className="flex items-start">
                          <svg className="w-5 h-5 text-primary mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          <span className="text-text-muted">Команда сертифицированных специалистов</span>
                        </li>
                        <li className="flex items-start">
                          <svg className="w-5 h-5 text-primary mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          <span className="text-text-muted">Современное программное обеспечение</span>
                        </li>
                        <li className="flex items-start">
                          <svg className="w-5 h-5 text-primary mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          <span className="text-text-muted">Гарантия качества и соблюдение сроков</span>
                        </li>
                      </ul>
                    </div>
                  </Card>
                </div>

                <div>
                  <Card>
                    <h3 className="text-xl font-bold text-foreground mb-4">Стоимость и сроки</h3>
                    <div className="space-y-4">
                      <div className="flex justify-between">
                        <span className="text-text-muted">Стоимость:</span>
                        <span className="font-semibold text-primary">от 150 000 ₽</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-text-muted">Срок выполнения:</span>
                        <span className="font-semibold">30-90 дней</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-text-muted">Гарантия:</span>
                        <span className="font-semibold">3 года</span>
                      </div>
                    </div>
                    
                    <div className="mt-6 space-y-3">
                      <Button fullWidth>
                        Заказать услугу
                      </Button>
                      <Button variant="outline" fullWidth>
                        Получить консультацию
                      </Button>
                    </div>
                  </Card>

                  <Card className="mt-6">
                    <h3 className="text-xl font-bold text-foreground mb-4">Контакты</h3>
                    <div className="space-y-3">
                      <div className="flex items-center">
                        <svg className="w-5 h-5 text-primary mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                        <span className="text-text-muted">+7 (495) 123-45-67</span>
                      </div>
                      <div className="flex items-center">
                        <svg className="w-5 h-5 text-primary mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        <span className="text-text-muted">project@company.ru</span>
                      </div>
                    </div>
                  </Card>
                </div>
              </div>
            )}

            {/* Stages Tab */}
            {activeTab === 'stages' && (
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-8">Этапы выполнения работ</h2>
                <div className="space-y-6">
                  {stages.map((stage, index) => (
                    <Card key={index}>
                      <div className="flex items-start">
                        <div className="flex-shrink-0 w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-lg mr-6">
                          {index + 1}
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-bold text-foreground mb-2">{stage.title}</h3>
                          <p className="text-text-muted mb-4">{stage.description}</p>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                              <span className="text-sm font-semibold text-foreground">Длительность: </span>
                              <span className="text-sm text-text-muted">{stage.duration}</span>
                            </div>
                            <div>
                              <span className="text-sm font-semibold text-foreground">Результат:</span>
                              <ul className="text-sm text-text-muted mt-1">
                                {stage.deliverables.map((item, idx) => (
                                  <li key={idx}>• {item}</li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>
            )}

            {/* Portfolio Tab */}
            {activeTab === 'portfolio' && (
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-8">Наши проекты</h2>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {projects.map((project, index) => (
                    <Card key={index} className="overflow-hidden">
                      <div className="relative h-48">
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="p-6">
                        <h3 className="text-xl font-bold text-foreground mb-2">{project.title}</h3>
                        <p className="text-text-muted mb-4">{project.description}</p>
                        <div className="grid grid-cols-3 gap-4 text-sm">
                          <div>
                            <span className="font-semibold text-foreground">Год:</span>
                            <p className="text-text-muted">{project.year}</p>
                          </div>
                          <div>
                            <span className="font-semibold text-foreground">Протяженность:</span>
                            <p className="text-text-muted">{project.length}</p>
                          </div>
                          <div>
                            <span className="font-semibold text-foreground">Бюджет:</span>
                            <p className="text-text-muted">{project.budget}</p>
                          </div>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>
            )}

            {/* Order Tab */}
            {activeTab === 'order' && (
              <div className="max-w-2xl mx-auto">
                <Card>
                  <h2 className="text-2xl font-bold text-foreground mb-6">Заказать услугу</h2>
                  <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Тип проекта
                      </label>
                      <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent">
                        <option>Автомобильная дорога</option>
                        <option>Городская улица</option>
                        <option>Транспортная развязка</option>
                        <option>Мостовое сооружение</option>
                        <option>Другое</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Описание проекта *
                      </label>
                      <textarea
                        rows={4}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                        placeholder="Опишите ваш проект, его масштаб, особенности и требования..."
                        required
                      ></textarea>
                    </div>

                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        id="agreement"
                        className="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded"
                        required
                      />
                      <label htmlFor="agreement" className="ml-2 text-sm text-text-muted">
                        Я согласен с <Link href="/legal/data-processing" className="text-primary hover:underline">политикой обработки персональных данных</Link>
                      </label>
                    </div>

                    <Button type="submit" fullWidth size="lg">
                      Отправить заявку
                    </Button>
                  </form>
                </Card>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectDocumentationPage;
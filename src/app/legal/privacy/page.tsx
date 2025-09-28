import Layout from "@/components/layout/Layout"

const Privacy = () => {
  return (
    <Layout>
      <div className="min-h-screen bg-background pt-20">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-br from-primary/10 to-secondary">
          <div className="absolute inset-0 bg-black/5"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Политика конфиденциальности
            </h1>
            <p className="text-xl text-text-muted max-w-3xl mx-auto">
              Последнее обновление: {new Date().toLocaleDateString('ru-RU')}
            </p>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="prose prose-lg max-w-none">
              
              <div className="card mb-8">
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">1. Общие положения</h2>
                <p className="text-foreground leading-relaxed mb-4">
                  Настоящая Политика конфиденциальности регулирует порядок обработки и использования 
                  персональных данных пользователей сайта Центра организации дорожного движения Смоленской области.
                </p>
              </div>

              <div className="card mb-8">
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">2. Собираемая информация</h2>
                <ul className="list-disc list-inside space-y-2 text-foreground ml-4">
                  <li>Контактная информация (имя, email, телефон)</li>
                  <li>Технические данные (IP-адрес, браузер, устройство)</li>
                  <li>Данные об использовании дорожных сервисов</li>
                  <li>Статистика использования дашборда</li>
                </ul>
              </div>

              <div className="card mb-8">
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">3. Использование информации</h2>
                <p className="text-foreground leading-relaxed mb-4">
                  Собранная информация используется для:
                </p>
                <ul className="list-disc list-inside space-y-2 text-foreground ml-4">
                  <li>Предоставления услуг управления дорожным движением</li>
                  <li>Улучшения работы цифровой платформы</li>
                  <li>Анализа дорожной ситуации в Смоленской области</li>
                  <li>Обеспечения безопасности дорожного движения</li>
                </ul>
              </div>

              <div className="card mb-8">
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">4. Защита данных</h2>
                <p className="text-foreground leading-relaxed">
                  Мы применяем современные меры безопасности для защиты ваших данных 
                  от несанкционированного доступа и использования.
                </p>
              </div>

              <div className="card">
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">5. Контакты</h2>
                <p className="text-foreground leading-relaxed">
                  По вопросам конфиденциальности обращайтесь по email: 
                  <span className="text-primary font-medium"> privacy@smolensk-dorogi.ru</span>
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Privacy;
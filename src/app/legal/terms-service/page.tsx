import Layout from "@/components/layout/Layout"

const TermsService = () => {
  return (
    <Layout>
      <div className="min-h-screen bg-background pt-20">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-br from-primary/10 to-secondary">
          <div className="absolute inset-0 bg-black/5"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Условия оказания услуг
            </h1>
            <p className="text-xl text-text-muted max-w-3xl mx-auto">
              Действительно с: {new Date().toLocaleDateString('ru-RU')}
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
                  Настоящие Условия регулируют порядок оказания услуг ГКУ Смоленской области 
                  «Центр организации дорожного движения» в сфере управления дорожным движением.
                </p>
              </div>

              <div className="card mb-8">
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">2. Перечень услуг</h2>
                <ul className="list-disc list-inside space-y-2 text-foreground ml-4">
                  <li>Организация и регулирование дорожного движения</li>
                  <li>Мониторинг дорожной ситуации в реальном времени</li>
                  <li>Разработка схем организации дорожного движения</li>
                  <li>Консультации по вопросам дорожного движения</li>
                  <li>Обработка заявок на изменение дорожной инфраструктуры</li>
                  <li>Анализ данных о дорожном движении</li>
                </ul>
              </div>

              <div className="card mb-8">
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">3. Порядок оказания услуг</h2>
                <p className="text-foreground leading-relaxed mb-4">
                  Услуги оказываются в следующем порядке:
                </p>
                <ol className="list-decimal list-inside space-y-2 text-foreground ml-4">
                  <li>Подача заявки через официальные каналы связи</li>
                  <li>Рассмотрение заявки в течение 10 рабочих дней</li>
                  <li>Согласование условий оказания услуги</li>
                  <li>Выполнение работ в установленные сроки</li>
                  <li>Предоставление отчетности о выполненных работах</li>
                </ol>
              </div>

              <div className="card mb-8">
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">4. Сроки оказания услуг</h2>
                <p className="text-foreground leading-relaxed">
                  Сроки оказания услуг определяются в зависимости от сложности работ 
                  и составляют от 5 до 30 рабочих дней с момента принятия заявки.
                </p>
              </div>

              <div className="card">
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">5. Ответственность сторон</h2>
                <p className="text-foreground leading-relaxed">
                  Центр организации дорожного движения несет ответственность за качество оказываемых услуг 
                  в соответствии с действующим законодательством Российской Федерации.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default TermsService;
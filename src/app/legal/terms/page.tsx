import Layout from "@/components/layout/Layout";

const Terms = () => {
  return (
    <Layout>
      <div className="min-h-screen bg-background pt-20">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-br from-primary/10 to-secondary">
          <div className="absolute inset-0 bg-black/5"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Условия использования
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
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">1. Принятие условий</h2>
                <p className="text-foreground leading-relaxed">
                  Используя наш сайт и сервисы Центра организации дорожного движения Смоленской области, 
                  вы соглашаетесь с настоящими Условиями использования.
                </p>
              </div>

              <div className="card mb-8">
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">2. Права и обязанности</h2>
                
                <div className="mb-4">
                  <h3 className="text-xl font-semibold text-foreground mb-2">Пользователь обязуется:</h3>
                  <ul className="list-disc list-inside space-y-2 text-foreground ml-4">
                    <li>Не нарушать действующее законодательство РФ</li>
                    <li>Не распространять вредоносный контент</li>
                    <li>Соблюдать авторские права и интеллектуальную собственность</li>
                    <li>Использовать данные дорожной информации только в законных целях</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Мы обязуемся:</h3>
                  <ul className="list-disc list-inside space-y-2 text-foreground ml-4">
                    <li>Обеспечивать доступность сервисов 24/7</li>
                    <li>Предоставлять актуальную дорожную информацию</li>
                    <li>Защищать данные пользователей</li>
                    <li>Своевременно обновлять функционал платформы</li>
                  </ul>
                </div>
              </div>

              <div className="card mb-8">
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">3. Интеллектуальная собственность</h2>
                <p className="text-foreground leading-relaxed">
                  Все материалы, включая данные о дорожном движении, аналитику и программное обеспечение, 
                  являются интеллектуальной собственностью Центра организации дорожного движения Смоленской области.
                </p>
              </div>

              <div className="card mb-8">
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">4. Ограничение ответственности</h2>
                <p className="text-foreground leading-relaxed">
                  Мы не несем ответственности за убытки, возникшие в результате использования информации 
                  с нашей платформы для принятия решений о дорожном движении.
                </p>
              </div>

              <div className="card">
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">5. Изменения условий</h2>
                <p className="text-foreground leading-relaxed">
                  Мы оставляем право изменять условия в любое время. Изменения вступают в силу после публикации 
                  на этой странице.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Terms;
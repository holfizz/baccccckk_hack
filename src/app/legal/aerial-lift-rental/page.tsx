import Layout from "@/components/layout/Layout"

const AerialLiftRental = () => {
  return (
    <Layout>
      <div className="min-h-screen bg-background pt-20">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-br from-primary/10 to-secondary">
          <div className="absolute inset-0 bg-black/5"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Условия аренды автовышки
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
                  Настоящие Условия регулируют порядок аренды автовышек (автогидроподъемников) 
                  для выполнения работ по организации и обслуживанию дорожного движения 
                  на территории Смоленской области.
                </p>
              </div>

              <div className="card mb-8">
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">2. Технические характеристики</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold text-foreground mb-3">Доступные модели:</h3>
                    <ul className="list-disc list-inside space-y-2 text-foreground ml-4">
                      <li>Автовышка АГП-18 (высота 18 метров)</li>
                      <li>Автовышка АГП-22 (высота 22 метра)</li>
                      <li>Автовышка АГП-28 (высота 28 метров)</li>
                      <li>Автовышка АГП-32 (высота 32 метра)</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-3">Основные параметры:</h3>
                    <ul className="list-disc list-inside space-y-2 text-foreground ml-4">
                      <li>Грузоподъемность люльки: 200-300 кг</li>
                      <li>Рабочая температура: от -25°C до +40°C</li>
                      <li>Тип привода: гидравлический</li>
                      <li>Управление: дистанционное + из люльки</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="card mb-8">
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">3. Условия аренды</h2>
                <ul className="list-disc list-inside space-y-2 text-foreground ml-4">
                  <li>Минимальный срок аренды - 4 часа</li>
                  <li>Арендатор должен иметь квалифицированный персонал</li>
                  <li>Обязательное страхование гражданской ответственности</li>
                  <li>Соблюдение правил техники безопасности</li>
                  <li>Оплата производится авансовым платежом 50%</li>
                </ul>
              </div>

              <div className="card mb-8">
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">4. Стоимость аренды</h2>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm text-foreground">
                    <thead>
                      <tr className="border-b border-accent">
                        <th className="py-3 px-4 text-left">Модель</th>
                        <th className="py-3 px-4 text-right">За 1 час</th>
                        <th className="py-3 px-4 text-right">За смену (8ч)</th>
                        <th className="py-3 px-4 text-right">За неделю</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-accent">
                        <td className="py-3 px-4">АГП-18</td>
                        <td className="py-3 px-4 text-right">1 500 ₽</td>
                        <td className="py-3 px-4 text-right">10 000 ₽</td>
                        <td className="py-3 px-4 text-right">60 000 ₽</td>
                      </tr>
                      <tr className="border-b border-accent">
                        <td className="py-3 px-4">АГП-22</td>
                        <td className="py-3 px-4 text-right">1 800 ₽</td>
                        <td className="py-3 px-4 text-right">12 000 ₽</td>
                        <td className="py-3 px-4 text-right">70 000 ₽</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4">АГП-28</td>
                        <td className="py-3 px-4 text-right">2 200 ₽</td>
                        <td className="py-3 px-4 text-right">15 000 ₽</td>
                        <td className="py-3 px-4 text-right">85 000 ₽</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="card">
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">5. Контакты для аренды</h2>
                <p className="text-foreground leading-relaxed">
                  Для оформления аренды автовышки обращайтесь: 
                  <span className="text-primary font-medium"> avtovyshka@smolensk-dorogi.ru</span>
                </p>
                <p className="text-foreground mt-2">Телефон: <span className="font-medium">+7 (4812) 34-56-79</span></p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default AerialLiftRental;
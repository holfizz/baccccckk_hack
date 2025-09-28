import Layout from "@/components/layout/Layout"

const DataProcessing = () => {
  return (
    <Layout>
      <div className="min-h-screen bg-background pt-20">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-br from-primary/10 to-secondary">
          <div className="absolute inset-0 bg-black/5"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Политика обработки персональных данных
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
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">1. Принципы обработки данных</h2>
                <ul className="list-disc list-inside space-y-2 text-foreground ml-4">
                  <li><strong>Законность и справедливость</strong> - обработка осуществляется на законной и справедливой основе</li>
                  <li><strong>Ограничение целей</strong> - обработка ограничивается достижением конкретных целей</li>
                  <li><strong>Достоверность и актуальность</strong> - обеспечивается точность и актуальность данных</li>
                  <li><strong>Конфиденциальность</strong> - обеспечивается защита от несанкционированного доступа</li>
                </ul>
              </div>

              <div className="card mb-8">
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">2. Права субъектов персональных данных</h2>
                <p className="text-foreground mb-4">Субъекты персональных данных имеют право:</p>
                <ul className="list-disc list-inside space-y-2 text-foreground ml-4">
                  <li>На получение информации об обработке своих персональных данных</li>
                  <li>На доступ к своим персональным данным и их уточнение</li>
                  <li>На уничтожение персональных данных при достижении целей обработки</li>
                  <li>На отзыв согласия на обработку персональных данных</li>
                  <li>На обжалование действий или бездействия оператора</li>
                </ul>
              </div>

              <div className="card mb-8">
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">3. Меры защиты данных</h2>
                <p className="text-foreground mb-4">
                  Для защиты персональных данных применяются следующие меры:
                </p>
                <ul className="list-disc list-inside space-y-2 text-foreground ml-4">
                  <li>Ограничение доступа к персональным данным</li>
                  <li>Использование шифрования при передаче данных</li>
                  <li>Регулярное резервное копирование</li>
                  <li>Антивирусная защита</li>
                  <li>Обучение сотрудников правилам работы с персональными данными</li>
                </ul>
              </div>

              <div className="card mb-8">
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">4. Ответственный за обработку данных</h2>
                <p className="text-foreground">
                  Ответственным за организацию обработки персональных данных является 
                  директор ГКУ Смоленской области «Центр организации дорожного движения».
                </p>
              </div>

              <div className="card">
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">5. Контактная информация</h2>
                <p className="text-foreground leading-relaxed">
                  По вопросам обработки персональных данных обращайтесь: 
                  <span className="text-primary font-medium"> dpo@smolensk-dorogi.ru</span>
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default DataProcessing;
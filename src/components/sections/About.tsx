import Image from 'next/image';
import Card from '@/components/ui/Card';

const About = () => {
  const features = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      title: 'Аналитика данных',
      description: 'Глубокий анализ дорожного трафика и выявление проблемных участков'
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      ),
      title: 'Безопасность',
      description: 'Повышение безопасности дорожного движения через современные технологии'
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: 'Быстрое реагирование',
      description: 'Оперативное реагирование на дорожные происшествия и заторы'
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9" />
        </svg>
      ),
      title: 'Интеграция систем',
      description: 'Единая платформа для всех участников дорожного движения'
    }
  ];

  return (
    <section id="about" className="py-20 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            О ЦОДД Смоленской области
          </h2>
          <p className="text-xl text-text-muted max-w-3xl mx-auto leading-relaxed">
            Мы создаем современную экосистему управления дорожным движением, 
            объединяющую передовые технологии и профессиональный опыт
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
              Наша миссия
            </h3>
            <p className="text-lg text-text-muted mb-6 leading-relaxed">
              Обеспечение безопасного, эффективного и комфортного дорожного движения 
              в Смоленской области через внедрение инновационных технологий и 
              комплексный подход к управлению транспортной инфраструктурой.
            </p>
            <p className="text-lg text-text-muted leading-relaxed">
              Мы стремимся создать интеллектуальную транспортную систему, которая 
              адаптируется к потребностям участников дорожного движения и способствует 
              устойчивому развитию региона.
            </p>
          </div>
          <div className="relative">
            <Image
              src="https://moscowchanges.ru/wp-content/uploads/2022/06/codd.jpg"
              alt="Современные технологии в дорожном движении"
              width={600}
              height={400}
              className="rounded-2xl shadow-lg"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card key={index} hover className="text-center">
              <div className="text-primary mb-4 flex justify-center">
                {feature.icon}
              </div>
              <h4 className="text-xl font-semibold text-foreground mb-3">
                {feature.title}
              </h4>
              <p className="text-text-muted leading-relaxed">
                {feature.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
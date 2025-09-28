import Image from 'next/image';
import Card from '@/components/ui/Card';

const Projects = () => {
  const projects = [
    {
      title: 'Умная система светофоров',
      description: 'Внедрение адаптивной системы управления светофорами на основе ИИ',
      image: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      status: 'Завершен',
      year: '2024'
    },
    {
      title: 'Мониторинг дорожного покрытия',
      description: 'Система автоматического контроля состояния дорог с использованием дронов',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      status: 'В процессе',
      year: '2024'
    },
    {
      title: 'Цифровая карта региона',
      description: 'Интерактивная карта с данными о дорожной инфраструктуре',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      status: 'Планируется',
      year: '2025'
    }
  ];

  return (
    <section id="projects" className="py-20 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Наши проекты
          </h2>
          <p className="text-xl text-text-muted max-w-3xl mx-auto">
            Инновационные решения для современной дорожной инфраструктуры
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} hover>
              <div className="relative h-48 mb-4">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover rounded-xl"
                />
                <div className="absolute top-4 right-4">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                    project.status === 'Завершен' ? 'bg-green-100 text-green-800' :
                    project.status === 'В процессе' ? 'bg-yellow-100 text-yellow-800' :
                    'bg-blue-100 text-blue-800'
                  }`}>
                    {project.status}
                  </span>
                </div>
              </div>
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-bold text-foreground">{project.title}</h3>
                <span className="text-sm text-text-muted">{project.year}</span>
              </div>
              <p className="text-text-muted">{project.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
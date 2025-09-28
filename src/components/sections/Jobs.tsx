import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';

const Jobs = () => {
  const jobs = [
    {
      title: 'Инженер по организации дорожного движения',
      department: 'Технический отдел',
      type: 'Полная занятость',
      location: 'Смоленск',
      requirements: ['Высшее техническое образование', 'Опыт работы от 3 лет', 'Знание ПДД и ГОСТ']
    },
    {
      title: 'Специалист по анализу данных',
      department: 'IT-отдел',
      type: 'Полная занятость',
      location: 'Смоленск',
      requirements: ['Опыт работы с Python/R', 'Знание SQL', 'Аналитическое мышление']
    },
    {
      title: 'Диспетчер ЦОДД',
      department: 'Оперативный отдел',
      type: 'Сменный график',
      location: 'Смоленск',
      requirements: ['Среднее специальное образование', 'Стрессоустойчивость', 'Внимательность']
    }
  ];

  return (
    <section id="jobs" className="py-20 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Вакансии
          </h2>
          <p className="text-xl text-text-muted max-w-3xl mx-auto">
            Присоединяйтесь к команде профессионалов ЦОДД Смоленской области
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
          {jobs.map((job, index) => (
            <Card key={index} hover>
              <div className="mb-4">
                <h3 className="text-xl font-bold text-foreground mb-2">{job.title}</h3>
                <div className="flex flex-wrap gap-2 text-sm text-text-muted">
                  <span className="bg-primary/10 text-primary px-2 py-1 rounded">{job.department}</span>
                  <span className="bg-secondary text-foreground px-2 py-1 rounded">{job.type}</span>
                  <span className="bg-accent text-foreground px-2 py-1 rounded">{job.location}</span>
                </div>
              </div>
              
              <div className="mb-6">
                <h4 className="font-semibold text-foreground mb-2">Требования:</h4>
                <ul className="space-y-1">
                  {job.requirements.map((req, reqIndex) => (
                    <li key={reqIndex} className="flex items-start text-text-muted text-sm">
                      <svg className="w-4 h-4 text-primary mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {req}
                    </li>
                  ))}
                </ul>
              </div>

              <Button variant="outline" fullWidth>
                Откликнуться
              </Button>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-text-muted mb-6">
            Не нашли подходящую вакансию? Отправьте нам свое резюме!
          </p>
          <Button size="lg">
            Отправить резюме
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Jobs;
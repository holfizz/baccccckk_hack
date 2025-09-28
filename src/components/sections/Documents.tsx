import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';

const Documents = () => {
  const documents = [
    {
      title: 'Регламент работы ЦОДД',
      description: 'Основные принципы и процедуры работы центра',
      type: 'PDF',
      size: '2.5 МБ'
    },
    {
      title: 'Технические требования',
      description: 'Стандарты и требования к дорожному оборудованию',
      type: 'PDF',
      size: '1.8 МБ'
    },
    {
      title: 'Отчет о деятельности 2024',
      description: 'Годовой отчет о работе и достижениях',
      type: 'PDF',
      size: '4.2 МБ'
    },
    {
      title: 'Методические рекомендации',
      description: 'Руководство по организации дорожного движения',
      type: 'PDF',
      size: '3.1 МБ'
    }
  ];

  return (
    <section id="documents" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Документы
          </h2>
          <p className="text-xl text-text-muted max-w-3xl mx-auto">
            Нормативные документы и отчеты о деятельности ЦОДД
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {documents.map((doc, index) => (
            <Card key={index} hover>
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center mb-2">
                    <svg className="w-6 h-6 text-red-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
                    </svg>
                    <span className="text-sm text-text-muted">{doc.type} • {doc.size}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{doc.title}</h3>
                  <p className="text-text-muted mb-4">{doc.description}</p>
                </div>
                <Button variant="outline" size="sm">
                  Скачать
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Documents;
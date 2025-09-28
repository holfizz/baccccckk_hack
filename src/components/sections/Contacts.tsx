import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';

const Contacts = () => {
  const contacts = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      title: 'Адрес',
      info: 'г. Смоленск, ул. Дзержинского, д. 15'
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
      title: 'Телефон',
      info: '+7 (4812) 123-456'
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: 'Email',
      info: 'info@codd-smolensk.ru'
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: 'Режим работы',
      info: 'Пн-Пт: 8:00-17:00, Сб-Вс: выходной'
    }
  ];

  return (
    <section id="contacts" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Контакты
          </h2>
          <p className="text-xl text-text-muted max-w-3xl mx-auto">
            Свяжитесь с нами для получения консультации или сотрудничества
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-8">Контактная информация</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {contacts.map((contact, index) => (
                <Card key={index} className="flex items-start space-x-4">
                  <div className="text-primary flex-shrink-0">
                    {contact.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">{contact.title}</h4>
                    <p className="text-text-muted">{contact.info}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-8">Отправить сообщение</h3>
            <Card>
              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Имя
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-2 border border-accent rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="Ваше имя"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      className="w-full px-4 py-2 border border-accent rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Тема
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border border-accent rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="Тема сообщения"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Сообщение
                  </label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-2 border border-accent rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
                    placeholder="Ваше сообщение..."
                  ></textarea>
                </div>
                
                <Button fullWidth size="lg">
                  Отправить сообщение
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
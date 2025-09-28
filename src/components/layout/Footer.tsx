import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-secondary border-t border-accent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-bold text-foreground">ЦОДД Смоленской области</h3>
                <p className="text-sm text-text-muted">Центр организации дорожного движения</p>
              </div>
            </div>
            <p className="text-text-muted mb-4 max-w-md">
              Современная цифровая платформа для управления дорожным движением, 
              анализа данных и повышения безопасности на дорогах Смоленской области.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-foreground font-semibold mb-4">Быстрые ссылки</h4>
            <ul className="space-y-2"> 
              <li><Link href="/#about" className="text-text-muted hover:text-primary transition-colors">О ЦОДД</Link></li>
              <li><Link href="/#projects" className="text-text-muted hover:text-primary transition-colors">Проекты</Link></li>
              <li><Link href="/#news" className="text-text-muted hover:text-primary transition-colors">Новости</Link></li>
              <li><Link href="/#documents" className="text-text-muted hover:text-primary transition-colors">Документы</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-foreground font-semibold mb-4">Услуги</h4>
            <ul className="space-y-2">
              <li><Link href="/services/project-documentation" className="text-text-muted hover:text-primary transition-colors">Проектная документация</Link></li>
              <li><Link href="/services/crane-rental" className="text-text-muted hover:text-primary transition-colors">Аренда автовышки</Link></li>
              <li><Link href="/services/tow-service" className="text-text-muted hover:text-primary transition-colors">Вызов эвакуатора</Link></li>
              <li><Link href="/dashboard" className="text-text-muted hover:text-primary transition-colors">Дашборд</Link></li>
              <li><Link href="/legal" className="text-text-muted hover:text-primary transition-colors">Юридическая информация</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-accent mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-text-muted text-sm">
            © 2024 ЦОДД Смоленской области. Все права защищены.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/legal/privacy" className="text-text-muted hover:text-primary text-sm transition-colors">
              Политика конфиденциальности
            </Link>
            <Link href="/legal/terms" className="text-text-muted hover:text-primary text-sm transition-colors">
              Условия использования
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
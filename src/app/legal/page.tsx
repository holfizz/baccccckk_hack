import Layout from "@/components/layout/Layout";
import Head from "next/head";
import Link from "next/link";

export default function LegalPage() {
  const documents = [
    {
      title: "Политика конфиденциальности",
      description:
        "Как мы собираем, используем и защищаем ваши персональные данные",
      href: "/legal/privacy",
      lastUpdated: "15.12.2024",
    },
    {
      title: "Условия использования",
      description: "Правила использования нашего сайта и сервисов",
      href: "/legal/terms",
      lastUpdated: "15.12.2024",
    },
    {
      title: "Условия оказания услуг",
      description:
        "Порядок оказания услуг в сфере организации дорожного движения",
      href: "/legal/terms-service",
      lastUpdated: "15.12.2024",
    },
    {
      title: "Условия аренды автовышки",
      description: "Правила аренды автогидроподъемников для дорожных работ",
      href: "/legal/aerial-lift-rental",
      lastUpdated: "15.12.2024",
    },
    {
      title: "Политика обработки персональных данных",
      description: "Принципы и порядок обработки ваших персональных данных",
      href: "/legal/data-processing",
      lastUpdated: "15.12.2024",
    },
  ];

  return (
    <>
      <Head>
        <title>Юридические документы - ЦОДД Смоленской области</title>
        <meta
          name="description"
          content="Официальные документы и соглашения Центра организации дорожного движения"
        />
      </Head>

      <div className="min-h-screen bg-background">
        {/* Header */}
        <div className="bg-gradient-to-br from-primary/10 to-secondary border-b border-accent">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="py-12 text-center">
              <Link
                href="/"
                className="inline-flex items-center text-primary hover:text-primary-dark mb-6 text-lg font-medium"
              >
                <svg
                  className="w-5 h-5 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 19l-7-7m0 0l7-7m-7 7h18"
                  />
                </svg>
                На главную
              </Link>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                Юридические документы
              </h1>
              <p className="text-xl text-text-muted max-w-2xl mx-auto">
                Официальные документы и соглашения Центра организации дорожного
                движения Смоленской области
              </p>
            </div>
          </div>
        </div>

        {/* Documents Grid */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid md:grid-cols-2 gap-8">
            {documents.map((doc, index) => (
              <Link
                key={index}
                href={doc.href}
                className="card hover:shadow-lg transition-all duration-300 hover:border-primary/50 group h-full flex flex-col"
              >
                <div className="flex items-start space-x-4 mb-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors mb-2">
                      {doc.title}
                    </h3>
                  </div>
                </div>
                <p className="text-text-muted text-sm mb-4 leading-relaxed flex-1">
                  {doc.description}
                </p>
                <div className="flex items-center justify-between pt-4 border-t border-accent">
                  <span className="text-xs text-primary bg-primary/10 px-2 py-1 rounded">
                    Обновлено: {doc.lastUpdated}
                  </span>
                  <svg
                    className="w-4 h-4 text-text-muted group-hover:text-primary transition-colors"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              </Link>
            ))}
          </div>

          {/* Contact Information */}
          <div className="mt-16 text-center">
            <div className="card max-w-2xl mx-auto">
              <h3 className="text-lg font-semibold text-foreground mb-4">
                Вопросы по документам?
              </h3>
              <p className="text-text-muted mb-4">
                Если у вас возникли вопросы касательно наших юридических
                документов, свяжитесь с нашим юридическим отделом
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a
                  href="mailto:legal@smolensk-dorogi.ru"
                  className="text-primary hover:text-primary-dark font-medium inline-flex items-center"
                >
                  <svg
                    className="w-4 h-4 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  legal@smolensk-dorogi.ru
                </a>
                <span className="text-text-muted hidden sm:block">•</span>
                <a
                  href="tel:+74812345678"
                  className="text-primary hover:text-primary-dark font-medium inline-flex items-center"
                >
                  <svg
                    className="w-4 h-4 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  +7 (4812) 34-56-78
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

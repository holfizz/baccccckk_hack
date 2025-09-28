"use client";

import { useNews } from "@/hooks/useApi";
import Card from "@/components/ui/Card";
import Image from "next/image";
import Link from "next/link";

export default function NewsPage() {
  const { data: news, loading, error, refetch } = useNews();

  if (loading) {
    return (
      <div className="min-h-screen bg-secondary py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto"></div>
            <p className="mt-4 text-text-muted">Загрузка новостей...</p>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-secondary py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="text-red-500 text-xl mb-4">
              Ошибка загрузки новостей
            </div>
            <p className="text-text-muted mb-6">{error}</p>
            <button
              onClick={refetch}
              className="bg-primary text-white px-6 py-2 rounded-lg hover:bg-primary/90 transition-colors"
            >
              Попробовать снова
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (!news || news.length === 0) {
    return (
      <div className="min-h-screen bg-secondary py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Новости
            </h1>
            <p className="text-xl text-text-muted">Новостей пока нет</p>
          </div>
        </div>
      </div>
    );
  }

  // Фильтруем только опубликованные новости
  const publishedNews = news.filter((article) => article.published);

  return (
    <div className="min-h-screen bg-secondary py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Новости
          </h1>
          <p className="text-xl text-text-muted max-w-3xl mx-auto">
            Последние события и достижения ЦОДД Смоленской области
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {publishedNews.map((article) => (
            <Card key={article.id} hover className="h-full flex flex-col">
              {article.imageUrl && (
                <div className="relative h-48 mb-4">
                  <Image
                    src={article.imageUrl}
                    alt={article.title}
                    fill
                    className="object-cover rounded-xl"
                    onError={(e) => {
                      // Скрываем изображение если оно не загружается
                      e.currentTarget.style.display = "none";
                    }}
                  />
                </div>
              )}

              <div className="flex-1 flex flex-col">
                <div className="text-sm text-text-muted mb-2">
                  {article.publishDate
                    ? new Date(article.publishDate).toLocaleDateString(
                        "ru-RU",
                        {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        }
                      )
                    : new Date(article.createdAt).toLocaleDateString("ru-RU", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                </div>

                <h3 className="text-xl font-bold text-foreground mb-3 line-clamp-2">
                  {article.title}
                </h3>

                <p className="text-text-muted mb-4 flex-1 line-clamp-3">
                  {article.excerpt || article.content.substring(0, 150) + "..."}
                </p>

                <div className="mt-auto">
                  <Link
                    href={`/news/${article.id}`}
                    className="inline-flex items-center text-primary hover:text-primary/80 font-medium transition-colors"
                  >
                    Читать далее
                    <svg
                      className="ml-2 w-4 h-4"
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
                  </Link>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {publishedNews.length === 0 && (
          <div className="text-center py-12">
            <p className="text-xl text-text-muted">
              Опубликованных новостей пока нет
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

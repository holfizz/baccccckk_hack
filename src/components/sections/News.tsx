"use client";

import Image from "next/image";
import Link from "next/link";
import Card from "@/components/ui/Card";
import { useNews } from "@/hooks/useApi";

const News = () => {
  const { data: newsData, loading, error } = useNews();

  // Показываем только первые 3 новости на главной странице
  const news = newsData?.slice(0, 3) || [];

  return (
    <section id="news" className="py-20 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Новости
          </h2>
          <p className="text-xl text-text-muted max-w-3xl mx-auto mb-8">
            Последние события и достижения ЦОДД Смоленской области
          </p>
          <Link
            href="/news"
            className="inline-flex items-center bg-primary text-white px-6 py-3 rounded-xl hover:bg-primary-dark transition-colors font-medium"
          >
            Все новости
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

        {loading ? (
          <div className="text-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto"></div>
            <p className="mt-4 text-text-muted">Загрузка новостей...</p>
          </div>
        ) : error ? (
          <div className="text-center py-12">
            <p className="text-red-500">Ошибка загрузки новостей</p>
          </div>
        ) : news.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-text-muted">Новостей пока нет</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {news.map((item) => (
              <Card key={item.id} hover className="h-full flex flex-col">
                {item.imageUrl && (
                  <div className="relative h-48 mb-4">
                    <Image
                      src={item.imageUrl}
                      alt={item.title}
                      fill
                      className="object-cover rounded-xl"
                      onError={(e) => {
                        e.currentTarget.style.display = "none";
                      }}
                    />
                  </div>
                )}
                <div className="flex-1 flex flex-col">
                  <div className="text-sm text-text-muted mb-2">
                    {item.publishDate
                      ? new Date(item.publishDate).toLocaleDateString("ru-RU", {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })
                      : new Date(item.createdAt).toLocaleDateString("ru-RU", {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3 line-clamp-2">
                    {item.title}
                  </h3>
                  <p className="text-text-muted mb-4 flex-1 line-clamp-3">
                    {item.excerpt || item.content.substring(0, 150) + "..."}
                  </p>
                  <div className="mt-auto">
                    <Link
                      href={`/news/${item.id}`}
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
        )}
      </div>
    </section>
  );
};

export default News;

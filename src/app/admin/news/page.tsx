"use client";

import { useState } from "react";
import { useNews } from "@/hooks/useApi";
import Card from "@/components/ui/Card";
import Image from "next/image";
import Link from "next/link";
import CreateNewsModal from "@/components/admin/CreateNewsModal";
import { NewsArticle } from "@/lib/api";

export default function AdminNewsPage() {
  const { data: news, loading, error, refetch } = useNews();
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);

  // Calculate statistics
  const totalNews = news?.length || 0;
  const publishedNewsCount = news?.filter((n) => n.published).length || 0;
  const draftNewsCount = totalNews - publishedNewsCount;

  const handleNewsCreated = () => {
    setIsCreateModalOpen(false);
    refetch();
  };

  if (loading)
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

  if (error)
    return (
      <div className="min-h-screen bg-secondary py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="text-red-500 text-xl mb-4">Ошибка загрузки</div>
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

  return (
    <div className="min-h-screen bg-secondary py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header with back button */}
        <div className="flex items-center space-x-4 mb-8">
          <Link
            href="/admin"
            className="text-text-muted hover:text-foreground transition-colors"
          >
            <svg
              className="w-6 h-6"
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
          </Link>
          <div>
            <h1 className="text-3xl font-bold text-foreground">
              Управление новостями
            </h1>
            <p className="text-text-muted">
              Создание и редактирование новостей
            </p>
          </div>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">
                {totalNews}
              </div>
              <div className="text-text-muted">Всего новостей</div>
            </div>
          </Card>
          <Card>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">
                {publishedNewsCount}
              </div>
              <div className="text-text-muted">Опубликовано</div>
            </div>
          </Card>
          <Card>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-600 mb-2">
                {draftNewsCount}
              </div>
              <div className="text-text-muted">Черновики</div>
            </div>
          </Card>
        </div>

        {/* Create button */}
        <div className="flex justify-end mb-6">
          <button
            onClick={() => setIsCreateModalOpen(true)}
            className="bg-primary text-white px-6 py-3 rounded-xl hover:bg-primary-dark transition-colors font-medium flex items-center"
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
                d="M12 4v16m8-8H4"
              />
            </svg>
            Создать новость
          </button>
        </div>

        {/* News list */}
        {news && news.length > 0 ? (
          <div className="space-y-4">
            {news.map((article: NewsArticle) => (
              <Card key={article.id} className="p-6">
                <div className="flex items-start space-x-4">
                  {article.imageUrl && (
                    <div className="relative w-24 h-24 flex-shrink-0">
                      <Image
                        src={article.imageUrl}
                        alt={article.title}
                        fill
                        className="object-cover rounded-lg"
                        onError={(e) => {
                          e.currentTarget.style.display = "none";
                        }}
                      />
                    </div>
                  )}

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center space-x-2 mb-2">
                      <span
                        className={`px-2 py-1 rounded-full text-xs font-medium ${
                          article.published
                            ? "bg-green-100 text-green-800"
                            : "bg-orange-100 text-orange-800"
                        }`}
                      >
                        {article.published ? "Опубликовано" : "Черновик"}
                      </span>
                      <span className="text-sm text-text-muted">
                        {article.publishDate
                          ? new Date(article.publishDate).toLocaleDateString(
                              "ru-RU"
                            )
                          : new Date(article.createdAt).toLocaleDateString(
                              "ru-RU"
                            )}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-foreground mb-2 line-clamp-2">
                      {article.title}
                    </h3>

                    <p className="text-text-muted mb-4 line-clamp-2">
                      {article.excerpt ||
                        article.content.substring(0, 200) + "..."}
                    </p>

                    <div className="flex items-center space-x-4">
                      <Link
                        href={`/news/${article.id}`}
                        className="text-primary hover:text-primary/80 font-medium"
                      >
                        Просмотреть
                      </Link>
                      <button className="text-blue-600 hover:text-blue-800 font-medium">
                        Редактировать
                      </button>
                      <button className="text-red-600 hover:text-red-800 font-medium">
                        Удалить
                      </button>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        ) : (
          <Card>
            <div className="text-center py-12">
              <p className="text-text-muted text-lg">Новостей пока нет</p>
              <button
                onClick={() => setIsCreateModalOpen(true)}
                className="mt-4 bg-primary text-white px-6 py-2 rounded-lg hover:bg-primary/90 transition-colors"
              >
                Создать первую новость
              </button>
            </div>
          </Card>
        )}
      </div>

      {/* Create news modal */}
      <CreateNewsModal
        isOpen={isCreateModalOpen}
        onClose={() => setIsCreateModalOpen(false)}
        onSuccess={handleNewsCreated}
      />
    </div>
  );
}

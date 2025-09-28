"use client";

import { useNewsArticle } from "@/hooks/useApi";
import Card from "@/components/ui/Card";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";

export default function NewsArticlePage() {
  const params = useParams();
  const articleId = parseInt(params.id as string);

  const { data: article, loading, error } = useNewsArticle(articleId);

  if (loading) {
    return (
      <div className="min-h-screen bg-secondary py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto"></div>
            <p className="mt-4 text-text-muted">Загрузка новости...</p>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-secondary py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="text-red-500 text-xl mb-4">
              Ошибка загрузки новости
            </div>
            <p className="text-text-muted mb-6">{error}</p>
            <Link
              href="/news"
              className="bg-primary text-white px-6 py-2 rounded-lg hover:bg-primary/90 transition-colors"
            >
              Вернуться к новостям
            </Link>
          </div>
        </div>
      </div>
    );
  }

  if (!article) {
    return (
      <div className="min-h-screen bg-secondary py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-foreground mb-6">
              Новость не найдена
            </h1>
            <p className="text-text-muted mb-6">
              Запрашиваемая новость не существует или была удалена
            </p>
            <Link
              href="/news"
              className="bg-primary text-white px-6 py-2 rounded-lg hover:bg-primary/90 transition-colors"
            >
              Вернуться к новостям
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-secondary py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Навигация */}
        <div className="mb-8">
          <Link
            href="/news"
            className="inline-flex items-center text-primary hover:text-primary/80 font-medium transition-colors"
          >
            <svg
              className="mr-2 w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            Все новости
          </Link>
        </div>

        <Card className="overflow-hidden">
          {article.imageUrl && (
            <div className="relative h-64 md:h-96 mb-8">
              <Image
                src={article.imageUrl}
                alt={article.title}
                fill
                className="object-cover"
                onError={(e) => {
                  // Скрываем изображение если оно не загружается
                  e.currentTarget.style.display = "none";
                }}
              />
            </div>
          )}

          <div className="p-6 md:p-8">
            <div className="text-sm text-text-muted mb-4">
              {article.publishDate
                ? new Date(article.publishDate).toLocaleDateString("ru-RU", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                    hour: "2-digit",
                    minute: "2-digit",
                  })
                : new Date(article.createdAt).toLocaleDateString("ru-RU", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
              {article.author && (
                <span className="ml-4">Автор: {article.author.email}</span>
              )}
            </div>

            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              {article.title}
            </h1>

            {article.excerpt && (
              <div className="text-xl text-text-muted mb-8 p-4 bg-gray-50 rounded-lg border-l-4 border-primary">
                {article.excerpt}
              </div>
            )}

            <div
              className="prose prose-lg max-w-none text-foreground"
              dangerouslySetInnerHTML={{
                __html: article.content.replace(/\n/g, "<br>"),
              }}
            />
          </div>
        </Card>
      </div>
    </div>
  );
}

"use client";

import Link from "next/link";
import Card from "@/components/ui/Card";
import { useAuth } from "@/contexts/AuthContext";

export default function AccessDeniedPage() {
  const { user } = useAuth();

  
  return (
    <div className="min-h-screen bg-secondary flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <div className="mx-auto h-12 w-12 text-red-500">
            <svg
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              className="w-full h-full"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z"
              />
            </svg>
          </div>
          <h2 className="mt-6 text-3xl font-bold text-foreground">
            Доступ запрещен
          </h2>
          <p className="mt-2 text-sm text-text-muted">
            У вас недостаточно прав для доступа к этой странице
          </p>
        </div>

        <Card className="p-8">
          <div className="text-center space-y-4">
            <div className="bg-red-50 border border-red-200 rounded-lg p-4">
              <p className="text-red-600 text-sm">
                Для доступа к админ-панели необходимы права администратора или редактора.
              </p>
            </div>

            {user ? (
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <p className="text-blue-600 text-sm">
                  Вы вошли как: <strong>{user.email}</strong>
                  <br />
                  Ваша роль: <strong>{user.role}</strong>
                </p>
              </div>
            ) : (
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                <p className="text-yellow-600 text-sm">
                  Вы не авторизованы в системе.
                </p>
              </div>
            )}

            <div className="space-y-3">
              <Link
                href="/"
                className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-primary hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
              >
                Вернуться на главную
              </Link>

              {!user && (
                <Link
                  href="/login"
                  className="w-full flex justify-center py-3 px-4 border border-gray-300 rounded-lg shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
                >
                  Войти в систему
                </Link>
              )}
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}

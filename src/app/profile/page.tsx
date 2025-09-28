"use client";

import { useEffect, useState } from "react";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import EditProfileForm from "@/components/EditProfileForm";
import { useAuth } from "@/contexts/AuthContext";
import { useRouter } from "next/navigation";
import { apiClient } from "@/lib/api";

export default function ProfilePage() {
  const { user, loading, updateUser } = useAuth();
  const router = useRouter();
  const [isEditing, setIsEditing] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!loading && !user) {
      router.push("/login");
    }
  }, [user, loading, router]);

  const handleSave = async (userData: any) => {
    setIsSaving(true);
    setError(null);
    
    try {
      const updatedUser = await apiClient.updateProfile(userData);
      updateUser(updatedUser);
      setIsEditing(false);
    } catch (err: any) {
      console.error("Ошибка при сохранении профиля:", err);
      setError(err.message || "Ошибка при сохранении профиля");
    } finally {
      setIsSaving(false);
    }
  };

  const handleCancel = () => {
    setIsEditing(false);
    setError(null);
  };

  if (loading || !user) {
    return (
      <div className="min-h-screen bg-secondary py-20">
        <div className="max-w-3xl mx-auto px-4">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto" />
            <p className="mt-4 text-text-muted">Загрузка профиля...</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-secondary py-12">
      <div className="max-w-3xl mx-auto px-4">
        <div className="flex items-center space-x-4 mb-8">
          <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
            <span className="text-2xl font-semibold text-primary">
              {(user.name || user.email || "U")[0].toUpperCase()}
            </span>
          </div>
          <div>
            <h1 className="text-3xl font-bold text-foreground">
              {user.name || "Пользователь"}
            </h1>
            <p className="text-text-muted">{user.email}</p>
          </div>
        </div>

        {isEditing ? (
          <EditProfileForm
            user={user}
            onSave={handleSave}
            onCancel={handleCancel}
            loading={isSaving}
          />
        ) : (
          <Card className="p-6">
            <div className="flex justify-between items-start mb-6">
              <h2 className="text-2xl font-bold text-foreground">
                Информация о профиле
              </h2>
              <Button
                variant="outline"
                onClick={() => setIsEditing(true)}
                className="ml-4"
              >
                Редактировать
              </Button>
            </div>

            {error && (
              <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
                <p className="text-red-600">{error}</p>
              </div>
            )}

            <div className="space-y-4">
              <div>
                <p className="text-sm text-text-muted">Email</p>
                <p className="font-medium">{user.email}</p>
              </div>
              <div>
                <p className="text-sm text-text-muted">Имя</p>
                <p className="font-medium">{user.name || "Не указано"}</p>
              </div>
              <div>
                <p className="text-sm text-text-muted">Телефон</p>
                <p className="font-medium">{user.phone || "Не указан"}</p>
              </div>
              <div>
                <p className="text-sm text-text-muted">Роль</p>
                <p className="font-medium">{user.role}</p>
              </div>
              <div>
                <p className="text-sm text-text-muted">Дата регистрации</p>
                <p className="font-medium">
                  {new Date(user.createdAt || "").toLocaleDateString("ru-RU")}
                </p>
              </div>
            </div>
          </Card>
        )}
      </div>
    </div>
  );
}

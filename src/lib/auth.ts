"use client";

// Утилиты для работы с аутентификацией

export interface AuthTokens {
  accessToken: string;
  refreshToken: string;
}

export interface User {
  id: number;
  email: string;
  name: string;
  role: "GUEST" | "EDITOR" | "ADMIN";
}

// Получение токенов из куков
export function getTokensFromCookies(): AuthTokens | null {
  if (typeof document === "undefined") return null;

  const cookies = document.cookie.split(";");
  let accessToken = "";
  let refreshToken = "";

  cookies.forEach((cookie) => {
    const [name, value] = cookie.trim().split("=");
    if (name === "accessToken") accessToken = value;
    if (name === "refreshToken") refreshToken = value;
  });

  if (accessToken && refreshToken) {
    return { accessToken, refreshToken };
  }

  return null;
}

// Сохранение токенов в куки
export function setTokensInCookies(tokens: AuthTokens): void {
  if (typeof document === "undefined") return;

  // Access token - 7 дней
  document.cookie = `accessToken=${tokens.accessToken}; path=/; max-age=${
    7 * 24 * 60 * 60
  }; secure; samesite=strict`;
  // Refresh token - 30 дней
  document.cookie = `refreshToken=${tokens.refreshToken}; path=/; max-age=${
    30 * 24 * 60 * 60
  }; secure; samesite=strict`;
}

// Удаление токенов из куков
export function clearTokensFromCookies(): void {
  if (typeof document === "undefined") return;

  document.cookie = "accessToken=; path=/; max-age=0";
  document.cookie = "refreshToken=; path=/; max-age=0";
}

// Проверка, является ли пользователь админом
export function isAdmin(user: User | null): boolean {
  return user?.role === "ADMIN";
}

// Проверка, является ли пользователь редактором или админом
export function isEditorOrAdmin(user: User | null): boolean {
  return user?.role === "EDITOR" || user?.role === "ADMIN";
}

// Декодирование JWT токена (простая версия без проверки подписи)
export function decodeJWT(token: string): any {
  try {
    const base64Url = token.split(".")[1];
    const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
    const jsonPayload = decodeURIComponent(
      atob(base64)
        .split("")
        .map((c) => "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2))
        .join("")
    );
    return JSON.parse(jsonPayload);
  } catch (error) {
    return null;
  }
}

// Проверка, истек ли токен
export function isTokenExpired(token: string): boolean {
  const decoded = decodeJWT(token);
  if (!decoded || !decoded.exp) return true;

  const currentTime = Math.floor(Date.now() / 1000);
  return decoded.exp < currentTime;
}

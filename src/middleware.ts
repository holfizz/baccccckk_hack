import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Получаем токены из куков запроса
  const accessToken = request.cookies.get("accessToken")?.value;
  const refreshToken = request.cookies.get("refreshToken")?.value;

  // Если нет токенов, перенаправляем на страницу логина
  if (!accessToken || !refreshToken) {
    if (pathname.startsWith("/admin") || pathname.startsWith("/profile")) {
      return NextResponse.redirect(new URL("/login", request.url));
    }
    return NextResponse.next();
  }

  try {
    // Делаем API запрос для получения данных пользователя
    const apiUrl =
      process.env.NEXT_PUBLIC_API_URL || "http://176.123.167.173/api";
    const response = await fetch(`${apiUrl}/auth/profile`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
    });

    const user = await response.json();
    console.log("User data:", user); // Для отладки

    // Для админ-панели проверяем роль пользователя
    if (pathname.startsWith("/admin") && user.role !== "ADMIN") {
      return NextResponse.redirect(new URL("/access-denied", request.url));
    }

    return NextResponse.next();
  } catch (error) {
    console.error("Auth check error:", error);
    return NextResponse.next(); // Пропускаем дальше, пусть API клиент разбирается с ошибками
  }
}

export const config = {
  matcher: ["/admin/:path*", "/profile", "/profile/:path*"],
};

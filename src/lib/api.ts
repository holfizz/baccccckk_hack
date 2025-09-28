const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_URL || "http://176.123.167.173/api";

// Types
export interface User {
  id: number;
  email: string;
  name?: string;
  phone?: string;
  role: "GUEST" | "EDITOR" | "ADMIN";
  createdAt?: string;
  updatedAt?: string;
}

export interface NewsArticle {
  id: number;
  title: string;
  content: string;
  excerpt?: string;
  imageUrl?: string;
  published: boolean;
  publishDate?: string;
  author: User;
  authorId: number;
  createdAt: string;
  updatedAt: string;
}

export interface FineStatistics {
  totalFines: number;
  totalAmount: number;
  paidFines: number;
  pendingFines: number;
}

export interface IncidentStatistics {
  total: number;
  byType: Array<{
    type: string;
    count: number;
  }>;
  bySeverity: Array<{
    severity: string;
    count: number;
  }>;
  byStatus: Array<{
    status: string;
    count: number;
  }>;
}

// API Client class
class ApiClient {
  private baseURL: string;

  constructor(baseURL: string = API_BASE_URL) {
    this.baseURL = baseURL;
  }

  private getTokensFromCookies(): {
    accessToken: string;
    refreshToken: string;
  } | null {
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

  private async request<T>(
    endpoint: string,
    options: RequestInit = {}
  ): Promise<T> {
    const url = `${this.baseURL}${endpoint}`;
    const tokens = this.getTokensFromCookies();

    const headers: Record<string, string> = {
      "Content-Type": "application/json",
      ...(tokens?.accessToken
        ? { Authorization: `Bearer ${tokens.accessToken}` }
        : {}),
      ...options.headers,
    };

    try {
      const response = await fetch(url, {
        ...options,
        headers,
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(
          errorData.message || `HTTP error! status: ${response.status}`
        );
      }

      return await response.json();
    } catch (error) {
      console.error(`API request failed: ${url}`, error);
      throw error;
    }
  }

  // Authentication
  async login(
    email: string,
    password: string
  ): Promise<{ accessToken: string; refreshToken: string; user: User }> {
    const response = await this.request<{
      accessToken: string;
      refreshToken: string;
      user: User;
    }>("/auth/login", {
      method: "POST",
      body: JSON.stringify({ email, password }),
    });

    // Сохраняем токены в куки
    document.cookie = `accessToken=${response.accessToken}; path=/; max-age=${
      7 * 24 * 60 * 60
    }; secure; samesite=strict`;
    document.cookie = `refreshToken=${response.refreshToken}; path=/; max-age=${
      30 * 24 * 60 * 60
    }; secure; samesite=strict`;

    return response;
  }

  async register(userData: {
    name: string;
    email: string;
    password: string;
  }): Promise<{ message: string }> {
    return this.request<{ message: string }>("/auth/register", {
      method: "POST",
      body: JSON.stringify(userData),
    });
  }

  async getCurrentUser(): Promise<User> {
    return this.request<User>("/auth/profile");
  }

  async updateProfile(userData: Partial<User>): Promise<User> {
    return this.request<User>("/users/profile", {
      method: "PUT",
      body: JSON.stringify(userData),
    });
  }

  async logout(): Promise<void> {
    // Очищаем токены из куков
    document.cookie = "accessToken=; path=/; max-age=0";
    document.cookie = "refreshToken=; path=/; max-age=0";
  }

  // Statistics
  async getFineStatistics(): Promise<FineStatistics> {
    return this.request<FineStatistics>("/fines/statistics");
  }

  async getIncidentStatistics(): Promise<IncidentStatistics> {
    return this.request<IncidentStatistics>("/incidents/statistics");
  }

  // News
  async getNews(): Promise<NewsArticle[]> {
    return this.request<NewsArticle[]>("/news");
  }

  async getNewsArticle(id: number): Promise<NewsArticle> {
    return this.request<NewsArticle>(`/news/${id}`);
  }

  async createNewsArticle(
    article: Omit<NewsArticle, "id" | "createdAt" | "updatedAt">
  ): Promise<NewsArticle> {
    return this.request<NewsArticle>("/news", {
      method: "POST",
      body: JSON.stringify(article),
    });
  }
}

// Create and export API client instance
export const apiClient = new ApiClient();

// Export individual API functions for convenience
export const {
  login,
  register,
  getCurrentUser,
  logout,
  getFineStatistics,
  getIncidentStatistics,
  getNews,
  getNewsArticle,
  createNewsArticle,
} = apiClient;

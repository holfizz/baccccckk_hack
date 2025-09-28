"use client";

import { useEffect, useState } from "react";
import { useAuth } from "@/contexts/AuthContext";
import { useRouter } from "next/navigation";
import Card from "@/components/ui/Card";
import { FineStatistics, IncidentStatistics, apiClient } from "@/lib/api";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";

const COLORS = {
  primary: "#3B82F6",
  success: "#10B981",
  warning: "#F59E0B",
  danger: "#EF4444",
  info: "#6366F1",
  gray: "#6B7280",
};

const SEVERITY_COLORS = {
  LOW: "#10B981",
  MEDIUM: "#F59E0B",
  HIGH: "#EF4444",
  CRITICAL: "#7F1D1D",
};

const STATUS_COLORS = {
  OPEN: "#EF4444",
  IN_PROGRESS: "#F59E0B",
  RESOLVED: "#10B981",
  CLOSED: "#6B7280",
};

export default function DashboardPage() {
  const { user, loading } = useAuth();
  const router = useRouter();
  const [fineStats, setFineStats] = useState<FineStatistics | null>(null);
  const [incidentStats, setIncidentStats] = useState<IncidentStatistics | null>(
    null
  );
  const [error, setError] = useState<string | null>(null);
  const [dataLoading, setDataLoading] = useState(true);

  useEffect(() => {
    if (!loading && !user) {
      router.push("/login");
    }
  }, [user, loading, router]);

  useEffect(() => {
    const fetchDashboardData = async () => {
      if (!user) return;

      try {
        setDataLoading(true);
        const [fineData, incidentData] = await Promise.all([
          apiClient.getFineStatistics(),
          apiClient.getIncidentStatistics(),
        ]);

        setFineStats(fineData);
        setIncidentStats(incidentData);
      } catch (e) {
        console.error("Dashboard error:", e);
        setError(e instanceof Error ? e.message : "Ошибка загрузки данных");
      } finally {
        setDataLoading(false);
      }
    };

    fetchDashboardData();
  }, [user]);

  if (loading || !user) {
    return (
      <div className="min-h-screen bg-secondary py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto"></div>
            <p className="mt-4 text-text-muted">Загрузка...</p>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-secondary py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center">
            <div className="text-red-500 text-xl mb-4">Ошибка загрузки</div>
            <p className="text-text-muted mb-6">{error}</p>
            <button
              onClick={() => window.location.reload()}
              className="bg-primary text-white px-6 py-2 rounded-lg hover:bg-primary/90 transition-colors"
            >
              Попробовать снова
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Подготавливаем данные для графиков
  const fineData = fineStats
    ? [
        {
          name: "Оплачено",
          value: fineStats.paidFines,
          color: COLORS.success,
        },
        {
          name: "Ожидает оплаты",
          value: fineStats.pendingFines,
          color: COLORS.warning,
        },
      ]
    : [];

  const incidentTypeData =
    incidentStats?.byType.map((item) => ({
      name: getIncidentTypeDisplay(item.type),
      value: item.count,
    })) || [];

  return (
    <div className="min-h-screen bg-secondary py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">
            Дашборд ЦОДД
          </h1>
          <p className="text-text-muted">
            Мониторинг дорожного движения в реальном времени
          </p>
        </div>

        {/* Fine Statistics */}
        {fineStats && (
          <div className="mb-12">
            <h2 className="text-xl font-semibold mb-4">Статистика штрафов</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <Card>
                <div className="flex items-center">
                  <div className="p-3 rounded-full bg-blue-100 text-blue-600 mr-4">
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
                        d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-text-muted text-sm">Всего штрафов</p>
                    <p className="text-2xl font-bold text-foreground">
                      {fineStats.totalFines.toLocaleString()}
                    </p>
                  </div>
                </div>
              </Card>

              <Card>
                <div className="flex items-center">
                  <div className="p-3 rounded-full bg-green-100 text-green-600 mr-4">
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
                        d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-text-muted text-sm">Общая сумма</p>
                    <p className="text-2xl font-bold text-foreground">
                      {fineStats.totalAmount.toLocaleString()} ₽
                    </p>
                  </div>
                </div>
              </Card>

              <Card>
                <div className="flex items-center">
                  <div className="p-3 rounded-full bg-yellow-100 text-yellow-600 mr-4">
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
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-text-muted text-sm">Ожидают оплаты</p>
                    <p className="text-2xl font-bold text-foreground">
                      {fineStats.pendingFines.toLocaleString()}
                    </p>
                  </div>
                </div>
              </Card>

              <Card>
                <div className="flex items-center">
                  <div className="p-3 rounded-full bg-green-100 text-green-600 mr-4">
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
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-text-muted text-sm">Оплачено</p>
                    <p className="text-2xl font-bold text-foreground">
                      {fineStats.paidFines.toLocaleString()}
                    </p>
                  </div>
                </div>
              </Card>
            </div>

            {/* Fine Status Chart */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <Card>
                <h3 className="text-lg font-medium mb-4">
                  Распределение статусов штрафов
                </h3>
                <div className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={fineData}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        label={({
                          cx,
                          cy,
                          midAngle,
                          innerRadius,
                          outerRadius,
                          percent,
                          name,
                        }) => {
                          const radius =
                            innerRadius + (outerRadius - innerRadius) * 0.5;
                          const x =
                            cx + radius * Math.cos((-midAngle * Math.PI) / 180);
                          const y =
                            cy + radius * Math.sin((-midAngle * Math.PI) / 180);
                          return (
                            <text
                              x={x}
                              y={y}
                              fill="white"
                              textAnchor={x > cx ? "start" : "end"}
                              dominantBaseline="central"
                            >
                              {`${name} ${(percent * 100).toFixed(0)}%`}
                            </text>
                          );
                        }}
                        outerRadius={120}
                        dataKey="value"
                      >
                        {fineData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip />
                      <Legend />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </Card>

              <Card>
                <h3 className="text-lg font-medium mb-4">
                  Статистика по типам инцидентов
                </h3>
                <div className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={incidentTypeData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis
                        dataKey="name"
                        angle={-45}
                        textAnchor="end"
                        height={80}
                      />
                      <YAxis />
                      <Tooltip />
                      <Bar dataKey="value" fill={COLORS.primary} />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </Card>
            </div>
          </div>
        )}

        {/* Incident Statistics */}
        {incidentStats && (
          <div>
            <h2 className="text-xl font-semibold mb-4">
              Статистика инцидентов
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* By Type */}
              <Card>
                <h3 className="text-lg font-medium mb-4">По типу</h3>
                <div className="space-y-4">
                  {incidentStats.byType.map((item, index) => (
                    <div
                      key={index}
                      className="flex justify-between items-center"
                    >
                      <span className="text-text-muted">
                        {getIncidentTypeDisplay(item.type)}
                      </span>
                      <span className="font-medium">{item.count}</span>
                    </div>
                  ))}
                </div>
              </Card>

              {/* By Severity */}
              <Card>
                <h3 className="text-lg font-medium mb-4">По важности</h3>
                <div className="space-y-4">
                  {incidentStats.bySeverity.map((item, index) => (
                    <div
                      key={index}
                      className="flex justify-between items-center"
                    >
                      <div className="flex items-center">
                        <div
                          className={`w-2 h-2 rounded-full mr-2 ${getSeverityColor(
                            item.severity
                          )}`}
                        ></div>
                        <span className="text-text-muted">
                          {getSeverityDisplay(item.severity)}
                        </span>
                      </div>
                      <span className="font-medium">{item.count}</span>
                    </div>
                  ))}
                </div>
              </Card>

              {/* By Status */}
              <Card>
                <h3 className="text-lg font-medium mb-4">По статусу</h3>
                <div className="space-y-4">
                  {incidentStats.byStatus.map((item, index) => (
                    <div
                      key={index}
                      className="flex justify-between items-center"
                    >
                      <span className="text-text-muted">
                        {getStatusDisplay(item.status)}
                      </span>
                      <span className="font-medium">{item.count}</span>
                    </div>
                  ))}
                </div>
              </Card>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

// Helper functions
function getIncidentTypeDisplay(type: string): string {
  const types: Record<string, string> = {
    ACCIDENT: "ДТП",
    ROAD_DAMAGE: "Повреждение дороги",
    TRAFFIC_JAM: "Пробка",
    EMERGENCY: "Чрезвычайная ситуация",
    MAINTENANCE: "Тех. обслуживание",
  };
  return types[type] || type;
}

function getSeverityDisplay(severity: string): string {
  const severities: Record<string, string> = {
    LOW: "Низкая",
    MEDIUM: "Средняя",
    HIGH: "Высокая",
    CRITICAL: "Критическая",
  };
  return severities[severity] || severity;
}

function getSeverityColor(severity: string): string {
  const colors: Record<string, string> = {
    LOW: "bg-green-500",
    MEDIUM: "bg-yellow-500",
    HIGH: "bg-orange-500",
    CRITICAL: "bg-red-500",
  };
  return colors[severity] || "bg-gray-500";
}

function getStatusDisplay(status: string): string {
  const statuses: Record<string, string> = {
    OPEN: "Открыт",
    IN_PROGRESS: "В работе",
    RESOLVED: "Решен",
    CLOSED: "Закрыт",
  };
  return statuses[status] || status;
}

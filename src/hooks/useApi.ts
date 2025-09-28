"use client";

import { useState, useEffect } from "react";
import {
  apiClient,
  Project,
  Service,
  TeamMember,
  NewsArticle,
  Document,
  Job,
  TrafficData,
  Incident,
} from "@/lib/api";

// Generic hook for API calls
export function useApi<T>(
  apiCall: () => Promise<T>,
  dependencies: unknown[] = []
) {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let isMounted = true;

    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);
        const result = await apiCall();
        if (isMounted) {
          setData(result);
        }
      } catch (err) {
        if (isMounted) {
          setError(err instanceof Error ? err.message : "An error occurred");
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    fetchData();

    return () => {
      isMounted = false;
    };
  }, dependencies);

  const refetch = async () => {
    try {
      setLoading(true);
      setError(null);
      const result = await apiCall();
      setData(result);
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred");
    } finally {
      setLoading(false);
    }
  };

  return { data, loading, error, refetch };
}

// Specific hooks for different data types
export function useProjects() {
  return useApi(() => apiClient.getProjects());
}

export function useProject(id: number) {
  return useApi(() => apiClient.getProject(id), [id]);
}

export function useServices() {
  return useApi(() => apiClient.getServices());
}

export function useService(id: number) {
  return useApi(() => apiClient.getService(id), [id]);
}

export function useTeamMembers() {
  return useApi(() => apiClient.getTeamMembers());
}

export function useTeamMember(id: number) {
  return useApi(() => apiClient.getTeamMember(id), [id]);
}

export function useNews() {
  return useApi(() => apiClient.getNews());
}

export function useNewsArticle(id: number) {
  return useApi(() => apiClient.getNewsArticle(id), [id]);
}

export function useDocuments() {
  return useApi(() => apiClient.getDocuments());
}

export function useDocument(id: number) {
  return useApi(() => apiClient.getDocument(id), [id]);
}

export function useJobs() {
  return useApi(() => apiClient.getJobs());
}

export function useJob(id: number) {
  return useApi(() => apiClient.getJob(id), [id]);
}

export function useTrafficData(limit: number = 100) {
  return useApi(() => apiClient.getTrafficData(limit), [limit]);
}

export function useTrafficStats() {
  return useApi(() => apiClient.getTrafficStats());
}

export function useIncidents() {
  return useApi(() => apiClient.getIncidents());
}

export function useIncident(id: number) {
  return useApi(() => apiClient.getIncident(id), [id]);
}

// Hook for form submissions
export function useSubmitForm() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const submitContactForm = async (data: {
    name: string;
    email: string;
    subject: string;
    message: string;
  }) => {
    try {
      setLoading(true);
      setError(null);
      setSuccess(false);

      const result = await apiClient.submitContactForm(data);

      if (result.success) {
        setSuccess(true);
      } else {
        setError(result.message);
      }

      return result;
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : "An error occurred";
      setError(errorMessage);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const submitServiceOrder = async (data: {
    service_type: string;
    name: string;
    email: string;
    phone: string;
    details: Record<string, unknown>;
  }) => {
    try {
      setLoading(true);
      setError(null);
      setSuccess(false);

      const result = await apiClient.submitServiceOrder(data);

      if (result.success) {
        setSuccess(true);
      } else {
        setError(result.message);
      }

      return result;
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : "An error occurred";
      setError(errorMessage);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const reset = () => {
    setError(null);
    setSuccess(false);
    setLoading(false);
  };

  return {
    loading,
    error,
    success,
    submitContactForm,
    submitServiceOrder,
    reset,
  };
}

// Hook for CRUD operations
export function useCrud<T>() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const create = async (apiCall: () => Promise<T>) => {
    try {
      setLoading(true);
      setError(null);
      const result = await apiCall();
      return result;
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : "An error occurred";
      setError(errorMessage);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const update = async (apiCall: () => Promise<T>) => {
    try {
      setLoading(true);
      setError(null);
      const result = await apiCall();
      return result;
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : "An error occurred";
      setError(errorMessage);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const remove = async (apiCall: () => Promise<void>) => {
    try {
      setLoading(true);
      setError(null);
      await apiCall();
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : "An error occurred";
      setError(errorMessage);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  return {
    loading,
    error,
    create,
    update,
    remove,
  };
}

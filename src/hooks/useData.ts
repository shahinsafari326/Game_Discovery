import React, { useEffect } from 'react'
import apiClient from '../services/api-client';
import type { AxiosRequestConfig } from 'axios';


export interface FetchResponse<T> {
    results: T[];
    count: number;
}

const useData = <T> (endpoint: string, requestConfig?: AxiosRequestConfig, deps?: any[]) => {
  const [data, setData] = React.useState<T[]>([]);
  const [error, setError] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(false);
  useEffect(() => {
    const controller = new AbortController();
    setIsLoading(true);
    apiClient
      .get<FetchResponse<T>>(endpoint, { signal: controller.signal, ...requestConfig })
      .then((response) => {
        setData(response.data.results);
        setIsLoading(false);
      })
      .catch((error) => {
        if (error.name !== "CanceledError") {
          setError(error.message);
          setIsLoading(false);
        }
      });

    return () => controller.abort();
  }, deps ? deps : []);
  return { data, error , isLoading};
}

export default useData
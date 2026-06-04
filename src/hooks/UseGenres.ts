import React, { useEffect } from 'react'
import apiClient from '../services/api-client';

export interface Genre {
    id: number;
    name: string;
}

export interface FetchGenresResponse {
    results: Genre[];
    count: number;
}

const UseGenres = () => {
  const [genres, setGenres] = React.useState<Genre[]>([]);
  const [error, setError] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(false);
  useEffect(() => {
    const controller = new AbortController();
    setIsLoading(true);
    apiClient
      .get<FetchGenresResponse>("/genres", { signal: controller.signal })
      .then((response) => {
        setGenres(response.data.results);
        setIsLoading(false);
      })
      .catch((error) => {
        if (error.name !== "CanceledError") {
          setError(error.message);
          setIsLoading(false);
        }
      });

    return () => controller.abort();
  }, []);
  return { genres, error , isLoading};
}

export default UseGenres
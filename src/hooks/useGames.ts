import { useEffect } from "react";
import apiClient from "../services/api-client";
import React from "react";

export interface Platform {
    id: number;
    name: string;
    slug: string;
}

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: {platform: Platform}[];
  metacritic: number;
}

interface FetchGamesResponse {
  results: Game[];
  count: number;
}
const useGames = () => {
  const [games, setGames] = React.useState<Game[]>([]);
  const [error, setError] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(false);
  useEffect(() => {
    const controller = new AbortController();
    setIsLoading(true);
    apiClient
      .get<FetchGamesResponse>("/games", { signal: controller.signal })
      .then((response) => {
        setGames(response.data.results);
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
  return { games, error , isLoading};
};
export default useGames;
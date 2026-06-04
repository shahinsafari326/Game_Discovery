import { useEffect } from "react";
import apiClient from "../services/api-client";
import React from "react";

interface Game {
  id: number;
  name: string;
}

interface FetchGamesResponse {
  results: Game[];
  count: number;
}
const useGames = () => {
  const [games, setGames] = React.useState<Game[]>([]);
  const [error, setError] = React.useState("");

  useEffect(() => {
    const controller = new AbortController();
    apiClient
      .get<FetchGamesResponse>("/games", { signal: controller.signal })
      .then((response) => setGames(response.data.results))
      .catch((error) => {
        if (error.name !== "CanceledError") {
          setError(error.message);
        }
      });

    return () => controller.abort();
  }, []);
  return { games, error };
};
export default useGames;
import React, { useEffect } from "react";
import apiClient from "../services/api-client";

interface Game {
  id: number;
  name: string;
}

interface FetchGamesResponse {
  results: Game[];
  count: number;
}

const GameGrid = () => {
  const [games, setGames] = React.useState<Game[]>([]);
  const [error, setError] = React.useState(null);

  useEffect(() => {
    apiClient
      .get<FetchGamesResponse>("/games")
      .then((response) => setGames(response.data.results))
      .catch((error) => setError(error.message));
  }, []);

  return (
    <div>
      {error && <p>Error fetching games: {error}</p>}
      <ul>
        {games.map((game) => (
          <li key={game.id}>{game.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default GameGrid;

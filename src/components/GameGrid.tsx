import useGames from "../hooks/useGames";
import GameCards from "./GameCards";

const GameGrid = () => {
  const { games, error } = useGames();

  return (
    <div>
      {error && <p>Error fetching games: {error}</p>}
      <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {games.map((game) => (
          <GameCards key={game.id} game={game} />
        ))}
      </div>
    </div>
  );
};

export default GameGrid;

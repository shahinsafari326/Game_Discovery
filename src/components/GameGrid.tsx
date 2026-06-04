import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";

interface GameGridProps {
  genreId: number | null;
}

const GameGrid = ({ genreId }: GameGridProps) => {
  const { data, error, isLoading } = useGames(genreId);
  // Create an array of size 20 skeletons for loading state

  const skeletons = Array.from({ length: 20 }, (_, i) => i + 1);
  return (
    <div>
      {error && <p>Error fetching games: {error}</p>}

      <div className="grid gap-3 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
        {isLoading &&
          skeletons.map((skeleton) => <GameCardSkeleton key={skeleton} />)}
        {!isLoading &&
          data.map((game) => <GameCard key={game.id} game={game} />)}
      </div>
    </div>
  );
};

export default GameGrid;

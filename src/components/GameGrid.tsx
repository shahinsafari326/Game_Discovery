import type { GameQuery } from "../App";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";

interface GameGridProps {
  gameQuery: GameQuery;
}

const GameGrid = ({ gameQuery }: GameGridProps) => {
  const {
    data,
    isLoading,
    error,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
  } = useGames(gameQuery);
  // Create an array of size 20 skeletons for loading state

  // combine all games to one
  const games = data?.pages.flatMap((page) => page.results) ?? [];

  const skeletons = Array.from({ length: 20 }, (_, i) => i + 1);
  return (
    <div>
      {error && <p>Error fetching games: {error.message}</p>}

      <div className="grid gap-3 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
        {isLoading &&
          skeletons.map((skeleton) => <GameCardSkeleton key={skeleton} />)}
        {!isLoading &&
          games.map((game) => {
            console.log("total games", games.length);
            return <GameCard key={game.id} game={game} />;
          })}
      </div>
      <button
        className="mt-6 rounded-lg bg-blue-600 px-5 py-2 text-white font-medium 
             hover:bg-blue-700 disabled:cursor-not-allowed disabled:bg-gray-400"
        disabled={!hasNextPage || isFetchingNextPage}
        onClick={() => fetchNextPage()}
      >
        {isFetchingNextPage ? "Loading..." : "Load more"}
      </button>
    </div>
  );
};

export default GameGrid;

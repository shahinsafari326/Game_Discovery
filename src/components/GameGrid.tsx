import type { GameQuery } from "../App";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import InfiniteScroll from "react-infinite-scroll-component";
import { Spinner } from "./Spinner";

interface GameGridProps {
  gameQuery: GameQuery;
}

const GameGrid = ({ gameQuery }: GameGridProps) => {
  const { data, isLoading, error, fetchNextPage, hasNextPage } =
    useGames(gameQuery);
  // Create an array of size 20 skeletons for loading state

  // combine all games to one
  const games = data?.pages.flatMap((page) => page.results) ?? [];

  const skeletons = Array.from({ length: 20 }, (_, i) => i + 1);
  return (
    <InfiniteScroll
      dataLength={games.length}
      next={fetchNextPage}
      hasMore={hasNextPage}
      loader={<Spinner></Spinner>}
      endMessage={<p style={{ textAlign: "center" }}>All items loaded.</p>}
    >
      <div>
        {error && <p>Error fetching games: {error.message}</p>}

        <div className="grid gap-3 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {isLoading &&
            skeletons.map((skeleton) => <GameCardSkeleton key={skeleton} />)}
          {!isLoading &&
            games.map((game) => {
              console.log("total games", games.length);
              return <GameCard key={game.id} game={game} />;
            })}
        </div>
      </div>
    </InfiniteScroll>
  );
};

export default GameGrid;

import type { Game } from "../hooks/useGames";

interface GameCardsProps {
  game: Game;
}

const GameCards = ({ game }: GameCardsProps) => {
  return (
    <article className="overflow-hidden m-0.5 rounded-xl bg-zinc-800 shadow-lg transition hover:scale-105 hover:shadow-xl">
      <img src={game.background_image} className="h-48 w-full object-cover" />

      <div className="p-1">
        <h2 className="mb-1 text-md font-bold text-white">{game.name}</h2>
      </div>
    </article>
  );
};

export default GameCards;

import type { Game } from "../hooks/useGames";
import CriticScore from "./CriticScore";
import PlatformIconList from "./PlatformIconList";

interface GameCardsProps {
  game: Game;
}

export const CARD_IMAGE_SIZE = "h-48 w-full";

const GameCard = ({ game }: GameCardsProps) => {
  return (
    <article className="overflow-hidden m-0.5 rounded-xl bg-zinc-800 shadow-lg transition hover:scale-105 hover:shadow-xl">
      <img
        src={game.background_image}
        className={`${CARD_IMAGE_SIZE} object-cover`}
      />

      <div className="p-1">
        <h2 className="mb-1 text-md font-bold text-white">{game.name}</h2>
        <div className="flex justify-between gap-5">
          <PlatformIconList
            platforms={game.parent_platforms.map((p) => p.platform)}
          />
          <CriticScore score={game.metacritic} />
        </div>
      </div>
    </article>
  );
};

export default GameCard;

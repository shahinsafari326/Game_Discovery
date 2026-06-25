import { memo } from "react";
import type { Game } from "../hooks/useGames";
import CriticScore from "./CriticScore";
import PlatformIconList from "./PlatformIconList";

interface GameCardsProps {
  game: Game;
}

export const CARD_IMAGE_SIZE = "h-48 w-full";

const GameCard = ({ game }: GameCardsProps) => {
  return (
    <article
      className="
        overflow-hidden
        rounded-xl
        bg-zinc-800
        shadow-lg
        transform-gpu
        contain-content
        transition-shadow
        hover:shadow-xl
      "
    >
      {/* Stable image container prevents layout shift */}
      <div className="h-48 w-full overflow-hidden bg-zinc-700">
        <img
          src={game.background_image}
          alt={game.name}
          loading="lazy"
          decoding="async"
          className="h-full w-full object-cover"
        />
      </div>

      <div className="p-2">
        <h2 className="mb-1 line-clamp-2 text-md font-bold text-white">
          {game.name}
        </h2>

        <div className="flex items-center justify-between gap-5">
          <PlatformIconList
            platforms={game.parent_platforms.map((p) => p.platform)}
          />

          <CriticScore score={game.metacritic} />
        </div>
      </div>
    </article>
  );
};
export default memo(GameCard);

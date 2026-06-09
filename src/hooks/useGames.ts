import type { GameQuery } from "../App";
import useData from "./useData";

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

const useGames = (gameQuery: GameQuery) =>
   useData<Game>("/games", {
    params: {
        ...(gameQuery.genreId !== null && { genres: gameQuery.genreId }),
        ...(gameQuery.platformId !== null && { platforms: gameQuery.platformId }),
        ...(gameQuery.sortBy && { ordering: gameQuery.sortBy }),
        ...(gameQuery.searchText && { search: gameQuery.searchText }),
      },
   }, [gameQuery]);

export default useGames;
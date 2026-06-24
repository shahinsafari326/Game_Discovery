import { useQuery } from "@tanstack/react-query";
import type { GameQuery } from "../App";
import  { type FetchResponse } from "./useData";
import apiClient from "../services/api-client";
import type { Platform } from "./usePlatforms";


export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: {platform: Platform}[];
  metacritic: number;
}

const fetchGames = (gameQuery: GameQuery): Promise<Game []> =>
  apiClient.get<FetchResponse<Game>>("/games", {
    params: {
        ...(gameQuery.genreId !== null && { genres: gameQuery.genreId }),
        ...(gameQuery.platformId !== null && { parent_platforms: gameQuery.platformId }),
        ...(gameQuery.sortBy && { ordering: gameQuery.sortBy }),
        ...(gameQuery.searchText && { search: gameQuery.searchText }),
      },
  }).then((res) => res.data.results);

const useGames = (gameQuery: GameQuery) => useQuery<Game[], Error>({
  queryKey: ["games", gameQuery],
  queryFn: () => fetchGames(gameQuery),
  staleTime:5000

})


export default useGames;
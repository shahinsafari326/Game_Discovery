import { useQuery } from "@tanstack/react-query";
import type { GameQuery } from "../App";
import APIClient from "../services/api-client";
import type { Platform } from "./usePlatforms";

const apiClient = new APIClient ("/games");


export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: {platform: Platform}[];
  metacritic: number;
}


const useGames = (gameQuery: GameQuery) => useQuery<Game[], Error>({
  queryKey: ["games", gameQuery],
  queryFn: () => apiClient.getAll( {
    params: {
        ...(gameQuery.genreId !== null && { genres: gameQuery.genreId }),
        ...(gameQuery.platformId !== null && { parent_platforms: gameQuery.platformId }),
        ...(gameQuery.sortBy && { ordering: gameQuery.sortBy }),
        ...(gameQuery.searchText && { search: gameQuery.searchText }),
      },
  } ),
  staleTime:5000

})


export default useGames;
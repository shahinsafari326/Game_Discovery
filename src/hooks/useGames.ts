import { useInfiniteQuery } from "@tanstack/react-query";
import type { GameQuery } from "../App";
import APIClient from "../services/api-client";
import type { Platform } from "./usePlatforms";
import type { FetchResponse } from "../services/api-client";

const apiClient = new APIClient ("/games");


export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: {platform: Platform}[];
  metacritic: number;
}


const useGames = (gameQuery: GameQuery) => useInfiniteQuery<FetchResponse<Game>, Error>({
  queryKey: ["games", gameQuery],
  queryFn: ({pageParam}) => apiClient.getAll( {
    params: {
        page:pageParam,
        ...(gameQuery.genreId !== null && { genres: gameQuery.genreId }),
        ...(gameQuery.platformId !== null && { parent_platforms: gameQuery.platformId }),
        ...(gameQuery.sortBy && { ordering: gameQuery.sortBy }),
        ...(gameQuery.searchText && { search: gameQuery.searchText }),
        
      },
  } ),
  staleTime:50000,
  refetchOnWindowFocus: false,
  initialPageParam: 1,

  getNextPageParam: (lastPage, allPages) => {

      return lastPage.next ? allPages.length + 1: undefined;
  },

})


export default useGames;
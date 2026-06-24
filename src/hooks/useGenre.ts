import { useQuery } from "@tanstack/react-query";
import apiClient from "../services/api-client";
import genresData from "../data/GenresRawData";

export interface Genre {
    id: number;
    name: string;
    image_background: string;
}

interface GenreResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: Genre[];
}



const fetchGenres = (): Promise<Genre[]> =>

     apiClient
      .get<GenreResponse>("/genres")
      .then((response) => response.data.results);

const useGenres = () => {
 return useQuery<Genre[], Error>({
    queryKey: ["Genre"],
    queryFn: fetchGenres,
    staleTime: 3000 * 8 * 24,
    initialData:genresData,
  });
}
export default useGenres
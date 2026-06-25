import { useQuery } from "@tanstack/react-query";
import genresData from "../data/GenresRawData";
import APIClient from "../services/api-client";

const apiClient = new APIClient<Genre> ("/genres");

export interface Genre {
    id: number;
    name: string;
    image_background: string;
}

const useGenres = () => {
 return useQuery<Genre[], Error>({
    queryKey: ["Genre"],
    queryFn:apiClient.getAll,
    staleTime: 3000 * 8 * 24,
    initialData:genresData,
  });
}
export default useGenres
import { useQuery } from "@tanstack/react-query";
import { fetchData } from "../services/api-client";
import genresData from "../data/GenresRawData";

export interface Genre {
    id: number;
    name: string;
    image_background: string;
}

const useGenres = () => {
 return useQuery<Genre[], Error>({
    queryKey: ["Genre"],
    queryFn: () => fetchData("/genres"),
    staleTime: 3000 * 8 * 24,
    initialData:genresData,
  });
}
export default useGenres
import { useQuery } from "@tanstack/react-query";
import genresData from "../data/GenresRawData";
import APIClient, { type FetchResponse } from "../services/api-client";

const apiClient = new APIClient ("/genres");

export interface Genre {
    id: number;
    name: string;
    image_background: string;
}

const genresInitialData: FetchResponse<Genre> = {
  count: genresData.length,
  next: null,
  results: genresData
};

const useGenres = () => {
 return useQuery<FetchResponse<Genre>, Error>({
    queryKey: ["Genre"],
    queryFn: apiClient.getAll,
    staleTime: 3000 * 8 * 24,
    initialData:genresInitialData,
  });
}
export default useGenres
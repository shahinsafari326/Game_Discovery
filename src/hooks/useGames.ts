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

const useGames = (selectedGenreId: number | null, selectedPlatformId: number | null) =>
   useData<Game>("/games", {
    params: {
        ...(selectedGenreId !== null && { genres: selectedGenreId }),
        ...(selectedPlatformId !== null && { platforms: selectedPlatformId }),
      },
   }, [selectedGenreId, selectedPlatformId]);

export default useGames;
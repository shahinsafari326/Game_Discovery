import genresData from "../data/GenresRawData";

export interface Genre {
    id: number;
    name: string;
    image_background: string;
}

const useGenres = () => ({data: genresData, isLoading: false, error:null})

export default useGenres
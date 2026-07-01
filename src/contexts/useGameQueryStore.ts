import { create } from "zustand";
import { devtools } from "zustand/middleware";



interface GameQuery {
  genreId?: number
  platformId?: number | null;
  sortBy?: string | null;
  searchText?: string;

}

interface GameQueryStore{
    gameQuery: GameQuery ;
    setSearchText: (searchText: string) => void;
    setGenreId: (genreId:number) => void;
    setPlatformId: (platformId:number |null) => void;
    setSortOrder: (sortOrder:string | null) => void;

}


const useGameQueryStore = create<GameQueryStore>()(
    devtools(
        (set) => ({
            gameQuery: {},
            setSearchText: (searchText) =>
                set(() => ({ gameQuery: {searchText: searchText} })),
            setGenreId: (genreId) => set (currentState => ({gameQuery:{...currentState.gameQuery, genreId:genreId }})),
            setPlatformId: (platformId) => set (currentState => ({gameQuery: {...currentState.gameQuery, platformId: platformId}})),
            setSortOrder: (sortBy) => set (currentState => ({gameQuery:{...currentState.gameQuery, sortBy: sortBy}}))
            }),
        {
            name: "GameQueryStore",
        }
    )
);

export default useGameQueryStore;
import { useState } from "react";
import logo from "./assets/logo.png";
import GameGrid from "./components/GameGrid";
import GenresList from "./components/GenresList";
import NavBar from "./components/NavBar";
import PlatformSelector from "./components/PlatformSelector";
import SortSelector from "./components/SortSelector";

export interface GameQuery {
  genreId: number | null;
  platformId: number | null;
  sortBy: string | null;
  searchText: string | null;
}

function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

  const handleSelectGenre = (genreId: number) => {
    setGameQuery((prev) => ({ ...prev, genreId }));
  };

  const handleSelectPlatform = (platformId: number | null) => {
    setGameQuery((prev) => ({ ...prev, platformId }));
  };

  return (
    <div className="grid h-screen grid-rows-[80px_1fr]">
      <header className="p-4">
        <NavBar
          logoSrc={logo}
          onSearch={(searchText) =>
            setGameQuery((prev) => ({ ...prev, searchText }))
          }
        />
      </header>

      <div className="grid grid-cols-1 md:grid-cols-[190px_1fr]">
        <aside className="hidden md:block mt-4 p-4">
          <GenresList
            onSelectGenre={handleSelectGenre}
            selectedGenreId={gameQuery.genreId}
          />
        </aside>

        <main className="mt-4 p-4">
          <div className="flex gap-3 mb-4">
            <PlatformSelector onSelect={handleSelectPlatform} />
            <SortSelector
              onSelect={(sortBy) =>
                setGameQuery((prev) => ({ ...prev, sortBy }))
              }
            />
          </div>

          <GameGrid gameQuery={gameQuery} />
        </main>
      </div>
    </div>
  );
}
export default App;

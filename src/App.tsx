import { useState } from "react";
import logo from "./assets/logo.png";
import GameGrid from "./components/GameGrid";
import GenresList from "./components/GenresList";
import NavBar from "./components/NavBar";
import PlatformSelector from "./components/PlatformSelector";
import type { Platform } from "./hooks/usePlatforms";

function App() {
  const [selectedGenre, setSelectedGenre] = useState<number | null>(null);
  const [selectedPlatformId, setSelectedPlatformId] = useState<number | null>(
    null,
  );
  const handleSelectGenre = (genreId: number) => {
    setSelectedGenre(genreId);
  };

  const handleSelectPlatform = (platformId: number | null) => {
    setSelectedPlatformId(platformId);
  };

  return (
    <div className="grid h-screen grid-rows-[80px_1fr]">
      <header className="p-4">
        <NavBar logoSrc={logo} />
      </header>

      <div className="grid grid-cols-1 md:grid-cols-[190px_1fr]">
        <aside className="hidden md:block mt-4 p-4">
          <GenresList
            onSelectGenre={handleSelectGenre}
            selectedGenreId={selectedGenre}
          />
        </aside>

        <main className="mt-4 p-4">
          <PlatformSelector onSelect={handleSelectPlatform} />
          <GameGrid genreId={selectedGenre} platformId={selectedPlatformId} />
        </main>
      </div>
    </div>
  );
}
export default App;

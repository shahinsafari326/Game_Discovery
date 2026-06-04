import logo from "./assets/logo.png";
import GameGrid from "./components/GameGrid";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="grid h-screen grid-rows-[60px_1fr]">
      <header className="p-4">
        <NavBar logoSrc={logo} />
      </header>

      <div className="grid grid-cols-1 md:grid-cols-[150px_1fr]">
        <aside className="hidden md:block p-4">Sidebar</aside>

        <main className="mt-4 p-4">
          <GameGrid />
        </main>
      </div>
    </div>
  );
}
export default App;

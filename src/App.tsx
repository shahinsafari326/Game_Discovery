import logo from "./assets/logo.png";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="grid h-screen grid-rows-[60px_1fr]">
      {/* Navbar */}
      <header className=" p-4">
        <NavBar logoSrc={logo} />
      </header>

      {/* Content area */}
      <div className="grid grid-cols-[250px_1fr]">
        {/* Sidebar */}
        <aside className="hidden md:block  p-4">Sidebar</aside>

        {/* Main content */}
        <main className="p-4">Main Content</main>
      </div>
    </div>
  );
}
export default App;

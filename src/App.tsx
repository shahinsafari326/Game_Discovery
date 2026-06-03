function App() {
  return (
    <div className="grid h-screen grid-rows-[60px_1fr]">
      {/* Navbar */}
      <header className="border-b p-4">Navigation</header>

      {/* Content area */}
      <div className="grid grid-cols-[250px_1fr]">
        {/* Sidebar */}
        <aside className="hidden md:block border-r p-4">Sidebar</aside>

        {/* Main content */}
        <main className="p-4">Main Content</main>
      </div>
    </div>
  );
}
export default App;

type NavbarProps = {
  logoSrc: string;
};

function NavBar({ logoSrc }: NavbarProps) {
  return (
    <nav className="flex h-16 items-center bg-zinc-900 px-4 text-white">
      <div className="flex items-center gap-3">
        <img
          src={logoSrc}
          alt="Game Discover Logo"
          className="h-10 w-10 object-contain"
        />

        <span className="text-xl font-bold">Game Discover</span>
      </div>
    </nav>
  );
}

export default NavBar;
